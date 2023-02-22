import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";

import store from "./store/store";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<h1>shop</h1>} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
