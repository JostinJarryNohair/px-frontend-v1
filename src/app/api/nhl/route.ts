import { NextResponse } from 'next/server';
import { nhlAnalysisData } from '@/data/nhlMockData';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const analysisType = searchParams.get('type');
  const id = searchParams.get('id');
  
  // Handle specific item requests (team, player, matchup)
  if (id && analysisType) {
    return getSpecificAnalysis(analysisType, id);
  }
  
  // Handle collection requests (teams, players, matchups)
  if (analysisType) {
    return getCollectionAnalysis(analysisType);
  }
  
  // Return all analysis data if no specific type requested
  return NextResponse.json({ data: nhlAnalysisData });
}

/**
 * Get analysis for a specific item by ID
 */
function getSpecificAnalysis(analysisType: string, id: string) {
  const itemId = parseInt(id);
  
  if (analysisType === 'team') {
    return getTeamAnalysis(itemId);
  } 
  else if (analysisType === 'player') {
    return getPlayerAnalysis(itemId);
  } 
  else if (analysisType === 'matchup') {
    return getMatchupAnalysis(itemId);
  }
  
  // If analysis type doesn't match any specific item type
  return getCollectionAnalysis(analysisType);
}

/**
 * Get analysis for a specific team
 */
function getTeamAnalysis(teamId: number) {
  const teamAnalysis = nhlAnalysisData.teamAnalysis.find(team => team.teamId === teamId);
  
  if (!teamAnalysis) {
    return NextResponse.json({ error: 'Team not found' }, { status: 404 });
  }
  
  return NextResponse.json({ data: teamAnalysis });
}

/**
 * Get analysis for a specific player
 */
function getPlayerAnalysis(playerId: number) {
  const playerAnalysis = nhlAnalysisData.playerAnalysis.find(player => player.playerId === playerId);
  
  if (!playerAnalysis) {
    return NextResponse.json({ error: 'Player not found' }, { status: 404 });
  }
  
  return NextResponse.json({ data: playerAnalysis });
}

/**
 * Get analysis for a specific matchup
 */
function getMatchupAnalysis(gameId: number) {
  const matchupAnalysis = nhlAnalysisData.matchupAnalysis.find(matchup => matchup.gameId === gameId);
  
  if (!matchupAnalysis) {
    return NextResponse.json({ error: 'Matchup not found' }, { status: 404 });
  }
  
  return NextResponse.json({ data: matchupAnalysis });
}

/**
 * Get analysis for a collection type
 */
function getCollectionAnalysis(analysisType: string) {
  if (analysisType === 'teams') {
    return NextResponse.json({ data: nhlAnalysisData.teamAnalysis });
  } 
  else if (analysisType === 'players') {
    return NextResponse.json({ data: nhlAnalysisData.playerAnalysis });
  } 
  else if (analysisType === 'matchups') {
    return NextResponse.json({ data: nhlAnalysisData.matchupAnalysis });
  }
  
  // Return all analysis data if type doesn't match any collection
  return NextResponse.json({ data: nhlAnalysisData });
}
