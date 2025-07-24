const express = require('express');
const router = express.Router();
const {
  getContacts,
  setContact,
  updateContact,
  deleteContact,
} = require('../controller/contactcontroller');

// GET all contacts
router.get('/', getContacts);

// POST a new contact
router.post('/', setContact);

// PUT (update) contact
router.put('/:id', updateContact);

// DELETE a contact
router.delete('/:id', deleteContact);

module.exports = router;
