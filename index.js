const bars = [...document.querySelectorAll('.bar')];
bars.forEach((bar,index) => {
    const selectedBar = document.querySelector(`.bar${index+1}`);
    bar.addEventListener('click',() =>{
        // reseting the colors of all other bars
        bars.forEach((bar) => {
            bar.style.backgroundColor = '#1A4122';
        });
        // changing the color of selected bar
        selectedBar.style.backgroundColor = '#C15627'
    })
});

// customer testimonials slider 
const testimonialImage = [...document.querySelectorAll('.testimonial-slide-image')];
const reviews = [...document.querySelectorAll('.customer-review')];
const testimonialSliderBars = [...document.querySelectorAll('.testimonial-slider-bar')];
const nextSlideBtn = document.querySelector('.next-slide-btn');

const image = document.querySelector('.testimonial-slide-image');
const review = document.querySelector('.customer-review');
testimonialSliderBars.forEach((bar,index) => {
    bar.addEventListener('click',()=>{
        // console.log('bar clicked : ',index+1);
        
        image.src = testimonialImage[index].src;
        console.log(index ,' clicked', testimonialImage[index].src)
        review.innerHTML = reviews[index].innerHTML;
    })
});
let index=0;
nextSlideBtn.addEventListener('click',()=>{
    if(index == testimonialSliderBars.length)
       {
        index = 0;
        image.src = testimonialImage[index].src;
        review.innerHTML = reviews[index].innerHTML;
       }
    else{
    image.src = testimonialImage[index].src;
    console.log(index ,' clicked', testimonialImage[index].src)
    review.innerHTML = reviews[index].innerHTML;
    index++;
}
})