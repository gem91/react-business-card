//firebase 초기화
import { initializeApp } from "firebase/app";
// import { v4 as uuid } from 'uuid';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, get, set } from "firebase/database";
import { v4 as uuid } from 'uuid';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
};


const app = initializeApp(firebaseConfig);
// 재로그인할때 자동로그인 막기
const provider = new GoogleAuthProvider();
const auth = getAuth();

provider.setCustomParameters({prompt: 'select_account',})

export async function login() {
  return signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    return user;
  }).catch((error) => {
    console.log('lgoin test');
    return error.message;
  });
}

export async function logout() {
  return signOut(auth)
  .then(() => {
    return null;
  }).catch((error) => {
    return error.message;
  });
}

// 로그인정보 옵저버
export async function onUserStateChange( callBack ) {
  onAuthStateChanged(auth, async (user) => { // 비동기방식이라 async 적용
    const updatedUser = user ? await user : null;
    callBack(updatedUser);
  });
}


// database update
const database = getDatabase(app);

export async function addNewCard( card ){
  const id = uuid();
  const { name, theme, company, title, email, mobile, message, fileName, fileURL } = card
  
  return set(ref(database, `card/${id}`), {
    ...card,
    id,
    name,
    theme,
    company,
    title,
    email,
    mobile,
    message,
    fileName,
    fileURL,
  })
}
