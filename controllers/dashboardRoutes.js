const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

// GET all posts for dashboard
router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {"user_id": req.session.user_id},
            include: [
                {
                    model: User,
                },
            ],
        });

        const posts = postData.map((post) =>
            post.get({ plain: true })
        );
        res.render('all-user-posts', {
            layout: 'dashboard',
            posts,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
        res.redirect('login');
    }
});

// GET route to add new post by user
router.get('/newpost', withAuth, async (req, res) => {
    res.render('new-post', {
        layout: 'dashboard',
    });
});

module.exports = router;