import { useState, useEffect } from 'react';

// Define types for our betting data
export interface Team {
  id: string;
  name: string;
  logo?: string;
}

export interface Match {
  id: string;
  league: string;
  homeTeam: Team;
  awayTeam: Team;
  matchTime: string;
  homeOdds: number;
  drawOdds: number;
  awayOdds: number;
  isLive?: boolean;
  liveScore?: {
    home: number;
    away: number;
  };
}

export interface BetSlip {
  id: string;
  matchId: string;
  matchup: string;
  selection: 'home' | 'away' | 'draw';
  teamName: string;
  odds: number;
  stake: number;
}

// Mock data for development
const mockMatches: Match[] = [
  {
    id: '1',
    league: 'Premier League',
    homeTeam: {
      id: 'team1',
      name: 'Arsenal',
    },
    awayTeam: {
      id: 'team2',
      name: 'Chelsea',
    },
    matchTime: '2025-03-15T15:00:00Z',
    homeOdds: 2.1,
    drawOdds: 3.25,
    awayOdds: 3.5,
  },
  {
    id: '2',
    league: 'La Liga',
    homeTeam: {
      id: 'team3',
      name: 'Barcelona',
    },
    awayTeam: {
      id: 'team4',
      name: 'Real Madrid',
    },
    matchTime: '2025-03-15T20:00:00Z',
    homeOdds: 1.9,
    drawOdds: 3.5,
    awayOdds: 4.0,
  },
  {
    id: '3',
    league: 'Serie A',
    homeTeam: {
      id: 'team5',
      name: 'Juventus',
    },
    awayTeam: {
      id: 'team6',
      name: 'Inter Milan',
    },
    matchTime: '2025-03-16T14:00:00Z',
    homeOdds: 2.4,
    drawOdds: 3.1,
    awayOdds: 3.0,
  },
  {
    id: '4',
    league: 'Bundesliga',
    homeTeam: {
      id: 'team7',
      name: 'Bayern Munich',
    },
    awayTeam: {
      id: 'team8',
      name: 'Borussia Dortmund',
    },
    matchTime: '2025-03-16T17:30:00Z',
    homeOdds: 1.7,
    drawOdds: 3.8,
    awayOdds: 4.5,
  },
  {
    id: '5',
    league: 'Ligue 1',
    homeTeam: {
      id: 'team9',
      name: 'PSG',
    },
    awayTeam: {
      id: 'team10',
      name: 'Marseille',
    },
    matchTime: '2025-03-16T20:00:00Z',
    homeOdds: 1.5,
    drawOdds: 4.2,
    awayOdds: 6.0,
  },
  {
    id: '6',
    league: 'Premier League',
    homeTeam: {
      id: 'team11',
      name: 'Liverpool',
    },
    awayTeam: {
      id: 'team12',
      name: 'Manchester City',
    },
    matchTime: '2025-03-15T12:30:00Z',
    homeOdds: 2.7,
    drawOdds: 3.3,
    awayOdds: 2.5,
    isLive: true,
    liveScore: {
      home: 1,
      away: 1,
    },
  },
];

export function useBettingData() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [betSlip, setBetSlip] = useState<BetSlip[]>([]);
  
  // Fetch matches data
  useEffect(() => {
    const fetchData = async () => {
      try {
        // In a real app, this would be an API call
        // For now, we'll use mock data
        setLoading(true);
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setMatches(mockMatches);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch matches data:', err);
        setError('Failed to fetch matches data');
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  // Add bet to slip
  const addToBetSlip = (
    matchId: string,
    selection: 'home' | 'away' | 'draw',
    stake: number = 10
  ) => {
    const match = matches.find(m => m.id === matchId);
    if (!match) return;
    
    // Check if bet already exists in slip
    const existingBetIndex = betSlip.findIndex(
      bet => bet.matchId === matchId && bet.selection === selection
    );
    
    if (existingBetIndex !== -1) {
      // Update existing bet
      const updatedBetSlip = [...betSlip];
      updatedBetSlip[existingBetIndex].stake = stake;
      setBetSlip(updatedBetSlip);
      return;
    }
    
    // Get team name and odds based on selection
    let teamName = '';
    let odds = 0;
    
    if (selection === 'home') {
      teamName = match.homeTeam.name;
      odds = match.homeOdds;
    } else if (selection === 'away') {
      teamName = match.awayTeam.name;
      odds = match.awayOdds;
    } else {
      teamName = 'Draw';
      odds = match.drawOdds;
    }
    
    // Create matchup string
    const matchup = `${match.homeTeam.name} vs ${match.awayTeam.name}`;
    
    // Add new bet to slip
    const newBet: BetSlip = {
      id: `${matchId}-${selection}-${Date.now()}`,
      matchId,
      matchup,
      selection,
      teamName,
      odds,
      stake,
    };
    
    setBetSlip(prev => [...prev, newBet]);
  };
  
  // Remove bet from slip
  const removeFromBetSlip = (betId: string) => {
    setBetSlip(prev => prev.filter(bet => bet.id !== betId));
  };
  
  // Clear bet slip
  const clearBetSlip = () => {
    setBetSlip([]);
  };
  
  // Update bet stake
  const updateBetStake = (betId: string, stake: number) => {
    setBetSlip(prev =>
      prev.map(bet =>
        bet.id === betId ? { ...bet, stake } : bet
      )
    );
  };
  
  // Calculate total stake
  const totalStake = betSlip.reduce((sum, bet) => sum + bet.stake, 0);
  
  // Calculate potential winnings
  const potentialWinnings = betSlip.reduce(
    (sum, bet) => sum + bet.stake * bet.odds,
    0
  );
  
  return {
    matches,
    loading,
    error,
    betSlip,
    totalStake,
    potentialWinnings,
    addToBetSlip,
    removeFromBetSlip,
    clearBetSlip,
    updateBetStake,
  };
}
