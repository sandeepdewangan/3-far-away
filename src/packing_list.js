export default function PackingList({ items, onDeleteItems, onPacked }) {
  return (
    <div>
      {items.map((item) => (
        <div style={{ display: "flex" }} key={item.id}>
          <input
            type="checkbox"
            checked={item.isPacked}
            onChange={() => onPacked(item.id)}
          />
          <p style={item.isPacked ? { textDecoration: "line-through" } : {}}>
            {item.title}
          </p>
          <button onClick={() => onDeleteItems(item.id)}>x</button>
        </div>
      ))}
    </div>
  );

  //   {
  //   props.items.map((item) =>

  // }
  //   <div>
  //     <select>
  //       <option>Sort by Name</option>
  //       <option>Sort by Packed Status</option>
  //       <option>Sort by Creation</option>
  //     </select>
  //   </div>
  // </Fragment>
}
