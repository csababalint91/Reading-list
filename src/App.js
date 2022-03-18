import Navbar from "./Components/Navbar";
import BookContextProvider from "./Contexts/BookContext";

function App() {
  return (
    <BookContextProvider>
      <Navbar />
    </BookContextProvider>
  )
}

export default App;
