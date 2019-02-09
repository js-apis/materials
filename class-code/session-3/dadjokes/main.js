// https://icanhazdadjoke.com/search?term=hipster
function getJSON(path, callback) {
  var req = new XMLHttpRequest();
  req.responseType = 'json';
  req.open('GET', path, true);
  req.setRequestHeader('Accept', 'application/json');
  req.onload = function() {
      callback(req.response);
  };
  req.send();
}


// using inline anonymous function 
/*
getJSON('https://icanhazdadjoke.com/', function (joke) {
  console.log('Got joke: ', joke);
});
*/

/* 
function printJoke(joke) {
  console.log(joke)
}
*/

// 1. call random joke API
// 2. print joke in HTML

var speaker = speak({ voice:"Daniel", pitch:0.15, rate:0.8 });

function printJoke(jokeData) {
  var jokeEl = document.querySelector('.joke');
  jokeEl.innerText = jokeData.joke;
}

function sayJoke(jokeData) {
  speaker.say(jokeData.joke);
}

function loadRandomJoke(event) { 
  // prevent default behavior of this event.
  event.preventDefault();
  getJSON('https://icanhazdadjoke.com/', function(jokeData) {
    printJoke(jokeData);
    sayJoke(jokeData);
  });
}

var loadJokeBtn = document.querySelector('.random-joke');
loadJokeBtn.addEventListener('click', loadRandomJoke);


// using a named function
//getJSON('https://icanhazdadjoke.com/', printJoke);



//-------------------------------------------------------------------------------
// speak ------------------------------------------------------------------------
//-------------------------------------------------------------------------------
function speak( _settings ){ // _settings -> { voice:"Daniel", pitch:0.15, rate:0.8 }

    //https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
    //support for speech synthesis is a bit strange on mobile
    if('speechSynthesis' in window){ 
        //ok we good
    }else{
        console.log("Sorry, speechSynthesis is not available in your browser.");
        return;
    }

    //you can see all the voices here
    var voices = speechSynthesis.getVoices();
    voices.forEach(function(voice, i){
        console.log(voice.name);
    });


    var Speak = {

        // uid: "speak_"+this.math.random_string(12),
        uid: "speak_"+String(Math.random()),

        voice:  _settings.voice, //"Daniel" 
        pitch: _settings.pitch, //0.15
        rate:  _settings.rate, //0.8
        volume: 1.0,

        //there is a bug where getVoices() returns null unless something has already been said...
        said_first_thing: false,
        log_all_voices: false,

        say: function( _msg ){
            window.utterances = [];
            var msg = new SpeechSynthesisUtterance(); //need a new one every time?
            utterances.push(msg);
            msg.voice = speechSynthesis.getVoices().filter((voice)=>{ return voice.name == this.voice; })[0];
            msg.rate = this.rate;
            msg.pitch = this.pitch;
            msg.volume = this.volume;
            msg.text = _msg;
            speechSynthesis.speak(msg);
            msg.onend = (e)=>{
                this.said_first_thing = true;
                if(typeof code !== 'undefined' && typeof code.speak_event_done_speaking === "function"){
                    code.speak_event_done_speaking( e ); //CODE CALLBACK
                }
                if(this.log_all_voices){
                    console.log("~ logging all voices ~");
                    var voices = speechSynthesis.getVoices();
                    voices.forEach(function(voice, i){
                        console.log("Voice name: "+voice.name+" ("+voice.lang+")");
                        //console.log(voice);
                    });
                    this.log_all_voices = false;
                    this.volume = 1.0;
                }
            };                
        }, 

        stop: function(){
            speechSynthesis.cancel();
        },

        set_pitch: function(_val){
            this.pitch = _val;
        },

        set_rate: function(_val){
            this.rate = _val;
        },

        set_volume: function(_val){
            this.volume = _val;
        },

        log_voices: function(){
            this.volume = 0.001;
            this.say("logging voices");
            this.log_all_voices = true;
        }

    };

    // this.game.ALL_SPEAKS.push( Speak );

    return Speak;

}
