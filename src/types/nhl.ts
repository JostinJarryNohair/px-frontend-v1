export interface NHLTeam {
  id: number;
  name: string;
  abbreviation: string;
  conference: 'Eastern' | 'Western';
  division: string;
  logo?: string;
  stats: NHLTeamStats;
}

export interface NHLTeamStats {
  gamesPlayed: number;
  wins: number;
  losses: number;
  overtimeLosses: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifferential: number;
  homeRecord: string;
  awayRecord: string;
  lastTenGames: string;
  streak: string;
}

export interface NHLPlayer {
  id: number;
  name: string;
  position: string;
  teamId: number;
  teamName: string;
  stats: NHLPlayerStats;
}

export interface NHLPlayerStats {
  gamesPlayed: number;
  goals: number;
  assists: number;
  points: number;
  plusMinus: number;
  penaltyMinutes: number;
  powerPlayGoals: number;
  powerPlayPoints: number;
  shortHandedGoals: number;
  gameWinningGoals: number;
  shotPercentage: number;
  timeOnIcePerGame: string;
}

export interface NHLGame {
  id: number;
  date: string;
  homeTeam: {
    id: number;
    name: string;
    score: number;
  };
  awayTeam: {
    id: number;
    name: string;
    score: number;
  };
  status: 'Scheduled' | 'In Progress' | 'Final';
  period?: number;
  timeRemaining?: string;
  venue: string;
}

export interface NHLAnalysis {
  teamAnalysis: {
    teamId: number;
    teamName: string;
    strengthsAndWeaknesses: {
      strengths: string[];
      weaknesses: string[];
    };
    recentForm: string;
    injuryImpact: string;
    upcomingScheduleDifficulty: 'Easy' | 'Moderate' | 'Hard';
    playoffChances: number;
    keyStats: {
      stat: string;
      value: string | number;
      league_rank: number;
    }[];
  }[];
  playerAnalysis: {
    playerId: number;
    playerName: string;
    teamId: number;
    teamName: string;
    performance: string;
    comparisonToLeagueAverage: {
      stat: string;
      playerValue: number;
      leagueAverage: number;
      percentDifference: number;
    }[];
    projectedStats: {
      stat: string;
      value: number;
    }[];
    fantasyValue: 'Low' | 'Medium' | 'High';
  }[];
  matchupAnalysis: {
    gameId: number;
    homeTeam: string;
    awayTeam: string;
    date: string;
    predictionModel: {
      homeTeamWinProbability: number;
      awayTeamWinProbability: number;
      drawProbability: number;
      predictedScore: {
        home: number;
        away: number;
      };
      keyFactors: string[];
    };
    bettingInsights: {
      recommendedBets: {
        type: string;
        description: string;
        odds: number;
        confidence: 'Low' | 'Medium' | 'High';
      }[];
      valueOpportunities: string[];
    };
  }[];
}
