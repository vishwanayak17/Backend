const mongoose = require("mongoose");
require("dotenv").config();

const Academy = require("./models/academymodels");

// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected for Seeding 🚀"))
  .catch(err => console.log(err));

// ✅ FULL FRONTEND DATA
const academiesFullData = [
  // ================= AHMEDABAD =================

  {
    id: "ahd-cricket",
    name: "Ahmedabad Cricket Academy",
    city: "Ahmedabad",
    area: "Navrangpura",
    rating: 4.5,
    status: "approved",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
    description: "Professional cricket coaching with turf ground.",
    phone: "+917900001111",
    email: "cricket.ahd@sports.in",
    timing: "6 AM – 9 AM | 4 PM – 8 PM",
    address: "Navrangpura Cricket Ground, Ahmedabad",
    sports: ["Cricket"],
    facilities: ["Turf Pitch", "Fitness Training"],
    achievements: { players: "120+", students: "3000+", experience: "15+ Years" },
    gallery: ["https://images.unsplash.com/photo-1517649763962-0c623066013b"],
    map: "https://www.google.com/maps?q=Navrangpura%20Ahmedabad&output=embed",
  },

  {
    id: "ahd-football",
    name: "Ahmedabad Football Academy",
    city: "Ahmedabad",
    area: "Maninagar",
    rating: 4.3,
    status: "pending",
    image: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6",
    description: "Professional football training with turf ground.",
    phone: "+917900001112",
    email: "football.ahd@sports.in",
    timing: "5 AM – 9 AM | 5 PM – 9 PM",
    address: "Maninagar Football Ground, Ahmedabad",
    sports: ["Football"],
    facilities: ["Turf Ground", "Certified Coach"],
    achievements: { players: "80+", students: "1500+", experience: "10+ Years" },
    gallery: ["https://images.unsplash.com/photo-1518091043644-c1d4457512c6"],
    map: "https://www.google.com/maps?q=Maninagar%20Ahmedabad&output=embed",
  },

  {
    id: "ahd-badminton",
    name: "Ace Badminton Academy",
    city: "Ahmedabad",
    area: "Satellite",
    rating: 4.4,
    status: "rejected",
    image: "https://images.pexels.com/photos/7235235/pexels-photo-7235235.jpeg",
    description: "Indoor badminton coaching with wooden courts.",
    phone: "+917900001113",
    email: "badminton.ahd@sports.in",
    timing: "6 AM – 9 PM",
    address: "Satellite Indoor Stadium, Ahmedabad",
    sports: ["Badminton"],
    facilities: ["Wooden Courts", "AC Hall"],
    achievements: { players: "60+", students: "1200+", experience: "8+ Years" },
    gallery: ["https://images.pexels.com/photos/7235235/pexels-photo-7235235.jpeg"],
    map: "https://www.google.com/maps?q=Satellite%20Ahmedabad&output=embed",
  },

  {
    id: "ahd-swimming",
    name: "Ahmedabad Swimming Centre",
    city: "Ahmedabad",
    area: "Bopal",
    rating: 4.2,
    status: "approved",
    image: "https://images.unsplash.com/photo-1600965962102-9d260a71890d",
    description: "Olympic size swimming pool with trainers.",
    phone: "+917900001114",
    email: "swim.ahd@sports.in",
    timing: "5 AM – 8 PM",
    address: "Bopal Swimming Arena, Ahmedabad",
    sports: ["Swimming"],
    facilities: ["Olympic Pool", "Locker Room"],
    achievements: { players: "50+", students: "900+", experience: "7+ Years" },
    gallery: ["https://images.unsplash.com/photo-1600965962102-9d260a71890d"],
    map: "https://www.google.com/maps?q=Bopal%20Ahmedabad&output=embed",
  },

  {
    id: "ahd-basketball",
    name: "Ahmedabad Basketball Hub",
    city: "Ahmedabad",
    area: "Vastrapur",
    rating: 4.1,
    status: "pending",
    image: "https://images.pexels.com/photos/264258/pexels-photo-264258.jpeg",
    description: "Professional basketball coaching academy.",
    phone: "+917900001115",
    email: "basketball.ahd@sports.in",
    timing: "6 AM – 8 PM",
    address: "Vastrapur Sports Complex, Ahmedabad",
    sports: ["Basketball"],
    facilities: ["Indoor Court", "Team Practice"],
    achievements: { players: "40+", students: "800+", experience: "6+ Years" },
    gallery: ["https://images.pexels.com/photos/264258/pexels-photo-264258.jpeg"],
    map: "https://www.google.com/maps?q=Vastrapur%20Ahmedabad&output=embed",
  },

  {
    id: "ahd-hockey",
    name: "Ahmedabad Hockey Academy",
    city: "Ahmedabad",
    area: "Shahibaug",
    rating: 4.2,
    status: "approved",
    image: "https://images.pexels.com/photos/6468744/pexels-photo-6468744.jpeg",
    description: "Professional hockey turf coaching.",
    phone: "+917900001116",
    email: "hockey.ahd@sports.in",
    timing: "6 AM – 9 AM | 5 PM – 8 PM",
    address: "Shahibaug Hockey Ground, Ahmedabad",
    sports: ["Hockey"],
    facilities: ["Turf Ground", "Coach"],
    achievements: { players: "45+", students: "700+", experience: "8+ Years" },
    gallery: ["https://images.pexels.com/photos/6468744/pexels-photo-6468744.jpeg"],
    map: "https://www.google.com/maps?q=Shahibaug%20Ahmedabad&output=embed",
  },

  {
    id: "ahd-volleyball",
    name: "Ahmedabad Volleyball Academy",
    city: "Ahmedabad",
    area: "Chandkheda",
    rating: 4.1,
    status: "rejected",
    image: "https://images.pexels.com/photos/1263426/pexels-photo-1263426.jpeg",
    description: "Professional volleyball coaching.",
    phone: "+917900001117",
    email: "volleyball.ahd@sports.in",
    timing: "6 AM – 8 AM | 5 PM – 7 PM",
    address: "Chandkheda Sports Ground, Ahmedabad",
    sports: ["Volleyball"],
    facilities: ["Outdoor Court", "Fitness Training"],
    achievements: { players: "35+", students: "500+", experience: "6+ Years" },
    gallery: ["https://images.pexels.com/photos/1263426/pexels-photo-1263426.jpeg"],
    map: "https://www.google.com/maps?q=Chandkheda%20Ahmedabad&output=embed",
  },

  // ================= GANDHINAGAR =================

  {
    id: "gnr-cricket",
    name: "Gandhinagar Cricket Academy",
    city: "Gandhinagar",
    area: "Sector 15",
    rating: 4.6,
    status: "approved",
    image: "https://images.pexels.com/photos/843341/pexels-photo-843341.jpeg",
    description: "State level cricket academy.",
    phone: "+917900002111",
    email: "cricket.gnr@sports.in",
    timing: "6 AM – 9 PM",
    address: "Sector 15 Ground, Gandhinagar",
    sports: ["Cricket"],
    facilities: ["Large Ground", "Fitness Trainer"],
    achievements: { players: "150+", students: "4000+", experience: "18+ Years" },
    gallery: ["https://images.pexels.com/photos/843341/pexels-photo-843341.jpeg"],
    map: "https://www.google.com/maps?q=Sector%2015%20Gandhinagar&output=embed",
  },

  {
    id: "gnr-football",
    name: "Gandhinagar Football Academy",
    city: "Gandhinagar",
    area: "Sector 12",
    rating: 4.3,
    status: "pending",
    image: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6",
    description: "Professional football training.",
    phone: "+917900002112",
    email: "football.gnr@sports.in",
    timing: "5 AM – 9 AM | 5 PM – 8 PM",
    address: "Sector 12 Football Ground, Gandhinagar",
    sports: ["Football"],
    facilities: ["Turf Ground", "Coach"],
    achievements: { players: "80+", students: "1600+", experience: "10+ Years" },
    gallery: ["https://images.unsplash.com/photo-1518091043644-c1d4457512c6"],
    map: "https://www.google.com/maps?q=Sector%2012%20Gandhinagar&output=embed",
  },

  {
    id: "gnr-badminton",
    name: "Gandhinagar Badminton Academy",
    city: "Gandhinagar",
    area: "Sector 8",
    rating: 4.4,
    status: "approved",
    image: "https://images.pexels.com/photos/7235235/pexels-photo-7235235.jpeg",
    description: "Indoor badminton coaching.",
    phone: "+917900002113",
    email: "badminton.gnr@sports.in",
    timing: "6 AM – 9 PM",
    address: "Sector 8 Indoor Stadium, Gandhinagar",
    sports: ["Badminton"],
    facilities: ["Wooden Courts", "Professional Coaching"],
    achievements: { players: "55+", students: "900+", experience: "9+ Years" },
    gallery: ["https://images.pexels.com/photos/7235235/pexels-photo-7235235.jpeg"],
    map: "https://www.google.com/maps?q=Sector%208%20Gandhinagar&output=embed",
  },

  {
    id: "gnr-swimming",
    name: "Gandhinagar Swimming Academy",
    city: "Gandhinagar",
    area: "Sector 21",
    rating: 4.2,
    status: "rejected",
    image: "https://images.unsplash.com/photo-1600965962102-9d260a71890d",
    description: "Olympic size pool with trainers.",
    phone: "+917900002114",
    email: "swim.gnr@sports.in",
    timing: "5 AM – 8 PM",
    address: "Sector 21 Swimming Arena, Gandhinagar",
    sports: ["Swimming"],
    facilities: ["Olympic Pool", "Locker Room"],
    achievements: { players: "70+", students: "1200+", experience: "9+ Years" },
    gallery: ["https://images.unsplash.com/photo-1600965962102-9d260a71890d"],
    map: "https://www.google.com/maps?q=Sector%2021%20Gandhinagar&output=embed",
  },

  {
    id: "gnr-tennis",
    name: "Gandhinagar Tennis Academy",
    city: "Gandhinagar",
    area: "Sector 7",
    rating: 4.3,
    status: "approved",
    image: "https://images.pexels.com/photos/13793163/pexels-photo-13793163.jpeg",
    description: "Professional lawn tennis coaching.",
    phone: "+917900002115",
    email: "tennis.gnr@sports.in",
    timing: "6 AM – 9 PM",
    address: "Sector 7 Tennis Court, Gandhinagar",
    sports: ["Tennis"],
    facilities: ["Clay Court", "Trainer"],
    achievements: { players: "60+", students: "1100+", experience: "10+ Years" },
    gallery: ["https://images.pexels.com/photos/13793163/pexels-photo-13793163.jpeg"],
    map: "https://www.google.com/maps?q=Sector%207%20Gandhinagar&output=embed",
  },

  {
    id: "gsk",
    name: "Gandhinagar Skating Arena",
    city: "Gandhinagar",
    area: "Sector 24",
    rating: 4.0,
    status: "pending",
    image: "https://images.pexels.com/photos/7335457/pexels-photo-7335457.jpeg",
    description: "Roller & speed skating coaching.",
    phone: "+917900001000",
    email: "skating.gnr@sports.in",
    timing: "5 PM – 9 PM",
    address: "Sector 24 Skating Arena, Gandhinagar",
    sports: ["Skating"],
    facilities: ["Skating Track", "Safety Equipment"],
    achievements: { players: "35+", students: "600+", experience: "5+ Years" },
    gallery: ["https://images.pexels.com/photos/7335457/pexels-photo-7335457.jpeg"],
    map: "https://www.google.com/maps?q=Sector%2024%20Gandhinagar&output=embed",
  },
];

// Insert Function
const seedData = async () => {
  try {
    await Academy.deleteMany();
    console.log("Old data deleted ❌");

    await Academy.insertMany(academiesFullData);
    console.log("Full frontend data inserted ✅🔥");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

seedData();