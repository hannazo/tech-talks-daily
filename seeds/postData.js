const { Post } = require('../models');

const postdata = [
    {
        title: 'Why MVC is so important',
        content: 'MVC, or Model-View-Controller, is an architectural pattern that separates an application into three interconnected components: the Model, the View, and the Controller. Each component has a specific role to play in the application, and this separation of concerns makes MVC an important pattern in modern software development. The Model represents the data and business logic of the application, and is responsible for managing the data and enforcing business rules. The View is responsible for presenting the data to the user in a user-friendly way, and the Controller acts as an intermediary between the Model and the View, handling user input and updating the Model accordingly.',
        user_id: 1,
    },
    {
        title: 'What is ORM',
        content: 'ORM stands for Object-Relational Mapping. It is a programming technique that allows developers to interact with a relational database using an object-oriented programming language. ORM works by mapping the data stored in a relational database to objects in the programming language. This allows developers to manipulate the data using an object-oriented syntax, rather than writing SQL queries directly.',
        user_id: 2,
    },
    {
        title: 'Why do we use Mongoose npm',
        content: 'Mongoose is an Object-Document Mapping (ODM) library for MongoDB in Node.js that provides a simplified interface to work with MongoDB databases. Mongoose allows developers to define data models and schemas for MongoDB collections, and provides a high-level API for common database operations such as querying, inserting, updating, and deleting data. Mongoose also provides middleware support, validation rules, and built-in plugins that make it easier to work with MongoDB in Node.js applications. By providing a layer of abstraction over the MongoDB driver, Mongoose can help improve code readability, data consistency, and reduce errors when working with MongoDB.',
        user_id: 1,
    }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
