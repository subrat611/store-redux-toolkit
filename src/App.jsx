import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";

import store from "./store/store";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<CartPage />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
