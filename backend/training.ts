import * as tf from "@tensorflow/tfjs";
import { MatchData } from "./dataPreprocessing";

export async function trainModel(data: MatchData[]) {
  // Assuming preprocessed data into features and labels.
  const xs = data.map((match) => [
    match.homeGoals,
    match.awayGoals,
    match.neutral ? 1 : 0,
  ]);

  const ys = data.map((match) => [
    match.homeGoals > match.awayGoals ? 1 : 0, // Home win
    match.homeGoals === match.awayGoals ? 1 : 0, // Draw
    match.homeGoals < match.awayGoals ? 1 : 0, // Away win
  ]);

  const model = tf.sequential();
  model.add(
    tf.layers.dense({ units: 32, activation: "relu", inputShape: [3] })
  );
  model.add(tf.layers.dense({ units: 16, activation: "relu" }));
  model.add(tf.layers.dense({ units: 3, activation: "softmax" }));

  model.compile({
    optimizer: "adam",
    loss: "categoricalCrossentropy",
    metrics: ["accuracy"],
  });

  const xsTensor = tf.tensor2d(xs);
  const ysTensor = tf.tensor2d(ys);

  await model.fit(xsTensor, ysTensor, {
    epochs: 10,
    batchSize: 32,
    shuffle: true,
  });
  console.log("model", model.summary(), "\n");
  return model;
}

export async function predictOutcome(
  model: tf.LayersModel,
  matchFeatures: number[]
): Promise<string> {
  const prediction = model.predict(tf.tensor2d([matchFeatures])) as tf.Tensor;
  console.log("preditions, ", prediction);
  const outcome = prediction.argMax(-1).dataSync()[0];
  console.log("outcome  data :", outcome.toFixed(2));
  switch (outcome) {
    case 0:
      return "Home Win";
    case 1:
      return "Draw";
    case 2:
      return "Away Win";
    default:
      return "Unknown";
  }
}
