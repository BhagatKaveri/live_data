// models/ChartData.ts

import mongoose from 'mongoose';

export interface ChartDataDocument extends mongoose.Document {
  x: number;
  y: number;
}
export interface ChartData {
    x: number;
    y: number;
  }
const ChartDataSchema = new mongoose.Schema({
  x: { type: Number, required: true },
  y: { type: Number, required: true },
});

const ChartData = mongoose.model<ChartDataDocument>('ChartData', ChartDataSchema);

export default ChartData;
