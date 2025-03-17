/**
 * Utility functions for the sports betting platform
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names with tailwind merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a number as currency
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

/**
 * Format a date string
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

/**
 * Calculate potential winnings from a bet
 */
export function calculateWinnings(stake: number, odds: number): number {
  return stake * odds;
}

/**
 * Calculate the return on investment (ROI)
 */
export function calculateROI(totalWinnings: number, totalStake: number): number {
  if (totalStake === 0) return 0;
  return ((totalWinnings - totalStake) / totalStake) * 100;
}

/**
 * Generate a unique ID
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

/**
 * Truncate text with ellipsis if it exceeds the specified length
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

/**
 * Odds format type
 */
export type OddsFormat = 'decimal' | 'fractional' | 'american';

/**
 * Parse odds from different formats (decimal, fractional, American)
 */
export function parseOdds(odds: string | number, format: OddsFormat = 'decimal'): number {
  if (typeof odds === 'number') return odds;
  
  const oddsStr = odds.trim();
  
  if (format === 'decimal') {
    return parseFloat(oddsStr);
  } else if (format === 'fractional') {
    if (oddsStr.includes('/')) {
      const [numerator, denominator] = oddsStr.split('/').map(Number);
      return numerator / denominator + 1;
    }
    return 0;
  } else if (format === 'american') {
    const oddsNum = parseInt(oddsStr, 10);
    if (oddsNum > 0) {
      return oddsNum / 100 + 1;
    } else if (oddsNum < 0) {
      return 100 / Math.abs(oddsNum) + 1;
    }
  }
  
  return 0;
}

/**
 * Convert odds between different formats
 */
export function convertOdds(
  odds: number,
  fromFormat: OddsFormat,
  toFormat: OddsFormat
): string | number {
  // First convert to decimal if not already
  const decimalOdds = convertToDecimalOdds(odds, fromFormat);
  
  // Then convert from decimal to target format
  return convertFromDecimalOdds(decimalOdds, toFormat);
}

/**
 * Convert odds to decimal format
 */
function convertToDecimalOdds(odds: number, fromFormat: OddsFormat): number {
  if (fromFormat === 'decimal') {
    return odds;
  } else if (fromFormat === 'fractional') {
    const [numerator, denominator] = String(odds).split('/').map(Number);
    return numerator / denominator + 1;
  } else if (fromFormat === 'american') {
    if (odds > 0) {
      return odds / 100 + 1;
    } else {
      return 100 / Math.abs(odds) + 1;
    }
  }
  return odds;
}

/**
 * Convert from decimal odds to target format
 */
function convertFromDecimalOdds(decimalOdds: number, toFormat: OddsFormat): string | number {
  if (toFormat === 'decimal') {
    return decimalOdds;
  } else if (toFormat === 'fractional') {
    return convertToFractionalOdds(decimalOdds);
  } else if (toFormat === 'american') {
    return convertToAmericanOdds(decimalOdds);
  }
  return decimalOdds;
}

/**
 * Convert decimal odds to fractional format
 */
function convertToFractionalOdds(decimalOdds: number): string {
  const decimal = decimalOdds - 1;
  // Find a reasonable approximation for the fraction
  for (let denominator = 1; denominator <= 100; denominator++) {
    const numerator = Math.round(decimal * denominator);
    if (Math.abs(numerator / denominator - decimal) < 0.001) {
      return `${numerator}/${denominator}`;
    }
  }
  return `${Math.round(decimal * 100)}/${100}`;
}

/**
 * Convert decimal odds to American format
 */
function convertToAmericanOdds(decimalOdds: number): number {
  if (decimalOdds >= 2) {
    return Math.round((decimalOdds - 1) * 100);
  } else {
    return Math.round(-100 / (decimalOdds - 1));
  }
}

/**
 * Get a color based on the win probability
 */
export function getWinProbabilityColor(probability: number): string {
  if (probability >= 0.7) return 'text-green-600';
  if (probability >= 0.4) return 'text-yellow-600';
  return 'text-red-600';
}

/**
 * Format a probability as a percentage
 */
export function formatProbability(probability: number): string {
  return `${(probability * 100).toFixed(1)}%`;
}

/**
 * Calculate implied probability from odds
 */
export function calculateImpliedProbability(odds: number): number {
  return 1 / odds;
}

/**
 * Debounce function to limit the rate at which a function can fire
 */
export function debounce<T extends (...args: unknown[]) => ReturnType<T>>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return function(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}
