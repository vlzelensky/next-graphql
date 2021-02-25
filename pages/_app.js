import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../redux/rootReducer";
import "../styles/styles.css";

const store = createStore(rootReducer);

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
