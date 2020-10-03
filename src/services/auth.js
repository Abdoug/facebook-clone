import { auth } from "../config/firebase";

export const signOut = () => {
  return auth.signOut();
};
