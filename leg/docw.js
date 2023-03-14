// 13 spades (Ace, 2, 3, ..., J, Q, K)
// 13 hearts
// 1 joker (red)
// 13 diamonds
// 13 clubs
// 1 joker (white)
var deck = '🂡🂢🂣🂤🂥🂦🂧🂨🂩🂪🂫🂭🂮🂱🂲🂳🂴🂵🂶🂷🂸🂹🂺🂻🂽🂾🂿🃁🃂🃃🃄🃅🃆🃇🃈🃉🃊🃋🃍🃎🃑🃒🃓🃔🃕🃖🃗🃘🃙🃚🃛🃝🃞🃟'
var deckarray = Array.from(deck)
var randomdeck = Array.apply(0, Array(54)).map((element, index) => index)
randomdeck.sort((a, b) => Math.random() - 0.5)
// randomdeck.map((element)=>deck[element])

function docwStart() {
    alert('started')
    // Schow each card in the deck after doing the predefined task
    window.location = 'ViewDeck.html'
    alert('loading')
    setTimeout(waitLoad, 3000)
    alert('loading2')
}

function waitLoad() {
    alert('loaded')
    for(var i = 0; i < 54; i++) {
        document.getElementById('CurrentCard').innerHTML = deck[randomdeck[i]]
        document.getElementById('CurrentWorkout').innerHTML = document.getElementById('heartsWO').value
    }
}
