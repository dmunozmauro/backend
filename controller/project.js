'use strict'

var Project = require('../models/portafolio');
var fs = require('fs');
var path = require('path');

var controller = {
    saveProject: function (req, res) {
        var project = new Project();

        var params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        project.save((err, projectStored) => {
            if (err) return res.status(500).send({ message: 'Error al guardar' });
            if (!projectStored) return res.status(404).send({ message: 'No se ha podido guardar el proyecto' });
            return res.status(200).send({ project: projectStored });
        });
    },

    getProject: function (req, res) {
        var projectId = req.params.id;

        if (projectId == null) return res.status(404).send({ message: 'El proyecto no existe' });

        Project.findById(projectId, (err, project) => {
            if (err) return res.status(500).send({ message: 'Error al consultar method getProject' });
            if (!project) return res.status(404).send({ message: 'El proyecto no existe' });
            return res.status(200).send({ project });
        });
    },

    getProjects: function (req, res) {

        Project.find({}).sort('year').exec((err, projects) => {
            if (err) return res.status(500).send({ message: 'Error al consultar method getProjects' });
            if (!projects) return res.status(404).send({ message: 'No existen proyectos' });
            return res.status(200).send({ projects });
        });
    },

    updateProject: function (req, res) {
        var name = req.params.id;
        var update = req.body;

        Project.findByIdAndUpdate(name, update, { new: true }, (err, projectUpdated) => {
            if (err) return res.status(500).send({ message: 'Error al actualizar method updateProject' });
            if (!projectUpdated) return res.status(404).send({ message: 'El proyecto no existe' });
            return res.status(200).send({ project: projectUpdated });
        });
    },

    deleteProject: function (req, res) {
        var proyectoID = req.params.id;

        Project.findByIdAndRemove(proyectoID, (err, projectDelete) => {
            if (err) return res.status(500).send({ message: 'Error al eliminar method deleteProject' });
            if (!projectDelete) return res.status(404).send({ message: 'El proyecto no existe' });
            return res.status(200).send({ project: projectDelete });
        });
    },

    uploadImage: function (req, res) {
        var proyectoID = req.params.id;
        var fileName = 'Imagen no subida';

        if (req.files) {
            var filePath = req.files.image.path;
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[1];

            var extSplit = fileName.split('.');
            var fileExt = extSplit[1];

            if (fileExt == 'png' || fileExt == 'jpg' || fileExt == 'JPG' || fileExt == 'jpeg' || fileExt == 'gif') {

                Project.findByIdAndUpdate(proyectoID, { image: fileName }, { new: true }, (err, projectImage) => {
                    if (err) return res.status(500).send({ message: 'Error al cargar imagen method uploadImage' });
                    if (!projectImage) return res.status(404).send({ message: 'El proyecto no existe' });
                    return res.status(200).send({ project: projectImage });
                });
            } else {
                fs.unlink(filePath, (err) => {
                    return res.status(200).send({ message: 'Extension no valida' });
                });
            }

        } else {
            return res.status(200).send({ message: fileName });
        }
    },

    getImageFile: function (req, res) {
        var file = req.params.image;
        var path_file = './uploads/' + file;

        fs.exists(path_file, (exists) => {
            if (exists) {
                return res.sendFile(path.resolve(path_file));
            } else {
                return res.status(200).send({
                    message: 'Imagen no existe'
                })
            }
        });
    }
};

module.exports = controller;