export default function Templates({templates, setMeme}){
    return (
        <>
          {
            templates.map((template)=>(
              <div key = {template.id} className = "template" onClick ={()=>{
                setMeme(template);
              }}> 
                <div style = {{backgroundImage:`url(${template.url})`}} className = "image"></div>
              </div>
          
           ))}
           </>
    );
}