const loger = require("../log");
const render = require("../render");
const jsType = require("./swaggerType")
const contentType = require("./contentType")

let apis = {};

function decode(docs) {
  let paths = docs.paths;
  if (paths) {
    for (let path in paths) {
      for (let method in paths[path]) {
        let json = paths[path][method];
        let className = json.tags
          ? json.tags[0]
            ? json.tags[0]
            : "common"
          : "common";
        if (!apis[className]) {
          apis[className] = {};
        }
        let api = {
          originPath: path,
          path: path.replace(/{/g, "'+").replace(/}/g, "+'"),
          method: method,
          query: [],
          parameters: [],
          data: [],
          contentType: "",
          summary: json.summary,
        };
        if (!json.operationId) {
          loger.error("operationId undefined.Please contact backend...");
          process.exit(1);
        }
        // repeat operationId
        let id = 1;
        while (apis[className][json.operationId]) {
          json.operationId += id;
          ++id;
        }
        // decode query or path params
        if (json.parameters) {
          for (let key in json.parameters) {
            let parameter = json.parameters[key];
            if(parameter['$ref']) {
              let path = parameter['$ref'];
              let paths = path.split('/').slice(1);
              let tmpdoc = JSON.parse(JSON.stringify(docs));
              paths.map(key => {
                tmpdoc = tmpdoc[key];
              })
              parameter = tmpdoc;
              // console.log('=============')
              // console.log(parameter)
              // console.log('=============')
            }
            let parm = {
              name: parameter.name,
              type: parameter.schema ? jsType[parameter.schema.type] : "",
              summary: parameter.description ? parameter.description : "",
            };

            if (parameter.in == "query") {
              api.query.push(parm);
              api.parameters.push(parm);
            } else if (parameter.in == "path") {
              let rgx = new RegExp("\\'\\+" + parm.name + "\\+\\'", "gi");
              api.path = api.path.replace(
                rgx,
                "'+" + parm.name.toLowerCase() + "+'"
              );
              let lowerRex = new RegExp(
                "\\'\\+" + parm.name.toLowerCase() + "\\+\\'",
                "gi"
              );
              api.path = api.path.replace(
                lowerRex,
                "'+" + parm.name.toLowerCase() + "+'"
              );
              api.path = api.path.replace(
                "'+" + parm.name.toLowerCase() + "+'",
                "'+" + ("Path" + parm.name).toLowerCase() + "+'"
              );
              parm.name = "Path" + parm.name;
              api.parameters.push(parm);
            }
          }
        }
        // decode form or body data
        if (json.requestBody) {
          let parameter = json.requestBody.content;
          if(json.requestBody['$ref']) {
            let path = json.requestBody['$ref'];
            let paths = path.split('/').slice(1);
            let tmpdoc = JSON.parse(JSON.stringify(docs));
            paths.map(key => {
              tmpdoc = tmpdoc[key];
            })
            parameter = tmpdoc.content;
          }
          if (!parameter) continue;
          for (let content in parameter) {
            let item = parameter[content];
            if (content == contentType.form.formData) {
              api.contentType = content;
              let parameter = item.schema;
              if (!parameter) continue;
              parameter = parameter.properties;
              if (!parameter) continue;
              for (let item in parameter) {
                let parm = {
                  name: item,
                  type: parameter[item].type ? jsType[parameter[item].type] : "",
                  summary: parameter[item].description
                    ? parameter[item].description
                    : ""
                };
                api.parameters.push(parm);
                api.data.push(parm);
              }
            } else if (content == contentType.application.json) {
              api.contentType = content;
              let parameter = item.schema;
              let typeName = "";
              // 如果是个对象
              if (parameter.$ref)
                typeName = parameter.$ref.split("/").slice(-1)[0];
              else
                typeName = parameter.type
              // 如果不包含参数名称，则默认传输整个body
              if (typeName) {
                // console.log('-----------')
                // console.log(parameter, typeName)
                // console.log('----------------')
                let parm = {
                  name: parameter.name ? parameter.name : typeName.replace(/\-(\w)/g, (all, letter) => letter.toUpperCase()),
                  type: parameter.$ref ? `UserModel.${typeName.replace(/\-(\w)/g, (all, letter) => letter.toUpperCase())}` : typeName.replace(/\-(\w)/g, (all, letter) => letter.toUpperCase()),
                  summary: parameter.description
                    ? parameter.description
                    : "",
                };
                api.parameters.push(parm);
                api.data.push(parm);
              } else {
                api.parameters.push({
                  name: "body",
                  type: "object",
                  summary: parameter.description
                    ? parameter.description
                    : "",
                })
              }
            } else {
              continue;
            }
          }
        }
        // assign response type for blob
        if (json.responses[200]) {
          if (json.responses[200].content)
            for (let key in json.responses[200].content) {
              if (key != "application/json" && key != "text/plain") {
                api["responseType"] = "blob";
              } else if (key == "text/plain") {
                api["responseType"] = "text";
              } else {
                api["responseType"] = "json";
              }
              try {
                // loger.info(json.responses[200].content[key].schema.$ref)
                if(json.responses[200].content[key].schema.$ref) {
                  let pathList = json.responses[200].content[key].schema.$ref.split('/');
                  api["returns"] = pathList[pathList.length-1]
                }
              } catch(ex) {}
              break;
            }
          else {
            api["responseType"] = "json"; // default
          }
        } else {
          api["responseType"] = "json"; // default
        }
        apis[className][json.operationId] = api;
      }
    }
  } else {
    loger.error("Document missing api");
    process.exit(1);
  }
}

const actionT = require("../template/action");
const classT = require("../template/class");
const indexT = require("../template/index");

function gen(apis, index) {
  let apiContent = [index];
  for (let className in apis) {
    let functions = [];
    let functionProperties = [];
    let controller = apis[className];
    for (let methodName in controller) {
      loger.info((className + "." + methodName).green);
      let action = controller[methodName];
      // 构造Action请求的注释
      let comment = [];
      comment.push("  * @summary " + (action.summary ? action.summary : ""));      
      for (let index in action.parameters) {
        let item = action.parameters[index];        
        // if(item['$ref']) {
        //   let path = item['$ref'];
        //   let paths = path.split('/').slice(1);
        //   let tmpdoc = JSON.parse(JSON.stringify(docs));
        //   paths.map(key => {
        //     tmpdoc = tmpdoc[key];
        //   })
        //   item = tmpdoc;
        // }
        // console.log(item)
        comment.push(
          "  * @param {" +
          item.type +
          "} [" +
          item.name +
          "] " +
          item.summary
        );
      }
      // 注释SourceToken
      comment.push(`  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求`)
      comment.push(`  * @param {Function} [uploadProgress] 上传回调函数`)
      comment.push(`  * @param {Function} [downloadProgress] 下载回调函数`)
      if(action.returns) comment.push(`  * @returns {Promise<UserModel.${action.returns}>}`)
      comment = comment.join("\n");
      // 构造参数名
      let paramsName = [];
      for (let index in action.parameters) {
        // decode complex object 解码复杂对象
        if (action.parameters[index].name.indexOf('.') != -1) {
          let tempPara = (action.parameters[index].name).split('.').slice()[0].toLowerCase();
          if (paramsName.indexOf(tempPara) != -1) continue;
        }
        // shiwan66 这里修改params参数大小写
        paramsName.push((action.parameters[index].name).split('.').slice()[0]);
      }
      paramsName = paramsName.join(",");
      if (paramsName.length > 0) { // 判断是否有参数，如果有参数则后面再补一个,号
        paramsName += ",";
      }
      let dataName = [];
      if (action.data.length > 0) {
        for (let index in action.data) {
          if (action.data[index].name.indexOf('.') != -1) {
            let tempPara = (action.data[index].name).split('.').slice()[0].toLowerCase();
            if (dataName.indexOf(tempPara) != -1) continue;
          }
          dataName.push((action.data[index].name).split(".").slice()[0]);
        }
        dataName = dataName.join(",");
        if (action.contentType != contentType.application.json) {
          dataName = `{${dataName}}`
        }
      } else {
        if (action.parameters.findIndex(e => e.name == "body") != -1)
          dataName = `body`
        else
          dataName = "{}"
      }

      let queryName = [];
      for (let index in action.query) {
        if (action.query[index].name.indexOf('.') != -1) {
          let tempPara = (action.query[index].name).split('.').slice()[0].toLowerCase();
          if (queryName.indexOf(tempPara) != -1) continue;
        }
        // shiwan66 这里修改query参数大小写
        queryName.push((action.query[index].name).split(".").slice()[0]);
      }
      // shiwan66 这里打印可以看每个api调用参数信息
      // console.log({
      //   comment,
      //   methodName,
      //   paramsName: paramsName.replace(/\-(\w)/g, (all, letter) => letter.toUpperCase()),
      //   dataName: dataName.replace(/\-(\w)/g, (all, letter) => letter.toUpperCase()),
      //   queryName,
      //   url: action.path,
      //   method: action.method,
      //   contentType: action.contentType,
      //   responseType: action.responseType,
      // })
      let apiT = render(actionT, {
        comment,
        methodName,
        paramsName: paramsName.replace(/\-(\w)/g, (all, letter) => letter.toUpperCase()),
        dataName: dataName.replace(/\-(\w)/g, (all, letter) => letter.toUpperCase()),
        queryName,
        url: action.path,
        method: action.method,
        contentType: action.contentType,
        responseType: action.responseType,
      });
      // shiwan66 这里替换class大小写
      className = className.slice(0,1).toUpperCase()+className.slice(1).replace(/\-(\w)/g, (all, letter) => letter.toUpperCase());
      // url property
      functionProperties.push(render(`/**
* @description {{methodName}} url链接，包含baseURL
*/
{{className}}.{{methodName}}.fullPath=\`\${axios.defaults.baseURL}{{url}}\``, { className, methodName, url: action.originPath }))
      functionProperties.push(render(`/**
* @description {{methodName}} url链接，不包含baseURL
*/
{{className}}.{{methodName}}.path=\`{{url}}\``, { className, methodName, url: action.originPath }))
      functions.push(apiT);
    }
    functions = functions.join("\n");
    functionProperties = functionProperties.join("\n");
    apiContent.push(
      render(classT, {
        className,
        functions,
        classMethodProperties: functionProperties
      })
    );
  }
  apiContent = apiContent.join("\n");
  return apiContent;
}

module.exports = function (docs) {
  // 判断是否为openapijs 3.0版本，否则提示错误不支持
  if (docs.openapi && parseInt(docs.openapi.split('.')[0]) == 3) {
    decode(docs);
    return gen(apis, indexT);
  } else {
    loger.error("Only Support Open Api 3.0+")
    process.exit(1)
  }
};
