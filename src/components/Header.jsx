import Counter from "./Counter";
import Logo from "./Logo";
import { useItemsStore } from "../store/itemsStore";

export default function Header() {
  const items = useItemsStore((state) => state.items);
  return (
    <header>
      <Logo />
      <Counter
        totalItems={items.length}
        totalPackedItems={items.filter((item) => item.packed).length}
      />
    </header>
  );
}
