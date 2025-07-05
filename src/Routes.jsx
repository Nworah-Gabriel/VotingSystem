import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./App";
import VotingPage from "./components/Voting";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/vote" element={<VotingPage />} />
      </Routes>
    </Router>
  );
}