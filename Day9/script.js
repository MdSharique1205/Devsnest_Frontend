const boxes = document.querySelectorAll('.cell');
var count=0;
const total=boxes.length;
document.getElementById('booked count').innerText=count;   
document.getElementById('unbooked count').innerText=total-count; 
for(let box of boxes)
{
    box.addEventListener('click',()=>{
        if(box.classList.contains('clicked'))
            {box.classList.remove('clicked');
            count--;
            }
        else
        {
            box.classList.add('clicked');
            count++;
        }
    document.getElementById('booked count').innerText=count;   
    document.getElementById('unbooked count').innerText=total-count; 
})
var i=1;
document.getElementById('booked count').innerText=count;  
} ;
// document.getElementByClassName('booked count').innerHTML=count;


