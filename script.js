
const observer1 = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
    
        if (entry.isIntersecting){
            entry.target.classList.add('show-up');
        }/* else{
            entry.target.classList.remove('show');
        } */
    });
})

const observer2 = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
        console.log(entry+"left")
        if (entry.isIntersecting){
            entry.target.classList.add('show-left');
        }/* else{
            entry.target.classList.remove('show');
        } */
    });
})
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer1.observe(el))

//animation left
const hiddenElementsLeft = document.querySelectorAll('.hidden-left');
hiddenElementsLeft.forEach((el)=> observer2.observe(el))



//animation glow
let circle = document.getElementById('light');

const onMouseMove = (e) => {
  // Calculate the center coordinates of the circle
  let centerX = e.clientX - (circle.offsetWidth / 2);
  let centerY = e.clientY - (circle.offsetHeight / 2);

  // Update the position of the circle based on the center coordinates
  circle.style.left = centerX + 'px';
  circle.style.top = centerY + 'px';
}

document.addEventListener('mousemove', onMouseMove);

//smooth scroll


    document.addEventListener('DOMContentLoaded', function () {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    });


    document.querySelectorAll('.item').forEach(item => {
        console.log(item.style.getPropertyValue('--index')); 
    });

