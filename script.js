const nbrs = document.querySelectorAll(".nbr");
const btn = document.querySelector("button");
const rate = document.querySelector(".rate");
const sub = document.querySelector(".sub");
const unsub = document.querySelector(".unsub");

//change the background of only one number when it is clicked
let hold;
for (let i = 0; i < nbrs.length; i++) {
    nbrs[i].addEventListener('click', function onClick(event) {
        hold = nbrs[i];
        event.target.style.background = 'hsl(217, 12%, 63%)';
        event.target.style.color = 'hsl(0, 0%, 100%)'; 
        let x = 0; 
        while (x != i && x < nbrs.length) {
            nbrs[x].style.color = 'hsl(216, 12%, 54%)';
            nbrs[x].style.background = 'hsla(214, 20%, 22%, 1)'; 
            x ++; 
        } 
    });    
}

//display the Thank you screen when submit is clicked
btn.addEventListener('click', function onSubmit(e) {
    rate.innerHTML = "You selected " + hold.innerHTML + " out of 5";
    sub.style.display = "block";
    unsub.style.display = "none";
});
