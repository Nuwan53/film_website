"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Play, Star, Calendar, Clock } from "lucide-react"
import Image from "next/image"

export default function FilmWebsite() {
  const router = useRouter()

  // Featured Movies for Hero Slider
  const featuredMovies = [
    {
      title: "Premalu",
      description:
        "Premalu is a 2024 Indian Malayalam-language romantic comedy film directed by Girish A. D. and produced by Bhavana Studios, Fahadh Faasil and Friends, and Working Class Hero.",
      rating: 7.8,
      year: 2024,
      duration: "2h 36m",
      genre: ["Comedy", "Romance", "Drama"],
      poster: "/premalu_long.jpg?height=600&width=400",
    },
    {
      title: "Thudarum",
      description:
        "Shanmugham, a taxi driver who is in love with his black ambassador. Later due to mysterious circumstances, it seems as if his car is missing and there is a change in him as he searches for it.",
      rating: 8.3,
      year: 2025,
      duration: "2h 43m",
      genre: ["Thriller", "Drama", "History"],
      poster: "/TD.avif?height=600&width=400",
    },
    {
      title: "Sookshmadarshini",
      description:
        "Sookshmadarshini is a 2024 Indian Malayalam-language comedy mystery thriller film directed by M. C. Jithin, written by Libin T.B and Athul Ramachandran.",
      rating: 7.8,
      year: 2023,
      duration: "2h 23m",
      genre: ["Thriller", "Mystery", "Adventure"],
      poster: "/soo.webp?height=600&width=400",
    },
  ]

  const [featuredIndex, setFeaturedIndex] = useState(0)
  const featuredMovie = featuredMovies[featuredIndex]

  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedIndex((prev) =>
        prev === featuredMovies.length - 1 ? 0 : prev + 1
      )
    }, 5000)
    return () => clearInterval(interval)
  }, [featuredMovies.length])

  // Trending Movies
  const trendingMovies = [
    {
      id: 1,
      title: "Thudarum",
      rating: 8.3,
      year: 2025,
      genre: "Thriller/Drama",
      poster: "/Thudarum_film.jpg?height=450&width=300",
    },
    {
      id: 2,
      title: "Allapaula Gymkhana",
      rating: 7.2,
      year: 2025,
      genre: "Sport,Comedy",
      poster: "/Alappuzha_Gymkhana.jpg?height=450&width=300",
    },
    {
      id: 3,
      title: "Premalu",
      rating: 7.8,
      year: 2024,
      genre: "Comedy,Romance",
      poster: "/Premalu.jpeg?height=450&width=300",
    },
    {
      id: 4,
      title: "Aavesham",
      rating: 7.9,
      year: 2024,
      genre: "Comedy,Action",
      poster: "/Avesam.jpeg?height=450&width=300",
    },
    {
      id: 5,
      title: "Sookshmadarshini",
      rating: 7.8,
      year: 2024,
      genre: "Thriller,Mystery",
      poster: "/sookhmadarshani.jpeg?height=450&width=300",
    },
    {
      id: 6,
      title: "Manjummel Boys",
      rating: 8.2,
      year: 2024,
      genre: "Thriller/Drama",
      poster: "/manjummel.jpeg?height=450&width=300",
    },
  ]

  // Upcoming Movies
  const upcomingMovies = [
    {
      id: 1,
      title: "Narivetta",
      releaseDate: "July 26, 2024",
      genre: "Action",
      poster:
        "/MV5BN2QwMGM0MGMtYTQ1MS00M2UzLTg1NWYtMjk2MmQ2OTIyOTU4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg?height=450&width=300",
    },
    {
      id: 2,
      title: "Kannappa",
      releaseDate: "June 14, 2024",
      genre: "Fantasy/Drama",
      poster: "/Kannappa_(film).jpg?height=450&width=300",
    },
    {
      id: 3,
      title: "Bazooka",
      releaseDate: "June 28, 2024",
      genre: "Thriller/Action",
      poster: "/Bazooka_poster.jpeg?height=450&width=300",
    },
    {
      id: 4,
      title: "Dominic and the Ladies' Purse",
      releaseDate: "June 7, 2024",
      genre: "Action",
      poster:
        "/Dominic_and_the_Ladies'_Purse_poster.jpg?height=450&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Image src="/logo.png" alt="Logo" height={100} width={120} className="h-10" />
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-red-400">Home</a>
              <a href="#Trending Now" className="hover:text-red-400">Trending</a>
              <a href="#Coming soon" className="hover:text-red-400">Coming Soon</a>
              <a href="#" className="hover:text-red-400">Genres</a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="Search movies..."
                className="pl-10 bg-slate-800 border-slate-600 text-white placeholder-slate-400 w-64"
              />
            </div>
            <Link href="/signin">
              <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/70 to-transparent z-10" />
        <Image
          src={featuredMovie.poster}
          alt={featuredMovie.title}
          fill
          className="object-cover opacity-30"
        />
        <div className="container mx-auto px-4 z-20">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2 mb-4">
              {featuredMovie.genre.map((g, i) => (
                <Badge key={i} variant="secondary" className="bg-red-600 text-white">
                  {g}
                </Badge>
              ))}
            </div>
            <h2 className="text-5xl font-bold mb-4">{featuredMovie.title}</h2>
            <div className="flex items-center space-x-6 mb-6 text-slate-300">
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span>{featuredMovie.rating}</span>
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
            <p className="text-lg mb-8">{featuredMovie.description}</p>
            <div className="flex space-x-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                <Play className="w-5 h-5 mr-2" /> Watch Trailer
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                Add to Watchlist
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Movies */}
      <section className="py-16" id="Trending Now">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8">Trending Now</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {trendingMovies.map((movie) => (
              <Card key={movie.id} className="bg-slate-800 border-slate-700 hover:scale-105 transition-transform duration-300">
                <div className="relative">
                  <Image src={movie.poster} alt={movie.title} width={300} height={450} className="w-full h-64 object-cover" />
                  <div className="absolute top-2 right-2 bg-black/80 rounded-full px-2 py-1 flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-xs">{movie.rating}</span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold">{movie.title}</h4>
                  <div className="flex justify-between text-sm text-slate-400">
                    <span>{movie.year}</span>
                    <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">{movie.genre}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Movies */}
      <section className="py-16 bg-slate-800/50" id="Coming soon">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8">Coming Soon</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingMovies.map((movie) => (
              <Card key={movie.id} className="bg-slate-800 border-slate-700 hover:scale-105 transition-transform duration-300">
                <Image src={movie.poster} alt={movie.title} width={300} height={450} className="w-full h-64 object-cover" />
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">{movie.title}</h4>
                  <div className="flex justify-between text-sm text-slate-400">
                    <span>{movie.releaseDate}</span>
                    <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">{movie.genre}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-red-500">50K+</div>
            <div className="text-slate-400">Movies</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-red-500">10K+</div>
            <div className="text-slate-400">TV Shows</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-red-500">1M+</div>
            <div className="text-slate-400">Users</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-red-500">4.8</div>
            <div className="text-slate-400">Rating</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image src="/logo.png" alt="Logo" height={100} width={120} className="h-10" />
            <p className="text-slate-400 mt-4">
              Your ultimate destination for Malayalam movies. Discover, watch, and enjoy the best entertainment.
            </p>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Movies</h5>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white">Popular</a></li>
              <li><a href="#" className="hover:text-white">Top Rated</a></li>
              <li><a href="#" className="hover:text-white">Upcoming</a></li>
              <li><a href="#" className="hover:text-white">Now Playing</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">TV Shows</h5>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white">Popular</a></li>
              <li><a href="#" className="hover:text-white">Top Rated</a></li>
              <li><a href="#" className="hover:text-white">On The Air</a></li>
              <li><a href="#" className="hover:text-white">Airing Today</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Support</h5>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          &copy; 2025 Malayalam Fans Only. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
