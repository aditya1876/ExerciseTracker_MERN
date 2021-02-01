const router = require('express').Router();
const Exercise = require('../models/exercise.model');
const { route } = require('./users');

//corrosponds to <appurl>/exercises/
router.route('/').get((req, res) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
});

//corrosponds to <appurl>/exercises/add/
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    });

    newExercise.save()
        .then(() => res.json('Exercise Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//finding a single record
//corrosponds to <appurl>/exercises/:id
router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise)) //returns the json of the exercise found by id
        .catch(err => res.status(400).json('Error: ' + err));
});

//deleting records
//corrosponds to <appurl>/exercises/:id
router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Update single record
//corrosponds to <appurl>/exercises/update/:id
router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = Number(req.body.duration);
            exercise.date = Date.parse(req.body.date);

            exercise.save()
                .then(() => res.json('Exercise updated!'))
                .catch(err => res.status(400).json("Error: " + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;