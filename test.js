var btn = document.getElementById('pusk');
var text = document.querySelector('.text');
var html = document.querySelector('html');

btn.addEventListener('click', function() {
	setTimeout(function() {
		text.classList.remove("hide");
	}, 100);
});

html.addEventListener('click', function(e) {
	if(e.target.id !== 'pusk' && e.target.tagName !== 'LI'){
		text.classList.add("hide");
	}
});