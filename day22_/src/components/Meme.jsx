import { useState } from "react";
export default function Meme({ meme, setMeme }) {
  const [form, setForm] = useState({
    template_id: meme.id,
    username: "Sharique111",
    password: "uknowmypassword1",
    boxes: [],
  });
  function generateMeme() {
      let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
    form.boxes.map(function (box,idx) {
        return ( url+=`&boxes[${idx}][text]=${box.text}`);
  });
    console.log(form);
    fetch(url)
    .then(res => res.json())
    .then(data=>{
        if(data.success)
        setMeme({...meme, url:data.data.url});
    })
  }
  return (
    <div className="meme">
      <img src={meme.url} alt="" className="image"></img>
      <div>
        {[...Array(meme.box_count)].map((_, idx) => (
          <input
            type="text"
            key={idx}
            placeholder={`Caption ${idx + 1}`}
            onChange={(e) => {
              const newBoxes = form.boxes;
              newBoxes[idx] = { text: e.target.value };
              setForm({ ...form, boxes: newBoxes });
            }}
          ></input>
        ))}
      </div>
      <div className="buttons">
        <button
          onClick={() => {
            generateMeme();
          }}
        >
          Generate Maymay
        </button>
        <button
          onClick={() => {
            setMeme(null);
          }}
        >
          Go back
        </button>
      </div>
    </div>
  );
}
