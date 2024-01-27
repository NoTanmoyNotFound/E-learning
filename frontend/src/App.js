import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Company from "./components/CollabCompany/Company";
import Bestcourses from "./components/BestCourses/Bestcourses";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Body />
      </div>
      <Company />
      <Bestcourses />
    </div>
  );
}

export default App;
