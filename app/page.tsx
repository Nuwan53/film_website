import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Play, Star, Calendar, Clock } from "lucide-react"
import Image from "next/image"

export default function FilmWebsite() {
  const featuredMovie = {
    title: "Dune: Part Two",
    description:
      "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    rating: 8.5,
    year: 2024,
    duration: "166 min",
    genre: ["Sci-Fi", "Adventure", "Drama"],
    poster: "/placeholder.svg?height=600&width=400",
  }

  const trendingMovies = [
    {
      id: 1,
      title: "Oppenheimer",
      rating: 8.3,
      year: 2023,
      genre: "Biography",
      poster: "/placeholder.svg?height=450&width=300",
    },
    {
      id: 2,
      title: "Spider-Man: Across the Spider-Verse",
      rating: 8.7,
      year: 2023,
      genre: "Animation",
      poster: "/placeholder.svg?height=450&width=300",
    },
    {
      id: 3,
      title: "John Wick: Chapter 4",
      rating: 7.8,
      year: 2023,
      genre: "Action",
      poster: "/placeholder.svg?height=450&width=300",
    },
    {
      id: 4,
      title: "The Batman",
      rating: 7.9,
      year: 2022,
      genre: "Action",
      poster: "/placeholder.svg?height=450&width=300",
    },
    {
      id: 5,
      title: "Top Gun: Maverick",
      rating: 8.2,
      year: 2022,
      genre: "Action",
      poster: "/placeholder.svg?height=450&width=300",
    },
    {
      id: 6,
      title: "Everything Everywhere All at Once",
      rating: 7.8,
      year: 2022,
      genre: "Comedy",
      poster: "/placeholder.svg?height=450&width=300",
    },
  ]

  const upcomingMovies = [
    {
      id: 1,
      title: "Deadpool 3",
      releaseDate: "July 26, 2024",
      genre: "Action",
      poster: "/placeholder.svg?height=450&width=300",
    },
    {
      id: 2,
      title: "Inside Out 2",
      releaseDate: "June 14, 2024",
      genre: "Animation",
      poster: "/placeholder.svg?height=450&width=300",
    },
    {
      id: 3,
      title: "A Quiet Place: Day One",
      releaseDate: "June 28, 2024",
      genre: "Horror",
      poster: "/placeholder.svg?height=450&width=300",
    },
    {
      id: 4,
      title: "Bad Boys: Ride or Die",
      releaseDate: "June 7, 2024",
      genre: "Action",
      poster: "/placeholder.svg?height=450&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                CinemaHub
              </h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="hover:text-red-400 transition-colors">
                  Home
                </a>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Movies
                </a>
                <a href="#" className="hover:text-red-400 transition-colors">
                  TV Shows
                </a>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Genres
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input
                  placeholder="Search movies..."
                  className="pl-10 bg-slate-800 border-slate-600 text-white placeholder-slate-400 w-64"
                />
              </div>
              <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/70 to-transparent z-10" />
        <Image
          src={featuredMovie.poster || "/placeholder.svg"}
          alt={featuredMovie.title}
          fill
          className="object-cover opacity-30"
        />
        <div className="container mx-auto px-4 z-20">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2 mb-4">
              {featuredMovie.genre.map((g, index) => (
                <Badge key={index} variant="secondary" className="bg-red-600 text-white">
                  {g}
                </Badge>
              ))}
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              {featuredMovie.title}
            </h2>
            <div className="flex items-center space-x-6 mb-6 text-slate-300">
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-semibold">{featuredMovie.rating}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-5 h-5" />
                <span>{featuredMovie.year}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-5 h-5" />
                <span>{featuredMovie.duration}</span>
              </div>
            </div>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">{featuredMovie.description}</p>
            <div className="flex space-x-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8">
                <Play className="w-5 h-5 mr-2" />
                Watch Trailer
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                Add to Watchlist
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Movies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold">Trending Now</h3>
            <Button variant="ghost" className="text-red-400 hover:text-red-300">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {trendingMovies.map((movie) => (
              <Card
                key={movie.id}
                className="bg-slate-800 border-slate-700 overflow-hidden group hover:scale-105 transition-transform duration-300"
              >
                <div className="relative">
                  <Image
                    src={movie.poster || "/placeholder.svg"}
                    alt={movie.title}
                    width={300}
                    height={450}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button size="sm" className="bg-red-600 hover:bg-red-700">
                      <Play className="w-4 h-4 mr-1" />
                      Play
                    </Button>
                  </div>
                  <div className="absolute top-2 right-2 bg-black/80 rounded-full px-2 py-1 flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-xs font-semibold">{movie.rating}</span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-white mb-1 line-clamp-2">{movie.title}</h4>
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <span>{movie.year}</span>
                    <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">
                      {movie.genre}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Movies */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold">Coming Soon</h3>
            <Button variant="ghost" className="text-red-400 hover:text-red-300">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingMovies.map((movie) => (
              <Card
                key={movie.id}
                className="bg-slate-800 border-slate-700 overflow-hidden group hover:scale-105 transition-transform duration-300"
              >
                <div className="relative">
                  <Image
                    src={movie.poster || "/placeholder.svg"}
                    alt={movie.title}
                    width={300}
                    height={450}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button size="sm" className="bg-red-600 hover:bg-red-700">
                      <Calendar className="w-4 h-4 mr-1" />
                      Remind Me
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-white mb-2">{movie.title}</h4>
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <span>{movie.releaseDate}</span>
                    <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">
                      {movie.genre}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">50K+</div>
              <div className="text-slate-400">Movies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">10K+</div>
              <div className="text-slate-400">TV Shows</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">1M+</div>
              <div className="text-slate-400">Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">4.8</div>
              <div className="text-slate-400">Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-4">
                CinemaHub
              </h4>
              <p className="text-slate-400 mb-4">
                Your ultimate destination for movies and TV shows. Discover, watch, and enjoy the best entertainment.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Movies</h5>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Popular
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Top Rated
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Upcoming
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Now Playing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">TV Shows</h5>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Popular
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Top Rated
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    On The Air
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Airing Today
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 CinemaHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
