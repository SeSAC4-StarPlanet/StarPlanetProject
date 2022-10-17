const sampleService = require('../services/sample');

exports.addSample = async (req, res) => {
    const sample = req.body;
    console.log(sample);

    const samples = await sampleService.addSample(sample);

    res.json({ samples });
}