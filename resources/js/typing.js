const text = ['a Junior Full-Stack Developer', 'a Graphic Designer', 'a UI/UX Designer'];
const textArea = document.getElementById('typing');
let i = 0
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

(function type() {
    isEnd = false;

    if(i < text.length) {

        if(!isDeleting && j <= text[i].length) {
            currentPhrase.push(text[i][j]);
            j++;
            textArea.textContent = currentPhrase.join('');
        }

        if(isDeleting && j <= text[i].length) {
            currentPhrase.pop(text[i][j])
            j--;
            textArea.textContent = currentPhrase.join('');
        }

        if (j === text[i].length) {
            isEnd = true;
            isDeleting = true;
        }

        if(isDeleting && j === 0) {
            currentPhrase = [];
            isDeleting = false;
            i++;
        }

    }
    else {
        i = 0;
    }
    
    const speedUp = Math.random() * (80 - 50) + 50;
    const normalSpeed = Math.random() * (300 - 200) + 200;
    const time = isEnd ? 2000 : isDeleting ? speedUp : normalSpeed;

    setTimeout(type, time);
}())