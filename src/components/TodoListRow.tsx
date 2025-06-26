import type { Todo } from "../types/todo";

interface TodoListRowProps {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
}

export default function TodoListRow({ todo, onCompletedChange }: TodoListRowProps) {
  return (
    <div>
      <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50">
        
        <input type="checkbox" 
        className="scale-125"
        checked={todo.completed}
        onChange={(e) => onCompletedChange(todo.id, e.target.checked)} />
        <span className={todo.completed ? "line-through text-gray-400" : ""}>
          {todo.title}
        </span>
      </label>
    </div>
  );
}
