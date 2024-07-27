import { useState } from "react";

const Navbar = () => {
  const [query, setQuery] = useState("");

  return (
    <nav className="navbar bg-base-100 shadow-lg p-4">
      <div className="flex-1">
        <div className="text-2xl font-bold flex items-center gap-2">
          <span role="img">🎥</span>
          <h1>PopCornFLIXX</h1>
        </div>
      </div>
      <div className="flex-none">
        <input
          className="input input-bordered w-full max-w-xs"
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="ml-4">
        <p className="text-sm">
          Found <strong>x</strong> results
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
