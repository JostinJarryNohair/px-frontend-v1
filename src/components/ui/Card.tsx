import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  bordered?: boolean;
}

export default function Card({
  children,
  className = '',
  hoverable = false,
  bordered = true,
}: CardProps) {
  const baseStyles = 'bg-white dark:bg-gray-800 rounded-lg overflow-hidden';
  const hoverStyles = hoverable ? 'transition-transform duration-300 hover:shadow-lg hover:-translate-y-1' : '';
  const borderStyles = bordered ? 'border border-gray-200 dark:border-gray-700' : '';
  
  return (
    <div className={`${baseStyles} ${hoverStyles} ${borderStyles} ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`px-6 py-4 border-b border-gray-200 dark:border-gray-700 ${className}`}>
      {children}
    </div>
  );
}

export function CardBody({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`px-6 py-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardFooter({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`px-6 py-4 border-t border-gray-200 dark:border-gray-700 ${className}`}>
      {children}
    </div>
  );
}
