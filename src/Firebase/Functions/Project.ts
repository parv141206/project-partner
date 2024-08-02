import { ProjectInfo } from "@/types";
import firebase_app from "../connection";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
const db = getFirestore(firebase_app);
const _collection: any = collection(db, "projects");

export async function addNewProject(projectInfo: ProjectInfo) {
  const res = await addDoc(_collection, projectInfo);
  return res;
}

export async function fetchUsersProjects(
  email: string,
): Promise<(ProjectInfo & { id: string })[]> {
  const q = query(_collection, where("email", "==", email));
  const snapshot = await getDocs(q);
  const res = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as ProjectInfo),
  }));
  return res;
}

export async function fetchAllProjects() {
  const snapshot = await getDocs(_collection);
  const res = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as ProjectInfo),
  }));
  return res;
}

export async function fetchAllPendingProjects() {
  const q = query(_collection, where("status", "==", "pending"));
  const snapshot = await getDocs(q);
  const res = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as ProjectInfo),
  }));
  return res;
}

export async function fetchAllCompletedProjects() {
  const q = query(_collection, where("status", "==", "completed"));
  const snapshot = await getDocs(q);
  const res = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as ProjectInfo),
  }));
  return res;
}
export async function fetchCompletedProjects(email: string) {
  const q = query(
    _collection,
    where("email", "==", email),
    where("status", "==", "completed"),
  );
  const snapshot = await getDocs(q);
  const res = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as ProjectInfo),
  }));
  return res;
}
export async function markProjectAsCompleted(
  projectId: string,
  googleDriveLink: string | null | undefined,
): Promise<void> {
  const projectDocRef = doc(db, "projects", projectId);

  try {
    const projectDoc = await getDoc(projectDocRef);

    if (!projectDoc.exists()) {
      console.error(`Project ${projectId} does not exist.`);
      return;
    }

    const projectData = projectDoc.data();

    // Check if the googleDriveLink field exists and is not set
    if (!projectData.googleDriveLink && googleDriveLink) {
      // If it doesn't exist and googleDriveLink is provided, create it
      await updateDoc(projectDocRef, {
        googleDriveLink: googleDriveLink,
      });
      console.log(`Created googleDriveLink for project ${projectId}.`);
    }

    // Update project status to completed
    await updateDoc(projectDocRef, {
      status: "completed",
    });

    console.log(`Project ${projectId} marked as completed.`);
  } catch (error) {
    console.error("Error marking project as completed: ", error);
  }
}
