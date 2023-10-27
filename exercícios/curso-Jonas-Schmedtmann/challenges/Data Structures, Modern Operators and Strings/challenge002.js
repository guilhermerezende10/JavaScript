// Let's continue with our football betting app! Keep using the 'game' variable from
// before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names �
// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
//  Gnarby: 1,
//  Hummels: 1,
//  Lewandowski: 2
// }


const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
    };

    const entries = Object.entries(game.scored)
    for(const [scored, player] of entries) {
        console.log(`Goal ${Number(scored)+ 1}: ${player}`)
    }

    const odds = Object.values(game.odds)
    let oddAverage = 0
    for(const odd of odds) oddAverage+=odd
    oddAverage /= odds.length
    console.log(oddAverage)

    const oddNames = [game.team1, 'draw', game.team2]
    for(const name of oddNames) {
        console.log(name == 'draw' ? `Odd of ${name}: ${odds[1]}` : `Odd of victory ${name}: ${name == 'Bayern Munich' ? `${odds[0]}` : `${odds[2]}`}`)
    }

    const scorers = {
        [entries[1][1]]: 1,
        [entries[3][1]]: 1,
        [entries[0][1]]: 2,
    }

    console.log(scorers)
    
    

    

// const [players1, players2] = game.players
// // console.log(players1, players2)

// const [gk, ...fieldPlayers] = players1
// // console.log(gk, fieldPlayers)

// const allPlayers = [players1, players2]
// // console.log(allPlayers)

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']
// // console.log(players1Final)

// const {team1, x:draw, team2} = {...game.odds}
// // console.log(team1, team2, draw)

// const printGoals = (...players) => {
//     console.log(...players)
//     console.log(`Total goals scored: ${players.length}`)
// }

// // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')
// // printGoals(...game.scored)

// console.log(team1 < team2 && game.team1 || game.team2)

