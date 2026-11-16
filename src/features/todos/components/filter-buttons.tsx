import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../store/filter-slice';
import type { FilterStatus } from '../store/filter-slice';
import type { RootState } from '@/store/store';

const FILTERS: { label: string; value: FilterStatus }[] = [
  { label: 'Все', value: 'all' },
  { label: 'Активные', value: 'active' },
  { label: 'Выполненные', value: 'completed' },
];

export function FilterButtons() {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state: RootState) => state.filter.status);

  return (
    <div className="flex gap-2">
      {FILTERS.map((item) => {
        const isActive = currentFilter === item.value;
        return (
          <button
            key={item.value}
            type="button"
            onClick={() => dispatch(setFilter(item.value))}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
              isActive
                ? 'bg-blue-600 text-white'
                : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-100'
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
