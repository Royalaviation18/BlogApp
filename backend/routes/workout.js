const express = require('express');
const {
    createWorkout,
    getWorkouts,
    getWorkout
} = require('../controllers/workoutController');


const router = express.Router();


// GET all workouts
router.get('/', getWorkouts); 
// Get a single workout
router.get('/:id', getWorkout);

// POST a new workout
router.post('/',createWorkout);

// DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({ mssg: `Delete workout with ID ${req.params.id}` });
});

// UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({ mssg: `Update workout with ID ${req.params.id}` });
});


module.exports = router;