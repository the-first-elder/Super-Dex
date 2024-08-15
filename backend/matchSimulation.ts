export function simulateMatch(probabilities: number[]): string {
  const randomValue = Math.random();
  console.log(randomValue.toFixed(2), probabilities[1], probabilities[2]);
  if (randomValue < probabilities[1]) return "Home Win";
  if (randomValue < probabilities[2]) return "Draw";
  return "Away Win";
}

async function main() {
  const probabilities = [0.2, 0.5, 0.3];
  const result = simulateMatch(probabilities);
  console.log(result);
}
main().catch(console.error);
