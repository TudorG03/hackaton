import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Dashboard from "./routes/dashboard/dashboard.component";
import Home from "./routes/home/home.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default App;
