import React from 'react';
import { Card, CardHeader, CardBody } from '../ui/Card';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    isPositive: boolean;
  };
  icon?: React.ReactNode;
}

function StatCard({ title, value, change, icon }: StatCardProps) {
  return (
    <Card className="shadow-sm">
      <CardBody className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
            
            {change && (
              <div className="flex items-center mt-1">
                <span className={`text-sm font-medium ${change.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                  {change.isPositive ? '+' : ''}{change.value}%
                </span>
                <svg 
                  className={`h-4 w-4 ml-1 ${change.isPositive ? 'text-green-600' : 'text-red-600'}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d={change.isPositive 
                      ? "M5 10l7-7m0 0l7 7m-7-7v18" 
                      : "M19 14l-7 7m0 0l-7-7m7 7V3"} 
                  />
                </svg>
                <span className="text-xs text-gray-500 ml-1">vs last month</span>
              </div>
            )}
          </div>
          
          {icon && (
            <div className="p-3 bg-blue-100 rounded-full">
              {icon}
            </div>
          )}
        </div>
      </CardBody>
    </Card>
  );
}

interface BettingHistoryItem {
  id: string;
  date: string;
  event: string;
  selection: string;
  stake: number;
  odds: number;
  result: 'win' | 'loss' | 'pending';
}

interface AnalyticsDashboardProps {
  totalBets: number;
  winRate: number;
  totalWinnings: number;
  roi: number;
  bettingHistory: BettingHistoryItem[];
}

export default function AnalyticsDashboard({
  totalBets,
  winRate,
  totalWinnings,
  roi,
  bettingHistory,
}: AnalyticsDashboardProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Betting Performance</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Total Bets" 
          value={totalBets}
          change={{ value: 12.5, isPositive: true }}
          icon={
            <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          }
        />
        
        <StatCard 
          title="Win Rate" 
          value={`${winRate}%`}
          change={{ value: 3.2, isPositive: true }}
          icon={
            <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          }
        />
        
        <StatCard 
          title="Total Winnings" 
          value={`$${totalWinnings.toFixed(2)}`}
          change={{ value: 8.1, isPositive: true }}
          icon={
            <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
        
        <StatCard 
          title="ROI" 
          value={`${roi}%`}
          change={{ value: 1.5, isPositive: false }}
          icon={
            <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          }
        />
      </div>
      
      <div className="mt-8">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-medium">Recent Betting History</h3>
          </CardHeader>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Event
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Selection
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Stake
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Odds
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Result
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                {bettingHistory.map((bet) => (
                  <tr key={bet.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {bet.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {bet.event}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {bet.selection}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      ${bet.stake.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {bet.odds.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${bet.result === 'win' 
                          ? 'bg-green-100 text-green-800' 
                          : bet.result === 'loss' 
                            ? 'bg-red-100 text-red-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {bet.result.charAt(0).toUpperCase() + bet.result.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
