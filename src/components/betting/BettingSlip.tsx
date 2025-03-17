import React, { useState } from 'react';
import Button from '../ui/Button';

interface BetItem {
  id: string;
  matchup: string;
  selection: string;
  odds: number;
  stake: number;
}

interface BettingSlipProps {
  bets: BetItem[];
  onRemoveBet: (id: string) => void;
  onClearAll: () => void;
  onPlaceBets: () => void;
}

export default function BettingSlip({
  bets,
  onRemoveBet,
  onClearAll,
  onPlaceBets,
}: BettingSlipProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  
  const totalStake = bets.reduce((sum, bet) => sum + bet.stake, 0);
  const totalPotentialWinnings = bets.reduce((sum, bet) => sum + (bet.stake * bet.odds), 0);
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
      <div 
        className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="font-medium text-lg">Betting Slip ({bets.length})</h3>
        <button className="text-gray-500 hover:text-gray-700">
          {isExpanded ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>
      
      {isExpanded && (
        <>
          {bets.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              <p>Your betting slip is empty</p>
              <p className="text-sm mt-2">Select odds to add bets</p>
            </div>
          ) : (
            <>
              <div className="p-4 max-h-80 overflow-y-auto space-y-4">
                {bets.map((bet) => (
                  <div 
                    key={bet.id} 
                    className="p-3 bg-gray-50 dark:bg-gray-700 rounded border border-gray-200 dark:border-gray-600"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">{bet.matchup}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{bet.selection}</p>
                      </div>
                      <button 
                        className="text-gray-400 hover:text-red-500"
                        onClick={() => onRemoveBet(bet.id)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="text-sm">
                        <span className="text-gray-600 dark:text-gray-300">Odds: </span>
                        <span className="font-medium">{bet.odds.toFixed(2)}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-600 dark:text-gray-300">Stake: </span>
                        <span className="font-medium">${bet.stake.toFixed(2)}</span>
                      </div>
                    </div>
                    <div className="text-sm text-right mt-1">
                      <span className="text-gray-600 dark:text-gray-300">To win: </span>
                      <span className="font-medium">${(bet.stake * bet.odds).toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Total Stake:</span>
                  <span className="font-medium">${totalStake.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Potential Winnings:</span>
                  <span className="font-medium text-green-600">${totalPotentialWinnings.toFixed(2)}</span>
                </div>
                
                <div className="flex space-x-2 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={onClearAll}
                  >
                    Clear All
                  </Button>
                  <Button 
                    variant="primary" 
                    size="sm" 
                    fullWidth
                    onClick={onPlaceBets}
                  >
                    Place Bets
                  </Button>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
