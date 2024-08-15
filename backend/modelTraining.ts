import * as tf from "@tensorflow/tfjs";
import { MatchData } from "./dataPreprocessing";

export async function trainModel(data: MatchData[]): Promise<tf.LayersModel> {
  const model = tf.sequential();

  // Adjusting input dimensions based on available data
  const inputDim = 3; // You have 3 features: homeScore, awayScore, and neutral

  model.add(
    tf.layers.dense({ units: 16, activation: "relu", inputShape: [inputDim] })
  );
  model.add(tf.layers.dense({ units: 8, activation: "relu" }));
  model.add(tf.layers.dense({ units: 3, activation: "softmax" }));

  model.compile({
    optimizer: "adam",
    loss: "categoricalCrossentropy",
    metrics: ["accuracy"],
  });

  const xs = tf.tensor2d(
    data.map((d) => [
      d.homeScore,
      d.awayScore,
      d.neutral ? 1 : 0, // Add other features as needed
    ])
  );

  const ys = tf.tensor2d(
    data.map((d) => {
      if (d.homeScore > d.awayScore) return [1, 0, 0]; // Home win
      if (d.homeScore === d.awayScore) return [0, 1, 0]; // Draw
      return [0, 0, 1]; // Away win
    })
  );

  // Ensure xs and ys have correct shapes
  console.log(`xs shape: ${xs.shape}, ys shape: ${ys.shape}`);

  await model.fit(xs, ys, { epochs: 100 });

  return model;
}
