const { User } = require('../models');

const userdata = [
    {
        username: 'PixelPenguin',
        email: 'amiapenguin@email.com',
        password: 'password123',
    },
    {
        username: 'JasonResponse',
        email: 'jresponse@email.com',
        password: 'pleaserespond123',
    },
];

const seedUser = () => User.bulkCreate(userdata, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUser;