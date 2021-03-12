const Naver = require('../models/Naver');
const Project = require('../models/Project');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    async index(req,res) {
        const navers = await Naver.findAll();

        return res.json(navers); 
    },

    async show(req,res) {
        const { naver_id } = req.params;
    
        const naver = await Naver.findByPk( naver_id , {
            include: { association: 'projects' }
        });
        return res.json(naver);
    },

    async store(req,res) {
        const id = uuidv4();
        const { name, job_role, birthdate, admission_date } = req.body;

        const naver = await Naver.create({ id, name, job_role, birthdate, admission_date });

        return res.json(naver);
    }
}