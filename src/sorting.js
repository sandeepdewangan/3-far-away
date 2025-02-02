import { useState } from "react";

export default function Sorting({ sortByFn }) {
  const [sortBy, setSortBy] = useState("creation");

  function onChange(e) {
    setSortBy(e.target.value);
    sortByFn(e.target.value);
  }

  return (
    <div>
      <select value={sortBy} onChange={onChange}>
        <option value="creation">Sort by creation date</option>
        <option value="title">Sort by title</option>
        <option value="packed">Sort by packed</option>
      </select>
    </div>
  );
}
