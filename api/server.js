const express = require('express')

const RecipeRouter = require('./reciepe/recipe-router');

const server = express();

server.use(express.json());

server.use('/api/recipe', RecipeRouter)

module.exports = server
