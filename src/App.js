import BookList from "./Components/BookList";
import Navbar from "./Components/Navbar";
import BookContextProvider from "./Contexts/BookContext";

function App() {
  return (
    <BookContextProvider>
      <Navbar />
      <BookList />
    </BookContextProvider>
  )
}

export default App;
