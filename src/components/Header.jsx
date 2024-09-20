import Counter from "./Counter";
import Logo from "./Logo";
import { useItemsContext } from "../hooks/hooks";

export default function Header() {
  const { totalItems, totalPackedItems } = useItemsContext();
  return (
    <header>
      <Logo />
      <Counter totalItems={totalItems} totalPackedItems={totalPackedItems} />
    </header>
  );
}
