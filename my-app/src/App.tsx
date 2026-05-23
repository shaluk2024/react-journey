import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea/TextArea";

function App() {
  return (
    <div className="home">
      <Navbar title="TextUtils" about="About" />
      <TextArea />
    </div>
  );
}

export default App;
