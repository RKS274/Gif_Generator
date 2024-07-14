import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => { 
  const [gif,setGif] = useState('');
  const [load,setload] = useState('false');
  const[tag,settag] = useState('car');

  async function fetchData(){
    setload(true);
    const urli = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const {data} = await axios.get(urli);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setload(false);
  }

  useEffect( () => {
    fetchData();
  },[])

  function clickHandler(){
    fetchData();
  }
  function changeHandler(event){
    settag(event.target.value);
  }


  return (
    <div className='w-1/2  bg-blue-500 rounded-lg 
    border border-black flex flex-col items-center gap-y-5 mt-[15px] '>
    
      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Random {tag} Gif</h1>
      {
      (load ? (<Spinner/>) : (<img src={gif}  width="450"/>))
      }

      <input
        className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
        onChange={changeHandler}
        value={tag}
      />

      <button onClick={clickHandler}
        className='w-10/12 bg-slate-500 text-lg py-2 rounded-lg mb-[20px]'>
          Generate
        </button>

    </div>
  )
}
export default Tag