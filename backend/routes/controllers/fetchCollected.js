const supabase = require("../../services/Supabase");

// https://miniangel.onrender.com/collected ? user_id=f983767a-ca0f-4a37-bf2c-b38e5609b088 & type=Other & series=Kiss%20Kiss
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
