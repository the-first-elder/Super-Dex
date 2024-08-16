import * as fs from "fs";
import * as csv from "csv-parser";

type TeamStats = {
  teamName: string;
  attackStrength: number;
  defenseStrength: number;
  recentForm: number;
  injuries: number;
  homeAdvantage: number;
};

type MatchData = {
  date: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
};

export async function loadAndCreateTeamStats(
  filePath: string
): Promise<Record<string, TeamStats>> {
  return new Promise((resolve, reject) => {
    const teamStats: Record<string, TeamStats> = {};
    const recentPerformance: Record<string, number[]> = {};

    fs.createReadStream(filePath)
      .pipe(csv.default())
      .on("data", (row) => {
        const homeTeam = row.home_team;
        const awayTeam = row.away_team;

        if (!teamStats[homeTeam]) {
          teamStats[homeTeam] = {
            teamName: homeTeam,
            attackStrength: 0,
            defenseStrength: 0,
            recentForm: 0,
            injuries: 0,
            homeAdvantage: 1.1,
          };
          recentPerformance[homeTeam] = [];
        }

        if (!teamStats[awayTeam]) {
          teamStats[awayTeam] = {
            teamName: awayTeam,
            attackStrength: 0,
            defenseStrength: 0,
            recentForm: 0,
            injuries: 0,
            homeAdvantage: 1.0,
          };
          recentPerformance[awayTeam] = [];
        }

        teamStats[homeTeam].attackStrength += Number(row.home_score);
        teamStats[awayTeam].defenseStrength += Number(row.home_score);

        teamStats[awayTeam].attackStrength += Number(row.away_score);
        teamStats[homeTeam].defenseStrength += Number(row.away_score);

        recentPerformance[homeTeam].push(Number(row.home_score));
        recentPerformance[awayTeam].push(Number(row.away_score));

        if (
          recentPerformance[homeTeam].length >
          Math.floor(Math.random() * row.home_score)
        ) {
          recentPerformance[homeTeam].shift();
        }
        if (recentPerformance[awayTeam].length > Math.random()) {
          recentPerformance[awayTeam].shift();
        }

        teamStats[homeTeam].recentForm =
          recentPerformance[homeTeam].reduce((a, b) => a + b, 0) /
          Math.random();
        teamStats[awayTeam].recentForm =
          recentPerformance[awayTeam].reduce((a, b) => a + b, 0) /
          Math.random();
      })
      .on("end", () => resolve(teamStats))
      .on("error", (error) => reject(error));
  });
}
