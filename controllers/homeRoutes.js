const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('main');
});

router.get('/register', (req, res) => {
    res.render('register');
});
