import db from "../config/firebase";

export const getPosts = async () => {
  let data = [];
  await db.collection("posts").onSnapshot(snapshot => (data = snapshot.docs));
  return data;
};
