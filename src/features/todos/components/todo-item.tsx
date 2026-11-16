import { useUpdateTodoMutation, useDeleteTodoMutation } from '../api/todos-api';
import { EditTodoForm } from './edit-todo-form';
import type { Todo } from '../types/schema';

type TodoItemProps = {
  todo: Todo;
  isEditing: boolean;
  onStartEdit: () => void;
  onStopEdit: () => void;
};

export function TodoItem({ todo, isEditing, onStartEdit, onStopEdit }: TodoItemProps) {
  const [updateTodo, { isLoading: isUpdating }] = useUpdateTodoMutation();
  const [deleteTodo, { isLoading: isDeleting }] = useDeleteTodoMutation();

  const handleToggle = () => {
    updateTodo({ id: todo.id, data: { completed: !todo.completed } });
  };

  return (
    <li className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
      {isEditing ? (
        <div className="flex-1">
          <EditTodoForm
            id={todo.id}
            initialTitle={todo.title}
            onCancel={onStopEdit}
            onSuccess={onStopEdit}
          />
        </div>
      ) : (
        <>
          <div className="flex flex-1 items-center gap-3 overflow-hidden">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={handleToggle}
              disabled={isUpdating}
              className="h-4 w-4 cursor-pointer rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />
            <span
              className={`truncate text-sm font-medium ${
                todo.completed ? 'text-slate-400 line-through' : 'text-slate-800'
              }`}
            >
              {todo.title}
            </span>
          </div>
          <div className="flex shrink-0 items-center gap-1">
            <button
              type="button"
              onClick={onStartEdit}
              className="rounded px-2 py-1 text-xs font-medium text-blue-600 hover:bg-blue-50"
            >
              Изменить
            </button>
            <button
              type="button"
              onClick={() => deleteTodo(todo.id)}
              disabled={isDeleting}
              className="rounded px-2 py-1 text-xs font-medium text-red-600 hover:bg-red-50 disabled:opacity-50"
            >
              {isDeleting ? '...' : 'Удалить'}
            </button>
          </div>
        </>
      )}
    </li>
  );
}
