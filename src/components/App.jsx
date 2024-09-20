import BacnkgroundHeading from "./BacnkgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";

function App() {
  return (
    <>
      <BacnkgroundHeading />
      <main>
        <Header />
        <ItemList />
        <Sidebar />
      </main>
      <Footer />
    </>
  );
}

export default App;
