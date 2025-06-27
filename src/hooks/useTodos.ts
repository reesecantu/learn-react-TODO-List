import { useEffect, useState } from "react";
import type { Todo } from "../types/todo";

export default function useTodos() {
    const [todos, setTodos] = useState(() => {
    const savedTodos: Todo[] = JSON.parse(
      localStorage.getItem("todos") || "[]"
    );
    return savedTodos.length > 0 ? savedTodos : [];
  });

  // manage local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  }

  function addTodo(title: string) {
    setTodos((prevTodos) => [
      {
        id: Date.now(), // normally id comes from database and is unique.
        title,
        completed: false,
      },
      ...prevTodos,
    ]);
  }

  function deleteTodo(id: number) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function deleteAllCompletedTodos() {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  }

  return({
    todos,
    setTodoCompleted,
    addTodo,
    deleteTodo,
    deleteAllCompletedTodos}
  )
}