// import './App.css'
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const ApiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  return (
    <Router>
      <div>
        <Navbar />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <div className="container"></div>
      </div>
      <Routes>
        <Route
          exact
          path="/home"
          element={
            <News
              setProgress={setProgress}
              ApiKey={ApiKey}
              key="home"
              pageSize={8}
              country="in"
              category="general"
            />
          }
        />
        <Route
          exact
          path="/business"
          element={
            <News
              setProgress={setProgress}
              ApiKey={ApiKey}
              key="business"
              pageSize={8}
              country="in"
              category="business"
            />
          }
        />
        <Route
          exact
          path="/"
          element={
            <News
              setProgress={setProgress}
              ApiKey={ApiKey}
              key="general"
              pageSize={8}
              country="in"
              category="general"
            />
          }
        />
        <Route
          exact
          path="/sports"
          element={
            <News
              setProgress={setProgress}
              ApiKey={ApiKey}
              key="sports"
              pageSize={8}
              country="in"
              category="sports"
            />
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <News
              setProgress={setProgress}
              ApiKey={ApiKey}
              key="entertainment"
              pageSize={8}
              country="in"
              category="entertainment"
            />
          }
        />
        <Route
          exact
          path="/health"
          element={
            <News
              setProgress={setProgress}
              ApiKey={ApiKey}
              key="health"
              pageSize={8}
              country="in"
              category="health"
            />
          }
        />
        <Route
          exact
          path="/technology"
          element={
            <News
              setProgress={setProgress}
              ApiKey={ApiKey}
              key="technology"
              pageSize={8}
              country="in"
              category="technology"
            />
          }
        />
        <Route
          exact
          path="/science"
          element={
            <News
              setProgress={setProgress}
              ApiKey={ApiKey}
              key="science"
              pageSize={8}
              country="in"
              category="science"
            />
          }
        />
      </Routes>
    </Router>
  );
};
export default App;
