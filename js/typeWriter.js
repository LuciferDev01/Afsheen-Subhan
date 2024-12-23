
let i = 0;
let text1 = "Hello Afsheen meri Jaan ❤️";
let text2 = "This is the Big Day of my life Date - 18/12/2023"
let speed = 100;

function typeWriter(text, para) {
	if (ok == 2) {
		clearInterval(typeInterval);
	}
	if (i < text.length) {
		document.getElementById(para).innerHTML += text.charAt(i);
		i++;
		speed = Math.random() * 50 + 100;
	}
	else {
		if (ok == 0) {
			i = 0;
		}
		ok += 1;

		// Set a timeout to remove the element after 2 seconds
		setTimeout(function () {
			// document.getElementById(para).innerHTML = ''; // Clear the content
			document.getElementById(para).style.display = 'none';
		}, 2200); // 2000 milliseconds = 2 seconds

	}
}

var typeInterval;

//window.onload = function() {
//	window.onload = function(){};
typeInterval = setInterval(function () {
	if (ok == 0) {
		typeWriter(text1, "txt1");
	}
	else if (ok == 1) {
		typeWriter(text2, "txt2");
	}
}, 100);
//};
