const express = require('express');
const router = express.Router();
const { getGoals , setGoal , updateGoal , deleteGoal} = require('../controller/goalcontroller');

const { protect } = require('../middleware/authMiddleware');

// all routes are functons in goalcontroller.js


//router.get('/', getGoals); router.post('/', setGoal); converted to use chaining
 router.route('/')
    .get(getGoals)
    .post(setGoal);
    
 
//router.put('/:id', updateGoal); router.delete('/:id', deleteGoal); converted to use chaining
router.route('/:id')
    .put(protect,updateGoal)
    .delete(protect,deleteGoal);

module.exports = router;