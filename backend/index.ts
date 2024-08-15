// type TeamStats = {
//   teamName: string;
//   attackStrength: number; // Scoring ability
//   defenseStrength: number; // Defensive capability
//   recentForm: number; // Last 5 games
//   injuries: number; // Number of key injuries
//   homeAdvantage: number; // Modifier for home games
// };

// type MatchOdds = {
//   homeWin: number;
//   draw: number;
//   awayWin: number;
// };

// function calculateOdds(homeTeam: TeamStats, awayTeam: TeamStats): MatchOdds {
//   const baseProbability = 0.33; // Assuming an equal chance for each outcome as a starting point

//   // Adjust for attack and defense strength
//   const homeAttackVsAwayDefense =
//     homeTeam.attackStrength / awayTeam.defenseStrength;
//   const awayAttackVsHomeDefense =
//     awayTeam.attackStrength / homeTeam.defenseStrength;

//   // Factor in recent form
//   const homeFormFactor = 1 + homeTeam.recentForm / 10;
//   const awayFormFactor = 1 + awayTeam.recentForm / 10;

//   // Factor in injuries (fewer injuries = stronger team)
//   const homeInjuryFactor = 1 - homeTeam.injuries / 10;
//   const awayInjuryFactor = 1 - awayTeam.injuries / 10;

//   // Factor in home advantage
//   const homeAdvantageFactor = homeTeam.homeAdvantage;

//   // Calculate probabilities
//   const homeWinProbability =
//     baseProbability *
//     homeAttackVsAwayDefense *
//     homeFormFactor *
//     homeInjuryFactor *
//     homeAdvantageFactor;
//   const awayWinProbability =
//     baseProbability *
//     awayAttackVsHomeDefense *
//     awayFormFactor *
//     awayInjuryFactor;
//   const drawProbability = baseProbability; // Adjust if needed

//   // Normalize probabilities
//   const totalProbability =
//     homeWinProbability + drawProbability + awayWinProbability;

//   const normalizedHomeWinProbability = homeWinProbability / totalProbability;
//   const normalizedDrawProbability = drawProbability / totalProbability;
//   const normalizedAwayWinProbability = awayWinProbability / totalProbability;

//   // Convert probabilities to decimal odds
//   const homeWinOdds = 1 / normalizedHomeWinProbability;
//   const drawOdds = 1 / normalizedDrawProbability;
//   const awayWinOdds = 1 / normalizedAwayWinProbability;

//   return {
//     homeWin: parseFloat(homeWinOdds.toFixed(2)),
//     draw: parseFloat(drawOdds.toFixed(2)),
//     awayWin: parseFloat(awayWinOdds.toFixed(2)),
//   };
// }

// // Example Usage
// const homeTeam: TeamStats = {
//   teamName: "Team A",
//   attackStrength: 8,
//   defenseStrength: 7,
//   recentForm: 7,
//   injuries: 1,
//   homeAdvantage: 1.1,
// };

// const awayTeam: TeamStats = {
//   teamName: "Team B",
//   attackStrength: 7,
//   defenseStrength: 6,
//   recentForm: 6,
//   injuries: 2,
//   homeAdvantage: 1.0,
// };

// const odds = calculateOdds(homeTeam, awayTeam);
// console.log("Match Odds:", odds);
