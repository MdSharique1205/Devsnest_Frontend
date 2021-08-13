import "./style.css";
import { useState, useEffect } from "react";
import Template from "./components/Templates";
import Meme from "./components/Meme";
function App() {
  const [templates, setTemplates] = useState([]);
  const [meme, setMeme] = useState(null);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setTemplates(data.data.memes);
      });
  }, []);
  // console.log(templates);
  return (
    <>
      {meme === null ? (
        <Template templates={templates} setMeme={setMeme} />
      ) : ( 
        <Meme meme={meme} setMeme={setMeme} />
      )}
    </>
  );
}

export default App;
