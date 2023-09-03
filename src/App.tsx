import './App-style'
import { Container } from "./App-style";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shorts from "./pages/shorts";
import Subscribe from "./pages/subscribe";
import Library from "./pages/library";
import { UserStorage } from "./contexts/userContext";
import Login from "./pages/login/styles";
import YourVideos from "./pages/videos";
import SearchPage from "./pages/search";
import SignUp from './pages/sign-up';
 
function App() {

  

  return (
    <BrowserRouter>
      <UserStorage>
        <div className="App">
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shorts" element={<Shorts />} />
              <Route path="/subscribe" element={<Subscribe />} />
              <Route path="/library" element={<Library />} />
              <Route path="/login" element={<Login />} />
              <Route path="/yourvideos" element={<YourVideos />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </Container>
        </div>
      </UserStorage>
    </BrowserRouter>
  );
}



export default App;
