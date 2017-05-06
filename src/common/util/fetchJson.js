import fetch from 'isomorphic-fetch';

export default async function(url) {
    const response = await fetch(url, {
        headers: {'Accept': 'application/json'}
    });
    let json, jsonParseErr;
    try {
        json = await response.json();
    }
    catch (e) {
        jsonParseErr = e;
    }
    if (response.status >= 400) {
        throw Error(json && json.errors ? json.errors[0].detail: 'Unknown error fetching JSON. HTTP Response Code: ' + response.status);
    }
    else if (jsonParseErr) {
        throw Error(jsonParseErr);
    }
    return json;
}