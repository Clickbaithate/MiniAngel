const supabase = require("../../services/Supabase");

// https://miniangel.onrender.com/search?name=rabbit&page=30
exports.searchAngels = async (req, res) => {
  try {
    const { name, page } = req.query;
    const limit = 10;

    if (!name) return res.status(400).send({ error: "Name is required." });

    const pageNumber = parseInt(page) || 0;

    // Fetching from supabase
    const { data, error } = await supabase.from("angels").select("*").ilike("name", name).range(pageNumber, pageNumber + limit - 1);

    if (error) {
      res.status(500).send({ error: error.message });
    } else {
      if (data.length === 0) res.send({ message: "No Angels Found!" })
      else res.json(data);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
