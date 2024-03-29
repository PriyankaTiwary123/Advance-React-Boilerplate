import { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { store } from "./appStore";
import Layout from "./Layout";
import routes from "./routes";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
            <Routes>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
