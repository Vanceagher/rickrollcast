// Create new Castjs instance
const cjs = new Castjs();

// Wait for user interaction
document.getElementById('cast').addEventListener('click', function() {
    // Check if casting is available
    if (cjs.available) {   
        // Initiate new cast session    
        cjs.cast('https://r4---sn-8xgp1vo-cvne.googlevideo.com/videoplayback?expire=1603761818&ei=OiKXX4SRGo-qhwb-to64AQ&ip=108.20.233.151&id=o-AGPOD6bmEMSYi6wPoqUxs5Y_cSQZPB1NJ2ZTjuRVtIE4&itag=251&source=youtube&requiressl=yes&mh=7c&mm=31%2C29&mn=sn-8xgp1vo-cvne%2Csn-ab5szn7e&ms=au%2Crdu&mv=m&mvi=4&pcm2cms=yes&pl=16&gcr=us&initcwndbps=2131250&vprv=1&mime=audio%2Fwebm&gir=yes&clen=3438483&dur=212.061&lmt=1578935058552556&mt=1603740163&fvip=4&keepalive=yes&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhANveufB9n_aVKWgMJ0cmAK7r_L8x5cs3PgJ0sTvPf26SAiEA_We9VVrq19Tatkby5d1OEMFSHt6d-X0SziBdyH_TBPo%3D&sig=AOq0QJ8wRgIhAOvNy9h0HXHke0eYTZhHvXzHHSkXZI0P2BJfzp4YWYIZAiEA_MxjQ0LOVr13mVXoQ5BBwyEEGFp2749wAZAElsMWdEs=');
      
      cjs.volume(0.1);
      cjs.volume(0.2);
      
    }
  
});  

setInterval(function(){
  
  var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

var volumeraw = slider.value
var volume = Math.round(100*volumeraw)/100;
  
output.innerHTML = volume;
        
const cjs = new Castjs();
  
  cjs.volume(volume);
  
  }, 100);

document.getElementById("pause").addEventListener("click", function() {
  cjs.pause();
});

document.getElementById("resume").addEventListener("click", function() {
  cjs.play();
});

document.getElementById("spare").addEventListener("click", function() {
  cjs.disconnect();
  document.getElementById("spare").style.background = "#ba344d";
  document.getElementById("spare").style.color = "#1c1c28";
  
  setTimeout(function(){
  document.getElementById("spare").style.background = "#1c1c28";
  document.getElementById("spare").style.color = "#fff";
    }, 3000);
});
