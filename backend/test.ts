import { loadAndPreprocessData } from "./dataPreprocessing";

import { generateRandomMatch, MatchOdds } from "./oddsGeneration";
import { calculateOdds } from "./src/calculateNewOdds";
import { loadAndCreateTeamStats } from "./src/loadcsvforodd";

interface TeamStats {
  teamName: string;
  attackStrength: number;
  defenseStrength: number;
  recentForm: number;
  injuries: number;
  homeAdvantage: number;
}

export async function userPickOdds(
  homeTeam: TeamStats,
  awayTeam: TeamStats
): Promise<any> {
  const odds = calculateOdds(homeTeam, awayTeam);

  //   console.log(`Match between ${homeTeam.teamName} and ${awayTeam.teamName}:`);
  //   console.log(
  //     `1. Home Win: ${odds.homeWin > 15 ? odds.homeWin / 10 : odds.homeWin}`
  //   );
  //   console.log(`2. Draw: ${odds.draw > 15 ? odds.draw / 10 : odds.draw}}`);
  //   console.log(
  //     `3. Away Win: ${odds.awayWin > 15 ? odds.homeWin / 10 : odds.awayWin}}`
  //   );

  //   Assuming a function getUserSelection exists that fetches the user's pick.
  // const userSelection = await userSelection(); // Implement this as needed.

  // console.log(`User selected odds: ${userSelection}`);

  const homeWin = odds.homeWin > 15 ? odds.homeWin / 10 : odds.homeWin;
  const draw = odds.draw > 15 ? odds.draw / 10 : odds.draw;
  const awayWin = odds.awayWin > 15 ? odds.awayWin / 10 : odds.awayWin;
  return { homeWin, draw, awayWin }; // Store this for simulation later.
}

async function main() {
  const loadData = "./data/all_matches.csv";
  const data = await loadAndPreprocessData(loadData);
  //   console.log("data", data);
  //   const model = await trainModel(data);

  const [homeTeam, awayTeam] = generateRandomMatch(data);
  console.log("Home , awayTeam", homeTeam, awayTeam);

  // fliter data of home and away team and use it

  //   const homeTeamStats = data.map((home_team) => {
  //     if (home_team.homeTeam === homeTeam) {
  //       console.log("home_team", home_team.awayScore * home_team.homeScore);
  //       return home_team.awayScore * home_team.homeScore;
  //     }
  //   });

  //   const awayTeamStats = () =>
  //     data.map((away_team) => {
  //       if (away_team.homeTeam === awayTeam) {
  //         console.log("away_team", away_team.awayScore * away_team.homeScore);

  //         const res = away_team.awayScore;
  //         return res;
  //       }
  //     });
  //   awayTeamStats;

  const stats = await loadAndCreateTeamStats(loadData);
  stats[homeTeam];
  console.log("stats recores Home: ", stats[homeTeam]);
  console.log("stats recores Away: ", stats[awayTeam]);
  const odds = await userPickOdds(stats[homeTeam], stats[awayTeam]);
  console.log("odds ........", odds);
  //   const outcome = await predictOutcome(model, [
  //     stats[homeTeam].attackStrength,
  //     stats[awayTeam].attackStrength,
  //     0, // Neutral ground
  //   ]);

  //   console.log(`Simulated Match Result: ${outcome}`);
  const rnd = crypto.getRandomValues(
    new Uint8Array([stats[homeTeam].homeAdvantage])
  );
  console.log(" random  number without rand", rnd);
  console.log(" random number", Number(rnd) * stats[awayTeam].attackStrength);
  console.log("Testing defence strength", stats[homeTeam].defenseStrength);
  console.log("Testing attack strength", stats[awayTeam].attackStrength);
  if (
    Number(rnd) * stats[awayTeam].recentForm <
    stats[homeTeam].defenseStrength
  ) {
    console.log("home win");
  } else if (Number(rnd) * 5 < stats[awayTeam].attackStrength) {
    console.log("away win");
  } else if (
    stats[homeTeam].defenseStrength == stats[awayTeam].attackStrength
  ) {
    console.log("✅ draw");
  } else if (stats[homeTeam].defenseStrength > stats[awayTeam].attackStrength) {
    console.log("✅ away wins");
  } else {
    console.log("draw");
  }
  //   const simulatedMatchResult =
}

main().catch((err) => console.error(err));
