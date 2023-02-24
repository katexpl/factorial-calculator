import FactorialCalculator from "./pages/factorialCalculator";
import WelcomeScreen from "./pages/welcomeScreen";
import "./styles/index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />

          <Route
            path="/factorial-calculator"
            element={<FactorialCalculator />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
