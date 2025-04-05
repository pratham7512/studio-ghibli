"use client"

import { useState, useEffect } from "react"

export default function FilmCard({ film }) {
  const [filmDetails, setFilmDetails] = useState(null)

  useEffect(() => {
    async function fetchFilmDetails() {
      try {
        const res = await fetch(`https://ghibliapi.vercel.app/films/${film.id}`)
        if (!res.ok) {
          throw new Error("Failed to fetch film details")
        }
        const data = await res.json()
        setFilmDetails(data)
      } catch (error) {
        console.error("Error fetching film details:", error)
      }
    }

    fetchFilmDetails()
  }, [film.id])

  if (!filmDetails) {
    return null
  }

  return (
    <div className="film-card">
      <div className="film-image-container">
        {filmDetails.image ? (
          <img
            src={filmDetails.image || "/placeholder.svg"}
            alt={film.title}
            className="film-image"
          />
        ) : (
          <div className="film-image-container">
            <span>No image available</span>
          </div>
        )}
      </div>
      <div className="film-content">
        <div className="film-header">
          <h3 className="film-title">{film.title}</h3>
          <span className="film-year">{film.release_date}</span>
        </div>
        <p className="film-subtitle">
          {film.original_title} • Directed by {film.director}
        </p>
      </div>
      <div className="film-description">
        {film.description}
      </div>
      <div className="film-footer">
        <div className="film-duration">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>{film.running_time} min</span>
        </div>
        <div className="film-rating">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <span>{film.rt_score}%</span>
        </div>
      </div>
    </div>
  )
}

