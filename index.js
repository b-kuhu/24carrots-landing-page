
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

