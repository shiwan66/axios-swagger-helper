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
export class Accident {
 
  /**
  * @summary 事件数量（按行业）
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataAccidentCountDTO>}
  */
  static async countByIndustryUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/accident/count/industry',
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
  * @summary 事件数量（按等级）
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataAccidentCountDTO>}
  */
  static async countByLevelUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/accident/count/level',
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
  * @summary 事件数量（按类型）
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataAccidentCountDTO>}
  */
  static async countByTypeUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/accident/count/type',
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
  * @summary 事件案例库信息
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataAccidentBaseDTO>}
  */
  static async getAccidentBaseUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/accident/get',
        data:{},
        params:{id},
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
  * @summary 事件案例库列表
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {Number} [industryId] 所属行业id
  * @param {Number} [levelId] 事故等级id
  * @param {String} [searchContent] 检索内容
  * @param {Number} [typeId] 事故类型id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageAccidentBaseDTO>}
  */
  static async pageAccidentaseUsingGET(_limit,_page,industryId,levelId,searchContent,typeId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/accident/page',
        data:{},
        params:{_limit,_page,industryId,levelId,searchContent,typeId},
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

// class Accident static method properties bind
/**
* @description countByIndustryUsingGET url链接，包含baseURL
*/
Accident.countByIndustryUsingGET.fullPath=`${axios.defaults.baseURL}/accident/count/industry`
/**
* @description countByIndustryUsingGET url链接，不包含baseURL
*/
Accident.countByIndustryUsingGET.path=`/accident/count/industry`
/**
* @description countByLevelUsingGET url链接，包含baseURL
*/
Accident.countByLevelUsingGET.fullPath=`${axios.defaults.baseURL}/accident/count/level`
/**
* @description countByLevelUsingGET url链接，不包含baseURL
*/
Accident.countByLevelUsingGET.path=`/accident/count/level`
/**
* @description countByTypeUsingGET url链接，包含baseURL
*/
Accident.countByTypeUsingGET.fullPath=`${axios.defaults.baseURL}/accident/count/type`
/**
* @description countByTypeUsingGET url链接，不包含baseURL
*/
Accident.countByTypeUsingGET.path=`/accident/count/type`
/**
* @description getAccidentBaseUsingGET url链接，包含baseURL
*/
Accident.getAccidentBaseUsingGET.fullPath=`${axios.defaults.baseURL}/accident/get`
/**
* @description getAccidentBaseUsingGET url链接，不包含baseURL
*/
Accident.getAccidentBaseUsingGET.path=`/accident/get`
/**
* @description pageAccidentaseUsingGET url链接，包含baseURL
*/
Accident.pageAccidentaseUsingGET.fullPath=`${axios.defaults.baseURL}/accident/page`
/**
* @description pageAccidentaseUsingGET url链接，不包含baseURL
*/
Accident.pageAccidentaseUsingGET.path=`/accident/page`

export class WaterAppAlarmController {
 
  /**
  * @summary 删除核查结果
  * @param {Number} [checkDetailId] 核查详情id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async deleteCheckUsingPOST(checkDetailId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/app/waterAlarm/deleteCheck',
        data:{},
        params:{checkDetailId},
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
  * @summary 结束核查操作
  * @param {Number} [alarmId] 报警id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async finishCheckUsingPOST(alarmId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/app/waterAlarm/finishCheck',
        data:{},
        params:{alarmId},
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
  * @summary 获取核查任务详情
  * @param {Number} [taskId] 任务id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataTaskDetailsVO>}
  */
  static async getTaskDetailsUsingGET(taskId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/app/waterAlarm/getTaskDetails',
        data:{},
        params:{taskId},
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
  * @summary 获取检查任务列表
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {String} [searchContent] 检索内容
  * @param {Number} [staffId] 用户id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageAppTaskListVO>}
  */
  static async getTaskListUsingGET(_limit,_page,searchContent,staffId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/app/waterAlarm/getTaskList',
        data:{},
        params:{_limit,_page,searchContent,staffId},
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
  * @summary 提交核查结果
  * @param {UserModel.CheckDetailsVO} [CheckDetailsVO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async submitCheckUsingPOST(CheckDetailsVO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/app/waterAlarm/submitCheck',
        data:CheckDetailsVO,
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
  * @summary 编辑核查结果
  * @param {UserModel.CheckDetailsVO} [CheckDetailsVO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updateCheckUsingPOST(CheckDetailsVO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/app/waterAlarm/updateCheck',
        data:CheckDetailsVO,
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
  * @summary 上传核查结果
  * @param {Number} [checkDetailId] 核查详情id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async uploadCheckUsingPOST(checkDetailId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/app/waterAlarm/uploadCheck',
        data:{},
        params:{checkDetailId},
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

// class WaterAppAlarmController static method properties bind
/**
* @description deleteCheckUsingPOST url链接，包含baseURL
*/
WaterAppAlarmController.deleteCheckUsingPOST.fullPath=`${axios.defaults.baseURL}/app/waterAlarm/deleteCheck`
/**
* @description deleteCheckUsingPOST url链接，不包含baseURL
*/
WaterAppAlarmController.deleteCheckUsingPOST.path=`/app/waterAlarm/deleteCheck`
/**
* @description finishCheckUsingPOST url链接，包含baseURL
*/
WaterAppAlarmController.finishCheckUsingPOST.fullPath=`${axios.defaults.baseURL}/app/waterAlarm/finishCheck`
/**
* @description finishCheckUsingPOST url链接，不包含baseURL
*/
WaterAppAlarmController.finishCheckUsingPOST.path=`/app/waterAlarm/finishCheck`
/**
* @description getTaskDetailsUsingGET url链接，包含baseURL
*/
WaterAppAlarmController.getTaskDetailsUsingGET.fullPath=`${axios.defaults.baseURL}/app/waterAlarm/getTaskDetails`
/**
* @description getTaskDetailsUsingGET url链接，不包含baseURL
*/
WaterAppAlarmController.getTaskDetailsUsingGET.path=`/app/waterAlarm/getTaskDetails`
/**
* @description getTaskListUsingGET url链接，包含baseURL
*/
WaterAppAlarmController.getTaskListUsingGET.fullPath=`${axios.defaults.baseURL}/app/waterAlarm/getTaskList`
/**
* @description getTaskListUsingGET url链接，不包含baseURL
*/
WaterAppAlarmController.getTaskListUsingGET.path=`/app/waterAlarm/getTaskList`
/**
* @description submitCheckUsingPOST url链接，包含baseURL
*/
WaterAppAlarmController.submitCheckUsingPOST.fullPath=`${axios.defaults.baseURL}/app/waterAlarm/submitCheck`
/**
* @description submitCheckUsingPOST url链接，不包含baseURL
*/
WaterAppAlarmController.submitCheckUsingPOST.path=`/app/waterAlarm/submitCheck`
/**
* @description updateCheckUsingPOST url链接，包含baseURL
*/
WaterAppAlarmController.updateCheckUsingPOST.fullPath=`${axios.defaults.baseURL}/app/waterAlarm/updateCheck`
/**
* @description updateCheckUsingPOST url链接，不包含baseURL
*/
WaterAppAlarmController.updateCheckUsingPOST.path=`/app/waterAlarm/updateCheck`
/**
* @description uploadCheckUsingPOST url链接，包含baseURL
*/
WaterAppAlarmController.uploadCheckUsingPOST.fullPath=`${axios.defaults.baseURL}/app/waterAlarm/uploadCheck`
/**
* @description uploadCheckUsingPOST url链接，不包含baseURL
*/
WaterAppAlarmController.uploadCheckUsingPOST.path=`/app/waterAlarm/uploadCheck`

export class Department {
 
  /**
  * @summary 新增部门
  * @param {UserModel.DepartmentDTO} [DepartmentDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async addDepartmentUsingPOST(DepartmentDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/department/add',
        data:DepartmentDTO,
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
  * @summary 删除部门
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async deleteDepartmentUsingDELETE(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/department/delete',
        data:{},
        params:{id},
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
  * @summary 部门下拉
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListFrontSpinner>}
  */
  static async dropDepartmentUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/department/drop',
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
  * @summary 获取部门
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataDepartmentDTO>}
  */
  static async getDepartmentUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/department/get',
        data:{},
        params:{id},
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
  * @summary 部门列表
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {String} [searchContent] 检索内容
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageDepartmentDTO>}
  */
  static async pageDepartmentUsingGET(_limit,_page,searchContent,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/department/page',
        data:{},
        params:{_limit,_page,searchContent},
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
  * @summary 更新部门
  * @param {UserModel.DepartmentDTO} [DepartmentDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updateDepartmentUsingPUT(DepartmentDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/department/update',
        data:DepartmentDTO,
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

// class Department static method properties bind
/**
* @description addDepartmentUsingPOST url链接，包含baseURL
*/
Department.addDepartmentUsingPOST.fullPath=`${axios.defaults.baseURL}/department/add`
/**
* @description addDepartmentUsingPOST url链接，不包含baseURL
*/
Department.addDepartmentUsingPOST.path=`/department/add`
/**
* @description deleteDepartmentUsingDELETE url链接，包含baseURL
*/
Department.deleteDepartmentUsingDELETE.fullPath=`${axios.defaults.baseURL}/department/delete`
/**
* @description deleteDepartmentUsingDELETE url链接，不包含baseURL
*/
Department.deleteDepartmentUsingDELETE.path=`/department/delete`
/**
* @description dropDepartmentUsingGET url链接，包含baseURL
*/
Department.dropDepartmentUsingGET.fullPath=`${axios.defaults.baseURL}/department/drop`
/**
* @description dropDepartmentUsingGET url链接，不包含baseURL
*/
Department.dropDepartmentUsingGET.path=`/department/drop`
/**
* @description getDepartmentUsingGET url链接，包含baseURL
*/
Department.getDepartmentUsingGET.fullPath=`${axios.defaults.baseURL}/department/get`
/**
* @description getDepartmentUsingGET url链接，不包含baseURL
*/
Department.getDepartmentUsingGET.path=`/department/get`
/**
* @description pageDepartmentUsingGET url链接，包含baseURL
*/
Department.pageDepartmentUsingGET.fullPath=`${axios.defaults.baseURL}/department/page`
/**
* @description pageDepartmentUsingGET url链接，不包含baseURL
*/
Department.pageDepartmentUsingGET.path=`/department/page`
/**
* @description updateDepartmentUsingPUT url链接，包含baseURL
*/
Department.updateDepartmentUsingPUT.fullPath=`${axios.defaults.baseURL}/department/update`
/**
* @description updateDepartmentUsingPUT url链接，不包含baseURL
*/
Department.updateDepartmentUsingPUT.path=`/department/update`

export class Dict {
 
  /**
  * @summary 应急预案详情
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataTdictEmergPlan>}
  */
  static async getEmergPlanUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/dict/emerg/get',
        data:{},
        params:{id},
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
  * @summary 应急预案列表（分页）
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {String} [searchContent] 检索内容
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageTdictEmergPlan>}
  */
  static async pageEmergPlanUsingGET(_limit,_page,searchContent,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/dict/emerg/page',
        data:{},
        params:{_limit,_page,searchContent},
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
  * @summary 删除字典信息
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async deleteDictInfoUsingDELETE(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/dict/info/delete',
        data:{},
        params:{id},
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
  * @summary 获取字典信息下拉
  * @param {String} [typeIdList] 字典id列表
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListListFrontSpinner>}
  */
  static async listDictInfoDropUsingGET(typeIdList,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/dict/info/drop',
        data:{},
        params:{typeIdList},
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
  * @summary 获取字典信息（分页）
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {String} [searchContent] 检索内容
  * @param {Number} [typeId] typeId
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageDictInfoDTO>}
  */
  static async pageDictInfoUsingGET(_limit,_page,searchContent,typeId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/dict/info/page',
        data:{},
        params:{_limit,_page,searchContent,typeId},
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
  * @summary 保存字典信息
  * @param {UserModel.DictInfoDTO} [DictInfoDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async saveDictInfoUsingPOST(DictInfoDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/dict/info/save',
        data:DictInfoDTO,
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
  * @summary 获取字典类型下拉
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListFrontSpinner>}
  */
  static async listDictTypeDropUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/dict/type/drop',
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

// class Dict static method properties bind
/**
* @description getEmergPlanUsingGET url链接，包含baseURL
*/
Dict.getEmergPlanUsingGET.fullPath=`${axios.defaults.baseURL}/dict/emerg/get`
/**
* @description getEmergPlanUsingGET url链接，不包含baseURL
*/
Dict.getEmergPlanUsingGET.path=`/dict/emerg/get`
/**
* @description pageEmergPlanUsingGET url链接，包含baseURL
*/
Dict.pageEmergPlanUsingGET.fullPath=`${axios.defaults.baseURL}/dict/emerg/page`
/**
* @description pageEmergPlanUsingGET url链接，不包含baseURL
*/
Dict.pageEmergPlanUsingGET.path=`/dict/emerg/page`
/**
* @description deleteDictInfoUsingDELETE url链接，包含baseURL
*/
Dict.deleteDictInfoUsingDELETE.fullPath=`${axios.defaults.baseURL}/dict/info/delete`
/**
* @description deleteDictInfoUsingDELETE url链接，不包含baseURL
*/
Dict.deleteDictInfoUsingDELETE.path=`/dict/info/delete`
/**
* @description listDictInfoDropUsingGET url链接，包含baseURL
*/
Dict.listDictInfoDropUsingGET.fullPath=`${axios.defaults.baseURL}/dict/info/drop`
/**
* @description listDictInfoDropUsingGET url链接，不包含baseURL
*/
Dict.listDictInfoDropUsingGET.path=`/dict/info/drop`
/**
* @description pageDictInfoUsingGET url链接，包含baseURL
*/
Dict.pageDictInfoUsingGET.fullPath=`${axios.defaults.baseURL}/dict/info/page`
/**
* @description pageDictInfoUsingGET url链接，不包含baseURL
*/
Dict.pageDictInfoUsingGET.path=`/dict/info/page`
/**
* @description saveDictInfoUsingPOST url链接，包含baseURL
*/
Dict.saveDictInfoUsingPOST.fullPath=`${axios.defaults.baseURL}/dict/info/save`
/**
* @description saveDictInfoUsingPOST url链接，不包含baseURL
*/
Dict.saveDictInfoUsingPOST.path=`/dict/info/save`
/**
* @description listDictTypeDropUsingGET url链接，包含baseURL
*/
Dict.listDictTypeDropUsingGET.fullPath=`${axios.defaults.baseURL}/dict/type/drop`
/**
* @description listDictTypeDropUsingGET url链接，不包含baseURL
*/
Dict.listDictTypeDropUsingGET.path=`/dict/type/drop`

export class Enterprise {
 
  /**
  * @summary 提交企业信息
  * @param {Number} [enterpriseId] enterpriseId
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async commitEnterpriseUsingGET(enterpriseId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/commit',
        data:{},
        params:{enterpriseId},
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
  * @summary 获取完成情况
  * @param {Boolean} [commitFlag] commitFlag
  * @param {Number} [enterpriseId] enterpriseId
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataEnterpriseCompletionDTO>}
  */
  static async getTmgmtEnterpriseCompletionUsingGET(commitFlag,enterpriseId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/completion',
        data:{},
        params:{commitFlag,enterpriseId},
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
  * @summary 删除企业
  * @param {Number} [enterpriseId] enterpriseId
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async deleteEnterpriseUsingDELETE(enterpriseId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/enterprise/delete',
        data:{},
        params:{enterpriseId},
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
  * @summary 应急设备名称
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListTreeDictDTO>}
  */
  static async listEnterpriseDictFacilityUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/dict/facility',
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
  * @summary 行业类别列表
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListTreeDictDTO>}
  */
  static async listEnterpriseDictIndustryUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/dict/industry',
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
  * @summary 应急物资名称
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListTreeDictDTO>}
  */
  static async listEnterpriseDictSupplyUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/dict/supply',
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
  * @summary 企业信息下拉
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListFrontSpinner>}
  */
  static async dropEnterpriseUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/drop',
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
  * @summary 重点监管企业信息下拉
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListFrontSpinner>}
  */
  static async dropEmphasisEnterpriseUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/dropEmphasis',
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
  * @summary 获取企业信息
  * @param {Boolean} [commitFlag] commitFlag
  * @param {Number} [enterpriseId] enterpriseId
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataEnterpriseInfoDTO>}
  */
  static async getEnterpriseInfoUsingGET(commitFlag,enterpriseId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/info/get',
        data:{},
        params:{commitFlag,enterpriseId},
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
  * @summary 更新企业信息
  * @param {UserModel.EnterpriseInfoDTO} [EnterpriseInfoDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updateEnterpriseInfoUsingPUT(EnterpriseInfoDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/enterprise/info/update',
        data:EnterpriseInfoDTO,
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
  * @summary 企业信息列表
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {Number} [industryId] 行业类别id
  * @param {Number} [riskTypeId] 风险源类别id
  * @param {String} [searchContent] 检索内容
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageEnterprisePageDTO>}
  */
  static async pageEnterpriseUsingGET(_limit,_page,industryId,riskTypeId,searchContent,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/page',
        data:{},
        params:{_limit,_page,industryId,riskTypeId,searchContent},
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
  * @summary 获取企业平面图
  * @param {Boolean} [commitFlag] commitFlag
  * @param {Number} [enterpriseId] enterpriseId
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataEnterprisePlaneDTO>}
  */
  static async getEnterprisePlaneUsingGET(commitFlag,enterpriseId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/plane/get',
        data:{},
        params:{commitFlag,enterpriseId},
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
  * @summary 更新企业平面图
  * @param {UserModel.EnterprisePlaneDTO} [EnterprisePlaneDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updateEnterprisePlaneUsingPUT(EnterprisePlaneDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/enterprise/plane/update',
        data:EnterprisePlaneDTO,
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
  * @summary 回滚企业信息
  * @param {Number} [enterpriseId] enterpriseId
  * @param {Number} [pageIndex] 标签页序号（1-10）
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async rollbackEnterpriseUsingGET(enterpriseId,pageIndex,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/rollback',
        data:{},
        params:{enterpriseId,pageIndex},
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
  * @summary 添加企业
  * @param {UserModel.EnterpriseDTO} [EnterpriseDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async saveEnterpriseUsingPOST(EnterpriseDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/enterprise/save',
        data:EnterpriseDTO,
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
  * @summary 企业信息/提交状态
  * @param {Number} [enterpriseId] enterpriseId
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataEnterpriseDTO>}
  */
  static async getEnterpriseUsingGET(enterpriseId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/state/get',
        data:{},
        params:{enterpriseId},
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
  * @summary 更新企业
  * @param {UserModel.EnterpriseDTO} [EnterpriseDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updateEnterpriseUsingPUT(EnterpriseDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/enterprise/update',
        data:EnterpriseDTO,
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

// class Enterprise static method properties bind
/**
* @description commitEnterpriseUsingGET url链接，包含baseURL
*/
Enterprise.commitEnterpriseUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/commit`
/**
* @description commitEnterpriseUsingGET url链接，不包含baseURL
*/
Enterprise.commitEnterpriseUsingGET.path=`/enterprise/commit`
/**
* @description getTmgmtEnterpriseCompletionUsingGET url链接，包含baseURL
*/
Enterprise.getTmgmtEnterpriseCompletionUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/completion`
/**
* @description getTmgmtEnterpriseCompletionUsingGET url链接，不包含baseURL
*/
Enterprise.getTmgmtEnterpriseCompletionUsingGET.path=`/enterprise/completion`
/**
* @description deleteEnterpriseUsingDELETE url链接，包含baseURL
*/
Enterprise.deleteEnterpriseUsingDELETE.fullPath=`${axios.defaults.baseURL}/enterprise/delete`
/**
* @description deleteEnterpriseUsingDELETE url链接，不包含baseURL
*/
Enterprise.deleteEnterpriseUsingDELETE.path=`/enterprise/delete`
/**
* @description listEnterpriseDictFacilityUsingGET url链接，包含baseURL
*/
Enterprise.listEnterpriseDictFacilityUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/dict/facility`
/**
* @description listEnterpriseDictFacilityUsingGET url链接，不包含baseURL
*/
Enterprise.listEnterpriseDictFacilityUsingGET.path=`/enterprise/dict/facility`
/**
* @description listEnterpriseDictIndustryUsingGET url链接，包含baseURL
*/
Enterprise.listEnterpriseDictIndustryUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/dict/industry`
/**
* @description listEnterpriseDictIndustryUsingGET url链接，不包含baseURL
*/
Enterprise.listEnterpriseDictIndustryUsingGET.path=`/enterprise/dict/industry`
/**
* @description listEnterpriseDictSupplyUsingGET url链接，包含baseURL
*/
Enterprise.listEnterpriseDictSupplyUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/dict/supply`
/**
* @description listEnterpriseDictSupplyUsingGET url链接，不包含baseURL
*/
Enterprise.listEnterpriseDictSupplyUsingGET.path=`/enterprise/dict/supply`
/**
* @description dropEnterpriseUsingGET url链接，包含baseURL
*/
Enterprise.dropEnterpriseUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/drop`
/**
* @description dropEnterpriseUsingGET url链接，不包含baseURL
*/
Enterprise.dropEnterpriseUsingGET.path=`/enterprise/drop`
/**
* @description dropEmphasisEnterpriseUsingGET url链接，包含baseURL
*/
Enterprise.dropEmphasisEnterpriseUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/dropEmphasis`
/**
* @description dropEmphasisEnterpriseUsingGET url链接，不包含baseURL
*/
Enterprise.dropEmphasisEnterpriseUsingGET.path=`/enterprise/dropEmphasis`
/**
* @description getEnterpriseInfoUsingGET url链接，包含baseURL
*/
Enterprise.getEnterpriseInfoUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/info/get`
/**
* @description getEnterpriseInfoUsingGET url链接，不包含baseURL
*/
Enterprise.getEnterpriseInfoUsingGET.path=`/enterprise/info/get`
/**
* @description updateEnterpriseInfoUsingPUT url链接，包含baseURL
*/
Enterprise.updateEnterpriseInfoUsingPUT.fullPath=`${axios.defaults.baseURL}/enterprise/info/update`
/**
* @description updateEnterpriseInfoUsingPUT url链接，不包含baseURL
*/
Enterprise.updateEnterpriseInfoUsingPUT.path=`/enterprise/info/update`
/**
* @description pageEnterpriseUsingGET url链接，包含baseURL
*/
Enterprise.pageEnterpriseUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/page`
/**
* @description pageEnterpriseUsingGET url链接，不包含baseURL
*/
Enterprise.pageEnterpriseUsingGET.path=`/enterprise/page`
/**
* @description getEnterprisePlaneUsingGET url链接，包含baseURL
*/
Enterprise.getEnterprisePlaneUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/plane/get`
/**
* @description getEnterprisePlaneUsingGET url链接，不包含baseURL
*/
Enterprise.getEnterprisePlaneUsingGET.path=`/enterprise/plane/get`
/**
* @description updateEnterprisePlaneUsingPUT url链接，包含baseURL
*/
Enterprise.updateEnterprisePlaneUsingPUT.fullPath=`${axios.defaults.baseURL}/enterprise/plane/update`
/**
* @description updateEnterprisePlaneUsingPUT url链接，不包含baseURL
*/
Enterprise.updateEnterprisePlaneUsingPUT.path=`/enterprise/plane/update`
/**
* @description rollbackEnterpriseUsingGET url链接，包含baseURL
*/
Enterprise.rollbackEnterpriseUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/rollback`
/**
* @description rollbackEnterpriseUsingGET url链接，不包含baseURL
*/
Enterprise.rollbackEnterpriseUsingGET.path=`/enterprise/rollback`
/**
* @description saveEnterpriseUsingPOST url链接，包含baseURL
*/
Enterprise.saveEnterpriseUsingPOST.fullPath=`${axios.defaults.baseURL}/enterprise/save`
/**
* @description saveEnterpriseUsingPOST url链接，不包含baseURL
*/
Enterprise.saveEnterpriseUsingPOST.path=`/enterprise/save`
/**
* @description getEnterpriseUsingGET url链接，包含baseURL
*/
Enterprise.getEnterpriseUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/state/get`
/**
* @description getEnterpriseUsingGET url链接，不包含baseURL
*/
Enterprise.getEnterpriseUsingGET.path=`/enterprise/state/get`
/**
* @description updateEnterpriseUsingPUT url链接，包含baseURL
*/
Enterprise.updateEnterpriseUsingPUT.fullPath=`${axios.defaults.baseURL}/enterprise/update`
/**
* @description updateEnterpriseUsingPUT url链接，不包含baseURL
*/
Enterprise.updateEnterpriseUsingPUT.path=`/enterprise/update`

export class EnterpriseLicense {
 
  /**
  * @summary 排污许可证（启用）
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async activeEnterpriseSewageLicenseUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/license/sewage/active',
        data:{},
        params:{id},
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
  * @summary 排污许可证
  * @param {UserModel.EnterpriseLicenseSewageDTO} [EnterpriseLicenseSewageDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async addEnterpriseSewageLicenseUsingPOST(EnterpriseLicenseSewageDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/enterprise/license/sewage/add',
        data:EnterpriseLicenseSewageDTO,
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
  * @summary 排污许可证（复制）
  * @param {Number} [sourceId] sourceId
  * @param {Number} [targetId] targetId
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async copyEnterpriseSewageLicenseUsingGET(sourceId,targetId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/license/sewage/copy',
        data:{},
        params:{sourceId,targetId},
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
  * @summary 排污许可证
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async deleteEnterpriseSewageLicenseUsingDELETE(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/enterprise/license/sewage/delete',
        data:{},
        params:{id},
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
  * @summary 排污许可证（下拉）
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListFrontSpinner>}
  */
  static async dropEnterpriseSewageLicenseUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/license/sewage/drop',
        data:{},
        params:{id},
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
  * @summary 排污许可证
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataEnterpriseLicenseSewageDTO>}
  */
  static async getEnterpriseSewageLicenseUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/license/sewage/get',
        data:{},
        params:{id},
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
  * @summary 排污许可证（分页）
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {Boolean} [commitFlag] commitFlag
  * @param {Number} [enterpriseId] 企业id
  * @param {String} [searchContent] 检索内容
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageEnterpriseLicenseSewageDTO>}
  */
  static async pageEnterpriseSewageLicenseUsingGET(_limit,_page,commitFlag,enterpriseId,searchContent,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/license/sewage/page',
        data:{},
        params:{_limit,_page,commitFlag,enterpriseId,searchContent},
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
  * @summary 许可证排口（分页）
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {Number} [enterpriseId] 企业id
  * @param {Number} [licenseId] licenseId
  * @param {Number} [pageType] 废气：1，废水：2，雨水：3
  * @param {String} [searchContent] 检索内容
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageEnterpriseStationDTO>}
  */
  static async pageEnterpriseSewageStationUsingGET(_limit,_page,enterpriseId,licenseId,pageType,searchContent,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/license/sewage/station/page',
        data:{},
        params:{_limit,_page,enterpriseId,licenseId,pageType,searchContent},
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
  * @summary 排污许可证
  * @param {UserModel.EnterpriseLicenseSewageDTO} [EnterpriseLicenseSewageDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updateEnterpriseSewageLicenseUsingPUT(EnterpriseLicenseSewageDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/enterprise/license/sewage/update',
        data:EnterpriseLicenseSewageDTO,
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
  * @summary 危废许可证（启用）
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async activeEnterpriseWasteLicenseUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/license/waste/active',
        data:{},
        params:{id},
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
  * @summary 危废许可证
  * @param {UserModel.EnterpriseLicenseWasteDTO} [EnterpriseLicenseWasteDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async addEnterpriseWasteLicenseUsingPOST(EnterpriseLicenseWasteDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/enterprise/license/waste/add',
        data:EnterpriseLicenseWasteDTO,
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
  * @summary 危废许可证
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async deleteEnterpriseWasteLicenseUsingDELETE(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/enterprise/license/waste/delete',
        data:{},
        params:{id},
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
  * @summary 危废许可证
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataEnterpriseLicenseWasteDTO>}
  */
  static async getEnterpriseWasteLicenseUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/license/waste/get',
        data:{},
        params:{id},
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
  * @summary 危废许可证（分页）
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {Boolean} [commitFlag] commitFlag
  * @param {Number} [enterpriseId] 企业id
  * @param {String} [searchContent] 检索内容
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageEnterpriseLicenseWasteDTO>}
  */
  static async pageEnterpriseWasteLicenseUsingGET(_limit,_page,commitFlag,enterpriseId,searchContent,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/license/waste/page',
        data:{},
        params:{_limit,_page,commitFlag,enterpriseId,searchContent},
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
  * @summary 危废转移单
  * @param {UserModel.EnterpriseWasteTransferDTO} [EnterpriseWasteTransferDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async addEnterpriseWasteTransferUsingPOST(EnterpriseWasteTransferDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/enterprise/license/waste/transfer/add',
        data:EnterpriseWasteTransferDTO,
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
  * @summary 危废转移单
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async deleteEnterpriseWasteTransferUsingDELETE(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/enterprise/license/waste/transfer/delete',
        data:{},
        params:{id},
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
  * @summary 危废转移单
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataEnterpriseWasteTransferDTO>}
  */
  static async getEnterpriseWasteTransferUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/license/waste/transfer/get',
        data:{},
        params:{id},
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
  * @summary 危废转移单（分页）
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {Number} [enterpriseId] 企业id
  * @param {Number} [licenseId] licenseId
  * @param {String} [searchContent] 检索内容
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageEnterpriseWasteTransferDTO>}
  */
  static async pageEnterpriseWasteTransferUsingGET(_limit,_page,enterpriseId,licenseId,searchContent,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/license/waste/transfer/page',
        data:{},
        params:{_limit,_page,enterpriseId,licenseId,searchContent},
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
  * @summary 危废转移单
  * @param {UserModel.EnterpriseWasteTransferDTO} [EnterpriseWasteTransferDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updateEnterpriseWasteTransferUsingPUT(EnterpriseWasteTransferDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/enterprise/license/waste/transfer/update',
        data:EnterpriseWasteTransferDTO,
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
  * @summary 危废许可证
  * @param {UserModel.EnterpriseLicenseWasteDTO} [EnterpriseLicenseWasteDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updateEnterpriseWasteLicenseUsingPUT(EnterpriseLicenseWasteDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/enterprise/license/waste/update',
        data:EnterpriseLicenseWasteDTO,
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

// class EnterpriseLicense static method properties bind
/**
* @description activeEnterpriseSewageLicenseUsingGET url链接，包含baseURL
*/
EnterpriseLicense.activeEnterpriseSewageLicenseUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/license/sewage/active`
/**
* @description activeEnterpriseSewageLicenseUsingGET url链接，不包含baseURL
*/
EnterpriseLicense.activeEnterpriseSewageLicenseUsingGET.path=`/enterprise/license/sewage/active`
/**
* @description addEnterpriseSewageLicenseUsingPOST url链接，包含baseURL
*/
EnterpriseLicense.addEnterpriseSewageLicenseUsingPOST.fullPath=`${axios.defaults.baseURL}/enterprise/license/sewage/add`
/**
* @description addEnterpriseSewageLicenseUsingPOST url链接，不包含baseURL
*/
EnterpriseLicense.addEnterpriseSewageLicenseUsingPOST.path=`/enterprise/license/sewage/add`
/**
* @description copyEnterpriseSewageLicenseUsingGET url链接，包含baseURL
*/
EnterpriseLicense.copyEnterpriseSewageLicenseUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/license/sewage/copy`
/**
* @description copyEnterpriseSewageLicenseUsingGET url链接，不包含baseURL
*/
EnterpriseLicense.copyEnterpriseSewageLicenseUsingGET.path=`/enterprise/license/sewage/copy`
/**
* @description deleteEnterpriseSewageLicenseUsingDELETE url链接，包含baseURL
*/
EnterpriseLicense.deleteEnterpriseSewageLicenseUsingDELETE.fullPath=`${axios.defaults.baseURL}/enterprise/license/sewage/delete`
/**
* @description deleteEnterpriseSewageLicenseUsingDELETE url链接，不包含baseURL
*/
EnterpriseLicense.deleteEnterpriseSewageLicenseUsingDELETE.path=`/enterprise/license/sewage/delete`
/**
* @description dropEnterpriseSewageLicenseUsingGET url链接，包含baseURL
*/
EnterpriseLicense.dropEnterpriseSewageLicenseUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/license/sewage/drop`
/**
* @description dropEnterpriseSewageLicenseUsingGET url链接，不包含baseURL
*/
EnterpriseLicense.dropEnterpriseSewageLicenseUsingGET.path=`/enterprise/license/sewage/drop`
/**
* @description getEnterpriseSewageLicenseUsingGET url链接，包含baseURL
*/
EnterpriseLicense.getEnterpriseSewageLicenseUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/license/sewage/get`
/**
* @description getEnterpriseSewageLicenseUsingGET url链接，不包含baseURL
*/
EnterpriseLicense.getEnterpriseSewageLicenseUsingGET.path=`/enterprise/license/sewage/get`
/**
* @description pageEnterpriseSewageLicenseUsingGET url链接，包含baseURL
*/
EnterpriseLicense.pageEnterpriseSewageLicenseUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/license/sewage/page`
/**
* @description pageEnterpriseSewageLicenseUsingGET url链接，不包含baseURL
*/
EnterpriseLicense.pageEnterpriseSewageLicenseUsingGET.path=`/enterprise/license/sewage/page`
/**
* @description pageEnterpriseSewageStationUsingGET url链接，包含baseURL
*/
EnterpriseLicense.pageEnterpriseSewageStationUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/license/sewage/station/page`
/**
* @description pageEnterpriseSewageStationUsingGET url链接，不包含baseURL
*/
EnterpriseLicense.pageEnterpriseSewageStationUsingGET.path=`/enterprise/license/sewage/station/page`
/**
* @description updateEnterpriseSewageLicenseUsingPUT url链接，包含baseURL
*/
EnterpriseLicense.updateEnterpriseSewageLicenseUsingPUT.fullPath=`${axios.defaults.baseURL}/enterprise/license/sewage/update`
/**
* @description updateEnterpriseSewageLicenseUsingPUT url链接，不包含baseURL
*/
EnterpriseLicense.updateEnterpriseSewageLicenseUsingPUT.path=`/enterprise/license/sewage/update`
/**
* @description activeEnterpriseWasteLicenseUsingGET url链接，包含baseURL
*/
EnterpriseLicense.activeEnterpriseWasteLicenseUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/license/waste/active`
/**
* @description activeEnterpriseWasteLicenseUsingGET url链接，不包含baseURL
*/
EnterpriseLicense.activeEnterpriseWasteLicenseUsingGET.path=`/enterprise/license/waste/active`
/**
* @description addEnterpriseWasteLicenseUsingPOST url链接，包含baseURL
*/
EnterpriseLicense.addEnterpriseWasteLicenseUsingPOST.fullPath=`${axios.defaults.baseURL}/enterprise/license/waste/add`
/**
* @description addEnterpriseWasteLicenseUsingPOST url链接，不包含baseURL
*/
EnterpriseLicense.addEnterpriseWasteLicenseUsingPOST.path=`/enterprise/license/waste/add`
/**
* @description deleteEnterpriseWasteLicenseUsingDELETE url链接，包含baseURL
*/
EnterpriseLicense.deleteEnterpriseWasteLicenseUsingDELETE.fullPath=`${axios.defaults.baseURL}/enterprise/license/waste/delete`
/**
* @description deleteEnterpriseWasteLicenseUsingDELETE url链接，不包含baseURL
*/
EnterpriseLicense.deleteEnterpriseWasteLicenseUsingDELETE.path=`/enterprise/license/waste/delete`
/**
* @description getEnterpriseWasteLicenseUsingGET url链接，包含baseURL
*/
EnterpriseLicense.getEnterpriseWasteLicenseUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/license/waste/get`
/**
* @description getEnterpriseWasteLicenseUsingGET url链接，不包含baseURL
*/
EnterpriseLicense.getEnterpriseWasteLicenseUsingGET.path=`/enterprise/license/waste/get`
/**
* @description pageEnterpriseWasteLicenseUsingGET url链接，包含baseURL
*/
EnterpriseLicense.pageEnterpriseWasteLicenseUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/license/waste/page`
/**
* @description pageEnterpriseWasteLicenseUsingGET url链接，不包含baseURL
*/
EnterpriseLicense.pageEnterpriseWasteLicenseUsingGET.path=`/enterprise/license/waste/page`
/**
* @description addEnterpriseWasteTransferUsingPOST url链接，包含baseURL
*/
EnterpriseLicense.addEnterpriseWasteTransferUsingPOST.fullPath=`${axios.defaults.baseURL}/enterprise/license/waste/transfer/add`
/**
* @description addEnterpriseWasteTransferUsingPOST url链接，不包含baseURL
*/
EnterpriseLicense.addEnterpriseWasteTransferUsingPOST.path=`/enterprise/license/waste/transfer/add`
/**
* @description deleteEnterpriseWasteTransferUsingDELETE url链接，包含baseURL
*/
EnterpriseLicense.deleteEnterpriseWasteTransferUsingDELETE.fullPath=`${axios.defaults.baseURL}/enterprise/license/waste/transfer/delete`
/**
* @description deleteEnterpriseWasteTransferUsingDELETE url链接，不包含baseURL
*/
EnterpriseLicense.deleteEnterpriseWasteTransferUsingDELETE.path=`/enterprise/license/waste/transfer/delete`
/**
* @description getEnterpriseWasteTransferUsingGET url链接，包含baseURL
*/
EnterpriseLicense.getEnterpriseWasteTransferUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/license/waste/transfer/get`
/**
* @description getEnterpriseWasteTransferUsingGET url链接，不包含baseURL
*/
EnterpriseLicense.getEnterpriseWasteTransferUsingGET.path=`/enterprise/license/waste/transfer/get`
/**
* @description pageEnterpriseWasteTransferUsingGET url链接，包含baseURL
*/
EnterpriseLicense.pageEnterpriseWasteTransferUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/license/waste/transfer/page`
/**
* @description pageEnterpriseWasteTransferUsingGET url链接，不包含baseURL
*/
EnterpriseLicense.pageEnterpriseWasteTransferUsingGET.path=`/enterprise/license/waste/transfer/page`
/**
* @description updateEnterpriseWasteTransferUsingPUT url链接，包含baseURL
*/
EnterpriseLicense.updateEnterpriseWasteTransferUsingPUT.fullPath=`${axios.defaults.baseURL}/enterprise/license/waste/transfer/update`
/**
* @description updateEnterpriseWasteTransferUsingPUT url链接，不包含baseURL
*/
EnterpriseLicense.updateEnterpriseWasteTransferUsingPUT.path=`/enterprise/license/waste/transfer/update`
/**
* @description updateEnterpriseWasteLicenseUsingPUT url链接，包含baseURL
*/
EnterpriseLicense.updateEnterpriseWasteLicenseUsingPUT.fullPath=`${axios.defaults.baseURL}/enterprise/license/waste/update`
/**
* @description updateEnterpriseWasteLicenseUsingPUT url链接，不包含baseURL
*/
EnterpriseLicense.updateEnterpriseWasteLicenseUsingPUT.path=`/enterprise/license/waste/update`

export class EnterpriseProduce {
 
  /**
  * @summary 基本信息
  * @param {Boolean} [commitFlag] commitFlag
  * @param {Number} [enterpriseId] enterpriseId
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataEnterpriseBaseDTO>}
  */
  static async getEnterpriseBaseUsingGET(commitFlag,enterpriseId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/produce/base/get',
        data:{},
        params:{commitFlag,enterpriseId},
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
  * @summary 基本信息
  * @param {UserModel.EnterpriseBaseDTO} [EnterpriseBaseDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updateEnterpriseBaseUsingPUT(EnterpriseBaseDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/enterprise/produce/base/update',
        data:EnterpriseBaseDTO,
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
  * @summary 副产品
  * @param {UserModel.EnterpriseByproDTO} [EnterpriseByproDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async addEnterpriseRiskByproUsingPOST(EnterpriseByproDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/enterprise/produce/bypro/add',
        data:EnterpriseByproDTO,
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
  * @summary 副产品
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async deleteEnterpriseByproUsingDELETE(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/enterprise/produce/bypro/delete',
        data:{},
        params:{id},
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
  * @summary 副产品
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataEnterpriseByproDTO>}
  */
  static async getEnterpriseByproUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/produce/bypro/get',
        data:{},
        params:{id},
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
  * @summary 副产品
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {Boolean} [commitFlag] commitFlag
  * @param {Number} [enterpriseId] 企业id
  * @param {String} [searchContent] 检索内容
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageEnterpriseByproDTO>}
  */
  static async pageEnterpriseByproUsingGET(_limit,_page,commitFlag,enterpriseId,searchContent,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/produce/bypro/page',
        data:{},
        params:{_limit,_page,commitFlag,enterpriseId,searchContent},
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
  * @summary 副产品
  * @param {UserModel.EnterpriseByproDTO} [EnterpriseByproDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updateEnterpriseByproUsingPUT(EnterpriseByproDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/enterprise/produce/bypro/update',
        data:EnterpriseByproDTO,
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
  * @summary 生产能耗
  * @param {UserModel.EnterpriseEnergyDTO} [EnterpriseEnergyDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async addEnterpriseEnergyUsingPOST(EnterpriseEnergyDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/enterprise/produce/energy/add',
        data:EnterpriseEnergyDTO,
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
  * @summary 生产能耗
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async deleteEnterpriseEnergyUsingDELETE(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/enterprise/produce/energy/delete',
        data:{},
        params:{id},
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
  * @summary 生产能耗
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataEnterpriseEnergyDTO>}
  */
  static async getEnterpriseEnergyUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/produce/energy/get',
        data:{},
        params:{id},
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
  * @summary 生产能耗
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {Boolean} [commitFlag] commitFlag
  * @param {Number} [enterpriseId] 企业id
  * @param {String} [searchContent] 检索内容
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageEnterpriseEnergyDTO>}
  */
  static async pageEnterpriseEnergyUsingGET(_limit,_page,commitFlag,enterpriseId,searchContent,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/produce/energy/page',
        data:{},
        params:{_limit,_page,commitFlag,enterpriseId,searchContent},
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
  * @summary 生产能耗
  * @param {UserModel.EnterpriseEnergyDTO} [EnterpriseEnergyDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updateEnterpriseEnergyUsingPUT(EnterpriseEnergyDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/enterprise/produce/energy/update',
        data:EnterpriseEnergyDTO,
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
  * @summary 治理-废气
  * @param {UserModel.EnterpriseGovernGasDTO} [EnterpriseGovernGasDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async addEnterpriseGovernGasUsingPOST(EnterpriseGovernGasDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/enterprise/produce/govern/gas/add',
        data:EnterpriseGovernGasDTO,
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
  * @summary 治理-废气
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async deleteEnterpriseGovernGasUsingDELETE(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/enterprise/produce/govern/gas/delete',
        data:{},
        params:{id},
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
  * @summary 治理-废气
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataEnterpriseGovernGasDTO>}
  */
  static async getEnterpriseGovernGasUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/produce/govern/gas/get',
        data:{},
        params:{id},
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
  * @summary 治理-废气
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {Boolean} [commitFlag] commitFlag
  * @param {Number} [enterpriseId] 企业id
  * @param {String} [searchContent] 检索内容
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageEnterpriseGovernGasDTO>}
  */
  static async pageEnterpriseGovernGasUsingGET(_limit,_page,commitFlag,enterpriseId,searchContent,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/produce/govern/gas/page',
        data:{},
        params:{_limit,_page,commitFlag,enterpriseId,searchContent},
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
  * @summary 治理-废气
  * @param {UserModel.EnterpriseGovernGasDTO} [EnterpriseGovernGasDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updateEnterpriseGovernGasUsingPUT(EnterpriseGovernGasDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/enterprise/produce/govern/gas/update',
        data:EnterpriseGovernGasDTO,
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
  * @summary 治理-废水
  * @param {UserModel.EnterpriseGovernWaterDTO} [EnterpriseGovernWaterDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async addEnterpriseGovernWaterUsingPOST(EnterpriseGovernWaterDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/enterprise/produce/govern/water/add',
        data:EnterpriseGovernWaterDTO,
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
  * @summary 治理-废水
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async deleteEnterpriseGovernWaterUsingDELETE(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/enterprise/produce/govern/water/delete',
        data:{},
        params:{id},
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
  * @summary 治理-废水
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataEnterpriseGovernWaterDTO>}
  */
  static async getEnterpriseGovernWaterUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/produce/govern/water/get',
        data:{},
        params:{id},
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
  * @summary 治理-废水
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {Boolean} [commitFlag] commitFlag
  * @param {Number} [enterpriseId] 企业id
  * @param {String} [searchContent] 检索内容
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageEnterpriseGovernWaterDTO>}
  */
  static async pageEnterpriseGovernWaterUsingGET(_limit,_page,commitFlag,enterpriseId,searchContent,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/produce/govern/water/page',
        data:{},
        params:{_limit,_page,commitFlag,enterpriseId,searchContent},
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
  * @summary 治理-废水
  * @param {UserModel.EnterpriseGovernWaterDTO} [EnterpriseGovernWaterDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updateEnterpriseGovernWaterUsingPUT(EnterpriseGovernWaterDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/enterprise/produce/govern/water/update',
        data:EnterpriseGovernWaterDTO,
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
  * @summary 主产品
  * @param {UserModel.EnterpriseMainproDTO} [EnterpriseMainproDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async addEnterpriseMainproUsingPOST(EnterpriseMainproDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/enterprise/produce/mainpro/add',
        data:EnterpriseMainproDTO,
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
  * @summary 主产品
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async deleteEnterpriseMainproUsingDELETE(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/enterprise/produce/mainpro/delete',
        data:{},
        params:{id},
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
  * @summary 主产品
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataEnterpriseMainproDTO>}
  */
  static async getEnterpriseMainproUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/produce/mainpro/get',
        data:{},
        params:{id},
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
  * @summary 主产品
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {Boolean} [commitFlag] commitFlag
  * @param {Number} [enterpriseId] 企业id
  * @param {String} [searchContent] 检索内容
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageEnterpriseMainproDTO>}
  */
  static async pageEnterpriseMainproUsingGET(_limit,_page,commitFlag,enterpriseId,searchContent,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/produce/mainpro/page',
        data:{},
        params:{_limit,_page,commitFlag,enterpriseId,searchContent},
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
  * @summary 主产品
  * @param {UserModel.EnterpriseMainproDTO} [EnterpriseMainproDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updateEnterpriseMainproUsingPUT(EnterpriseMainproDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/enterprise/produce/mainpro/update',
        data:EnterpriseMainproDTO,
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
  * @summary 原辅料
  * @param {UserModel.EnterpriseMaterialRawDTO} [EnterpriseMaterialRawDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async addEnterpriseMaterialRawUsingPOST(EnterpriseMaterialRawDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/enterprise/produce/material/raw/add',
        data:EnterpriseMaterialRawDTO,
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
  * @summary 原辅料
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async deleteEnterpriseMaterialRawUsingDELETE(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/enterprise/produce/material/raw/delete',
        data:{},
        params:{id},
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
  * @summary 原辅料
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataEnterpriseMaterialRawDTO>}
  */
  static async getEnterpriseMaterialRawUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/produce/material/raw/get',
        data:{},
        params:{id},
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
  * @summary 原辅料
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {Boolean} [commitFlag] commitFlag
  * @param {Number} [enterpriseId] 企业id
  * @param {String} [searchContent] 检索内容
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageEnterpriseMaterialRawDTO>}
  */
  static async pageEnterpriseMaterialRawUsingGET(_limit,_page,commitFlag,enterpriseId,searchContent,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/produce/material/raw/page',
        data:{},
        params:{_limit,_page,commitFlag,enterpriseId,searchContent},
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
  * @summary 原辅料
  * @param {UserModel.EnterpriseMaterialRawDTO} [EnterpriseMaterialRawDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updateEnterpriseMaterialRawUsingPUT(EnterpriseMaterialRawDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/enterprise/produce/material/raw/update',
        data:EnterpriseMaterialRawDTO,
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
  * @summary 原辅料（消耗）
  * @param {UserModel.EnterpriseMaterialUseDTO} [EnterpriseMaterialUseDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async addEnterpriseMaterialUseUsingPOST(EnterpriseMaterialUseDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/enterprise/produce/material/use/add',
        data:EnterpriseMaterialUseDTO,
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
  * @summary 原辅料（消耗）
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async deleteEnterpriseMaterialUseUsingDELETE(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/enterprise/produce/material/use/delete',
        data:{},
        params:{id},
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
  * @summary 原辅料（消耗）
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataEnterpriseMaterialUseDTO>}
  */
  static async getEnterpriseMaterialUseUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/produce/material/use/get',
        data:{},
        params:{id},
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
  * @summary 原辅料（消耗）
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {Boolean} [commitFlag] commitFlag
  * @param {Number} [enterpriseId] 企业id
  * @param {String} [searchContent] 检索内容
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageEnterpriseMaterialUseDTO>}
  */
  static async pageEnterpriseMaterialUseUsingGET(_limit,_page,commitFlag,enterpriseId,searchContent,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/produce/material/use/page',
        data:{},
        params:{_limit,_page,commitFlag,enterpriseId,searchContent},
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
  * @summary 原辅料（消耗）
  * @param {UserModel.EnterpriseMaterialUseDTO} [EnterpriseMaterialUseDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updateEnterpriseMaterialUseUsingPUT(EnterpriseMaterialUseDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/enterprise/produce/material/use/update',
        data:EnterpriseMaterialUseDTO,
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
  * @summary 生产量
  * @param {UserModel.EnterpriseProductDTO} [EnterpriseProductDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async addEnterpriseProductUsingPOST(EnterpriseProductDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/enterprise/produce/product/add',
        data:EnterpriseProductDTO,
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
  * @summary 生产量
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async deleteEnterpriseProductUsingDELETE(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/enterprise/produce/product/delete',
        data:{},
        params:{id},
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
  * @summary 生产量
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataEnterpriseProductDTO>}
  */
  static async getEnterpriseProductUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/produce/product/get',
        data:{},
        params:{id},
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
  * @summary 生产量
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {Boolean} [commitFlag] commitFlag
  * @param {Number} [enterpriseId] 企业id
  * @param {String} [searchContent] 检索内容
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageEnterpriseProductDTO>}
  */
  static async pageEnterpriseProductUsingGET(_limit,_page,commitFlag,enterpriseId,searchContent,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/produce/product/page',
        data:{},
        params:{_limit,_page,commitFlag,enterpriseId,searchContent},
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
  * @summary 生产量
  * @param {UserModel.EnterpriseProductDTO} [EnterpriseProductDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updateEnterpriseProductUsingPUT(EnterpriseProductDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/enterprise/produce/product/update',
        data:EnterpriseProductDTO,
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
  * @summary 生产用水
  * @param {UserModel.EnterpriseWaterDTO} [EnterpriseWaterDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async addEnterpriseWaterUsingPOST(EnterpriseWaterDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/enterprise/produce/water/add',
        data:EnterpriseWaterDTO,
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
  * @summary 生产用水
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async deleteEnterpriseWaterUsingDELETE(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/enterprise/produce/water/delete',
        data:{},
        params:{id},
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
  * @summary 生产用水
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataEnterpriseWaterDTO>}
  */
  static async getEnterpriseWaterUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/produce/water/get',
        data:{},
        params:{id},
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
  * @summary 生产用水
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {Boolean} [commitFlag] commitFlag
  * @param {Number} [enterpriseId] 企业id
  * @param {String} [searchContent] 检索内容
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageEnterpriseWaterDTO>}
  */
  static async pageEnterpriseWaterUsingGET(_limit,_page,commitFlag,enterpriseId,searchContent,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/produce/water/page',
        data:{},
        params:{_limit,_page,commitFlag,enterpriseId,searchContent},
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
  * @summary 生产用水
  * @param {UserModel.EnterpriseWaterDTO} [EnterpriseWaterDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updateEnterpriseWaterUsingPUT(EnterpriseWaterDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/enterprise/produce/water/update',
        data:EnterpriseWaterDTO,
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

// class EnterpriseProduce static method properties bind
/**
* @description getEnterpriseBaseUsingGET url链接，包含baseURL
*/
EnterpriseProduce.getEnterpriseBaseUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/produce/base/get`
/**
* @description getEnterpriseBaseUsingGET url链接，不包含baseURL
*/
EnterpriseProduce.getEnterpriseBaseUsingGET.path=`/enterprise/produce/base/get`
/**
* @description updateEnterpriseBaseUsingPUT url链接，包含baseURL
*/
EnterpriseProduce.updateEnterpriseBaseUsingPUT.fullPath=`${axios.defaults.baseURL}/enterprise/produce/base/update`
/**
* @description updateEnterpriseBaseUsingPUT url链接，不包含baseURL
*/
EnterpriseProduce.updateEnterpriseBaseUsingPUT.path=`/enterprise/produce/base/update`
/**
* @description addEnterpriseRiskByproUsingPOST url链接，包含baseURL
*/
EnterpriseProduce.addEnterpriseRiskByproUsingPOST.fullPath=`${axios.defaults.baseURL}/enterprise/produce/bypro/add`
/**
* @description addEnterpriseRiskByproUsingPOST url链接，不包含baseURL
*/
EnterpriseProduce.addEnterpriseRiskByproUsingPOST.path=`/enterprise/produce/bypro/add`
/**
* @description deleteEnterpriseByproUsingDELETE url链接，包含baseURL
*/
EnterpriseProduce.deleteEnterpriseByproUsingDELETE.fullPath=`${axios.defaults.baseURL}/enterprise/produce/bypro/delete`
/**
* @description deleteEnterpriseByproUsingDELETE url链接，不包含baseURL
*/
EnterpriseProduce.deleteEnterpriseByproUsingDELETE.path=`/enterprise/produce/bypro/delete`
/**
* @description getEnterpriseByproUsingGET url链接，包含baseURL
*/
EnterpriseProduce.getEnterpriseByproUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/produce/bypro/get`
/**
* @description getEnterpriseByproUsingGET url链接，不包含baseURL
*/
EnterpriseProduce.getEnterpriseByproUsingGET.path=`/enterprise/produce/bypro/get`
/**
* @description pageEnterpriseByproUsingGET url链接，包含baseURL
*/
EnterpriseProduce.pageEnterpriseByproUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/produce/bypro/page`
/**
* @description pageEnterpriseByproUsingGET url链接，不包含baseURL
*/
EnterpriseProduce.pageEnterpriseByproUsingGET.path=`/enterprise/produce/bypro/page`
/**
* @description updateEnterpriseByproUsingPUT url链接，包含baseURL
*/
EnterpriseProduce.updateEnterpriseByproUsingPUT.fullPath=`${axios.defaults.baseURL}/enterprise/produce/bypro/update`
/**
* @description updateEnterpriseByproUsingPUT url链接，不包含baseURL
*/
EnterpriseProduce.updateEnterpriseByproUsingPUT.path=`/enterprise/produce/bypro/update`
/**
* @description addEnterpriseEnergyUsingPOST url链接，包含baseURL
*/
EnterpriseProduce.addEnterpriseEnergyUsingPOST.fullPath=`${axios.defaults.baseURL}/enterprise/produce/energy/add`
/**
* @description addEnterpriseEnergyUsingPOST url链接，不包含baseURL
*/
EnterpriseProduce.addEnterpriseEnergyUsingPOST.path=`/enterprise/produce/energy/add`
/**
* @description deleteEnterpriseEnergyUsingDELETE url链接，包含baseURL
*/
EnterpriseProduce.deleteEnterpriseEnergyUsingDELETE.fullPath=`${axios.defaults.baseURL}/enterprise/produce/energy/delete`
/**
* @description deleteEnterpriseEnergyUsingDELETE url链接，不包含baseURL
*/
EnterpriseProduce.deleteEnterpriseEnergyUsingDELETE.path=`/enterprise/produce/energy/delete`
/**
* @description getEnterpriseEnergyUsingGET url链接，包含baseURL
*/
EnterpriseProduce.getEnterpriseEnergyUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/produce/energy/get`
/**
* @description getEnterpriseEnergyUsingGET url链接，不包含baseURL
*/
EnterpriseProduce.getEnterpriseEnergyUsingGET.path=`/enterprise/produce/energy/get`
/**
* @description pageEnterpriseEnergyUsingGET url链接，包含baseURL
*/
EnterpriseProduce.pageEnterpriseEnergyUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/produce/energy/page`
/**
* @description pageEnterpriseEnergyUsingGET url链接，不包含baseURL
*/
EnterpriseProduce.pageEnterpriseEnergyUsingGET.path=`/enterprise/produce/energy/page`
/**
* @description updateEnterpriseEnergyUsingPUT url链接，包含baseURL
*/
EnterpriseProduce.updateEnterpriseEnergyUsingPUT.fullPath=`${axios.defaults.baseURL}/enterprise/produce/energy/update`
/**
* @description updateEnterpriseEnergyUsingPUT url链接，不包含baseURL
*/
EnterpriseProduce.updateEnterpriseEnergyUsingPUT.path=`/enterprise/produce/energy/update`
/**
* @description addEnterpriseGovernGasUsingPOST url链接，包含baseURL
*/
EnterpriseProduce.addEnterpriseGovernGasUsingPOST.fullPath=`${axios.defaults.baseURL}/enterprise/produce/govern/gas/add`
/**
* @description addEnterpriseGovernGasUsingPOST url链接，不包含baseURL
*/
EnterpriseProduce.addEnterpriseGovernGasUsingPOST.path=`/enterprise/produce/govern/gas/add`
/**
* @description deleteEnterpriseGovernGasUsingDELETE url链接，包含baseURL
*/
EnterpriseProduce.deleteEnterpriseGovernGasUsingDELETE.fullPath=`${axios.defaults.baseURL}/enterprise/produce/govern/gas/delete`
/**
* @description deleteEnterpriseGovernGasUsingDELETE url链接，不包含baseURL
*/
EnterpriseProduce.deleteEnterpriseGovernGasUsingDELETE.path=`/enterprise/produce/govern/gas/delete`
/**
* @description getEnterpriseGovernGasUsingGET url链接，包含baseURL
*/
EnterpriseProduce.getEnterpriseGovernGasUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/produce/govern/gas/get`
/**
* @description getEnterpriseGovernGasUsingGET url链接，不包含baseURL
*/
EnterpriseProduce.getEnterpriseGovernGasUsingGET.path=`/enterprise/produce/govern/gas/get`
/**
* @description pageEnterpriseGovernGasUsingGET url链接，包含baseURL
*/
EnterpriseProduce.pageEnterpriseGovernGasUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/produce/govern/gas/page`
/**
* @description pageEnterpriseGovernGasUsingGET url链接，不包含baseURL
*/
EnterpriseProduce.pageEnterpriseGovernGasUsingGET.path=`/enterprise/produce/govern/gas/page`
/**
* @description updateEnterpriseGovernGasUsingPUT url链接，包含baseURL
*/
EnterpriseProduce.updateEnterpriseGovernGasUsingPUT.fullPath=`${axios.defaults.baseURL}/enterprise/produce/govern/gas/update`
/**
* @description updateEnterpriseGovernGasUsingPUT url链接，不包含baseURL
*/
EnterpriseProduce.updateEnterpriseGovernGasUsingPUT.path=`/enterprise/produce/govern/gas/update`
/**
* @description addEnterpriseGovernWaterUsingPOST url链接，包含baseURL
*/
EnterpriseProduce.addEnterpriseGovernWaterUsingPOST.fullPath=`${axios.defaults.baseURL}/enterprise/produce/govern/water/add`
/**
* @description addEnterpriseGovernWaterUsingPOST url链接，不包含baseURL
*/
EnterpriseProduce.addEnterpriseGovernWaterUsingPOST.path=`/enterprise/produce/govern/water/add`
/**
* @description deleteEnterpriseGovernWaterUsingDELETE url链接，包含baseURL
*/
EnterpriseProduce.deleteEnterpriseGovernWaterUsingDELETE.fullPath=`${axios.defaults.baseURL}/enterprise/produce/govern/water/delete`
/**
* @description deleteEnterpriseGovernWaterUsingDELETE url链接，不包含baseURL
*/
EnterpriseProduce.deleteEnterpriseGovernWaterUsingDELETE.path=`/enterprise/produce/govern/water/delete`
/**
* @description getEnterpriseGovernWaterUsingGET url链接，包含baseURL
*/
EnterpriseProduce.getEnterpriseGovernWaterUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/produce/govern/water/get`
/**
* @description getEnterpriseGovernWaterUsingGET url链接，不包含baseURL
*/
EnterpriseProduce.getEnterpriseGovernWaterUsingGET.path=`/enterprise/produce/govern/water/get`
/**
* @description pageEnterpriseGovernWaterUsingGET url链接，包含baseURL
*/
EnterpriseProduce.pageEnterpriseGovernWaterUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/produce/govern/water/page`
/**
* @description pageEnterpriseGovernWaterUsingGET url链接，不包含baseURL
*/
EnterpriseProduce.pageEnterpriseGovernWaterUsingGET.path=`/enterprise/produce/govern/water/page`
/**
* @description updateEnterpriseGovernWaterUsingPUT url链接，包含baseURL
*/
EnterpriseProduce.updateEnterpriseGovernWaterUsingPUT.fullPath=`${axios.defaults.baseURL}/enterprise/produce/govern/water/update`
/**
* @description updateEnterpriseGovernWaterUsingPUT url链接，不包含baseURL
*/
EnterpriseProduce.updateEnterpriseGovernWaterUsingPUT.path=`/enterprise/produce/govern/water/update`
/**
* @description addEnterpriseMainproUsingPOST url链接，包含baseURL
*/
EnterpriseProduce.addEnterpriseMainproUsingPOST.fullPath=`${axios.defaults.baseURL}/enterprise/produce/mainpro/add`
/**
* @description addEnterpriseMainproUsingPOST url链接，不包含baseURL
*/
EnterpriseProduce.addEnterpriseMainproUsingPOST.path=`/enterprise/produce/mainpro/add`
/**
* @description deleteEnterpriseMainproUsingDELETE url链接，包含baseURL
*/
EnterpriseProduce.deleteEnterpriseMainproUsingDELETE.fullPath=`${axios.defaults.baseURL}/enterprise/produce/mainpro/delete`
/**
* @description deleteEnterpriseMainproUsingDELETE url链接，不包含baseURL
*/
EnterpriseProduce.deleteEnterpriseMainproUsingDELETE.path=`/enterprise/produce/mainpro/delete`
/**
* @description getEnterpriseMainproUsingGET url链接，包含baseURL
*/
EnterpriseProduce.getEnterpriseMainproUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/produce/mainpro/get`
/**
* @description getEnterpriseMainproUsingGET url链接，不包含baseURL
*/
EnterpriseProduce.getEnterpriseMainproUsingGET.path=`/enterprise/produce/mainpro/get`
/**
* @description pageEnterpriseMainproUsingGET url链接，包含baseURL
*/
EnterpriseProduce.pageEnterpriseMainproUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/produce/mainpro/page`
/**
* @description pageEnterpriseMainproUsingGET url链接，不包含baseURL
*/
EnterpriseProduce.pageEnterpriseMainproUsingGET.path=`/enterprise/produce/mainpro/page`
/**
* @description updateEnterpriseMainproUsingPUT url链接，包含baseURL
*/
EnterpriseProduce.updateEnterpriseMainproUsingPUT.fullPath=`${axios.defaults.baseURL}/enterprise/produce/mainpro/update`
/**
* @description updateEnterpriseMainproUsingPUT url链接，不包含baseURL
*/
EnterpriseProduce.updateEnterpriseMainproUsingPUT.path=`/enterprise/produce/mainpro/update`
/**
* @description addEnterpriseMaterialRawUsingPOST url链接，包含baseURL
*/
EnterpriseProduce.addEnterpriseMaterialRawUsingPOST.fullPath=`${axios.defaults.baseURL}/enterprise/produce/material/raw/add`
/**
* @description addEnterpriseMaterialRawUsingPOST url链接，不包含baseURL
*/
EnterpriseProduce.addEnterpriseMaterialRawUsingPOST.path=`/enterprise/produce/material/raw/add`
/**
* @description deleteEnterpriseMaterialRawUsingDELETE url链接，包含baseURL
*/
EnterpriseProduce.deleteEnterpriseMaterialRawUsingDELETE.fullPath=`${axios.defaults.baseURL}/enterprise/produce/material/raw/delete`
/**
* @description deleteEnterpriseMaterialRawUsingDELETE url链接，不包含baseURL
*/
EnterpriseProduce.deleteEnterpriseMaterialRawUsingDELETE.path=`/enterprise/produce/material/raw/delete`
/**
* @description getEnterpriseMaterialRawUsingGET url链接，包含baseURL
*/
EnterpriseProduce.getEnterpriseMaterialRawUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/produce/material/raw/get`
/**
* @description getEnterpriseMaterialRawUsingGET url链接，不包含baseURL
*/
EnterpriseProduce.getEnterpriseMaterialRawUsingGET.path=`/enterprise/produce/material/raw/get`
/**
* @description pageEnterpriseMaterialRawUsingGET url链接，包含baseURL
*/
EnterpriseProduce.pageEnterpriseMaterialRawUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/produce/material/raw/page`
/**
* @description pageEnterpriseMaterialRawUsingGET url链接，不包含baseURL
*/
EnterpriseProduce.pageEnterpriseMaterialRawUsingGET.path=`/enterprise/produce/material/raw/page`
/**
* @description updateEnterpriseMaterialRawUsingPUT url链接，包含baseURL
*/
EnterpriseProduce.updateEnterpriseMaterialRawUsingPUT.fullPath=`${axios.defaults.baseURL}/enterprise/produce/material/raw/update`
/**
* @description updateEnterpriseMaterialRawUsingPUT url链接，不包含baseURL
*/
EnterpriseProduce.updateEnterpriseMaterialRawUsingPUT.path=`/enterprise/produce/material/raw/update`
/**
* @description addEnterpriseMaterialUseUsingPOST url链接，包含baseURL
*/
EnterpriseProduce.addEnterpriseMaterialUseUsingPOST.fullPath=`${axios.defaults.baseURL}/enterprise/produce/material/use/add`
/**
* @description addEnterpriseMaterialUseUsingPOST url链接，不包含baseURL
*/
EnterpriseProduce.addEnterpriseMaterialUseUsingPOST.path=`/enterprise/produce/material/use/add`
/**
* @description deleteEnterpriseMaterialUseUsingDELETE url链接，包含baseURL
*/
EnterpriseProduce.deleteEnterpriseMaterialUseUsingDELETE.fullPath=`${axios.defaults.baseURL}/enterprise/produce/material/use/delete`
/**
* @description deleteEnterpriseMaterialUseUsingDELETE url链接，不包含baseURL
*/
EnterpriseProduce.deleteEnterpriseMaterialUseUsingDELETE.path=`/enterprise/produce/material/use/delete`
/**
* @description getEnterpriseMaterialUseUsingGET url链接，包含baseURL
*/
EnterpriseProduce.getEnterpriseMaterialUseUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/produce/material/use/get`
/**
* @description getEnterpriseMaterialUseUsingGET url链接，不包含baseURL
*/
EnterpriseProduce.getEnterpriseMaterialUseUsingGET.path=`/enterprise/produce/material/use/get`
/**
* @description pageEnterpriseMaterialUseUsingGET url链接，包含baseURL
*/
EnterpriseProduce.pageEnterpriseMaterialUseUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/produce/material/use/page`
/**
* @description pageEnterpriseMaterialUseUsingGET url链接，不包含baseURL
*/
EnterpriseProduce.pageEnterpriseMaterialUseUsingGET.path=`/enterprise/produce/material/use/page`
/**
* @description updateEnterpriseMaterialUseUsingPUT url链接，包含baseURL
*/
EnterpriseProduce.updateEnterpriseMaterialUseUsingPUT.fullPath=`${axios.defaults.baseURL}/enterprise/produce/material/use/update`
/**
* @description updateEnterpriseMaterialUseUsingPUT url链接，不包含baseURL
*/
EnterpriseProduce.updateEnterpriseMaterialUseUsingPUT.path=`/enterprise/produce/material/use/update`
/**
* @description addEnterpriseProductUsingPOST url链接，包含baseURL
*/
EnterpriseProduce.addEnterpriseProductUsingPOST.fullPath=`${axios.defaults.baseURL}/enterprise/produce/product/add`
/**
* @description addEnterpriseProductUsingPOST url链接，不包含baseURL
*/
EnterpriseProduce.addEnterpriseProductUsingPOST.path=`/enterprise/produce/product/add`
/**
* @description deleteEnterpriseProductUsingDELETE url链接，包含baseURL
*/
EnterpriseProduce.deleteEnterpriseProductUsingDELETE.fullPath=`${axios.defaults.baseURL}/enterprise/produce/product/delete`
/**
* @description deleteEnterpriseProductUsingDELETE url链接，不包含baseURL
*/
EnterpriseProduce.deleteEnterpriseProductUsingDELETE.path=`/enterprise/produce/product/delete`
/**
* @description getEnterpriseProductUsingGET url链接，包含baseURL
*/
EnterpriseProduce.getEnterpriseProductUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/produce/product/get`
/**
* @description getEnterpriseProductUsingGET url链接，不包含baseURL
*/
EnterpriseProduce.getEnterpriseProductUsingGET.path=`/enterprise/produce/product/get`
/**
* @description pageEnterpriseProductUsingGET url链接，包含baseURL
*/
EnterpriseProduce.pageEnterpriseProductUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/produce/product/page`
/**
* @description pageEnterpriseProductUsingGET url链接，不包含baseURL
*/
EnterpriseProduce.pageEnterpriseProductUsingGET.path=`/enterprise/produce/product/page`
/**
* @description updateEnterpriseProductUsingPUT url链接，包含baseURL
*/
EnterpriseProduce.updateEnterpriseProductUsingPUT.fullPath=`${axios.defaults.baseURL}/enterprise/produce/product/update`
/**
* @description updateEnterpriseProductUsingPUT url链接，不包含baseURL
*/
EnterpriseProduce.updateEnterpriseProductUsingPUT.path=`/enterprise/produce/product/update`
/**
* @description addEnterpriseWaterUsingPOST url链接，包含baseURL
*/
EnterpriseProduce.addEnterpriseWaterUsingPOST.fullPath=`${axios.defaults.baseURL}/enterprise/produce/water/add`
/**
* @description addEnterpriseWaterUsingPOST url链接，不包含baseURL
*/
EnterpriseProduce.addEnterpriseWaterUsingPOST.path=`/enterprise/produce/water/add`
/**
* @description deleteEnterpriseWaterUsingDELETE url链接，包含baseURL
*/
EnterpriseProduce.deleteEnterpriseWaterUsingDELETE.fullPath=`${axios.defaults.baseURL}/enterprise/produce/water/delete`
/**
* @description deleteEnterpriseWaterUsingDELETE url链接，不包含baseURL
*/
EnterpriseProduce.deleteEnterpriseWaterUsingDELETE.path=`/enterprise/produce/water/delete`
/**
* @description getEnterpriseWaterUsingGET url链接，包含baseURL
*/
EnterpriseProduce.getEnterpriseWaterUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/produce/water/get`
/**
* @description getEnterpriseWaterUsingGET url链接，不包含baseURL
*/
EnterpriseProduce.getEnterpriseWaterUsingGET.path=`/enterprise/produce/water/get`
/**
* @description pageEnterpriseWaterUsingGET url链接，包含baseURL
*/
EnterpriseProduce.pageEnterpriseWaterUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/produce/water/page`
/**
* @description pageEnterpriseWaterUsingGET url链接，不包含baseURL
*/
EnterpriseProduce.pageEnterpriseWaterUsingGET.path=`/enterprise/produce/water/page`
/**
* @description updateEnterpriseWaterUsingPUT url链接，包含baseURL
*/
EnterpriseProduce.updateEnterpriseWaterUsingPUT.fullPath=`${axios.defaults.baseURL}/enterprise/produce/water/update`
/**
* @description updateEnterpriseWaterUsingPUT url链接，不包含baseURL
*/
EnterpriseProduce.updateEnterpriseWaterUsingPUT.path=`/enterprise/produce/water/update`

export class EnterpriseRisk {
 
  /**
  * @summary 基本信息
  * @param {Boolean} [commitFlag] commitFlag
  * @param {Number} [enterpriseId] enterpriseId
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataEnterpriseRiskBaseDTO>}
  */
  static async getEnterpriseRiskBaseUsingGET(commitFlag,enterpriseId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/risk/base/get',
        data:{},
        params:{commitFlag,enterpriseId},
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
  * @summary 基本信息
  * @param {UserModel.EnterpriseRiskBaseDTO} [EnterpriseRiskBaseDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updateEnterpriseRiskBaseUsingPUT(EnterpriseRiskBaseDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/enterprise/risk/base/update',
        data:EnterpriseRiskBaseDTO,
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
  * @summary 应急专家
  * @param {UserModel.EnterpriseRiskExpertDTO} [EnterpriseRiskExpertDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async addEnterpriseRiskExpertUsingPOST(EnterpriseRiskExpertDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/enterprise/risk/expert/add',
        data:EnterpriseRiskExpertDTO,
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
  * @summary 应急专家
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async deleteEnterpriseRiskExpertUsingDELETE(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/enterprise/risk/expert/delete',
        data:{},
        params:{id},
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
  * @summary 应急专家
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {Boolean} [commitFlag] commitFlag
  * @param {Number} [enterpriseId] 企业id
  * @param {String} [searchContent] 检索内容
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageEnterpriseRiskExpertDTO>}
  */
  static async pageEnterpriseRiskExpertUsingGET(_limit,_page,commitFlag,enterpriseId,searchContent,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/risk/expert/page',
        data:{},
        params:{_limit,_page,commitFlag,enterpriseId,searchContent},
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
  * @summary 应急设备
  * @param {UserModel.EnterpriseRiskFacilityDTO} [EnterpriseRiskFacilityDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async addEnterpriseRiskFacilityUsingPOST(EnterpriseRiskFacilityDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/enterprise/risk/facility/add',
        data:EnterpriseRiskFacilityDTO,
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
  * @summary 应急设备
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async deleteEnterpriseRiskFacilityUsingDELETE(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/enterprise/risk/facility/delete',
        data:{},
        params:{id},
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
  * @summary 应急设备
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataEnterpriseRiskFacilityDTO>}
  */
  static async getEnterpriseRiskFacilityUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/risk/facility/get',
        data:{},
        params:{id},
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
  * @summary 应急设备
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {Boolean} [commitFlag] commitFlag
  * @param {Number} [enterpriseId] 企业id
  * @param {String} [searchContent] 检索内容
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageEnterpriseRiskFacilityDTO>}
  */
  static async pageEnterpriseRiskFacilityUsingGET(_limit,_page,commitFlag,enterpriseId,searchContent,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/risk/facility/page',
        data:{},
        params:{_limit,_page,commitFlag,enterpriseId,searchContent},
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
  * @summary 应急设备
  * @param {UserModel.EnterpriseRiskFacilityDTO} [EnterpriseRiskFacilityDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updateEnterpriseRiskFacilityUsingPUT(EnterpriseRiskFacilityDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/enterprise/risk/facility/update',
        data:EnterpriseRiskFacilityDTO,
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
  * @summary 危险物质详情
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataRiskMaterialDTO>}
  */
  static async getDictRiskMaterialInfoUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/risk/material/get',
        data:{},
        params:{id},
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
  * @summary 危险物质列表
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {String} [searchContent] 检索内容
  * @param {Number} [typeId] 类型id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageRiskMaterialDTO>}
  */
  static async pageDictRiskMaterialInfoUsingGET(_limit,_page,searchContent,typeId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/risk/material/page',
        data:{},
        params:{_limit,_page,searchContent,typeId},
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
  * @summary 危险物质类型
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListFrontSpinner>}
  */
  static async listDictRiskMaterialTypeUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/risk/material/type',
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
  * @summary 应急管理人员
  * @param {UserModel.EnterpriseRiskPersonDTO} [EnterpriseRiskPersonDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async addEnterpriseRiskPersonUsingPOST(EnterpriseRiskPersonDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/enterprise/risk/person/add',
        data:EnterpriseRiskPersonDTO,
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
  * @summary 应急管理人员
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async deleteEnterpriseRiskPersonUsingDELETE(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/enterprise/risk/person/delete',
        data:{},
        params:{id},
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
  * @summary 应急管理人员
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataEnterpriseRiskPersonDTO>}
  */
  static async getEnterpriseRiskPersonUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/risk/person/get',
        data:{},
        params:{id},
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
  * @summary 应急管理人员
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {Boolean} [commitFlag] commitFlag
  * @param {Number} [enterpriseId] 企业id
  * @param {String} [searchContent] 检索内容
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageEnterpriseRiskPersonDTO>}
  */
  static async pageEnterpriseRiskPersonUsingGET(_limit,_page,commitFlag,enterpriseId,searchContent,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/risk/person/page',
        data:{},
        params:{_limit,_page,commitFlag,enterpriseId,searchContent},
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
  * @summary 应急管理人员
  * @param {UserModel.EnterpriseRiskPersonDTO} [EnterpriseRiskPersonDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updateEnterpriseRiskPersonUsingPUT(EnterpriseRiskPersonDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/enterprise/risk/person/update',
        data:EnterpriseRiskPersonDTO,
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
  * @summary 应急场所
  * @param {UserModel.EnterpriseRiskPlaceDTO} [EnterpriseRiskPlaceDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async addEnterpriseRiskPlaceUsingPOST(EnterpriseRiskPlaceDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/enterprise/risk/place/add',
        data:EnterpriseRiskPlaceDTO,
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
  * @summary 应急场所
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async deleteEnterpriseRiskPlaceUsingDELETE(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/enterprise/risk/place/delete',
        data:{},
        params:{id},
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
  * @summary 应急场所
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataEnterpriseRiskPlaceDTO>}
  */
  static async getEnterpriseRiskPlaceUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/risk/place/get',
        data:{},
        params:{id},
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
  * @summary 应急场所
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {Boolean} [commitFlag] commitFlag
  * @param {Number} [enterpriseId] 企业id
  * @param {String} [searchContent] 检索内容
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageEnterpriseRiskPlaceDTO>}
  */
  static async pageEnterpriseRiskPlaceUsingGET(_limit,_page,commitFlag,enterpriseId,searchContent,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/risk/place/page',
        data:{},
        params:{_limit,_page,commitFlag,enterpriseId,searchContent},
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
  * @summary 应急场所
  * @param {UserModel.EnterpriseRiskPlaceDTO} [EnterpriseRiskPlaceDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updateEnterpriseRiskPlaceUsingPUT(EnterpriseRiskPlaceDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/enterprise/risk/place/update',
        data:EnterpriseRiskPlaceDTO,
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
  * @summary 敏感点
  * @param {UserModel.EnterpriseSensitiveDTO} [EnterpriseSensitiveDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async addEnterpriseSensitiveUsingPOST(EnterpriseSensitiveDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/enterprise/risk/sensitive/add',
        data:EnterpriseSensitiveDTO,
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
  * @summary 敏感点
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async deleteEnterpriseSensitiveUsingDELETE(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/enterprise/risk/sensitive/delete',
        data:{},
        params:{id},
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
  * @summary 敏感点
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {Boolean} [commitFlag] commitFlag
  * @param {Number} [enterpriseId] 企业id
  * @param {String} [searchContent] 检索内容
  * @param {Number} [typeId] 气：181，水：183
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageEnterpriseSensitiveDTO>}
  */
  static async pageEnterpriseSensitiveUsingGET(_limit,_page,commitFlag,enterpriseId,searchContent,typeId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/risk/sensitive/page',
        data:{},
        params:{_limit,_page,commitFlag,enterpriseId,searchContent,typeId},
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
  * @summary 应急物资
  * @param {UserModel.EnterpriseRiskSupplyDTO} [EnterpriseRiskSupplyDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async addEnterpriseRiskSupplyUsingPOST(EnterpriseRiskSupplyDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/enterprise/risk/supply/add',
        data:EnterpriseRiskSupplyDTO,
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
  * @summary 应急物资
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async deleteEnterpriseRiskSupplyUsingDELETE(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/enterprise/risk/supply/delete',
        data:{},
        params:{id},
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
  * @summary 应急物资
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataEnterpriseRiskSupplyDTO>}
  */
  static async getEnterpriseRiskSupplyUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/risk/supply/get',
        data:{},
        params:{id},
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
  * @summary 应急物资
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {Boolean} [commitFlag] commitFlag
  * @param {Number} [enterpriseId] 企业id
  * @param {String} [searchContent] 检索内容
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageEnterpriseRiskSupplyDTO>}
  */
  static async pageEnterpriseRiskSupplyUsingGET(_limit,_page,commitFlag,enterpriseId,searchContent,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/risk/supply/page',
        data:{},
        params:{_limit,_page,commitFlag,enterpriseId,searchContent},
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
  * @summary 应急物资
  * @param {UserModel.EnterpriseRiskSupplyDTO} [EnterpriseRiskSupplyDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updateEnterpriseRiskSupplyUsingPUT(EnterpriseRiskSupplyDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/enterprise/risk/supply/update',
        data:EnterpriseRiskSupplyDTO,
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
  * @summary 应急队伍
  * @param {UserModel.EnterpriseRiskTeamDTO} [EnterpriseRiskTeamDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async addEnterpriseRiskTeamUsingPOST(EnterpriseRiskTeamDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/enterprise/risk/team/add',
        data:EnterpriseRiskTeamDTO,
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
  * @summary 应急队伍
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async deleteEnterpriseRiskTeamUsingDELETE(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/enterprise/risk/team/delete',
        data:{},
        params:{id},
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
  * @summary 应急队伍
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {Boolean} [commitFlag] commitFlag
  * @param {Number} [enterpriseId] 企业id
  * @param {String} [searchContent] 检索内容
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageEnterpriseRiskTeamDTO>}
  */
  static async pageEnterpriseRiskTeamUsingGET(_limit,_page,commitFlag,enterpriseId,searchContent,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/risk/team/page',
        data:{},
        params:{_limit,_page,commitFlag,enterpriseId,searchContent},
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
  * @summary 风险单元
  * @param {UserModel.EnterpriseRiskUnitDTO} [EnterpriseRiskUnitDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async addEnterpriseRiskUnitUsingPOST(EnterpriseRiskUnitDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/enterprise/risk/unit/add',
        data:EnterpriseRiskUnitDTO,
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
  * @summary 风险单元
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async deleteEnterpriseRiskUnitUsingDELETE(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/enterprise/risk/unit/delete',
        data:{},
        params:{id},
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
  * @summary 风险单元
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataEnterpriseRiskUnitDTO>}
  */
  static async getEnterpriseRiskUnitUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/risk/unit/get',
        data:{},
        params:{id},
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
  * @summary 风险单元
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {Boolean} [commitFlag] commitFlag
  * @param {Number} [enterpriseId] 企业id
  * @param {String} [searchContent] 检索内容
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageEnterpriseRiskUnitDTO>}
  */
  static async pageEnterpriseRiskUnitUsingGET(_limit,_page,commitFlag,enterpriseId,searchContent,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/risk/unit/page',
        data:{},
        params:{_limit,_page,commitFlag,enterpriseId,searchContent},
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
  * @summary 风险单元
  * @param {UserModel.EnterpriseRiskUnitDTO} [EnterpriseRiskUnitDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updateEnterpriseRiskUnitUsingPUT(EnterpriseRiskUnitDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/enterprise/risk/unit/update',
        data:EnterpriseRiskUnitDTO,
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

// class EnterpriseRisk static method properties bind
/**
* @description getEnterpriseRiskBaseUsingGET url链接，包含baseURL
*/
EnterpriseRisk.getEnterpriseRiskBaseUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/risk/base/get`
/**
* @description getEnterpriseRiskBaseUsingGET url链接，不包含baseURL
*/
EnterpriseRisk.getEnterpriseRiskBaseUsingGET.path=`/enterprise/risk/base/get`
/**
* @description updateEnterpriseRiskBaseUsingPUT url链接，包含baseURL
*/
EnterpriseRisk.updateEnterpriseRiskBaseUsingPUT.fullPath=`${axios.defaults.baseURL}/enterprise/risk/base/update`
/**
* @description updateEnterpriseRiskBaseUsingPUT url链接，不包含baseURL
*/
EnterpriseRisk.updateEnterpriseRiskBaseUsingPUT.path=`/enterprise/risk/base/update`
/**
* @description addEnterpriseRiskExpertUsingPOST url链接，包含baseURL
*/
EnterpriseRisk.addEnterpriseRiskExpertUsingPOST.fullPath=`${axios.defaults.baseURL}/enterprise/risk/expert/add`
/**
* @description addEnterpriseRiskExpertUsingPOST url链接，不包含baseURL
*/
EnterpriseRisk.addEnterpriseRiskExpertUsingPOST.path=`/enterprise/risk/expert/add`
/**
* @description deleteEnterpriseRiskExpertUsingDELETE url链接，包含baseURL
*/
EnterpriseRisk.deleteEnterpriseRiskExpertUsingDELETE.fullPath=`${axios.defaults.baseURL}/enterprise/risk/expert/delete`
/**
* @description deleteEnterpriseRiskExpertUsingDELETE url链接，不包含baseURL
*/
EnterpriseRisk.deleteEnterpriseRiskExpertUsingDELETE.path=`/enterprise/risk/expert/delete`
/**
* @description pageEnterpriseRiskExpertUsingGET url链接，包含baseURL
*/
EnterpriseRisk.pageEnterpriseRiskExpertUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/risk/expert/page`
/**
* @description pageEnterpriseRiskExpertUsingGET url链接，不包含baseURL
*/
EnterpriseRisk.pageEnterpriseRiskExpertUsingGET.path=`/enterprise/risk/expert/page`
/**
* @description addEnterpriseRiskFacilityUsingPOST url链接，包含baseURL
*/
EnterpriseRisk.addEnterpriseRiskFacilityUsingPOST.fullPath=`${axios.defaults.baseURL}/enterprise/risk/facility/add`
/**
* @description addEnterpriseRiskFacilityUsingPOST url链接，不包含baseURL
*/
EnterpriseRisk.addEnterpriseRiskFacilityUsingPOST.path=`/enterprise/risk/facility/add`
/**
* @description deleteEnterpriseRiskFacilityUsingDELETE url链接，包含baseURL
*/
EnterpriseRisk.deleteEnterpriseRiskFacilityUsingDELETE.fullPath=`${axios.defaults.baseURL}/enterprise/risk/facility/delete`
/**
* @description deleteEnterpriseRiskFacilityUsingDELETE url链接，不包含baseURL
*/
EnterpriseRisk.deleteEnterpriseRiskFacilityUsingDELETE.path=`/enterprise/risk/facility/delete`
/**
* @description getEnterpriseRiskFacilityUsingGET url链接，包含baseURL
*/
EnterpriseRisk.getEnterpriseRiskFacilityUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/risk/facility/get`
/**
* @description getEnterpriseRiskFacilityUsingGET url链接，不包含baseURL
*/
EnterpriseRisk.getEnterpriseRiskFacilityUsingGET.path=`/enterprise/risk/facility/get`
/**
* @description pageEnterpriseRiskFacilityUsingGET url链接，包含baseURL
*/
EnterpriseRisk.pageEnterpriseRiskFacilityUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/risk/facility/page`
/**
* @description pageEnterpriseRiskFacilityUsingGET url链接，不包含baseURL
*/
EnterpriseRisk.pageEnterpriseRiskFacilityUsingGET.path=`/enterprise/risk/facility/page`
/**
* @description updateEnterpriseRiskFacilityUsingPUT url链接，包含baseURL
*/
EnterpriseRisk.updateEnterpriseRiskFacilityUsingPUT.fullPath=`${axios.defaults.baseURL}/enterprise/risk/facility/update`
/**
* @description updateEnterpriseRiskFacilityUsingPUT url链接，不包含baseURL
*/
EnterpriseRisk.updateEnterpriseRiskFacilityUsingPUT.path=`/enterprise/risk/facility/update`
/**
* @description getDictRiskMaterialInfoUsingGET url链接，包含baseURL
*/
EnterpriseRisk.getDictRiskMaterialInfoUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/risk/material/get`
/**
* @description getDictRiskMaterialInfoUsingGET url链接，不包含baseURL
*/
EnterpriseRisk.getDictRiskMaterialInfoUsingGET.path=`/enterprise/risk/material/get`
/**
* @description pageDictRiskMaterialInfoUsingGET url链接，包含baseURL
*/
EnterpriseRisk.pageDictRiskMaterialInfoUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/risk/material/page`
/**
* @description pageDictRiskMaterialInfoUsingGET url链接，不包含baseURL
*/
EnterpriseRisk.pageDictRiskMaterialInfoUsingGET.path=`/enterprise/risk/material/page`
/**
* @description listDictRiskMaterialTypeUsingGET url链接，包含baseURL
*/
EnterpriseRisk.listDictRiskMaterialTypeUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/risk/material/type`
/**
* @description listDictRiskMaterialTypeUsingGET url链接，不包含baseURL
*/
EnterpriseRisk.listDictRiskMaterialTypeUsingGET.path=`/enterprise/risk/material/type`
/**
* @description addEnterpriseRiskPersonUsingPOST url链接，包含baseURL
*/
EnterpriseRisk.addEnterpriseRiskPersonUsingPOST.fullPath=`${axios.defaults.baseURL}/enterprise/risk/person/add`
/**
* @description addEnterpriseRiskPersonUsingPOST url链接，不包含baseURL
*/
EnterpriseRisk.addEnterpriseRiskPersonUsingPOST.path=`/enterprise/risk/person/add`
/**
* @description deleteEnterpriseRiskPersonUsingDELETE url链接，包含baseURL
*/
EnterpriseRisk.deleteEnterpriseRiskPersonUsingDELETE.fullPath=`${axios.defaults.baseURL}/enterprise/risk/person/delete`
/**
* @description deleteEnterpriseRiskPersonUsingDELETE url链接，不包含baseURL
*/
EnterpriseRisk.deleteEnterpriseRiskPersonUsingDELETE.path=`/enterprise/risk/person/delete`
/**
* @description getEnterpriseRiskPersonUsingGET url链接，包含baseURL
*/
EnterpriseRisk.getEnterpriseRiskPersonUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/risk/person/get`
/**
* @description getEnterpriseRiskPersonUsingGET url链接，不包含baseURL
*/
EnterpriseRisk.getEnterpriseRiskPersonUsingGET.path=`/enterprise/risk/person/get`
/**
* @description pageEnterpriseRiskPersonUsingGET url链接，包含baseURL
*/
EnterpriseRisk.pageEnterpriseRiskPersonUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/risk/person/page`
/**
* @description pageEnterpriseRiskPersonUsingGET url链接，不包含baseURL
*/
EnterpriseRisk.pageEnterpriseRiskPersonUsingGET.path=`/enterprise/risk/person/page`
/**
* @description updateEnterpriseRiskPersonUsingPUT url链接，包含baseURL
*/
EnterpriseRisk.updateEnterpriseRiskPersonUsingPUT.fullPath=`${axios.defaults.baseURL}/enterprise/risk/person/update`
/**
* @description updateEnterpriseRiskPersonUsingPUT url链接，不包含baseURL
*/
EnterpriseRisk.updateEnterpriseRiskPersonUsingPUT.path=`/enterprise/risk/person/update`
/**
* @description addEnterpriseRiskPlaceUsingPOST url链接，包含baseURL
*/
EnterpriseRisk.addEnterpriseRiskPlaceUsingPOST.fullPath=`${axios.defaults.baseURL}/enterprise/risk/place/add`
/**
* @description addEnterpriseRiskPlaceUsingPOST url链接，不包含baseURL
*/
EnterpriseRisk.addEnterpriseRiskPlaceUsingPOST.path=`/enterprise/risk/place/add`
/**
* @description deleteEnterpriseRiskPlaceUsingDELETE url链接，包含baseURL
*/
EnterpriseRisk.deleteEnterpriseRiskPlaceUsingDELETE.fullPath=`${axios.defaults.baseURL}/enterprise/risk/place/delete`
/**
* @description deleteEnterpriseRiskPlaceUsingDELETE url链接，不包含baseURL
*/
EnterpriseRisk.deleteEnterpriseRiskPlaceUsingDELETE.path=`/enterprise/risk/place/delete`
/**
* @description getEnterpriseRiskPlaceUsingGET url链接，包含baseURL
*/
EnterpriseRisk.getEnterpriseRiskPlaceUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/risk/place/get`
/**
* @description getEnterpriseRiskPlaceUsingGET url链接，不包含baseURL
*/
EnterpriseRisk.getEnterpriseRiskPlaceUsingGET.path=`/enterprise/risk/place/get`
/**
* @description pageEnterpriseRiskPlaceUsingGET url链接，包含baseURL
*/
EnterpriseRisk.pageEnterpriseRiskPlaceUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/risk/place/page`
/**
* @description pageEnterpriseRiskPlaceUsingGET url链接，不包含baseURL
*/
EnterpriseRisk.pageEnterpriseRiskPlaceUsingGET.path=`/enterprise/risk/place/page`
/**
* @description updateEnterpriseRiskPlaceUsingPUT url链接，包含baseURL
*/
EnterpriseRisk.updateEnterpriseRiskPlaceUsingPUT.fullPath=`${axios.defaults.baseURL}/enterprise/risk/place/update`
/**
* @description updateEnterpriseRiskPlaceUsingPUT url链接，不包含baseURL
*/
EnterpriseRisk.updateEnterpriseRiskPlaceUsingPUT.path=`/enterprise/risk/place/update`
/**
* @description addEnterpriseSensitiveUsingPOST url链接，包含baseURL
*/
EnterpriseRisk.addEnterpriseSensitiveUsingPOST.fullPath=`${axios.defaults.baseURL}/enterprise/risk/sensitive/add`
/**
* @description addEnterpriseSensitiveUsingPOST url链接，不包含baseURL
*/
EnterpriseRisk.addEnterpriseSensitiveUsingPOST.path=`/enterprise/risk/sensitive/add`
/**
* @description deleteEnterpriseSensitiveUsingDELETE url链接，包含baseURL
*/
EnterpriseRisk.deleteEnterpriseSensitiveUsingDELETE.fullPath=`${axios.defaults.baseURL}/enterprise/risk/sensitive/delete`
/**
* @description deleteEnterpriseSensitiveUsingDELETE url链接，不包含baseURL
*/
EnterpriseRisk.deleteEnterpriseSensitiveUsingDELETE.path=`/enterprise/risk/sensitive/delete`
/**
* @description pageEnterpriseSensitiveUsingGET url链接，包含baseURL
*/
EnterpriseRisk.pageEnterpriseSensitiveUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/risk/sensitive/page`
/**
* @description pageEnterpriseSensitiveUsingGET url链接，不包含baseURL
*/
EnterpriseRisk.pageEnterpriseSensitiveUsingGET.path=`/enterprise/risk/sensitive/page`
/**
* @description addEnterpriseRiskSupplyUsingPOST url链接，包含baseURL
*/
EnterpriseRisk.addEnterpriseRiskSupplyUsingPOST.fullPath=`${axios.defaults.baseURL}/enterprise/risk/supply/add`
/**
* @description addEnterpriseRiskSupplyUsingPOST url链接，不包含baseURL
*/
EnterpriseRisk.addEnterpriseRiskSupplyUsingPOST.path=`/enterprise/risk/supply/add`
/**
* @description deleteEnterpriseRiskSupplyUsingDELETE url链接，包含baseURL
*/
EnterpriseRisk.deleteEnterpriseRiskSupplyUsingDELETE.fullPath=`${axios.defaults.baseURL}/enterprise/risk/supply/delete`
/**
* @description deleteEnterpriseRiskSupplyUsingDELETE url链接，不包含baseURL
*/
EnterpriseRisk.deleteEnterpriseRiskSupplyUsingDELETE.path=`/enterprise/risk/supply/delete`
/**
* @description getEnterpriseRiskSupplyUsingGET url链接，包含baseURL
*/
EnterpriseRisk.getEnterpriseRiskSupplyUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/risk/supply/get`
/**
* @description getEnterpriseRiskSupplyUsingGET url链接，不包含baseURL
*/
EnterpriseRisk.getEnterpriseRiskSupplyUsingGET.path=`/enterprise/risk/supply/get`
/**
* @description pageEnterpriseRiskSupplyUsingGET url链接，包含baseURL
*/
EnterpriseRisk.pageEnterpriseRiskSupplyUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/risk/supply/page`
/**
* @description pageEnterpriseRiskSupplyUsingGET url链接，不包含baseURL
*/
EnterpriseRisk.pageEnterpriseRiskSupplyUsingGET.path=`/enterprise/risk/supply/page`
/**
* @description updateEnterpriseRiskSupplyUsingPUT url链接，包含baseURL
*/
EnterpriseRisk.updateEnterpriseRiskSupplyUsingPUT.fullPath=`${axios.defaults.baseURL}/enterprise/risk/supply/update`
/**
* @description updateEnterpriseRiskSupplyUsingPUT url链接，不包含baseURL
*/
EnterpriseRisk.updateEnterpriseRiskSupplyUsingPUT.path=`/enterprise/risk/supply/update`
/**
* @description addEnterpriseRiskTeamUsingPOST url链接，包含baseURL
*/
EnterpriseRisk.addEnterpriseRiskTeamUsingPOST.fullPath=`${axios.defaults.baseURL}/enterprise/risk/team/add`
/**
* @description addEnterpriseRiskTeamUsingPOST url链接，不包含baseURL
*/
EnterpriseRisk.addEnterpriseRiskTeamUsingPOST.path=`/enterprise/risk/team/add`
/**
* @description deleteEnterpriseRiskTeamUsingDELETE url链接，包含baseURL
*/
EnterpriseRisk.deleteEnterpriseRiskTeamUsingDELETE.fullPath=`${axios.defaults.baseURL}/enterprise/risk/team/delete`
/**
* @description deleteEnterpriseRiskTeamUsingDELETE url链接，不包含baseURL
*/
EnterpriseRisk.deleteEnterpriseRiskTeamUsingDELETE.path=`/enterprise/risk/team/delete`
/**
* @description pageEnterpriseRiskTeamUsingGET url链接，包含baseURL
*/
EnterpriseRisk.pageEnterpriseRiskTeamUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/risk/team/page`
/**
* @description pageEnterpriseRiskTeamUsingGET url链接，不包含baseURL
*/
EnterpriseRisk.pageEnterpriseRiskTeamUsingGET.path=`/enterprise/risk/team/page`
/**
* @description addEnterpriseRiskUnitUsingPOST url链接，包含baseURL
*/
EnterpriseRisk.addEnterpriseRiskUnitUsingPOST.fullPath=`${axios.defaults.baseURL}/enterprise/risk/unit/add`
/**
* @description addEnterpriseRiskUnitUsingPOST url链接，不包含baseURL
*/
EnterpriseRisk.addEnterpriseRiskUnitUsingPOST.path=`/enterprise/risk/unit/add`
/**
* @description deleteEnterpriseRiskUnitUsingDELETE url链接，包含baseURL
*/
EnterpriseRisk.deleteEnterpriseRiskUnitUsingDELETE.fullPath=`${axios.defaults.baseURL}/enterprise/risk/unit/delete`
/**
* @description deleteEnterpriseRiskUnitUsingDELETE url链接，不包含baseURL
*/
EnterpriseRisk.deleteEnterpriseRiskUnitUsingDELETE.path=`/enterprise/risk/unit/delete`
/**
* @description getEnterpriseRiskUnitUsingGET url链接，包含baseURL
*/
EnterpriseRisk.getEnterpriseRiskUnitUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/risk/unit/get`
/**
* @description getEnterpriseRiskUnitUsingGET url链接，不包含baseURL
*/
EnterpriseRisk.getEnterpriseRiskUnitUsingGET.path=`/enterprise/risk/unit/get`
/**
* @description pageEnterpriseRiskUnitUsingGET url链接，包含baseURL
*/
EnterpriseRisk.pageEnterpriseRiskUnitUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/risk/unit/page`
/**
* @description pageEnterpriseRiskUnitUsingGET url链接，不包含baseURL
*/
EnterpriseRisk.pageEnterpriseRiskUnitUsingGET.path=`/enterprise/risk/unit/page`
/**
* @description updateEnterpriseRiskUnitUsingPUT url链接，包含baseURL
*/
EnterpriseRisk.updateEnterpriseRiskUnitUsingPUT.fullPath=`${axios.defaults.baseURL}/enterprise/risk/unit/update`
/**
* @description updateEnterpriseRiskUnitUsingPUT url链接，不包含baseURL
*/
EnterpriseRisk.updateEnterpriseRiskUnitUsingPUT.path=`/enterprise/risk/unit/update`

export class EnterpriseStation {
 
  /**
  * @summary 新增站点
  * @param {UserModel.EnterpriseStationDTO} [EnterpriseStationDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async addEnterpriseStationUsingPOST(EnterpriseStationDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/enterprise/station/add',
        data:EnterpriseStationDTO,
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
  * @summary 删除站点
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async deleteEnterpriseStationUsingDELETE(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/enterprise/station/delete',
        data:{},
        params:{id},
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
  * @summary 获取站点
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataEnterpriseStationDTO>}
  */
  static async getEnterpriseStationUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/station/get',
        data:{},
        params:{id},
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
  * @summary 新增监测项目
  * @param {UserModel.EnterpriseStationItemDTO} [EnterpriseStationItemDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async addEnterpriseStationItemUsingPOST(EnterpriseStationItemDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/enterprise/station/item/add',
        data:EnterpriseStationItemDTO,
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
  * @summary 新增监测项目（批量）
  * @param {array} [array] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async addEnterpriseStationItemBatchUsingPOST(array,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/enterprise/station/item/add/batch',
        data:array,
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
  * @summary 删除监测项目
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async deleteEnterpriseStationItemUsingDELETE(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/enterprise/station/item/delete',
        data:{},
        params:{id},
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
  * @summary 获取监测项目
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataEnterpriseStationItemDTO>}
  */
  static async getEnterpriseStationItemUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/station/item/get',
        data:{},
        params:{id},
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
  * @summary 监测项目列表
  * @param {Number} [stationId] stationId
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListEnterpriseStationItemDTO>}
  */
  static async listEnterpriseStationItemUsingGET(stationId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/enterprise/station/item/list',
        data:{},
        params:{stationId},
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
  * @summary 更新监测项目
  * @param {UserModel.EnterpriseStationItemDTO} [EnterpriseStationItemDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updateEnterpriseStationItemUsingPUT(EnterpriseStationItemDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/enterprise/station/item/update',
        data:EnterpriseStationItemDTO,
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
  * @summary 更新站点
  * @param {UserModel.EnterpriseStationDTO} [EnterpriseStationDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updateEnterpriseStationUsingPUT(EnterpriseStationDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/enterprise/station/update',
        data:EnterpriseStationDTO,
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

// class EnterpriseStation static method properties bind
/**
* @description addEnterpriseStationUsingPOST url链接，包含baseURL
*/
EnterpriseStation.addEnterpriseStationUsingPOST.fullPath=`${axios.defaults.baseURL}/enterprise/station/add`
/**
* @description addEnterpriseStationUsingPOST url链接，不包含baseURL
*/
EnterpriseStation.addEnterpriseStationUsingPOST.path=`/enterprise/station/add`
/**
* @description deleteEnterpriseStationUsingDELETE url链接，包含baseURL
*/
EnterpriseStation.deleteEnterpriseStationUsingDELETE.fullPath=`${axios.defaults.baseURL}/enterprise/station/delete`
/**
* @description deleteEnterpriseStationUsingDELETE url链接，不包含baseURL
*/
EnterpriseStation.deleteEnterpriseStationUsingDELETE.path=`/enterprise/station/delete`
/**
* @description getEnterpriseStationUsingGET url链接，包含baseURL
*/
EnterpriseStation.getEnterpriseStationUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/station/get`
/**
* @description getEnterpriseStationUsingGET url链接，不包含baseURL
*/
EnterpriseStation.getEnterpriseStationUsingGET.path=`/enterprise/station/get`
/**
* @description addEnterpriseStationItemUsingPOST url链接，包含baseURL
*/
EnterpriseStation.addEnterpriseStationItemUsingPOST.fullPath=`${axios.defaults.baseURL}/enterprise/station/item/add`
/**
* @description addEnterpriseStationItemUsingPOST url链接，不包含baseURL
*/
EnterpriseStation.addEnterpriseStationItemUsingPOST.path=`/enterprise/station/item/add`
/**
* @description addEnterpriseStationItemBatchUsingPOST url链接，包含baseURL
*/
EnterpriseStation.addEnterpriseStationItemBatchUsingPOST.fullPath=`${axios.defaults.baseURL}/enterprise/station/item/add/batch`
/**
* @description addEnterpriseStationItemBatchUsingPOST url链接，不包含baseURL
*/
EnterpriseStation.addEnterpriseStationItemBatchUsingPOST.path=`/enterprise/station/item/add/batch`
/**
* @description deleteEnterpriseStationItemUsingDELETE url链接，包含baseURL
*/
EnterpriseStation.deleteEnterpriseStationItemUsingDELETE.fullPath=`${axios.defaults.baseURL}/enterprise/station/item/delete`
/**
* @description deleteEnterpriseStationItemUsingDELETE url链接，不包含baseURL
*/
EnterpriseStation.deleteEnterpriseStationItemUsingDELETE.path=`/enterprise/station/item/delete`
/**
* @description getEnterpriseStationItemUsingGET url链接，包含baseURL
*/
EnterpriseStation.getEnterpriseStationItemUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/station/item/get`
/**
* @description getEnterpriseStationItemUsingGET url链接，不包含baseURL
*/
EnterpriseStation.getEnterpriseStationItemUsingGET.path=`/enterprise/station/item/get`
/**
* @description listEnterpriseStationItemUsingGET url链接，包含baseURL
*/
EnterpriseStation.listEnterpriseStationItemUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/station/item/list`
/**
* @description listEnterpriseStationItemUsingGET url链接，不包含baseURL
*/
EnterpriseStation.listEnterpriseStationItemUsingGET.path=`/enterprise/station/item/list`
/**
* @description updateEnterpriseStationItemUsingPUT url链接，包含baseURL
*/
EnterpriseStation.updateEnterpriseStationItemUsingPUT.fullPath=`${axios.defaults.baseURL}/enterprise/station/item/update`
/**
* @description updateEnterpriseStationItemUsingPUT url链接，不包含baseURL
*/
EnterpriseStation.updateEnterpriseStationItemUsingPUT.path=`/enterprise/station/item/update`
/**
* @description updateEnterpriseStationUsingPUT url链接，包含baseURL
*/
EnterpriseStation.updateEnterpriseStationUsingPUT.fullPath=`${axios.defaults.baseURL}/enterprise/station/update`
/**
* @description updateEnterpriseStationUsingPUT url链接，不包含baseURL
*/
EnterpriseStation.updateEnterpriseStationUsingPUT.path=`/enterprise/station/update`

export class Expert {
 
  /**
  * @summary 新增专家
  * @param {UserModel.ExpertDTO} [ExpertDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async addExpertUsingPOST(ExpertDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/expert/add',
        data:ExpertDTO,
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
  * @summary 删除专家
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async deleteExpertUsingDELETE(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/expert/delete',
        data:{},
        params:{id},
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
  * @summary 获取专家
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataExpertDTO>}
  */
  static async getExpertUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/expert/get',
        data:{},
        params:{id},
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
  * @summary 专家列表
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {String} [searchContent] 检索内容
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageExpertDTO>}
  */
  static async pageExpertUsingGET(_limit,_page,searchContent,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/expert/page',
        data:{},
        params:{_limit,_page,searchContent},
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
  * @summary 更新专家
  * @param {UserModel.ExpertDTO} [ExpertDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updateExpertUsingPUT(ExpertDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/expert/update',
        data:ExpertDTO,
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

// class Expert static method properties bind
/**
* @description addExpertUsingPOST url链接，包含baseURL
*/
Expert.addExpertUsingPOST.fullPath=`${axios.defaults.baseURL}/expert/add`
/**
* @description addExpertUsingPOST url链接，不包含baseURL
*/
Expert.addExpertUsingPOST.path=`/expert/add`
/**
* @description deleteExpertUsingDELETE url链接，包含baseURL
*/
Expert.deleteExpertUsingDELETE.fullPath=`${axios.defaults.baseURL}/expert/delete`
/**
* @description deleteExpertUsingDELETE url链接，不包含baseURL
*/
Expert.deleteExpertUsingDELETE.path=`/expert/delete`
/**
* @description getExpertUsingGET url链接，包含baseURL
*/
Expert.getExpertUsingGET.fullPath=`${axios.defaults.baseURL}/expert/get`
/**
* @description getExpertUsingGET url链接，不包含baseURL
*/
Expert.getExpertUsingGET.path=`/expert/get`
/**
* @description pageExpertUsingGET url链接，包含baseURL
*/
Expert.pageExpertUsingGET.fullPath=`${axios.defaults.baseURL}/expert/page`
/**
* @description pageExpertUsingGET url链接，不包含baseURL
*/
Expert.pageExpertUsingGET.path=`/expert/page`
/**
* @description updateExpertUsingPUT url链接，包含baseURL
*/
Expert.updateExpertUsingPUT.fullPath=`${axios.defaults.baseURL}/expert/update`
/**
* @description updateExpertUsingPUT url链接，不包含baseURL
*/
Expert.updateExpertUsingPUT.path=`/expert/update`

export class File {
 
  /**
  * @summary 文件上传
  * @param {String} [file] file
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataFileDTO>}
  */
  static async uploadDisplayFileUsingPOST(file,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/file/upload',
        data:{file},
        params:{},
        headers:{
          "Content-Type":"multipart/form-data"
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

// class File static method properties bind
/**
* @description uploadDisplayFileUsingPOST url链接，包含baseURL
*/
File.uploadDisplayFileUsingPOST.fullPath=`${axios.defaults.baseURL}/file/upload`
/**
* @description uploadDisplayFileUsingPOST url链接，不包含baseURL
*/
File.uploadDisplayFileUsingPOST.path=`/file/upload`

export class Information {
 
  /**
  * @summary 获取基本信息
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataInformationDTO>}
  */
  static async getInformationUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/information/get',
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
  * @summary 更新基本信息
  * @param {UserModel.InformationDTO} [InformationDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updateInformationUsingPUT(InformationDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/information/update',
        data:InformationDTO,
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

// class Information static method properties bind
/**
* @description getInformationUsingGET url链接，包含baseURL
*/
Information.getInformationUsingGET.fullPath=`${axios.defaults.baseURL}/information/get`
/**
* @description getInformationUsingGET url链接，不包含baseURL
*/
Information.getInformationUsingGET.path=`/information/get`
/**
* @description updateInformationUsingPUT url链接，包含baseURL
*/
Information.updateInformationUsingPUT.fullPath=`${axios.defaults.baseURL}/information/update`
/**
* @description updateInformationUsingPUT url链接，不包含baseURL
*/
Information.updateInformationUsingPUT.path=`/information/update`

export class Instrument {
 
  /**
  * @summary 新增设备
  * @param {UserModel.InstrumentDTO} [InstrumentDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async addInstrumentUsingPOST(InstrumentDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/instrument/add',
        data:InstrumentDTO,
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
  * @summary 删除设备
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async deleteInstrumentUsingDELETE(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/instrument/delete',
        data:{},
        params:{id},
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
  * @summary 获取设备
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataInstrumentDTO>}
  */
  static async getInstrumentUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/instrument/get',
        data:{},
        params:{id},
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
  * @summary 设备列表
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {String} [searchContent] 检索内容
  * @param {Number} [workplaceId] workplaceId
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageInstrumentDTO>}
  */
  static async pageInstrumentUsingGET(_limit,_page,searchContent,workplaceId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/instrument/page',
        data:{},
        params:{_limit,_page,searchContent,workplaceId},
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
  * @summary 更新设备
  * @param {UserModel.InstrumentDTO} [InstrumentDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updateInstrumentUsingPUT(InstrumentDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/instrument/update',
        data:InstrumentDTO,
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

// class Instrument static method properties bind
/**
* @description addInstrumentUsingPOST url链接，包含baseURL
*/
Instrument.addInstrumentUsingPOST.fullPath=`${axios.defaults.baseURL}/instrument/add`
/**
* @description addInstrumentUsingPOST url链接，不包含baseURL
*/
Instrument.addInstrumentUsingPOST.path=`/instrument/add`
/**
* @description deleteInstrumentUsingDELETE url链接，包含baseURL
*/
Instrument.deleteInstrumentUsingDELETE.fullPath=`${axios.defaults.baseURL}/instrument/delete`
/**
* @description deleteInstrumentUsingDELETE url链接，不包含baseURL
*/
Instrument.deleteInstrumentUsingDELETE.path=`/instrument/delete`
/**
* @description getInstrumentUsingGET url链接，包含baseURL
*/
Instrument.getInstrumentUsingGET.fullPath=`${axios.defaults.baseURL}/instrument/get`
/**
* @description getInstrumentUsingGET url链接，不包含baseURL
*/
Instrument.getInstrumentUsingGET.path=`/instrument/get`
/**
* @description pageInstrumentUsingGET url链接，包含baseURL
*/
Instrument.pageInstrumentUsingGET.fullPath=`${axios.defaults.baseURL}/instrument/page`
/**
* @description pageInstrumentUsingGET url链接，不包含baseURL
*/
Instrument.pageInstrumentUsingGET.path=`/instrument/page`
/**
* @description updateInstrumentUsingPUT url链接，包含baseURL
*/
Instrument.updateInstrumentUsingPUT.fullPath=`${axios.defaults.baseURL}/instrument/update`
/**
* @description updateInstrumentUsingPUT url链接，不包含baseURL
*/
Instrument.updateInstrumentUsingPUT.path=`/instrument/update`

export class Item {
 
  /**
  * @summary 删除监测项目
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async deleteItemBaseUsingDELETE(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/item/delete',
        data:{},
        params:{id},
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
  * @summary 监测项目下拉
  * @param {Number} [typeId] typeId
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListItemBaseDTO>}
  */
  static async dropItemBaseUsingGET(typeId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/item/drop',
        data:{},
        params:{typeId},
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
  * @summary 获取监测项目
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataItemBaseDTO>}
  */
  static async getItemBaseUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/item/get',
        data:{},
        params:{id},
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
  * @summary 监测项目列表
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {String} [searchContent] 检索内容
  * @param {Number} [typeId] 类型id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageItemBaseDTO>}
  */
  static async pageItemBaseUsingGET(_limit,_page,searchContent,typeId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/item/page',
        data:{},
        params:{_limit,_page,searchContent,typeId},
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
  * @summary 新增监测项目
  * @param {UserModel.ItemBaseDTO} [ItemBaseDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async saveItemBaseUsingPOST(ItemBaseDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/item/save',
        data:ItemBaseDTO,
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
  * @summary 编辑监测项目
  * @param {UserModel.ItemBaseDTO} [ItemBaseDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updateItemBaseUsingPUT(ItemBaseDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/item/update',
        data:ItemBaseDTO,
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

// class Item static method properties bind
/**
* @description deleteItemBaseUsingDELETE url链接，包含baseURL
*/
Item.deleteItemBaseUsingDELETE.fullPath=`${axios.defaults.baseURL}/item/delete`
/**
* @description deleteItemBaseUsingDELETE url链接，不包含baseURL
*/
Item.deleteItemBaseUsingDELETE.path=`/item/delete`
/**
* @description dropItemBaseUsingGET url链接，包含baseURL
*/
Item.dropItemBaseUsingGET.fullPath=`${axios.defaults.baseURL}/item/drop`
/**
* @description dropItemBaseUsingGET url链接，不包含baseURL
*/
Item.dropItemBaseUsingGET.path=`/item/drop`
/**
* @description getItemBaseUsingGET url链接，包含baseURL
*/
Item.getItemBaseUsingGET.fullPath=`${axios.defaults.baseURL}/item/get`
/**
* @description getItemBaseUsingGET url链接，不包含baseURL
*/
Item.getItemBaseUsingGET.path=`/item/get`
/**
* @description pageItemBaseUsingGET url链接，包含baseURL
*/
Item.pageItemBaseUsingGET.fullPath=`${axios.defaults.baseURL}/item/page`
/**
* @description pageItemBaseUsingGET url链接，不包含baseURL
*/
Item.pageItemBaseUsingGET.path=`/item/page`
/**
* @description saveItemBaseUsingPOST url链接，包含baseURL
*/
Item.saveItemBaseUsingPOST.fullPath=`${axios.defaults.baseURL}/item/save`
/**
* @description saveItemBaseUsingPOST url链接，不包含baseURL
*/
Item.saveItemBaseUsingPOST.path=`/item/save`
/**
* @description updateItemBaseUsingPUT url链接，包含baseURL
*/
Item.updateItemBaseUsingPUT.fullPath=`${axios.defaults.baseURL}/item/update`
/**
* @description updateItemBaseUsingPUT url链接，不包含baseURL
*/
Item.updateItemBaseUsingPUT.path=`/item/update`

export class Locate {
 
  /**
  * @summary 获取位置信息
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataLocateDTO>}
  */
  static async getLocateInfoUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/locate/get',
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
  * @summary 更新位置信息
  * @param {UserModel.LocateDTO} [LocateDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updateLocateInfoUsingPUT(LocateDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/locate/update',
        data:LocateDTO,
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

// class Locate static method properties bind
/**
* @description getLocateInfoUsingGET url链接，包含baseURL
*/
Locate.getLocateInfoUsingGET.fullPath=`${axios.defaults.baseURL}/locate/get`
/**
* @description getLocateInfoUsingGET url链接，不包含baseURL
*/
Locate.getLocateInfoUsingGET.path=`/locate/get`
/**
* @description updateLocateInfoUsingPUT url链接，包含baseURL
*/
Locate.updateLocateInfoUsingPUT.fullPath=`${axios.defaults.baseURL}/locate/update`
/**
* @description updateLocateInfoUsingPUT url链接，不包含baseURL
*/
Locate.updateLocateInfoUsingPUT.path=`/locate/update`

export class Msds {
 
  /**
  * @summary 危险化学品单条详细信息
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataMsdsBaseDTO>}
  */
  static async getMsdsBaseUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/msds/get',
        data:{},
        params:{id},
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
  * @summary 危险化学品目录发布信息
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataMsdsInfoDTO>}
  */
  static async getMsdsInfoUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/msds/info',
        data:{},
        params:{id},
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
  * @summary 危险化学品列表
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {Number} [pageIndex] 页面序号（1-10）
  * @param {String} [searchContent] 检索内容
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageMsdsBaseDTO>}
  */
  static async pageMsdsBaseUsingGET(_limit,_page,pageIndex,searchContent,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/msds/page',
        data:{},
        params:{_limit,_page,pageIndex,searchContent},
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

// class Msds static method properties bind
/**
* @description getMsdsBaseUsingGET url链接，包含baseURL
*/
Msds.getMsdsBaseUsingGET.fullPath=`${axios.defaults.baseURL}/msds/get`
/**
* @description getMsdsBaseUsingGET url链接，不包含baseURL
*/
Msds.getMsdsBaseUsingGET.path=`/msds/get`
/**
* @description getMsdsInfoUsingGET url链接，包含baseURL
*/
Msds.getMsdsInfoUsingGET.fullPath=`${axios.defaults.baseURL}/msds/info`
/**
* @description getMsdsInfoUsingGET url链接，不包含baseURL
*/
Msds.getMsdsInfoUsingGET.path=`/msds/info`
/**
* @description pageMsdsBaseUsingGET url链接，包含baseURL
*/
Msds.pageMsdsBaseUsingGET.fullPath=`${axios.defaults.baseURL}/msds/page`
/**
* @description pageMsdsBaseUsingGET url链接，不包含baseURL
*/
Msds.pageMsdsBaseUsingGET.path=`/msds/page`

export class DictNorm {
 
  /**
  * @summary 获取标准目录
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataNormEntryDTO>}
  */
  static async getNormEntryUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/norm/entry/get',
        data:{},
        params:{id},
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
  * @summary 获取节点名称
  * @param {Number} [itemId] itemId
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDatastring>}
  */
  static async getEntryNameByItemIdUsingGET(itemId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/norm/entry/name',
        data:{},
        params:{itemId},
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
  * @summary 标准目录树
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListNormTreeDTO>}
  */
  static async treeNormEntryUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/norm/entry/tree',
        data:{},
        params:{id},
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
  * @summary 获取标准条目
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataNormItemDTO>}
  */
  static async getNormItemUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/norm/item/get',
        data:{},
        params:{id},
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
  * @summary 标准信息（下拉）
  * @param {Number} [itemId] itemId
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListFrontSpinner>}
  */
  static async dropNormByItemIdUsingGET(itemId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/norm/norm/drop',
        data:{},
        params:{itemId},
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
  * @summary 标准项目树
  * @param {Number} [itemId] itemId
  * @param {Number} [normId] normId
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListNormTreeDTO>}
  */
  static async treeNormItemUsingGET(itemId,normId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/norm/norm/item/tree',
        data:{},
        params:{itemId,normId},
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
  * @summary 标准信息（分页）
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {Number} [itemTypeId] 项目分类id
  * @param {Number} [normTypeId] 标准类型id
  * @param {String} [searchContent] 检索内容
  * @param {Number} [sourceTypeId] 标准分类id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageNormInfoDTO>}
  */
  static async pageNormInfoUsingGET(_limit,_page,itemTypeId,normTypeId,searchContent,sourceTypeId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/norm/norm/page',
        data:{},
        params:{_limit,_page,itemTypeId,normTypeId,searchContent,sourceTypeId},
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

// class DictNorm static method properties bind
/**
* @description getNormEntryUsingGET url链接，包含baseURL
*/
DictNorm.getNormEntryUsingGET.fullPath=`${axios.defaults.baseURL}/norm/entry/get`
/**
* @description getNormEntryUsingGET url链接，不包含baseURL
*/
DictNorm.getNormEntryUsingGET.path=`/norm/entry/get`
/**
* @description getEntryNameByItemIdUsingGET url链接，包含baseURL
*/
DictNorm.getEntryNameByItemIdUsingGET.fullPath=`${axios.defaults.baseURL}/norm/entry/name`
/**
* @description getEntryNameByItemIdUsingGET url链接，不包含baseURL
*/
DictNorm.getEntryNameByItemIdUsingGET.path=`/norm/entry/name`
/**
* @description treeNormEntryUsingGET url链接，包含baseURL
*/
DictNorm.treeNormEntryUsingGET.fullPath=`${axios.defaults.baseURL}/norm/entry/tree`
/**
* @description treeNormEntryUsingGET url链接，不包含baseURL
*/
DictNorm.treeNormEntryUsingGET.path=`/norm/entry/tree`
/**
* @description getNormItemUsingGET url链接，包含baseURL
*/
DictNorm.getNormItemUsingGET.fullPath=`${axios.defaults.baseURL}/norm/item/get`
/**
* @description getNormItemUsingGET url链接，不包含baseURL
*/
DictNorm.getNormItemUsingGET.path=`/norm/item/get`
/**
* @description dropNormByItemIdUsingGET url链接，包含baseURL
*/
DictNorm.dropNormByItemIdUsingGET.fullPath=`${axios.defaults.baseURL}/norm/norm/drop`
/**
* @description dropNormByItemIdUsingGET url链接，不包含baseURL
*/
DictNorm.dropNormByItemIdUsingGET.path=`/norm/norm/drop`
/**
* @description treeNormItemUsingGET url链接，包含baseURL
*/
DictNorm.treeNormItemUsingGET.fullPath=`${axios.defaults.baseURL}/norm/norm/item/tree`
/**
* @description treeNormItemUsingGET url链接，不包含baseURL
*/
DictNorm.treeNormItemUsingGET.path=`/norm/norm/item/tree`
/**
* @description pageNormInfoUsingGET url链接，包含baseURL
*/
DictNorm.pageNormInfoUsingGET.fullPath=`${axios.defaults.baseURL}/norm/norm/page`
/**
* @description pageNormInfoUsingGET url链接，不包含baseURL
*/
DictNorm.pageNormInfoUsingGET.path=`/norm/norm/page`

export class Person {
 
  /**
  * @summary 新增人员
  * @param {UserModel.PersonDTO} [PersonDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async addPersonUsingPOST(PersonDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/person/add',
        data:PersonDTO,
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
  * @summary 删除人员
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async deletePersonUsingDELETE(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/person/delete',
        data:{},
        params:{id},
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
  * @summary 人员下拉
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListFrontSpinner>}
  */
  static async dropPersonUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/person/drop',
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
  * @summary 获取人员
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataPersonDTO>}
  */
  static async getPersonUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/person/get',
        data:{},
        params:{id},
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
  * @summary 人员界面-职位下拉
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListFrontSpinner>}
  */
  static async dropOccupationUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/person/occupationDrop',
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
  * @summary 人员列表
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {String} [searchContent] 检索内容
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePagePersonDTO>}
  */
  static async pagePersonUsingGET(_limit,_page,searchContent,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/person/page',
        data:{},
        params:{_limit,_page,searchContent},
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
  * @summary 更新人员
  * @param {UserModel.PersonDTO} [PersonDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updatePersonUsingPUT(PersonDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/person/update',
        data:PersonDTO,
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

// class Person static method properties bind
/**
* @description addPersonUsingPOST url链接，包含baseURL
*/
Person.addPersonUsingPOST.fullPath=`${axios.defaults.baseURL}/person/add`
/**
* @description addPersonUsingPOST url链接，不包含baseURL
*/
Person.addPersonUsingPOST.path=`/person/add`
/**
* @description deletePersonUsingDELETE url链接，包含baseURL
*/
Person.deletePersonUsingDELETE.fullPath=`${axios.defaults.baseURL}/person/delete`
/**
* @description deletePersonUsingDELETE url链接，不包含baseURL
*/
Person.deletePersonUsingDELETE.path=`/person/delete`
/**
* @description dropPersonUsingGET url链接，包含baseURL
*/
Person.dropPersonUsingGET.fullPath=`${axios.defaults.baseURL}/person/drop`
/**
* @description dropPersonUsingGET url链接，不包含baseURL
*/
Person.dropPersonUsingGET.path=`/person/drop`
/**
* @description getPersonUsingGET url链接，包含baseURL
*/
Person.getPersonUsingGET.fullPath=`${axios.defaults.baseURL}/person/get`
/**
* @description getPersonUsingGET url链接，不包含baseURL
*/
Person.getPersonUsingGET.path=`/person/get`
/**
* @description dropOccupationUsingGET url链接，包含baseURL
*/
Person.dropOccupationUsingGET.fullPath=`${axios.defaults.baseURL}/person/occupationDrop`
/**
* @description dropOccupationUsingGET url链接，不包含baseURL
*/
Person.dropOccupationUsingGET.path=`/person/occupationDrop`
/**
* @description pagePersonUsingGET url链接，包含baseURL
*/
Person.pagePersonUsingGET.fullPath=`${axios.defaults.baseURL}/person/page`
/**
* @description pagePersonUsingGET url链接，不包含baseURL
*/
Person.pagePersonUsingGET.path=`/person/page`
/**
* @description updatePersonUsingPUT url链接，包含baseURL
*/
Person.updatePersonUsingPUT.fullPath=`${axios.defaults.baseURL}/person/update`
/**
* @description updatePersonUsingPUT url链接，不包含baseURL
*/
Person.updatePersonUsingPUT.path=`/person/update`

export class PollutionAlarmController {
 
  /**
  * @summary 任务派发
  * @param {UserModel.TMgmtPollutionAlarmTask} [TMgmtPollutionAlarmTask] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async assignPollutionTaskUsingPOST(TMgmtPollutionAlarmTask,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/pollutionAlarm/assignPollutionTask',
        data:TMgmtPollutionAlarmTask,
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
  * @summary 审核任务
  * @param {UserModel.CheckTaskDTO} [CheckTaskDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async checkPollutionTaskUsingPOST(CheckTaskDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/pollutionAlarm/checkPollutionTask',
        data:CheckTaskDTO,
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
  * @summary 获取单个企业经纬度
  * @param {Number} [enterpriseId] 企业id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataTmgmtEnterpriseInfo>}
  */
  static async getEnterpriseStationDetailUsingGET(enterpriseId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/pollutionAlarm/enterpriseStationDetail',
        data:{},
        params:{enterpriseId},
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
  * @summary 获取报警清单
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {Number} [alarmFlag] 报警类别：1.离线报警 2.超限报警 3.异常报警
  * @param {String} [endTime] 终止时间
  * @param {Number} [itemId] 超标项目
  * @param {String} [searchContent] 检索内容
  * @param {String} [startTime] 起始时间
  * @param {Number} [status] 处理状态：1.未处置 2.处置中 3.待审核 4.已审核
  * @param {Number} [typeId] 监测类型：4.废气 5.废水 6.雨水
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePagePollutionAlarmListVO>}
  */
  static async getPollutionAlarmUsingGET(_limit,_page,alarmFlag,endTime,itemId,searchContent,startTime,status,typeId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/pollutionAlarm/getPollutionAlarm',
        data:{},
        params:{_limit,_page,alarmFlag,endTime,itemId,searchContent,startTime,status,typeId},
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
  * @summary 监测因子下拉菜单
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListFactorListVO>}
  */
  static async getPollutionItemUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/pollutionAlarm/getPollutionItem',
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
  * @summary 污染源限值列表
  * @param {Number} [typeId] 监测类型：4.废气 5.废水 6.雨水
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListTMgmtEnterpriseItemLimit>}
  */
  static async getPollutionLimitUsingGET(typeId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/pollutionAlarm/getPollutionLimit',
        data:{},
        params:{typeId},
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
  * @summary 获取处置状态统计
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {Number} [alarmFlag] 报警类别：1.离线报警 2.超限报警 3.异常报警
  * @param {String} [endTime] 终止时间
  * @param {Number} [itemId] 超标项目
  * @param {String} [searchContent] 检索内容
  * @param {String} [startTime] 起始时间
  * @param {Number} [status] 处理状态：1.未处置 2.处置中 3.待审核 4.已审核
  * @param {Number} [typeId] 监测类型：4.废气 5.废水 6.雨水
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataAlarmStatusVO>}
  */
  static async getPollutionStatusUsingGET(_limit,_page,alarmFlag,endTime,itemId,searchContent,startTime,status,typeId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/pollutionAlarm/getPollutionStatus',
        data:{},
        params:{_limit,_page,alarmFlag,endTime,itemId,searchContent,startTime,status,typeId},
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
  * @summary 获取单个报警详情
  * @param {Number} [alarmId] 报警id
  * @param {Number} [typeId] 监测类型id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataPollutionAlarmListVO>}
  */
  static async getPollutionAlarmDetailUsingGET(alarmId,typeId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/pollutionAlarm/pollutionAlarmDetail',
        data:{},
        params:{alarmId,typeId},
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
  * @summary 编辑监测因子限值
  * @param {UserModel.TMgmtEnterpriseItemLimit} [TMgmtEnterpriseItemLimit] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updatePollutionLimitUsingPOST(TMgmtEnterpriseItemLimit,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/pollutionAlarm/updatePollutionLimit',
        data:TMgmtEnterpriseItemLimit,
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

// class PollutionAlarmController static method properties bind
/**
* @description assignPollutionTaskUsingPOST url链接，包含baseURL
*/
PollutionAlarmController.assignPollutionTaskUsingPOST.fullPath=`${axios.defaults.baseURL}/pollutionAlarm/assignPollutionTask`
/**
* @description assignPollutionTaskUsingPOST url链接，不包含baseURL
*/
PollutionAlarmController.assignPollutionTaskUsingPOST.path=`/pollutionAlarm/assignPollutionTask`
/**
* @description checkPollutionTaskUsingPOST url链接，包含baseURL
*/
PollutionAlarmController.checkPollutionTaskUsingPOST.fullPath=`${axios.defaults.baseURL}/pollutionAlarm/checkPollutionTask`
/**
* @description checkPollutionTaskUsingPOST url链接，不包含baseURL
*/
PollutionAlarmController.checkPollutionTaskUsingPOST.path=`/pollutionAlarm/checkPollutionTask`
/**
* @description getEnterpriseStationDetailUsingGET url链接，包含baseURL
*/
PollutionAlarmController.getEnterpriseStationDetailUsingGET.fullPath=`${axios.defaults.baseURL}/pollutionAlarm/enterpriseStationDetail`
/**
* @description getEnterpriseStationDetailUsingGET url链接，不包含baseURL
*/
PollutionAlarmController.getEnterpriseStationDetailUsingGET.path=`/pollutionAlarm/enterpriseStationDetail`
/**
* @description getPollutionAlarmUsingGET url链接，包含baseURL
*/
PollutionAlarmController.getPollutionAlarmUsingGET.fullPath=`${axios.defaults.baseURL}/pollutionAlarm/getPollutionAlarm`
/**
* @description getPollutionAlarmUsingGET url链接，不包含baseURL
*/
PollutionAlarmController.getPollutionAlarmUsingGET.path=`/pollutionAlarm/getPollutionAlarm`
/**
* @description getPollutionItemUsingGET url链接，包含baseURL
*/
PollutionAlarmController.getPollutionItemUsingGET.fullPath=`${axios.defaults.baseURL}/pollutionAlarm/getPollutionItem`
/**
* @description getPollutionItemUsingGET url链接，不包含baseURL
*/
PollutionAlarmController.getPollutionItemUsingGET.path=`/pollutionAlarm/getPollutionItem`
/**
* @description getPollutionLimitUsingGET url链接，包含baseURL
*/
PollutionAlarmController.getPollutionLimitUsingGET.fullPath=`${axios.defaults.baseURL}/pollutionAlarm/getPollutionLimit`
/**
* @description getPollutionLimitUsingGET url链接，不包含baseURL
*/
PollutionAlarmController.getPollutionLimitUsingGET.path=`/pollutionAlarm/getPollutionLimit`
/**
* @description getPollutionStatusUsingGET url链接，包含baseURL
*/
PollutionAlarmController.getPollutionStatusUsingGET.fullPath=`${axios.defaults.baseURL}/pollutionAlarm/getPollutionStatus`
/**
* @description getPollutionStatusUsingGET url链接，不包含baseURL
*/
PollutionAlarmController.getPollutionStatusUsingGET.path=`/pollutionAlarm/getPollutionStatus`
/**
* @description getPollutionAlarmDetailUsingGET url链接，包含baseURL
*/
PollutionAlarmController.getPollutionAlarmDetailUsingGET.fullPath=`${axios.defaults.baseURL}/pollutionAlarm/pollutionAlarmDetail`
/**
* @description getPollutionAlarmDetailUsingGET url链接，不包含baseURL
*/
PollutionAlarmController.getPollutionAlarmDetailUsingGET.path=`/pollutionAlarm/pollutionAlarmDetail`
/**
* @description updatePollutionLimitUsingPOST url链接，包含baseURL
*/
PollutionAlarmController.updatePollutionLimitUsingPOST.fullPath=`${axios.defaults.baseURL}/pollutionAlarm/updatePollutionLimit`
/**
* @description updatePollutionLimitUsingPOST url链接，不包含baseURL
*/
PollutionAlarmController.updatePollutionLimitUsingPOST.path=`/pollutionAlarm/updatePollutionLimit`

export class PollutionAppAlarmController {
 
  /**
  * @summary 删除核查结果
  * @param {Number} [checkDetailId] 核查详情id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async deletePollutionCheckUsingPOST(checkDetailId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/pollutionAppAlarm/deletePollutionCheck',
        data:{},
        params:{checkDetailId},
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
  * @summary 结束核查操作
  * @param {Number} [alarmId] 报警id
  * @param {Number} [typeId] 监测类型id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async finishPollutionCheckUsingPOST(alarmId,typeId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/pollutionAppAlarm/finishPollutionCheck',
        data:{},
        params:{alarmId,typeId},
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
  * @summary 获取核查任务详情
  * @param {Number} [taskId] 任务id
  * @param {Number} [typeId] 监测类型id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataTaskDetailsVO>}
  */
  static async getPollutionTaskDetailsUsingGET(taskId,typeId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/pollutionAppAlarm/getPollutionTaskDetails',
        data:{},
        params:{taskId,typeId},
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
  * @summary 获取检查任务列表
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {String} [searchContent] 检索内容
  * @param {Number} [staffId] 用户id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageAppTaskListVO>}
  */
  static async getPollutionTaskListUsingGET(_limit,_page,searchContent,staffId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/pollutionAppAlarm/getPollutionTaskList',
        data:{},
        params:{_limit,_page,searchContent,staffId},
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
  * @summary 提交核查结果
  * @param {UserModel.CheckDetailsVO} [CheckDetailsVO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async submitPollutionCheckUsingPOST(CheckDetailsVO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/pollutionAppAlarm/submitPollutionCheck',
        data:CheckDetailsVO,
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
  * @summary 编辑核查结果
  * @param {UserModel.CheckDetailsVO} [CheckDetailsVO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updatePollutionCheckUsingPOST(CheckDetailsVO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/pollutionAppAlarm/updatePollutionCheck',
        data:CheckDetailsVO,
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
  * @summary 上传核查结果
  * @param {Number} [checkDetailId] 核查详情id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async uploadPollutionCheckUsingPOST(checkDetailId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/pollutionAppAlarm/uploadPollutionCheck',
        data:{},
        params:{checkDetailId},
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

// class PollutionAppAlarmController static method properties bind
/**
* @description deletePollutionCheckUsingPOST url链接，包含baseURL
*/
PollutionAppAlarmController.deletePollutionCheckUsingPOST.fullPath=`${axios.defaults.baseURL}/pollutionAppAlarm/deletePollutionCheck`
/**
* @description deletePollutionCheckUsingPOST url链接，不包含baseURL
*/
PollutionAppAlarmController.deletePollutionCheckUsingPOST.path=`/pollutionAppAlarm/deletePollutionCheck`
/**
* @description finishPollutionCheckUsingPOST url链接，包含baseURL
*/
PollutionAppAlarmController.finishPollutionCheckUsingPOST.fullPath=`${axios.defaults.baseURL}/pollutionAppAlarm/finishPollutionCheck`
/**
* @description finishPollutionCheckUsingPOST url链接，不包含baseURL
*/
PollutionAppAlarmController.finishPollutionCheckUsingPOST.path=`/pollutionAppAlarm/finishPollutionCheck`
/**
* @description getPollutionTaskDetailsUsingGET url链接，包含baseURL
*/
PollutionAppAlarmController.getPollutionTaskDetailsUsingGET.fullPath=`${axios.defaults.baseURL}/pollutionAppAlarm/getPollutionTaskDetails`
/**
* @description getPollutionTaskDetailsUsingGET url链接，不包含baseURL
*/
PollutionAppAlarmController.getPollutionTaskDetailsUsingGET.path=`/pollutionAppAlarm/getPollutionTaskDetails`
/**
* @description getPollutionTaskListUsingGET url链接，包含baseURL
*/
PollutionAppAlarmController.getPollutionTaskListUsingGET.fullPath=`${axios.defaults.baseURL}/pollutionAppAlarm/getPollutionTaskList`
/**
* @description getPollutionTaskListUsingGET url链接，不包含baseURL
*/
PollutionAppAlarmController.getPollutionTaskListUsingGET.path=`/pollutionAppAlarm/getPollutionTaskList`
/**
* @description submitPollutionCheckUsingPOST url链接，包含baseURL
*/
PollutionAppAlarmController.submitPollutionCheckUsingPOST.fullPath=`${axios.defaults.baseURL}/pollutionAppAlarm/submitPollutionCheck`
/**
* @description submitPollutionCheckUsingPOST url链接，不包含baseURL
*/
PollutionAppAlarmController.submitPollutionCheckUsingPOST.path=`/pollutionAppAlarm/submitPollutionCheck`
/**
* @description updatePollutionCheckUsingPOST url链接，包含baseURL
*/
PollutionAppAlarmController.updatePollutionCheckUsingPOST.fullPath=`${axios.defaults.baseURL}/pollutionAppAlarm/updatePollutionCheck`
/**
* @description updatePollutionCheckUsingPOST url链接，不包含baseURL
*/
PollutionAppAlarmController.updatePollutionCheckUsingPOST.path=`/pollutionAppAlarm/updatePollutionCheck`
/**
* @description uploadPollutionCheckUsingPOST url链接，包含baseURL
*/
PollutionAppAlarmController.uploadPollutionCheckUsingPOST.fullPath=`${axios.defaults.baseURL}/pollutionAppAlarm/uploadPollutionCheck`
/**
* @description uploadPollutionCheckUsingPOST url链接，不包含baseURL
*/
PollutionAppAlarmController.uploadPollutionCheckUsingPOST.path=`/pollutionAppAlarm/uploadPollutionCheck`

export class PollutionReportController {
 
  /**
  * @summary 导出历史监测数据
  * @param {Number} [dataType] 0：废气，1：污水，2：雨水
  * @param {String} [endTime] 终止时间
  * @param {Number} [reportType] 0：实时，1：分钟，2：小时，3：天
  * @param {String} [startTime] 起始时间
  * @param {Number} [stationId] 点位id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async downloadPollutionHistoryUsingGET(dataType,endTime,reportType,startTime,stationId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/pollutionReport/downloadPollutionHistory',
        data:{},
        params:{dataType,endTime,reportType,startTime,stationId},
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
  * @summary 导出监测数据报表
  * @param {String} [dataTime] 时间
  * @param {Number} [dataType] 0：废气，1：污水，2：雨水
  * @param {Number} [reportType] 0：日，1：月，2：年
  * @param {Number} [stationId] 点位id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async downloadPollutionReportUsingGET(dataTime,dataType,reportType,stationId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/pollutionReport/downloadPollutionReport',
        data:{},
        params:{dataTime,dataType,reportType,stationId},
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
  * @summary 获取站点信息
  * @param {Number} [dataType] 0：废气，1：污水，2：雨水
  * @param {Number} [enterpriseId] 企业id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListFrontSpinner>}
  */
  static async getEnterpriseStationUsingGET_1(dataType,enterpriseId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/pollutionReport/getEnterpriseStation',
        data:{},
        params:{dataType,enterpriseId},
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
  * @summary 查询历史监测数据
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {Number} [dataType] 0：废气，1：污水，2：雨水
  * @param {String} [endTime] 终止时间
  * @param {Number} [reportType] 0：实时，1：分钟，2：小时，3：天
  * @param {String} [searchContent] 检索内容
  * @param {String} [startTime] 起始时间
  * @param {Number} [stationId] 点位id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageReportDataVO>}
  */
  static async getPollutionHistoryUsingGET(_limit,_page,dataType,endTime,reportType,searchContent,startTime,stationId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/pollutionReport/getPollutionHistory',
        data:{},
        params:{_limit,_page,dataType,endTime,reportType,searchContent,startTime,stationId},
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
  * @summary 获取监测数据报表
  * @param {String} [dataTime] 时间
  * @param {Number} [dataType] 0：废气，1：污水，2：雨水
  * @param {Number} [reportType] 0：日，1：月，2：年
  * @param {Number} [stationId] 点位id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListReportDataVO>}
  */
  static async getPollutionReportUsingGET(dataTime,dataType,reportType,stationId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/pollutionReport/getPollutionReport',
        data:{},
        params:{dataTime,dataType,reportType,stationId},
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

// class PollutionReportController static method properties bind
/**
* @description downloadPollutionHistoryUsingGET url链接，包含baseURL
*/
PollutionReportController.downloadPollutionHistoryUsingGET.fullPath=`${axios.defaults.baseURL}/pollutionReport/downloadPollutionHistory`
/**
* @description downloadPollutionHistoryUsingGET url链接，不包含baseURL
*/
PollutionReportController.downloadPollutionHistoryUsingGET.path=`/pollutionReport/downloadPollutionHistory`
/**
* @description downloadPollutionReportUsingGET url链接，包含baseURL
*/
PollutionReportController.downloadPollutionReportUsingGET.fullPath=`${axios.defaults.baseURL}/pollutionReport/downloadPollutionReport`
/**
* @description downloadPollutionReportUsingGET url链接，不包含baseURL
*/
PollutionReportController.downloadPollutionReportUsingGET.path=`/pollutionReport/downloadPollutionReport`
/**
* @description getEnterpriseStationUsingGET_1 url链接，包含baseURL
*/
PollutionReportController.getEnterpriseStationUsingGET_1.fullPath=`${axios.defaults.baseURL}/pollutionReport/getEnterpriseStation`
/**
* @description getEnterpriseStationUsingGET_1 url链接，不包含baseURL
*/
PollutionReportController.getEnterpriseStationUsingGET_1.path=`/pollutionReport/getEnterpriseStation`
/**
* @description getPollutionHistoryUsingGET url链接，包含baseURL
*/
PollutionReportController.getPollutionHistoryUsingGET.fullPath=`${axios.defaults.baseURL}/pollutionReport/getPollutionHistory`
/**
* @description getPollutionHistoryUsingGET url链接，不包含baseURL
*/
PollutionReportController.getPollutionHistoryUsingGET.path=`/pollutionReport/getPollutionHistory`
/**
* @description getPollutionReportUsingGET url链接，包含baseURL
*/
PollutionReportController.getPollutionReportUsingGET.fullPath=`${axios.defaults.baseURL}/pollutionReport/getPollutionReport`
/**
* @description getPollutionReportUsingGET url链接，不包含baseURL
*/
PollutionReportController.getPollutionReportUsingGET.path=`/pollutionReport/getPollutionReport`

export class PollutionStatisticsController {
 
  /**
  * @summary 获取污染源在线监测预警分析
  * @param {Number} [periodFlag] 时间周期 1.24小时 2.一周 3.一个月 4.三个月 5.一年
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataPollutionAlarmChartVO>}
  */
  static async getAlarmDataUsingGET(periodFlag,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/pollutionStatistics/getAlarmData',
        data:{},
        params:{periodFlag},
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
  * @summary 获取污染源行业分布情况
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListIndustryDistributionVO>}
  */
  static async getDistributionUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/pollutionStatistics/getDistribution',
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
  * @summary 获取污染源在线监测
  * @param {Number} [pageNum] 0-3
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataPollutionMonitorVO>}
  */
  static async getMonitorDataUsingGET(pageNum,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/pollutionStatistics/getMonitorData',
        data:{},
        params:{pageNum},
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
  * @summary 获取污染源一张图企业监测详情
  * @param {Number} [enterpriseId] 企业id
  * @param {Number} [pageNum] 0-3
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataEnterprisePointDetailsVO>}
  */
  static async getPointDetailsUsingGET(enterpriseId,pageNum,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/pollutionStatistics/getPointDetails',
        data:{},
        params:{enterpriseId,pageNum},
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
  * @summary 获取污染源统计
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataPollutionStatisticsVO>}
  */
  static async getPolluteStatUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/pollutionStatistics/getPolluteStat',
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
  * @summary 获取污染源清单
  * @param {Number} [dataTypeId] 污染类型 4.废气 5.废水 6.雨水
  * @param {Number} [typeId] 重点监管企业类型
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListPollutionEnterpriseListVO>}
  */
  static async getPollutionEnterpriseUsingGET(dataTypeId,typeId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/pollutionStatistics/getPollutionEnterprise',
        data:{},
        params:{dataTypeId,typeId},
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
  * @summary 获取污染源一张图地图信息
  * @param {Number} [pageNum] 0-3
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListEnterpriseMapVO>}
  */
  static async getPollutionMapUsingGET(pageNum,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/pollutionStatistics/getPollutionMap',
        data:{},
        params:{pageNum},
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

// class PollutionStatisticsController static method properties bind
/**
* @description getAlarmDataUsingGET url链接，包含baseURL
*/
PollutionStatisticsController.getAlarmDataUsingGET.fullPath=`${axios.defaults.baseURL}/pollutionStatistics/getAlarmData`
/**
* @description getAlarmDataUsingGET url链接，不包含baseURL
*/
PollutionStatisticsController.getAlarmDataUsingGET.path=`/pollutionStatistics/getAlarmData`
/**
* @description getDistributionUsingGET url链接，包含baseURL
*/
PollutionStatisticsController.getDistributionUsingGET.fullPath=`${axios.defaults.baseURL}/pollutionStatistics/getDistribution`
/**
* @description getDistributionUsingGET url链接，不包含baseURL
*/
PollutionStatisticsController.getDistributionUsingGET.path=`/pollutionStatistics/getDistribution`
/**
* @description getMonitorDataUsingGET url链接，包含baseURL
*/
PollutionStatisticsController.getMonitorDataUsingGET.fullPath=`${axios.defaults.baseURL}/pollutionStatistics/getMonitorData`
/**
* @description getMonitorDataUsingGET url链接，不包含baseURL
*/
PollutionStatisticsController.getMonitorDataUsingGET.path=`/pollutionStatistics/getMonitorData`
/**
* @description getPointDetailsUsingGET url链接，包含baseURL
*/
PollutionStatisticsController.getPointDetailsUsingGET.fullPath=`${axios.defaults.baseURL}/pollutionStatistics/getPointDetails`
/**
* @description getPointDetailsUsingGET url链接，不包含baseURL
*/
PollutionStatisticsController.getPointDetailsUsingGET.path=`/pollutionStatistics/getPointDetails`
/**
* @description getPolluteStatUsingGET url链接，包含baseURL
*/
PollutionStatisticsController.getPolluteStatUsingGET.fullPath=`${axios.defaults.baseURL}/pollutionStatistics/getPolluteStat`
/**
* @description getPolluteStatUsingGET url链接，不包含baseURL
*/
PollutionStatisticsController.getPolluteStatUsingGET.path=`/pollutionStatistics/getPolluteStat`
/**
* @description getPollutionEnterpriseUsingGET url链接，包含baseURL
*/
PollutionStatisticsController.getPollutionEnterpriseUsingGET.fullPath=`${axios.defaults.baseURL}/pollutionStatistics/getPollutionEnterprise`
/**
* @description getPollutionEnterpriseUsingGET url链接，不包含baseURL
*/
PollutionStatisticsController.getPollutionEnterpriseUsingGET.path=`/pollutionStatistics/getPollutionEnterprise`
/**
* @description getPollutionMapUsingGET url链接，包含baseURL
*/
PollutionStatisticsController.getPollutionMapUsingGET.fullPath=`${axios.defaults.baseURL}/pollutionStatistics/getPollutionMap`
/**
* @description getPollutionMapUsingGET url链接，不包含baseURL
*/
PollutionStatisticsController.getPollutionMapUsingGET.path=`/pollutionStatistics/getPollutionMap`

export class Sensitive {
 
  /**
  * @summary 新增敏感点
  * @param {UserModel.SensitiveDTO} [SensitiveDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async addSensitiveUsingPOST(SensitiveDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/sensitive/add',
        data:SensitiveDTO,
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
  * @summary 删除敏感点
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async deleteSensitiveUsingDELETE(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/sensitive/delete',
        data:{},
        params:{id},
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
  * @summary 敏感点功能区类型
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListTreeDictDTO>}
  */
  static async listSensitiveTypeUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/sensitive/dict/type',
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
  * @summary 获取敏感点
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataSensitiveDTO>}
  */
  static async getSensitiveUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/sensitive/get',
        data:{},
        params:{id},
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
  * @summary 敏感点列表
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {String} [searchContent] 检索内容
  * @param {Number} [subTypeId] 分类id
  * @param {Number} [typeId] 类型id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageSensitiveDTO>}
  */
  static async pageSensitiveUsingGET(_limit,_page,searchContent,subTypeId,typeId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/sensitive/page',
        data:{},
        params:{_limit,_page,searchContent,subTypeId,typeId},
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
  * @summary 更新敏感点
  * @param {UserModel.SensitiveDTO} [SensitiveDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updateSensitiveUsingPUT(SensitiveDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/sensitive/update',
        data:SensitiveDTO,
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

// class Sensitive static method properties bind
/**
* @description addSensitiveUsingPOST url链接，包含baseURL
*/
Sensitive.addSensitiveUsingPOST.fullPath=`${axios.defaults.baseURL}/sensitive/add`
/**
* @description addSensitiveUsingPOST url链接，不包含baseURL
*/
Sensitive.addSensitiveUsingPOST.path=`/sensitive/add`
/**
* @description deleteSensitiveUsingDELETE url链接，包含baseURL
*/
Sensitive.deleteSensitiveUsingDELETE.fullPath=`${axios.defaults.baseURL}/sensitive/delete`
/**
* @description deleteSensitiveUsingDELETE url链接，不包含baseURL
*/
Sensitive.deleteSensitiveUsingDELETE.path=`/sensitive/delete`
/**
* @description listSensitiveTypeUsingGET url链接，包含baseURL
*/
Sensitive.listSensitiveTypeUsingGET.fullPath=`${axios.defaults.baseURL}/sensitive/dict/type`
/**
* @description listSensitiveTypeUsingGET url链接，不包含baseURL
*/
Sensitive.listSensitiveTypeUsingGET.path=`/sensitive/dict/type`
/**
* @description getSensitiveUsingGET url链接，包含baseURL
*/
Sensitive.getSensitiveUsingGET.fullPath=`${axios.defaults.baseURL}/sensitive/get`
/**
* @description getSensitiveUsingGET url链接，不包含baseURL
*/
Sensitive.getSensitiveUsingGET.path=`/sensitive/get`
/**
* @description pageSensitiveUsingGET url链接，包含baseURL
*/
Sensitive.pageSensitiveUsingGET.fullPath=`${axios.defaults.baseURL}/sensitive/page`
/**
* @description pageSensitiveUsingGET url链接，不包含baseURL
*/
Sensitive.pageSensitiveUsingGET.path=`/sensitive/page`
/**
* @description updateSensitiveUsingPUT url链接，包含baseURL
*/
Sensitive.updateSensitiveUsingPUT.fullPath=`${axios.defaults.baseURL}/sensitive/update`
/**
* @description updateSensitiveUsingPUT url链接，不包含baseURL
*/
Sensitive.updateSensitiveUsingPUT.path=`/sensitive/update`

export class Spread {
 
  /**
  * @summary 扩散模型数据列表（烟团）
  * @param {Number} [chimneyHeight] 排放点高度（m）/泄露源高度（m）
  * @param {Number} [gasEmission] 排放浓度（kg/m³）/  泄露量（kg）
  * @param {Number} [interval] 时间间隔（s）
  * @param {Number} [itemId] 扩散因子id
  * @param {Number} [latitude1] 排放点纬度（30.200321）
  * @param {Number} [longitude1] 排放点经度（114.087198）
  * @param {Number} [modeId] 选点方式id
  * @param {Number} [roughness] 地面粗糙度
  * @param {Number} [spreadHeight] 扩散面高度（m）
  * @param {String} [stability] 地面粗糙度
  * @param {Number} [windDirect] 风向（°）
  * @param {Number} [windSpeed] 风速（m/s）
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataSpreadListDTO>}
  */
  static async listData4PlumeModelUsingGET(chimneyHeight,gasEmission,interval,itemId,latitude1,longitude1,modeId,roughness,spreadHeight,stability,windDirect,windSpeed,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/spread/plume/list',
        data:{},
        params:{chimneyHeight,gasEmission,interval,itemId,latitude1,longitude1,modeId,roughness,spreadHeight,stability,windDirect,windSpeed},
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
  * @summary 扩散模型数据列表（烟羽）
  * @param {Number} [chimneyHeight] 排放点高度（m）/泄露源高度（m）
  * @param {Number} [gasEmission] 排放浓度（kg/m³）/  泄露量（kg）
  * @param {Number} [itemId] 扩散因子id
  * @param {Number} [latitude1] 排放点纬度（30.200321）
  * @param {Number} [longitude1] 排放点经度（114.087198）
  * @param {Number} [modeId] 选点方式id
  * @param {Number} [roughness] 地面粗糙度
  * @param {Number} [spreadHeight] 扩散面高度（m）
  * @param {String} [stability] 地面粗糙度
  * @param {Number} [windDirect] 风向（°）
  * @param {Number} [windSpeed] 风速（m/s）
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataSpreadListDTO>}
  */
  static async listData4PuffModelUsingGET(chimneyHeight,gasEmission,itemId,latitude1,longitude1,modeId,roughness,spreadHeight,stability,windDirect,windSpeed,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/spread/puff/list',
        data:{},
        params:{chimneyHeight,gasEmission,itemId,latitude1,longitude1,modeId,roughness,spreadHeight,stability,windDirect,windSpeed},
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
  * @summary 获取指定点位的浓度（烟羽）
  * @param {Number} [chimneyHeight] 排放点高度（m）/泄露源高度（m）
  * @param {Number} [gasEmission] 排放浓度（kg/m³）/  泄露量（kg）
  * @param {Number} [itemId] 扩散因子id
  * @param {Number} [latitude1] 排放点纬度（30.200321）
  * @param {Number} [latitude2] 目标点纬度
  * @param {Number} [longitude1] 排放点经度（114.087198）
  * @param {Number} [longitude2] 目标点经度
  * @param {Number} [modeId] 选点方式id
  * @param {Number} [roughness] 地面粗糙度
  * @param {Number} [spreadHeight] 扩散面高度（m）
  * @param {String} [stability] 地面粗糙度
  * @param {Number} [windDirect] 风向（°）
  * @param {Number} [windSpeed] 风速（m/s）
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataSpreadDataDTO>}
  */
  static async pointData4PuffModelUsingGET(chimneyHeight,gasEmission,itemId,latitude1,latitude2,longitude1,longitude2,modeId,roughness,spreadHeight,stability,windDirect,windSpeed,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/spread/puff/point',
        data:{},
        params:{chimneyHeight,gasEmission,itemId,latitude1,latitude2,longitude1,longitude2,modeId,roughness,spreadHeight,stability,windDirect,windSpeed},
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

// class Spread static method properties bind
/**
* @description listData4PlumeModelUsingGET url链接，包含baseURL
*/
Spread.listData4PlumeModelUsingGET.fullPath=`${axios.defaults.baseURL}/spread/plume/list`
/**
* @description listData4PlumeModelUsingGET url链接，不包含baseURL
*/
Spread.listData4PlumeModelUsingGET.path=`/spread/plume/list`
/**
* @description listData4PuffModelUsingGET url链接，包含baseURL
*/
Spread.listData4PuffModelUsingGET.fullPath=`${axios.defaults.baseURL}/spread/puff/list`
/**
* @description listData4PuffModelUsingGET url链接，不包含baseURL
*/
Spread.listData4PuffModelUsingGET.path=`/spread/puff/list`
/**
* @description pointData4PuffModelUsingGET url链接，包含baseURL
*/
Spread.pointData4PuffModelUsingGET.fullPath=`${axios.defaults.baseURL}/spread/puff/point`
/**
* @description pointData4PuffModelUsingGET url链接，不包含baseURL
*/
Spread.pointData4PuffModelUsingGET.path=`/spread/puff/point`

export class Station {
 
  /**
  * @summary 新增站点
  * @param {UserModel.StationDTO} [StationDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async addStationUsingPOST(StationDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/station/add',
        data:StationDTO,
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
  * @summary 删除站点
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async deleteStationUsingDELETE(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/station/delete',
        data:{},
        params:{id},
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
  * @summary 获取站点
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataStationDTO>}
  */
  static async getStationUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/station/get',
        data:{},
        params:{id},
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
  * @summary 新增监测项目
  * @param {UserModel.StationItemDTO} [StationItemDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async addStationItemUsingPOST(StationItemDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/station/item/add',
        data:StationItemDTO,
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
  * @summary 新增监测项目（批量）
  * @param {array} [array] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async addStationItemBatchUsingPOST(array,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/station/item/add/batch',
        data:array,
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
  * @summary 删除监测项目
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async deleteStationItemUsingDELETE(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/station/item/delete',
        data:{},
        params:{id},
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
  * @summary 获取监测项目
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataStationItemDTO>}
  */
  static async getStationItemUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/station/item/get',
        data:{},
        params:{id},
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
  * @summary 监测项目列表
  * @param {Number} [stationId] stationId
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListStationItemDTO>}
  */
  static async listStationItemUsingGET(stationId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/station/item/list',
        data:{},
        params:{stationId},
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
  * @summary 更新监测项目
  * @param {UserModel.StationItemDTO} [StationItemDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updateStationItemUsingPUT(StationItemDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/station/item/update',
        data:StationItemDTO,
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
  * @summary 新增模板/模板条目
  * @param {UserModel.StationModelDTO} [StationModelDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async addStationModelUsingPOST(StationModelDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/station/model/add',
        data:StationModelDTO,
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
  * @summary 删除模板/模板条目
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async deleteStationModelUsingDELETE(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/station/model/delete',
        data:{},
        params:{id},
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
  * @summary 模板项目列表
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListStationModelDTO>}
  */
  static async listStationModelUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/station/model/list',
        data:{},
        params:{id},
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
  * @summary 模板列表（分页）
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {String} [searchContent] 检索内容
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageStationModelDTO>}
  */
  static async pageStationModelUsingGET(_limit,_page,searchContent,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/station/model/page',
        data:{},
        params:{_limit,_page,searchContent},
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
  * @summary 站点信息列表
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {Number} [monitorTypeId] 监测类型id（1：大气监测，2：水质监测，3：排口监测）
  * @param {String} [searchContent] 检索内容
  * @param {Number} [stationTypeId] 站点类型id
  * @param {Number} [waterTypeId] 水体类型id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageStationDTO>}
  */
  static async pageStationUsingGET(_limit,_page,monitorTypeId,searchContent,stationTypeId,waterTypeId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/station/page',
        data:{},
        params:{_limit,_page,monitorTypeId,searchContent,stationTypeId,waterTypeId},
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
  * @summary 站点类型下拉
  * @param {Number} [monitorTypeId] 1：大气监测，2：水质监测，3：排口监测
  * @param {Number} [waterTypeId] 水体类型（仅水质监测）
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListFrontSpinner>}
  */
  static async listStationTypeUsingGET(monitorTypeId,waterTypeId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/station/type',
        data:{},
        params:{monitorTypeId,waterTypeId},
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
  * @summary 更新站点
  * @param {UserModel.StationDTO} [StationDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updateStationUsingPUT(StationDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/station/update',
        data:StationDTO,
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

// class Station static method properties bind
/**
* @description addStationUsingPOST url链接，包含baseURL
*/
Station.addStationUsingPOST.fullPath=`${axios.defaults.baseURL}/station/add`
/**
* @description addStationUsingPOST url链接，不包含baseURL
*/
Station.addStationUsingPOST.path=`/station/add`
/**
* @description deleteStationUsingDELETE url链接，包含baseURL
*/
Station.deleteStationUsingDELETE.fullPath=`${axios.defaults.baseURL}/station/delete`
/**
* @description deleteStationUsingDELETE url链接，不包含baseURL
*/
Station.deleteStationUsingDELETE.path=`/station/delete`
/**
* @description getStationUsingGET url链接，包含baseURL
*/
Station.getStationUsingGET.fullPath=`${axios.defaults.baseURL}/station/get`
/**
* @description getStationUsingGET url链接，不包含baseURL
*/
Station.getStationUsingGET.path=`/station/get`
/**
* @description addStationItemUsingPOST url链接，包含baseURL
*/
Station.addStationItemUsingPOST.fullPath=`${axios.defaults.baseURL}/station/item/add`
/**
* @description addStationItemUsingPOST url链接，不包含baseURL
*/
Station.addStationItemUsingPOST.path=`/station/item/add`
/**
* @description addStationItemBatchUsingPOST url链接，包含baseURL
*/
Station.addStationItemBatchUsingPOST.fullPath=`${axios.defaults.baseURL}/station/item/add/batch`
/**
* @description addStationItemBatchUsingPOST url链接，不包含baseURL
*/
Station.addStationItemBatchUsingPOST.path=`/station/item/add/batch`
/**
* @description deleteStationItemUsingDELETE url链接，包含baseURL
*/
Station.deleteStationItemUsingDELETE.fullPath=`${axios.defaults.baseURL}/station/item/delete`
/**
* @description deleteStationItemUsingDELETE url链接，不包含baseURL
*/
Station.deleteStationItemUsingDELETE.path=`/station/item/delete`
/**
* @description getStationItemUsingGET url链接，包含baseURL
*/
Station.getStationItemUsingGET.fullPath=`${axios.defaults.baseURL}/station/item/get`
/**
* @description getStationItemUsingGET url链接，不包含baseURL
*/
Station.getStationItemUsingGET.path=`/station/item/get`
/**
* @description listStationItemUsingGET url链接，包含baseURL
*/
Station.listStationItemUsingGET.fullPath=`${axios.defaults.baseURL}/station/item/list`
/**
* @description listStationItemUsingGET url链接，不包含baseURL
*/
Station.listStationItemUsingGET.path=`/station/item/list`
/**
* @description updateStationItemUsingPUT url链接，包含baseURL
*/
Station.updateStationItemUsingPUT.fullPath=`${axios.defaults.baseURL}/station/item/update`
/**
* @description updateStationItemUsingPUT url链接，不包含baseURL
*/
Station.updateStationItemUsingPUT.path=`/station/item/update`
/**
* @description addStationModelUsingPOST url链接，包含baseURL
*/
Station.addStationModelUsingPOST.fullPath=`${axios.defaults.baseURL}/station/model/add`
/**
* @description addStationModelUsingPOST url链接，不包含baseURL
*/
Station.addStationModelUsingPOST.path=`/station/model/add`
/**
* @description deleteStationModelUsingDELETE url链接，包含baseURL
*/
Station.deleteStationModelUsingDELETE.fullPath=`${axios.defaults.baseURL}/station/model/delete`
/**
* @description deleteStationModelUsingDELETE url链接，不包含baseURL
*/
Station.deleteStationModelUsingDELETE.path=`/station/model/delete`
/**
* @description listStationModelUsingGET url链接，包含baseURL
*/
Station.listStationModelUsingGET.fullPath=`${axios.defaults.baseURL}/station/model/list`
/**
* @description listStationModelUsingGET url链接，不包含baseURL
*/
Station.listStationModelUsingGET.path=`/station/model/list`
/**
* @description pageStationModelUsingGET url链接，包含baseURL
*/
Station.pageStationModelUsingGET.fullPath=`${axios.defaults.baseURL}/station/model/page`
/**
* @description pageStationModelUsingGET url链接，不包含baseURL
*/
Station.pageStationModelUsingGET.path=`/station/model/page`
/**
* @description pageStationUsingGET url链接，包含baseURL
*/
Station.pageStationUsingGET.fullPath=`${axios.defaults.baseURL}/station/page`
/**
* @description pageStationUsingGET url链接，不包含baseURL
*/
Station.pageStationUsingGET.path=`/station/page`
/**
* @description listStationTypeUsingGET url链接，包含baseURL
*/
Station.listStationTypeUsingGET.fullPath=`${axios.defaults.baseURL}/station/type`
/**
* @description listStationTypeUsingGET url链接，不包含baseURL
*/
Station.listStationTypeUsingGET.path=`/station/type`
/**
* @description updateStationUsingPUT url链接，包含baseURL
*/
Station.updateStationUsingPUT.fullPath=`${axios.defaults.baseURL}/station/update`
/**
* @description updateStationUsingPUT url链接，不包含baseURL
*/
Station.updateStationUsingPUT.path=`/station/update`

export class Water {
 
  /**
  * @summary 污染日历
  * @param {String} [itemKey] 监测项目编号,1 水质类别,w01001 ph,w01014 电导率,w01009 溶解氧,w01003 浑浊度,w01010 水温,w01018 化学需氧量（CODcr）,w01019 高锰酸盐指数 (CODmn),w21003 氨氮,w21011 总磷,w21001 总氮
  * @param {String} [stationId] 点位编号
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataListPollutionCalendarDTO>}
  */
  static async getPollutionCalendarUsingGET(itemKey,stationId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/statistics/calendar/pollution',
        data:{},
        params:{itemKey,stationId},
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
  * @summary 水质对比分析
  * @param {String} [endTime] 格式：年-月-日
  * @param {String} [itemKey] 监测项目编号,1 水质类别,w01001 ph,w01014 电导率,w01009 溶解氧,w01003 浑浊度,w01010 水温,w01018 化学需氧量（CODcr）,w01019 高锰酸盐指数 (CODmn),w21003 氨氮,w21011 总磷,w21001 总氮
  * @param {String} [page] 页码
  * @param {String} [pageSize] 页长
  * @param {String} [startTime] 格式：年-月-日
  * @param {String} [stationIds] 点位编号列表
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataWaterCompareDTO>}
  */
  static async getCompareUsingGET(endTime,itemKey,page,pageSize,startTime,stationIds,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/statistics/compare',
        data:{},
        params:{endTime,itemKey,page,pageSize,startTime,stationIds},
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
  * @summary 同比环比
  * @param {String} [itemKey] 监测项目编号,1 水质类别,w01001 ph,w01014 电导率,w01009 溶解氧,w01003 浑浊度,w01010 水温,w01018 化学需氧量（CODcr）,w01019 高锰酸盐指数 (CODmn),w21003 氨氮,w21011 总磷,w21001 总氮
  * @param {String} [stationId] 点位ID
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListContrastDTO>}
  */
  static async getContrastListUsingGET(itemKey,stationId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/statistics/contrast',
        data:{},
        params:{itemKey,stationId},
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
  * @summary 获取点位列表
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataListTmgmtStation>}
  */
  static async getStationListUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/statistics/station/list',
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
  * @summary 水污染变化规律分析
  * @param {String} [dateId] 时间段标记，1 最近24小时，2 最近1周，3 最近1个月，4 最近3个月，5 最近1年
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataListCommonAxisVO>}
  */
  static async getPollutionTendencyUsingGET(dateId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/statistics/tendency/pollution',
        data:{},
        params:{dateId},
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
  * @summary 统计分析中的类型列表
  * @param {String} [stationIds] 点位编号列表
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataListMonitorItemVO>}
  */
  static async getWaterTypesUsingGET(stationIds,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/statistics/types',
        data:{},
        params:{stationIds},
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
  * @summary 排污口水质监测
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataWaterMonitoringDTO>}
  */
  static async getMonitoringUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/water/monitoring',
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
  * @summary 点位超标次数排名
  * @param {String} [dateId] 时间段标记，1 最近24小时，2 最近1周，3 最近1个月，4 最近3个月，5 最近1年
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataListWaterMonitoringAlarmRankingDTO>}
  */
  static async getAlarmRankingUsingGET(dateId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/water/monitoring/alarm/ranking',
        data:{},
        params:{dateId},
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
  * @summary 超标报警项目占比分析
  * @param {String} [dateId] 时间段标记，1 最近24小时，2 最近1周，3 最近1个月，4 最近3个月，5 最近1年
  * @param {String} [monitorTypeId] 监测点类型，1 大气监测，2 水质监测断面，3 排污口
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataListCommonVO>}
  */
  static async getAlarmRatioUsingGET(dateId,monitorTypeId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/water/monitoring/alarm/ratio',
        data:{},
        params:{dateId,monitorTypeId},
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
  * @summary 监测报警频率变化趋势
  * @param {String} [dateId] 时间段标记，1 最近24小时，2 最近1周，3 最近1个月，4 最近3个月，5 最近1年
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataListCommonY1AxisVO>}
  */
  static async getAlarmTendencyUsingGET(dateId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/water/monitoring/alarm/tendency',
        data:{},
        params:{dateId},
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
  * @summary 水环境质量
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataWaterQualityDTO>}
  */
  static async getQualityUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/water/quality',
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
  * @summary 水质类别字典列表
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataListFrontSpinner>}
  */
  static async getQualityTypesUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/water/quality/types',
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
  * @summary 获取企业单个点位详情
  * @param {String} [enterpriseId] 企业ID
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataEnterpriseDetailDTO>}
  */
  static async getEnterpriseDetailUsingGET(enterpriseId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/water/station/enterprise/detail',
        data:{},
        params:{enterpriseId},
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
  * @summary 获取企业点位列表
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListEnterpriseInfoDTO>}
  */
  static async getEnterpriseStationListUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/water/station/enterprise/list',
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
  * @summary 获取水质和排口单个点位图表数据详情
  * @param {String} [itemKey] 监测项目编号
  * @param {String} [waterStationId] 水质或者排口点位ID
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListCommonAxisVO>}
  */
  static async getWaterStationChartDetailUsingGET(itemKey,waterStationId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/water/station/water/detail/chart',
        data:{},
        params:{itemKey,waterStationId},
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
  * @summary 获取水质和排口单个点位实时数据详情
  * @param {String} [waterStationId] 水质或者排口点位ID
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataWaterStationRealDetailDTO>}
  */
  static async getWaterStationRealDetailUsingGET(waterStationId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/water/station/water/detail/real',
        data:{},
        params:{waterStationId},
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
  * @summary 获取水质和排口点位列表
  * @param {String} [monitorTypeId] 监测点类型，1 大气监测，2 水质监测断面，3 排污口
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListStationDTO>}
  */
  static async getWaterStationListUsingGET(monitorTypeId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/water/station/water/list',
        data:{},
        params:{monitorTypeId},
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
  * @summary 水质状况字典列表
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataListFrontSpinner>}
  */
  static async getWaterStatusTypesUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/water/status/types',
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
  * @summary 水质变化趋势
  * @param {String} [dateId] 时间段标记，1 最近24小时，2 最近1周，3 最近1个月，4 最近3个月，5 最近1年
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataListCommonAxisVO>}
  */
  static async getTendencyUsingGET(dateId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/water/tendency',
        data:{},
        params:{dateId},
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

// class Water static method properties bind
/**
* @description getPollutionCalendarUsingGET url链接，包含baseURL
*/
Water.getPollutionCalendarUsingGET.fullPath=`${axios.defaults.baseURL}/statistics/calendar/pollution`
/**
* @description getPollutionCalendarUsingGET url链接，不包含baseURL
*/
Water.getPollutionCalendarUsingGET.path=`/statistics/calendar/pollution`
/**
* @description getCompareUsingGET url链接，包含baseURL
*/
Water.getCompareUsingGET.fullPath=`${axios.defaults.baseURL}/statistics/compare`
/**
* @description getCompareUsingGET url链接，不包含baseURL
*/
Water.getCompareUsingGET.path=`/statistics/compare`
/**
* @description getContrastListUsingGET url链接，包含baseURL
*/
Water.getContrastListUsingGET.fullPath=`${axios.defaults.baseURL}/statistics/contrast`
/**
* @description getContrastListUsingGET url链接，不包含baseURL
*/
Water.getContrastListUsingGET.path=`/statistics/contrast`
/**
* @description getStationListUsingGET url链接，包含baseURL
*/
Water.getStationListUsingGET.fullPath=`${axios.defaults.baseURL}/statistics/station/list`
/**
* @description getStationListUsingGET url链接，不包含baseURL
*/
Water.getStationListUsingGET.path=`/statistics/station/list`
/**
* @description getPollutionTendencyUsingGET url链接，包含baseURL
*/
Water.getPollutionTendencyUsingGET.fullPath=`${axios.defaults.baseURL}/statistics/tendency/pollution`
/**
* @description getPollutionTendencyUsingGET url链接，不包含baseURL
*/
Water.getPollutionTendencyUsingGET.path=`/statistics/tendency/pollution`
/**
* @description getWaterTypesUsingGET url链接，包含baseURL
*/
Water.getWaterTypesUsingGET.fullPath=`${axios.defaults.baseURL}/statistics/types`
/**
* @description getWaterTypesUsingGET url链接，不包含baseURL
*/
Water.getWaterTypesUsingGET.path=`/statistics/types`
/**
* @description getMonitoringUsingGET url链接，包含baseURL
*/
Water.getMonitoringUsingGET.fullPath=`${axios.defaults.baseURL}/water/monitoring`
/**
* @description getMonitoringUsingGET url链接，不包含baseURL
*/
Water.getMonitoringUsingGET.path=`/water/monitoring`
/**
* @description getAlarmRankingUsingGET url链接，包含baseURL
*/
Water.getAlarmRankingUsingGET.fullPath=`${axios.defaults.baseURL}/water/monitoring/alarm/ranking`
/**
* @description getAlarmRankingUsingGET url链接，不包含baseURL
*/
Water.getAlarmRankingUsingGET.path=`/water/monitoring/alarm/ranking`
/**
* @description getAlarmRatioUsingGET url链接，包含baseURL
*/
Water.getAlarmRatioUsingGET.fullPath=`${axios.defaults.baseURL}/water/monitoring/alarm/ratio`
/**
* @description getAlarmRatioUsingGET url链接，不包含baseURL
*/
Water.getAlarmRatioUsingGET.path=`/water/monitoring/alarm/ratio`
/**
* @description getAlarmTendencyUsingGET url链接，包含baseURL
*/
Water.getAlarmTendencyUsingGET.fullPath=`${axios.defaults.baseURL}/water/monitoring/alarm/tendency`
/**
* @description getAlarmTendencyUsingGET url链接，不包含baseURL
*/
Water.getAlarmTendencyUsingGET.path=`/water/monitoring/alarm/tendency`
/**
* @description getQualityUsingGET url链接，包含baseURL
*/
Water.getQualityUsingGET.fullPath=`${axios.defaults.baseURL}/water/quality`
/**
* @description getQualityUsingGET url链接，不包含baseURL
*/
Water.getQualityUsingGET.path=`/water/quality`
/**
* @description getQualityTypesUsingGET url链接，包含baseURL
*/
Water.getQualityTypesUsingGET.fullPath=`${axios.defaults.baseURL}/water/quality/types`
/**
* @description getQualityTypesUsingGET url链接，不包含baseURL
*/
Water.getQualityTypesUsingGET.path=`/water/quality/types`
/**
* @description getEnterpriseDetailUsingGET url链接，包含baseURL
*/
Water.getEnterpriseDetailUsingGET.fullPath=`${axios.defaults.baseURL}/water/station/enterprise/detail`
/**
* @description getEnterpriseDetailUsingGET url链接，不包含baseURL
*/
Water.getEnterpriseDetailUsingGET.path=`/water/station/enterprise/detail`
/**
* @description getEnterpriseStationListUsingGET url链接，包含baseURL
*/
Water.getEnterpriseStationListUsingGET.fullPath=`${axios.defaults.baseURL}/water/station/enterprise/list`
/**
* @description getEnterpriseStationListUsingGET url链接，不包含baseURL
*/
Water.getEnterpriseStationListUsingGET.path=`/water/station/enterprise/list`
/**
* @description getWaterStationChartDetailUsingGET url链接，包含baseURL
*/
Water.getWaterStationChartDetailUsingGET.fullPath=`${axios.defaults.baseURL}/water/station/water/detail/chart`
/**
* @description getWaterStationChartDetailUsingGET url链接，不包含baseURL
*/
Water.getWaterStationChartDetailUsingGET.path=`/water/station/water/detail/chart`
/**
* @description getWaterStationRealDetailUsingGET url链接，包含baseURL
*/
Water.getWaterStationRealDetailUsingGET.fullPath=`${axios.defaults.baseURL}/water/station/water/detail/real`
/**
* @description getWaterStationRealDetailUsingGET url链接，不包含baseURL
*/
Water.getWaterStationRealDetailUsingGET.path=`/water/station/water/detail/real`
/**
* @description getWaterStationListUsingGET url链接，包含baseURL
*/
Water.getWaterStationListUsingGET.fullPath=`${axios.defaults.baseURL}/water/station/water/list`
/**
* @description getWaterStationListUsingGET url链接，不包含baseURL
*/
Water.getWaterStationListUsingGET.path=`/water/station/water/list`
/**
* @description getWaterStatusTypesUsingGET url链接，包含baseURL
*/
Water.getWaterStatusTypesUsingGET.fullPath=`${axios.defaults.baseURL}/water/status/types`
/**
* @description getWaterStatusTypesUsingGET url链接，不包含baseURL
*/
Water.getWaterStatusTypesUsingGET.path=`/water/status/types`
/**
* @description getTendencyUsingGET url链接，包含baseURL
*/
Water.getTendencyUsingGET.fullPath=`${axios.defaults.baseURL}/water/tendency`
/**
* @description getTendencyUsingGET url链接，不包含baseURL
*/
Water.getTendencyUsingGET.path=`/water/tendency`

export class Team {
 
  /**
  * @summary 新增队伍
  * @param {UserModel.TeamDTO} [TeamDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async addTeamUsingPOST(TeamDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/team/add',
        data:TeamDTO,
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
  * @summary 删除队伍
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async deleteTeamUsingDELETE(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/team/delete',
        data:{},
        params:{id},
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
  * @summary 新增队伍装备
  * @param {UserModel.TeamFacilityDTO} [TeamFacilityDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async addTeamFacilityUsingPOST(TeamFacilityDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/team/facility/add',
        data:TeamFacilityDTO,
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
  * @summary 删除队伍装备
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async deleteTeamFacilityUsingDELETE(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/team/facility/delete',
        data:{},
        params:{id},
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
  * @summary 获取队伍装备
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataTeamFacilityDTO>}
  */
  static async getTeamFacilityUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/team/facility/get',
        data:{},
        params:{id},
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
  * @summary 队伍装备列表
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {String} [searchContent] 检索内容
  * @param {Number} [teamId] teamId
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageTeamFacilityDTO>}
  */
  static async pageTeamFacilityUsingGET(_limit,_page,searchContent,teamId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/team/facility/page',
        data:{},
        params:{_limit,_page,searchContent,teamId},
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
  * @summary 更新队伍装备
  * @param {UserModel.TeamFacilityDTO} [TeamFacilityDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updateTeamFacilityUsingPUT(TeamFacilityDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/team/facility/update',
        data:TeamFacilityDTO,
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
  * @summary 获取队伍
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataTeamDTO>}
  */
  static async getTeamUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/team/get',
        data:{},
        params:{id},
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
  * @summary 队伍列表
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {Boolean} [enterpriseFlag] enterpriseFlag
  * @param {String} [searchContent] 检索内容
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageTeamDTO>}
  */
  static async pageTeamUsingGET(_limit,_page,enterpriseFlag,searchContent,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/team/page',
        data:{},
        params:{_limit,_page,enterpriseFlag,searchContent},
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
  * @summary 队伍类型
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListFrontSpinner>}
  */
  static async listTeamTypeUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/team/type',
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
  * @summary 更新队伍
  * @param {UserModel.TeamDTO} [TeamDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updateTeamUsingPUT(TeamDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/team/update',
        data:TeamDTO,
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

// class Team static method properties bind
/**
* @description addTeamUsingPOST url链接，包含baseURL
*/
Team.addTeamUsingPOST.fullPath=`${axios.defaults.baseURL}/team/add`
/**
* @description addTeamUsingPOST url链接，不包含baseURL
*/
Team.addTeamUsingPOST.path=`/team/add`
/**
* @description deleteTeamUsingDELETE url链接，包含baseURL
*/
Team.deleteTeamUsingDELETE.fullPath=`${axios.defaults.baseURL}/team/delete`
/**
* @description deleteTeamUsingDELETE url链接，不包含baseURL
*/
Team.deleteTeamUsingDELETE.path=`/team/delete`
/**
* @description addTeamFacilityUsingPOST url链接，包含baseURL
*/
Team.addTeamFacilityUsingPOST.fullPath=`${axios.defaults.baseURL}/team/facility/add`
/**
* @description addTeamFacilityUsingPOST url链接，不包含baseURL
*/
Team.addTeamFacilityUsingPOST.path=`/team/facility/add`
/**
* @description deleteTeamFacilityUsingDELETE url链接，包含baseURL
*/
Team.deleteTeamFacilityUsingDELETE.fullPath=`${axios.defaults.baseURL}/team/facility/delete`
/**
* @description deleteTeamFacilityUsingDELETE url链接，不包含baseURL
*/
Team.deleteTeamFacilityUsingDELETE.path=`/team/facility/delete`
/**
* @description getTeamFacilityUsingGET url链接，包含baseURL
*/
Team.getTeamFacilityUsingGET.fullPath=`${axios.defaults.baseURL}/team/facility/get`
/**
* @description getTeamFacilityUsingGET url链接，不包含baseURL
*/
Team.getTeamFacilityUsingGET.path=`/team/facility/get`
/**
* @description pageTeamFacilityUsingGET url链接，包含baseURL
*/
Team.pageTeamFacilityUsingGET.fullPath=`${axios.defaults.baseURL}/team/facility/page`
/**
* @description pageTeamFacilityUsingGET url链接，不包含baseURL
*/
Team.pageTeamFacilityUsingGET.path=`/team/facility/page`
/**
* @description updateTeamFacilityUsingPUT url链接，包含baseURL
*/
Team.updateTeamFacilityUsingPUT.fullPath=`${axios.defaults.baseURL}/team/facility/update`
/**
* @description updateTeamFacilityUsingPUT url链接，不包含baseURL
*/
Team.updateTeamFacilityUsingPUT.path=`/team/facility/update`
/**
* @description getTeamUsingGET url链接，包含baseURL
*/
Team.getTeamUsingGET.fullPath=`${axios.defaults.baseURL}/team/get`
/**
* @description getTeamUsingGET url链接，不包含baseURL
*/
Team.getTeamUsingGET.path=`/team/get`
/**
* @description pageTeamUsingGET url链接，包含baseURL
*/
Team.pageTeamUsingGET.fullPath=`${axios.defaults.baseURL}/team/page`
/**
* @description pageTeamUsingGET url链接，不包含baseURL
*/
Team.pageTeamUsingGET.path=`/team/page`
/**
* @description listTeamTypeUsingGET url链接，包含baseURL
*/
Team.listTeamTypeUsingGET.fullPath=`${axios.defaults.baseURL}/team/type`
/**
* @description listTeamTypeUsingGET url链接，不包含baseURL
*/
Team.listTeamTypeUsingGET.path=`/team/type`
/**
* @description updateTeamUsingPUT url链接，包含baseURL
*/
Team.updateTeamUsingPUT.fullPath=`${axios.defaults.baseURL}/team/update`
/**
* @description updateTeamUsingPUT url链接，不包含baseURL
*/
Team.updateTeamUsingPUT.path=`/team/update`

export class Test {
 
  /**
  * @summary 获取默认ID
  * @param {Number} [userId] userId
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataobject>}
  */
  static async defaultLoginIdUsingGET(userId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/test/default',
        data:{},
        params:{userId},
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
  * @summary 获取运行时间
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataobject>}
  */
  static async listApiRemoteMapUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/test/login',
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

// class Test static method properties bind
/**
* @description defaultLoginIdUsingGET url链接，包含baseURL
*/
Test.defaultLoginIdUsingGET.fullPath=`${axios.defaults.baseURL}/test/default`
/**
* @description defaultLoginIdUsingGET url链接，不包含baseURL
*/
Test.defaultLoginIdUsingGET.path=`/test/default`
/**
* @description listApiRemoteMapUsingGET url链接，包含baseURL
*/
Test.listApiRemoteMapUsingGET.fullPath=`${axios.defaults.baseURL}/test/login`
/**
* @description listApiRemoteMapUsingGET url链接，不包含baseURL
*/
Test.listApiRemoteMapUsingGET.path=`/test/login`

export class User {
 
  /**
  * @summary 重置密码（管理员）
  * @param {UserModel.UserDTO} [UserDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async resetPasswardUsingPUT(UserDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/user/access/reset',
        data:UserDTO,
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
  * @summary 修改密码（用户）
  * @param {UserModel.ResetPwd} [ResetPwd] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async revisePasswordUsingPUT(ResetPwd,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/user/access/revise',
        data:ResetPwd,
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
  * @summary 新增用户
  * @param {UserModel.UserDTO} [UserDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async addUserUsingPOST(UserDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/user/add',
        data:UserDTO,
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
  * @summary 手机端用户登陆
  * @param {UserModel.AppLoginDTO} [AppLoginDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataAppLoginDTO>}
  */
  static async appLoginUsingPOST(AppLoginDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/user/app/login',
        data:AppLoginDTO,
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
  * @summary 获取验证码
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataCaptchaDTO>}
  */
  static async captchaUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/user/captcha',
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
  * @summary 删除用户
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async deleteUserUsingDELETE(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/user/delete',
        data:{},
        params:{id},
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
  * @summary 下拉列表
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListFrontSpinner>}
  */
  static async dropUserUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/user/drop',
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
  * @summary 人员下拉
  * @param {Number} [personId] 人员id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListTmgmtPerson>}
  */
  static async dropPersonUserUsingGET(personId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/user/dropPerson',
        data:{},
        params:{personId},
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
  * @summary 获取用户
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataUserDTO>}
  */
  static async getUserUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/user/get',
        data:{},
        params:{id},
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
  * @summary 用户登陆
  * @param {UserModel.LoginDTO} [LoginDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataLoginDTO>}
  */
  static async loginUsingPOST(LoginDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/user/login',
        data:LoginDTO,
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
  * @summary 用户信息列表
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {String} [searchContent] 检索内容
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageUserDTO>}
  */
  static async pageUserUsingGET(_limit,_page,searchContent,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/user/page',
        data:{},
        params:{_limit,_page,searchContent},
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
  * @summary 企业注册
  * @param {UserModel.RegistDTO} [RegistDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async registUsingPOST(RegistDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/user/regist',
        data:RegistDTO,
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
  * @summary 更新用户
  * @param {UserModel.UserDTO} [UserDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updateUserUsingPUT(UserDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/user/update',
        data:UserDTO,
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

// class User static method properties bind
/**
* @description resetPasswardUsingPUT url链接，包含baseURL
*/
User.resetPasswardUsingPUT.fullPath=`${axios.defaults.baseURL}/user/access/reset`
/**
* @description resetPasswardUsingPUT url链接，不包含baseURL
*/
User.resetPasswardUsingPUT.path=`/user/access/reset`
/**
* @description revisePasswordUsingPUT url链接，包含baseURL
*/
User.revisePasswordUsingPUT.fullPath=`${axios.defaults.baseURL}/user/access/revise`
/**
* @description revisePasswordUsingPUT url链接，不包含baseURL
*/
User.revisePasswordUsingPUT.path=`/user/access/revise`
/**
* @description addUserUsingPOST url链接，包含baseURL
*/
User.addUserUsingPOST.fullPath=`${axios.defaults.baseURL}/user/add`
/**
* @description addUserUsingPOST url链接，不包含baseURL
*/
User.addUserUsingPOST.path=`/user/add`
/**
* @description appLoginUsingPOST url链接，包含baseURL
*/
User.appLoginUsingPOST.fullPath=`${axios.defaults.baseURL}/user/app/login`
/**
* @description appLoginUsingPOST url链接，不包含baseURL
*/
User.appLoginUsingPOST.path=`/user/app/login`
/**
* @description captchaUsingGET url链接，包含baseURL
*/
User.captchaUsingGET.fullPath=`${axios.defaults.baseURL}/user/captcha`
/**
* @description captchaUsingGET url链接，不包含baseURL
*/
User.captchaUsingGET.path=`/user/captcha`
/**
* @description deleteUserUsingDELETE url链接，包含baseURL
*/
User.deleteUserUsingDELETE.fullPath=`${axios.defaults.baseURL}/user/delete`
/**
* @description deleteUserUsingDELETE url链接，不包含baseURL
*/
User.deleteUserUsingDELETE.path=`/user/delete`
/**
* @description dropUserUsingGET url链接，包含baseURL
*/
User.dropUserUsingGET.fullPath=`${axios.defaults.baseURL}/user/drop`
/**
* @description dropUserUsingGET url链接，不包含baseURL
*/
User.dropUserUsingGET.path=`/user/drop`
/**
* @description dropPersonUserUsingGET url链接，包含baseURL
*/
User.dropPersonUserUsingGET.fullPath=`${axios.defaults.baseURL}/user/dropPerson`
/**
* @description dropPersonUserUsingGET url链接，不包含baseURL
*/
User.dropPersonUserUsingGET.path=`/user/dropPerson`
/**
* @description getUserUsingGET url链接，包含baseURL
*/
User.getUserUsingGET.fullPath=`${axios.defaults.baseURL}/user/get`
/**
* @description getUserUsingGET url链接，不包含baseURL
*/
User.getUserUsingGET.path=`/user/get`
/**
* @description loginUsingPOST url链接，包含baseURL
*/
User.loginUsingPOST.fullPath=`${axios.defaults.baseURL}/user/login`
/**
* @description loginUsingPOST url链接，不包含baseURL
*/
User.loginUsingPOST.path=`/user/login`
/**
* @description pageUserUsingGET url链接，包含baseURL
*/
User.pageUserUsingGET.fullPath=`${axios.defaults.baseURL}/user/page`
/**
* @description pageUserUsingGET url链接，不包含baseURL
*/
User.pageUserUsingGET.path=`/user/page`
/**
* @description registUsingPOST url链接，包含baseURL
*/
User.registUsingPOST.fullPath=`${axios.defaults.baseURL}/user/regist`
/**
* @description registUsingPOST url链接，不包含baseURL
*/
User.registUsingPOST.path=`/user/regist`
/**
* @description updateUserUsingPUT url链接，包含baseURL
*/
User.updateUserUsingPUT.fullPath=`${axios.defaults.baseURL}/user/update`
/**
* @description updateUserUsingPUT url链接，不包含baseURL
*/
User.updateUserUsingPUT.path=`/user/update`

export class WaterAlarmController {
 
  /**
  * @summary 新增监测因子限值
  * @param {UserModel.AddFactorLimitDTO} [AddFactorLimitDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async addLimitUsingPOST(AddFactorLimitDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/waterAlarm/addLimit',
        data:AddFactorLimitDTO,
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
  * @summary 获取单个报警详情
  * @param {Number} [alarmId] 报警id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataAlarmListVO>}
  */
  static async getAlarmDetailUsingGET(alarmId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/waterAlarm/alarmDetail',
        data:{},
        params:{alarmId},
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
  * @summary 处理状态下拉菜单
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListGeneralDictVO>}
  */
  static async getStatusListUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/waterAlarm/alarmStatusList',
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
  * @summary 报警类别下拉菜单
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListGeneralDictVO>}
  */
  static async getAlarmTypeUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/waterAlarm/alarmTypeList',
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
  * @summary 任务派发
  * @param {UserModel.TMgmtAlarmTask} [TMgmtAlarmTask] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async assignTaskUsingPOST(TMgmtAlarmTask,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/waterAlarm/assignTask',
        data:TMgmtAlarmTask,
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
  * @summary 审核任务
  * @param {UserModel.CheckTaskDTO} [CheckTaskDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async checkTaskUsingPOST(CheckTaskDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/waterAlarm/checkTask',
        data:CheckTaskDTO,
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
  * @summary 删除监测因子限值
  * @param {Number} [stationItemId] 点位监测项目id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async deleteLimitUsingPOST(stationItemId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/waterAlarm/deleteLimit',
        data:{},
        params:{stationItemId},
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
  * @summary 获取报警清单
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {Number} [alarmFlag] 报警类别：1.离线报警 2.超限报警 3.异常报警
  * @param {String} [endTime] 终止时间
  * @param {Number} [itemId] 超标项目
  * @param {String} [searchContent] 检索内容
  * @param {String} [startTime] 起始时间
  * @param {Number} [status] 处理状态：1.未处置 2.处置中 3.待审核 4.已审核
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageAlarmListVO>}
  */
  static async getAlarmListUsingGET(_limit,_page,alarmFlag,endTime,itemId,searchContent,startTime,status,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/waterAlarm/getAlarmList',
        data:{},
        params:{_limit,_page,alarmFlag,endTime,itemId,searchContent,startTime,status},
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
  * @summary 获取报警统计
  * @param {Number} [periodFlag] 时间周期 1.24小时 2.一周 3.一个月 4.三个月 5.一年
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataAlarmStatisticsVO>}
  */
  static async getStatisticsUsingGET(periodFlag,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/waterAlarm/getStatistics',
        data:{},
        params:{periodFlag},
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
  * @summary 获取处置状态统计
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {Number} [alarmFlag] 报警类别：1.离线报警 2.超限报警 3.异常报警
  * @param {String} [endTime] 终止时间
  * @param {Number} [itemId] 超标项目
  * @param {String} [searchContent] 检索内容
  * @param {String} [startTime] 起始时间
  * @param {Number} [status] 处理状态：1.未处置 2.处置中 3.待审核 4.已审核
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataAlarmStatusVO>}
  */
  static async getAlarmStatusUsingGET(_limit,_page,alarmFlag,endTime,itemId,searchContent,startTime,status,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/waterAlarm/getStatus',
        data:{},
        params:{_limit,_page,alarmFlag,endTime,itemId,searchContent,startTime,status},
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
  * @summary 监测因子下拉菜单
  * @param {Number} [stationId] 点位id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListFactorListVO>}
  */
  static async getFactorListUsingGET(stationId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/waterAlarm/itemList',
        data:{},
        params:{stationId},
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
  * @summary 报警设置列表
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {Number} [itemId] 监测项目id
  * @param {String} [searchContent] 检索内容
  * @param {Number} [stationId] 点位id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageAlarmSettingListVO>}
  */
  static async getSettingListUsingGET(_limit,_page,itemId,searchContent,stationId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/waterAlarm/settingList',
        data:{},
        params:{_limit,_page,itemId,searchContent,stationId},
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
  * @summary 工作人员下拉菜单
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListStaffMenuVO>}
  */
  static async getStaffListUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/waterAlarm/staffList',
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
  * @summary 获取单个点位详情
  * @param {Number} [stationId] 点位id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataTmgmtStation>}
  */
  static async getStationDetailUsingGET(stationId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/waterAlarm/stationDetail',
        data:{},
        params:{stationId},
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
  * @summary 点位列表下拉菜单
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListTmgmtStation>}
  */
  static async getStationListUsingGET_1(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/waterAlarm/stationList',
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
  * @summary 编辑监测因子限值
  * @param {UserModel.AddFactorLimitDTO} [AddFactorLimitDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updateLimitUsingPOST(AddFactorLimitDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/waterAlarm/updateLimit',
        data:AddFactorLimitDTO,
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

// class WaterAlarmController static method properties bind
/**
* @description addLimitUsingPOST url链接，包含baseURL
*/
WaterAlarmController.addLimitUsingPOST.fullPath=`${axios.defaults.baseURL}/waterAlarm/addLimit`
/**
* @description addLimitUsingPOST url链接，不包含baseURL
*/
WaterAlarmController.addLimitUsingPOST.path=`/waterAlarm/addLimit`
/**
* @description getAlarmDetailUsingGET url链接，包含baseURL
*/
WaterAlarmController.getAlarmDetailUsingGET.fullPath=`${axios.defaults.baseURL}/waterAlarm/alarmDetail`
/**
* @description getAlarmDetailUsingGET url链接，不包含baseURL
*/
WaterAlarmController.getAlarmDetailUsingGET.path=`/waterAlarm/alarmDetail`
/**
* @description getStatusListUsingGET url链接，包含baseURL
*/
WaterAlarmController.getStatusListUsingGET.fullPath=`${axios.defaults.baseURL}/waterAlarm/alarmStatusList`
/**
* @description getStatusListUsingGET url链接，不包含baseURL
*/
WaterAlarmController.getStatusListUsingGET.path=`/waterAlarm/alarmStatusList`
/**
* @description getAlarmTypeUsingGET url链接，包含baseURL
*/
WaterAlarmController.getAlarmTypeUsingGET.fullPath=`${axios.defaults.baseURL}/waterAlarm/alarmTypeList`
/**
* @description getAlarmTypeUsingGET url链接，不包含baseURL
*/
WaterAlarmController.getAlarmTypeUsingGET.path=`/waterAlarm/alarmTypeList`
/**
* @description assignTaskUsingPOST url链接，包含baseURL
*/
WaterAlarmController.assignTaskUsingPOST.fullPath=`${axios.defaults.baseURL}/waterAlarm/assignTask`
/**
* @description assignTaskUsingPOST url链接，不包含baseURL
*/
WaterAlarmController.assignTaskUsingPOST.path=`/waterAlarm/assignTask`
/**
* @description checkTaskUsingPOST url链接，包含baseURL
*/
WaterAlarmController.checkTaskUsingPOST.fullPath=`${axios.defaults.baseURL}/waterAlarm/checkTask`
/**
* @description checkTaskUsingPOST url链接，不包含baseURL
*/
WaterAlarmController.checkTaskUsingPOST.path=`/waterAlarm/checkTask`
/**
* @description deleteLimitUsingPOST url链接，包含baseURL
*/
WaterAlarmController.deleteLimitUsingPOST.fullPath=`${axios.defaults.baseURL}/waterAlarm/deleteLimit`
/**
* @description deleteLimitUsingPOST url链接，不包含baseURL
*/
WaterAlarmController.deleteLimitUsingPOST.path=`/waterAlarm/deleteLimit`
/**
* @description getAlarmListUsingGET url链接，包含baseURL
*/
WaterAlarmController.getAlarmListUsingGET.fullPath=`${axios.defaults.baseURL}/waterAlarm/getAlarmList`
/**
* @description getAlarmListUsingGET url链接，不包含baseURL
*/
WaterAlarmController.getAlarmListUsingGET.path=`/waterAlarm/getAlarmList`
/**
* @description getStatisticsUsingGET url链接，包含baseURL
*/
WaterAlarmController.getStatisticsUsingGET.fullPath=`${axios.defaults.baseURL}/waterAlarm/getStatistics`
/**
* @description getStatisticsUsingGET url链接，不包含baseURL
*/
WaterAlarmController.getStatisticsUsingGET.path=`/waterAlarm/getStatistics`
/**
* @description getAlarmStatusUsingGET url链接，包含baseURL
*/
WaterAlarmController.getAlarmStatusUsingGET.fullPath=`${axios.defaults.baseURL}/waterAlarm/getStatus`
/**
* @description getAlarmStatusUsingGET url链接，不包含baseURL
*/
WaterAlarmController.getAlarmStatusUsingGET.path=`/waterAlarm/getStatus`
/**
* @description getFactorListUsingGET url链接，包含baseURL
*/
WaterAlarmController.getFactorListUsingGET.fullPath=`${axios.defaults.baseURL}/waterAlarm/itemList`
/**
* @description getFactorListUsingGET url链接，不包含baseURL
*/
WaterAlarmController.getFactorListUsingGET.path=`/waterAlarm/itemList`
/**
* @description getSettingListUsingGET url链接，包含baseURL
*/
WaterAlarmController.getSettingListUsingGET.fullPath=`${axios.defaults.baseURL}/waterAlarm/settingList`
/**
* @description getSettingListUsingGET url链接，不包含baseURL
*/
WaterAlarmController.getSettingListUsingGET.path=`/waterAlarm/settingList`
/**
* @description getStaffListUsingGET url链接，包含baseURL
*/
WaterAlarmController.getStaffListUsingGET.fullPath=`${axios.defaults.baseURL}/waterAlarm/staffList`
/**
* @description getStaffListUsingGET url链接，不包含baseURL
*/
WaterAlarmController.getStaffListUsingGET.path=`/waterAlarm/staffList`
/**
* @description getStationDetailUsingGET url链接，包含baseURL
*/
WaterAlarmController.getStationDetailUsingGET.fullPath=`${axios.defaults.baseURL}/waterAlarm/stationDetail`
/**
* @description getStationDetailUsingGET url链接，不包含baseURL
*/
WaterAlarmController.getStationDetailUsingGET.path=`/waterAlarm/stationDetail`
/**
* @description getStationListUsingGET_1 url链接，包含baseURL
*/
WaterAlarmController.getStationListUsingGET_1.fullPath=`${axios.defaults.baseURL}/waterAlarm/stationList`
/**
* @description getStationListUsingGET_1 url链接，不包含baseURL
*/
WaterAlarmController.getStationListUsingGET_1.path=`/waterAlarm/stationList`
/**
* @description updateLimitUsingPOST url链接，包含baseURL
*/
WaterAlarmController.updateLimitUsingPOST.fullPath=`${axios.defaults.baseURL}/waterAlarm/updateLimit`
/**
* @description updateLimitUsingPOST url链接，不包含baseURL
*/
WaterAlarmController.updateLimitUsingPOST.path=`/waterAlarm/updateLimit`

export class WaterReportController {
 
  /**
  * @summary 导出监测数据报表
  * @param {String} [endTime] 终止时间
  * @param {Array} [selections] 打印参数选择
  * @param {String} [startTime] 起始时间
  * @param {Number} [stationId] 点位id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async downloadHistoryUsingGET(endTime,selections,startTime,stationId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/waterReport/downloadHistory',
        data:{},
        params:{endTime,selections,startTime,stationId},
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
  * @summary 导出监测数据报表
  * @param {String} [dataTime] 时间
  * @param {Number} [reportType] 0：日，1：月，2：年
  * @param {Array} [selections] 打印参数选择
  * @param {Number} [stationId] 点位id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async downloadReportUsingGET(dataTime,reportType,selections,stationId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/waterReport/downloadReport',
        data:{},
        params:{dataTime,reportType,selections,stationId},
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
  * @summary 查询历史监测数据
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {String} [endTime] 终止时间
  * @param {String} [searchContent] 检索内容
  * @param {String} [startTime] 起始时间
  * @param {Number} [stationId] 点位id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageHistoryDataVO>}
  */
  static async getHistoryDataUsingGET(_limit,_page,endTime,searchContent,startTime,stationId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/waterReport/getHistoryData',
        data:{},
        params:{_limit,_page,endTime,searchContent,startTime,stationId},
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
  * @summary 获取监测数据报表
  * @param {String} [dataTime] 时间
  * @param {Number} [reportType] 0：日，1：月，2：年
  * @param {Number} [stationId] 点位id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListHistoryDataVO>}
  */
  static async getWaterReportUsingGET(dataTime,reportType,stationId,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/waterReport/getWaterReport',
        data:{},
        params:{dataTime,reportType,stationId},
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

// class WaterReportController static method properties bind
/**
* @description downloadHistoryUsingGET url链接，包含baseURL
*/
WaterReportController.downloadHistoryUsingGET.fullPath=`${axios.defaults.baseURL}/waterReport/downloadHistory`
/**
* @description downloadHistoryUsingGET url链接，不包含baseURL
*/
WaterReportController.downloadHistoryUsingGET.path=`/waterReport/downloadHistory`
/**
* @description downloadReportUsingGET url链接，包含baseURL
*/
WaterReportController.downloadReportUsingGET.fullPath=`${axios.defaults.baseURL}/waterReport/downloadReport`
/**
* @description downloadReportUsingGET url链接，不包含baseURL
*/
WaterReportController.downloadReportUsingGET.path=`/waterReport/downloadReport`
/**
* @description getHistoryDataUsingGET url链接，包含baseURL
*/
WaterReportController.getHistoryDataUsingGET.fullPath=`${axios.defaults.baseURL}/waterReport/getHistoryData`
/**
* @description getHistoryDataUsingGET url链接，不包含baseURL
*/
WaterReportController.getHistoryDataUsingGET.path=`/waterReport/getHistoryData`
/**
* @description getWaterReportUsingGET url链接，包含baseURL
*/
WaterReportController.getWaterReportUsingGET.fullPath=`${axios.defaults.baseURL}/waterReport/getWaterReport`
/**
* @description getWaterReportUsingGET url链接，不包含baseURL
*/
WaterReportController.getWaterReportUsingGET.path=`/waterReport/getWaterReport`

export class Workplace {
 
  /**
  * @summary 新增办公区
  * @param {UserModel.WorkplaceDTO} [WorkplaceDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async addWorkplaceUsingPOST(WorkplaceDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/workplace/add',
        data:WorkplaceDTO,
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
  * @summary 删除办公区
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async deleteWorkplaceUsingDELETE(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'delete',
        url:'/workplace/delete',
        data:{},
        params:{id},
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
  * @summary 办公区下拉
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseListFrontSpinner>}
  */
  static async dropWorkplaceUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/workplace/drop',
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
  * @summary 获取办公区
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseDataWorkplaceDTO>}
  */
  static async getWorkplaceUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/workplace/get',
        data:{},
        params:{id},
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
  * @summary 办公区列表
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {String} [searchContent] 检索内容
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponsePageWorkplaceDTO>}
  */
  static async pageWorkplaceUsingGET(_limit,_page,searchContent,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'get',
        url:'/workplace/page',
        data:{},
        params:{_limit,_page,searchContent},
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
  * @summary 更新办公区
  * @param {UserModel.WorkplaceDTO} [WorkplaceDTO] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  * @returns {Promise<UserModel.ResponseResult>}
  */
  static async updateWorkplaceUsingPUT(WorkplaceDTO,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'put',
        url:'/workplace/update',
        data:WorkplaceDTO,
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

// class Workplace static method properties bind
/**
* @description addWorkplaceUsingPOST url链接，包含baseURL
*/
Workplace.addWorkplaceUsingPOST.fullPath=`${axios.defaults.baseURL}/workplace/add`
/**
* @description addWorkplaceUsingPOST url链接，不包含baseURL
*/
Workplace.addWorkplaceUsingPOST.path=`/workplace/add`
/**
* @description deleteWorkplaceUsingDELETE url链接，包含baseURL
*/
Workplace.deleteWorkplaceUsingDELETE.fullPath=`${axios.defaults.baseURL}/workplace/delete`
/**
* @description deleteWorkplaceUsingDELETE url链接，不包含baseURL
*/
Workplace.deleteWorkplaceUsingDELETE.path=`/workplace/delete`
/**
* @description dropWorkplaceUsingGET url链接，包含baseURL
*/
Workplace.dropWorkplaceUsingGET.fullPath=`${axios.defaults.baseURL}/workplace/drop`
/**
* @description dropWorkplaceUsingGET url链接，不包含baseURL
*/
Workplace.dropWorkplaceUsingGET.path=`/workplace/drop`
/**
* @description getWorkplaceUsingGET url链接，包含baseURL
*/
Workplace.getWorkplaceUsingGET.fullPath=`${axios.defaults.baseURL}/workplace/get`
/**
* @description getWorkplaceUsingGET url链接，不包含baseURL
*/
Workplace.getWorkplaceUsingGET.path=`/workplace/get`
/**
* @description pageWorkplaceUsingGET url链接，包含baseURL
*/
Workplace.pageWorkplaceUsingGET.fullPath=`${axios.defaults.baseURL}/workplace/page`
/**
* @description pageWorkplaceUsingGET url链接，不包含baseURL
*/
Workplace.pageWorkplaceUsingGET.path=`/workplace/page`
/**
* @description updateWorkplaceUsingPUT url链接，包含baseURL
*/
Workplace.updateWorkplaceUsingPUT.fullPath=`${axios.defaults.baseURL}/workplace/update`
/**
* @description updateWorkplaceUsingPUT url链接，不包含baseURL
*/
Workplace.updateWorkplaceUsingPUT.path=`/workplace/update`
