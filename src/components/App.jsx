import { useEffect, useState } from "react";
import { initialItems } from "../lib/constants";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";

function App() {
  const itemFromLocalStorage = JSON.parse(localStorage.getItem("items"));
  const [items, setItems] = useState(itemFromLocalStorage || initialItems);

  const onToggleItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });

    setItems(newItems);
  };

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };
  const handleAddItem = (itemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: itemText,
      packed: false,
    };
    setItems([...items, newItem]);
  };

  const handleMarkAllComplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: true };
    });
    setItems(newItems);
  };

  const handleMarkAllInComplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: false };
    });
    setItems(newItems);
  };

  const handleResetToInitial = () => {
    setItems(initialItems);
  };

  const handleRemoveAllitem = () => {
    setItems([]);
  };

  const totalItems = items.length;
  const totalPackedItems = items.filter((item) => item.packed).length;

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header totalItems={totalItems} totalPackedItems={totalPackedItems} />
        <ItemList
          items={items}
          onToggleItem={onToggleItem}
          handleDeleteItem={handleDeleteItem}
        />
        <Sidebar
          handleAddItem={handleAddItem}
          handleMarkAllComplete={handleMarkAllComplete}
          handleMarkAllInComplete={handleMarkAllInComplete}
          handleRemoveAllitem={handleRemoveAllitem}
          handleResetToInitial={handleResetToInitial}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
