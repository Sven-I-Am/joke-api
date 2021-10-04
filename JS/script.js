(() => {
    let input = 'https://v2.jokeapi.dev/joke/Any';
    async function getJOKE (){
        let api = await fetch(input);
        let jokesArray = await api.json();
        console.log(jokesArray);
        if (jokesArray.error===true){
            document.querySelector('#setupFind').innerText = 'No joke found';
            document.querySelector('#deliveryFind').innerText = '';
            document.querySelector('#jokeFind').innerText = '';
        } else if (jokesArray.type==='twopart'){
            document.querySelector('#setupRandom').innerText = jokesArray.setup;
            document.querySelector('#deliveryRandom').innerText = jokesArray.delivery;
            document.querySelector('#jokeRandom').innerText = '';
            document.querySelector('#setupFind').innerText = jokesArray.setup;
            document.querySelector('#deliveryFind').innerText = jokesArray.delivery;
            document.querySelector('#jokeFind').innerText = '';
        } else {
            document.querySelector('#jokeRandom').innerText = jokesArray.joke;
            document.querySelector('#setupRandom').innerText = '';
            document.querySelector('#deliveryRandom').innerText = '';
            document.querySelector('#jokeFind').innerText = jokesArray.joke;
            document.querySelector('#setupFind').innerText = '';
            document.querySelector('#deliveryFind').innerText = '';
        }
    }

    getJOKE();
    document.getElementById('random').addEventListener('click', function (){
        input = 'https://v2.jokeapi.dev/joke/Any';
        getJOKE();
    })
    document.getElementById('find').addEventListener('click', function (){
        let categorie = '';
        let language = '';
        let catSelect = document.getElementsByName('cat-select');
        for (i=0; i<catSelect.length;i++) {
            if (catSelect[i].checked){
                categorie = catSelect[i].value;
            }
        }
        let langSelect = document.getElementsByName('lang-select');
        for (i=0; i<langSelect.length;i++) {
            if (langSelect[i].checked){
                language = langSelect[i].value;
            }
        }
        console.log(categorie);
        console.log(language)

        input = 'https://v2.jokeapi.dev/joke/' + categorie + language;

        console.log(input);
        getJOKE();

    })

})();