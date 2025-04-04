const footballTeam = {
  team: "SeaHawks",
  year: 2023,
  headCoach: "Big Guy",
  players: [
    {
      name: "Frank Rose",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Philip Yooks",
      position: "midfielder",
      isCaptain: true,
    },
    {
      name: "Jimmy Stankley",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Paul Thomas",
      position: "goalkeeper",
      isCaptain: false,
    },
  ],
};

document.getElementById("team").textContent = footballTeam.team;
document.getElementById("year").textContent = footballTeam.year;
document.getElementById("head-coach").textContent = footballTeam.headCoach;

const playerCards = document.getElementById("player-cards");

const playerCardsContainer = document.getElementById("player-cards");

footballTeam.players.forEach((player) => {
  const cardDiv = document.createElement("div");
  const nameHeading = document.createElement("h2");
  const positionPara = document.createElement("p");

  nameHeading.textContent = player.isCaptain ? `${player.name}` : player.name;
  positionPara.textContent = `${player.name}`;

  cardDiv.classList.add("player-card");
  cardDiv.appendChild(nameHeading);
  cardDiv.appendChild(positionPara);

  playerCardsContainer.appendChild(cardDiv);
});
