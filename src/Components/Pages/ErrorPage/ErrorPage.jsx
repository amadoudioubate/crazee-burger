import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ErrorPage() {
    // State
    const navigate = useNavigate()
    
    // Set behavior
    const handleBack = () => navigate("/")

    // Display (render)
  return (
    <div>
        <h2>ErrorPage</h2>
        <button type='button' onClick={handleBack}>Retour à la page d'acceuil</button>
    </div>
  )
}
