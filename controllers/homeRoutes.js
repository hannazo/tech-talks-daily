const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// GET all posts for homepage
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            order: [['createdAt', 'DESC']],
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const posts = postData.map((post) =>
            post.get({ plain: true })
        );
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET one post with comments
router.get('/post/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
                {
                    model: Comment,
                },
            ],
        });

        const commentData = await Comment.findAll({
            where: {
                post_id: req.params.id,
            },
            include: [
                {
                    model: User,
                    attributes: ['username'],
                }
            ],
        })

        const post = postData.get({ plain: true });

        const comments = commentData.map((comment) =>
        comment.get({ plain: true })
        );
        
        res.render('post', {
            post,
            comments,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET route to edit user's comment
router.get('/comment/edit/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username' ],
                },
            ],
        });

        const comment = commentData.get({ plain: true });
        res.render('edit-comment', { 
            comment
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
        
    }
});

// LOGIN route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

// SIGNUP route
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('signup');
});

module.exports = router;