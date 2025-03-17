'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <span className="text-xl font-bold tracking-wider">PredictionXpert</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors">
                  Accueil
                </Link>
                <Link href="/live-betting" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors">
                  Paris en Direct
                </Link>
                <Link href="/predictions" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors">
                  Prédictions
                </Link>
                <Link href="/nhl-analysis" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors">
                  Analyse NHL
                </Link>
                <Link href="/community" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors">
                  Communauté
                </Link>
                <Link href="/analytics" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors">
                  Analyses
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Se Connecter
              </button>
              <button className="ml-2 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                S&apos;inscrire
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-800 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Ouvrir le menu principal</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 transition-colors">
            Accueil
          </Link>
          <Link href="/live-betting" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 transition-colors">
            Paris en Direct
          </Link>
          <Link href="/predictions" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 transition-colors">
            Prédictions
          </Link>
          <Link href="/nhl-analysis" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 transition-colors">
            Analyse NHL
          </Link>
          <Link href="/community" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 transition-colors">
            Communauté
          </Link>
          <Link href="/analytics" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 transition-colors">
            Analyses
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-blue-800">
          <div className="px-2 space-y-1">
            <button className="w-full text-left block px-3 py-2 rounded-md text-base font-medium bg-blue-600 hover:bg-blue-700 transition-colors">
              Se Connecter
            </button>
            <button className="w-full text-left block px-3 py-2 rounded-md text-base font-medium bg-indigo-600 hover:bg-indigo-700 transition-colors">
              S&apos;inscrire
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
