import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { supabase } from "../services/SupabaseClient";
import background from "../assets/images/signup_background.png"; // Ensure this is the correct path for the background
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    setErrorMessage(""); // Clear previous error message
    setSuccessMessage(""); // Clear previous success message

    if (!username || !password) {
      setErrorMessage("Both username and password are required.");
      return;
    }

    try {
      // Fetch the user's email using their username
      const { data: userData, error: userError } = await supabase
        .from("users")
        .select("email")
        .eq("username", username);

      if (userError || !userData || userData.length === 0) {
        setErrorMessage("Invalid username or password.");
        return;
      }

      const userEmail = userData[0].email;

      // Log in with the retrieved email and password
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email: userEmail,
        password,
      });

      if (authError) {
        setErrorMessage("Invalid username or password.");
        return;
      }

      setSuccessMessage("Login successful! Redirecting...");
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } catch (error) {
      setErrorMessage("An error occurred during login. Please try again.");
    }
  };

  return (
    <div
      className="bg-white bg-center md:bg-cover w-full h-screen flex flex-col items-center justify-between"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex flex-col items-center">
        <FontAwesomeIcon
          icon={faAngleLeft}
          className="absolute w-4 h-4 top-8 left-5 md:border-2 md:border-purple-500 md:rounded-full md:p-2 bg-white cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <div className="text-3xl font-bold px-4 pt-6 pb-6 md:pt-6">
          Welcome Back!
        </div>
        <div className="w-full flex flex-col items-center space-y-1">
          <input
            className="w-[95%] h-14 px-4 border-2 bg-white rounded-xl"
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="relative w-[95%]">
            <input
              className="w-full h-14 px-4 pr-12 border-2 bg-white rounded-xl"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              className="absolute right-4 top-5 text-gray-500 cursor-pointer"
              onClick={togglePasswordVisibility}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mb-4">
        <button
          className={`w-96 h-14 font-bold rounded-xl bg-purple-500 text-white ${
            !username || !password ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleLogin}
          disabled={!username || !password}
        >
          Login
        </button>
        <div className="italic text-purple-300 text-sm">
          Don't have an account? Sign Up!
        </div>
      </div>
      {errorMessage && (
        <div className="text-red-500 text-sm text-center">{errorMessage}</div>
      )}
      {successMessage && (
        <div className="text-green-500 text-sm text-center">{successMessage}</div>
      )}
    </div>
  );
};

export default LoginPage;
