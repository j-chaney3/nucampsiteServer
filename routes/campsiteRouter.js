const express = require('express');
const campsiteRouter = express.Router();

campsiteRouter
	.route('/')
	.all((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		next();
	})
	.get((req, res) => {
		res.end('Will send all the campsites to you');
	})
	.post((req, res) => {
		res.end(
			`Will add the campsite: ${req.body.name} with description: ${req.body.description}`
		);
	})
	.put((req, res) => {
		res.statusCode = 403;
		res.end('PUT operation not su:campsiteIdpported on /campsites');
	})
	.delete((req, res) => {
		res.end('Deleting all campsites');
	});

campsiteRouter
	.route('/:campsiteId')
	.all((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		next();
	})
	.get((req, res) => {
		res.end(`Will send you campsite with id of ${req.params.campsiteId}`);
	})
	.post((req, res) => {
		res.statusCode = 403;
		res.end('Not supported');
	})
	.put((req, res) => {
		res.end(
			`Will update the campsite:${req.params.campsiteId} ${req.body.name} and description: ${req.body.description}`
		);
	})
	.delete((req, res) => {
		res.end(`Deleting campsite with id: ${req.params.campsiteId}`);
	});

module.exports = campsiteRouter;
