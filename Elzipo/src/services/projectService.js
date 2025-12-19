import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { uploadImageToCloudinary } from "./cloudinaryService";

const PROJECT_COLLECTION = "projects";

// Get all projects
export const getAllProjects = async () => {
  try {
    const q = query(
      collection(db, PROJECT_COLLECTION),
      orderBy("createdAt", "desc")
    );
    const querySnapshot = await getDocs(q);
    const projects = [];
    querySnapshot.forEach((doc) => {
      projects.push({ id: doc.id, ...doc.data() });
    });
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

// Add a new project
export const addProject = async (projectData, imageFile) => {
  try {
    // Upload image to Cloudinary first
    let imageUrl = null;
    if (imageFile) {
      imageUrl = await uploadImageToCloudinary(imageFile);
    }

    // Prepare project data for Firestore
    const projectToAdd = {
      ...projectData,
      image: imageUrl,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Add to Firestore
    const docRef = await addDoc(
      collection(db, PROJECT_COLLECTION),
      projectToAdd
    );
    return { id: docRef.id, ...projectToAdd };
  } catch (error) {
    console.error("Error adding project:", error);
    throw error;
  }
};

// Update a project
export const updateProject = async (projectId, projectData, imageFile) => {
  try {
    let imageUrl = projectData.image;

    // Upload new image if provided
    if (imageFile) {
      imageUrl = await uploadImageToCloudinary(imageFile);
    }

    const projectRef = doc(db, PROJECT_COLLECTION, projectId);
    await updateDoc(projectRef, {
      ...projectData,
      image: imageUrl,
      updatedAt: new Date(),
    });

    return { id: projectId, ...projectData, image: imageUrl };
  } catch (error) {
    console.error("Error updating project:", error);
    throw error;
  }
};

// Delete a project
export const deleteProject = async (projectId) => {
  try {
    const projectRef = doc(db, PROJECT_COLLECTION, projectId);
    await deleteDoc(projectRef);
  } catch (error) {
    console.error("Error deleting project:", error);
    throw error;
  }
};
