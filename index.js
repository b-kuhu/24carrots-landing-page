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
const names = [...document.querySelectorAll('.customer-name')];
const professions = [...document.querySelectorAll('.customer-profession')]
const testimonialSliderBars = [...document.querySelectorAll('.testimonial-slider-bar')];
const nextSlideBtn = document.querySelector('.next-slide-btn');

const image = document.querySelector('.testimonial-slide-image');
const review = document.querySelector('.customer-review');
const customerName = document.querySelector('.customer-name');
const profession = document.querySelector('.customer-profession');

const img = testimonialImage[0].src;
const rev = reviews[0].innerHTML;
const cName = names[0].innerHTML;
const prof = professions[0].innerHTML;
testimonialSliderBars.forEach((bar,index) => {
    bar.addEventListener('click',()=>{
    if(index ==0)
    {
        image.src = img;
        review.innerHTML = rev;
        customerName.innerHTML = cName;
        profession.innerHTML = prof;
    }
        image.src = testimonialImage[index].src;
        review.innerHTML = reviews[index].innerHTML;
        customerName.innerHTML = names[index].innerHTML;
        profession.innerHTML = professions[index].innerHTML;
    })
});
let i=0;
nextSlideBtn.addEventListener('click',()=>{
    i++;
    if(i >= testimonialSliderBars.length)
    {
        i = 0;
        image.src = img;
        review.innerHTML = rev;
        customerName.innerHTML = cName;
        profession.innerHTML = prof;
    }
    image.src = testimonialImage[i].src;
    review.innerHTML = reviews[i].innerHTML;
    customerName.innerHTML = names[index].innerHTML;
    profession.innerHTML = professions[index].innerHTML;
})