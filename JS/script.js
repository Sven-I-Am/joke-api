(() => {
    async function getANY (){
        let api = await fetch('https://v2.jokeapi.dev/joke/Any');
        let jokesArray = await api.json();

        if (jokesArray.type==='twopart'){
            document.querySelector('#setup').innerText = jokesArray.setup;
            document.querySelector('#delivery').innerText = jokesArray.delivery;
            document.querySelector('#joke').innerText = '';
        } else {
            document.querySelector('#joke').innerText = jokesArray.joke;
            document.querySelector('#setup').innerText = '';
            document.querySelector('#delivery').innerText = '';
        }
    }
    getANY();
    document.getElementById('random').addEventListener('click', function (){
        getANY();
    })
})();