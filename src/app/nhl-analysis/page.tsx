'use client';

import { useState, useEffect } from 'react';
import { NHLAnalysis } from '@/types/nhl';
import Card from '@/components/ui/Card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs';

export default function NHLAnalysisPage() {
  const [analysisData, setAnalysisData] = useState<NHLAnalysis | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('teams');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/nhl');
        
        if (!response.ok) {
          throw new Error('Failed to fetch NHL analysis data');
        }
        
        const result = await response.json();
        setAnalysisData(result.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur s\'est produite');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Erreur!</strong>
          <p className="block sm:inline"> {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        Analyse NHL
      </h1>
      
      <Tabs defaultValue="teams" onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="teams" className="bg-white py-2 px-4 rounded-lg hover:bg-gray-100">Équipes</TabsTrigger>
          <TabsTrigger value="players" className="bg-white py-2 px-4 rounded-lg hover:bg-gray-100">Joueurs</TabsTrigger>
          <TabsTrigger value="matchups" className="bg-white py-2 px-4 rounded-lg hover:bg-gray-100">Matchs à Venir</TabsTrigger>
        </TabsList>
        
        {analysisData && (
          <>
            <TabsContent value="teams" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {analysisData.teamAnalysis.map((team) => (
                  <Card key={team.teamId} className="p-6 hover:shadow-lg transition-shadow">
                    <h2 className="text-xl font-bold mb-4">{team.teamName}</h2>
                    
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold mb-2">Forces</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {team.strengthsAndWeaknesses.strengths.map((strength, idx) => (
                          <li key={idx} className="text-sm">{strength}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold mb-2">Faiblesses</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {team.strengthsAndWeaknesses.weaknesses.map((weakness, idx) => (
                          <li key={idx} className="text-sm">{weakness}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold mb-2">Forme Récente</h3>
                      <p className="text-sm">{team.recentForm}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-xs text-blue-500 font-medium">Chances Playoffs</p>
                        <p className="text-2xl font-bold">{team.playoffChances}%</p>
                      </div>
                      <div className="bg-indigo-50 p-3 rounded-lg">
                        <p className="text-xs text-indigo-500 font-medium">Difficulté Calendrier</p>
                        <p className="text-lg font-bold">{team.upcomingScheduleDifficulty === 'Easy' ? 'Facile' : team.upcomingScheduleDifficulty === 'Moderate' ? 'Modéré' : 'Difficile'}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold mb-2">Statistiques Clés</h3>
                      <div className="space-y-2">
                        {team.keyStats.map((stat, idx) => (
                          <div key={idx} className="flex justify-between items-center">
                            <span className="text-sm">{stat.stat}</span>
                            <div className="flex items-center">
                              <span className="font-medium">{stat.value}</span>
                              <span className="text-xs ml-2 text-gray-500">#{stat.league_rank} NHL</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="players" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {analysisData.playerAnalysis.map((player) => (
                  <Card key={player.playerId} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h2 className="text-xl font-bold">{player.playerName}</h2>
                        <p className="text-sm text-gray-600">{player.teamName}</p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        player.fantasyValue === 'High' ? 'bg-green-100 text-green-800' : 
                        player.fantasyValue === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        Valeur Fantasy: {player.fantasyValue === 'High' ? 'Élevée' : player.fantasyValue === 'Medium' ? 'Moyenne' : 'Faible'}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold mb-2">Performance</h3>
                      <p className="text-sm">{player.performance}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold mb-2">Comparaison avec la Moyenne de la Ligue</h3>
                      <div className="space-y-3">
                        {player.comparisonToLeagueAverage.map((stat, idx) => (
                          <div key={idx}>
                            <div className="flex justify-between text-sm mb-1">
                              <span>{stat.stat}</span>
                              <span className="font-medium">{stat.playerValue}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div 
                                className="bg-blue-600 h-2.5 rounded-l-full" 
                                style={{ width: `${Math.min(100, (stat.playerValue / stat.leagueAverage) * 50)}%` }}
                              ></div>
                            </div>
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                              <span>Moyenne: {stat.leagueAverage}</span>
                              <span className={stat.percentDifference > 0 ? 'text-green-600' : 'text-red-600'}>
                                {stat.percentDifference > 0 ? '+' : ''}{stat.percentDifference.toFixed(1)}%
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Projections</h3>
                      <div className="grid grid-cols-3 gap-2">
                        {player.projectedStats.map((stat, idx) => (
                          <div key={idx} className="bg-gray-50 p-2 rounded-lg text-center">
                            <p className="text-xs text-gray-500">{stat.stat}</p>
                            <p className="text-lg font-bold">{stat.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="matchups" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {analysisData.matchupAnalysis.map((matchup) => (
                  <Card key={matchup.gameId} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <h2 className="text-xl font-bold">{matchup.homeTeam} vs {matchup.awayTeam}</h2>
                        <p className="text-sm text-gray-600">
                          {new Date(matchup.date).toLocaleDateString('fr-FR', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">Prédiction</h3>
                      <div className="flex items-center mb-4">
                        <div className="w-full bg-gray-200 rounded-full h-4">
                          <div 
                            className="bg-blue-600 h-4 rounded-l-full" 
                            style={{ width: `${matchup.predictionModel.homeTeamWinProbability * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <div className="text-center">
                          <p className="font-medium">{matchup.homeTeam}</p>
                          <p className="text-lg font-bold">{(matchup.predictionModel.homeTeamWinProbability * 100).toFixed(0)}%</p>
                        </div>
                        <div className="text-center">
                          <p className="font-medium">Match Nul</p>
                          <p className="text-lg font-bold">{(matchup.predictionModel.drawProbability * 100).toFixed(0)}%</p>
                        </div>
                        <div className="text-center">
                          <p className="font-medium">{matchup.awayTeam}</p>
                          <p className="text-lg font-bold">{(matchup.predictionModel.awayTeamWinProbability * 100).toFixed(0)}%</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2">Score Prédit</h3>
                      <div className="flex justify-center items-center space-x-4">
                        <div className="text-center">
                          <p className="text-sm text-gray-600">{matchup.homeTeam}</p>
                          <p className="text-3xl font-bold">{matchup.predictionModel.predictedScore.home.toFixed(1)}</p>
                        </div>
                        <span className="text-xl font-light">-</span>
                        <div className="text-center">
                          <p className="text-sm text-gray-600">{matchup.awayTeam}</p>
                          <p className="text-3xl font-bold">{matchup.predictionModel.predictedScore.away.toFixed(1)}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2">Facteurs Clés</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {matchup.predictionModel.keyFactors.map((factor, idx) => (
                          <li key={idx} className="text-sm">{factor}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Conseils de Paris</h3>
                      <div className="space-y-3">
                        {matchup.bettingInsights.recommendedBets.map((bet, idx) => (
                          <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <div>
                              <p className="text-xs text-gray-500">{bet.type}</p>
                              <p className="font-medium">{bet.description}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-lg font-bold">{bet.odds}</p>
                              <p className={`text-xs ${
                                bet.confidence === 'High' ? 'text-green-600' : 
                                bet.confidence === 'Medium' ? 'text-yellow-600' : 
                                'text-red-600'
                              }`}>
                                Confiance: {bet.confidence === 'High' ? 'Élevée' : bet.confidence === 'Medium' ? 'Moyenne' : 'Faible'}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </>
        )}
      </Tabs>
    </div>
  );
}
