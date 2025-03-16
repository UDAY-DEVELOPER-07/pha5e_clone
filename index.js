let hover_element = document.getElementById('hover-img');
let hover_element2 = document.getElementById('hover-img2');
const animate = gsap.timeline();
let img1 = document.getElementsByTagName('img')[0];
let img2 = document.getElementsByTagName('img')[1];

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
    img2.src = "https://img.icons8.com/sf-ultralight/25/FFFFFF/new-post.png";
    img2.style.border = '2 px solid white';
    img2.style.height = '100%';
    img2.style.width = '100%';
    

})
hover_element.addEventListener('mouseout',(e) => {
    for (let i=0;i<5;i++){
    const text = document.getElementsByClassName('text-w')[i]; 
    text.style.color = 'white';
    text.style['-webkit-text-stroke'] = '0px white';
    text.style.zIndex = '3';
    text.style['-webkit-mask-box-image'] = ''; // Reset the mask box image
    }img2.src = "https://images.pexels.com/photos/31043835/pexels-photo-31043835/free-photo-of-serene-sunset-over-gyeongju-s-scenic-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
})
hover_element2.addEventListener('mouseover',(e) => {
    for (let i=0;i<5;i++){
    const text = document.getElementsByClassName('text-w')[i]; 
    text.style['-webkit-text-stroke'] = '1px gray';
    text.style.color = 'transparent';
    text.style.zIndex = '2';
    hover_element.style['-webkit-mask-box-image'] = 'url(https://images.pexels.com/photos/31043835/pexels-photo-31043835/free-photo-of-serene-sunset-over-gyeongju-s-scenic-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2) 10 20 20 10'; // Add this line
    }hover_element2.style.zIndex = '3';
    hover_element.style.zIndex = '0';
    img1.src = "https://img.icons8.com/sf-ultralight/25/FFFFFF/new-post.png";
    img1.style.border = '2 px solid white';
    img1.style.height = '100%';
    img1.style.width = '100%';
    

})
hover_element2.addEventListener('mouseout',(e) => {
    for (let i=0;i<5;i++){
    const text = document.getElementsByClassName('text-w')[i]; 
    text.style.color = 'white';
    text.style['-webkit-text-stroke'] = '0px white';
    text.style.zIndex = '3';
    text.style['-webkit-mask-box-image'] = ''; // Reset the mask box image
    }
    img1.src ="https://images.pexels.com/photos/30988651/pexels-photo-30988651/free-photo-of-snow-monkeys-relaxing-in-hot-springs-japan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    hover_element.style.zIndex = '0';
    hover_element2.style.zIndex = '0';
})

let isDragging = false;
let offsetX = 0, offsetY = 0;

hover_element.addEventListener('mousemove', function(event) {
    isDragging = true;
    offsetX = event.clientX - dragBox.offsetLeft;
    offsetY = event.clientY - dragBox.offsetTop;
    hover_element.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', function(event) {
    if (isDragging) {
        hover_element.style.left = `${event.clientX - offsetX}px`;
        hover_element.style.top = `${event.clientY - offsetY}px`;
    }
});

document.addEventListener('mouseup', function() {
    isDragging = false;
    hover_element.style.cursor = 'grab';
});


// let isDragging2 = false;
// let offsetX1 = 0;
// let offsetY1 = 0;
// hover_element2.addEventListener('mousemove', function(event) {
//     isDragging2 = true;
//     offsetX1 = event.clientX;
//     offsetY1 = event.clientY;
//     hover_element2.style.cursor = 'grabbing';
// });

// document.addEventListener('mousemove', function(event) {
//     if (isDragging2) {
//         hover_element2.style.left = `${event.clientX - offsetX1+100}px`;
//         hover_element2.style.top = `${event.clientY - offsetY1+100}px`;
//     }
// });

// hover_element2.addEventListener('mouseup', function() {
//     isDragging2 = false;
//     hover_element2.style.cursor = 'grab';
// });