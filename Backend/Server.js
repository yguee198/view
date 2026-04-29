const express = require("express");
const path = require("path");
const db = require("../Backend/Config/database");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "../views")));
app.use(express.urlencoded({extended:true}));


const apiRoutes = require("../Backend/Routes/view");

app.use("/", apiRoutes);

app.listen(PORT, () => {
    console.log(`Our app is running on this port ${PORT}`);
});