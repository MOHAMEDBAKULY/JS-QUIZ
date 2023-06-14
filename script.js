// SETTING THE GAME
const player = "Mohamed"
const opponent = "Bakuly"
const game = "BestFighter"
let points = 0
let hasWon = false

// PLAYING THE GAME
points += 100
hasWon = true

//ANNOUNCING THE WINNER
if (hasWon) {
    console.log( `${player} got  ${points}  points and won the ${game} game!`)
} else {
    console.log( `The winner is   ${opponent} !   ${player} lost the game`)
}