document.getElementById("submit").addEventListener("click", function () {
    let team1TextArea = document.getElementById("text1").value;
    let arrTeam1 = team1TextArea.split(",");
    let checkTeam1 = arrTeam1.length;

    let team2TextArea = document.getElementById("text2").value;
    let arrTeam2 = team2TextArea.split(",");
    let checkTeam2 = arrTeam2.length;

    console.log(checkTeam1);
    console.log(checkTeam2);

    if (checkTeam1 === 11 && checkTeam2 === 11) {
        console.log("Team members length OK");

        let scoreTeam1 = parseInt(document.getElementById("score1").value);
        let scoreTeam2 = parseInt(document.getElementById("score2").value);

        console.log(scoreTeam1);
        console.log(scoreTeam2);

        let winnerText = document.getElementById("winner-text");
        let winnerScoreWrapper = document.getElementById("winner-scores-comb");


        let sumOfScores = scoreTeam2 + scoreTeam1;
        if (sumOfScores <= 7) {
            if (scoreTeam1 > scoreTeam2) {
                winnerText.innerHTML += " Team 1";

                let n = scoreTeam1;
                let result = getCombinations(n);

                for (let i = 0; i < result.length; i++) {
                    winnerScoreWrapper.innerHTML += "<div class='score-comb'>" + result[i] + "</div>";
                }
            } else if (scoreTeam1 === scoreTeam2) {
                alert("Draw");
            } else {
                winnerText.innerHTML += " Team 2";

                let n = scoreTeam2;
                let result = getCombinations(n);

                for (let i = 0; i < result.length; i++) {
                    winnerScoreWrapper.innerHTML += "<div class='score-comb'>" + result[i] + "</div>";
                }
            }
        } else {
            alert("sorry, your number of goal exceed proper limit");
        }
    } else {
        alert("Enter proper number of team members");
    }
});



let print_all_sum_rec = function (target, current_sum, start, result, output) {
    if (current_sum === target) {
        output.push(result.slice());
    }

    for (let i = start; i < target; i++) {
        let temp_sum = current_sum + i;
        if (temp_sum <= target) {
            result.push(i);
            print_all_sum_rec(target, temp_sum, i, result, output);
            result.pop();
        } else {
            return;
        }
    }
};

let getCombinations = function (target) {
    let output = [];
    let result = [];
    print_all_sum_rec(target, 0, 1, result, output);
    return output;
}
