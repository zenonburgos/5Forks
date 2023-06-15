import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB15RvFRjk9xELtvt1xQkF_zshvgrkQjX4",
  authDomain: "tenedores-8a839.firebaseapp.com",
  projectId: "tenedores-8a839",
  storageBucket: "tenedores-8a839.appspot.com",
  messagingSenderId: "542181328175",
  appId: "1:542181328175:web:53ba980cc691698c190dda"
};

export const initFirebase = initializeApp(firebaseConfig);