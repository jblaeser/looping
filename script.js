//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    userNamePrompt,
    favoriteSpeechPrompt,
    oldestYear = speechesArray[0].year,
    newestYear = speechesArray[0].year;



    i = 0;
    var numberOnPage = "first";

while (i < speechesArray.length) {
  if (i === 1){
    numberOnPage = "second";
  } else if (i === 2){
    numberOnPage = "third";
  };
  console.log("The " + numberOnPage + " speech is written by " + speechesArray[i].author);
  i++;
};


for (i = 0; i < speechesArray.length; i++){
  if(speechesArray[i].year < oldestYear){
    oldestYear = speechesArray[i].year;
  } else if (speechesArray[i].year > newestYear){
    newestYear = speechesArray[i].year;
  };
}


document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  favoriteSpeechPrompt = window.prompt('Which speech author is your favorite?');

  for (var i = 0; i < speechesArray.length; i++){
    if(favoriteSpeechPrompt === speechesArray[i].author) {
      console.log(speechesArray[i].author + " was " + speechesArray[i].authorAge + " at the time of this speech.")
    };
  };
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  console.log('This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year);

  if(speechesArray[0].yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  };

  if(speechesArray[0].year === oldestYear){
    console.log("This is the oldest speech on the page.");
  } else if(speechesArray[0].year === newestYear) {
    console.log("This is the most recent speech on the page.");
  } else {
    console.log("This speech is neither the oldest nor the most recent on the page. Juuuuust right, Goldilocks.");
  };
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  console.log('This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year);

  if(speechesArray[1].yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  };

  if(speechesArray[1].year === oldestYear){
    console.log("This is the oldest speech on the page.");
  } else if(speechesArray[1].year === newestYear) {
    console.log("This is the most recent speech on the page.");
  } else {
    console.log("This speech is neither the oldest nor the most recent on the page. Juuuuust right, Goldilocks.");
  };
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  console.log('This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year);

  if(speechesArray[2].yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  };

  if(speechesArray[2].year === oldestYear){
    console.log("This is the oldest speech on the page.");
  } else if(speechesArray[2].year === newestYear) {
    console.log("This is the most recent speech on the page.");
  } else {
    console.log("This speech is neither the oldest nor the most recent on the page. Juuuuust right, Goldilocks.");
  };
});

