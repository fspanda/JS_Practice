const quotes = [
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quote: "The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty.",
        author: "Winston Churchill"
    },
    {   quote: "Don't let yesterday take up too much of today.",
        author: "Will Rogers"
    },
    {   quote:  "You learn more from failure than from success. Don't let it stop you. Failure builds character.",
        author: "Unknown"
    },
    {   quote: "It's not whether you get knocked down, it's whether you get up.",
        author: "Vince Lombardi"
    },
    {   quote: "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.",
        author: "Steve Jobs"
    },
    {   quote: "People who are crazy enough to think they can change the world, are the ones who do.",
        author: "Rob Siltanen"
    },
    {   quote: "Failure will never overtake me if my determination to succeed is strong enough.",
        author: "Og Mandino"
    },
    {   quote: "Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk. That's the classic entrepreneur.",
        author: "Mohnish Pabrai"
    },
    {   quote: "We may encounter many defeats but we must not be defeated.",
        author: "Maya Angelou"
    }
            
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote-author');

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;



