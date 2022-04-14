'use strict'

const classT = require("../template/model");
const render = require("../render")
const jsType = require("./swaggerType")

const propertyT = `   
    /**
     * {{summary}}
     * @type {{{type}}}
     */
    {{name}}={{value}}`;

const defaultValue = {
    string: `''`,
    array: `[]`,
    integer: `undefined`,
    boolean: `false`,
    object: `{}`
}

const paramsT = `     * @param {{{type}}} {{name}} {{summary}}`


function schemaGen(schema) {
    let props = "";
    let constructFunc = []
    let assigns = []
    let params = []
    if (schema.type && schema.type == "object") {
        for (let propertyName in schema.properties) {
            let hasDefault = schema.properties[propertyName];
            constructFunc.push(`${propertyName} = ${hasDefault?defaultValue[schema.properties[propertyName].type]:'undefualt'}`)
            assigns.push(`this.${propertyName} = ${propertyName}`)
            let property = schema.properties[propertyName]
            //console.log(property)
            if (property.type) {
                let type = jsType[property.type]
                try {
                    if(property.type == 'array') {
                        let pathList = property.items.$ref.split('/');
                        type = `${type}<${pathList[pathList.length-1]}>`
                    }
                } catch(ex) {}
                let obj = {
                    type: type,
                    summary: property.description == null ? "" : property.description,
                    name: propertyName,
                    value: defaultValue[property.type]
                }
                // if(propertyName.toLowerCase() == 'staffid') {
                //     console.log('jsType')
                //     console.log(jsType)
                //     console.log('property')
                //     console.log(property)
                //     console.log('propertyName')
                //     console.log(propertyName)
                //     console.log('defaultValue')
                //     console.log(defaultValue)
                // }
                props += render(propertyT, obj)
                params.push(render(paramsT, obj))
            } else if (property.$ref) {
                let className = property.$ref.split("/").slice(-1)[0]
                let obj = {
                    type: className,
                    summary: "",
                    name: propertyName,
                    value: `undefined`
                }
                props += render(propertyT, obj)
                params.push(render(paramsT, obj))
            }
        }
    }
    return `
    /**
     *
${params.join("\n")}
     */ 
    constructor(${constructFunc.join(",")}){
        ${assigns.join("\n        ")}
    }
    ${props}
    `
}

function schemaResolver(docs) {
    let classes = {}
    for (let schemaName in docs.components.schemas) {
        let schema = docs.components.schemas[schemaName]
        // console.log({
        //   looooooooooooooooooooooo:schemaName,
        //   schemaName:schemaName.replace(/\-(\w)/g, (all, letter) => letter.toUpperCase())
        // })
        classes[schemaName] = render(classT, {
            className: schemaName.replace(/\-(\w)/g, (all, letter) => letter.toUpperCase()),
            functions: schemaGen(schema),
        })
    }
    var content = ""
    for (let className in classes) {
        content += classes[className] + '\n';
    }
    return content
}

module.exports = schemaResolver;