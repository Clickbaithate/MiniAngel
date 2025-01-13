import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { supabase } from "./services/SupabaseClient";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";

const App = () => {

  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) console.error(error);
        else {
          setSession(data?.session.user.id);
        }
      } catch (e) {
        console.error(e);
        setSession(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSession();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={session ? <HomePage /> : <LandingPage />} />

        <Route path="/signup" element={session ? <HomePage /> : <SignUpPage/>} />

        <Route path="/home" element={session ? <HomePage /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
