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
  // Adjust base probability dynamically based on team strength and form
  const homeAdvantageBase = 0.4; // Home teams often have an advantage
  const awayAdvantageBase = 0.3; // Away teams are often disadvantaged
  const drawBase = 0.3; // Draws are generally less common but still possible

  const homeAttackVsAwayDefense =
    homeTeam.attackStrength / Math.max(awayTeam.defenseStrength, 0.01);
  const awayAttackVsHomeDefense =
    awayTeam.attackStrength / Math.max(homeTeam.defenseStrength, 0.01);

  const homeFormFactor = 1 + homeTeam.recentForm / 10;
  const awayFormFactor = 1 + awayTeam.recentForm / 10;

  const homeInjuryFactor = 1 - homeTeam.injuries / 10;
  const awayInjuryFactor = 1 - awayTeam.injuries / 10;

  const homeAdvantageFactor = homeTeam.homeAdvantage;

  const homeWinProbability =
    homeAdvantageBase *
    homeAttackVsAwayDefense *
    homeFormFactor *
    homeInjuryFactor *
    homeAdvantageFactor;
  const awayWinProbability =
    awayAdvantageBase *
    awayAttackVsHomeDefense *
    awayFormFactor *
    awayInjuryFactor;
  const drawProbability = drawBase;

  const totalProbability =
    homeWinProbability + drawProbability + awayWinProbability;

  // Prevent division by zero
  const normalizedHomeWinProbability = Math.max(
    homeWinProbability / totalProbability,
    0.01
  );
  const normalizedDrawProbability = Math.max(
    drawProbability / totalProbability,
    0.01
  );
  const normalizedAwayWinProbability = Math.max(
    awayWinProbability / totalProbability,
    0.01
  );

  const homeWinOdds = 1 / normalizedHomeWinProbability;
  const drawOdds = 1 / normalizedDrawProbability;
  const awayWinOdds = 1 / normalizedAwayWinProbability;

  return {
    homeWin: parseFloat(homeWinOdds.toFixed(2)),
    draw: parseFloat(drawOdds.toFixed(2)),
    awayWin: parseFloat(awayWinOdds.toFixed(2)),
  };
}
