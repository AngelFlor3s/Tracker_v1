const express = require('express');
const fetch = require('node-fetch')
const app = express();

const port = 4200;
app.get("/activity", async function(request,response){
    const  api_url = "http://www.boredapi.com/api/activity/";
    const fetch_response = await fetch(api_url);
    const jsonObj = await fetch_response.json();
    response.json(jsonObj);
});

// Returning with a parameter
app.get("/param/:activity", async (request,response) => {
    const activity = request.params.activity;
    //use backticks for string interpritation
    const  api_url = `http://www.boredapi.com/api/activity?type=${activity}`;
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    response.json(jsonObj);
});

app.get('oneActivity', async function(request,response){
    const  api_url = "http://www.boredapi.com/api/activity/";
    const fetch_response = await fetch(api_url);
    const jsonObj = await fetch_response.json();
    const oneComponent = Object.entries(jsonObj);
    let counter = 0;
    response.send(oneComponent[counter])
})

app.listen(port, function(){
    // backticks are neccesary
    console.log(`App listening on http://localhost:${port}`);
    // console.log("App listening at port: " + port );

});