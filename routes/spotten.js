const express = require("express");
// maak router object aan
const routes = express.Router();
const ctrlspotten = require("../controler/spotten")

// maak de verschillende routs aan

routes.get("/", ctrlspotten.getVogels);
routes.get("/:ID", ctrlspotten.getOneVogel);
routes.get("/vogel",ctrlspotten.vogelGespot)
// routes.put("/", ctrlspotten.AddVogel); // {soort}
routes.put("/", ctrlspotten.vogelGespotPlus1); // {ID}

// exporteer het router object
module.exports = routes;
