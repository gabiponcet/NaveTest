const Naver = require('../models/Naver');
const Project = require('../models/Project');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    async index(req,res) {
        const projects = await Project.findAll();

        return res.json(projects);
    },

    async show(req,res) {
        const { project_id } = req.params;
    
        const project = await Project.findByPk( project_id , {
            include: { association: 'navers' }
        });
        return res.json(project);
    },

    async showAll(req,res) {
        const projects = await Project.findAll( {
            include: { association: 'navers' }
        });
        return res.json(projects);
    },

    async count(req,res) {
        const projects = await Project.findAll( {
            include: { association: 'navers' },
        });
        const navers =await Project.count({ naver_id });
        console.log(navers);
        return res.json(projects);
    },

    async store(req,res) {
        const { naver_id, name } = req.body;

        const naver = await Naver.findByPk(naver_id);
        
        if(!naver) {
            return res.status(400).json({ error: 'Naver not found.' });
        }
        
        const [ project ] = await Project.findOrCreate({
            where: { name },
            defaults: {
                id: uuidv4(),
            }
        });

        await naver.addProject(project);

        return res.json(project);
    }
}