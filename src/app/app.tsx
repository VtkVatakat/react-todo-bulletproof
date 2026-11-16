import { AppProvider } from './provider';
import { TodoBoard } from '@/features/todos';

export function App() {
  return (
    <AppProvider>
      <main className="min-h-screen bg-slate-100 px-4 py-12">
        <TodoBoard />
      </main>
    </AppProvider>
  );
}
