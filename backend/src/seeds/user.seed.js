import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  {
    email: "priya.patel@example.com",
    fullName: "Priya Patel",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    email: "aanya.gupta@example.com",
    fullName: "Aanya Gupta",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    email: "kiara.sharma@example.com",
    fullName: "Kiara Sharma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    email: "diya.reddy@example.com",
    fullName: "Diya Reddy",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    email: "ananya.kumar@example.com",
    fullName: "Ananya Kumar",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/66.jpg",
  },
  {
    email: "isha.verma@example.com",
    fullName: "Isha Verma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/77.jpg",
  },
  {
    email: "meera.singh@example.com",
    fullName: "Meera Singh",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/88.jpg",
  },

  // Male Users
  {
    email: "arjun.shah@example.com",
    fullName: "Arjun Shah",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    email: "vihaan.malhotra@example.com",
    fullName: "Vihaan Malhotra",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    email: "kabir.choudhary@example.com",
    fullName: "Kabir Choudhary",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    email: "advik.trivedi@example.com",
    fullName: "Advik Trivedi",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    email: "reyansh.naidu@example.com",
    fullName: "Reyansh Naidu",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/66.jpg",
  },
  {
    email: "atharva.iyer@example.com",
    fullName: "Atharva Iyer",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/77.jpg",
  },
  {
    email: "dev.joshi@example.com",
    fullName: "Dev Joshi",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/88.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();