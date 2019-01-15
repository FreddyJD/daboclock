firebase.initializeApp(config);

console.log("Hello World"); 

var heatUp = 30; 
var coolDown = 90; 
$('#start').click(function(){ 
    var timer = setInterval(function() { 
        document.getElementById('heatTime').innerHTML = '00:' + heatUp; 
        heatUp--; 
        if (heatUp < 0) { 
            clearInterval(timer);
            set();
        }
    }, 1000);

})

 
function set() { 
    var newTimer = setInterval(function() { 
        document.getElementById('coolTime').innerHTML = '00:' + coolDown; 
        coolDown--; 
        if (heatUp < 0) { 
            clearInterval(newTimer);
            
        }
    }, 1000);
}