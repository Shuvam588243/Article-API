const router = require('express').Router();
const { get } = require('mongoose');
const Controller = require('../Controllers/articleController');

//Chaining Routes
router.route('/')

//Get Routes
.get(Controller.get_all_article)


//Post Routes
.post(Controller.add_new_article)


//Put Routes


//Delete Routes
.delete(Controller.del_all_article);


router.route('/:title')

//Get Routes
.get(Controller.get_specific_article)

//Put Routes
.put(Controller.update_specific_article)

//Patch Routes
.patch(Controller.patch_specific_article)

//Delete Routes
.delete(Controller.delete_specific_article)

module.exports = router;