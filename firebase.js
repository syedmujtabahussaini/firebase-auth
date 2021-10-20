import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbN7bJv3qSQbCYQEM7Bk8PC88TbHXrmG4",
  authDomain: "fir-auth-f29d1.firebaseapp.com",
  projectId: "fir-auth-f29d1",
  storageBucket: "fir-auth-f29d1.appspot.com",
  messagingSenderId: "118821761536",
  appId: "1:118821761536:web:26142d029def04a9229ee5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
