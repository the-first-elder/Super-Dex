import { loadAndPreprocessData } from "../utils/dataPreprocessing";
import { generateRandomMatch } from "../utils/oddsGeneration";
import { calculateOdds } from "../utils/calculateNewOdds";
import { loadAndCreateTeamStats } from "../utils/loadcsvforodd";
import { Request, Response } from "express";
import path from "path";
import { MatchOdds } from "../models/matchOdds";
import CustomError from "../utils/customError";

interface TeamStats {
  teamName: string;
  attackStrength: number;
  defenseStrength: number;
  recentForm: number;
  injuries: number;
  homeAdvantage: number;
}

const formatOdds = (oddsValue: number) =>
  oddsValue > 15
    ? Number((oddsValue / 10).toFixed(3))
    : Number(oddsValue.toFixed(3));

export async function generateOddsBatch(req: Request, res: Response) {
  try {
    const getData = path.resolve(__dirname, "../data/all_matches.csv");
    const data = await loadAndPreprocessData(getData);
    const stats = await loadAndCreateTeamStats(getData);

    if (!getData) {
      throw new CustomError("Data could not be loaded", 404);
    }

    const matchCount = 10; // Number of matches to generate odds for

    for (let i = 0; i < matchCount; i++) {
      const [homeTeam, awayTeam] = generateRandomMatch(data);

      if (!homeTeam || !awayTeam) {
        throw new CustomError("Match data is invalid", 400);
      }

      const homeStats: TeamStats = stats[homeTeam];
      const awayStats: TeamStats = stats[awayTeam];

      if (!homeStats || !awayStats) {
        throw new CustomError(
          `Stats not found for teams: ${homeTeam}, ${awayTeam}`,
          404
        );
      }

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

      const odds = {
        homeWin: formatOdds(calculateOdds(homeStats, awayStats).homeWin),
        draw: formatOdds(calculateOdds(homeStats, awayStats).draw),
        awayWin: formatOdds(calculateOdds(homeStats, awayStats).awayWin),
      };

      const matchOdds = new MatchOdds({
        homeTeam,
        awayTeam,
        odds,
        result,
      });

      await matchOdds.save();
    }

    res.status(201).json({
      message: "Odds generated successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error generating odds:", error);
    res.status(500).json({
      message: "Error generating odds",
      success: false,
      error: error,
    });
  }
}
