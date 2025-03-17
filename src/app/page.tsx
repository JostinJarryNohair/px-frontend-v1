import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";
import Card, { CardBody } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import MajorLeagues from "@/components/MajorLeagues";

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/90"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Élevez Votre Expérience de Paris Sportifs
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Données en temps réel, analyses prédictives et une expérience de paris fluide, tout sur une seule plateforme.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg">
                Commencer à Parier
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                En Savoir Plus
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi Choisir StatsPro</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Notre plateforme combine une technologie de pointe avec une conception conviviale pour offrir l&apos;expérience ultime de paris sportifs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card hoverable className="text-center">
              <CardBody className="p-8">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Données en Temps Réel</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Accédez aux cotes, scores et statistiques à la minute près pour prendre des décisions éclairées.
                </p>
              </CardBody>
            </Card>
            
            <Card hoverable className="text-center">
              <CardBody className="p-8">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Analyses Prédictives</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Utilisez des algorithmes avancés qui analysent les données historiques pour générer des prédictions précises.
                </p>
              </CardBody>
            </Card>
            
            <Card hoverable className="text-center">
              <CardBody className="p-8">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Engagement Communautaire</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Connectez-vous avec d&apos;autres parieurs, partagez des stratégies et participez à une compétition saine.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Major Leagues Section */}
      <MajorLeagues />
      
      {/* Live Betting Preview */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Paris en Direct</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ne manquez pas l&apos;action ! Placez des paris sur les événements en cours avec des cotes dynamiques qui s&apos;ajustent en temps réel.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Live Match Cards */}
            <Card className="shadow-md">
              <CardBody className="p-0">
                <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4 flex justify-between items-center">
                  <div>
                    <span className="text-sm font-medium">Premier League</span>
                    <div className="flex items-center">
                      <span className="animate-pulse mr-2">●</span>
                      <span className="text-sm">EN DIRECT</span>
                    </div>
                  </div>
                  <div className="text-sm">65&apos;</div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <span className="font-medium">Liverpool</span>
                      <span className="font-bold text-lg ml-2">2</span>
                    </div>
                    <button className="px-4 py-2 rounded border bg-blue-600 text-white border-blue-600">
                      2.10
                    </button>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-center w-full font-medium">Match Nul</span>
                    <button className="px-4 py-2 rounded border bg-white text-gray-700 border-gray-300 hover:bg-gray-50">
                      3.25
                    </button>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="font-medium">Manchester City</span>
                      <span className="font-bold text-lg ml-2">1</span>
                    </div>
                    <button className="px-4 py-2 rounded border bg-white text-gray-700 border-gray-300 hover:bg-gray-50">
                      2.50
                    </button>
                  </div>
                </div>
              </CardBody>
            </Card>
            
            <Card className="shadow-md">
              <CardBody className="p-0">
                <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4 flex justify-between items-center">
                  <div>
                    <span className="text-sm font-medium">La Liga</span>
                    <div className="flex items-center">
                      <span className="animate-pulse mr-2">●</span>
                      <span className="text-sm">EN DIRECT</span>
                    </div>
                  </div>
                  <div className="text-sm">32&apos;</div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <span className="font-medium">Barcelone</span>
                      <span className="font-bold text-lg ml-2">1</span>
                    </div>
                    <button className="px-4 py-2 rounded border bg-white text-gray-700 border-gray-300 hover:bg-gray-50">
                      1.95
                    </button>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-center w-full font-medium">Match Nul</span>
                    <button className="px-4 py-2 rounded border bg-white text-gray-700 border-gray-300 hover:bg-gray-50">
                      3.50
                    </button>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="font-medium">Real Madrid</span>
                      <span className="font-bold text-lg ml-2">0</span>
                    </div>
                    <button className="px-4 py-2 rounded border bg-blue-600 text-white border-blue-600">
                      3.80
                    </button>
                  </div>
                </div>
              </CardBody>
            </Card>
            
            <div className="hidden lg:block">
              <Card className="shadow-md h-full flex flex-col">
                <CardBody className="p-6 flex-grow flex flex-col justify-center items-center text-center">
                  <h3 className="text-xl font-bold mb-4">Vous voulez voir plus de matchs en direct ?</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Explorez tous les événements en cours et placez vos paris en temps réel.
                  </p>
                  <Link href="/live-betting">
                    <Button variant="primary">Voir Tous les Matchs en Direct</Button>
                  </Link>
                </CardBody>
              </Card>
            </div>
          </div>
          
          <div className="mt-8 text-center lg:hidden">
            <Link href="/live-betting">
              <Button variant="primary">Voir Tous les Matchs en Direct</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Analytics Preview */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between mb-16">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Analyses Basées sur les Données</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                Suivez vos performances de paris, analysez les tendances et améliorez votre stratégie avec notre tableau de bord d&apos;analyse complet.
              </p>
              <Link href="/analytics">
                <Button variant="primary">Explorer les Analyses</Button>
              </Link>
            </div>
            
            <div className="md:w-1/2 bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Taux de Réussite</p>
                  <h3 className="text-2xl font-bold mt-1">58,7%</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-sm font-medium text-green-600">+3,2%</span>
                    <svg className="h-4 w-4 ml-1 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Gains Totaux</p>
                  <h3 className="text-2xl font-bold mt-1">1 245,80 €</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-sm font-medium text-green-600">+8,1%</span>
                    <svg className="h-4 w-4 ml-1 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                  <p className="text-sm text-gray-500 dark:text-gray-400">ROI</p>
                  <h3 className="text-2xl font-bold mt-1">12,3%</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-sm font-medium text-red-600">-1,5%</span>
                    <svg className="h-4 w-4 ml-1 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Paris Totaux</p>
                  <h3 className="text-2xl font-bold mt-1">247</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-sm font-medium text-green-600">+12,5%</span>
                    <svg className="h-4 w-4 ml-1 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à Commencer à Gagner ?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Rejoignez des milliers de parieurs qui utilisent déjà StatsPro pour prendre des décisions de paris plus intelligentes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              S&apos;inscrire Maintenant
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
              En Savoir Plus
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
