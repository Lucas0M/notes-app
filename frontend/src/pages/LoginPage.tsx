import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, register } from "../services/authService";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!email || !password) return;
    setError("");

    try {
      if (isRegistering) {
        await register(email, password);
      }

      const token = await login(email, password);
      localStorage.setItem("token", token);
      navigate("/notes");
    } catch {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
      <div className="bg-gray-900 rounded-xl p-8 w-full max-w-md flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-center">
          {isRegistering ? "Create account" : "Welcome back"}
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-800 rounded-lg px-4 py-2 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-gray-800 rounded-lg px-4 py-2 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {error && <p className="text-red-400 text-sm text-center">{error}</p>}

        <button
          onClick={handleSubmit}
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 rounded-lg transition-colors"
        >
          {isRegistering ? "Register" : "Login"}
        </button>

        <button
          onClick={() => setIsRegistering(!isRegistering)}
          className="text-gray-400 hover:text-white text-sm transition-colors"
        >
          {isRegistering
            ? "Already have an account? Login"
            : "Dont have an account? Register"}
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
