import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {

    // Display (render)
  return (
    <div>
        <h2>ErrorPage</h2>
        <Link to='/'>
          <button type='button'>Retourner à la page d'acceuil</button>
        </Link>  
    </div>
  )
}
