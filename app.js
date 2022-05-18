const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    //will toggle the nav links
    burger.addEventListener('click',() => {
        nav.classList.toggle('nav-active');
    })

    //Animate the Links
    navLinks.forEach((link,index) => {
        console.log(index);
    })
}


/*const app = () =>{
    navSlide();
    navSlide();
    navSlide();
    navSlide();
}*/
navSlide();