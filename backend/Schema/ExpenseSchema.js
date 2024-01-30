import mongoose from "mongoose";

const ExpenseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  expense: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export const Expense = mongoose.model("Expense", ExpenseSchema);
