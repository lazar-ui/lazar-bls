import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "lazar-bls", // Ваш Project ID
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  databaseURL:
    "https://lazar-bls-default-rtdb.europe-west1.firebasedatabase.app", // Ваша URL базы данных
};

// Инициализируем Firebase, если еще не инициализировано
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Экспортируем Realtime Database
const database = getDatabase(app);

export { app, database };
