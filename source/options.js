
var KEY_CONFIG = 'KEY_CONFIG';
var DEFAULT_CONFIG = {
}

var btn_save;

function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}

function onSave () {
	var config = {
	}

	saveKeyValue (KEY_CONFIG, config);

	alert ('Save completed!');
}

function saveKeyValue (key, value, callback) {
	var storage = chrome.storage.sync;
	var obj = {};
	obj[key] = value;
	storage.set (obj, function () {
		if (callback) {
			callback ();
		}
	});
}

function initFirst () {
	var storage = chrome.storage.sync;
	storage.get (KEY_CONFIG, function (obj) {
		var config = obj[KEY_CONFIG];
		if (!config) {
			config = DEFAULT_CONFIG;
		}
	});
}

$(document).ready(function() {
    console.log( "Ready!" );

	btn_save = document.getElementById ('btn_save');
	btn_save.onclick = onSave;

	initFirst ();
});