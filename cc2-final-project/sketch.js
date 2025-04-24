let titles = [];
let api_url;
let afinn;
let font;
let scoredWords = [];
let totalScore = 0;
let displayedTitles = [];
let titleHeight = 24;
let canvasHeight = 800;
let negativeWords = [];
let positiveWords = [];
let currentColors = {};

function preload() {
  font = loadFont('led.ttf');
  afinn = loadJSON('AFINN.json');
}

function setup() {
  createCanvas(1350, canvasHeight);
  textAlign(LEFT, TOP);
  textSize(24);
  textWrap(WORD);
  textFont(font);

  api_url = generateAPIUrl();
  // referenced from https://www.geeksforgeeks.org/p5-js-loadjson-function/
  loadJSON(api_url, loadTitles);
  setInterval(addRandomTitle, 750);
}

function draw() {
  background(255, 75);
  displayTitles(10, 10, titleHeight);
}

function generateAPIUrl() {
  //used chatgpt to get continously updating date for link for this a while back do not have transcript 
  // I know I wrote something along the lines of how do I make this link continuously update to the current date
  let now = new Date();
  let year = now.getFullYear();
  let month = String(now.getMonth() + 1).padStart(2, '0');
  let day = String(now.getDate()).padStart(2, '0');

  let startdatetime = `${year}${month}${day}000000`;
  let enddatetime = `${year}${month}${day}235959`;
  return `https://api.gdeltproject.org/api/v2/doc/doc?query=news%20sourcelang:eng&mode=ArtList&maxrecords=250&sort=ToneAsc&format=json&startdatetime=${startdatetime}&enddatetime=${enddatetime}`;
}

function loadTitles(data) {
  if (data.articles) {
    for (let i = 0; i < data.articles.length; i++) {
      titles.push(data.articles[i].title);
    }
    //console.log('Titles:', titles);
    scoring();
  }
}

function scoring() {
  //AFINN code draws from Coding Train tutorials (https://www.youtube.com/watch?v=uw3GbsY_Pbc)
  if (!afinn) {
    console.log("AFINN data not loaded yet.");
    return;
  }
  
  let titleString = titles.join(' ');
  let words = splitTokens(titleString, ' ,.!?');

  console.log("Words extracted:", words);

  for (let i = 0; i < words.length; i++) {
    let word = words[i].toLowerCase();
    if (afinn[word] !== undefined) {
      let score = afinn[word];
      scoredWords.push({word: word, score: score});
      currentColors[word] = colorForScore(score);
      
      if (score < 0) {
        negativeWords.push(word);
      } else if (score > 0) {
        positiveWords.push(word);
      }
    }
  }
}

function colorForScore(score) {
  //Bug solved with ChatGPT my code wasnt making every score red to to eliminate error added String(score)
  score = String(score); 
  let colors = {
    "-5": [255, 0, 0],  
    "-4": [245, 0, 0],
    "-3": [235, 0, 0],
    "-2": [225, 0, 0],
    "-1": [215, 0, 0], 
    "1": [54, 122, 61],
    "2": [50, 138, 59],
    "3": [48, 156, 59],
    "4": [48, 179, 61],  
    "5": [50, 201, 65]
  };
  return colors[score] || [0, 0, 0]; 
}

function displayTitles(x, startY, lineSpacing) {
  let currentYPosition = startY;
  
  let fadeFactor = map(mouseY, 0, height, 255, 0); 
  let sizeFactor = map(mouseY, 0, height, 1, 2); 

  for (let i = 0; i < displayedTitles.length; i++) {
    let title = displayedTitles[i];
    let wordsInTitle = splitTokens(title, ' ,.!?');
    let currentX = x;

    for (let j = 0; j < wordsInTitle.length; j++) {
      let word = wordsInTitle[j];
      //lowercase problem-solved with ChatGPT because of bug I was having with negative words not turning red
      let lowerWord = word.toLowerCase(); 
      let score = getScoreForWord(lowerWord);

      let colorValue = currentColors[lowerWord] || [0, 0, 0];
      //notation used with ChatGPT for moe concise code
      // I wrote something like how do I use this fade factor on words with scores of 0
      let textOpacity = (score === 0) ? fadeFactor : 255;
      let wordSize = (score === 0) ? 24 : 24 * sizeFactor;

      textSize(wordSize);
      fill(colorValue[0], colorValue[1], colorValue[2], textOpacity);
      text(word, currentX, currentYPosition);

      currentX += textWidth(word + " ");
    }

    currentYPosition += lineSpacing;
  }
}


function addRandomTitle() {
  if (titles.length > 0) {
    let randomTitle = random(titles);
    displayedTitles.push(randomTitle);

    if (displayedTitles.length * titleHeight > canvasHeight) {
      displayedTitles.shift();
    }
  }
}

function getScoreForWord(word) {
  word = word.toLowerCase();
  if (afinn[word] !== undefined) {
    return afinn[word];
  }
  return 0;
}