
fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game', {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1f34b9a387msh21473033468878bp1a65f0jsn5b5e61d55a99',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
})
    .then(response => response.json())
    .then(data=> {
        const list = data.d;
        list.map((item) => {
            const name =item.l;
            const poster = item.i.imageUrl;
            const movie = `<li><img src="${poster}"> <h2>${name}</h2></li>`
            document.querySelector('.film').innerHTML += movie;
        })
    })
    .catch(err => {
        console.error(err);
    });

    
   