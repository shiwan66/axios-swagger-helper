#! /usr/bin/env node

const Loger = require("./log");
const program = require("commander");
const file = require("./output")
const docsHelper = require("./docs");

const schemaHelper = require("./tools/schemaResolve");
const apigen = require("./tools/apigen");

const package = require("../package.json");
const axios = require("axios");


(async function (url, program) {    
    const savepath = "./dist/"+new Date().valueOf();
        // if (!url) {
        //     Loger.error(`USAGE api get [url]`);
        //     process.exit(1);
        // }
        // let docs = await docsHelper.getDocs(url);
        let convertUrl = `http://phpdata.hntyhb.com.cn:9001/openapi`
        let docs = (await axios.get(convertUrl)).data;

        let api = apigen(docs);
        let schemas = schemaHelper(docs)
        if (schemas) {
            file.save(savepath, "model.js", schemas);
        }
        if (api) {
            file.save(savepath, "api.js", api);
            // if (!file.exist(savepath, "config.js")) {
            //     axios = require('./template/config.js')
            //     file.save(savepath, "config.js", axios);
            // }
        }
})()

