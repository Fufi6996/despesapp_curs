//register_content = '''
import { useState } from "react";
import { auth, createUserWithEmailAndPassword } from "../firebase/firebase";

export default function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Les contrasenyes no coincideixen");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Usuari registrat:", userCredential.user);
      alert("Usuari registrat correctament");
    } catch (error) {
      console.error("Error de registre:", error.message);
      alert("Error: " + error.message);
    }
  };

  return (
    <div>
      <h2>Registrar-se</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correu electrònic"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contrasenya"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirma la contrasenya"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}