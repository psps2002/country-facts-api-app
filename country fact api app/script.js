document.addEventListener('DOMContentLoaded' , function(){

    form = document.querySelector('form');
    search = document.getElementById('search');
    answer = document.getElementById('answer');

    const getFacts = async (country) => {
        const url = `https://restcountries.com/v3.1/name/${country}`
        answer.innerHTML = 'Loading...';

        const facts = await fetch(url);
        const data = await facts.json(); 
      
    
        console.log(facts);
        console.log(data);

        return showFacts(data);
    }

    const showFacts = (facts) => {
        const countryCode = facts[0].cca2.toLowerCase();
        answer.innerHTML = `<div class="fax"> 
        <p><img src="https://flagcdn.com/w320/${countryCode}.png"/></p>
        <p>Official name: ${facts[0].name.official} </p>
        <p>Capital: ${facts[0].capital} </p>
        <p>Population: ${facts[0].population} </p>
        </div>`
        console.log(facts.capital)
        answer.classList.add('show');
    }

    form.addEventListener('submit' , function(event){
        event.preventDefault();
        const input = search.value;
        getFacts(input);
    })

})