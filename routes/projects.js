'use strict'

var express = require('express');
var ProjectController = require('../controller/project');

var router = express.Router();

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './uploads'});

//METODO SAVE
router.post('/save-project', ProjectController.saveProject);

//METODOS GET
router.get('/project/:id?', ProjectController.getProject);
router.get('/projects', ProjectController.getProjects);

//METODO UPDATE
router.put('/update-project/:id', ProjectController.updateProject);

//METODO DELETE
router.delete('/delete-project/:id', ProjectController.deleteProject);

//METODO UPDATE IMAGE
router.post('/upload-image/:id', multipartMiddleware, ProjectController.uploadImage);

module.exports = router;