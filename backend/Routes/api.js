import express from "express";
import { Expense } from "../Schema/ExpenseSchema.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const ExpenseData = await Expense.find({});

    res.status(200).send({
      status: "success",
      count: ExpenseData.length,
      data: ExpenseData,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    if (!req.body.name || !req.body.expense) {
      return res.status(404).send({ message: "Fill all the fields Required" });
    }
    const newExpenseData = {
      name: req.body.name,
      expense: req.body.expense,
    //   date: req.body.date ? req.body.date : undefined,
    };

    const newExpense = await Expense.create(newExpenseData);
    return res.status(200).send(newExpense);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
