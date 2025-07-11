import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAU3HTrfM3iw144To1eEoU6eN4wUTB1PgU",
  authDomain: "tutorial-app-71e3b.firebaseapp.com",
  projectId: "tutorial-app-71e3b",
  storageBucket: "tutorial-app-71e3b.firebasestorage.app",
  messagingSenderId: "1049650855452",
  appId: "1:1049650855452:web:4d5ab2f0a4e498ef4269d9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;