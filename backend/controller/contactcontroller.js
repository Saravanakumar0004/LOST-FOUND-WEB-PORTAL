const asyncHandler = require("express-async-handler");
const Contact = require('../module/contactmoduler');

// @desc    Get contacts
// @route   GET /api/contacts
// @access  Public
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

// @desc    Set contact
// @route   POST /api/contacts
// @access  Public
const setContact = asyncHandler(async (req, res) => {
    if (!req.body.name) {
        res.status(400);
        throw new Error("Please add a name field");
    }
    if (!req.body.email) {
        res.status(400);
        throw new Error("Please add an email field");
    }
    if (!req.body.mobileNumber) {
        res.status(400);
        throw new Error("Please add a mobile number field");
    }
    if (!req.body.message) {
        res.status(400);
        throw new Error("Please add a message field");
    }

    const contact = await Contact.create({
        name: req.body.name,
        email: req.body.email,
        mobileNumber: req.body.mobileNumber,
        message: req.body.message,
    });

    res.status(200).json(contact);
});

// @desc    Update contact
// @route   PUT /api/contacts/:id
// @access  Public
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(400);
        throw new Error("Contact not found");
    }

    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.status(200).json(updatedContact);
});

// @desc    Delete contact
// @route   DELETE /api/contacts/:id
// @access  Public
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(400);
        throw new Error("Contact not found");
    }

    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({ id: req.params.id });
});

module.exports = {
    getContacts,
    setContact,
    updateContact,
    deleteContact,
};

//