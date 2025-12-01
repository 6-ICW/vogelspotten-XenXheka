const vogels = require("../data/index");
const getVogels = (req, res) => {
  // Je werkt graag met foreach - maar met een map is het eenvoudiger
  let AllVogels = [];
  vogels.forEach((vogel) => {
    AllVogels.push({ id: vogel.id, soort: vogel.soort });
  });
  res.send(AllVogels);
};

const getOneVogel = (req, res) => {
  const getID = req.params.ID;
  const gevondenVogel = vogels.find((vogel) => vogel.id == getID);
  res.json(gevondenVogel);
};

// wat doe je hier? Wat is het doel van deze functie?
const vogelGespot = (req, res) => {
  let aantalKeerGespot = 0;
  vogels.forEach((vogel) => {
    if (vogel.aantalKeerGespot > aantalKeerGespot) {
      aantalKeerGespot = vogel.aantalKeerGespot;
    }
  });
  const gevondenVogel = vogels.find(
    (vogel) => vogel.aantalKeerGespot == aantalKeerGespot
  );
  console.log(aantalKeerGespot);

  res.json(gevondenVogel);
};

const vogelGespotPlus1 = (req, res) => {
  const getID = req.body.id;

  // waarom zoek je eerst de index ...
  const index = vogels.findIndex((vogel) => vogel.id == getID);
  const gevondenVogel = vogels.find((vogel) => vogel.id == getID);
  gevondenVogelPlus1 = gevondenVogel.aantalKeerGespot++;
  // Je werkt met een array, een array is reference type dus moet je
  //   niet nog via de index werken.
  gevondenVogel.aantalKeerGespot[index] = gevondenVogelPlus1;
  res.json(gevondenVogel);
};

module.exports = {
  getVogels,
  getOneVogel,
  vogelGespot,
  vogelGespotPlus1,
};
