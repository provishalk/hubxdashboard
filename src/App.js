import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./containers/Dashboard/Dashboard";
const App = () => {
  return (
    <>
      <BrowserRouter>
          <Route path="/" exact component={Dashboard} />
      </BrowserRouter>
    </>
  );
};

export default App;
