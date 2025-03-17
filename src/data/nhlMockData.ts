import { NHLAnalysis } from '@/types/nhl';

export const nhlAnalysisData: NHLAnalysis = {
  teamAnalysis: [
    {
      teamId: 1,
      teamName: "Toronto Maple Leafs",
      strengthsAndWeaknesses: {
        strengths: [
          "Elite offensive talent with Matthews, Marner, and Tavares",
          "Strong power play conversion rate (26.5%)",
          "Excellent puck possession metrics (53.2% Corsi)"
        ],
        weaknesses: [
          "Inconsistent goaltending",
          "Defensive lapses in high-pressure situations",
          "Penalty kill needs improvement (79.8%)"
        ]
      },
      recentForm: "The Maple Leafs have won 7 of their last 10 games, showing improved defensive structure under their new system.",
      injuryImpact: "Missing their starting goaltender has forced them to rely on backup, affecting their goals against average.",
      upcomingScheduleDifficulty: "Moderate",
      playoffChances: 94.3,
      keyStats: [
        {
          stat: "Goals For",
          value: 3.6,
          league_rank: 3
        },
        {
          stat: "Power Play %",
          value: 26.5,
          league_rank: 5
        },
        {
          stat: "Shots Per Game",
          value: 33.2,
          league_rank: 2
        }
      ]
    },
    {
      teamId: 2,
      teamName: "Boston Bruins",
      strengthsAndWeaknesses: {
        strengths: [
          "League-leading penalty kill (86.7%)",
          "Strong defensive structure limiting high-danger chances",
          "Balanced scoring throughout lineup"
        ],
        weaknesses: [
          "Aging core players",
          "Lack of elite scoring talent",
          "Struggles against fast transition teams"
        ]
      },
      recentForm: "The Bruins have been inconsistent lately, going 5-4-1 in their last 10 games with concerns about offensive production.",
      injuryImpact: "Relatively healthy roster with only minor injuries to depth players.",
      upcomingScheduleDifficulty: "Hard",
      playoffChances: 91.2,
      keyStats: [
        {
          stat: "Goals Against",
          value: 2.4,
          league_rank: 2
        },
        {
          stat: "Penalty Kill %",
          value: 86.7,
          league_rank: 1
        },
        {
          stat: "Faceoff Win %",
          value: 54.1,
          league_rank: 3
        }
      ]
    },
    {
      teamId: 3,
      teamName: "Tampa Bay Lightning",
      strengthsAndWeaknesses: {
        strengths: [
          "Elite goaltending with Vasilevskiy",
          "Dangerous power play (25.8%)",
          "Strong veteran leadership core"
        ],
        weaknesses: [
          "Salary cap constraints limiting depth",
          "Aging defensive corps",
          "Inconsistent secondary scoring"
        ]
      },
      recentForm: "The Lightning have won 8 of their last 10 games, showing championship form as the playoffs approach.",
      injuryImpact: "Key defenseman out with long-term injury, forcing rookies into larger roles.",
      upcomingScheduleDifficulty: "Easy",
      playoffChances: 97.8,
      keyStats: [
        {
          stat: "Goals For",
          value: 3.5,
          league_rank: 4
        },
        {
          stat: "Save Percentage",
          value: ".921",
          league_rank: 2
        },
        {
          stat: "Power Play %",
          value: 25.8,
          league_rank: 6
        }
      ]
    },
    {
      teamId: 4,
      teamName: "Colorado Avalanche",
      strengthsAndWeaknesses: {
        strengths: [
          "Elite skating and transition game",
          "Dominant top line with MacKinnon",
          "Mobile, puck-moving defense"
        ],
        weaknesses: [
          "Goaltending inconsistency",
          "Depth scoring beyond top line",
          "Physical matchups against heavy teams"
        ]
      },
      recentForm: "The Avalanche have been dominant, going 9-1-0 in their last 10 with their offense firing on all cylinders.",
      injuryImpact: "Fully healthy roster for the first time this season, contributing to recent success.",
      upcomingScheduleDifficulty: "Moderate",
      playoffChances: 99.2,
      keyStats: [
        {
          stat: "Goals For",
          value: 3.9,
          league_rank: 1
        },
        {
          stat: "Shots Per Game",
          value: 34.1,
          league_rank: 1
        },
        {
          stat: "5v5 Expected Goals %",
          value: 56.3,
          league_rank: 2
        }
      ]
    },
    {
      teamId: 5,
      teamName: "Vegas Golden Knights",
      strengthsAndWeaknesses: {
        strengths: [
          "Balanced scoring across all four lines",
          "Strong defensive structure",
          "Excellent home ice advantage"
        ],
        weaknesses: [
          "Salary cap issues limiting flexibility",
          "Inconsistent special teams",
          "Goaltending injuries"
        ]
      },
      recentForm: "The Golden Knights have been average lately, going 5-3-2 in their last 10 games while managing several injuries.",
      injuryImpact: "Missing two top-six forwards, forcing lineup shuffling and affecting offensive chemistry.",
      upcomingScheduleDifficulty: "Hard",
      playoffChances: 88.5,
      keyStats: [
        {
          stat: "Goals For",
          value: 3.3,
          league_rank: 8
        },
        {
          stat: "Hits Per Game",
          value: 24.7,
          league_rank: 5
        },
        {
          stat: "Blocked Shots",
          value: 16.2,
          league_rank: 3
        }
      ]
    }
  ],
  playerAnalysis: [
    {
      playerId: 101,
      playerName: "Auston Matthews",
      teamId: 1,
      teamName: "Toronto Maple Leafs",
      performance: "Matthews is on pace for another 60-goal season, showing improved defensive responsibility while maintaining elite scoring.",
      comparisonToLeagueAverage: [
        {
          stat: "Goals",
          playerValue: 51,
          leagueAverage: 16.3,
          percentDifference: 212.9
        },
        {
          stat: "Shots",
          playerValue: 289,
          leagueAverage: 132.4,
          percentDifference: 118.3
        },
        {
          stat: "Shooting %",
          playerValue: 17.6,
          leagueAverage: 9.8,
          percentDifference: 79.6
        }
      ],
      projectedStats: [
        {
          stat: "Goals",
          value: 63
        },
        {
          stat: "Assists",
          value: 42
        },
        {
          stat: "Points",
          value: 105
        }
      ],
      fantasyValue: "High"
    },
    {
      playerId: 102,
      playerName: "Nathan MacKinnon",
      teamId: 4,
      teamName: "Colorado Avalanche",
      performance: "MacKinnon is having a career year, dominating games with his speed and skill while showing improved leadership.",
      comparisonToLeagueAverage: [
        {
          stat: "Points",
          playerValue: 98,
          leagueAverage: 42.1,
          percentDifference: 132.8
        },
        {
          stat: "Assists",
          playerValue: 67,
          leagueAverage: 25.8,
          percentDifference: 159.7
        },
        {
          stat: "Time on Ice",
          playerValue: 22.5,
          leagueAverage: 16.8,
          percentDifference: 33.9
        }
      ],
      projectedStats: [
        {
          stat: "Goals",
          value: 46
        },
        {
          stat: "Assists",
          value: 82
        },
        {
          stat: "Points",
          value: 128
        }
      ],
      fantasyValue: "High"
    },
    {
      playerId: 103,
      playerName: "Andrei Vasilevskiy",
      teamId: 3,
      teamName: "Tampa Bay Lightning",
      performance: "After a slow start, Vasilevskiy has returned to elite form, posting a .935 save percentage over his last 20 games.",
      comparisonToLeagueAverage: [
        {
          stat: "Save %",
          playerValue: 0.921,
          leagueAverage: 0.908,
          percentDifference: 1.4
        },
        {
          stat: "Goals Against Average",
          playerValue: 2.24,
          leagueAverage: 2.92,
          percentDifference: -23.3
        },
        {
          stat: "Wins",
          playerValue: 32,
          leagueAverage: 18.4,
          percentDifference: 73.9
        }
      ],
      projectedStats: [
        {
          stat: "Wins",
          value: 38
        },
        {
          stat: "Save %",
          value: 0.923
        },
        {
          stat: "Shutouts",
          value: 6
        }
      ],
      fantasyValue: "High"
    },
    {
      playerId: 104,
      playerName: "Charlie McAvoy",
      teamId: 2,
      teamName: "Boston Bruins",
      performance: "McAvoy has emerged as a complete defenseman, excelling in all situations while logging heavy minutes against top competition.",
      comparisonToLeagueAverage: [
        {
          stat: "Time on Ice",
          playerValue: 24.8,
          leagueAverage: 19.2,
          percentDifference: 29.2
        },
        {
          stat: "Points (Defensemen)",
          playerValue: 42,
          leagueAverage: 28.3,
          percentDifference: 48.4
        },
        {
          stat: "Plus/Minus",
          playerValue: 26,
          leagueAverage: 2.1,
          percentDifference: 1138.1
        }
      ],
      projectedStats: [
        {
          stat: "Goals",
          value: 12
        },
        {
          stat: "Assists",
          value: 44
        },
        {
          stat: "Points",
          value: 56
        }
      ],
      fantasyValue: "Medium"
    },
    {
      playerId: 105,
      playerName: "Mark Stone",
      teamId: 5,
      teamName: "Vegas Golden Knights",
      performance: "Stone continues to be one of the league's best two-way forwards, excelling defensively while producing at nearly a point-per-game pace.",
      comparisonToLeagueAverage: [
        {
          stat: "Takeaways",
          playerValue: 78,
          leagueAverage: 32.6,
          percentDifference: 139.3
        },
        {
          stat: "Points",
          playerValue: 64,
          leagueAverage: 42.1,
          percentDifference: 52.0
        },
        {
          stat: "Plus/Minus",
          playerValue: 18,
          leagueAverage: 2.1,
          percentDifference: 757.1
        }
      ],
      projectedStats: [
        {
          stat: "Goals",
          value: 22
        },
        {
          stat: "Assists",
          value: 52
        },
        {
          stat: "Points",
          value: 74
        }
      ],
      fantasyValue: "Medium"
    }
  ],
  matchupAnalysis: [
    {
      gameId: 1001,
      homeTeam: "Toronto Maple Leafs",
      awayTeam: "Boston Bruins",
      date: "2025-03-18T19:00:00Z",
      predictionModel: {
        homeTeamWinProbability: 0.52,
        awayTeamWinProbability: 0.43,
        drawProbability: 0.05,
        predictedScore: {
          home: 3.2,
          away: 2.8
        },
        keyFactors: [
          "Toronto's power play advantage",
          "Boston's recent struggles against high-scoring teams",
          "Historical matchup trends favor Toronto at home"
        ]
      },
      bettingInsights: {
        recommendedBets: [
          {
            type: "Moneyline",
            description: "Toronto Maple Leafs to win",
            odds: 1.85,
            confidence: "Medium"
          },
          {
            type: "Total",
            description: "Over 5.5 goals",
            odds: 1.95,
            confidence: "High"
          },
          {
            type: "Player Prop",
            description: "Auston Matthews anytime goalscorer",
            odds: 1.75,
            confidence: "High"
          }
        ],
        valueOpportunities: [
          "The over 5.5 goals line appears to offer value based on recent scoring trends for both teams",
          "Boston +1.5 puck line at 1.45 offers security with reasonable value"
        ]
      }
    },
    {
      gameId: 1002,
      homeTeam: "Colorado Avalanche",
      awayTeam: "Vegas Golden Knights",
      date: "2025-03-19T21:00:00Z",
      predictionModel: {
        homeTeamWinProbability: 0.58,
        awayTeamWinProbability: 0.37,
        drawProbability: 0.05,
        predictedScore: {
          home: 3.6,
          away: 2.7
        },
        keyFactors: [
          "Colorado's dominant home record",
          "Vegas's injury concerns affecting lineup depth",
          "Colorado's speed advantage on the larger ice surface"
        ]
      },
      bettingInsights: {
        recommendedBets: [
          {
            type: "Puck Line",
            description: "Colorado -1.5",
            odds: 2.35,
            confidence: "Medium"
          },
          {
            type: "Player Prop",
            description: "Nathan MacKinnon over 1.5 points",
            odds: 1.85,
            confidence: "High"
          },
          {
            type: "Period Betting",
            description: "Colorado to win 1st period",
            odds: 2.10,
            confidence: "Medium"
          }
        ],
        valueOpportunities: [
          "Colorado's team total over 3.5 goals at 2.05 offers value given their recent offensive output",
          "The under on Vegas team total goals could be valuable given Colorado's strong defensive metrics at home"
        ]
      }
    },
    {
      gameId: 1003,
      homeTeam: "Tampa Bay Lightning",
      awayTeam: "Toronto Maple Leafs",
      date: "2025-03-21T19:30:00Z",
      predictionModel: {
        homeTeamWinProbability: 0.49,
        awayTeamWinProbability: 0.46,
        drawProbability: 0.05,
        predictedScore: {
          home: 3.3,
          away: 3.2
        },
        keyFactors: [
          "Extremely close matchup between two elite offensive teams",
          "Tampa's slight edge in goaltending could be decisive",
          "Toronto's improved defensive structure has made them more competitive in these matchups"
        ]
      },
      bettingInsights: {
        recommendedBets: [
          {
            type: "Total",
            description: "Over 6.5 goals",
            odds: 2.10,
            confidence: "Medium"
          },
          {
            type: "Special",
            description: "Both teams to score 3+ goals",
            odds: 2.25,
            confidence: "Medium"
          },
          {
            type: "Game Flow",
            description: "Goal to be scored in first 10 minutes",
            odds: 1.65,
            confidence: "High"
          }
        ],
        valueOpportunities: [
          "The game to go to overtime at 3.75 offers value given how evenly matched these teams are",
          "Player props for top stars like Matthews and Kucherov offer value in what should be a high-scoring affair"
        ]
      }
    }
  ]
};
