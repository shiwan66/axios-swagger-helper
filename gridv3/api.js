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
export class 报警管理 {
 
  /**
  * @summary 获取报警数量
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getAlarmCountUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/alarm/alarm/count',
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
  * @summary 获取报警列表
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {Number} [alarmtypeid] 报警类型
  * @param {String} [endtime] 结束时间：yyyy-MM-dd
  * @param {String} [searchcontent] 检索内容
  * @param {String} [starttime] 开始时间：yyyy-MM-dd
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getAlarmListUsingGET(_limit,_page,alarmtypeid,endtime,searchcontent,starttime,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/alarm/alarm/list',
        data:{},
        params:{_limit,_page,alarmtypeid,endtime,searchcontent,starttime},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 获取报警类型列表
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getAlarmTypeListUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/alarm/alarm/type',
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
  * @summary 删除边界信息
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async deleteBoundaryUsingDELETE(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'delete',
        url:'/alarm/boundary/delete',
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
  * @summary 获取边界信息
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getBoundaryUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/alarm/boundary/get',
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
  * @summary 保存边界信息
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {Number} [factorid] 
  * @param {String} [searchcontent] 检索内容
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async pageBoundaryUsingGET(_limit,_page,factorid,searchcontent,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/alarm/boundary/page',
        data:{},
        params:{_limit,_page,factorid,searchcontent},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 保存边界信息
  * @param {UserModel.BoundaryVO} [boundaryvo] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async saveBoundaryUsingPOST(boundaryvo,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'post',
        url:'/alarm/boundary/save',
        data:boundaryvo,
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
  * @summary 更新边界信息
  * @param {UserModel.BoundaryVO} [boundaryvo] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async updateBoundaryUsingPOST(boundaryvo,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'post',
        url:'/alarm/boundary/update',
        data:boundaryvo,
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
  * @summary 获取监测因子列表
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getAlarmFactorListUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/alarm/factor/list',
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
  * @summary 获取设备列表
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getDeviceListForAlarmUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/alarm/list/device',
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
  * @summary 获取区间列表
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getAlarmRangeListUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/alarm/range/list',
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

// class 报警管理 static method properties bind
/**
* @description getAlarmCountUsingGET url链接，包含baseURL
*/
报警管理.getAlarmCountUsingGET.fullPath=`${axios.defaults.baseURL}/alarm/alarm/count`
/**
* @description getAlarmCountUsingGET url链接，不包含baseURL
*/
报警管理.getAlarmCountUsingGET.path=`/alarm/alarm/count`
/**
* @description getAlarmListUsingGET url链接，包含baseURL
*/
报警管理.getAlarmListUsingGET.fullPath=`${axios.defaults.baseURL}/alarm/alarm/list`
/**
* @description getAlarmListUsingGET url链接，不包含baseURL
*/
报警管理.getAlarmListUsingGET.path=`/alarm/alarm/list`
/**
* @description getAlarmTypeListUsingGET url链接，包含baseURL
*/
报警管理.getAlarmTypeListUsingGET.fullPath=`${axios.defaults.baseURL}/alarm/alarm/type`
/**
* @description getAlarmTypeListUsingGET url链接，不包含baseURL
*/
报警管理.getAlarmTypeListUsingGET.path=`/alarm/alarm/type`
/**
* @description deleteBoundaryUsingDELETE url链接，包含baseURL
*/
报警管理.deleteBoundaryUsingDELETE.fullPath=`${axios.defaults.baseURL}/alarm/boundary/delete`
/**
* @description deleteBoundaryUsingDELETE url链接，不包含baseURL
*/
报警管理.deleteBoundaryUsingDELETE.path=`/alarm/boundary/delete`
/**
* @description getBoundaryUsingGET url链接，包含baseURL
*/
报警管理.getBoundaryUsingGET.fullPath=`${axios.defaults.baseURL}/alarm/boundary/get`
/**
* @description getBoundaryUsingGET url链接，不包含baseURL
*/
报警管理.getBoundaryUsingGET.path=`/alarm/boundary/get`
/**
* @description pageBoundaryUsingGET url链接，包含baseURL
*/
报警管理.pageBoundaryUsingGET.fullPath=`${axios.defaults.baseURL}/alarm/boundary/page`
/**
* @description pageBoundaryUsingGET url链接，不包含baseURL
*/
报警管理.pageBoundaryUsingGET.path=`/alarm/boundary/page`
/**
* @description saveBoundaryUsingPOST url链接，包含baseURL
*/
报警管理.saveBoundaryUsingPOST.fullPath=`${axios.defaults.baseURL}/alarm/boundary/save`
/**
* @description saveBoundaryUsingPOST url链接，不包含baseURL
*/
报警管理.saveBoundaryUsingPOST.path=`/alarm/boundary/save`
/**
* @description updateBoundaryUsingPOST url链接，包含baseURL
*/
报警管理.updateBoundaryUsingPOST.fullPath=`${axios.defaults.baseURL}/alarm/boundary/update`
/**
* @description updateBoundaryUsingPOST url链接，不包含baseURL
*/
报警管理.updateBoundaryUsingPOST.path=`/alarm/boundary/update`
/**
* @description getAlarmFactorListUsingGET url链接，包含baseURL
*/
报警管理.getAlarmFactorListUsingGET.fullPath=`${axios.defaults.baseURL}/alarm/factor/list`
/**
* @description getAlarmFactorListUsingGET url链接，不包含baseURL
*/
报警管理.getAlarmFactorListUsingGET.path=`/alarm/factor/list`
/**
* @description getDeviceListForAlarmUsingGET url链接，包含baseURL
*/
报警管理.getDeviceListForAlarmUsingGET.fullPath=`${axios.defaults.baseURL}/alarm/list/device`
/**
* @description getDeviceListForAlarmUsingGET url链接，不包含baseURL
*/
报警管理.getDeviceListForAlarmUsingGET.path=`/alarm/list/device`
/**
* @description getAlarmRangeListUsingGET url链接，包含baseURL
*/
报警管理.getAlarmRangeListUsingGET.fullPath=`${axios.defaults.baseURL}/alarm/range/list`
/**
* @description getAlarmRangeListUsingGET url链接，不包含baseURL
*/
报警管理.getAlarmRangeListUsingGET.path=`/alarm/range/list`

export class 数据分析 {
 
  /**
  * @summary 污染日历(Web用)
  * @param {Number} [deviceid] 设备Id
  * @param {String} [factor] 监测因子
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getPollutantCalendarUsingGET(deviceid,factor,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/analysis/calendar',
        data:{},
        params:{deviceid,factor},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 点位对比
  * @param {UserModel.AnalysisReq} [analysisreq] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getCompareListUsingPOST(analysisreq,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'post',
        url:'/analysis/compare',
        data:analysisreq,
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
  * @summary 同比环比
  * @param {Number} [deviceid] 设备Id
  * @param {String} [factor] 监测因子
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getContrastListUsingGET(deviceid,factor,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/analysis/contrast',
        data:{},
        params:{deviceid,factor},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 导出--查询与导出
  * @param {UserModel.AnalysisReq} [analysisreq] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async downloadExportListUsingPOST(analysisreq,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "undefined";
      let options = {
        method:'post',
        url:'/analysis/download',
        data:analysisreq,
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
  * @summary 超标统计
  * @param {UserModel.AnalysisReq} [analysisreq] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getExceedInfoUsingPOST(analysisreq,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'post',
        url:'/analysis/exceed',
        data:analysisreq,
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
  * @summary 导出--报表分析
  * @param {UserModel.AnalysisReq} [analysisreq] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async downloadReportListUsingPOST(analysisreq,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "undefined";
      let options = {
        method:'post',
        url:'/analysis/export',
        data:analysisreq,
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
  * @summary 污染分析
  * @param {UserModel.AnalysisReq} [analysisreq] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getAnalysisPollutionUsingPOST(analysisreq,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'post',
        url:'/analysis/pollution',
        data:analysisreq,
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
  * @summary 报表分析
  * @param {UserModel.AnalysisReq} [analysisreq] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getReportListUsingPOST(analysisreq,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'post',
        url:'/analysis/report',
        data:analysisreq,
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
  * @summary 查询与导出
  * @param {UserModel.AnalysisReq} [analysisreq] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getSearchListUsingPOST(analysisreq,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'post',
        url:'/analysis/search',
        data:analysisreq,
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

// class 数据分析 static method properties bind
/**
* @description getPollutantCalendarUsingGET url链接，包含baseURL
*/
数据分析.getPollutantCalendarUsingGET.fullPath=`${axios.defaults.baseURL}/analysis/calendar`
/**
* @description getPollutantCalendarUsingGET url链接，不包含baseURL
*/
数据分析.getPollutantCalendarUsingGET.path=`/analysis/calendar`
/**
* @description getCompareListUsingPOST url链接，包含baseURL
*/
数据分析.getCompareListUsingPOST.fullPath=`${axios.defaults.baseURL}/analysis/compare`
/**
* @description getCompareListUsingPOST url链接，不包含baseURL
*/
数据分析.getCompareListUsingPOST.path=`/analysis/compare`
/**
* @description getContrastListUsingGET url链接，包含baseURL
*/
数据分析.getContrastListUsingGET.fullPath=`${axios.defaults.baseURL}/analysis/contrast`
/**
* @description getContrastListUsingGET url链接，不包含baseURL
*/
数据分析.getContrastListUsingGET.path=`/analysis/contrast`
/**
* @description downloadExportListUsingPOST url链接，包含baseURL
*/
数据分析.downloadExportListUsingPOST.fullPath=`${axios.defaults.baseURL}/analysis/download`
/**
* @description downloadExportListUsingPOST url链接，不包含baseURL
*/
数据分析.downloadExportListUsingPOST.path=`/analysis/download`
/**
* @description getExceedInfoUsingPOST url链接，包含baseURL
*/
数据分析.getExceedInfoUsingPOST.fullPath=`${axios.defaults.baseURL}/analysis/exceed`
/**
* @description getExceedInfoUsingPOST url链接，不包含baseURL
*/
数据分析.getExceedInfoUsingPOST.path=`/analysis/exceed`
/**
* @description downloadReportListUsingPOST url链接，包含baseURL
*/
数据分析.downloadReportListUsingPOST.fullPath=`${axios.defaults.baseURL}/analysis/export`
/**
* @description downloadReportListUsingPOST url链接，不包含baseURL
*/
数据分析.downloadReportListUsingPOST.path=`/analysis/export`
/**
* @description getAnalysisPollutionUsingPOST url链接，包含baseURL
*/
数据分析.getAnalysisPollutionUsingPOST.fullPath=`${axios.defaults.baseURL}/analysis/pollution`
/**
* @description getAnalysisPollutionUsingPOST url链接，不包含baseURL
*/
数据分析.getAnalysisPollutionUsingPOST.path=`/analysis/pollution`
/**
* @description getReportListUsingPOST url链接，包含baseURL
*/
数据分析.getReportListUsingPOST.fullPath=`${axios.defaults.baseURL}/analysis/report`
/**
* @description getReportListUsingPOST url链接，不包含baseURL
*/
数据分析.getReportListUsingPOST.path=`/analysis/report`
/**
* @description getSearchListUsingPOST url链接，包含baseURL
*/
数据分析.getSearchListUsingPOST.fullPath=`${axios.defaults.baseURL}/analysis/search`
/**
* @description getSearchListUsingPOST url链接，不包含baseURL
*/
数据分析.getSearchListUsingPOST.path=`/analysis/search`

export class 监控设备 {
 
  /**
  * @summary 新增监控设备
  * @param {UserModel.CameraInfo} [camerainfo] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async addCameraUsingPOST(camerainfo,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'post',
        url:'/camera/add',
        data:camerainfo,
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
  * @summary 获取设备列表
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async listCameraForNewStyleUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/camera/camera/list',
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
  * @summary 获取设备列表
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async treeCameraUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/camera/camera/tree',
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
  * @summary 删除监控设备
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async deleteCameraByIdUsingDELETE(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'delete',
        url:'/camera/delete',
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
  * @summary 获取监控设备
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getCameraByIdUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/camera/get',
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
  * @summary 获取设备列表
  * @param {Number} [nvrid] nvrId
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async listCameraForNvrUsingGET(nvrid,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/camera/list/camera',
        data:{},
        params:{nvrid},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 获取设备列表
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async listNvrUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/camera/list/nvr',
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
  * @summary 获取设备列表（分页）
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {Number} [nvrid] 
  * @param {String} [searchcontent] 检索内容
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async pageCameraUsingGET(_limit,_page,nvrid,searchcontent,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/camera/page',
        data:{},
        params:{_limit,_page,nvrid,searchcontent},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 更新监控设备
  * @param {UserModel.CameraInfo} [camerainfo] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async updateCameraUsingPUT(camerainfo,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'put',
        url:'/camera/update',
        data:camerainfo,
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

// class 监控设备 static method properties bind
/**
* @description addCameraUsingPOST url链接，包含baseURL
*/
监控设备.addCameraUsingPOST.fullPath=`${axios.defaults.baseURL}/camera/add`
/**
* @description addCameraUsingPOST url链接，不包含baseURL
*/
监控设备.addCameraUsingPOST.path=`/camera/add`
/**
* @description listCameraForNewStyleUsingGET url链接，包含baseURL
*/
监控设备.listCameraForNewStyleUsingGET.fullPath=`${axios.defaults.baseURL}/camera/camera/list`
/**
* @description listCameraForNewStyleUsingGET url链接，不包含baseURL
*/
监控设备.listCameraForNewStyleUsingGET.path=`/camera/camera/list`
/**
* @description treeCameraUsingGET url链接，包含baseURL
*/
监控设备.treeCameraUsingGET.fullPath=`${axios.defaults.baseURL}/camera/camera/tree`
/**
* @description treeCameraUsingGET url链接，不包含baseURL
*/
监控设备.treeCameraUsingGET.path=`/camera/camera/tree`
/**
* @description deleteCameraByIdUsingDELETE url链接，包含baseURL
*/
监控设备.deleteCameraByIdUsingDELETE.fullPath=`${axios.defaults.baseURL}/camera/delete`
/**
* @description deleteCameraByIdUsingDELETE url链接，不包含baseURL
*/
监控设备.deleteCameraByIdUsingDELETE.path=`/camera/delete`
/**
* @description getCameraByIdUsingGET url链接，包含baseURL
*/
监控设备.getCameraByIdUsingGET.fullPath=`${axios.defaults.baseURL}/camera/get`
/**
* @description getCameraByIdUsingGET url链接，不包含baseURL
*/
监控设备.getCameraByIdUsingGET.path=`/camera/get`
/**
* @description listCameraForNvrUsingGET url链接，包含baseURL
*/
监控设备.listCameraForNvrUsingGET.fullPath=`${axios.defaults.baseURL}/camera/list/camera`
/**
* @description listCameraForNvrUsingGET url链接，不包含baseURL
*/
监控设备.listCameraForNvrUsingGET.path=`/camera/list/camera`
/**
* @description listNvrUsingGET url链接，包含baseURL
*/
监控设备.listNvrUsingGET.fullPath=`${axios.defaults.baseURL}/camera/list/nvr`
/**
* @description listNvrUsingGET url链接，不包含baseURL
*/
监控设备.listNvrUsingGET.path=`/camera/list/nvr`
/**
* @description pageCameraUsingGET url链接，包含baseURL
*/
监控设备.pageCameraUsingGET.fullPath=`${axios.defaults.baseURL}/camera/page`
/**
* @description pageCameraUsingGET url链接，不包含baseURL
*/
监控设备.pageCameraUsingGET.path=`/camera/page`
/**
* @description updateCameraUsingPUT url链接，包含baseURL
*/
监控设备.updateCameraUsingPUT.fullPath=`${axios.defaults.baseURL}/camera/update`
/**
* @description updateCameraUsingPUT url链接，不包含baseURL
*/
监控设备.updateCameraUsingPUT.path=`/camera/update`

export class 设备管理 {
 
  /**
  * @summary 企业信息列表
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async listWaterEnterpriseUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/device/enterprise',
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
  * @summary 新增用能在线监测
  * @param {UserModel.DevicePowerDTO} [devicepowerdto] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async addDevicePowerUsingPOST(devicepowerdto,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'post',
        url:'/device/power/add',
        data:devicepowerdto,
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
  * @summary 删除用能在线监测
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async deleteDevicePowerUsingDELETE(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'delete',
        url:'/device/power/delete',
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
  * @summary 获取用能在线监测设备
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getDevicePowerUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/device/power/get',
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
  * @summary 用能在线设备列表
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {String} [searchcontent] 检索内容
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async pageDevicePowerUsingGET(_limit,_page,searchcontent,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/device/power/list',
        data:{},
        params:{_limit,_page,searchcontent},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 更新用能在线监测
  * @param {UserModel.DevicePowerDTO} [devicepowerdto] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async editDevicePowerUsingPUT(devicepowerdto,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'put',
        url:'/device/power/update',
        data:devicepowerdto,
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
  * @summary 新增水在线监测
  * @param {UserModel.DeviceWaterDTO} [devicewaterdto] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async addDeviceWaterUsingPOST(devicewaterdto,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'post',
        url:'/device/water/add',
        data:devicewaterdto,
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
  * @summary 删除水在线监测
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async deleteDeviceWaterUsingDELETE(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'delete',
        url:'/device/water/delete',
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
  * @summary 获取水在线监测设备
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getDeviceWaterUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/device/water/get',
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
  * @summary 获取水在线监测限值
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getDeviceLimitWaterUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/device/water/limit/get',
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
  * @summary 水在线设备限值列表
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async listDeviceLimitWaterUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/device/water/limit/list',
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
  * @summary 更新水在线监测限值
  * @param {UserModel.WaterLimitDTO} [waterlimitdto] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async editDeviceLimitWaterUsingPUT(waterlimitdto,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'put',
        url:'/device/water/limit/update',
        data:waterlimitdto,
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
  * @summary 水在线设备列表
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {String} [searchcontent] 检索内容
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async pageDeviceWaterUsingGET(_limit,_page,searchcontent,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/device/water/list',
        data:{},
        params:{_limit,_page,searchcontent},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 雨水项目列表
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async listWaterRainUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/device/water/rain',
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
  * @summary 设备类型列表
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async listWaterTypeUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/device/water/type',
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
  * @summary 更新水在线监测
  * @param {UserModel.DeviceWaterDTO} [devicewaterdto] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async editDeviceWaterUsingPUT(devicewaterdto,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'put',
        url:'/device/water/update',
        data:devicewaterdto,
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
  * @summary 污水项目
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async listWaterWasteUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/device/water/waste',
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

// class 设备管理 static method properties bind
/**
* @description listWaterEnterpriseUsingGET url链接，包含baseURL
*/
设备管理.listWaterEnterpriseUsingGET.fullPath=`${axios.defaults.baseURL}/device/enterprise`
/**
* @description listWaterEnterpriseUsingGET url链接，不包含baseURL
*/
设备管理.listWaterEnterpriseUsingGET.path=`/device/enterprise`
/**
* @description addDevicePowerUsingPOST url链接，包含baseURL
*/
设备管理.addDevicePowerUsingPOST.fullPath=`${axios.defaults.baseURL}/device/power/add`
/**
* @description addDevicePowerUsingPOST url链接，不包含baseURL
*/
设备管理.addDevicePowerUsingPOST.path=`/device/power/add`
/**
* @description deleteDevicePowerUsingDELETE url链接，包含baseURL
*/
设备管理.deleteDevicePowerUsingDELETE.fullPath=`${axios.defaults.baseURL}/device/power/delete`
/**
* @description deleteDevicePowerUsingDELETE url链接，不包含baseURL
*/
设备管理.deleteDevicePowerUsingDELETE.path=`/device/power/delete`
/**
* @description getDevicePowerUsingGET url链接，包含baseURL
*/
设备管理.getDevicePowerUsingGET.fullPath=`${axios.defaults.baseURL}/device/power/get`
/**
* @description getDevicePowerUsingGET url链接，不包含baseURL
*/
设备管理.getDevicePowerUsingGET.path=`/device/power/get`
/**
* @description pageDevicePowerUsingGET url链接，包含baseURL
*/
设备管理.pageDevicePowerUsingGET.fullPath=`${axios.defaults.baseURL}/device/power/list`
/**
* @description pageDevicePowerUsingGET url链接，不包含baseURL
*/
设备管理.pageDevicePowerUsingGET.path=`/device/power/list`
/**
* @description editDevicePowerUsingPUT url链接，包含baseURL
*/
设备管理.editDevicePowerUsingPUT.fullPath=`${axios.defaults.baseURL}/device/power/update`
/**
* @description editDevicePowerUsingPUT url链接，不包含baseURL
*/
设备管理.editDevicePowerUsingPUT.path=`/device/power/update`
/**
* @description addDeviceWaterUsingPOST url链接，包含baseURL
*/
设备管理.addDeviceWaterUsingPOST.fullPath=`${axios.defaults.baseURL}/device/water/add`
/**
* @description addDeviceWaterUsingPOST url链接，不包含baseURL
*/
设备管理.addDeviceWaterUsingPOST.path=`/device/water/add`
/**
* @description deleteDeviceWaterUsingDELETE url链接，包含baseURL
*/
设备管理.deleteDeviceWaterUsingDELETE.fullPath=`${axios.defaults.baseURL}/device/water/delete`
/**
* @description deleteDeviceWaterUsingDELETE url链接，不包含baseURL
*/
设备管理.deleteDeviceWaterUsingDELETE.path=`/device/water/delete`
/**
* @description getDeviceWaterUsingGET url链接，包含baseURL
*/
设备管理.getDeviceWaterUsingGET.fullPath=`${axios.defaults.baseURL}/device/water/get`
/**
* @description getDeviceWaterUsingGET url链接，不包含baseURL
*/
设备管理.getDeviceWaterUsingGET.path=`/device/water/get`
/**
* @description getDeviceLimitWaterUsingGET url链接，包含baseURL
*/
设备管理.getDeviceLimitWaterUsingGET.fullPath=`${axios.defaults.baseURL}/device/water/limit/get`
/**
* @description getDeviceLimitWaterUsingGET url链接，不包含baseURL
*/
设备管理.getDeviceLimitWaterUsingGET.path=`/device/water/limit/get`
/**
* @description listDeviceLimitWaterUsingGET url链接，包含baseURL
*/
设备管理.listDeviceLimitWaterUsingGET.fullPath=`${axios.defaults.baseURL}/device/water/limit/list`
/**
* @description listDeviceLimitWaterUsingGET url链接，不包含baseURL
*/
设备管理.listDeviceLimitWaterUsingGET.path=`/device/water/limit/list`
/**
* @description editDeviceLimitWaterUsingPUT url链接，包含baseURL
*/
设备管理.editDeviceLimitWaterUsingPUT.fullPath=`${axios.defaults.baseURL}/device/water/limit/update`
/**
* @description editDeviceLimitWaterUsingPUT url链接，不包含baseURL
*/
设备管理.editDeviceLimitWaterUsingPUT.path=`/device/water/limit/update`
/**
* @description pageDeviceWaterUsingGET url链接，包含baseURL
*/
设备管理.pageDeviceWaterUsingGET.fullPath=`${axios.defaults.baseURL}/device/water/list`
/**
* @description pageDeviceWaterUsingGET url链接，不包含baseURL
*/
设备管理.pageDeviceWaterUsingGET.path=`/device/water/list`
/**
* @description listWaterRainUsingGET url链接，包含baseURL
*/
设备管理.listWaterRainUsingGET.fullPath=`${axios.defaults.baseURL}/device/water/rain`
/**
* @description listWaterRainUsingGET url链接，不包含baseURL
*/
设备管理.listWaterRainUsingGET.path=`/device/water/rain`
/**
* @description listWaterTypeUsingGET url链接，包含baseURL
*/
设备管理.listWaterTypeUsingGET.fullPath=`${axios.defaults.baseURL}/device/water/type`
/**
* @description listWaterTypeUsingGET url链接，不包含baseURL
*/
设备管理.listWaterTypeUsingGET.path=`/device/water/type`
/**
* @description editDeviceWaterUsingPUT url链接，包含baseURL
*/
设备管理.editDeviceWaterUsingPUT.fullPath=`${axios.defaults.baseURL}/device/water/update`
/**
* @description editDeviceWaterUsingPUT url链接，不包含baseURL
*/
设备管理.editDeviceWaterUsingPUT.path=`/device/water/update`
/**
* @description listWaterWasteUsingGET url链接，包含baseURL
*/
设备管理.listWaterWasteUsingGET.fullPath=`${axios.defaults.baseURL}/device/water/waste`
/**
* @description listWaterWasteUsingGET url链接，不包含baseURL
*/
设备管理.listWaterWasteUsingGET.path=`/device/water/waste`

export class 户外视窗 {
 
  /**
  * @summary 音量增
  * @param {String} [num] num
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async amplifyDisplayUsingPOST(num,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'post',
        url:'/display/amplify',
        data:{},
        params:{num},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 弹幕
  * @param {UserModel.DisplayBarrageDTO} [displaybarragedto] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async barrageDisplayUsingPOST(displaybarragedto,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'post',
        url:'/display/barrage',
        data:displaybarragedto,
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
  * @summary 截屏
  * @param {String} [num] num
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async captureDisplayUsingPOST(num,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'post',
        url:'/display/capture',
        data:{},
        params:{num},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 息屏
  * @param {String} [num] num
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async darkenDisplayUsingPOST(num,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'post',
        url:'/display/darken',
        data:{},
        params:{num},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 亮屏
  * @param {String} [num] num
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async lightenDisplayUsingPOST(num,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'post',
        url:'/display/lighten',
        data:{},
        params:{num},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 户外视窗列表
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async listDisplayUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/display/list',
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
  * @summary 户外视窗列表
  * @param {String} [num] num
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async messageDisplayUsingGET(num,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/display/message',
        data:{},
        params:{num},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 音量减
  * @param {String} [num] num
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async reduceDisplayUsingPOST(num,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'post',
        url:'/display/reduce',
        data:{},
        params:{num},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 重启
  * @param {String} [num] num
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async restartDisplayUsingPOST(num,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'post',
        url:'/display/restart',
        data:{},
        params:{num},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 消息
  * @param {UserModel.DisplayMsgListDTO} [displaymsglistdto] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async sendMsgToDisplayUsingPOST(displaymsglistdto,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'post',
        url:'/display/send',
        data:displaymsglistdto,
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
  * @summary 关机
  * @param {String} [num] num
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async shutDisplayUsingPOST(num,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'post',
        url:'/display/shut',
        data:{},
        params:{num},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 状态
  * @param {String} [num] num
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async stateDisplayUsingPOST(num,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'post',
        url:'/display/state',
        data:{},
        params:{num},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 获取状态
  * @param {String} [num] num
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getStateDisplayUsingGET(num,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/display/state/get',
        data:{},
        params:{num},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 升级
  * @param {String} [num] num
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async updateDisplayUsingPOST(num,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'post',
        url:'/display/update',
        data:{},
        params:{num},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
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

// class 户外视窗 static method properties bind
/**
* @description amplifyDisplayUsingPOST url链接，包含baseURL
*/
户外视窗.amplifyDisplayUsingPOST.fullPath=`${axios.defaults.baseURL}/display/amplify`
/**
* @description amplifyDisplayUsingPOST url链接，不包含baseURL
*/
户外视窗.amplifyDisplayUsingPOST.path=`/display/amplify`
/**
* @description barrageDisplayUsingPOST url链接，包含baseURL
*/
户外视窗.barrageDisplayUsingPOST.fullPath=`${axios.defaults.baseURL}/display/barrage`
/**
* @description barrageDisplayUsingPOST url链接，不包含baseURL
*/
户外视窗.barrageDisplayUsingPOST.path=`/display/barrage`
/**
* @description captureDisplayUsingPOST url链接，包含baseURL
*/
户外视窗.captureDisplayUsingPOST.fullPath=`${axios.defaults.baseURL}/display/capture`
/**
* @description captureDisplayUsingPOST url链接，不包含baseURL
*/
户外视窗.captureDisplayUsingPOST.path=`/display/capture`
/**
* @description darkenDisplayUsingPOST url链接，包含baseURL
*/
户外视窗.darkenDisplayUsingPOST.fullPath=`${axios.defaults.baseURL}/display/darken`
/**
* @description darkenDisplayUsingPOST url链接，不包含baseURL
*/
户外视窗.darkenDisplayUsingPOST.path=`/display/darken`
/**
* @description lightenDisplayUsingPOST url链接，包含baseURL
*/
户外视窗.lightenDisplayUsingPOST.fullPath=`${axios.defaults.baseURL}/display/lighten`
/**
* @description lightenDisplayUsingPOST url链接，不包含baseURL
*/
户外视窗.lightenDisplayUsingPOST.path=`/display/lighten`
/**
* @description listDisplayUsingGET url链接，包含baseURL
*/
户外视窗.listDisplayUsingGET.fullPath=`${axios.defaults.baseURL}/display/list`
/**
* @description listDisplayUsingGET url链接，不包含baseURL
*/
户外视窗.listDisplayUsingGET.path=`/display/list`
/**
* @description messageDisplayUsingGET url链接，包含baseURL
*/
户外视窗.messageDisplayUsingGET.fullPath=`${axios.defaults.baseURL}/display/message`
/**
* @description messageDisplayUsingGET url链接，不包含baseURL
*/
户外视窗.messageDisplayUsingGET.path=`/display/message`
/**
* @description reduceDisplayUsingPOST url链接，包含baseURL
*/
户外视窗.reduceDisplayUsingPOST.fullPath=`${axios.defaults.baseURL}/display/reduce`
/**
* @description reduceDisplayUsingPOST url链接，不包含baseURL
*/
户外视窗.reduceDisplayUsingPOST.path=`/display/reduce`
/**
* @description restartDisplayUsingPOST url链接，包含baseURL
*/
户外视窗.restartDisplayUsingPOST.fullPath=`${axios.defaults.baseURL}/display/restart`
/**
* @description restartDisplayUsingPOST url链接，不包含baseURL
*/
户外视窗.restartDisplayUsingPOST.path=`/display/restart`
/**
* @description sendMsgToDisplayUsingPOST url链接，包含baseURL
*/
户外视窗.sendMsgToDisplayUsingPOST.fullPath=`${axios.defaults.baseURL}/display/send`
/**
* @description sendMsgToDisplayUsingPOST url链接，不包含baseURL
*/
户外视窗.sendMsgToDisplayUsingPOST.path=`/display/send`
/**
* @description shutDisplayUsingPOST url链接，包含baseURL
*/
户外视窗.shutDisplayUsingPOST.fullPath=`${axios.defaults.baseURL}/display/shut`
/**
* @description shutDisplayUsingPOST url链接，不包含baseURL
*/
户外视窗.shutDisplayUsingPOST.path=`/display/shut`
/**
* @description stateDisplayUsingPOST url链接，包含baseURL
*/
户外视窗.stateDisplayUsingPOST.fullPath=`${axios.defaults.baseURL}/display/state`
/**
* @description stateDisplayUsingPOST url链接，不包含baseURL
*/
户外视窗.stateDisplayUsingPOST.path=`/display/state`
/**
* @description getStateDisplayUsingGET url链接，包含baseURL
*/
户外视窗.getStateDisplayUsingGET.fullPath=`${axios.defaults.baseURL}/display/state/get`
/**
* @description getStateDisplayUsingGET url链接，不包含baseURL
*/
户外视窗.getStateDisplayUsingGET.path=`/display/state/get`
/**
* @description updateDisplayUsingPOST url链接，包含baseURL
*/
户外视窗.updateDisplayUsingPOST.fullPath=`${axios.defaults.baseURL}/display/update`
/**
* @description updateDisplayUsingPOST url链接，不包含baseURL
*/
户外视窗.updateDisplayUsingPOST.path=`/display/update`

export class 机构管理 {
 
  /**
  * @summary 新增企业
  * @param {UserModel.Enterprise} [enterprise] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async addEnterpriseUsingPOST(enterprise,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'post',
        url:'/enterprise/add',
        data:enterprise,
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
  * @summary 删除企业
  * @param {Number} [enterpriseid] enterpriseId
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async deleteEnterpriseUsingDELETE(enterpriseid,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'delete',
        url:'/enterprise/delete',
        data:{},
        params:{enterpriseid},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 获取企业
  * @param {Number} [enterpriseid] enterpriseId
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getEnterpriseUsingGET(enterpriseid,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/enterprise/get',
        data:{},
        params:{enterpriseid},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 批量导入污染源企业
  * @param {String} [file] 文件
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async importEnterpriseUsingPOST(file,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'post',
        url:'/enterprise/import',
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
 
  /**
  * @summary 行业类别列表
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getIndustryListUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/enterprise/industry',
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
  * @summary 企业列表
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {String} [searchcontent] 检索内容
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getEnterpriseListUsingGET(_limit,_page,searchcontent,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/enterprise/list',
        data:{},
        params:{_limit,_page,searchcontent},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 污染源企业模板下载
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getEnterpriseTemplateUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "undefined";
      let options = {
        method:'get',
        url:'/enterprise/template',
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
  * @summary 更新企业
  * @param {UserModel.Enterprise} [enterprise] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async eidtEnterpriseUsingPUT(enterprise,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'put',
        url:'/enterprise/update',
        data:enterprise,
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

// class 机构管理 static method properties bind
/**
* @description addEnterpriseUsingPOST url链接，包含baseURL
*/
机构管理.addEnterpriseUsingPOST.fullPath=`${axios.defaults.baseURL}/enterprise/add`
/**
* @description addEnterpriseUsingPOST url链接，不包含baseURL
*/
机构管理.addEnterpriseUsingPOST.path=`/enterprise/add`
/**
* @description deleteEnterpriseUsingDELETE url链接，包含baseURL
*/
机构管理.deleteEnterpriseUsingDELETE.fullPath=`${axios.defaults.baseURL}/enterprise/delete`
/**
* @description deleteEnterpriseUsingDELETE url链接，不包含baseURL
*/
机构管理.deleteEnterpriseUsingDELETE.path=`/enterprise/delete`
/**
* @description getEnterpriseUsingGET url链接，包含baseURL
*/
机构管理.getEnterpriseUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/get`
/**
* @description getEnterpriseUsingGET url链接，不包含baseURL
*/
机构管理.getEnterpriseUsingGET.path=`/enterprise/get`
/**
* @description importEnterpriseUsingPOST url链接，包含baseURL
*/
机构管理.importEnterpriseUsingPOST.fullPath=`${axios.defaults.baseURL}/enterprise/import`
/**
* @description importEnterpriseUsingPOST url链接，不包含baseURL
*/
机构管理.importEnterpriseUsingPOST.path=`/enterprise/import`
/**
* @description getIndustryListUsingGET url链接，包含baseURL
*/
机构管理.getIndustryListUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/industry`
/**
* @description getIndustryListUsingGET url链接，不包含baseURL
*/
机构管理.getIndustryListUsingGET.path=`/enterprise/industry`
/**
* @description getEnterpriseListUsingGET url链接，包含baseURL
*/
机构管理.getEnterpriseListUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/list`
/**
* @description getEnterpriseListUsingGET url链接，不包含baseURL
*/
机构管理.getEnterpriseListUsingGET.path=`/enterprise/list`
/**
* @description getEnterpriseTemplateUsingGET url链接，包含baseURL
*/
机构管理.getEnterpriseTemplateUsingGET.fullPath=`${axios.defaults.baseURL}/enterprise/template`
/**
* @description getEnterpriseTemplateUsingGET url链接，不包含baseURL
*/
机构管理.getEnterpriseTemplateUsingGET.path=`/enterprise/template`
/**
* @description eidtEnterpriseUsingPUT url链接，包含baseURL
*/
机构管理.eidtEnterpriseUsingPUT.fullPath=`${axios.defaults.baseURL}/enterprise/update`
/**
* @description eidtEnterpriseUsingPUT url链接，不包含baseURL
*/
机构管理.eidtEnterpriseUsingPUT.path=`/enterprise/update`

export class 文件管理 {
 
  /**
  * @summary 删除文件
  * @param {Number} [id] 文件id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async deleteFileUsingDELETE(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'delete',
        url:'/file/delete',
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
  * @summary 获取文件列表
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {String} [searchcontent] 检索内容
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async listFileDTOUsingGET(_limit,_page,searchcontent,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/file/list',
        data:{},
        params:{_limit,_page,searchcontent},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
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

// class 文件管理 static method properties bind
/**
* @description deleteFileUsingDELETE url链接，包含baseURL
*/
文件管理.deleteFileUsingDELETE.fullPath=`${axios.defaults.baseURL}/file/delete`
/**
* @description deleteFileUsingDELETE url链接，不包含baseURL
*/
文件管理.deleteFileUsingDELETE.path=`/file/delete`
/**
* @description listFileDTOUsingGET url链接，包含baseURL
*/
文件管理.listFileDTOUsingGET.fullPath=`${axios.defaults.baseURL}/file/list`
/**
* @description listFileDTOUsingGET url链接，不包含baseURL
*/
文件管理.listFileDTOUsingGET.path=`/file/list`

export class 首页信息 {
 
  /**
  * @summary 获取监控设备信息
  * @param {Number} [cameraid] 设备id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getCameraOneUsingGET(cameraid,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/home/camera/one',
        data:{},
        params:{cameraid},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 获取数据列表
  * @param {Number} [datatype] 0：污水，1：雨水，2：用能
  * @param {Number} [enterpriseid] enterpriseId
  * @param {String} [loopnum] 用能的回路编号
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async listHomeItemDataInfoUsingGET(datatype,enterpriseid,loopnum,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/home/data/list',
        data:{},
        params:{datatype,enterpriseid,loopnum},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 获取设备详情
  * @param {Number} [enterpriseid] enterpriseId
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getNewHomeInfoDetailUsingGET(enterpriseid,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/home/enterprise/detail',
        data:{},
        params:{enterpriseid},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 获取首页信息
  * @param {Number} [pagenum] 0-3
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getNewHomeStatisticsUsingGET(pagenum,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/home/enterprise/list',
        data:{},
        params:{pagenum},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 获取国控点因子数据
  * @param {Number} [deviceid] 设备id
  * @param {String} [recordtype] 参数类型
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getNationRecordUsingGET(deviceid,recordtype,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/home/nation/factor',
        data:{},
        params:{deviceid,recordtype},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 获取国控点最新数据
  * @param {Number} [deviceid] 设备Id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getNationOneUsingGET(deviceid,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/home/nation/one',
        data:{},
        params:{deviceid},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 获取单个微站设备因子数据
  * @param {Number} [deviceid] 设备id
  * @param {String} [recordtype] 参数类型
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getDeviceRecordUsingGET(deviceid,recordtype,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/home/record/factor',
        data:{},
        params:{deviceid,recordtype},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 获取单个微站设备最新数据
  * @param {Number} [deviceid] 设备Id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getHomeOneUsingGET(deviceid,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/home/record/one',
        data:{},
        params:{deviceid},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 获取统计信息
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getStatisticsInfoUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/home/statistics',
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

// class 首页信息 static method properties bind
/**
* @description getCameraOneUsingGET url链接，包含baseURL
*/
首页信息.getCameraOneUsingGET.fullPath=`${axios.defaults.baseURL}/home/camera/one`
/**
* @description getCameraOneUsingGET url链接，不包含baseURL
*/
首页信息.getCameraOneUsingGET.path=`/home/camera/one`
/**
* @description listHomeItemDataInfoUsingGET url链接，包含baseURL
*/
首页信息.listHomeItemDataInfoUsingGET.fullPath=`${axios.defaults.baseURL}/home/data/list`
/**
* @description listHomeItemDataInfoUsingGET url链接，不包含baseURL
*/
首页信息.listHomeItemDataInfoUsingGET.path=`/home/data/list`
/**
* @description getNewHomeInfoDetailUsingGET url链接，包含baseURL
*/
首页信息.getNewHomeInfoDetailUsingGET.fullPath=`${axios.defaults.baseURL}/home/enterprise/detail`
/**
* @description getNewHomeInfoDetailUsingGET url链接，不包含baseURL
*/
首页信息.getNewHomeInfoDetailUsingGET.path=`/home/enterprise/detail`
/**
* @description getNewHomeStatisticsUsingGET url链接，包含baseURL
*/
首页信息.getNewHomeStatisticsUsingGET.fullPath=`${axios.defaults.baseURL}/home/enterprise/list`
/**
* @description getNewHomeStatisticsUsingGET url链接，不包含baseURL
*/
首页信息.getNewHomeStatisticsUsingGET.path=`/home/enterprise/list`
/**
* @description getNationRecordUsingGET url链接，包含baseURL
*/
首页信息.getNationRecordUsingGET.fullPath=`${axios.defaults.baseURL}/home/nation/factor`
/**
* @description getNationRecordUsingGET url链接，不包含baseURL
*/
首页信息.getNationRecordUsingGET.path=`/home/nation/factor`
/**
* @description getNationOneUsingGET url链接，包含baseURL
*/
首页信息.getNationOneUsingGET.fullPath=`${axios.defaults.baseURL}/home/nation/one`
/**
* @description getNationOneUsingGET url链接，不包含baseURL
*/
首页信息.getNationOneUsingGET.path=`/home/nation/one`
/**
* @description getDeviceRecordUsingGET url链接，包含baseURL
*/
首页信息.getDeviceRecordUsingGET.fullPath=`${axios.defaults.baseURL}/home/record/factor`
/**
* @description getDeviceRecordUsingGET url链接，不包含baseURL
*/
首页信息.getDeviceRecordUsingGET.path=`/home/record/factor`
/**
* @description getHomeOneUsingGET url链接，包含baseURL
*/
首页信息.getHomeOneUsingGET.fullPath=`${axios.defaults.baseURL}/home/record/one`
/**
* @description getHomeOneUsingGET url链接，不包含baseURL
*/
首页信息.getHomeOneUsingGET.path=`/home/record/one`
/**
* @description getStatisticsInfoUsingGET url链接，包含baseURL
*/
首页信息.getStatisticsInfoUsingGET.fullPath=`${axios.defaults.baseURL}/home/statistics`
/**
* @description getStatisticsInfoUsingGET url链接，不包含baseURL
*/
首页信息.getStatisticsInfoUsingGET.path=`/home/statistics`

export class 基础配置 {
 
  /**
  * @summary 获取位置信息
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getLocateInfoUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
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
  * @param {UserModel.Locate} [locate] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async updateLocateInfoUsingPUT(locate,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'put',
        url:'/locate/update',
        data:locate,
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

// class 基础配置 static method properties bind
/**
* @description getLocateInfoUsingGET url链接，包含baseURL
*/
基础配置.getLocateInfoUsingGET.fullPath=`${axios.defaults.baseURL}/locate/get`
/**
* @description getLocateInfoUsingGET url链接，不包含baseURL
*/
基础配置.getLocateInfoUsingGET.path=`/locate/get`
/**
* @description updateLocateInfoUsingPUT url链接，包含baseURL
*/
基础配置.updateLocateInfoUsingPUT.fullPath=`${axios.defaults.baseURL}/locate/update`
/**
* @description updateLocateInfoUsingPUT url链接，不包含baseURL
*/
基础配置.updateLocateInfoUsingPUT.path=`/locate/update`

export class 离线地图 {
 
  /**
  * @summary 下载地图
  * @param {Number} [mapinfoid] mapInfoId
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async downloadMapInfoUsingGET(mapinfoid,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/map/download',
        data:{},
        params:{mapinfoid},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 获取地图列表
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {undefined} [download] 是否下载
  * @param {Number} [provinceid] 省/直辖市
  * @param {String} [searchcontent] 检索内容
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async listMapInfoUsingGET(_limit,_page,download,provinceid,searchcontent,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/map/page',
        data:{},
        params:{_limit,_page,download,provinceid,searchcontent},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 获取省份列表
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async listProvinceUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/map/province',
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

// class 离线地图 static method properties bind
/**
* @description downloadMapInfoUsingGET url链接，包含baseURL
*/
离线地图.downloadMapInfoUsingGET.fullPath=`${axios.defaults.baseURL}/map/download`
/**
* @description downloadMapInfoUsingGET url链接，不包含baseURL
*/
离线地图.downloadMapInfoUsingGET.path=`/map/download`
/**
* @description listMapInfoUsingGET url链接，包含baseURL
*/
离线地图.listMapInfoUsingGET.fullPath=`${axios.defaults.baseURL}/map/page`
/**
* @description listMapInfoUsingGET url链接，不包含baseURL
*/
离线地图.listMapInfoUsingGET.path=`/map/page`
/**
* @description listProvinceUsingGET url链接，包含baseURL
*/
离线地图.listProvinceUsingGET.fullPath=`${axios.defaults.baseURL}/map/province`
/**
* @description listProvinceUsingGET url链接，不包含baseURL
*/
离线地图.listProvinceUsingGET.path=`/map/province`

export class 历史数据 {
 
  /**
  * @summary 下载报表
  * @param {Number} [_limit] 每页数量
  * @param {Number} [_page] 当前页码
  * @param {Number} [datatype] 0：污水，1：雨水，2：用能
  * @param {String} [endtime] 结束时间（yyyy-MM-dd）
  * @param {Number} [enterpriseid] 企业id
  * @param {Number} [reporttype] 0：实时，1：分钟，2：小时，3：天
  * @param {String} [starttime] 开始时间（yyyy-MM-dd）
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async downloadDataRecordUsingGET(_limit,_page,datatype,endtime,enterpriseid,reporttype,starttime,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "undefined";
      let options = {
        method:'get',
        url:'/record/download',
        data:{},
        params:{_limit,_page,datatype,endtime,enterpriseid,reporttype,starttime},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 获取数据报表
  * @param {Number} [_limit] 每页数量
  * @param {Number} [_page] 当前页码
  * @param {Number} [datatype] 0：污水，1：雨水，2：用能
  * @param {String} [endtime] 结束时间（yyyy-MM-dd）
  * @param {Number} [enterpriseid] 企业id
  * @param {Number} [reporttype] 0：实时，1：分钟，2：小时，3：天
  * @param {String} [starttime] 开始时间（yyyy-MM-dd）
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async pageDataRecordUsingGET(_limit,_page,datatype,endtime,enterpriseid,reporttype,starttime,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/record/list',
        data:{},
        params:{_limit,_page,datatype,endtime,enterpriseid,reporttype,starttime},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
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

// class 历史数据 static method properties bind
/**
* @description downloadDataRecordUsingGET url链接，包含baseURL
*/
历史数据.downloadDataRecordUsingGET.fullPath=`${axios.defaults.baseURL}/record/download`
/**
* @description downloadDataRecordUsingGET url链接，不包含baseURL
*/
历史数据.downloadDataRecordUsingGET.path=`/record/download`
/**
* @description pageDataRecordUsingGET url链接，包含baseURL
*/
历史数据.pageDataRecordUsingGET.fullPath=`${axios.defaults.baseURL}/record/list`
/**
* @description pageDataRecordUsingGET url链接，不包含baseURL
*/
历史数据.pageDataRecordUsingGET.path=`/record/list`

export class 报表管理 {
 
  /**
  * @summary 下载报表
  * @param {String} [datatime] 时间（yyyy-MM-dd）
  * @param {Number} [datatype] 0：污水，1：雨水，2：用能
  * @param {Number} [enterpriseid] 企业id
  * @param {Number} [reporttype] 0：日，1：月，2：年
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getEnterpriseTemplateUsingGET_1(datatime,datatype,enterpriseid,reporttype,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "undefined";
      let options = {
        method:'get',
        url:'/report/download',
        data:{},
        params:{datatime,datatype,enterpriseid,reporttype},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 获取数据报表
  * @param {Number} [datatype] 0：污水，1：雨水，2：用能
  * @param {String} [searchcontent] searchContent
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async listReportEnterpriseUsingGET(datatype,searchcontent,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/report/enterprise',
        data:{},
        params:{datatype,searchcontent},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 获取数据报表
  * @param {String} [datatime] 时间（yyyy-MM-dd）
  * @param {Number} [datatype] 0：污水，1：雨水，2：用能
  * @param {Number} [enterpriseid] 企业id
  * @param {Number} [reporttype] 0：日，1：月，2：年
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async listReportDataUsingGET(datatime,datatype,enterpriseid,reporttype,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/report/list',
        data:{},
        params:{datatime,datatype,enterpriseid,reporttype},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
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

// class 报表管理 static method properties bind
/**
* @description getEnterpriseTemplateUsingGET_1 url链接，包含baseURL
*/
报表管理.getEnterpriseTemplateUsingGET_1.fullPath=`${axios.defaults.baseURL}/report/download`
/**
* @description getEnterpriseTemplateUsingGET_1 url链接，不包含baseURL
*/
报表管理.getEnterpriseTemplateUsingGET_1.path=`/report/download`
/**
* @description listReportEnterpriseUsingGET url链接，包含baseURL
*/
报表管理.listReportEnterpriseUsingGET.fullPath=`${axios.defaults.baseURL}/report/enterprise`
/**
* @description listReportEnterpriseUsingGET url链接，不包含baseURL
*/
报表管理.listReportEnterpriseUsingGET.path=`/report/enterprise`
/**
* @description listReportDataUsingGET url链接，包含baseURL
*/
报表管理.listReportDataUsingGET.fullPath=`${axios.defaults.baseURL}/report/list`
/**
* @description listReportDataUsingGET url链接，不包含baseURL
*/
报表管理.listReportDataUsingGET.path=`/report/list`

export class 站点管理 {
 
  /**
  * @summary 获取基本信息列表
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getBaseInfoListUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/station/base/list',
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
  * @summary 新增设备（点位）
  * @param {UserModel.Device} [device] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async addDeviceUsingPOST(device,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'post',
        url:'/station/device/add',
        data:device,
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
  * @summary 删除设备（点位）
  * @param {Number} [deviceid] 设备Id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async deleteDeviceUsingDELETE(deviceid,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'delete',
        url:'/station/device/delete',
        data:{},
        params:{deviceid},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 获取设备（点位）
  * @param {Number} [deviceid] 设备Id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getDeviceUsingGET(deviceid,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/station/device/get',
        data:{},
        params:{deviceid},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 获取设备（点位）列表
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {String} [searchcontent] 检索内容
  * @param {Number} [typeid] 类型Id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getDeviceListUsingGET(_limit,_page,searchcontent,typeid,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/station/device/list',
        data:{},
        params:{_limit,_page,searchcontent,typeid},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 获取设备（点位）树
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getDeviceTreeUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/station/device/tree',
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
  * @summary 更新设备（点位）
  * @param {UserModel.Device} [device] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async eidtDeviceUsingPUT(device,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'put',
        url:'/station/device/update',
        data:device,
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
  * @summary 下载历史排名列表
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {String} [endtime] 结束时间：yyyy-MM-dd
  * @param {String} [name] 监测因子
  * @param {Number} [ordertype] 排序方式，1:顺序，2：倒叙，其他任何值均默认为1
  * @param {String} [searchcontent] 检索内容
  * @param {String} [starttime] 开始时间：yyyy-MM-dd
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async downloadHistoryListUsingGET(_limit,_page,endtime,name,ordertype,searchcontent,starttime,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "undefined";
      let options = {
        method:'get',
        url:'/station/download/history',
        data:{},
        params:{_limit,_page,endtime,name,ordertype,searchcontent,starttime},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 下载实时排名列表
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {String} [endtime] 结束时间：yyyy-MM-dd
  * @param {String} [name] 监测因子
  * @param {Number} [ordertype] 排序方式，1:顺序，2：倒叙，其他任何值均默认为1
  * @param {String} [searchcontent] 检索内容
  * @param {String} [starttime] 开始时间：yyyy-MM-dd
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async downloadRealtimeListUsingGET(_limit,_page,endtime,name,ordertype,searchcontent,starttime,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "undefined";
      let options = {
        method:'get',
        url:'/station/download/realtime',
        data:{},
        params:{_limit,_page,endtime,name,ordertype,searchcontent,starttime},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 获取监测因子列表
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getFactorListUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/station/factor/list',
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
  * @summary 获取监控列表
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getCameraListUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/station/home/camera',
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
  * @summary 获取首页列表
  * @param {UserModel.HomeReq} [homereq] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getHomeListUsingPOST(homereq,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'post',
        url:'/station/home/list',
        data:homereq,
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
  * @summary 获取历史排名列表
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {String} [endtime] 结束时间：yyyy-MM-dd
  * @param {String} [name] 监测因子
  * @param {Number} [ordertype] 排序方式，1:顺序，2：倒叙，其他任何值均默认为1
  * @param {String} [searchcontent] 检索内容
  * @param {String} [starttime] 开始时间：yyyy-MM-dd
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getHistoryListUsingGET(_limit,_page,endtime,name,ordertype,searchcontent,starttime,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/station/rank/history',
        data:{},
        params:{_limit,_page,endtime,name,ordertype,searchcontent,starttime},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 获取实时排名列表
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {String} [endtime] 结束时间：yyyy-MM-dd
  * @param {String} [name] 监测因子
  * @param {Number} [ordertype] 排序方式，1:顺序，2：倒叙，其他任何值均默认为1
  * @param {String} [searchcontent] 检索内容
  * @param {String} [starttime] 开始时间：yyyy-MM-dd
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getRealtimeListUsingGET(_limit,_page,endtime,name,ordertype,searchcontent,starttime,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/station/rank/realtime',
        data:{},
        params:{_limit,_page,endtime,name,ordertype,searchcontent,starttime},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
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

// class 站点管理 static method properties bind
/**
* @description getBaseInfoListUsingGET url链接，包含baseURL
*/
站点管理.getBaseInfoListUsingGET.fullPath=`${axios.defaults.baseURL}/station/base/list`
/**
* @description getBaseInfoListUsingGET url链接，不包含baseURL
*/
站点管理.getBaseInfoListUsingGET.path=`/station/base/list`
/**
* @description addDeviceUsingPOST url链接，包含baseURL
*/
站点管理.addDeviceUsingPOST.fullPath=`${axios.defaults.baseURL}/station/device/add`
/**
* @description addDeviceUsingPOST url链接，不包含baseURL
*/
站点管理.addDeviceUsingPOST.path=`/station/device/add`
/**
* @description deleteDeviceUsingDELETE url链接，包含baseURL
*/
站点管理.deleteDeviceUsingDELETE.fullPath=`${axios.defaults.baseURL}/station/device/delete`
/**
* @description deleteDeviceUsingDELETE url链接，不包含baseURL
*/
站点管理.deleteDeviceUsingDELETE.path=`/station/device/delete`
/**
* @description getDeviceUsingGET url链接，包含baseURL
*/
站点管理.getDeviceUsingGET.fullPath=`${axios.defaults.baseURL}/station/device/get`
/**
* @description getDeviceUsingGET url链接，不包含baseURL
*/
站点管理.getDeviceUsingGET.path=`/station/device/get`
/**
* @description getDeviceListUsingGET url链接，包含baseURL
*/
站点管理.getDeviceListUsingGET.fullPath=`${axios.defaults.baseURL}/station/device/list`
/**
* @description getDeviceListUsingGET url链接，不包含baseURL
*/
站点管理.getDeviceListUsingGET.path=`/station/device/list`
/**
* @description getDeviceTreeUsingGET url链接，包含baseURL
*/
站点管理.getDeviceTreeUsingGET.fullPath=`${axios.defaults.baseURL}/station/device/tree`
/**
* @description getDeviceTreeUsingGET url链接，不包含baseURL
*/
站点管理.getDeviceTreeUsingGET.path=`/station/device/tree`
/**
* @description eidtDeviceUsingPUT url链接，包含baseURL
*/
站点管理.eidtDeviceUsingPUT.fullPath=`${axios.defaults.baseURL}/station/device/update`
/**
* @description eidtDeviceUsingPUT url链接，不包含baseURL
*/
站点管理.eidtDeviceUsingPUT.path=`/station/device/update`
/**
* @description downloadHistoryListUsingGET url链接，包含baseURL
*/
站点管理.downloadHistoryListUsingGET.fullPath=`${axios.defaults.baseURL}/station/download/history`
/**
* @description downloadHistoryListUsingGET url链接，不包含baseURL
*/
站点管理.downloadHistoryListUsingGET.path=`/station/download/history`
/**
* @description downloadRealtimeListUsingGET url链接，包含baseURL
*/
站点管理.downloadRealtimeListUsingGET.fullPath=`${axios.defaults.baseURL}/station/download/realtime`
/**
* @description downloadRealtimeListUsingGET url链接，不包含baseURL
*/
站点管理.downloadRealtimeListUsingGET.path=`/station/download/realtime`
/**
* @description getFactorListUsingGET url链接，包含baseURL
*/
站点管理.getFactorListUsingGET.fullPath=`${axios.defaults.baseURL}/station/factor/list`
/**
* @description getFactorListUsingGET url链接，不包含baseURL
*/
站点管理.getFactorListUsingGET.path=`/station/factor/list`
/**
* @description getCameraListUsingGET url链接，包含baseURL
*/
站点管理.getCameraListUsingGET.fullPath=`${axios.defaults.baseURL}/station/home/camera`
/**
* @description getCameraListUsingGET url链接，不包含baseURL
*/
站点管理.getCameraListUsingGET.path=`/station/home/camera`
/**
* @description getHomeListUsingPOST url链接，包含baseURL
*/
站点管理.getHomeListUsingPOST.fullPath=`${axios.defaults.baseURL}/station/home/list`
/**
* @description getHomeListUsingPOST url链接，不包含baseURL
*/
站点管理.getHomeListUsingPOST.path=`/station/home/list`
/**
* @description getHistoryListUsingGET url链接，包含baseURL
*/
站点管理.getHistoryListUsingGET.fullPath=`${axios.defaults.baseURL}/station/rank/history`
/**
* @description getHistoryListUsingGET url链接，不包含baseURL
*/
站点管理.getHistoryListUsingGET.path=`/station/rank/history`
/**
* @description getRealtimeListUsingGET url链接，包含baseURL
*/
站点管理.getRealtimeListUsingGET.fullPath=`${axios.defaults.baseURL}/station/rank/realtime`
/**
* @description getRealtimeListUsingGET url链接，不包含baseURL
*/
站点管理.getRealtimeListUsingGET.path=`/station/rank/realtime`

export class 用户管理 {
 
  /**
  * @summary 新增用户
  * @param {UserModel.User} [user] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async addUserUsingPOST(user,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'post',
        url:'/user/add',
        data:user,
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
  * @param {UserModel.ResetPwd} [resetpwd] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async resetPasswardUsingPUT(resetpwd,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'put',
        url:'/user/change',
        data:resetpwd,
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
  * @summary 删除用户
  * @param {Number} [userid] 用户Id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async deleteUserUsingDELETE(userid,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'delete',
        url:'/user/delete',
        data:{},
        params:{userid},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
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
  * @param {Number} [userid] 用户Id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getUserUsingGET(userid,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/user/get',
        data:{},
        params:{userid},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
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
  * @param {String} [searchcontent] 检索内容
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getUserListUsingGET(_limit,_page,searchcontent,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/user/list',
        data:{},
        params:{_limit,_page,searchcontent},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
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
  * @param {UserModel.User} [user] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async loginUsingPOST(user,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'post',
        url:'/user/login',
        data:user,
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
  * @summary 修改密码（管理员）
  * @param {UserModel.User} [user] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async revisePasswordUsingPUT(user,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'put',
        url:'/user/revise',
        data:user,
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
  * @summary 用户类型列表
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getRoleListUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/user/role',
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
  * @summary 更新用户
  * @param {UserModel.User} [user] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async updateUserUsingPUT(user,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'put',
        url:'/user/update',
        data:user,
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

// class 用户管理 static method properties bind
/**
* @description addUserUsingPOST url链接，包含baseURL
*/
用户管理.addUserUsingPOST.fullPath=`${axios.defaults.baseURL}/user/add`
/**
* @description addUserUsingPOST url链接，不包含baseURL
*/
用户管理.addUserUsingPOST.path=`/user/add`
/**
* @description resetPasswardUsingPUT url链接，包含baseURL
*/
用户管理.resetPasswardUsingPUT.fullPath=`${axios.defaults.baseURL}/user/change`
/**
* @description resetPasswardUsingPUT url链接，不包含baseURL
*/
用户管理.resetPasswardUsingPUT.path=`/user/change`
/**
* @description deleteUserUsingDELETE url链接，包含baseURL
*/
用户管理.deleteUserUsingDELETE.fullPath=`${axios.defaults.baseURL}/user/delete`
/**
* @description deleteUserUsingDELETE url链接，不包含baseURL
*/
用户管理.deleteUserUsingDELETE.path=`/user/delete`
/**
* @description getUserUsingGET url链接，包含baseURL
*/
用户管理.getUserUsingGET.fullPath=`${axios.defaults.baseURL}/user/get`
/**
* @description getUserUsingGET url链接，不包含baseURL
*/
用户管理.getUserUsingGET.path=`/user/get`
/**
* @description getUserListUsingGET url链接，包含baseURL
*/
用户管理.getUserListUsingGET.fullPath=`${axios.defaults.baseURL}/user/list`
/**
* @description getUserListUsingGET url链接，不包含baseURL
*/
用户管理.getUserListUsingGET.path=`/user/list`
/**
* @description loginUsingPOST url链接，包含baseURL
*/
用户管理.loginUsingPOST.fullPath=`${axios.defaults.baseURL}/user/login`
/**
* @description loginUsingPOST url链接，不包含baseURL
*/
用户管理.loginUsingPOST.path=`/user/login`
/**
* @description revisePasswordUsingPUT url链接，包含baseURL
*/
用户管理.revisePasswordUsingPUT.fullPath=`${axios.defaults.baseURL}/user/revise`
/**
* @description revisePasswordUsingPUT url链接，不包含baseURL
*/
用户管理.revisePasswordUsingPUT.path=`/user/revise`
/**
* @description getRoleListUsingGET url链接，包含baseURL
*/
用户管理.getRoleListUsingGET.fullPath=`${axios.defaults.baseURL}/user/role`
/**
* @description getRoleListUsingGET url链接，不包含baseURL
*/
用户管理.getRoleListUsingGET.path=`/user/role`
/**
* @description updateUserUsingPUT url链接，包含baseURL
*/
用户管理.updateUserUsingPUT.fullPath=`${axios.defaults.baseURL}/user/update`
/**
* @description updateUserUsingPUT url链接，不包含baseURL
*/
用户管理.updateUserUsingPUT.path=`/user/update`

export class 水的报警 {
 
  /**
  * @summary 报警数量
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async getWaterAlarmCountUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/water/alarm/count',
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
  * @summary 报警列表
  * @param {Number} [id] id
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async waterAlarmDetailUsingGET(id,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/water/alarm/detail',
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
  * @summary 监测类型
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async listAlarmFormUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/water/alarm/form',
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
  * @summary 报警列表
  * @param {Number} [_limit] 条数
  * @param {Number} [_page] 页码
  * @param {String} [endtime] 结束时间：yyyy-MM-dd
  * @param {Number} [formid] 监测类型
  * @param {String} [searchcontent] 检索内容
  * @param {String} [starttime] 开始时间：yyyy-MM-dd
  * @param {Number} [typeid] 报警类型
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async listWaterAlarmUsingGET(_limit,_page,endtime,formid,searchcontent,starttime,typeid,cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/water/alarm/list',
        data:{},
        params:{_limit,_page,endtime,formid,searchcontent,starttime,typeid},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?cancelSource.token:undefined,
        onUploadProgress:uploadProgress,
        onDownloadProgress:downloadProgress
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 报警类型
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  * @param {Function} [uploadProgress] 上传回调函数
  * @param {Function} [downloadProgress] 下载回调函数
  */
  static async listAlarmTypeUsingGET(cancelSource,uploadProgress,downloadProgress){
    return await new Promise((resolve,reject)=>{
      let responseType = "blob";
      let options = {
        method:'get',
        url:'/water/alarm/type',
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

// class 水的报警 static method properties bind
/**
* @description getWaterAlarmCountUsingGET url链接，包含baseURL
*/
水的报警.getWaterAlarmCountUsingGET.fullPath=`${axios.defaults.baseURL}/water/alarm/count`
/**
* @description getWaterAlarmCountUsingGET url链接，不包含baseURL
*/
水的报警.getWaterAlarmCountUsingGET.path=`/water/alarm/count`
/**
* @description waterAlarmDetailUsingGET url链接，包含baseURL
*/
水的报警.waterAlarmDetailUsingGET.fullPath=`${axios.defaults.baseURL}/water/alarm/detail`
/**
* @description waterAlarmDetailUsingGET url链接，不包含baseURL
*/
水的报警.waterAlarmDetailUsingGET.path=`/water/alarm/detail`
/**
* @description listAlarmFormUsingGET url链接，包含baseURL
*/
水的报警.listAlarmFormUsingGET.fullPath=`${axios.defaults.baseURL}/water/alarm/form`
/**
* @description listAlarmFormUsingGET url链接，不包含baseURL
*/
水的报警.listAlarmFormUsingGET.path=`/water/alarm/form`
/**
* @description listWaterAlarmUsingGET url链接，包含baseURL
*/
水的报警.listWaterAlarmUsingGET.fullPath=`${axios.defaults.baseURL}/water/alarm/list`
/**
* @description listWaterAlarmUsingGET url链接，不包含baseURL
*/
水的报警.listWaterAlarmUsingGET.path=`/water/alarm/list`
/**
* @description listAlarmTypeUsingGET url链接，包含baseURL
*/
水的报警.listAlarmTypeUsingGET.fullPath=`${axios.defaults.baseURL}/water/alarm/type`
/**
* @description listAlarmTypeUsingGET url链接，不包含baseURL
*/
水的报警.listAlarmTypeUsingGET.path=`/water/alarm/type`
