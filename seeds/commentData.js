const { Comment } = require('../models');

const commentdata = [
    {
        text: 'Thank you for posting this!',
        user_id: 2,
        post_id: 1,
    },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;