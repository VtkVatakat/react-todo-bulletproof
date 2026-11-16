import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetTodosQuery } from '../api/todos-api';
import { AddTodoForm } from './add-todo-form';
import { FilterButtons } from './filter-buttons';
import { TodoItem } from './todo-item';
import type { RootState } from '@/store/store';

export function TodoBoard() {
  const { data: todos, isLoading, isError } = useGetTodosQuery();
  const currentFilter = useSelector((state: RootState) => state.filter.status);
  const [editingId, setEditingId] = useState<string | null>(null);

  const filteredTodos = todos?.filter((todo) => {
    if (currentFilter === 'active') return !todo.completed;
    if (currentFilter === 'completed') return todo.completed;
    return true;
  });

  return (
    <section className="mx-auto w-full max-w-xl rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-md">
      <h1 className="mb-4 text-xl font-bold text-slate-900">Список задач (React + Bulletproof)</h1>

      <div className="mb-4">
        <AddTodoForm />
      </div>

      <div className="mb-6">
        <FilterButtons />
      </div>

      {isLoading && <p className="text-sm text-slate-500">Загрузка задач...</p>}
      {isError && (
        <p className="text-sm text-red-600">
          Ошибка подключения к серверу. Проверьте, что запущен npm run server
        </p>
      )}

      {filteredTodos && filteredTodos.length === 0 && (
        <p className="text-center text-sm text-slate-500">Задач по выбранному фильтру нет.</p>
      )}

      {filteredTodos && filteredTodos.length > 0 && (
        <ul className="flex flex-col gap-2">
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              isEditing={editingId === todo.id}
              onStartEdit={() => setEditingId(todo.id)}
              onStopEdit={() => setEditingId(null)}
            />
          ))}
        </ul>
      )}
    </section>
  );
}
