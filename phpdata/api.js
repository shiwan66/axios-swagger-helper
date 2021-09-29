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
export class article {
 
  /**
  * @summary 
  * @param {Array} [filter] Filters to be applied. Each filter consists of a column, an operator and a value (comma separated). Example: id,eq,1
  * @param {String} [include] Columns you want to include in the output (comma separated). Example: posts.*,categories.name
  * @param {String} [exclude] Columns you want to exclude from the output (comma separated). Example: posts.content
  * @param {Array} [order] Column you want to sort on and the sort direction (comma separated). Example: id,desc
  * @param {String} [size] Maximum number of results (for top lists). Example: 10
  * @param {String} [page] Page number and page size (comma separated). Example: 1,10
  * @param {Array} [join] Paths (comma separated) to related entities that you want to include. Example: comments,users
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async list_article(filter,include,exclude,order,size,page,join,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/records/article',
        data:{},
        params:{filter,include,exclude,order,size,page,join},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {UserModel.createArticle} [createarticle] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async create_article(createarticle,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/records/article',
        data:createarticle,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {String} [include] Columns you want to include in the output (comma separated). Example: posts.*,categories.name
  * @param {String} [exclude] Columns you want to exclude from the output (comma separated). Example: posts.content
  * @param {Array} [join] Paths (comma separated) to related entities that you want to include. Example: comments,users
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async read_article(pathid,include,exclude,join,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/records/article/'+pathid+'',
        data:{},
        params:{include,exclude,join},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {UserModel.updateArticle} [updatearticle] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async update_article(pathid,updatearticle,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/records/article/'+pathid+'',
        data:updatearticle,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async delete_article(pathid,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/records/article/'+pathid+'',
        data:{},
        params:{},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {UserModel.incrementArticle} [incrementarticle] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async increment_article(pathid,incrementarticle,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'patch',
        url:'/records/article/'+pathid+'',
        data:incrementarticle,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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

// class article static method properties bind
/**
* @description list_article url链接，包含baseURL
*/
article.list_article.fullPath=`${axios.defaults.baseURL}/records/article`
/**
* @description list_article url链接，不包含baseURL
*/
article.list_article.path=`/records/article`
/**
* @description create_article url链接，包含baseURL
*/
article.create_article.fullPath=`${axios.defaults.baseURL}/records/article`
/**
* @description create_article url链接，不包含baseURL
*/
article.create_article.path=`/records/article`
/**
* @description read_article url链接，包含baseURL
*/
article.read_article.fullPath=`${axios.defaults.baseURL}/records/article/{id}`
/**
* @description read_article url链接，不包含baseURL
*/
article.read_article.path=`/records/article/{id}`
/**
* @description update_article url链接，包含baseURL
*/
article.update_article.fullPath=`${axios.defaults.baseURL}/records/article/{id}`
/**
* @description update_article url链接，不包含baseURL
*/
article.update_article.path=`/records/article/{id}`
/**
* @description delete_article url链接，包含baseURL
*/
article.delete_article.fullPath=`${axios.defaults.baseURL}/records/article/{id}`
/**
* @description delete_article url链接，不包含baseURL
*/
article.delete_article.path=`/records/article/{id}`
/**
* @description increment_article url链接，包含baseURL
*/
article.increment_article.fullPath=`${axios.defaults.baseURL}/records/article/{id}`
/**
* @description increment_article url链接，不包含baseURL
*/
article.increment_article.path=`/records/article/{id}`

export class comments {
 
  /**
  * @summary 
  * @param {Array} [filter] Filters to be applied. Each filter consists of a column, an operator and a value (comma separated). Example: id,eq,1
  * @param {String} [include] Columns you want to include in the output (comma separated). Example: posts.*,categories.name
  * @param {String} [exclude] Columns you want to exclude from the output (comma separated). Example: posts.content
  * @param {Array} [order] Column you want to sort on and the sort direction (comma separated). Example: id,desc
  * @param {String} [size] Maximum number of results (for top lists). Example: 10
  * @param {String} [page] Page number and page size (comma separated). Example: 1,10
  * @param {Array} [join] Paths (comma separated) to related entities that you want to include. Example: comments,users
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async list_comments(filter,include,exclude,order,size,page,join,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/records/comments',
        data:{},
        params:{filter,include,exclude,order,size,page,join},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {UserModel.createComments} [createcomments] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async create_comments(createcomments,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/records/comments',
        data:createcomments,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {String} [include] Columns you want to include in the output (comma separated). Example: posts.*,categories.name
  * @param {String} [exclude] Columns you want to exclude from the output (comma separated). Example: posts.content
  * @param {Array} [join] Paths (comma separated) to related entities that you want to include. Example: comments,users
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async read_comments(pathid,include,exclude,join,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/records/comments/'+pathid+'',
        data:{},
        params:{include,exclude,join},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {UserModel.updateComments} [updatecomments] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async update_comments(pathid,updatecomments,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/records/comments/'+pathid+'',
        data:updatecomments,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async delete_comments(pathid,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/records/comments/'+pathid+'',
        data:{},
        params:{},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {UserModel.incrementComments} [incrementcomments] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async increment_comments(pathid,incrementcomments,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'patch',
        url:'/records/comments/'+pathid+'',
        data:incrementcomments,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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

// class comments static method properties bind
/**
* @description list_comments url链接，包含baseURL
*/
comments.list_comments.fullPath=`${axios.defaults.baseURL}/records/comments`
/**
* @description list_comments url链接，不包含baseURL
*/
comments.list_comments.path=`/records/comments`
/**
* @description create_comments url链接，包含baseURL
*/
comments.create_comments.fullPath=`${axios.defaults.baseURL}/records/comments`
/**
* @description create_comments url链接，不包含baseURL
*/
comments.create_comments.path=`/records/comments`
/**
* @description read_comments url链接，包含baseURL
*/
comments.read_comments.fullPath=`${axios.defaults.baseURL}/records/comments/{id}`
/**
* @description read_comments url链接，不包含baseURL
*/
comments.read_comments.path=`/records/comments/{id}`
/**
* @description update_comments url链接，包含baseURL
*/
comments.update_comments.fullPath=`${axios.defaults.baseURL}/records/comments/{id}`
/**
* @description update_comments url链接，不包含baseURL
*/
comments.update_comments.path=`/records/comments/{id}`
/**
* @description delete_comments url链接，包含baseURL
*/
comments.delete_comments.fullPath=`${axios.defaults.baseURL}/records/comments/{id}`
/**
* @description delete_comments url链接，不包含baseURL
*/
comments.delete_comments.path=`/records/comments/{id}`
/**
* @description increment_comments url链接，包含baseURL
*/
comments.increment_comments.fullPath=`${axios.defaults.baseURL}/records/comments/{id}`
/**
* @description increment_comments url链接，不包含baseURL
*/
comments.increment_comments.path=`/records/comments/{id}`

export class fileproject {
 
  /**
  * @summary 
  * @param {Array} [filter] Filters to be applied. Each filter consists of a column, an operator and a value (comma separated). Example: id,eq,1
  * @param {String} [include] Columns you want to include in the output (comma separated). Example: posts.*,categories.name
  * @param {String} [exclude] Columns you want to exclude from the output (comma separated). Example: posts.content
  * @param {Array} [order] Column you want to sort on and the sort direction (comma separated). Example: id,desc
  * @param {String} [size] Maximum number of results (for top lists). Example: 10
  * @param {String} [page] Page number and page size (comma separated). Example: 1,10
  * @param {Array} [join] Paths (comma separated) to related entities that you want to include. Example: comments,users
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async list_fileproject(filter,include,exclude,order,size,page,join,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/records/fileproject',
        data:{},
        params:{filter,include,exclude,order,size,page,join},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {UserModel.createFileproject} [createfileproject] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async create_fileproject(createfileproject,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/records/fileproject',
        data:createfileproject,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {String} [include] Columns you want to include in the output (comma separated). Example: posts.*,categories.name
  * @param {String} [exclude] Columns you want to exclude from the output (comma separated). Example: posts.content
  * @param {Array} [join] Paths (comma separated) to related entities that you want to include. Example: comments,users
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async read_fileproject(pathid,include,exclude,join,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/records/fileproject/'+pathid+'',
        data:{},
        params:{include,exclude,join},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {UserModel.updateFileproject} [updatefileproject] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async update_fileproject(pathid,updatefileproject,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/records/fileproject/'+pathid+'',
        data:updatefileproject,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async delete_fileproject(pathid,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/records/fileproject/'+pathid+'',
        data:{},
        params:{},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {UserModel.incrementFileproject} [incrementfileproject] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async increment_fileproject(pathid,incrementfileproject,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'patch',
        url:'/records/fileproject/'+pathid+'',
        data:incrementfileproject,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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

// class fileproject static method properties bind
/**
* @description list_fileproject url链接，包含baseURL
*/
fileproject.list_fileproject.fullPath=`${axios.defaults.baseURL}/records/fileproject`
/**
* @description list_fileproject url链接，不包含baseURL
*/
fileproject.list_fileproject.path=`/records/fileproject`
/**
* @description create_fileproject url链接，包含baseURL
*/
fileproject.create_fileproject.fullPath=`${axios.defaults.baseURL}/records/fileproject`
/**
* @description create_fileproject url链接，不包含baseURL
*/
fileproject.create_fileproject.path=`/records/fileproject`
/**
* @description read_fileproject url链接，包含baseURL
*/
fileproject.read_fileproject.fullPath=`${axios.defaults.baseURL}/records/fileproject/{id}`
/**
* @description read_fileproject url链接，不包含baseURL
*/
fileproject.read_fileproject.path=`/records/fileproject/{id}`
/**
* @description update_fileproject url链接，包含baseURL
*/
fileproject.update_fileproject.fullPath=`${axios.defaults.baseURL}/records/fileproject/{id}`
/**
* @description update_fileproject url链接，不包含baseURL
*/
fileproject.update_fileproject.path=`/records/fileproject/{id}`
/**
* @description delete_fileproject url链接，包含baseURL
*/
fileproject.delete_fileproject.fullPath=`${axios.defaults.baseURL}/records/fileproject/{id}`
/**
* @description delete_fileproject url链接，不包含baseURL
*/
fileproject.delete_fileproject.path=`/records/fileproject/{id}`
/**
* @description increment_fileproject url链接，包含baseURL
*/
fileproject.increment_fileproject.fullPath=`${axios.defaults.baseURL}/records/fileproject/{id}`
/**
* @description increment_fileproject url链接，不包含baseURL
*/
fileproject.increment_fileproject.path=`/records/fileproject/{id}`

export class fileprojectuser {
 
  /**
  * @summary 
  * @param {Array} [filter] Filters to be applied. Each filter consists of a column, an operator and a value (comma separated). Example: id,eq,1
  * @param {String} [include] Columns you want to include in the output (comma separated). Example: posts.*,categories.name
  * @param {String} [exclude] Columns you want to exclude from the output (comma separated). Example: posts.content
  * @param {Array} [order] Column you want to sort on and the sort direction (comma separated). Example: id,desc
  * @param {String} [size] Maximum number of results (for top lists). Example: 10
  * @param {String} [page] Page number and page size (comma separated). Example: 1,10
  * @param {Array} [join] Paths (comma separated) to related entities that you want to include. Example: comments,users
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async list_fileprojectuser(filter,include,exclude,order,size,page,join,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/records/fileprojectuser',
        data:{},
        params:{filter,include,exclude,order,size,page,join},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {UserModel.createFileprojectuser} [createfileprojectuser] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async create_fileprojectuser(createfileprojectuser,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/records/fileprojectuser',
        data:createfileprojectuser,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {String} [include] Columns you want to include in the output (comma separated). Example: posts.*,categories.name
  * @param {String} [exclude] Columns you want to exclude from the output (comma separated). Example: posts.content
  * @param {Array} [join] Paths (comma separated) to related entities that you want to include. Example: comments,users
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async read_fileprojectuser(pathid,include,exclude,join,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/records/fileprojectuser/'+pathid+'',
        data:{},
        params:{include,exclude,join},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {UserModel.updateFileprojectuser} [updatefileprojectuser] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async update_fileprojectuser(pathid,updatefileprojectuser,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/records/fileprojectuser/'+pathid+'',
        data:updatefileprojectuser,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async delete_fileprojectuser(pathid,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/records/fileprojectuser/'+pathid+'',
        data:{},
        params:{},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {UserModel.incrementFileprojectuser} [incrementfileprojectuser] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async increment_fileprojectuser(pathid,incrementfileprojectuser,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'patch',
        url:'/records/fileprojectuser/'+pathid+'',
        data:incrementfileprojectuser,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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

// class fileprojectuser static method properties bind
/**
* @description list_fileprojectuser url链接，包含baseURL
*/
fileprojectuser.list_fileprojectuser.fullPath=`${axios.defaults.baseURL}/records/fileprojectuser`
/**
* @description list_fileprojectuser url链接，不包含baseURL
*/
fileprojectuser.list_fileprojectuser.path=`/records/fileprojectuser`
/**
* @description create_fileprojectuser url链接，包含baseURL
*/
fileprojectuser.create_fileprojectuser.fullPath=`${axios.defaults.baseURL}/records/fileprojectuser`
/**
* @description create_fileprojectuser url链接，不包含baseURL
*/
fileprojectuser.create_fileprojectuser.path=`/records/fileprojectuser`
/**
* @description read_fileprojectuser url链接，包含baseURL
*/
fileprojectuser.read_fileprojectuser.fullPath=`${axios.defaults.baseURL}/records/fileprojectuser/{id}`
/**
* @description read_fileprojectuser url链接，不包含baseURL
*/
fileprojectuser.read_fileprojectuser.path=`/records/fileprojectuser/{id}`
/**
* @description update_fileprojectuser url链接，包含baseURL
*/
fileprojectuser.update_fileprojectuser.fullPath=`${axios.defaults.baseURL}/records/fileprojectuser/{id}`
/**
* @description update_fileprojectuser url链接，不包含baseURL
*/
fileprojectuser.update_fileprojectuser.path=`/records/fileprojectuser/{id}`
/**
* @description delete_fileprojectuser url链接，包含baseURL
*/
fileprojectuser.delete_fileprojectuser.fullPath=`${axios.defaults.baseURL}/records/fileprojectuser/{id}`
/**
* @description delete_fileprojectuser url链接，不包含baseURL
*/
fileprojectuser.delete_fileprojectuser.path=`/records/fileprojectuser/{id}`
/**
* @description increment_fileprojectuser url链接，包含baseURL
*/
fileprojectuser.increment_fileprojectuser.fullPath=`${axios.defaults.baseURL}/records/fileprojectuser/{id}`
/**
* @description increment_fileprojectuser url链接，不包含baseURL
*/
fileprojectuser.increment_fileprojectuser.path=`/records/fileprojectuser/{id}`

export class filerole {
 
  /**
  * @summary 
  * @param {Array} [filter] Filters to be applied. Each filter consists of a column, an operator and a value (comma separated). Example: id,eq,1
  * @param {String} [include] Columns you want to include in the output (comma separated). Example: posts.*,categories.name
  * @param {String} [exclude] Columns you want to exclude from the output (comma separated). Example: posts.content
  * @param {Array} [order] Column you want to sort on and the sort direction (comma separated). Example: id,desc
  * @param {String} [size] Maximum number of results (for top lists). Example: 10
  * @param {String} [page] Page number and page size (comma separated). Example: 1,10
  * @param {Array} [join] Paths (comma separated) to related entities that you want to include. Example: comments,users
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async list_filerole(filter,include,exclude,order,size,page,join,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/records/filerole',
        data:{},
        params:{filter,include,exclude,order,size,page,join},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {UserModel.createFilerole} [createfilerole] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async create_filerole(createfilerole,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/records/filerole',
        data:createfilerole,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {String} [include] Columns you want to include in the output (comma separated). Example: posts.*,categories.name
  * @param {String} [exclude] Columns you want to exclude from the output (comma separated). Example: posts.content
  * @param {Array} [join] Paths (comma separated) to related entities that you want to include. Example: comments,users
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async read_filerole(pathid,include,exclude,join,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/records/filerole/'+pathid+'',
        data:{},
        params:{include,exclude,join},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {UserModel.updateFilerole} [updatefilerole] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async update_filerole(pathid,updatefilerole,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/records/filerole/'+pathid+'',
        data:updatefilerole,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async delete_filerole(pathid,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/records/filerole/'+pathid+'',
        data:{},
        params:{},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {UserModel.incrementFilerole} [incrementfilerole] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async increment_filerole(pathid,incrementfilerole,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'patch',
        url:'/records/filerole/'+pathid+'',
        data:incrementfilerole,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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

// class filerole static method properties bind
/**
* @description list_filerole url链接，包含baseURL
*/
filerole.list_filerole.fullPath=`${axios.defaults.baseURL}/records/filerole`
/**
* @description list_filerole url链接，不包含baseURL
*/
filerole.list_filerole.path=`/records/filerole`
/**
* @description create_filerole url链接，包含baseURL
*/
filerole.create_filerole.fullPath=`${axios.defaults.baseURL}/records/filerole`
/**
* @description create_filerole url链接，不包含baseURL
*/
filerole.create_filerole.path=`/records/filerole`
/**
* @description read_filerole url链接，包含baseURL
*/
filerole.read_filerole.fullPath=`${axios.defaults.baseURL}/records/filerole/{id}`
/**
* @description read_filerole url链接，不包含baseURL
*/
filerole.read_filerole.path=`/records/filerole/{id}`
/**
* @description update_filerole url链接，包含baseURL
*/
filerole.update_filerole.fullPath=`${axios.defaults.baseURL}/records/filerole/{id}`
/**
* @description update_filerole url链接，不包含baseURL
*/
filerole.update_filerole.path=`/records/filerole/{id}`
/**
* @description delete_filerole url链接，包含baseURL
*/
filerole.delete_filerole.fullPath=`${axios.defaults.baseURL}/records/filerole/{id}`
/**
* @description delete_filerole url链接，不包含baseURL
*/
filerole.delete_filerole.path=`/records/filerole/{id}`
/**
* @description increment_filerole url链接，包含baseURL
*/
filerole.increment_filerole.fullPath=`${axios.defaults.baseURL}/records/filerole/{id}`
/**
* @description increment_filerole url链接，不包含baseURL
*/
filerole.increment_filerole.path=`/records/filerole/{id}`

export class fileroleproject {
 
  /**
  * @summary 
  * @param {Array} [filter] Filters to be applied. Each filter consists of a column, an operator and a value (comma separated). Example: id,eq,1
  * @param {String} [include] Columns you want to include in the output (comma separated). Example: posts.*,categories.name
  * @param {String} [exclude] Columns you want to exclude from the output (comma separated). Example: posts.content
  * @param {Array} [order] Column you want to sort on and the sort direction (comma separated). Example: id,desc
  * @param {String} [size] Maximum number of results (for top lists). Example: 10
  * @param {String} [page] Page number and page size (comma separated). Example: 1,10
  * @param {Array} [join] Paths (comma separated) to related entities that you want to include. Example: comments,users
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async list_fileroleproject(filter,include,exclude,order,size,page,join,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/records/fileroleproject',
        data:{},
        params:{filter,include,exclude,order,size,page,join},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {UserModel.createFileroleproject} [createfileroleproject] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async create_fileroleproject(createfileroleproject,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/records/fileroleproject',
        data:createfileroleproject,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {String} [include] Columns you want to include in the output (comma separated). Example: posts.*,categories.name
  * @param {String} [exclude] Columns you want to exclude from the output (comma separated). Example: posts.content
  * @param {Array} [join] Paths (comma separated) to related entities that you want to include. Example: comments,users
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async read_fileroleproject(pathid,include,exclude,join,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/records/fileroleproject/'+pathid+'',
        data:{},
        params:{include,exclude,join},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {UserModel.updateFileroleproject} [updatefileroleproject] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async update_fileroleproject(pathid,updatefileroleproject,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/records/fileroleproject/'+pathid+'',
        data:updatefileroleproject,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async delete_fileroleproject(pathid,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/records/fileroleproject/'+pathid+'',
        data:{},
        params:{},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {UserModel.incrementFileroleproject} [incrementfileroleproject] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async increment_fileroleproject(pathid,incrementfileroleproject,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'patch',
        url:'/records/fileroleproject/'+pathid+'',
        data:incrementfileroleproject,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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

// class fileroleproject static method properties bind
/**
* @description list_fileroleproject url链接，包含baseURL
*/
fileroleproject.list_fileroleproject.fullPath=`${axios.defaults.baseURL}/records/fileroleproject`
/**
* @description list_fileroleproject url链接，不包含baseURL
*/
fileroleproject.list_fileroleproject.path=`/records/fileroleproject`
/**
* @description create_fileroleproject url链接，包含baseURL
*/
fileroleproject.create_fileroleproject.fullPath=`${axios.defaults.baseURL}/records/fileroleproject`
/**
* @description create_fileroleproject url链接，不包含baseURL
*/
fileroleproject.create_fileroleproject.path=`/records/fileroleproject`
/**
* @description read_fileroleproject url链接，包含baseURL
*/
fileroleproject.read_fileroleproject.fullPath=`${axios.defaults.baseURL}/records/fileroleproject/{id}`
/**
* @description read_fileroleproject url链接，不包含baseURL
*/
fileroleproject.read_fileroleproject.path=`/records/fileroleproject/{id}`
/**
* @description update_fileroleproject url链接，包含baseURL
*/
fileroleproject.update_fileroleproject.fullPath=`${axios.defaults.baseURL}/records/fileroleproject/{id}`
/**
* @description update_fileroleproject url链接，不包含baseURL
*/
fileroleproject.update_fileroleproject.path=`/records/fileroleproject/{id}`
/**
* @description delete_fileroleproject url链接，包含baseURL
*/
fileroleproject.delete_fileroleproject.fullPath=`${axios.defaults.baseURL}/records/fileroleproject/{id}`
/**
* @description delete_fileroleproject url链接，不包含baseURL
*/
fileroleproject.delete_fileroleproject.path=`/records/fileroleproject/{id}`
/**
* @description increment_fileroleproject url链接，包含baseURL
*/
fileroleproject.increment_fileroleproject.fullPath=`${axios.defaults.baseURL}/records/fileroleproject/{id}`
/**
* @description increment_fileroleproject url链接，不包含baseURL
*/
fileroleproject.increment_fileroleproject.path=`/records/fileroleproject/{id}`

export class fileuser {
 
  /**
  * @summary 
  * @param {Array} [filter] Filters to be applied. Each filter consists of a column, an operator and a value (comma separated). Example: id,eq,1
  * @param {String} [include] Columns you want to include in the output (comma separated). Example: posts.*,categories.name
  * @param {String} [exclude] Columns you want to exclude from the output (comma separated). Example: posts.content
  * @param {Array} [order] Column you want to sort on and the sort direction (comma separated). Example: id,desc
  * @param {String} [size] Maximum number of results (for top lists). Example: 10
  * @param {String} [page] Page number and page size (comma separated). Example: 1,10
  * @param {Array} [join] Paths (comma separated) to related entities that you want to include. Example: comments,users
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async list_fileuser(filter,include,exclude,order,size,page,join,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/records/fileuser',
        data:{},
        params:{filter,include,exclude,order,size,page,join},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {UserModel.createFileuser} [createfileuser] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async create_fileuser(createfileuser,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/records/fileuser',
        data:createfileuser,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {String} [include] Columns you want to include in the output (comma separated). Example: posts.*,categories.name
  * @param {String} [exclude] Columns you want to exclude from the output (comma separated). Example: posts.content
  * @param {Array} [join] Paths (comma separated) to related entities that you want to include. Example: comments,users
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async read_fileuser(pathid,include,exclude,join,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/records/fileuser/'+pathid+'',
        data:{},
        params:{include,exclude,join},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {UserModel.updateFileuser} [updatefileuser] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async update_fileuser(pathid,updatefileuser,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/records/fileuser/'+pathid+'',
        data:updatefileuser,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async delete_fileuser(pathid,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/records/fileuser/'+pathid+'',
        data:{},
        params:{},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {UserModel.incrementFileuser} [incrementfileuser] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async increment_fileuser(pathid,incrementfileuser,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'patch',
        url:'/records/fileuser/'+pathid+'',
        data:incrementfileuser,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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

// class fileuser static method properties bind
/**
* @description list_fileuser url链接，包含baseURL
*/
fileuser.list_fileuser.fullPath=`${axios.defaults.baseURL}/records/fileuser`
/**
* @description list_fileuser url链接，不包含baseURL
*/
fileuser.list_fileuser.path=`/records/fileuser`
/**
* @description create_fileuser url链接，包含baseURL
*/
fileuser.create_fileuser.fullPath=`${axios.defaults.baseURL}/records/fileuser`
/**
* @description create_fileuser url链接，不包含baseURL
*/
fileuser.create_fileuser.path=`/records/fileuser`
/**
* @description read_fileuser url链接，包含baseURL
*/
fileuser.read_fileuser.fullPath=`${axios.defaults.baseURL}/records/fileuser/{id}`
/**
* @description read_fileuser url链接，不包含baseURL
*/
fileuser.read_fileuser.path=`/records/fileuser/{id}`
/**
* @description update_fileuser url链接，包含baseURL
*/
fileuser.update_fileuser.fullPath=`${axios.defaults.baseURL}/records/fileuser/{id}`
/**
* @description update_fileuser url链接，不包含baseURL
*/
fileuser.update_fileuser.path=`/records/fileuser/{id}`
/**
* @description delete_fileuser url链接，包含baseURL
*/
fileuser.delete_fileuser.fullPath=`${axios.defaults.baseURL}/records/fileuser/{id}`
/**
* @description delete_fileuser url链接，不包含baseURL
*/
fileuser.delete_fileuser.path=`/records/fileuser/{id}`
/**
* @description increment_fileuser url链接，包含baseURL
*/
fileuser.increment_fileuser.fullPath=`${axios.defaults.baseURL}/records/fileuser/{id}`
/**
* @description increment_fileuser url链接，不包含baseURL
*/
fileuser.increment_fileuser.path=`/records/fileuser/{id}`

export class fileversion {
 
  /**
  * @summary 
  * @param {Array} [filter] Filters to be applied. Each filter consists of a column, an operator and a value (comma separated). Example: id,eq,1
  * @param {String} [include] Columns you want to include in the output (comma separated). Example: posts.*,categories.name
  * @param {String} [exclude] Columns you want to exclude from the output (comma separated). Example: posts.content
  * @param {Array} [order] Column you want to sort on and the sort direction (comma separated). Example: id,desc
  * @param {String} [size] Maximum number of results (for top lists). Example: 10
  * @param {String} [page] Page number and page size (comma separated). Example: 1,10
  * @param {Array} [join] Paths (comma separated) to related entities that you want to include. Example: comments,users
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async list_fileversion(filter,include,exclude,order,size,page,join,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/records/fileversion',
        data:{},
        params:{filter,include,exclude,order,size,page,join},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {UserModel.createFileversion} [createfileversion] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async create_fileversion(createfileversion,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/records/fileversion',
        data:createfileversion,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {String} [include] Columns you want to include in the output (comma separated). Example: posts.*,categories.name
  * @param {String} [exclude] Columns you want to exclude from the output (comma separated). Example: posts.content
  * @param {Array} [join] Paths (comma separated) to related entities that you want to include. Example: comments,users
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async read_fileversion(pathid,include,exclude,join,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/records/fileversion/'+pathid+'',
        data:{},
        params:{include,exclude,join},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {UserModel.updateFileversion} [updatefileversion] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async update_fileversion(pathid,updatefileversion,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/records/fileversion/'+pathid+'',
        data:updatefileversion,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async delete_fileversion(pathid,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/records/fileversion/'+pathid+'',
        data:{},
        params:{},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {UserModel.incrementFileversion} [incrementfileversion] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async increment_fileversion(pathid,incrementfileversion,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'patch',
        url:'/records/fileversion/'+pathid+'',
        data:incrementfileversion,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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

// class fileversion static method properties bind
/**
* @description list_fileversion url链接，包含baseURL
*/
fileversion.list_fileversion.fullPath=`${axios.defaults.baseURL}/records/fileversion`
/**
* @description list_fileversion url链接，不包含baseURL
*/
fileversion.list_fileversion.path=`/records/fileversion`
/**
* @description create_fileversion url链接，包含baseURL
*/
fileversion.create_fileversion.fullPath=`${axios.defaults.baseURL}/records/fileversion`
/**
* @description create_fileversion url链接，不包含baseURL
*/
fileversion.create_fileversion.path=`/records/fileversion`
/**
* @description read_fileversion url链接，包含baseURL
*/
fileversion.read_fileversion.fullPath=`${axios.defaults.baseURL}/records/fileversion/{id}`
/**
* @description read_fileversion url链接，不包含baseURL
*/
fileversion.read_fileversion.path=`/records/fileversion/{id}`
/**
* @description update_fileversion url链接，包含baseURL
*/
fileversion.update_fileversion.fullPath=`${axios.defaults.baseURL}/records/fileversion/{id}`
/**
* @description update_fileversion url链接，不包含baseURL
*/
fileversion.update_fileversion.path=`/records/fileversion/{id}`
/**
* @description delete_fileversion url链接，包含baseURL
*/
fileversion.delete_fileversion.fullPath=`${axios.defaults.baseURL}/records/fileversion/{id}`
/**
* @description delete_fileversion url链接，不包含baseURL
*/
fileversion.delete_fileversion.path=`/records/fileversion/{id}`
/**
* @description increment_fileversion url链接，包含baseURL
*/
fileversion.increment_fileversion.fullPath=`${axios.defaults.baseURL}/records/fileversion/{id}`
/**
* @description increment_fileversion url链接，不包含baseURL
*/
fileversion.increment_fileversion.path=`/records/fileversion/{id}`

export class logs {
 
  /**
  * @summary 
  * @param {Array} [filter] Filters to be applied. Each filter consists of a column, an operator and a value (comma separated). Example: id,eq,1
  * @param {String} [include] Columns you want to include in the output (comma separated). Example: posts.*,categories.name
  * @param {String} [exclude] Columns you want to exclude from the output (comma separated). Example: posts.content
  * @param {Array} [order] Column you want to sort on and the sort direction (comma separated). Example: id,desc
  * @param {String} [size] Maximum number of results (for top lists). Example: 10
  * @param {String} [page] Page number and page size (comma separated). Example: 1,10
  * @param {Array} [join] Paths (comma separated) to related entities that you want to include. Example: comments,users
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async list_logs(filter,include,exclude,order,size,page,join,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/records/logs',
        data:{},
        params:{filter,include,exclude,order,size,page,join},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {UserModel.createLogs} [createlogs] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async create_logs(createlogs,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/records/logs',
        data:createlogs,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {String} [include] Columns you want to include in the output (comma separated). Example: posts.*,categories.name
  * @param {String} [exclude] Columns you want to exclude from the output (comma separated). Example: posts.content
  * @param {Array} [join] Paths (comma separated) to related entities that you want to include. Example: comments,users
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async read_logs(pathid,include,exclude,join,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/records/logs/'+pathid+'',
        data:{},
        params:{include,exclude,join},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {UserModel.updateLogs} [updatelogs] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async update_logs(pathid,updatelogs,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/records/logs/'+pathid+'',
        data:updatelogs,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async delete_logs(pathid,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/records/logs/'+pathid+'',
        data:{},
        params:{},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {UserModel.incrementLogs} [incrementlogs] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async increment_logs(pathid,incrementlogs,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'patch',
        url:'/records/logs/'+pathid+'',
        data:incrementlogs,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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

// class logs static method properties bind
/**
* @description list_logs url链接，包含baseURL
*/
logs.list_logs.fullPath=`${axios.defaults.baseURL}/records/logs`
/**
* @description list_logs url链接，不包含baseURL
*/
logs.list_logs.path=`/records/logs`
/**
* @description create_logs url链接，包含baseURL
*/
logs.create_logs.fullPath=`${axios.defaults.baseURL}/records/logs`
/**
* @description create_logs url链接，不包含baseURL
*/
logs.create_logs.path=`/records/logs`
/**
* @description read_logs url链接，包含baseURL
*/
logs.read_logs.fullPath=`${axios.defaults.baseURL}/records/logs/{id}`
/**
* @description read_logs url链接，不包含baseURL
*/
logs.read_logs.path=`/records/logs/{id}`
/**
* @description update_logs url链接，包含baseURL
*/
logs.update_logs.fullPath=`${axios.defaults.baseURL}/records/logs/{id}`
/**
* @description update_logs url链接，不包含baseURL
*/
logs.update_logs.path=`/records/logs/{id}`
/**
* @description delete_logs url链接，包含baseURL
*/
logs.delete_logs.fullPath=`${axios.defaults.baseURL}/records/logs/{id}`
/**
* @description delete_logs url链接，不包含baseURL
*/
logs.delete_logs.path=`/records/logs/{id}`
/**
* @description increment_logs url链接，包含baseURL
*/
logs.increment_logs.fullPath=`${axios.defaults.baseURL}/records/logs/{id}`
/**
* @description increment_logs url链接，不包含baseURL
*/
logs.increment_logs.path=`/records/logs/{id}`

export class mp {
 
  /**
  * @summary 
  * @param {Array} [filter] Filters to be applied. Each filter consists of a column, an operator and a value (comma separated). Example: id,eq,1
  * @param {String} [include] Columns you want to include in the output (comma separated). Example: posts.*,categories.name
  * @param {String} [exclude] Columns you want to exclude from the output (comma separated). Example: posts.content
  * @param {Array} [order] Column you want to sort on and the sort direction (comma separated). Example: id,desc
  * @param {String} [size] Maximum number of results (for top lists). Example: 10
  * @param {String} [page] Page number and page size (comma separated). Example: 1,10
  * @param {Array} [join] Paths (comma separated) to related entities that you want to include. Example: comments,users
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async list_mp(filter,include,exclude,order,size,page,join,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/records/mp',
        data:{},
        params:{filter,include,exclude,order,size,page,join},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {UserModel.createMp} [createmp] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async create_mp(createmp,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/records/mp',
        data:createmp,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {String} [include] Columns you want to include in the output (comma separated). Example: posts.*,categories.name
  * @param {String} [exclude] Columns you want to exclude from the output (comma separated). Example: posts.content
  * @param {Array} [join] Paths (comma separated) to related entities that you want to include. Example: comments,users
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async read_mp(pathid,include,exclude,join,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/records/mp/'+pathid+'',
        data:{},
        params:{include,exclude,join},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {UserModel.updateMp} [updatemp] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async update_mp(pathid,updatemp,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/records/mp/'+pathid+'',
        data:updatemp,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async delete_mp(pathid,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/records/mp/'+pathid+'',
        data:{},
        params:{},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {UserModel.incrementMp} [incrementmp] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async increment_mp(pathid,incrementmp,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'patch',
        url:'/records/mp/'+pathid+'',
        data:incrementmp,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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

// class mp static method properties bind
/**
* @description list_mp url链接，包含baseURL
*/
mp.list_mp.fullPath=`${axios.defaults.baseURL}/records/mp`
/**
* @description list_mp url链接，不包含baseURL
*/
mp.list_mp.path=`/records/mp`
/**
* @description create_mp url链接，包含baseURL
*/
mp.create_mp.fullPath=`${axios.defaults.baseURL}/records/mp`
/**
* @description create_mp url链接，不包含baseURL
*/
mp.create_mp.path=`/records/mp`
/**
* @description read_mp url链接，包含baseURL
*/
mp.read_mp.fullPath=`${axios.defaults.baseURL}/records/mp/{id}`
/**
* @description read_mp url链接，不包含baseURL
*/
mp.read_mp.path=`/records/mp/{id}`
/**
* @description update_mp url链接，包含baseURL
*/
mp.update_mp.fullPath=`${axios.defaults.baseURL}/records/mp/{id}`
/**
* @description update_mp url链接，不包含baseURL
*/
mp.update_mp.path=`/records/mp/{id}`
/**
* @description delete_mp url链接，包含baseURL
*/
mp.delete_mp.fullPath=`${axios.defaults.baseURL}/records/mp/{id}`
/**
* @description delete_mp url链接，不包含baseURL
*/
mp.delete_mp.path=`/records/mp/{id}`
/**
* @description increment_mp url链接，包含baseURL
*/
mp.increment_mp.fullPath=`${axios.defaults.baseURL}/records/mp/{id}`
/**
* @description increment_mp url链接，不包含baseURL
*/
mp.increment_mp.path=`/records/mp/{id}`

export class nsgame {
 
  /**
  * @summary 
  * @param {Array} [filter] Filters to be applied. Each filter consists of a column, an operator and a value (comma separated). Example: id,eq,1
  * @param {String} [include] Columns you want to include in the output (comma separated). Example: posts.*,categories.name
  * @param {String} [exclude] Columns you want to exclude from the output (comma separated). Example: posts.content
  * @param {Array} [order] Column you want to sort on and the sort direction (comma separated). Example: id,desc
  * @param {String} [size] Maximum number of results (for top lists). Example: 10
  * @param {String} [page] Page number and page size (comma separated). Example: 1,10
  * @param {Array} [join] Paths (comma separated) to related entities that you want to include. Example: comments,users
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async list_nsgame(filter,include,exclude,order,size,page,join,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/records/nsgame',
        data:{},
        params:{filter,include,exclude,order,size,page,join},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {UserModel.createNsgame} [creatensgame] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async create_nsgame(creatensgame,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/records/nsgame',
        data:creatensgame,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {String} [include] Columns you want to include in the output (comma separated). Example: posts.*,categories.name
  * @param {String} [exclude] Columns you want to exclude from the output (comma separated). Example: posts.content
  * @param {Array} [join] Paths (comma separated) to related entities that you want to include. Example: comments,users
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async read_nsgame(pathid,include,exclude,join,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/records/nsgame/'+pathid+'',
        data:{},
        params:{include,exclude,join},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {UserModel.updateNsgame} [updatensgame] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async update_nsgame(pathid,updatensgame,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/records/nsgame/'+pathid+'',
        data:updatensgame,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async delete_nsgame(pathid,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/records/nsgame/'+pathid+'',
        data:{},
        params:{},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {UserModel.incrementNsgame} [incrementnsgame] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async increment_nsgame(pathid,incrementnsgame,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'patch',
        url:'/records/nsgame/'+pathid+'',
        data:incrementnsgame,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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

// class nsgame static method properties bind
/**
* @description list_nsgame url链接，包含baseURL
*/
nsgame.list_nsgame.fullPath=`${axios.defaults.baseURL}/records/nsgame`
/**
* @description list_nsgame url链接，不包含baseURL
*/
nsgame.list_nsgame.path=`/records/nsgame`
/**
* @description create_nsgame url链接，包含baseURL
*/
nsgame.create_nsgame.fullPath=`${axios.defaults.baseURL}/records/nsgame`
/**
* @description create_nsgame url链接，不包含baseURL
*/
nsgame.create_nsgame.path=`/records/nsgame`
/**
* @description read_nsgame url链接，包含baseURL
*/
nsgame.read_nsgame.fullPath=`${axios.defaults.baseURL}/records/nsgame/{id}`
/**
* @description read_nsgame url链接，不包含baseURL
*/
nsgame.read_nsgame.path=`/records/nsgame/{id}`
/**
* @description update_nsgame url链接，包含baseURL
*/
nsgame.update_nsgame.fullPath=`${axios.defaults.baseURL}/records/nsgame/{id}`
/**
* @description update_nsgame url链接，不包含baseURL
*/
nsgame.update_nsgame.path=`/records/nsgame/{id}`
/**
* @description delete_nsgame url链接，包含baseURL
*/
nsgame.delete_nsgame.fullPath=`${axios.defaults.baseURL}/records/nsgame/{id}`
/**
* @description delete_nsgame url链接，不包含baseURL
*/
nsgame.delete_nsgame.path=`/records/nsgame/{id}`
/**
* @description increment_nsgame url链接，包含baseURL
*/
nsgame.increment_nsgame.fullPath=`${axios.defaults.baseURL}/records/nsgame/{id}`
/**
* @description increment_nsgame url链接，不包含baseURL
*/
nsgame.increment_nsgame.path=`/records/nsgame/{id}`

export class nsorder {
 
  /**
  * @summary 
  * @param {Array} [filter] Filters to be applied. Each filter consists of a column, an operator and a value (comma separated). Example: id,eq,1
  * @param {String} [include] Columns you want to include in the output (comma separated). Example: posts.*,categories.name
  * @param {String} [exclude] Columns you want to exclude from the output (comma separated). Example: posts.content
  * @param {Array} [order] Column you want to sort on and the sort direction (comma separated). Example: id,desc
  * @param {String} [size] Maximum number of results (for top lists). Example: 10
  * @param {String} [page] Page number and page size (comma separated). Example: 1,10
  * @param {Array} [join] Paths (comma separated) to related entities that you want to include. Example: comments,users
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async list_nsorder(filter,include,exclude,order,size,page,join,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/records/nsorder',
        data:{},
        params:{filter,include,exclude,order,size,page,join},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {UserModel.createNsorder} [creatensorder] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async create_nsorder(creatensorder,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/records/nsorder',
        data:creatensorder,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {String} [include] Columns you want to include in the output (comma separated). Example: posts.*,categories.name
  * @param {String} [exclude] Columns you want to exclude from the output (comma separated). Example: posts.content
  * @param {Array} [join] Paths (comma separated) to related entities that you want to include. Example: comments,users
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async read_nsorder(pathid,include,exclude,join,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/records/nsorder/'+pathid+'',
        data:{},
        params:{include,exclude,join},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {UserModel.updateNsorder} [updatensorder] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async update_nsorder(pathid,updatensorder,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/records/nsorder/'+pathid+'',
        data:updatensorder,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async delete_nsorder(pathid,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/records/nsorder/'+pathid+'',
        data:{},
        params:{},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {UserModel.incrementNsorder} [incrementnsorder] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async increment_nsorder(pathid,incrementnsorder,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'patch',
        url:'/records/nsorder/'+pathid+'',
        data:incrementnsorder,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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

// class nsorder static method properties bind
/**
* @description list_nsorder url链接，包含baseURL
*/
nsorder.list_nsorder.fullPath=`${axios.defaults.baseURL}/records/nsorder`
/**
* @description list_nsorder url链接，不包含baseURL
*/
nsorder.list_nsorder.path=`/records/nsorder`
/**
* @description create_nsorder url链接，包含baseURL
*/
nsorder.create_nsorder.fullPath=`${axios.defaults.baseURL}/records/nsorder`
/**
* @description create_nsorder url链接，不包含baseURL
*/
nsorder.create_nsorder.path=`/records/nsorder`
/**
* @description read_nsorder url链接，包含baseURL
*/
nsorder.read_nsorder.fullPath=`${axios.defaults.baseURL}/records/nsorder/{id}`
/**
* @description read_nsorder url链接，不包含baseURL
*/
nsorder.read_nsorder.path=`/records/nsorder/{id}`
/**
* @description update_nsorder url链接，包含baseURL
*/
nsorder.update_nsorder.fullPath=`${axios.defaults.baseURL}/records/nsorder/{id}`
/**
* @description update_nsorder url链接，不包含baseURL
*/
nsorder.update_nsorder.path=`/records/nsorder/{id}`
/**
* @description delete_nsorder url链接，包含baseURL
*/
nsorder.delete_nsorder.fullPath=`${axios.defaults.baseURL}/records/nsorder/{id}`
/**
* @description delete_nsorder url链接，不包含baseURL
*/
nsorder.delete_nsorder.path=`/records/nsorder/{id}`
/**
* @description increment_nsorder url链接，包含baseURL
*/
nsorder.increment_nsorder.fullPath=`${axios.defaults.baseURL}/records/nsorder/{id}`
/**
* @description increment_nsorder url链接，不包含baseURL
*/
nsorder.increment_nsorder.path=`/records/nsorder/{id}`

export class nsuser {
 
  /**
  * @summary 
  * @param {Array} [filter] Filters to be applied. Each filter consists of a column, an operator and a value (comma separated). Example: id,eq,1
  * @param {String} [include] Columns you want to include in the output (comma separated). Example: posts.*,categories.name
  * @param {String} [exclude] Columns you want to exclude from the output (comma separated). Example: posts.content
  * @param {Array} [order] Column you want to sort on and the sort direction (comma separated). Example: id,desc
  * @param {String} [size] Maximum number of results (for top lists). Example: 10
  * @param {String} [page] Page number and page size (comma separated). Example: 1,10
  * @param {Array} [join] Paths (comma separated) to related entities that you want to include. Example: comments,users
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async list_nsuser(filter,include,exclude,order,size,page,join,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/records/nsuser',
        data:{},
        params:{filter,include,exclude,order,size,page,join},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {UserModel.createNsuser} [creatensuser] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async create_nsuser(creatensuser,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/records/nsuser',
        data:creatensuser,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {String} [include] Columns you want to include in the output (comma separated). Example: posts.*,categories.name
  * @param {String} [exclude] Columns you want to exclude from the output (comma separated). Example: posts.content
  * @param {Array} [join] Paths (comma separated) to related entities that you want to include. Example: comments,users
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async read_nsuser(pathid,include,exclude,join,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/records/nsuser/'+pathid+'',
        data:{},
        params:{include,exclude,join},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {UserModel.updateNsuser} [updatensuser] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async update_nsuser(pathid,updatensuser,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/records/nsuser/'+pathid+'',
        data:updatensuser,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async delete_nsuser(pathid,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/records/nsuser/'+pathid+'',
        data:{},
        params:{},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {UserModel.incrementNsuser} [incrementnsuser] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async increment_nsuser(pathid,incrementnsuser,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'patch',
        url:'/records/nsuser/'+pathid+'',
        data:incrementnsuser,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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

// class nsuser static method properties bind
/**
* @description list_nsuser url链接，包含baseURL
*/
nsuser.list_nsuser.fullPath=`${axios.defaults.baseURL}/records/nsuser`
/**
* @description list_nsuser url链接，不包含baseURL
*/
nsuser.list_nsuser.path=`/records/nsuser`
/**
* @description create_nsuser url链接，包含baseURL
*/
nsuser.create_nsuser.fullPath=`${axios.defaults.baseURL}/records/nsuser`
/**
* @description create_nsuser url链接，不包含baseURL
*/
nsuser.create_nsuser.path=`/records/nsuser`
/**
* @description read_nsuser url链接，包含baseURL
*/
nsuser.read_nsuser.fullPath=`${axios.defaults.baseURL}/records/nsuser/{id}`
/**
* @description read_nsuser url链接，不包含baseURL
*/
nsuser.read_nsuser.path=`/records/nsuser/{id}`
/**
* @description update_nsuser url链接，包含baseURL
*/
nsuser.update_nsuser.fullPath=`${axios.defaults.baseURL}/records/nsuser/{id}`
/**
* @description update_nsuser url链接，不包含baseURL
*/
nsuser.update_nsuser.path=`/records/nsuser/{id}`
/**
* @description delete_nsuser url链接，包含baseURL
*/
nsuser.delete_nsuser.fullPath=`${axios.defaults.baseURL}/records/nsuser/{id}`
/**
* @description delete_nsuser url链接，不包含baseURL
*/
nsuser.delete_nsuser.path=`/records/nsuser/{id}`
/**
* @description increment_nsuser url链接，包含baseURL
*/
nsuser.increment_nsuser.fullPath=`${axios.defaults.baseURL}/records/nsuser/{id}`
/**
* @description increment_nsuser url链接，不包含baseURL
*/
nsuser.increment_nsuser.path=`/records/nsuser/{id}`

export class sampletemp {
 
  /**
  * @summary 
  * @param {Array} [filter] Filters to be applied. Each filter consists of a column, an operator and a value (comma separated). Example: id,eq,1
  * @param {String} [include] Columns you want to include in the output (comma separated). Example: posts.*,categories.name
  * @param {String} [exclude] Columns you want to exclude from the output (comma separated). Example: posts.content
  * @param {Array} [order] Column you want to sort on and the sort direction (comma separated). Example: id,desc
  * @param {String} [size] Maximum number of results (for top lists). Example: 10
  * @param {String} [page] Page number and page size (comma separated). Example: 1,10
  * @param {Array} [join] Paths (comma separated) to related entities that you want to include. Example: comments,users
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async list_sampletemp(filter,include,exclude,order,size,page,join,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/records/sampletemp',
        data:{},
        params:{filter,include,exclude,order,size,page,join},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {UserModel.createSampletemp} [createsampletemp] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async create_sampletemp(createsampletemp,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/records/sampletemp',
        data:createsampletemp,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {String} [include] Columns you want to include in the output (comma separated). Example: posts.*,categories.name
  * @param {String} [exclude] Columns you want to exclude from the output (comma separated). Example: posts.content
  * @param {Array} [join] Paths (comma separated) to related entities that you want to include. Example: comments,users
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async read_sampletemp(pathid,include,exclude,join,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/records/sampletemp/'+pathid+'',
        data:{},
        params:{include,exclude,join},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {UserModel.updateSampletemp} [updatesampletemp] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async update_sampletemp(pathid,updatesampletemp,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/records/sampletemp/'+pathid+'',
        data:updatesampletemp,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async delete_sampletemp(pathid,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/records/sampletemp/'+pathid+'',
        data:{},
        params:{},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {UserModel.incrementSampletemp} [incrementsampletemp] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async increment_sampletemp(pathid,incrementsampletemp,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'patch',
        url:'/records/sampletemp/'+pathid+'',
        data:incrementsampletemp,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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

// class sampletemp static method properties bind
/**
* @description list_sampletemp url链接，包含baseURL
*/
sampletemp.list_sampletemp.fullPath=`${axios.defaults.baseURL}/records/sampletemp`
/**
* @description list_sampletemp url链接，不包含baseURL
*/
sampletemp.list_sampletemp.path=`/records/sampletemp`
/**
* @description create_sampletemp url链接，包含baseURL
*/
sampletemp.create_sampletemp.fullPath=`${axios.defaults.baseURL}/records/sampletemp`
/**
* @description create_sampletemp url链接，不包含baseURL
*/
sampletemp.create_sampletemp.path=`/records/sampletemp`
/**
* @description read_sampletemp url链接，包含baseURL
*/
sampletemp.read_sampletemp.fullPath=`${axios.defaults.baseURL}/records/sampletemp/{id}`
/**
* @description read_sampletemp url链接，不包含baseURL
*/
sampletemp.read_sampletemp.path=`/records/sampletemp/{id}`
/**
* @description update_sampletemp url链接，包含baseURL
*/
sampletemp.update_sampletemp.fullPath=`${axios.defaults.baseURL}/records/sampletemp/{id}`
/**
* @description update_sampletemp url链接，不包含baseURL
*/
sampletemp.update_sampletemp.path=`/records/sampletemp/{id}`
/**
* @description delete_sampletemp url链接，包含baseURL
*/
sampletemp.delete_sampletemp.fullPath=`${axios.defaults.baseURL}/records/sampletemp/{id}`
/**
* @description delete_sampletemp url链接，不包含baseURL
*/
sampletemp.delete_sampletemp.path=`/records/sampletemp/{id}`
/**
* @description increment_sampletemp url链接，包含baseURL
*/
sampletemp.increment_sampletemp.fullPath=`${axios.defaults.baseURL}/records/sampletemp/{id}`
/**
* @description increment_sampletemp url链接，不包含baseURL
*/
sampletemp.increment_sampletemp.path=`/records/sampletemp/{id}`

export class weixinuserinfo {
 
  /**
  * @summary 
  * @param {Array} [filter] Filters to be applied. Each filter consists of a column, an operator and a value (comma separated). Example: id,eq,1
  * @param {String} [include] Columns you want to include in the output (comma separated). Example: posts.*,categories.name
  * @param {String} [exclude] Columns you want to exclude from the output (comma separated). Example: posts.content
  * @param {Array} [order] Column you want to sort on and the sort direction (comma separated). Example: id,desc
  * @param {String} [size] Maximum number of results (for top lists). Example: 10
  * @param {String} [page] Page number and page size (comma separated). Example: 1,10
  * @param {Array} [join] Paths (comma separated) to related entities that you want to include. Example: comments,users
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async list_weixinuserinfo(filter,include,exclude,order,size,page,join,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/records/weixinuserinfo',
        data:{},
        params:{filter,include,exclude,order,size,page,join},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {UserModel.createWeixinuserinfo} [createweixinuserinfo] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async create_weixinuserinfo(createweixinuserinfo,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/records/weixinuserinfo',
        data:createweixinuserinfo,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {String} [include] Columns you want to include in the output (comma separated). Example: posts.*,categories.name
  * @param {String} [exclude] Columns you want to exclude from the output (comma separated). Example: posts.content
  * @param {Array} [join] Paths (comma separated) to related entities that you want to include. Example: comments,users
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async read_weixinuserinfo(pathid,include,exclude,join,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/records/weixinuserinfo/'+pathid+'',
        data:{},
        params:{include,exclude,join},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {UserModel.updateWeixinuserinfo} [updateweixinuserinfo] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async update_weixinuserinfo(pathid,updateweixinuserinfo,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/records/weixinuserinfo/'+pathid+'',
        data:updateweixinuserinfo,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async delete_weixinuserinfo(pathid,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/records/weixinuserinfo/'+pathid+'',
        data:{},
        params:{},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {UserModel.incrementWeixinuserinfo} [incrementweixinuserinfo] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async increment_weixinuserinfo(pathid,incrementweixinuserinfo,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'patch',
        url:'/records/weixinuserinfo/'+pathid+'',
        data:incrementweixinuserinfo,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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

// class weixinuserinfo static method properties bind
/**
* @description list_weixinuserinfo url链接，包含baseURL
*/
weixinuserinfo.list_weixinuserinfo.fullPath=`${axios.defaults.baseURL}/records/weixinuserinfo`
/**
* @description list_weixinuserinfo url链接，不包含baseURL
*/
weixinuserinfo.list_weixinuserinfo.path=`/records/weixinuserinfo`
/**
* @description create_weixinuserinfo url链接，包含baseURL
*/
weixinuserinfo.create_weixinuserinfo.fullPath=`${axios.defaults.baseURL}/records/weixinuserinfo`
/**
* @description create_weixinuserinfo url链接，不包含baseURL
*/
weixinuserinfo.create_weixinuserinfo.path=`/records/weixinuserinfo`
/**
* @description read_weixinuserinfo url链接，包含baseURL
*/
weixinuserinfo.read_weixinuserinfo.fullPath=`${axios.defaults.baseURL}/records/weixinuserinfo/{id}`
/**
* @description read_weixinuserinfo url链接，不包含baseURL
*/
weixinuserinfo.read_weixinuserinfo.path=`/records/weixinuserinfo/{id}`
/**
* @description update_weixinuserinfo url链接，包含baseURL
*/
weixinuserinfo.update_weixinuserinfo.fullPath=`${axios.defaults.baseURL}/records/weixinuserinfo/{id}`
/**
* @description update_weixinuserinfo url链接，不包含baseURL
*/
weixinuserinfo.update_weixinuserinfo.path=`/records/weixinuserinfo/{id}`
/**
* @description delete_weixinuserinfo url链接，包含baseURL
*/
weixinuserinfo.delete_weixinuserinfo.fullPath=`${axios.defaults.baseURL}/records/weixinuserinfo/{id}`
/**
* @description delete_weixinuserinfo url链接，不包含baseURL
*/
weixinuserinfo.delete_weixinuserinfo.path=`/records/weixinuserinfo/{id}`
/**
* @description increment_weixinuserinfo url链接，包含baseURL
*/
weixinuserinfo.increment_weixinuserinfo.fullPath=`${axios.defaults.baseURL}/records/weixinuserinfo/{id}`
/**
* @description increment_weixinuserinfo url链接，不包含baseURL
*/
weixinuserinfo.increment_weixinuserinfo.path=`/records/weixinuserinfo/{id}`

export class wxpusherapps {
 
  /**
  * @summary 
  * @param {Array} [filter] Filters to be applied. Each filter consists of a column, an operator and a value (comma separated). Example: id,eq,1
  * @param {String} [include] Columns you want to include in the output (comma separated). Example: posts.*,categories.name
  * @param {String} [exclude] Columns you want to exclude from the output (comma separated). Example: posts.content
  * @param {Array} [order] Column you want to sort on and the sort direction (comma separated). Example: id,desc
  * @param {String} [size] Maximum number of results (for top lists). Example: 10
  * @param {String} [page] Page number and page size (comma separated). Example: 1,10
  * @param {Array} [join] Paths (comma separated) to related entities that you want to include. Example: comments,users
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async list_wxpusherapps(filter,include,exclude,order,size,page,join,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/records/wxpusherapps',
        data:{},
        params:{filter,include,exclude,order,size,page,join},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {UserModel.createWxpusherapps} [createwxpusherapps] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async create_wxpusherapps(createwxpusherapps,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/records/wxpusherapps',
        data:createwxpusherapps,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {String} [include] Columns you want to include in the output (comma separated). Example: posts.*,categories.name
  * @param {String} [exclude] Columns you want to exclude from the output (comma separated). Example: posts.content
  * @param {Array} [join] Paths (comma separated) to related entities that you want to include. Example: comments,users
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async read_wxpusherapps(pathid,include,exclude,join,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/records/wxpusherapps/'+pathid+'',
        data:{},
        params:{include,exclude,join},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {UserModel.updateWxpusherapps} [updatewxpusherapps] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async update_wxpusherapps(pathid,updatewxpusherapps,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/records/wxpusherapps/'+pathid+'',
        data:updatewxpusherapps,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async delete_wxpusherapps(pathid,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/records/wxpusherapps/'+pathid+'',
        data:{},
        params:{},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {UserModel.incrementWxpusherapps} [incrementwxpusherapps] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async increment_wxpusherapps(pathid,incrementwxpusherapps,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'patch',
        url:'/records/wxpusherapps/'+pathid+'',
        data:incrementwxpusherapps,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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

// class wxpusherapps static method properties bind
/**
* @description list_wxpusherapps url链接，包含baseURL
*/
wxpusherapps.list_wxpusherapps.fullPath=`${axios.defaults.baseURL}/records/wxpusherapps`
/**
* @description list_wxpusherapps url链接，不包含baseURL
*/
wxpusherapps.list_wxpusherapps.path=`/records/wxpusherapps`
/**
* @description create_wxpusherapps url链接，包含baseURL
*/
wxpusherapps.create_wxpusherapps.fullPath=`${axios.defaults.baseURL}/records/wxpusherapps`
/**
* @description create_wxpusherapps url链接，不包含baseURL
*/
wxpusherapps.create_wxpusherapps.path=`/records/wxpusherapps`
/**
* @description read_wxpusherapps url链接，包含baseURL
*/
wxpusherapps.read_wxpusherapps.fullPath=`${axios.defaults.baseURL}/records/wxpusherapps/{id}`
/**
* @description read_wxpusherapps url链接，不包含baseURL
*/
wxpusherapps.read_wxpusherapps.path=`/records/wxpusherapps/{id}`
/**
* @description update_wxpusherapps url链接，包含baseURL
*/
wxpusherapps.update_wxpusherapps.fullPath=`${axios.defaults.baseURL}/records/wxpusherapps/{id}`
/**
* @description update_wxpusherapps url链接，不包含baseURL
*/
wxpusherapps.update_wxpusherapps.path=`/records/wxpusherapps/{id}`
/**
* @description delete_wxpusherapps url链接，包含baseURL
*/
wxpusherapps.delete_wxpusherapps.fullPath=`${axios.defaults.baseURL}/records/wxpusherapps/{id}`
/**
* @description delete_wxpusherapps url链接，不包含baseURL
*/
wxpusherapps.delete_wxpusherapps.path=`/records/wxpusherapps/{id}`
/**
* @description increment_wxpusherapps url链接，包含baseURL
*/
wxpusherapps.increment_wxpusherapps.fullPath=`${axios.defaults.baseURL}/records/wxpusherapps/{id}`
/**
* @description increment_wxpusherapps url链接，不包含baseURL
*/
wxpusherapps.increment_wxpusherapps.path=`/records/wxpusherapps/{id}`

export class wxpusheruserinfo {
 
  /**
  * @summary 
  * @param {Array} [filter] Filters to be applied. Each filter consists of a column, an operator and a value (comma separated). Example: id,eq,1
  * @param {String} [include] Columns you want to include in the output (comma separated). Example: posts.*,categories.name
  * @param {String} [exclude] Columns you want to exclude from the output (comma separated). Example: posts.content
  * @param {Array} [order] Column you want to sort on and the sort direction (comma separated). Example: id,desc
  * @param {String} [size] Maximum number of results (for top lists). Example: 10
  * @param {String} [page] Page number and page size (comma separated). Example: 1,10
  * @param {Array} [join] Paths (comma separated) to related entities that you want to include. Example: comments,users
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async list_wxpusheruserinfo(filter,include,exclude,order,size,page,join,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/records/wxpusheruserinfo',
        data:{},
        params:{filter,include,exclude,order,size,page,join},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {UserModel.createWxpusheruserinfo} [createwxpusheruserinfo] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async create_wxpusheruserinfo(createwxpusheruserinfo,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/records/wxpusheruserinfo',
        data:createwxpusheruserinfo,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {String} [include] Columns you want to include in the output (comma separated). Example: posts.*,categories.name
  * @param {String} [exclude] Columns you want to exclude from the output (comma separated). Example: posts.content
  * @param {Array} [join] Paths (comma separated) to related entities that you want to include. Example: comments,users
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async read_wxpusheruserinfo(pathid,include,exclude,join,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/records/wxpusheruserinfo/'+pathid+'',
        data:{},
        params:{include,exclude,join},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {UserModel.updateWxpusheruserinfo} [updatewxpusheruserinfo] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async update_wxpusheruserinfo(pathid,updatewxpusheruserinfo,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/records/wxpusheruserinfo/'+pathid+'',
        data:updatewxpusheruserinfo,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async delete_wxpusheruserinfo(pathid,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/records/wxpusheruserinfo/'+pathid+'',
        data:{},
        params:{},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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
  * @param {String} [pathid] primary key value
  * @param {UserModel.incrementWxpusheruserinfo} [incrementwxpusheruserinfo] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async increment_wxpusheruserinfo(pathid,incrementwxpusheruserinfo,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'patch',
        url:'/records/wxpusheruserinfo/'+pathid+'',
        data:incrementwxpusheruserinfo,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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

// class wxpusheruserinfo static method properties bind
/**
* @description list_wxpusheruserinfo url链接，包含baseURL
*/
wxpusheruserinfo.list_wxpusheruserinfo.fullPath=`${axios.defaults.baseURL}/records/wxpusheruserinfo`
/**
* @description list_wxpusheruserinfo url链接，不包含baseURL
*/
wxpusheruserinfo.list_wxpusheruserinfo.path=`/records/wxpusheruserinfo`
/**
* @description create_wxpusheruserinfo url链接，包含baseURL
*/
wxpusheruserinfo.create_wxpusheruserinfo.fullPath=`${axios.defaults.baseURL}/records/wxpusheruserinfo`
/**
* @description create_wxpusheruserinfo url链接，不包含baseURL
*/
wxpusheruserinfo.create_wxpusheruserinfo.path=`/records/wxpusheruserinfo`
/**
* @description read_wxpusheruserinfo url链接，包含baseURL
*/
wxpusheruserinfo.read_wxpusheruserinfo.fullPath=`${axios.defaults.baseURL}/records/wxpusheruserinfo/{id}`
/**
* @description read_wxpusheruserinfo url链接，不包含baseURL
*/
wxpusheruserinfo.read_wxpusheruserinfo.path=`/records/wxpusheruserinfo/{id}`
/**
* @description update_wxpusheruserinfo url链接，包含baseURL
*/
wxpusheruserinfo.update_wxpusheruserinfo.fullPath=`${axios.defaults.baseURL}/records/wxpusheruserinfo/{id}`
/**
* @description update_wxpusheruserinfo url链接，不包含baseURL
*/
wxpusheruserinfo.update_wxpusheruserinfo.path=`/records/wxpusheruserinfo/{id}`
/**
* @description delete_wxpusheruserinfo url链接，包含baseURL
*/
wxpusheruserinfo.delete_wxpusheruserinfo.fullPath=`${axios.defaults.baseURL}/records/wxpusheruserinfo/{id}`
/**
* @description delete_wxpusheruserinfo url链接，不包含baseURL
*/
wxpusheruserinfo.delete_wxpusheruserinfo.path=`/records/wxpusheruserinfo/{id}`
/**
* @description increment_wxpusheruserinfo url链接，包含baseURL
*/
wxpusheruserinfo.increment_wxpusheruserinfo.fullPath=`${axios.defaults.baseURL}/records/wxpusheruserinfo/{id}`
/**
* @description increment_wxpusheruserinfo url链接，不包含baseURL
*/
wxpusheruserinfo.increment_wxpusheruserinfo.path=`/records/wxpusheruserinfo/{id}`

export class status {
 
  /**
  * @summary 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async ping_status(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/status/ping',
        data:{},
        params:{},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
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

// class status static method properties bind
/**
* @description ping_status url链接，包含baseURL
*/
status.ping_status.fullPath=`${axios.defaults.baseURL}/status/ping`
/**
* @description ping_status url链接，不包含baseURL
*/
status.ping_status.path=`/status/ping`
