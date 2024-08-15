import { calculateOdds } from "./calculateNewOdds";
import { loadAndCreateTeamStats } from "./loadcsvforodd";

type UserBet = {
  userId: string;
  matchId: string;
  homeTeam: string;
  awayTeam: string;
  selectedOdds: number;
  betType: "homeWin" | "draw" | "awayWin";
};
let odds;

let userBets: UserBet[] = [];

function storeUserBet(
  userId: string,
  matchId: string,
  homeTeam: string,
  awayTeam: string,
  selectedOdds: any,
  betType: "homeWin" | "draw" | "awayWin"
) {
  userBets.push({
    userId,
    matchId,
    homeTeam,
    awayTeam,
    selectedOdds,
    betType,
  });
}

// Example Usage
async function exampleUsage() {
  const teamStats = await loadAndCreateTeamStats("./data/all_matches.csv");
  //   console.log(
  //     `\n ---------------------------------------\n
  //     \n ✅ teamStats
  // \n ---------------------------------------\n`,
  //     teamStats
  //   );
  const homeTeamStats = teamStats["Scotland"];
  const awayTeamStats = teamStats["Nigeria"];
  odds = calculateOdds(homeTeamStats, awayTeamStats);
  console.log("Match Odds:", odds);
}

// Assume user picks home win odds
const oddsPromise = exampleUsage();
oddsPromise.then((oddsValue) => {
  storeUserBet(
    "user123",
    "match001",
    "England",
    "Scotland",
    oddsValue,
    "homeWin"
  );
});
