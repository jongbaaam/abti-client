import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import firebaseConfig from "./firebaseConfig";

initializeApp(firebaseConfig);

export const firebaseAuth = getAuth();
