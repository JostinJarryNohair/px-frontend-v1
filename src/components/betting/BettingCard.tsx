import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

interface Team {
  name: string;
  logo?: string;
  odds: number;
}

interface BettingCardProps {
  id: string;
  league: string;
  homeTeam: Team;
  awayTeam: Team;
  matchTime: string;
  isLive?: boolean;
  liveScore?: {
    home: number;
    away: number;
  };
  onPlaceBet?: (betInfo: {
    id: string;
    team: string;
    odds: number;
    stake: number;
  }) => void;
}

export default function BettingCard({
  id,
  league,
  homeTeam,
  awayTeam,
  matchTime,
  isLive = false,
  liveScore,
  onPlaceBet,
}: BettingCardProps) {
  const [selectedTeam, setSelectedTeam] = useState<'home' | 'away' | 'draw' | null>(null);
  const [stake, setStake] = useState<number>(10);
  
  const handleTeamSelect = (team: 'home' | 'away' | 'draw') => {
    setSelectedTeam(team);
  };
  
  const handleStakeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStake(Number(e.target.value));
  };
  
  const handlePlaceBet = () => {
    if (!selectedTeam) return;
    
    const teamName = selectedTeam === 'home' 
      ? homeTeam.name 
      : selectedTeam === 'away' 
        ? awayTeam.name 
        : 'Draw';
    
    const odds = selectedTeam === 'home' 
      ? homeTeam.odds 
      : selectedTeam === 'away' 
        ? awayTeam.odds 
        : 3.25; // Default draw odds
    
    onPlaceBet?.({
      id,
      team: teamName,
      odds,
      stake,
    });
  };
  
  // Calculate potential winnings
  const selectedOdds = selectedTeam === 'home' 
    ? homeTeam.odds 
    : selectedTeam === 'away' 
      ? awayTeam.odds 
      : selectedTeam === 'draw' 
        ? 3.25 
        : 0;
  
  const potentialWinnings = selectedOdds * stake;
  
  return (
    <Card className="shadow-md">
      <CardHeader className="bg-gray-50 dark:bg-gray-900 flex justify-between items-center">
        <div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{league}</span>
          <p className="text-sm text-gray-500 dark:text-gray-400">{matchTime}</p>
        </div>
        {isLive && (
          <Badge variant="danger" size="sm" className="animate-pulse">
            LIVE
          </Badge>
        )}
      </CardHeader>
      
      <CardBody>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            {homeTeam.logo && (
              <div className="w-8 h-8 flex-shrink-0">
                <img src={homeTeam.logo} alt={homeTeam.name} className="w-full h-full object-contain" />
              </div>
            )}
            <span className="font-medium">{homeTeam.name}</span>
            {isLive && liveScore && (
              <span className="font-bold text-lg ml-2">{liveScore.home}</span>
            )}
          </div>
          
          <button
            className={`px-4 py-2 rounded border ${
              selectedTeam === 'home'
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
            onClick={() => handleTeamSelect('home')}
          >
            {homeTeam.odds.toFixed(2)}
          </button>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-center w-full font-medium">Draw</span>
          <button
            className={`px-4 py-2 rounded border ${
              selectedTeam === 'draw'
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
            onClick={() => handleTeamSelect('draw')}
          >
            3.25
          </button>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {awayTeam.logo && (
              <div className="w-8 h-8 flex-shrink-0">
                <img src={awayTeam.logo} alt={awayTeam.name} className="w-full h-full object-contain" />
              </div>
            )}
            <span className="font-medium">{awayTeam.name}</span>
            {isLive && liveScore && (
              <span className="font-bold text-lg ml-2">{liveScore.away}</span>
            )}
          </div>
          
          <button
            className={`px-4 py-2 rounded border ${
              selectedTeam === 'away'
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
            onClick={() => handleTeamSelect('away')}
          >
            {awayTeam.odds.toFixed(2)}
          </button>
        </div>
      </CardBody>
      
      {selectedTeam && (
        <CardFooter className="bg-gray-50 dark:bg-gray-900">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label htmlFor={`stake-${id}`} className="text-sm font-medium">
                Stake ($):
              </label>
              <input
                id={`stake-${id}`}
                type="number"
                min="1"
                value={stake}
                onChange={handleStakeChange}
                className="w-24 px-3 py-1 border border-gray-300 rounded text-right"
              />
            </div>
            
            <div className="flex justify-between items-center text-sm">
              <span>Potential winnings:</span>
              <span className="font-medium">${potentialWinnings.toFixed(2)}</span>
            </div>
            
            <Button 
              variant="primary" 
              fullWidth 
              onClick={handlePlaceBet}
            >
              Place Bet
            </Button>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
