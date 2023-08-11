import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function OrderPage() {
    // State
    const { username } = useParams();

    // Display (render)
  return (
    <div>
        <h2>Bonjour {username}</h2>
        <Link to='/'>
          <button>Déconnexion</button>
        </Link>   
    </div>
  )
}
