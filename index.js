let hover_element = document.getElementById('hover-img');
let hover_element2 = document.getElementById('hover-img2');
const animate = gsap.timeline();
animate.from(hover_element,{
    duration:.5,
    opacity:0,
    scale:-0.5,
   
}),
animate.from(hover_element2,{
    duration:.5,
    opacity:0,
    scale:-0.5,
})

for (let i=0;i<5;i++){
    const text = document.getElementsByClassName('text-w')[i];
    animate.from(text,{
        duration:.2,
        opacity:0,
        y:+60,
        }); 
    text.onclick=null;

}

hover_element.addEventListener('mouseover',(e) => {
    for (let i=0;i<5;i++){
    const text = document.getElementsByClassName('text-w')[i]; 
    text.style['-webkit-text-stroke'] = '1px gray';
    text.style.color = 'transparent';
    text.style.zIndex = '2';
    }hover_element.style.zIndex = '3';
})
hover_element.addEventListener('mouseout',(e) => {
    for (let i=0;i<5;i++){
    const text = document.getElementsByClassName('text-w')[i]; 
    text.style.color = 'white';
    text.style['-webkit-text-stroke'] = '0px white';
    text.style.zIndex = '3';
    text.style['-webkit-mask-box-image'] = ''; // Reset the mask box image
    }
})
hover_element2.addEventListener('mouseover',(e) => {
    for (let i=0;i<5;i++){
    const text = document.getElementsByClassName('text-w')[i]; 
    text.style['-webkit-text-stroke'] = '1px gray';
    text.style.color = 'transparent';
    text.style.zIndex = '2';
    hover_element.style['-webkit-mask-box-image'] = 'url(https://images.pexels.com/photos/31043835/pexels-photo-31043835/free-photo-of-serene-sunset-over-gyeongju-s-scenic-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2) 10 20 20 10'; // Add this line
    }
    hover_element2.style.zIndex = '3';

})
hover_element2.addEventListener('mouseout',(e) => {
    for (let i=0;i<5;i++){
    const text = document.getElementsByClassName('text-w')[i]; 
    text.style.color = 'white';
    text.style['-webkit-text-stroke'] = '0px white';
    text.style.zIndex = '1';
    text.style['-webkit-mask-box-image'] = ''; // Reset the mask box image
    }    hover_element.style.zIndex = '0';
})
