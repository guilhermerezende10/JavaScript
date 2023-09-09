/*There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score a nd both have a score greater or equal 100
points. Otherwise, no team wins the trophy */

const match = (d1,d2,d3,k1,k2,k3) => {
    let DolphinsAverage = (d1 + d2 + d3) / 3
    let KoalasAverage = (k1 + k2 + k3) / 3
    if (DolphinsAverage !== KoalasAverage && DolphinsAverage > 100 ) {
        DolphinsAverage > KoalasAverage ? winner = "Dolphins" : winner = "Koalas"

        console.log(`The ${winner} won the trophy.`)
    }
    else if (DolphinsAverage == KoalasAverage && DolphinsAverage > 100) {

        console.log("The match is a draw.")
    }

    else {
        console.log("No team wins the trophy")
    }
}

console.log(match(91,102,103,91,102,103))