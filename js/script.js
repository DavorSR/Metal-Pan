// window.addEventListener("scroll", function(){
//     let menu = this.document.querySelector("nav");
//     menu.classList.toggle("sticky", this.window.scrollY > 0)
// })


// Hamburger menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

hamburger.onclick = () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

document.querySelectorAll(".nav-link").forEach(n => n.onclick = () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
})



// Intersection Observer

const loadingAnimation = function () {
    const load = document.querySelectorAll('.load');

    const show = (entries, observer) => {
        entries.forEach(element => {

            if (!element.isIntersecting) {
                return;
            } else {
                element.target.classList.add('fadeIn');
            };
            observer.unobserve(element.target);
        });
    };



    const Observer = new IntersectionObserver(show, { threshold: 0.7 });

    load.forEach(tb => Observer.observe(tb));
}
loadingAnimation();


// Show image modal

const gallery = document.querySelectorAll('.gallery img');
const popup = document.querySelector('.gallery_popup-image');
const popImg = document.querySelector('.gallery_popup-image img');

// going through everything element in array 

gallery.forEach((image, index) => {

    popup.style.visibility = 'hidden';

// event listener 

    image.onclick = () => {
        popup.style.display = 'block';
        popup.style.visibility = 'visible';
        popImg.src = image.getAttribute('src');

        // simple counter

        let imageIndex = index;
        let next = imageIndex++;
        let prev = imageIndex--;


        // const hideShowArrows = (gallery, prevBtn, nextBtn, imageIndex) => {
        //     if(imageIndex === 0){
        //         prevBtn.classList.add('is-hidden');
        //         nextBtn.classList.remove('is-hidden')
        //     } else if(imageIndex === gallery.length -1){
        //         prevBtn.classList.remove('is-hidden');
        //         nextBtn.classList.add('is-hidden')
        //     } else {
        //         prevBtn.classList.remove('is-hidden');
        //         nextBtn.classList.remove('is-hidden');
        //     }
        // }

        window.addEventListener("keyup", (e) => {


            if (e.keyCode === 37) {
                popImg.src = gallery[prev].src;
                prev--;
                next = prev + 2;
            } else if (e.keyCode === 39) {
                popImg.src = gallery[next].src;
                next++;
                prev = next - 2;
            } else if (e.keyCode === 27) {
                popup.style.visibility = 'hidden';
            }
        });

        prevBtn.addEventListener("click", () => {
            popImg.src = gallery[prev].src;
            prev--;
            next = prev + 2;
        });

        nextBtn.addEventListener("click", () => {
            popImg.src = gallery[next].src;
            next++;
            prev = next - 2;

        });

    }
});


document.querySelector('.gallery_popup-image span').onclick = () => {
    popup.style.display = 'none';
}

// /////////////////////////////////
