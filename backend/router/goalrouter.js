const express = require('express');
const router = express.Router();
const { getGoals , setGoal , updateGoal , deleteGoal} = require('../controller/goalcontroller');

// all routes are functons in goalcontroller.js


//router.get('/', getGoals); router.post('/', setGoal); converted to use chaining
 router.route('/')
    .get(getGoals)
    .post(setGoal);
 
//router.put('/:id', updateGoal); router.delete('/:id', deleteGoal); converted to use chaining
router.route('/:id')
    .put(updateGoal)
    .delete(deleteGoal);

module.exports = router;