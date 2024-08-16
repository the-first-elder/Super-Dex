import { MatchData } from "./dataPreprocessing";

export type MatchOdds = {
  homeTeam: string;
  awayTeam: string;
  draw: number;
  homeWin: number;
  awayWin: number;
};

export function calculateOdds(
  probabilities: number[],
  homeTeam: string,
  awayTeam: string
): MatchOdds {
  const homeWinOdds = 1 / probabilities[0];
  const drawOdds = 1 / probabilities[1];
  const awayWinOdds = 1 / probabilities[2];
  console.log(
    `\n ---------------------------------------\n
        \n ✅ Probablilty testing starts here
      \n ---------------------------------------\n`,
    probabilities,
    probabilities[0],
    probabilities[1],
    probabilities[2],
    probabilities[3],
    probabilities[4]
  );
  return {
    homeTeam,
    awayTeam,
    homeWin: parseFloat(homeWinOdds.toFixed(2)),
    draw: parseFloat(drawOdds.toFixed(2)),
    awayWin: parseFloat(awayWinOdds.toFixed(2)),
  };
}

export function generateRandomMatch(
  historicalData: MatchData[]
): [string, string] {
  const teams = Array.from(
    new Set(historicalData.flatMap((d) => [d.homeTeam, d.awayTeam]))
  );
  const homeTeam = teams[Math.floor(Math.random() * teams.length)];
  let awayTeam = teams[Math.floor(Math.random() * teams.length)];

  while (awayTeam === homeTeam) {
    awayTeam = teams[Math.floor(Math.random() * teams.length)];
  }

  return [homeTeam, awayTeam];
}
