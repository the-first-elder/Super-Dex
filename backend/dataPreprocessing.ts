import * as fs from "fs";
import * as csv from "csv-parser";

export type MatchData = {
  [x: string]: any;
  date: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  tournament: string;
  country: string;
  neutral: boolean;
};

export async function loadAndPreprocessData(
  filePath: string
): Promise<MatchData[]> {
  return new Promise((resolve, reject) => {
    const matches: MatchData[] = [];

    fs.createReadStream(filePath)
      .pipe(csv.default())
      .on("data", (row) => {
        matches.push({
          date: row.date,
          homeTeam: row.home_team,
          awayTeam: row.away_team,
          homeScore: parseInt(row.home_score),
          awayScore: parseInt(row.away_score),
          tournament: row.tournament,
          country: row.country,
          neutral: row.neutral.toLowerCase() === "true",
        });
      })
      .on("end", () => resolve(matches))
      .on("error", (error) => reject(error));
  });
}
