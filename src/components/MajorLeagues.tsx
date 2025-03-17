import Link from "next/link";
import Button from "./ui/Button";
import Card, { CardBody } from "./ui/Card";

export default function MajorLeagues() {
    const majorLeagues=[{
        name:"NFL",
        description:"Le football américain à son meilleur. Pariez sur les écarts, les totaux et les cotes pour tous les matchs NFL.",
        link:"/sports/nfl",
        color: "from-blue-600 to-blue-800",
        icon: "🏈"
    },{
        name:"NBA",
        description:"Action de basketball rapide. Pariez sur les écarts de points, les over/unders et les props des joueurs.",
        link:"/sports/nba",
        color: "from-red-600 to-red-800",
        icon: "🏀"
    },{
        name:"MLB",
        description:"Pariez sur les écarts, les totaux et les cotes pour tous les matchs MLB.",
        link:"/sports/mlb",
        color: "from-green-600 to-green-800",
        icon: "⚾"
    },{
        name:"NHL",
        description:"Pariez sur les écarts, les totaux et les cotes pour tous les matchs NHL.",
        link:"/nhl-analysis",
        color: "from-indigo-600 to-indigo-800",
        icon: "🏒"
    }]
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ligues Majeures</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Placez vos paris sur les plus grands matchs des principales ligues sportives professionnelles.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {majorLeagues.map((league) => (
            <Card key={league.name} hoverable className="text-center shadow-md">
              <CardBody className="p-0">
                <div className={`h-40 bg-gradient-to-br ${league.color} flex items-center justify-center`}>
                  <div className="text-center">
                    <span className="text-6xl">{league.icon}</span>
                    <h3 className="text-2xl font-bold text-white mt-2">{league.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {league.description}
                  </p>
                  <Link href={league.link}>
                    <Button variant="primary" className="w-full">Voir les analyses {league.name}</Button>
                  </Link>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}