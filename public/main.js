
let Team1ScoreByClick = 0
let Team2ScoreByClick = 0

 

const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
}

document.addEventListener('DOMContentLoaded', main)

//update Team Names

const updateTeam1Name = () => {
  
  team1Name = document.querySelector('#team1TxtInput').value

  document.querySelector('.team1Name').textContent = team1Name
}

const updateTeam2Name = () => {
  
  team2Name = document.querySelector('#team2TxtInput').value

  document.querySelector('.team2Name').textContent = team2Name
}

//Add to or subtract points from Team 1

const addTeam1Point = () => {
  console.log('button was clicked')
  
    if (Team1ScoreByClick < 21){
      Team1ScoreByClick += 1
      document.querySelector('.team1Score').textContent = Team1ScoreByClick
      console.log('You can keep adding')
    }
    else{
      document.querySelector('.result').textContent = 'Team 1 won the game'
      document.querySelector('.team-1-add-1-button').disabled = true
      document.querySelector('.team-1-subtract-1-button').disabled = true
      document.querySelector('.team-2-add-1-button').disabled = true
      document.querySelector('.team-2-subtract-1-button').disabled = true
    }
}
const subTeam1Point = () => {
  //ensure the number doesn't go below zero
  console.log('button was clicked')
  
  if (Team1ScoreByClick <= 0) {
    console.log('You cannot go below zero')
  }
  else {
    Team1ScoreByClick -= 1
    document.querySelector('.team1Score').textContent = Team1ScoreByClick
  }
}

//Add to or substract points from Team 1

const addTeam2Point = () => {
  console.log('button was clicked')
  
    if (Team2ScoreByClick < 21){
      Team2ScoreByClick += 1
      document.querySelector('.team2Score').textContent = Team2ScoreByClick
      console.log('You can keep adding')
    }
    else{
      document.querySelector('.result').textContent = 'Team 2 won the game'
      document.querySelector('.team-1-add-1-button').disabled = true
      document.querySelector('.team-1-subtract-1-button').disabled = true
      document.querySelector('.team-2-add-1-button').disabled = true
      document.querySelector('.team-2-subtract-1-button').disabled = true
    }
}
const subTeam2Point = () => {
  console.log('button was clicked')
  
  if (Team2ScoreByClick <= 0) {
    console.log('You cannot go below zero')
  }
  else {
    Team2ScoreByClick -= 1
    document.querySelector('.team2Score').textContent = Team2ScoreByClick
  }
}

//reset all team scores and buttons

const resetTeams = () => {
  Team1ScoreByClick = 0
  document.querySelector('.team1Score').textContent = Team1ScoreByClick
  Team2ScoreByClick = 0
  document.querySelector('.team2Score').textContent = Team2ScoreByClick

  document.querySelector('.result').textContent = ''
  document.querySelector('.team-1-add-1-button').disabled = false
  document.querySelector('.team-1-subtract-1-button').disabled = false
  document.querySelector('.team-2-add-1-button').disabled = false
  document.querySelector('.team-2-subtract-1-button').disabled = false
  document.querySelector('.team1Name').textContent = "Team 1"
  document.querySelector('.team2Name').textContent = "Team 2"
  document.querySelector('#team1TxtInput').value = ""
  document.querySelector('#team2TxtInput').value = ""
}

document.querySelector('.team-1-add-1-button').addEventListener('click', addTeam1Point)
document.querySelector('.team-1-subtract-1-button').addEventListener('click', subTeam1Point)
document.querySelector('.team-2-add-1-button').addEventListener('click', addTeam2Point)
document.querySelector('.team-2-subtract-1-button').addEventListener('click', subTeam2Point)
document.querySelector('.reset-button').addEventListener('click', resetTeams)

document
  .querySelector('.update-team-1-name')
  .addEventListener('click',updateTeam1Name)

document
  .querySelector('.update-team-2-name')
  .addEventListener('click',updateTeam2Name)
