//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getFunction)

// `https://api.nasa.gov/planetary/apod?api_key=r2o1xc86wWU3uZKCphX8NWzAB2xNhJB6xsD6cbEm`

function getFunction(){
    document.querySelector('img').src = ''
    let userVal = document.querySelector('input').value
    console.log(userVal)
    let url =  `https://api.magicthegathering.io/v1/cards?name=${userVal}&supertypes=legendary&limit=1`
    fetch(url)     
    .then(res => res.json()) 
// parse response as JSON     
    .then(data => {       
    console.log(data)     
    document.querySelector('.one').src = data.cards[0].imageUrl
        fetch(`https://g.tenor.com/v1/search?q=${data.cards[0].originalType}&key=6ODY42ZWIMUU&limit=8`)     
        .then(res => res.json()) 
        // parse response as JSON     
        .then(data => {       
        console.log(data)     
        document.querySelector('.gifOne').src = data.results[0].media[0].gif.url

        })     
        .catch(err => {         
        console.log(`error ${err}`)     
        }); 
    })     
    .catch(err => {         
    console.log(`error ${err}`)     
    }); 
}