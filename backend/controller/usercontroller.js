const asyncHandler = require('express-async-handler');
const UserData = require('../module/UserData');

// @desc    Get all user data
// @route   GET /api/users
// @access  Public
const GetData = asyncHandler( async (req, res) => {
  try {
    const data = await UserData.find(); // fetches all documents
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch data", error: error.message });
  }
});
// @desc    Get single user data by ID
// @route   GET /api/users/:id
// @access  Public
const getDataById = asyncHandler(async (req, res) => {
  try {
    const item = await UserData.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch item", error: error.message });
  }
});

// @desc    Add user data
// @route   POST /api/users
// @access  Public
const addData = asyncHandler(async (req, res) => {
  console.log("🔔 addData called");
  console.log("Incoming data:", req.body);

  const { topic, description, image, studentName, department, date, time } = req.body;

  if (!topic || !description || !image || !studentName || !department || !date || !time) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newData = await UserData.create({
      topic,
      description,
      image,
      studentName,
      department,
      date,
      time
    });

    res.status(201).json({ message: "Data stored successfully", data: newData });
  } catch (error) {
    res.status(500).json({ message: "Failed to store data", error: error.message });
  }
});


// @desc    Delete user data by ID
// @route   DELETE /api/users/:id
// @access  Public
const deleteData = asyncHandler(async (req, res) => {
  try {
    const data = await UserData.findById(req.params.id);

    if (!data) {
      return res.status(404).json({ message: "Data not found" });
    }

    await data.deleteOne(); // or data.remove()

    res.status(200).json({ message: "Data deleted successfully", id: req.params.id });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete data", error: error.message });
  }
});

// @desc    Update user data by ID
// @route   PUT /api/users/:id
// @access  Public
const updateData = asyncHandler(async (req, res) => {
  const { topic, description, image , studentName, department, date, time } = req.body;

  try {
    const data = await UserData.findById(req.params.id);

    if (!data) {
      return res.status(404).json({ message: "Data not found" });
    }

    // Update fields if provided
    if (topic !== undefined) data.topic = topic;
    if (description !== undefined) data.description = description;
    if (image !== undefined) data.image = image;
    if (studentName !== undefined) data.studentName = req.body.studentName;
    if (department !== undefined) data.department = req.body.department;
    if (date !== undefined) data.date = req.body.date;
    if (time !== undefined) data.time = req.body.time;
    // Save the updated data


    const updatedData = await data.save();

    res.status(200).json({ message: "Data updated successfully", data: updatedData });
  } catch (error) {
    res.status(500).json({ message: "Failed to update data", error: error.message });
  }
});


module.exports = {
    addData,
    GetData,
    deleteData,
    updateData,
    getDataById
};
