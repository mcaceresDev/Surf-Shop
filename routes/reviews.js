const express = require('express');
const router = express.Router({ mergeParams: true });

/* GET reviews index /reviews */
router.get('/', (req, res, next) => {
    res.send('INDEX /posts/:id/reviews');
});

/* POST reviews create /reviews/:id */
router.post('/', (req, res, next) => {
    res.send('CREATE /reviews');
});

/* GET reviews edit /reviews/:review_id/edit */
router.get('/:review_id/edit', (req, res, next) => {
    res.send('EDIT /reviews/:review_id/edit');
});

/* PUT reviews update /reviews/:review_id */
router.get('/:review_id/', (req, res, next) => {
    res.send('UPDATE /reviews/:review_id');
});

/* DELETE reviews destroy /reviews/:review_id */
router.delete('/id', (req, res, next) => {
    res.send('DELETE /reviews/:review_id');
});

module.exports = router;

//   GET index         /posts
//   GET new           /posts/new
//   POST create       /posts
//   GET show          /posts/:id
//   GET edit          /posts/:id/edit
//   PUT update        /posts/:id
//   DELETE destroy    /posts/:id