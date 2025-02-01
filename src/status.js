export default function Status({ items }) {
  const numItems = items.length;
  const numItemsPacked = items.filter((i) => i.isPacked === true).length;
  const percentagePacked = (numItemsPacked / numItems) * 100;
  return (
    <div>
      <p>
        You have {numItems} items on your list and you have packed{" "}
        {numItemsPacked} ({percentagePacked}%) of items.
      </p>
    </div>
  );
}
