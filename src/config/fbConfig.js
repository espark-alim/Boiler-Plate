import { initializeApp } from "firebase/app";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
const firebaseConfig = {
  apiKey: "AIzaSyBozVvVo7PWJKYJRVoqHEXTvWQS1dev9yU",
  authDomain: "quiz-app-admin-portal.firebaseapp.com",
  projectId: "quiz-app-admin-portal",
  storageBucket: "quiz-app-admin-portal.appspot.com",
  messagingSenderId: "709181342902",
  appId: "1:709181342902:web:b10da4328735fff8ac1217",
};

export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
