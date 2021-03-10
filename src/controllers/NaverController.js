const Naver = require('../models/Naver');

module.exports = {
    async StorageEvent(req,res) {
        const { name, job_role, birthdate, admission_date } = req.body;

        const naver = await Naver.create({ name, job_role, birthdate, admission_date });

        return res.json(naver);
    }
}