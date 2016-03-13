
var KEY_CONFIG = 'KEY_CONFIG';
var KEY_PROFILE = 'KEY_PROFILE';
var CONFIG = {
};
var PROFILE = {
};

function isEmpty (obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }
    return true;
};

function loadConfig () {
    var storage = chrome.storage.sync;
    storage.get (KEY_CONFIG, function (obj) {
        if (obj[KEY_CONFIG]) {
            CONFIG = obj[KEY_CONFIG];
        }
        checkRun ();
    });
};

function checkRun () {
	var lowerHostName = location.hostname.toLowerCase();

	if (lowerHostName.indexOf ("facebook.com") > -1) {
		console.log("run run run");
        checkLoadCompleted();
	}
};

function checkLoadCompleted () {
    var rightBar = document.getElementById("rightCol");
    if (rightBar == undefined) {
        setTimeout(function(){
            checkLoadCompleted();
        }, 500);
    } else {
        run();
    }
}

function run () {
    console.log("load completed");

    var sheet = document.createElement('style');
    sheet.innerHTML = "._iuz{background-image:url(http://widocom.com/game/cheat/sqhTN9lgaYm.png);";
    document.body.appendChild(sheet);

    var rightBar = document.getElementById("rightCol");
    rightBar.style.visibility = 'hidden';

    while (rightBar.firstChild) {
        rightBar.removeChild(rightBar.firstChild);
    }

    //create our content

    var img=document.createElement("img");
    img.src="http://widocom.com/game/cheat/ads1.jpg";
    img.id="picture";
    rightBar.appendChild(img);
}

$(document).ready(function() {
    loadConfig ();
});


