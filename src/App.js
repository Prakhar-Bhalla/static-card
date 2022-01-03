import './App.css';
import {Makesec} from "./components/Makesec";

function App() {
  const sec1 = ["", "Mobile Operating System", "Android", "Blackberry", "iPhone", "Windows Phone"];
  const sec2 = ["", "Mobile Manufacturers", "Samsung", "HTC", "Micromax", "Apple"];
  return (
    <div style={{margin : "20px"}}>
     <Makesec sec1 = {sec1} sec2 = {sec2}/>
    </div>
  );
}

export default App;
