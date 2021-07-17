const team = {
  _players: [
    {firstName: 'Manuelo', lastName: 'Locatelli', age: 23},
    {firstName: 'Salvatore', lastName: 'Sirigu', age: 34},
    {firstName: 'Leonardo', lastName: 'Spinazzola', age:28}     
  ],
  _games: [
    {opponent: 'Finland', teamPoints: 2, opponentPoints: 0},
    {opponent: 'Switzerland', teamPoints: 3, opponentPoints: 0},
    {opponent: 'Austria', teamPoints: 2, opponentPoints: 1}
  ],

  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },

  addPlayer (firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    }
  
  this.players.push(player);
  },

  addGame(opponentName,teamPoint,oppoPoints){
    const game = {
      opponent: opponentName,
      teamPoints: teamPoint,
      opponentPoints: oppoPoints,
    }
    this.games.push(game);
  }
}; 

team.addPlayer("Lorenzo", "Insigne", 30);
team.addPlayer("Francesco", "Acerbi", 33);
team.addPlayer("Domenico", "Berardi", 26);

console.log(team.players);
team.addGame('Finland',65,34);
team.addGame('Switzerland',67,34);
team.addGame('Austria',56,23);

console.log(team.games);


