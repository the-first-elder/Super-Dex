import { loadAndPreprocessData } from "./dataPreprocessing";
import { trainModel } from "./modelTraining";
import {
  calculateOdds,
  MatchOdds,
  generateRandomMatch,
} from "./oddsGeneration";
import { simulateMatch } from "./matchSimulation";
import * as tf from "@tensorflow/tfjs";

async function main() {
  const dataFilePath = "./data/all_matches.csv";

  // Step 1: Load and preprocess the data
  const historicalData = await loadAndPreprocessData(dataFilePath);

  // Step 2: Train the model
  const model = await trainModel(historicalData);

  // Example input for a new match (replace with actual input data)
  const newMatchFeatures = tf.tensor2d([
    [2, 1, 0 /* neutral */ /* add more features as needed */],
  ]);
  const [homeTeam, awayTeam] = generateRandomMatch(historicalData);
  const prediction = model.predict(newMatchFeatures) as tf.Tensor;
  //   const probabilities = prediction.arraySync()[0];
  const probabilities = (prediction.arraySync() as number[][])[0];

  // Step 3: Calculate odds for the new match
  const odds: MatchOdds = calculateOdds(probabilities, homeTeam, awayTeam);
  console.log("Calculated Odds:", odds);

  // Step 4: Simulate the match based on probabilities
  const matchResult = simulateMatch(probabilities);
  console.log("Simulated Match Result:", matchResult);
}

main().catch(console.error);
