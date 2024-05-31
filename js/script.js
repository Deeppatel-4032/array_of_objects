

const StudantData = document.getElementById("StudantData");


let studant = [{
    name: "Deep",
    lname: "Patel",
    age: 23,
    gender: "male",
    grId: "M4032",
    gmail: "dip8@gmail.com",
    contact: 7383884401,
    hobby: ["music", "cooking",],
    address: "Udwada, pariyarod",
    city: "valsad",
    country: "India",
}, {

    name: "Kunal",
    lname: "Patel",
    age: 21,
    gender: "male",
    grId: "M4044",
    gmail: "knlp8@gmail.com",
    contact: 8401580804,
    hobby: ["music", "cooking"],
    address: {
        place: "Udwada",
        country: "India",
        pincode: 425001,
    },
    city: "valsad",
    country: "India",
}, {
    name: "ishan",
    lname: "Prajapati",
    age: 22,
    gender: "male",
    grId: "M4036",
    gmail: "isp8@gmail.com",
    contact: 8401654202,
    hobby: ["criket", "cooking", "music"],
    address: {
        place: "pardi",
        country: "India",
        pincode: 425045,
    },
    city: "valsad",
    country: "India",
}, {
    name: "Harsh",
    lname: "patel",
    age: 23,
    gender: "male",
    grId: "M4033",
    gmail: "hrp8@gmail.com",
    contact: 8401654654,
    hobby: ["criket", "music"],
    address: {
        place: "pardi",
        country: "India",
        pincode: 4250254,
    },
    city: "valsad",
    country: "India",
}, {
    name: "parth",
    lname: "Rathod",
    age: 20,
    gender: "male",
    grId: "M4065",
    gmail: "prp8@gmail.com",
    contact: 9965132184,
    hobby: ["play", "music"],
    address: {
        place: "varachha",
        country: "India",
        pincode: 425652,
    },
    city: "surat",
    country: "India",
}, {
    name: "prince",
    lname: "patel",
    age: 22,
    gender: "male",
    grId: "M4063",
    gmail: "pp887@gmail.com",
    contact: 9964651235,
    hobby: ["play", "music"],
    address: {
        place: "fullpadar",
        pincode: 425135,
    },
    city: "surat",
    country: "India",
}, {
    name: "raj",
    lname: "ajudiya",
    age: 21,
    gender: "male",
    grId: "M6856",
    gmail: "raja87@gmail.com",
    contact: 7898745452,
    hobby: ["watch Movie"],
    address: {
        place: "gajera",
        pincode: 200513,
    },
    city: "surat",
    country: "India",
}, {
    name: "abhiraj",
    lname: "sarma",
    age: 23,
    gender: "male",
    grId: "M5682",
    gmail: "abs87@gmail.com",
    contact: 7898745452,
    hobby: ["games", "watch Movie"],
    address: {
        place: "hiranager",
        pincode: 200127,
    },
    city: "surat",
    country: "India",
}, {
    name: "abhigit",
    lname: "angare",
    age: 22,
    gender: "male",
    grId: "M5632",
    gmail: "aan87@gmail.com",
    contact: 789353125,
    hobby: ["games", "play"],
    address: {
        place: "pariya",
        pincode: 200123,
    },
    city: "valsad",
    country: "India"
}, {
    name: "tejash",
    lname: "shinde",
    age: 23,
    gender: "male",
    grId: "M5652",
    gmail: "ts787@gmail.com",
    contact: 523543232,
    hobby: ["games", "play", "Dance"],
    address: {
        place: "pardi",
        pincode: 356813,
    },
    city: "valsad",
    country: "India"
}, {
    name: "Aaush",
    lname: "Rajput",
    age: 22,
    gender: "male",
    grId: "M3939",
    gmail: "auhT78@gmail.com",
    contact: 523543232,
    hobby: ["play", "cooking"],
    address: {
        place: "retlav",
        pincode: 396185,
    },
    city: "valsad",
    country: "India"
}, {
    name: "Shubham",
    lname: "Thakur",
    age: 21,
    gender: "male",
    grId: "M3936",
    gmail: "subT78@gmail.com",
    contact: 523543232,
    hobby: ["play"],
    address: {
        place: "motivada",
        pincode: 396185,
    },
    city: "valsad",
    country: "India"
}, {
    name: "Henil",
    lname: "Patel",
    age: 22,
    gender: "male",
    grId: "M3333",
    gmail: "hnpt78@gmail.com",
    contact: 523544496,
    hobby: ["play", "online game"],
    address: {
        place: "kalsar",
        pincode: 396185,
    },
    city: "valsad",
    country: "India"
}, {
    name: "mohit",
    lname: "Kureshi",
    age: 22,
    gender: "male",
    grId: "M3302",
    gmail: "mohit78@gmail.com",
    contact: 523544496,
    hobby: ["play"],
    address: {
        place: "panera",
        pincode: 396165,
    },
    city: "valsad",
    country: "India"
}, {
    name: "Rahul",
    lname: "pandiya",
    age: 22,
    gender: "male",
    grId: "M3366",
    gmail: "rohul78@gmail.com",
    contact: 523544465,
    hobby: ["play"],
    address: {
        place: "vesu",
        pincode: 396564,
    },
    city: "surat",
    country: "India"
}, {
    name: "angali",
    lname: "Patel",
    age: 23,
    gender: "female",
    grId: "M3066",
    gmail: "anp@gmail.com",
    contact: 5546652158,
    hobby: ["music", "dance"],
    address: {
        place: "pardi",
        pincode: 396564,
    },
    city: "valsad",
    country: "India"
}, {
    name: "Chatna",
    lname: "Patel",
    age: 20,
    gender: "female",
    grId: "M4033",
    gmail: "cp34@gmail.com",
    contact: 5564612465,
    hobby: ["music"],
    address: {
        place: "sarodhi",
        pincode: 396564,
    },
    city: "valsad",
    country: "India"
}, {
    
    name: "Rishika",
    lname: "Patel",
    age: 23,
    gender: "female",
    grId: "M4034",
    gmail: "rp34@gmail.com",
    contact: 9556465462,
    hobby: ["music"],
    address: {
        place: "Motivada",
        pincode: 396185,
    },
    city: "valsad",
    country: "India"
}, {
    name: "pooja",
    lname: "Patel",
    age: 23,
    gender: "female",
    grId: "M4035",
    gmail: "pp025@gmail.com",
    contact: 955646255,
    hobby: ["music", "cooking"],
    address: {
        place: "kikala",
        pincode: 396185,
    },
    city: "valsad",
    country: "India"
}, {
    name: "priti",
    lname: "Nayka",
    age: 22,
    gender: "female",
    grId: "M4036",
    gmail: "pn025@gmail.com",
    contact: 955646255,
    hobby: ["cooking"],
    address: {
        place: "Palsana",
        pincode: 396152,
    },
    city: "valsad",
    country: "India"
}, {
    name: "jarna",
    lname: "Desai",
    age: 22,
    gender: "female",
    grId: "M4036",
    gmail: "pn025@gmail.com",
    contact: 955625255,
    hobby: ["cooking", "music"],
    address: {
        place: "Daman",
        pincode: 325662,
    },
    city: "Daman",
    country: "India"
}];

// const StudantData1 = document.getElementById("StudantData", studant[1].name);

// StudantData.innerHTML += (`<div class="col-4"><div class="card p-3"><h3>Name : ${studant[0].name}</h3><h3>lname : ${studant[0].lname}</h3></div></div> `);
// StudantData1.innerHTML += (`<div class="col-4"><div class="card p-3">Name : ${studant[1].name}</div></div> `);

for(let i = 0; i < studant.length; i++){
    
    StudantData.innerHTML += (`<div class="col-4"><div class="card p-3"><h3>Name : ${studant[i].name}</h3><h3>lname : ${studant[i].lname}</h3><h3>age : ${studant[i].age}</h3><h3>gender : ${studant[i].gender}</h3><h3>grId : ${studant[i].grId}</h3><h3>gmail : ${studant[i].gmail}</h3><h3>contact : ${studant[i].contact}</h3><h3>hobby : ${studant[i].hobby}</h3><h3>address : ${studant[i].address.place}</h3><h3>city : ${studant[i].city}</h3><h3>country : ${studant[i].country}</h3></div></div>`);

    console.log(studant[i].lname);
};
