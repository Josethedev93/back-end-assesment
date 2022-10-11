const profile = require('./db.json');
let globalID = 1;


const addProfile = (req, res) => {
    const {title, music, imageURL} = req.body
    profile.push({
        title,
        music,
        imageURL,
        id: globalID
    });
    globalID++
    res.status(200).send(profile)
}

const deleteProfile = (req, res) => {
    const profile = require ('./db.json')
    const { id } = req.params; //destructure
    for(let i = 0; i < profile.length; i++){
       if(profile[i].id === +id){
        profile.splice(i, 1);
        return res.status(200).send(profile);
       } 
    }
    res.status(400).send(profile);
}

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ['Nothing is more difficult, and therefore more precious, than to be able to decide.', 'Others can help you now.', 'Savor your freedom it is precious.',
        'You are working hard.', 'Determination is what you need now.']

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },
    addProfile,
    deleteProfile,
    
}

