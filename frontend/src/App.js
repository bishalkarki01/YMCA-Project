/** @format */

import HomePage from "./homepage/home";
import LoginPage from "./login/login";
import RegistrationPage from "./registration/registration";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
