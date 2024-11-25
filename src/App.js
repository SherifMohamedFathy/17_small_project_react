import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import BirthDays from "./components/birthday/BirthDays";
import Cart from "./components/cartShopping/Cart";
import Menu from "./components/filter/Menu";
import Paragraph from "./components/pargraphe/Paragraph";
import Sidebar from "./components/sidebar/Sidebar";
import Slider from "./components/slider/Slider";
import Home from "./components/sidebar/Home";
import Projects from "./components/sidebar/Projects";
import Team from "./components/sidebar/Team";
import Calender from "./components/sidebar/Calender";
import Documents from "./components/sidebar/Documents";
import Jokes from "./components/Jokes/Jokes";
import Password from "./components/password/Password";

import Rock from "./components/rock/Rock";
import ToDoList from "./components/ToDo/ToDoList";
import QuizApp from "./components/quizApp/QuizApp";
import FlipCoins from "./components/coins/FlipCoins";
import ColorBox from "./components/colorBox/ColorBox";
import CreditCard from "./components/creditCard/CreditCard";
import StopWatch from "./components/stopwatch/StopWatch";
import GuessNumber from "./components/gussnmber/GussNumber";
import Recipe from "./components/recipes/Recipe";

function App() {
  return (
    <>
      {/* <BirthDays />
      <Menu />
      <Slider />
      <Paragraph />
      <Cart />
     
      <Router>
        <Routes>
          <Route path="/" element={<Sidebar />} />
          <Route path="/home" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
      <Jokes />
      <Password />
      <Rock />
      <ToDoList />
      <QuizApp />
      <FlipCoins />
      <ColorBox />
      <CreditCard />
      <StopWatch />
      <GuessNumber /> */}
      <Router>
        <Recipe />
      </Router>
    </>
  );
}

export default App;
