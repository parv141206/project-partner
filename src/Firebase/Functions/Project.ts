import { ProjectInfo } from "@/types";
import firebase_app from "../connection";
import { addDoc, collection, getFirestore } from "firebase/firestore";
const db = getFirestore(firebase_app);
const _collection: any = collection(db, "projects");
export async function addNewProject(projectInfo: ProjectInfo) {
  const res = await addDoc(_collection, projectInfo);
  return res;
}
