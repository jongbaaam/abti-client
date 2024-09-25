import {
  GoogleAuthProvider,
  signInWithPopup,
  setPersistence,
  browserSessionPersistence,
  signOut,
} from "firebase/auth";
import axios from "axios";

import { firebaseAuth } from "../firebase/initializeFirebaseAuth";
import { useUserStore, useSelectedProjectStore } from "../store/store";

export default function useAuth() {
  const googleAuthProvider = new GoogleAuthProvider();
  const { isLoggedIn, userInfo, setIsLoggedIn, setUserInfo, resetUserState } =
    useUserStore(state => state);

  const { resetSelectedProject } = useSelectedProjectStore(state => state);

  async function handleSignIn() {
    try {
      await setPersistence(firebaseAuth, browserSessionPersistence);

      const signInResult = await signInWithPopup(
        firebaseAuth,
        googleAuthProvider,
      );
      const { user } = signInResult;

      const idToken = await user.getIdToken();

      const {
        data: { userInfo },
      } = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/auth/sign-in`,
        { idToken },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        },
      );

      const { userName, userEmail, photoUrl, apiKey, _id } = userInfo;

      document.cookie = `idToken=${idToken}; path=/`;

      setUserInfo({ userName, userEmail, photoUrl, apiKey, userId: _id });
      setIsLoggedIn(firebaseAuth.currentUser ? true : false);
    } catch (error) {
      console.error("Google 로그인 실패", error);
    }
  }

  async function handleSignOut() {
    try {
      signOut(firebaseAuth);
      resetUserState();
      resetSelectedProject();
    } catch (error) {
      console.error("로그아웃 실패", error);
    }
  }

  return { isLoggedIn, userInfo, handleSignIn, handleSignOut };
}
