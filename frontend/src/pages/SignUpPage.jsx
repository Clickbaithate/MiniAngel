import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { supabase } from "../services/SupabaseClient";
import background from "../assets/images/signup_background.png";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = async () => {
    setErrorMessage(""); // Clear previous error message
    setSuccessMessage(""); // Clear previous success message

    if (password.length < 8 || !/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
      setErrorMessage("Password must be at least 8 characters, containing a letter and a number.");
      return;
    }

    try {
      // Step 1: Create the user in the authentication table
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (authError) throw authError;

      // Step 2: Insert the user in the "users" table
      const { user } = authData;
      const { data: userData, error: userError } = await supabase.from("users").insert([
        {
          user_id: user.id, // Link with the ID from the authentication table
          email: user.email,
          username,
          created_at: new Date(),
        },
      ]);

      if (userError) throw userError;

      setSuccessMessage("Account created successfully! You can now log in.");
    } catch (error) {
      setErrorMessage(error.message || "An error occurred during sign-up.");
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
          className="absolute w-4 h-4 top-8 left-5 md:border-2 md:border-purple-500 md:rounded-full md:p-2 bg-white"
        />
        <div className="text-3xl font-bold px-4 pt-16 pb-6 md:pt-6">
          Create your account in seconds!
        </div>
        <div className="w-full flex flex-col items-center space-y-1">
          <input
            className="w-[95%] h-14 px-4 border-2 bg-white rounded-xl"
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="w-[95%] h-14 px-4 border-2 bg-white rounded-xl"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            <div className="text-sm italic mt-2 text-center">
              At least 8 characters, containing a letter and a number
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mb-4">
        <button
          className="w-96 h-14 bg-purple-200 font-bold rounded-xl"
          onClick={handleSignUp}
        >
          Create Account
        </button>
        <div className="italic text-purple-300 text-sm">
          Already have an account? Login!
        </div>
        {errorMessage && (
          <div className="text-red-500 mt-2 text-sm">{errorMessage}</div>
        )}
        {successMessage && (
          <div className="text-green-500 mt-2 text-sm">{successMessage}</div>
        )}
      </div>
    </div>
  );
};

export default SignUpPage;
