process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

const RENDER_API_KEY = 'rnd_ZCZZyPv72bDxjWbodpokNzMV2yyW';

app.get('/my-apps', async (req, res) => {
    try {
        const response = await axios.get('https://api.render.com/v1/services', {
            headers: {
                'Authorization': `Bearer ${RENDER_API_KEY}`,
                'Accept': 'application/json'
            }
        });
        
        // החזרת רשימת השירותים לדפדפן
        res.json(response.data);
    } catch (error) {
        console.error("Render API Error:", error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Failed to fetch services from Render' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
