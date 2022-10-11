const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortuneButton')
const profileContainer = document.querySelector('#profile-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4000/api/profile`

const profileCallback = ({ data: profile }) => displayProfile(profile)
const errCallback = err => console.log(err.response.data)
const createProfile = body => axios.post(baseURL, body).then(profileCallback).catch(errCallback)
const deleteProfile = id => axios.delete(`${baseURL}/${id}`).then(profileCallback).catch(errCallback)

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)

function submitHandler(e) {
    e.preventDefault()

    let title = document.querySelector('#title')
    let music = document.querySelector('#music')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        title: title.value,
        music: music.value, 
        imageURL: imageURL.value
    }

    createProfile(bodyObj)

    title.value = ''
    music.value = ''
    imageURL.value = ''
}

function createProfileCard(profile) {
    const profileCard = document.createElement('div')
    profileCard.classList.add('profile-card')

    profileCard.innerHTML = `<img alt='profile cover' src=${profile.imageURL} class="profile-cover"/>
    <p class="profile-title">Name: ${profile.title}</p>
    <p class="profile-music">Favorite band: ${profile.music}</p>
    <div class="btns-container">
    </div>
    <button onclick="deleteProfile(${profile.id})">delete profile</button>
    `


    profileContainer.appendChild(profileCard)
}

function displayProfile(arr) {
    profileContainer.innerHTML = ``
    for (let i = 1; i < arr.length; i++) {
        createProfileCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler);

