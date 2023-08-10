import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
     // State
  const [firstname, setFirstname] = useState("");
  const navigate = useNavigate();

  // Set behavior
  const handleSubmit = event => {
    event.preventDefault();
    navigate(`/order/${firstname}`)
    setFirstname("");
  }

  const handleChange = event => setFirstname(event.target.value);

    return (
        <form onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <h2>Connectez-vous</h2>
            <input type='text'
              placeholder='Entre votre prénom...'
              required
              value={firstname}
              onChange={handleChange}/>
            <button type='submit'>Accédez à votre espace</button>
        </form>
    )
}

export default LoginForm;