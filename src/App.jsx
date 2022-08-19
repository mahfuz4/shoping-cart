import { Provider } from "react-redux";
import "./App.css";
import ShopingCart from "./page/ShopingCart";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <ShopingCart />
    </Provider>
  );
}

export default App;
