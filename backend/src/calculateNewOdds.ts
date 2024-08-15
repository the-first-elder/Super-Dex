type MatchOdds = {
  homeWin: number;
  draw: number;
  awayWin: number;
};
type TeamStats = {
  teamName: string;
  attackStrength: number; // Scoring ability
  defenseStrength: number; // Defensive capability
  recentForm: number; // Last 5 games
  injuries: number; // Number of key injuries
  homeAdvantage: number; // Modifier for home games
};

export function calculateOdds(
  homeTeam: TeamStats,
  awayTeam: TeamStats
): MatchOdds {
  const baseProbability = 0.33;

  const homeAttackVsAwayDefense =
    homeTeam.attackStrength / awayTeam.defenseStrength;
  const awayAttackVsHomeDefense =
    awayTeam.attackStrength / homeTeam.defenseStrength;

  const homeFormFactor = 1 + homeTeam.recentForm / 10;
  const awayFormFactor = 1 + awayTeam.recentForm / 10;

  const homeInjuryFactor = 1 - homeTeam.injuries / 10;
  const awayInjuryFactor = 1 - awayTeam.injuries / 10;

  const homeAdvantageFactor = homeTeam.homeAdvantage;

  const homeWinProbability =
    baseProbability *
    homeAttackVsAwayDefense *
    homeFormFactor *
    homeInjuryFactor *
    homeAdvantageFactor;
  const awayWinProbability =
    baseProbability *
    awayAttackVsHomeDefense *
    awayFormFactor *
    awayInjuryFactor;
  const drawProbability = baseProbability;

  const totalProbability =
    homeWinProbability + drawProbability + awayWinProbability;

  const normalizedHomeWinProbability = homeWinProbability / totalProbability;
  const normalizedDrawProbability = drawProbability / totalProbability;
  const normalizedAwayWinProbability = awayWinProbability / totalProbability;

  const homeWinOdds = 1 / normalizedHomeWinProbability;
  const drawOdds = 1 / normalizedDrawProbability;
  const awayWinOdds = 1 / normalizedAwayWinProbability;

  return {
    homeWin: parseFloat(homeWinOdds.toFixed(2)),
    draw: parseFloat(drawOdds.toFixed(2)),
    awayWin: parseFloat(awayWinOdds.toFixed(2)),
  };
}
