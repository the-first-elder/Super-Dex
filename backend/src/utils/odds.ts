import { loadAndPreprocessData } from "./dataPreprocessing";
import { generateRandomMatch } from "./oddsGeneration";
import { calculateOdds } from "./calculateNewOdds";
import { loadAndCreateTeamStats } from "./loadcsvforodd";

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
): Promise<{ homeWin: number; draw: number; awayWin: number }> {
  const odds = calculateOdds(homeTeam, awayTeam);

  const formatOdds = (oddsValue: number) =>
    oddsValue > 15
      ? Number((oddsValue / 10).toFixed(3))
      : Number(oddsValue.toFixed(3));

  return {
    homeWin: formatOdds(odds.homeWin),
    draw: formatOdds(odds.draw),
    awayWin: formatOdds(odds.awayWin),
  };
}

async function main() {
  const loadData = "../data/all_matches.csv";
  const data = await loadAndPreprocessData(loadData);

  const [homeTeam, awayTeam] = generateRandomMatch(data);
  console.log("Home Team:", homeTeam, "Away Team:", awayTeam);

  const stats = await loadAndCreateTeamStats(loadData);

  const homeStats = stats[homeTeam];
  const awayStats = stats[awayTeam];
  console.log("Home Team Stats:", homeStats);
  console.log("Away Team Stats:", awayStats);

  const odds = await userPickOdds(homeStats, awayStats);
  console.log("Odds:", odds);

  let randomValue = crypto.getRandomValues(
    new Uint8Array([homeStats.homeAdvantage])
  )[0];
  let adjustedRandomValue = Number(randomValue) * awayStats.attackStrength;

  while (adjustedRandomValue < 0 || adjustedRandomValue == Infinity) {
    randomValue = crypto.getRandomValues(
      new Uint8Array([homeStats.homeAdvantage])
    )[0];
    adjustedRandomValue = Number(randomValue) * awayStats.attackStrength;
  }

  let result;
  if (adjustedRandomValue < homeStats.defenseStrength) {
    result = "Home Win";
  } else if (adjustedRandomValue * 5 < awayStats.attackStrength) {
    result = "Away Win";
  } else if (homeStats.defenseStrength === awayStats.attackStrength) {
    result = "Draw";
  } else if (homeStats.defenseStrength > awayStats.attackStrength) {
    result = "Away Win";
  } else if (homeStats.attackStrength * 5 > awayStats.defenseStrength) {
    result = "Home Win";
  } else if (
    awayStats.recentForm > homeStats.recentForm &&
    awayStats.injuries < homeStats.injuries
  ) {
    result = "Away Win";
  } else if (
    homeStats.homeAdvantage > 1 &&
    awayStats.defenseStrength > homeStats.attackStrength
  ) {
    result = "Draw";
  } else {
    result = "Draw";
  }

  console.log("Result:", result);
}

main().catch((err) => console.error(err));
