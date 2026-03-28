const mongoose = require("mongoose");
require("dotenv").config();

const Academy = require("./models/academymodels");

// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected for Seeding 🚀"))
  .catch(err => console.log(err));

// Dummy Academies Data
const academies = [
  {
    academyName: "Star Cricket Academy",
    city: "Ahmedabad",
    area: "Navrangpura",
    sports: "Cricket",
    phone: "9999999991",
    email: "star1@gmail.com",
    description: "Best cricket academy in Ahmedabad",
    imageUrl: "https://example.com/cricket.jpg",
    facilities: ["Parking", "Flood Lights"],
    status: "approved"
  },
  {
    academyName: "Elite Football Club",
    city: "Ahmedabad",
    area: "Satellite",
    sports: "Football",
    phone: "9999999992",
    email: "football@gmail.com",
    description: "Professional football training",
    imageUrl: "https://example.com/football.jpg",
    facilities: ["Ground", "Locker Room"],
    status: "approved"
  },
  {
    academyName: "Smash Badminton Academy",
    city: "Ahmedabad",
    area: "Bopal",
    sports: "Badminton",
    phone: "9999999993",
    email: "badminton@gmail.com",
    description: "Indoor badminton courts",
    imageUrl: "https://example.com/badminton.jpg",
    facilities: ["Indoor Court", "Coaching"],
    status: "approved"
  },
  {
    academyName: "Gandhinagar Cricket Hub",
    city: "Gandhinagar",
    area: "Sector 21",
    sports: "Cricket",
    phone: "9999999994",
    email: "gngcricket@gmail.com",
    description: "Top cricket academy in Gandhinagar",
    imageUrl: "https://example.com/cricket2.jpg",
    facilities: ["Parking", "Practice Nets"],
    status: "approved"
  },
  {
    academyName: "Tennis Pro Academy",
    city: "Gandhinagar",
    area: "Sector 10",
    sports: "Tennis",
    phone: "9999999995",
    email: "tennis@gmail.com",
    description: "Professional tennis coaching",
    imageUrl: "https://example.com/tennis.jpg",
    facilities: ["Court", "Trainer"],
    status: "approved"
  },
  {
    academyName: "All Round Sports Club",
    city: "Ahmedabad",
    area: "Maninagar",
    sports: "Multi Sports",
    phone: "9999999996",
    email: "multi@gmail.com",
    description: "All sports in one place",
    imageUrl: "https://example.com/sports.jpg",
    facilities: ["Gym", "Ground", "Parking"],
    status: "approved"
  }
];

// Insert Function
const seedData = async () => {
  try {
    await Academy.deleteMany(); // purana data delete karega
    console.log("Old data deleted ❌");

    await Academy.insertMany(academies);
    console.log("New data inserted ✅🔥");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

// Run
seedData();