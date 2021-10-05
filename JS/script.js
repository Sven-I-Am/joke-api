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
       // input = 'https://v2.jokeapi.dev/joke/Any';
        let categorieArray = [];
        let categorie;
        let flagArray = [];
        let flags;
        let language = '';
        let typeArray =[];
        let type;

        let catSelect = document.getElementsByName('cat-select');
        for (i=0; i<catSelect.length;i++) {
            if (catSelect[i].checked){
                categorieArray.push(catSelect[i].value);
            }
        }
        if (categorieArray.length===0){
            categorie = 'Any';
        } else {
            categorie = categorieArray.join(',');
        }

        let flagSelect = document.getElementsByName('blacklist-select');
        for (i=0; i<flagSelect.length;i++) {
            if (flagSelect[i].checked){
                flagArray.push(flagSelect[i].value);
            }
        }
        flags = flagArray.join(',');

        let langSelect = document.getElementsByClassName('lang-select');
        console.log(langSelect);
        for (i=0; i<langSelect.length;i++) {
            if (langSelect[i].selected){
                language = langSelect[i].value;
            }
        }

        let typeSelect = document.getElementsByName('type-select');
        for (i=0; i<typeSelect.length;i++){
            if (typeSelect[i].checked){
                typeArray.push(typeSelect[i].value);
            }
        }
        if (typeArray.length !== 1) {
            type = '';
        } else {
            type = typeArray.join('');
        }

        let text = document.getElementById('searchbox').value;
        text = text.split(' ').join('%20');

            input = 'https://v2.jokeapi.dev/joke/' + categorie;
            if (language.length!==0) {
                input += language;
                if (flags.length !== 0) {
                    input += '&?blacklistFlags=' + flags;

                }
                if (type.length!==0){
                    input += '&type=' + type;
                }
                if (text.length!==0){
                    input += '&contains=' + text;
                }
            } else if (flags.length !== 0) {
                input += '?blacklistFlags=' + flags;
                if (type.length!==0){
                    input += '&type=' + type;
                }
                if (text.length!==0){
                    input += '&contains=' + text;
                }
            } else if (type.length!==0){
                input += '?type=' + type;
                if (text.length!==0){
                    input += '&contains=' + text;
                }
            } else if (text.length!==0){
                input += '?contains=' + text;
            }

        console.log('catArray: ' + categorieArray);
        console.log('cat: ' + categorie);
        console.log('lang: ' + language);
        console.log('flags: ' + flags);
        console.log('type: ' + type);
        console.log('search: ' + text);
        console.log(input);
        getJOKE();

    })

})();