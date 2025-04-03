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

const team = document.querySelector("#team");
const year = document.querySelector("#year");
const headCoach = document.querySelector("#head-coach");
