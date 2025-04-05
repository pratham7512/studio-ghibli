import { Suspense } from "react"
import MovieGrid from "./components/MovieGrid"
import Header from "./components/Header"
import "./App.css"

function App() {
  return (
    <main className="main-container">
      <Header />
      <div className="container">
        <MovieGrid />
      </div>
    </main>
  )
}

export default App

