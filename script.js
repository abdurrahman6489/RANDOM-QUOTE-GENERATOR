const quotesContainer = document.querySelector(".quotes-container");
const quoteText = document.querySelector(".quote");
const author = document.querySelector(".author");
const nextQuoteBtn = document.querySelector(".next-quote");
const tweetBtn = document.querySelector(".twitter-button");
console.log(loader);
let currentIndex = 0;
let quotesArray = [];
function showquoteAndauthor(quotesArray){
    let currentQuote = quotesArray[Math.floor(Math.random()*quotesArray.length)];
    quoteText.innerText = currentQuote.text;
    author.innerText = currentQuote.author || "a saint";
}
makeAPICall();
async function makeAPICall(){
    let response = await fetch("https://type.fit/api/quotes");
    quotesArray = await response.json();
    showquoteAndauthor(quotesArray);

}
nextQuoteBtn.addEventListener("click",()=>{
    showquoteAndauthor(quotesArray);
})
nextQuoteBtn.addEventListener("touchstart",()=>{
    showquoteAndauthor(quotesArray);
})
tweetBtn.addEventListener("click",tweetTheQuote);
tweetBtn.addEventListener("touchstart",tweetTheQuote);
function tweetTheQuote(){
    let tweet = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${author.innerText}`;
    window.open(tweet,"_blank");
}
