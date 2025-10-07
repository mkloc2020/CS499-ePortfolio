const tripsEndpoint = "http://localhost:3000/api/trips";
const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

/* GET travel view */
const travel = async function (req, res, next) {
  try {
    const response = await fetch(tripsEndpoint, options);
    const json = await response.json();

    let message = null;
    if (!Array.isArray(json)) {
      message = "API lookup error";
      json = [];
    } else if (!json.length) {
      message = "No trips exist in our database!";
    }

    res.render("travel", {
      title: "Travlr Getaways",
      trips: json,
      message,
    });
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).send(err.message || "Internal Server Error");
  }
};

module.exports = { travel };