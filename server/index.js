const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment,
        getFortune,
        addProfile,
        deleteProfile
     } = require('./controller');

     
app.get('/api/fortune', getFortune);
app.get("/api/compliment", getCompliment);
app.post('/api/profile', addProfile);
app.delete('/api/profile/:id', deleteProfile);

app.listen(4000, () => console.log("Server running on 4000"));
