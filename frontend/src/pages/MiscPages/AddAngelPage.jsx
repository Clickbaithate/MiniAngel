import React, { useState, useEffect } from "react";
import { supabase } from "../../services/SupabaseClient";

const AddAngelPage = () => {
  const [angels, setAngels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [angelInputs, setAngelInputs] = useState(
    Array.from({ length: 12 }, () => ({ name: "", image: "", weight: "" }))
  );
  const [addError, setAddError] = useState("");
  const [addSuccess, setAddSuccess] = useState("");

  useEffect(() => {
    const fetchAngels = async () => {
      try {
        const { data, error } = await supabase.from("angels").select("*");
        if (error) throw error;

        setAngels(data || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAngels();
  }, []);

  const handleInputChange = (index, field, value) => {
    const updatedInputs = [...angelInputs];
    updatedInputs[index][field] = value;
    setAngelInputs(updatedInputs);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setAddError("");
    setAddSuccess("");

    const validAngels = angelInputs.filter(
      (input) => input.name && input.image && input.weight
    );

    if (validAngels.length === 0) {
      setAddError("Please fill out at least one complete angel input.");
      return;
    }

    try {
      const { data, error } = await supabase.from("angels").insert(validAngels).select("*");

      if (error) throw error;

      if (data && Array.isArray(data)) {
        setAngels((prevAngels) => [...prevAngels, ...data]); // Update the list with new angels
      }

      setAddSuccess(`${data.length} Sonny Angels added successfully!`);
      setAngelInputs(Array.from({ length: 12 }, () => ({ name: "", image: "", weight: "" }))); // Reset inputs
    } catch (error) {
      setAddError(error.message);
    }
  };

  if (loading) {
    return <div className="text-center py-6">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-6">Error: {error}</div>;
  }

  return (
    <div className="p-6 h-full bg-gray-700">
      <h1 className="text-3xl font-bold text-center mb-6">All Sonny Angels</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
        {angels.length === 0 ? (
          <p className="text-center col-span-full">No Sonny Angels found.</p>
        ) : (
          angels.map((angel) => (
            <div
              key={angel.id}
              className="angel-card border rounded-lg shadow-md p-4"
            >
              <img
                src={angel.image}
                alt={angel.name}
                className="w-full h-48 object-contain rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{angel.name}</h2>
              <p className="text-white">Weight: {angel.weight}</p>
              <p className="text-white">Type: {angel.type}</p>
              <p className="text-white">Series: {angel.series}</p>
            </div>
          ))
        )}
      </div>

      <div className="max-w-2xl mx-auto bg-white border rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Add New Sonny Angels</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {angelInputs.map((input, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder={`Name ${index + 1}`}
                value={input.name}
                onChange={(e) =>
                  handleInputChange(index, "name", e.target.value)
                }
                className="w-full sm:w-1/3 border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
              <input
                type="text"
                placeholder={`Image URL ${index + 1}`}
                value={input.image}
                onChange={(e) =>
                  handleInputChange(index, "image", e.target.value)
                }
                className="w-full sm:w-1/3 border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
              <input
                type="text"
                placeholder={`Weight ${index + 1}`}
                value={input.weight}
                onChange={(e) =>
                  handleInputChange(index, "weight", e.target.value)
                }
                className="w-full sm:w-1/3 border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Add Sonny Angels
          </button>
        </form>
        {addError && <p className="text-red-500 text-sm mt-2">{addError}</p>}
        {addSuccess && (
          <p className="text-green-500 text-sm mt-2">{addSuccess}</p>
        )}
      </div>
    </div>
  );
};

export default AddAngelPage;
