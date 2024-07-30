import firebase_app from "@/Firebase/connection";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const auth = getAuth(firebase_app);
const provider = new GoogleAuthProvider();

export default async function signUp() {
  let result = null,
    error = null;
  try {
    result = await signInWithPopup(auth, provider);
    console.log(result);
  } catch (e) {
    error = e;
    console.log(e);
  }

  return { result, error };
}

export async function signOutFromGoogle() {
  try {
    await auth.signOut();
  } catch (error) {
    console.error(error);
  }
}
