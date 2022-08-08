import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Header from "./Header";
import Home from "../pages/Home";
import Introduction from "../pages/Introduction";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

import { PATHS } from "../constants";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path={PATHS.newPlayer} element={<Introduction />} />
        <Route exact path={PATHS.character} element={<>Character page</>} />
        <Route exact path={PATHS.affixes} element={<>Affixes</>} />
        <Route exact path={PATHS.leaderboard} element={<>Leaderboard</>} />
        <Route exact path={PATHS.login} element={<SignIn />} />
        <Route exact path={PATHS.signUp} element={<SignUp />} />
        <Route path="" element={<>No path found.</>} />
      </Routes>
    </Router>
  );
};

export default App;
