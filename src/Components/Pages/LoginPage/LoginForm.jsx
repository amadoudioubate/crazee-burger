import { useState } from "react";

function LoginForm() {
     // State
  const [firstname, setFirstname] = useState("");

  // Set behavior
  const handleSubmit = event => {
    event.preventDefault();
    alert(`Bonjour ${firstname}`);
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