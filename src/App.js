//import logo from './logo.svg';
import './App.css';
import Tag from "./Components/Tag";
import Random from './Components/Random';


function App() {
  return (
    <div className="w-full h-100vh flex flex-col bg-gray-400 absolute">
      <h1 className=' relative bg-white rounded-lg
      w-full text-center mt-[40px]   text-3xl font-bold '>RANDOM GIFS</h1>
      <div className='items-center w-full flex flex-col gap-y-10 mt-[30px] '>
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

export default App;
