const express = require("express");
const axios = require("axios");
const app = express();

const logger = require("./logger");

async function callApi(query) {
  let returnData = {
    status: true,
    data: [],
  };

  try {
    const response = await axios.get(
      "http://www.omdbapi.com/?apikey=" + process.env.OMDB_APIKEY + "&" + query
    );
    returnData.data = response.data;
  } catch (err) {
    returnData.status = false;
    returnData.data = [];
  }

  return returnData;
}

app.get("/", (req, res, next) => {
  full_response = {
    http_status: 200,
    status: true,
    message: "API ready to use",
    data: {},
    server_time: new Date().toISOString(),
  };
  res.status(full_response.http_status).send(full_response);
});

app.get("/search", async (req, res, next) => {
  let full_response = {
    http_status: 200,
    status: true,
    message: "",
    data: [],
  };

  let dataLog = {
    endpoint: "/search",
    param: JSON.stringify(req.query),
  };

  if (process.env.NODE_ENV != "test") {
    logger.addLog(dataLog);

    let dataApi = await callApi(`s=${req.query.s}`);
    if (dataApi.status) {
      full_response.data = dataApi.data;
    } else {
      full_response.http_status = 500;
      full_response.data = [];
      full_response.message = "Fetching data failed";
    }
  }
  res.status(full_response.http_status).send(full_response);
});

app.get("/detail", async (req, res, next) => {
  let full_response = {
    http_status: 200,
    status: true,
    message: "",
    data: [],
  };

  let dataLog = {
    endpoint: "/detail",
    param: JSON.stringify(req.query),
  };

  if (process.env.NODE_ENV != "test") {
    logger.addLog(dataLog);

    let dataApi = await callApi(`i=${req.query.i}`);
    if (dataApi.status) {
      full_response.data = dataApi;
    } else {
      full_response.http_status = 500;
      full_response.data = [];
      full_response.message = "Fetching data failed";
    }
  }
  res.status(full_response.http_status).send(full_response);
});

module.exports = app;
