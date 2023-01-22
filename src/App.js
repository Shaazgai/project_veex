import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Bunner from "./components/Bunner";
import Banner from "./components/Banner";
import Benefit from "./components/Benefit";
import Selection from "./components/Selection";
import Categories from "./components/Categories";
import Provide from "./components/Provide";
import Say from "./components/Say";
import Partner from "./components/Partner";
import News from "./components/News";
import Useful from "./components/Useful"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Bunner />
      <Banner />
      <Benefit />
      <Selection />
      <Categories />
      <Provide />
      <Say />
      <Partner />
      <News />
      <Useful />
    </div>
  );
}

export default App;
