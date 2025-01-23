import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/MiscPages/LandingPage";
import { supabase } from "./services/SupabaseClient";
import HomePage from "./pages/MainPages/HomePage";
import SignUpPage from "./pages/AuthPages/SignUpPage";
import LoginPage from "./pages/AuthPages/LoginPage";
import AddAngelPage from "./pages/MiscPages/AddAngelPage";
import CollectionPage from "./pages/MainPages/CollectionPage";
import VaultPage from "./pages/MainPages/VaultPage";
import DiaryPage from "./pages/MainPages/DiaryPage";
import FriendsPage from "./pages/MainPages/SocialPage";

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

        <Route path="/diary" element={session ? <DiaryPage /> : <Navigate to="/" />} />
        <Route path="/collection" element={session ? <CollectionPage /> : <Navigate to="/" />} />
        <Route path="/home" element={session ? <HomePage /> : <Navigate to="/" />} />
        <Route path="/vault" element={session ? <VaultPage /> : <Navigate to="/" />} />
        <Route path="/social" element={session ? <FriendsPage /> : <Navigate to="/" />} />

        <Route path="/add" element={session ? <AddAngelPage /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
