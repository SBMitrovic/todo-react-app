import { useState, useEffect } from 'react';
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  onSnapshot, 
  query, 
  where, 
  orderBy 
} from 'firebase/firestore';
import { db } from '../firebase/config';

export const useTodos = (userId) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setTodos([]);
      setLoading(false);
      return;
    }

    const q = query(
      collection(db, 'todos'),
      where('userId', '==', userId)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const todosData = [];
      querySnapshot.forEach((doc) => {
        todosData.push({
          id: doc.id,
          ...doc.data()
        });
      });
      // Sort in JavaScript instead of Firestore
      todosData.sort((a, b) => new Date(a.date) - new Date(b.date));
      setTodos(todosData);
      setLoading(false);
    });

    return unsubscribe;
  }, [userId]);

  const addTodo = async (todoData) => {
    try {
      await addDoc(collection(db, 'todos'), {
        ...todoData,
        userId,
        createdAt: new Date()
      });
      return { error: null };
    } catch (error) {
      return { error: error.message };
    }
  };

  const updateTodo = async (todoId, updates) => {
    try {
      const todoRef = doc(db, 'todos', todoId);
      await updateDoc(todoRef, updates);
      return { error: null };
    } catch (error) {
      return { error: error.message };
    }
  };

  const deleteTodo = async (todoId) => {
    try {
      await deleteDoc(doc(db, 'todos', todoId));
      return { error: null };
    } catch (error) {
      return { error: error.message };
    }
  };

  return {
    todos,
    loading,
    addTodo,
    updateTodo,
    deleteTodo
  };
};
