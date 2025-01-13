import React, { useState, useEffect } from 'react';
import { supabase } from '../services/SupabaseClient';
import { Navigate } from 'react-router-dom';

const HomePage = () => {
  const [angels, setAngels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAngels = async () => {
      try {
        const { data, error } = await supabase
          .from('angels') 
          .select('*');  

        if (error) throw error;

        setAngels(data); 
      } catch (error) {
        setError(error.message); 
      } finally {
        setLoading(false); 
      }
    };

    fetchAngels();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="home-page">
      <h1>All Sonny Angels</h1>
      <div className="angels-list">
        {angels.length === 0 ? (
          <p>No Sonny Angels found.</p>
        ) : (
          angels.map((angel) => (
            <div key={angel.name} className="angel-card">
              <img src={angel.image} alt={angel.name} className="angel-image" />
              <h2>{angel.name}</h2>
              <p>{angel.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
