const vogels = require("../data/index")
const getVogels = (req,res) => {
    let AllVogels = []
    vogels.forEach((vogel) => {
        AllVogels.push(vogel.id,vogel.soort)
        
    })
    res.send(AllVogels)
}

const getOneVogel = (req,res) => {
    const getID = req.params.ID
    const gevondenVogel = vogels.find((vogel) => vogel.id == getID)
    res.json(gevondenVogel)
}

const vogelGespot = (req,res) => {
    const aantalKeerGespot = 0
    vogels.forEach((vogel) => {
        if (vogel.aantalKeerGespot > aantalKeerGespot){
            aantalKeerGespot = vogel.aantalKeerGespot
        }
    })
    const gevondenVogel = vogels.find((vogel) => vogel.aantalKeerGespot == aantalKeerGespot)
    console.log(aantalKeerGespot);
    
    res.send("gevondenVogel")
    res.json(gevondenVogel)
}
const vogelGespotPlus1 = (req,res) => {
    const getID = req.body.id
    const index = vogels.findIndex((vogel) => vogel.id == getID)
    const gevondenVogel = vogels.find((vogel) => vogel.id == getID)
    gevondenVogelPlus1 = gevondenVogel.aantalKeerGespot++
    gevondenVogel.aantalKeerGespot[index] = gevondenVogelPlus1
    res.json(gevondenVogel)

}

module.exports = {
    getVogels,
    getOneVogel,
    vogelGespot,
    vogelGespotPlus1
}