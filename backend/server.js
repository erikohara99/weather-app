const app = require("express")();
const axios = require("axios");
const cors = require("cors");
const _ = require("lodash");

app.use(cors());

app.get("/api/weather", async (req, res) => {

    // Get coords of zip code provided (US only, can change by making the 'US' query a variable)
    const {zipcode} = req.query;
    let query = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode},US&appid=${process.env.openweathermap_ApiKey}`;
    let coords = await axios.get(query);

    // Get weather of town from coordinates
    query = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.data.lat}&lon=${coords.data.lon}&units=imperial&appid=${process.env.openweathermap_ApiKey}`;
    let {data} = await axios.get(query);

    // Select only needed data
    const weather = _.pick(data, ["main", "name", "sys", "weather", "wind"]);
    res.send(weather);
});

app.listen(3000, () => {console.log("Server is listening on port 3000...")});