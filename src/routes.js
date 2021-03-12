const express = require('express');
const NaverController = require('./controllers/NaverController');
const ProjectController = require('./controllers/ProjectController');

const routes = express.Router();

routes.get('/navers', NaverController.index);
routes.post('/navers', NaverController.store);
routes.get('/navers/:naver_id', NaverController.show);

routes.get('/projects', ProjectController.index);
routes.get('/projects/count', ProjectController.count);
routes.get('/projects/navers', ProjectController.showAll);
routes.get('/projects/:project_id', ProjectController.show);
routes.post('/projects', ProjectController.store);

module.exports = routes;