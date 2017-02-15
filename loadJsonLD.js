window.onload = function () {
	langs = JSON.parse(document.getElementById('lang-ld').text);
	document.body.appendChild(createListTag(langs));
};
function createListTag(langs)
{
	var ul = document.createElement('ul');
	for (var i = 0; i < langs.length; i++)
	{
		var li = document.createElement('li');
		li.appendChild(createLinkTag(langs[i].name, langs[i].url, langs[i].description));
		ul.appendChild(li);
	}
	return ul;
}
function createLinkTag(text, href, title)
{
	var a = document.createElement('a');
	a.appendChild(document.createTextNode(text));
	a.setAttribute("href", href);
	a.setAttribute("title", title);
	return a;
}

