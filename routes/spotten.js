const express = require("express");
// maak router object aan
const routes = express.Router();
const ctrlspotten = require("../controler/spotten");

// maak de verschillende routs aan

routes.get("/", ctrlspotten.getVogels);
routes.get("/:ID", ctrlspotten.getOneVogel);
// dit is een foutje die jullie moesten ontdekken.
// Als je reeds een route get rout hebt /:ID kan je niet nog s /vogel hebben.
routes.get("/vogel", ctrlspotten.vogelGespot);
routes.put("/", ctrlspotten.vogelGespotPlus1); // {ID}

// exporteer het router object
module.exports = routes;
