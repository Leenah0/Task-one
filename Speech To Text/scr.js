start_button.addEventListener('click',function(){
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;
    
    recognition.addEventListener('result',e=>{
      const transcript = Array.from(e.results)
      .map(result =>result[0])
      .map(result =>result.transcript)
      SpeechToText.innerHTML = transcript;
    })
    
    if(speech == true){
    recognition.start();
    }
    
    })























/*
start_button.addEventListener('click',function(){
    var voice = true;
*/

   



/*
startbutton.onclick = () =>{
    STT.start();
    console.log('You may speak now');

    var speech = SpeechRecognition || webkitSpeechRecognition;
    
var STT = new SpeechRecognition();

STT.lang = 'ar';

STT.interimResults = true;

recognition.addEventListener('result',e=>{
    const transcript = Array.from(e.results)
    .map(result =>result[0])
    .map(result =>result.transcript)
    convert_text.innerHTML = transcript;
})







/*

STT.onresult = function(event){
    start_button.addEventListener('result',e=>{
        const trans = Array.from(e.results)
        .map(result =>result[0])
        .map(result =>result.transcript)
        .join('');
        SpeechToText.innerHTML = trans;
        
        console.log(e)
      })

}


STT.addEventListener('end' , ()=>{
    STT.start ();

})


    
    /*
    STT.addEventListener('result',e=>{
      const text = Array.from(e.result)
      .map(result =>result[0])
      .map(result =>result.text)
      SpeechToText.innerHTML = text;
    })
    
    if(voice == true){
    STT.start();
    }
    
    }) 
    */