const URL = "https://api.quotable.io/quotes/random";
const quote  = document.querySelector("#quote");
const author = document.querySelector("#author");
const btn = document.querySelector("#btn");


let getQuote = async () =>{
    let respone = await fetch(URL);
    let data = await respone.json();
    console.log(data)
    quote.innerText = data[0].content;
    author.innerText  = data[0].author;
}

btn.addEventListener("click",()=>{

getQuote();

});