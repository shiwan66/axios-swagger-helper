### 结论
* swagger2.2 为openapi2版本， 通过swagger-vue进行生成
* phpdata 为openapi3 版本，通过axios-swagger-helper生成 api及model
* 以上两个的小程序适配在mpuve-demo项目axios-swaggerVue-webview分支有示例
* mock工具及ui可使用swagger-api-codegen
* 项目若要求极低可以使用swagger-request 可适配openapi2, openapi3
* https://sample.hntyhb.com.cn/https/?url=http://39.100.123.215:8191/tf/main/v2/api-docs http转https资源


### axios-swagger-helper  
```
  支持openapi3,有model
  phpdata openapi3 
    1. model的class名有横杠

  grid swagger2.2
    报错无法使用,（wind openapi3 需要在json里全局替换«和»为空，并且api.js 导出class名当前项目为中文需要java端配合修改（不改也能用，就是class命名为中文-_-||））
    复制http://39.100.123.215:8191/tf/main/v2/api-docs到https://editor.swagger.io
    配合(https://editor.swagger.io/) Edit/Convert to OpenAPI 3, 然后File另存json下载
    wind.json 正则替换
      [«»] -> 
    wind.json启动http服务
      http://localhost:3000/wind.json
    执行
      npm run dev get http://localhost:3000/wind.json -d ./windv3
    api.js正则替换
      ([a-z])-([a-z])(.*[=,{]) -> $1$2$3
      responseType = "blob" -> responseType = "json"
```
### swagger-axios-converter
  生成报错 Running "swagger-vue-codegen:dist" (swagger-vue-codegen) task
          Fatal error: Cannot read property 'forEach' of undefined

### swagger-vue
```
  支持openapi2，无model
  不支持model可惜了
  phpdata 不支持openapi3
  grid openapi2 正常
```
### swagger2axios
```
  基本不支持，无model
  demo 输出满足需求但无model
  实际openapi3 格式要求过高，兼容性太差，无法成功
```
### swagger-api-codegen 
```
  支持openapi2, 导出ts
  优点挺多，有些鸡肋
  1. 生成的是ts -_-|||
  2. cli命令
  3. cli命令swagger json url 启动swagger-ui 查看，不同跑swagger-editor-online
  4. 生成mock 数据不错
  5. 只支持openapi2
```
### agol-swagger-codegen-js+https://developers.arcgis.com/
  arcgis paas服务，可视化

### swagger-builder
  测试不通过

### swagger-request
  openapi2,openapi3 都可用但无任何参数提示，几乎无用

### Open Api 3.0 Auto Gen Js Axios Client Code

![](https://img.shields.io/npm/v/axios-swagger-helper?style=flat-square)
![](https://img.shields.io/npm/dw/axios-swagger-helper?style=flat-square)

#### What is axios-swagger-helper?
1. Automatically export from swagger.json(OPEN API 3)
2. Example of exported file
model.js
``` js
export class WeatherForecast {
   
    /**
     * 
     * @type {String}
     */
    date=undefined
   
    /**
     * 
     * @type {Number}
     */
    temperatureC=undefined
   
    /**
     * 
     * @type {Number}
     */
    temperatureF=undefined
   
    /**
     * 
     * @type {String}
     */
    summary=undefined

}
export class Query {
   
    /**
     * 
     * @type {Number}
     */
    page=undefined
   
    /**
     * 
     * @type {Number}
     */
    size=undefined

}

```
api.js
``` js
/* eslint-disable */
// More information: https://github.com/minskiter/openapijs
import axios from './config.js'
import {CancelTokenSource} from 'axios'
import * as UserModel from './model.js'


axios.interceptors.request.use(
  config => {
    if (
      config.headers["Content-Type"].includes("x-www-form-urlencoded") ||
      config.headers["Content-Type"].includes("multipart/form-data")
    ) {
      let formData = new FormData();
      for (let item in config.data) {
        if (config.data[item])
        if (
          typeof config.data[item] == "object" &&
          Array.isArray(config.data[item])
        ){  
          for (let index in config.data[item]){
              let i = config.data[item][index];
              formData.append(item,i);
          }
        }
        else formData.append(item, config.data[item]);
      }
      config.data = formData;
    }
    return config;
  },
  error=>{
    return Promise.reject(error)
  }
)
export class WeatherForecast {
 
  /**
  * @summary 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  */
  static async Get(cancelSource){
    return await new Promise((resolve,reject)=>{
      let responseType = "text";
      let options = {
        method:'get',
        url:'/WeatherForecast',
        data:{},
        params:{},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?.token
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 
  * @param {String} [file] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  */
  static async GetFileName(file,cancelSource){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/WeatherForecast',
        data:{file},
        params:{},
        headers:{
          "Content-Type":"multipart/form-data"
        },
        cancelToken:cancelSource?.token
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 
  * @param {UserModel.Query} [query] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  */
  static async PostTest(query,cancelSource){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/WeatherForecast/test',
        data:query,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?.token
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
}
```

#### INSTALL
``` sh
yarn global add axios-swagger-helper
# npm install -g axios-swagger-helper
```

use single project
``` sh
yarn add -D axios-swagger-helper
# npm install -D axios-swagger-helper
```
package.json
``` json
{
    "scripts":{
        "api":"api-cli get https://example.com/swagger/v1/swagger.json -d ./api"
    }
}
```

#### USAGE

``` sh
# Global
api-cli get {url} -d {output_dir}
```

#### Devlopment

- git clone https://github.com/minskiter/openapijs.git # clone this repo
- yarn # install dependencies
- yarn dev # debug 

#### Issues

Template:
[Swagger Docs Url]: http://localhost:5000/swagger/v1/swagger.json

Problem: 
something decode fail...
[image]

#### CHANGE LOG
[2021-3-20] v0.0.44  
1. UploadProgress Callback Function
2. DownloadProgress Callback Function  
[2021-3-6]  v0.0.42  
1. Import userModel 
2. Format parameter type {userModel.*}  
[2021-3-5]  v0.0.41  
1. Add model classes file
2. Rename axios.js config.js
3. Add import models resolve 
4. [Update Warning] Model.js will change the old parameters, please use the class instead