import { FaDatabase } from 'react-icons/fa'
import { ThemeToggle } from './theme-toggle';

export function WorkspaceBar() {
  return (
    <div className="w-10 bg-muted border-r flex flex-col justify-between">
      {/* Top content */}
      <div className="p-2">
        {/* Your existing workspace icons */}
      </div>

      {/* Bottom content */}
      <div className="p-2 mb-2">
        <ThemeToggle />
      </div>
    </div>
  );
}
