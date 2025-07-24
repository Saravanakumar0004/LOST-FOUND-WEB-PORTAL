const asyncHandler = require("express-async-handler");
const Goal = require('../module/Goalmodule');
// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find();
    res.status(200).json(goals);
});

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
if (!req.body.subject) {
    res.status(400);
    throw new Error("Please add a text field");
}
if (!req.body.email) {
  res.status(400);
  throw new Error("Please add a description field");
}
if (!req.body.description) {
  res.status(400);
  throw new Error("Please add a description field");
}
if (!req.body.name) {
    res.status(400);
    throw new Error("Please add a name field");
}
if (!req.body.department) {
    res.status(400);
    throw new Error("Please add a department field");
}    

  const goal = await Goal.create({
    name: req.body.name, // Assuming name is part of the request body
    email: req.body.email,
    department: req.body.department, // Assuming department is part of the request body
    subject: req.body.subject,
    description: req.body.description,
    // Assuming req.user is populated by auth middleware
    // user: req.user.id, // Assuming req.user is populated by auth middleware
  });

  res.status(200).json(goal);
});


// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
        res.status(400);
        throw new Error("Goal not found");
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(200).json(updatedGoal);
});

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
       const goal = await Goal.findById(req.params.id);
    if (!goal) {
        res.status(400);
        throw new Error("Goal not found");
    }
    await Goal.findByIdAndDelete(req.params.id);
    res.status(200).json({ id: req.params.id});
});





module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
};
