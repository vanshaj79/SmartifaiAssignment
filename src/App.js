import "./App.css";
import SideBar from "./pages/SideBar";
import WeatherData from "./pages/WeatherData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  
  return <div className="bg-[#2B2B2B] min-h-[100vh]">
    <SideBar/>  
    <WeatherData/>
  </div>;
}

export default App;
