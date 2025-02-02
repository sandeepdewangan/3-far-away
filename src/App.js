import { useState } from "react";
import Form from "./form";
import Header from "./header";
import PackingList from "./packing_list";
import Status from "./status";
import Sorting from "./sorting";

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

  function sortByFn(by) {
    switch (by) {
      case "title":
        setItems(() =>
          items.slice().sort((a, b) => a.title.localeCompare(b.title))
        );
        break;
      case "packed":
        setItems(() =>
          items.slice().sort((a, b) => Number(a.isPacked) - Number(b.isPacked))
        );

        break;
      default:
        setItems(() =>
          items.slice().sort((a, b) => Number(a.id) - Number(b.id))
        );
    }
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
      <Sorting sortByFn={sortByFn} />
      <Status items={items} />
    </div>
  );
}

export default App;
