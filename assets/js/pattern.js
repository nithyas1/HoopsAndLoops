const props = {
    naruto: {
        heading: "Naruto Crochet Pattern"
    },
    mrbean: {
        heading: "Mr. Bean's Teddy Keychain Pattern"
    }
}
const urlParams = new URLSearchParams(window.location.search);
const itemParam = urlParams.get('item');

document.getElementById('patternheading').innerText = props[itemParam].heading;

fetch('data/'+itemParam+'.txt')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(text => {
        document.getElementById('patternbody').textContent = text;
    })
    .catch(error => {
        console.error('There was a problem fetching the text file:', error);
    });
