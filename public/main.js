
let Team1ScoreByClick = 0
let Team2ScoreByClick = 0

 

const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
}

document.addEventListener('DOMContentLoaded', main)

const addTeam1Point = () => {
  console.log('button was clicked')
  Team1ScoreByClick += 1
  document.querySelector('.team1Score').textContent = Team1ScoreByClick

}

const subTeam1Point = () => {
  console.log('button was clicked')
  Team1ScoreByClick -= 1
  document.querySelector('.team1Score').textContent = Team1ScoreByClick

}
const addTeam2Point = () => {
  console.log('button was clicked')
  Team2ScoreByClick += 1
  document.querySelector('.team2Score').textContent = Team2ScoreByClick
}

const subTeam2Point = () => {
  console.log('button was clicked')
  Team2ScoreByClick -= 1
  document.querySelector('.team2Score').textContent = Team2ScoreByClick

}
const updateTeam1Name = () => {
  
  const team1Name = document.querySelector('#team1TxtInput').value

  document.querySelector('.team1Name').textContent = team1Name
}

const updateTeam2Name = () => {
  
  const team2Name = document.querySelector('#team2TxtInput').value

  document.querySelector('.team2Name').textContent = team2Name
}


document.querySelector('.team-1-add-1-button').addEventListener('click', addTeam1Point)
document.querySelector('.team-1-subtract-1-button').addEventListener('click', subTeam1Point)
document.querySelector('.team-2-add-1-button').addEventListener('click', addTeam2Point)
document.querySelector('.team-2-subtract-1-button').addEventListener('click', subTeam2Point)

document
  .querySelector('.update-team-1-name')
  .addEventListener('click',updateTeam1Name)

document
  .querySelector('.update-team-2-name')
  .addEventListener('click',updateTeam2Name)
