const supabase = require("../../services/Supabase");

// https://miniangel.onrender.com/series?type=Mini%20Figure%20(Regular)
exports.fetchSeries = async (req, res) => {
  try {
    const { type } = req.query;
    // Fetching from supabase
    const { data, error } = await supabase.from("series").select("*").eq("type", type);
    // Returning Data
    if (error) res.status(500).send({ error: error.message });
    else res.json(data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
