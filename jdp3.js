function AddPhoto(number) {
    const album = document.getElementById('album');
    album.innerHTML = '';

    const CarteF = [
        'https://preview.redd.it/i-love-this-sprite-of-riku-since-he-could-finally-be-happy-v0-oquajfhv1qk81.png?auto=webp&s=64dec045e02c482adf6380f6bc37b653f78850fb',
        'https://art.pixilart.com/4fc34e69ea135bb.png',
        'https://i.pinimg.com/originals/74/09/9d/74099dd33f2a5cb602ab17eed45750db.png'
    ];

    const faceCachee = 'https://i.etsystatic.com/22894778/r/il/883698/5712102974/il_570xN.5712102974_oecp.jpg';

    let doubleCarte = [...CarteF, ...CarteF];
    doubleCarte.sort(() => Math.random() - 0.5);

    if (number % 2 !== 0 || number > CarteF.length * 2) {
        alert('Pas assez de cartes');
        return;
    }

    for (let i = 0; i < number; i++) {
        const flipCard = document.createElement('div');
        flipCard.className = 'flip-card';

        const flipCardInner = document.createElement('div');
        flipCardInner.className = 'flip-card-inner';

        const flipCardFront = document.createElement('div');
        flipCardFront.className = 'flip-card-front';

        const flipCardBack = document.createElement('div');
        flipCardBack.className = 'flip-card-back';

        const imgBack = document.createElement('img');
        imgBack.src = faceCachee; 
        imgBack.alt = 'Face Cachée';
        
    

        const imgFront = document.createElement('img');
        imgFront.src = doubleCarte[i]; 
        imgFront.alt = 'Face Visible';

        flipCardBack.appendChild(imgBack);
        flipCardFront.appendChild(imgFront);
        flipCardInner.appendChild(flipCardBack);
        flipCardInner.appendChild(flipCardFront);
        flipCard.appendChild(flipCardInner);
        album.appendChild(flipCard);

        flipCard.dataset.index = i;
        flipCard.onclick = function() {
            flipCardFunction(this);
        };
    }
}

let flippedCards = [];
let pairEgal = 0;

function flipCardFunction(card) {
    if (flippedCards.length === 2 || card.classList.contains('flipped')) {
        return;
    }

    card.classList.add('flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        checkPair();
    }
}

function checkPair() {
    const [firstCard, secondCard] = flippedCards;

    if (firstCard.querySelector('.flip-card-front img').src === secondCard.querySelector('.flip-card-front img').src) {
        pairEgal++;
        flippedCards = [];

        if (pairEgal === (document.querySelectorAll('.flip-card').length / 2)) {
            alert('Vous avez gagné!');
        }
    } else {
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            flippedCards = [];
        }, 1000);
    }
}

