import { db } from "./firebaseConfig";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, where } from "firebase/firestore";

export const getTodos = async (userId) => {
    const todos = [];
    
    try {
        const querySnapshot = await getDocs(query(collection(db, "todos"), where("id", "==", userId)));
        querySnapshot.forEach((doc) => {
            todos.push({ ...doc.data(), id: doc.id });
        });
        return todos;
    }
    catch (err) {
        console.log(err);
    }
}

export const addTodo = async (title, userId) => {
    try {
        const docRef = await addDoc(collection(db, "todos"), {
            id: userId,
            title,
            completed: false,
        });
    }
    catch (err) {
        console.log(err);
    }
}

export const updateTodo = async (id, completed) => {
    try {
        const docRef = await updateDoc(doc(db, "todos", id), {
            completed,
        });
    }
    catch (err) {
        console.log(err);
    }
}

export const deleteTodo = async (id) => {
    try {
        const docRef = await deleteDoc(doc(db, "todos", id));
    }
    catch (err) {
        console.log(err);
    }
}