const axios = require('axios');

const FB_URL = "https://cop4331-group15-default-rtdb.firebaseio.com";

const getValueAtPath = async (authkey, path) => {
    var builtPath = `${FB_URL}${path}.json`;
    if(authkey != null) builtPath += `?auth=${authkey}`;

    // Send our request, wait for response
    try {
        const result = await axios.get(builtPath);
        return result.data;
    } catch (e) {
        console.log(e);
    }
}

exports.getValueAtPath = getValueAtPath;