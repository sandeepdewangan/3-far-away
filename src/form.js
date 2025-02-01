import { useState } from "react";

export default function Form({ onAddItems }) {
  const [title, setTitle] = useState("");
  const [qty, setQty] = useState(1);

  function onFormSubmit(e) {
    e.preventDefault();
    if (!title) return;
    const newData = { title, qty, id: Date.now(), isPacked: false };
    onAddItems(newData);
    // clear the fields
    setTitle("");
    setQty(1);
  }

  return (
    <form onSubmit={onFormSubmit}>
      <p>What do you want to pack?</p>
      <select value={qty} onChange={(e) => setQty(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type="submit" value="Add" />
    </form>
  );
}
