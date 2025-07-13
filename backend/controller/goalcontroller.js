const asyncHandler = require("express-async-handler");
// @ dis get goals
// @route GET /api/goals
// @ access Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Goals fetched successfully" });
});

// @ dis post goals
// @route POST /api/goals
// @ access Private
const setGoal = asyncHandler(async (req, res) => {
    console.log(req.body); // get the data from the request body

    if (!req.body) {
        res.status(400)
        throw new Error("Please add a text field");
    }
    res.status(200).json({ message: "Goal created successfully" });
});

// @ dis put goals
// @route UPDATE /api/goals/:id
// @ access Private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `updated goal with id ${req.params.id}` });
});

// @ dis DELETE goals
// @route GET /api/goals/:id
// @ access Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `delete goal with id ${req.params.id}` })
});  

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
};
