import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AnimeCard from '../components/AnimeCard'
import Loading from '../components/Loading'

const Anime: React.FC = () => {
  const [animeList, setAnimeList] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {

    const fetchAnime = async () => {
      try {
        const result = await axios.get('https://api.jikan.moe/v4/top/anime')
        setAnimeList(result.data.data)
      } catch (error) {
        setError("Failed to fetch data")
      } finally {
        setLoading(false)
      }
    }
    fetchAnime()
  }, [])

  if (error) return <div>{error}</div>;

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {animeList.map((anime) => (
            <AnimeCard key={anime.title} anime={anime} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Anime
