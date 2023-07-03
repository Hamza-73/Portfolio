
let images = [
    {
        img: '/img/quizz.PNG',
        h1: 'JS Quiz App',
        github: 'https://github.com/Hamza-73/JavaScript-Quiz-App'
    },
    {
        img: '/img/elearning.PNG',
        h1: 'E-Learning Website',
        github: 'https://github.com/Hamza-73/E-Learning-Website'
    },
    {
        img: '/img/music.PNG',
        h1: 'Music Web App',
        github: 'https://github.com/Hamza-73/Music-Web-App'
    },
    {
        img: '/img/product.PNG',
        h1: 'Product Landing Page',
        github: 'https://github.com/Hamza-73/Product-Landing-Page'
    },
    {
        img: '/img/university.PNG',
        h1: 'University Website',
        github: 'https://github.com/Hamza-73/University-Website.git'
    }
]


let prev = document.getElementById('prev');
let next = document.getElementById('next');

let heading = document.getElementById('p-content');
let image = document.getElementById('image');
let github = document.getElementById('github');


let imgIndex = 0;

function imageChanger(imgIndex) {
    let currImage = images[imgIndex];
    image.src = currImage.img;
    heading.innerHTML = currImage.h1;
    github.href = currImage.github;
}
prev.addEventListener('click', () => {
    imgIndex < 0 ? imgIndex = images.length - 1 : imgIndex = (imgIndex - 1) % images.length;
    imageChanger(imgIndex);
})

next.addEventListener('click', () => {
    imgIndex = (imgIndex + 1) % images.length;
    imageChanger(imgIndex);
})



// SHOW AND HIDE MENU
let navbar = document.getElementById('navbar');
function showMenu() {
    navbar.style.right = '0';
}

function hideMenu() {
    navbar.style.right = '-420px'
}



// on scrol animation
const hiddenElements = document.querySelectorAll('.hidden')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entries)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
    })
})

hiddenElements.forEach((el) => observer.observe(el))


// TITLE CHANGE
let nav = document.querySelectorAll('.nav');
nav.forEach((e) => {
    e.addEventListener('click', () => {
        document.title = `Ameer Hamza | Portfolio | ${e.textContent}`
        if (window.innerWidth <= 700) {
            hideMenu();
        }
    })
})
