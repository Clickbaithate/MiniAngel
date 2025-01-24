const supabase = require("../../services/Supabase");

// https://miniangel.onrender.com/types
exports.fetchTypes = async (req, res) => {
  try {
    // Fetching from supabase
    const { data, error } = await supabase.from("types").select("title");
    // Returning Data
    if (error) res.status(500).send({ error: error.message });
    else res.json(data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
