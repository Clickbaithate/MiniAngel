import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { supabase } from "./services/SupabaseClient";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import AddAngelPage from "./pages/AddAngelPage";

const App = () => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the initial session
    const fetchSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
          console.error(error);
        } else {
          setSession(data?.session?.user || null);
        }
      } catch (e) {
        console.error(e);
        setSession(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSession();

    // Set up the authentication state listener
    const { data: subscription } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        setSession(session.user); // Update session with user details
      } else {
        setSession(null); // User logged out or session expired
      }
    });

    // Cleanup the listener on unmount
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={session ? <HomePage /> : <LandingPage />} />

        <Route path="/signup" element={session ? <HomePage /> : <SignUpPage />} />
        <Route path="/login" element={session ? <HomePage /> : <LoginPage />} />

        <Route path="/home" element={session ? <HomePage /> : <Navigate to="/" />} />

        <Route path="/add" element={session ? <AddAngelPage /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
