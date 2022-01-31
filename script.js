const plantBtn = document.getElementById('plant')
const reptileBtn = document.getElementById('reptile')
const duskBtn = document.getElementById('dusk')
const bugBtn = document.getElementById('bug')
const beastBtn = document.getElementById('beast')
const mechBtn = document.getElementById('mech')
const birdBtn = document.getElementById('bird')
const aquaBtn = document.getElementById('aqua')
const dawnBtn = document.getElementById('dawn')
const display = document.getElementById('display')

const availAxies = {
    'plant': [1905892, 7569637,786243],
    'reptile': [2532641],
    'dusk': [7613875],
    'bug': [9305762,10802027],
    'beast': [2174793,2104240],
    'mech': [],
    'bird': [359378,5995755,7092900],
    'aqua': [1905507,3793564,3040164,3036297,3296216,
        1905487,3036330,3040222,1414304,3040065,1905641,
        2329658,2329630,919699,871575],
    'dawn': []
}

function openLink(url) {
    window.open(url, '_blank').focus();
}

function generateCard(axieID) {

    let container = document.createElement('div');
    let img = document.createElement('img');
    let contId = document.createElement('h4');
    let imgSrc = `https://assets.axieinfinity.com/axies/${axieID}/axie/axie-full-transparent.png`;
    let idSrc = `#${axieID}`;

    container.classList.add('axieCont');
    container.onclick = ()=>{openLink(`https://marketplace.axieinfinity.com/axie/${axieID}/`)};
    img.src = imgSrc;
    contId.innerText = idSrc;

    container.append(img,contId);

    return container;
}

function clearDisplay() {
    display.innerHTML = '';
};

function drawAxies(category) {
    clearDisplay();

    category.forEach(element => {
        display.append(generateCard(element));
    });

}