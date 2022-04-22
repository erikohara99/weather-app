const app = require("express")();
const axios = require("axios");

app.get("/api/weather", (req, res) => {
    const {zipcode} = req.body;
    let query = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode},840&appid=${process.env.openweathermap_ApiKey}`;
    query = axios.get(query);
    res.send(query);
});

app.listen(3000, () => {console.log("Server is listening on port 3000...")});