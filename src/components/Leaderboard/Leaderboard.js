import { useEffect, useState } from 'react'
import './Leaderboard.css'
import { fetchLeaderboard } from '../../apiCalls'

export default function Leaderboard() {
  const [scores, setScores] = useState([])

  useEffect(() => {
    const getLeaderboard = async () => {
      try {
        const leaderboardData = await fetchLeaderboard()
        setScores(leaderboardData)
      } catch (err) {
        console.log(err)
      }
    }
    getLeaderboard()
  }, [])

  return (
   scores.map(score => {
      return (
        <div>
          <p>{score.game_name} : {score.time_seconds} seconds</p>
        </div>
      )
    })
  )
}