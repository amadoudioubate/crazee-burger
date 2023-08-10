import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function OrderPage() {
    // State
    const navigation = useNavigate();
    const params = useParams();

    console.log(params)
    // Set behavior
    const handleClick = () => navigation("/");
    // Display (render)
  return (
    <div>
        <h2>Bonjour {params.firstname}</h2>
        <button onClick={handleClick}>Déconnexion</button>
    </div>
  )
}
