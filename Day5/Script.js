
        const num1= document.getElementById('num1');
        const num2 = document.getElementById('num2');
        
    const buttons=document.querySelectorAll('.but');
    console.log(buttons);
     buttons[0].addEventListener('click',()=>{
        document.getElementById('answer').innerHTML=parseInt(num1.value)+parseInt(num2.value);
     });
     buttons[1].addEventListener('click',()=>{
        document.getElementById('answer').innerHTML=parseInt(num1.value)-parseInt(num2.value);
     });
     buttons[2].addEventListener('click',()=>{
        document.getElementById('answer').innerHTML=parseInt(num1.value)*parseInt(num2.value);
     });
     buttons[3].addEventListener('click',()=>{
        document.getElementById('answer').innerHTML=parseInt(num1.value)/parseInt(num2.value);
     });

