"use client"

import { useState, useEffect } from "react"
import FilmCard from "./film-card"

export default function MovieGrid() {
  const [films, setFilms] = useState([])

  useEffect(() => {
    async function fetchFilms() {
      try {
        const res = await fetch("https://ghibliapi.vercel.app/films")
        if (!res.ok) {
          throw new Error("Failed to fetch films")
        }
        const data = await res.json()
        setFilms(data)
      } catch (error) {
        console.error("Error fetching films:", error)
      }
    }

    fetchFilms()
  }, [])

  return (
    <div className="movie-grid">
      <h2 className="movie-grid-title">Explore the Magical World of Ghibli</h2>
      <div className="movie-grid-container">
        {films.map((film) => (
          <FilmCard key={film.id} film={film} />
        ))}
      </div>
    </div>
  )
}

