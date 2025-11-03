const openButton = document.getElementById('open-button');
const container = document.querySelector('.container');
const messageP = document.getElementById('message');
const cakeContainer = document.querySelector('.cake-container');
const birthdaySong = document.getElementById('birthday-song');
const surpriseImage = document.getElementById('surprise-image');

// GANTI DENGAN PATH LAGU DAN GAMBAR ANDA
birthdaySong.src = 'lagu.mp3'; // Contoh: 'songs/happy-birthday.mp3'
surpriseImage.src = 'ultahdeka.jpg'; // Contoh: 'images/surprise.jpg'

const messageText = "selamat ulang tahun sayang, aku engga tahu gimana cara paling bagus buat ngucapinnya, tapi aku cuma pengen kamu tahu kalau aku bersyukur banget punya kamu. Semoga semua hal baik dateng ke kamu karena kamu pantas buat bahagia. Sekali lagi Happy birthday sayangggg loveeeeuuuuuuuuuuuuuuuu";
let i = 0;

function typeWriter() {
    if (i < messageText.length) {
        messageP.innerHTML += messageText.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    } else {
        setTimeout(() => {
            surpriseImage.classList.add('show');
            cakeContainer.style.display = 'none';
        }, 500);
    }
}

const animationContainer = document.getElementById('animation-container');

const balloonColors = ['#ffbe0b', '#fb5607', '#ff006e', '#8338ec', '#3a86ff', '#ef476f', '#ffd166', '#06d6a0', '#118ab2'];

function createBalloons(count) {
    for (let i = 0; i < count; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = `${Math.random() * 100}vw`;
        balloon.style.animationDelay = `${Math.random() * 5}s`;
        balloon.style.backgroundColor = balloonColors[Math.floor(Math.random() * balloonColors.length)];
        animationContainer.appendChild(balloon);
    }
}

openButton.addEventListener('click', () => {
    container.classList.add('open');
    birthdaySong.play();
    setTimeout(() => {
        cakeContainer.classList.add('animate');
        typeWriter();
        createBalloons(15);
    }, 1000);
});