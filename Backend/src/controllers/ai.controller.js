import aiServise from '../services/ai.service.js';

export const getResponse = async (req, res) => {
    const code = req.body.code;

    if (!code) {
        return res.status(401).send("Code is Required");
    }

    const response = await aiServise(code);

    res.send(response);
}