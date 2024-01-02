let quoteWords = [
    'ABC',
    'DEF',
    'GHI',
    'JKL',
    'MNO',
    'PQR',
    'STW',
    'XYZ'
]
function generateQuote(){
    quoteText = '';
        let randomIndex = Math.floor(Math.random() * quoteWords.length);
        quoteText = quoteWords[randomIndex]
        console.log(quoteText)
        document.getElementById("quoteDisplay").innerText = quoteText
}