import Navbar from "./components/navbar";
import Fights from "./pages/fights";
import './App.css'; // Import the CSS file

const navbarOptions = [
  { title: "Fights", href: "/fights" },
  { title: "Suggestions", href: "/suggestions" }
];

const App = () => {
  return (
    <div>
      <Navbar options={navbarOptions} />
      <Fights />
    </div>
  );
};

export default App;
