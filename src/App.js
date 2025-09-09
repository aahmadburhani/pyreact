
// import './App.css';
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar/>
    <div className="d-flex gap-4 justify-content-center pt-5">
      
    <Cards title="Javascript"
    src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg"
    prag="Hello there our name is dash dash and this card is about what you think can be"/>
    <Cards title="ReactJs"
    src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg"
    prag="Hello there our name is dash dash and this card is about what you think can be"/>
    <Cards title="NodeJs"
    src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg"
    prag="Hello there our name is dash dash and this card is about what you think can be"/>
    </div>
    </>
  );
};
export default App;
