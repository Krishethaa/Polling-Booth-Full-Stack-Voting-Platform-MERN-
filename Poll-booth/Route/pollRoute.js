const express = require('express');
const router = express.Router();
const {
    createPoll,
    getAllPolls,
    getPollById,
    updatePoll,
    deletePollById,
    deleteAllPolls,
    getPollsByUserId,
    likePoll,
    votePoll,
    getVotedPollsByUserId,
    commentPoll
} = require('../Controller/pollController.js');

// 1. CREATE POLL
router.post('/create', createPoll);
// 2. GET ALL POLLS
router.get('/getall', getAllPolls);
// 3. GET POLL BY ID
router.get('/getById/:id', getPollById);
// 4. UPDATE POLL
router.put('/update/:id', updatePoll);
// 5. DELETE POLL
router.delete('/deletePollById/:id', deletePollById);
// 6. DELETE ALL POLLS
router.delete('/deleteall', deleteAllPolls);
//7. GET POLLS CREATED BY A SPECIFIC USER
router.get('/getPollsByUserId/:userId', getPollsByUserId);
// 8. LIKE POLL
router.put('/like/:id', likePoll);
//Vote Poll
router.put('/vote', votePoll);
//Get polls by user ID
router.get('/getVotedPollsByUserId/:userId', getVotedPollsByUserId);
//Comment Poll
router.post('/comment', commentPoll);




module.exports = router;