const supabase = require("../../services/Supabase");

exports.fetchCollected = async (req, res) => {
  try {
    const { user_id, type, series } = req.query;

    if (!user_id || !type || !series) return res.status(400).send({ error: "Missing Parameters!" });
    // Fetching collected
    const { data, error } = await supabase.from("users_angels").select("*").eq("user_id", user_id).ilike("type", type).ilike("series", series);

    if (error) {
      res.status(500).send({ server_error: error.message });
    } else {
      res.json(data);
    }
  } catch (err) {
    res.status(500).send({ fatal_error: err.message });
  }
};
