import { useState } from "react";
import Form from "./form";
import Header from "./header";
import PackingList from "./packing_list";
import Status from "./status";

const initialItems = [
  {
    id: 1,
    title: "Tshirt",
    qty: 2,
    isPacked: true,
  },
  {
    id: 2,
    title: "Woolen Clothes",
    qty: 4,
    isPacked: false,
  },
];

function App() {
  const [items, setItems] = useState([]);
  function onAddItems(newData) {
    // update state
    setItems((items) => [...items, newData]);
  }
  function onDeleteItems(id) {
    // update state
    setItems((items) => items.filter((e) => e.id !== id));
  }
  function onPacked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isPacked: !item.isPacked } : item
      )
    );
  }

  return (
    <div>
      <Header />
      <Form onAddItems={onAddItems} />
      <PackingList
        items={items}
        onDeleteItems={onDeleteItems}
        onPacked={onPacked}
      />
      <Status />
    </div>
  );
}

export default App;
