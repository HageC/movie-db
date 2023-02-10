import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Movie from "./components/Movie";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
