export class AnalysisPollution {
  
    /**
     *
     * @param {Number} deviceId 点位Id
     * @param {String} deviceName 点位名称
     * @param {String} deviceNum 设备编号
     * @param {Number} excellent 优
     * @param {Number} fine 良
     * @param {Number} light 轻度
     * @param {Number} moderate 中度
     * @param {Number} other 其他
     * @param {undefined} pollution 首要污染物列表
     * @param {Number} serialNum 序号
     * @param {Number} serious 严重
     * @param {Number} severe 重度
     */ 
    constructor(deviceId = undefined,deviceName = undefined,deviceNum = undefined,excellent = undefined,fine = undefined,light = undefined,moderate = undefined,other = undefined,pollution = undefined,serialNum = undefined,serious = undefined,severe = undefined){
        this.deviceId = deviceId
        this.deviceName = deviceName
        this.deviceNum = deviceNum
        this.excellent = excellent
        this.fine = fine
        this.light = light
        this.moderate = moderate
        this.other = other
        this.pollution = pollution
        this.serialNum = serialNum
        this.serious = serious
        this.severe = severe
    }
       
    /**
     * 点位Id
     * @type {Number}
     */
    deviceId=undefined   
    /**
     * 点位名称
     * @type {String}
     */
    deviceName=undefined   
    /**
     * 设备编号
     * @type {String}
     */
    deviceNum=undefined   
    /**
     * 优
     * @type {Number}
     */
    excellent=undefined   
    /**
     * 良
     * @type {Number}
     */
    fine=undefined   
    /**
     * 轻度
     * @type {Number}
     */
    light=undefined   
    /**
     * 中度
     * @type {Number}
     */
    moderate=undefined   
    /**
     * 其他
     * @type {Number}
     */
    other=undefined   
    /**
     * 首要污染物列表
     * @type {undefined}
     */
    pollution=undefined   
    /**
     * 序号
     * @type {Number}
     */
    serialNum=undefined   
    /**
     * 严重
     * @type {Number}
     */
    serious=undefined   
    /**
     * 重度
     * @type {Number}
     */
    severe=undefined
    
}
export class AnalysisReq {
  
    /**
     *
     * @param {Number} dataType 数据类型（0：小时；1：天）
     * @param {Number} deviceId 设备ID
     * @param {Array} deviceList 设备ID
     * @param {String} endTime 截止时间
     * @param {String} factor 检测因子
     * @param {String} startTime 起始时间
     */ 
    constructor(dataType = undefined,deviceId = undefined,deviceList = undefined,endTime = undefined,factor = undefined,startTime = undefined){
        this.dataType = dataType
        this.deviceId = deviceId
        this.deviceList = deviceList
        this.endTime = endTime
        this.factor = factor
        this.startTime = startTime
    }
       
    /**
     * 数据类型（0：小时；1：天）
     * @type {Number}
     */
    dataType=undefined   
    /**
     * 设备ID
     * @type {Number}
     */
    deviceId=undefined   
    /**
     * 设备ID
     * @type {Array}
     */
    deviceList=undefined   
    /**
     * 截止时间
     * @type {String}
     */
    endTime=undefined   
    /**
     * 检测因子
     * @type {String}
     */
    factor=undefined   
    /**
     * 起始时间
     * @type {String}
     */
    startTime=undefined
    
}
export class BoundaryListVO {
  
    /**
     *
     * @param {String} boundaryVal 报警规则
     * @param {String} createTime 设置时间
     * @param {String} deviceName 设备名称
     * @param {String} deviceNum 设备编号
     * @param {String} factorName 报警参数
     * @param {Number} id 主键Id
     * @param {Number} serialNum 序号
     */ 
    constructor(boundaryVal = undefined,createTime = undefined,deviceName = undefined,deviceNum = undefined,factorName = undefined,id = undefined,serialNum = undefined){
        this.boundaryVal = boundaryVal
        this.createTime = createTime
        this.deviceName = deviceName
        this.deviceNum = deviceNum
        this.factorName = factorName
        this.id = id
        this.serialNum = serialNum
    }
       
    /**
     * 报警规则
     * @type {String}
     */
    boundaryVal=undefined   
    /**
     * 设置时间
     * @type {String}
     */
    createTime=undefined   
    /**
     * 设备名称
     * @type {String}
     */
    deviceName=undefined   
    /**
     * 设备编号
     * @type {String}
     */
    deviceNum=undefined   
    /**
     * 报警参数
     * @type {String}
     */
    factorName=undefined   
    /**
     * 主键Id
     * @type {Number}
     */
    id=undefined   
    /**
     * 序号
     * @type {Number}
     */
    serialNum=undefined
    
}
export class BoundaryVO {
  
    /**
     *
     * @param {String} deviceNum 设备编号
     * @param {Number} factorId 因子Id
     * @param {Number} id 主键Id
     * @param {undefined} lowerVal 下限值
     * @param {Number} rangeId 范围Id
     * @param {undefined} referVal 参考值
     * @param {Number} serialNum 序号
     * @param {undefined} upperVal 上限值
     */ 
    constructor(deviceNum = undefined,factorId = undefined,id = undefined,lowerVal = undefined,rangeId = undefined,referVal = undefined,serialNum = undefined,upperVal = undefined){
        this.deviceNum = deviceNum
        this.factorId = factorId
        this.id = id
        this.lowerVal = lowerVal
        this.rangeId = rangeId
        this.referVal = referVal
        this.serialNum = serialNum
        this.upperVal = upperVal
    }
       
    /**
     * 设备编号
     * @type {String}
     */
    deviceNum=undefined   
    /**
     * 因子Id
     * @type {Number}
     */
    factorId=undefined   
    /**
     * 主键Id
     * @type {Number}
     */
    id=undefined   
    /**
     * 下限值
     * @type {undefined}
     */
    lowerVal=undefined   
    /**
     * 范围Id
     * @type {Number}
     */
    rangeId=undefined   
    /**
     * 参考值
     * @type {undefined}
     */
    referVal=undefined   
    /**
     * 序号
     * @type {Number}
     */
    serialNum=undefined   
    /**
     * 上限值
     * @type {undefined}
     */
    upperVal=undefined
    
}
export class CameraInfo {
  
    /**
     *
     * @param {Array} cameraList 监控设备列表
     * @param {String} cmrAct 账号
     * @param {String} cmrIp ip
     * @param {String} cmrName 名称
     * @param {String} cmrPw 密码
     * @param {Number} httpPort http端口
     * @param {Number} id 主键id
     * @param {String} latitude 纬度
     * @param {String} location 地址
     * @param {String} longitude 经度
     * @param {Number} nvrChannel nvr通道号
     * @param {undefined} nvrFlag 是否nvr
     * @param {Number} nvrId nvr的id
     * @param {String} nvrName nvr名称
     * @param {undefined} onlineFlag 是否在线
     * @param {Number} serialNum 序号
     * @param {Number} servicePort 服务端口
     */ 
    constructor(cameraList = undefined,cmrAct = undefined,cmrIp = undefined,cmrName = undefined,cmrPw = undefined,httpPort = undefined,id = undefined,latitude = undefined,location = undefined,longitude = undefined,nvrChannel = undefined,nvrFlag = undefined,nvrId = undefined,nvrName = undefined,onlineFlag = undefined,serialNum = undefined,servicePort = undefined){
        this.cameraList = cameraList
        this.cmrAct = cmrAct
        this.cmrIp = cmrIp
        this.cmrName = cmrName
        this.cmrPw = cmrPw
        this.httpPort = httpPort
        this.id = id
        this.latitude = latitude
        this.location = location
        this.longitude = longitude
        this.nvrChannel = nvrChannel
        this.nvrFlag = nvrFlag
        this.nvrId = nvrId
        this.nvrName = nvrName
        this.onlineFlag = onlineFlag
        this.serialNum = serialNum
        this.servicePort = servicePort
    }
       
    /**
     * 监控设备列表
     * @type {Array}
     */
    cameraList=undefined   
    /**
     * 账号
     * @type {String}
     */
    cmrAct=undefined   
    /**
     * ip
     * @type {String}
     */
    cmrIp=undefined   
    /**
     * 名称
     * @type {String}
     */
    cmrName=undefined   
    /**
     * 密码
     * @type {String}
     */
    cmrPw=undefined   
    /**
     * http端口
     * @type {Number}
     */
    httpPort=undefined   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 纬度
     * @type {String}
     */
    latitude=undefined   
    /**
     * 地址
     * @type {String}
     */
    location=undefined   
    /**
     * 经度
     * @type {String}
     */
    longitude=undefined   
    /**
     * nvr通道号
     * @type {Number}
     */
    nvrChannel=undefined   
    /**
     * 是否nvr
     * @type {undefined}
     */
    nvrFlag=undefined   
    /**
     * nvr的id
     * @type {Number}
     */
    nvrId=undefined   
    /**
     * nvr名称
     * @type {String}
     */
    nvrName=undefined   
    /**
     * 是否在线
     * @type {undefined}
     */
    onlineFlag=undefined   
    /**
     * 序号
     * @type {Number}
     */
    serialNum=undefined   
    /**
     * 服务端口
     * @type {Number}
     */
    servicePort=undefined
    
}
export class Contrast {
  
    /**
     *
     * @param {undefined} airPressure 气压
     * @param {undefined} aqiValue AQI值
     * @param {String} deviceName 设备名称
     * @param {undefined} deviceOnline 在线状态
     * @param {undefined} exceed 是否超标
     * @param {undefined} factorCO CO
     * @param {undefined} factorNO2 NO2
     * @param {undefined} factorO3 O3
     * @param {undefined} factorPM10 PM10
     * @param {undefined} factorPM25 PM25
     * @param {undefined} factorSO2 SO2
     * @param {undefined} humidity 湿度
     * @param {String} pollutant 首要污染
     * @param {undefined} temperature 温度
     * @param {undefined} threshold 阈值
     * @param {String} timeSlot 时间片段
     * @param {undefined} tvoc TVOC
     * @param {undefined} windSpeed 风速
     */ 
    constructor(airPressure = undefined,aqiValue = undefined,deviceName = undefined,deviceOnline = undefined,exceed = undefined,factorCO = undefined,factorNO2 = undefined,factorO3 = undefined,factorPM10 = undefined,factorPM25 = undefined,factorSO2 = undefined,humidity = undefined,pollutant = undefined,temperature = undefined,threshold = undefined,timeSlot = undefined,tvoc = undefined,windSpeed = undefined){
        this.airPressure = airPressure
        this.aqiValue = aqiValue
        this.deviceName = deviceName
        this.deviceOnline = deviceOnline
        this.exceed = exceed
        this.factorCO = factorCO
        this.factorNO2 = factorNO2
        this.factorO3 = factorO3
        this.factorPM10 = factorPM10
        this.factorPM25 = factorPM25
        this.factorSO2 = factorSO2
        this.humidity = humidity
        this.pollutant = pollutant
        this.temperature = temperature
        this.threshold = threshold
        this.timeSlot = timeSlot
        this.tvoc = tvoc
        this.windSpeed = windSpeed
    }
       
    /**
     * 气压
     * @type {undefined}
     */
    airPressure=undefined   
    /**
     * AQI值
     * @type {undefined}
     */
    aqiValue=undefined   
    /**
     * 设备名称
     * @type {String}
     */
    deviceName=undefined   
    /**
     * 在线状态
     * @type {undefined}
     */
    deviceOnline=undefined   
    /**
     * 是否超标
     * @type {undefined}
     */
    exceed=undefined   
    /**
     * CO
     * @type {undefined}
     */
    factorCO=undefined   
    /**
     * NO2
     * @type {undefined}
     */
    factorNO2=undefined   
    /**
     * O3
     * @type {undefined}
     */
    factorO3=undefined   
    /**
     * PM10
     * @type {undefined}
     */
    factorPM10=undefined   
    /**
     * PM25
     * @type {undefined}
     */
    factorPM25=undefined   
    /**
     * SO2
     * @type {undefined}
     */
    factorSO2=undefined   
    /**
     * 湿度
     * @type {undefined}
     */
    humidity=undefined   
    /**
     * 首要污染
     * @type {String}
     */
    pollutant=undefined   
    /**
     * 温度
     * @type {undefined}
     */
    temperature=undefined   
    /**
     * 阈值
     * @type {undefined}
     */
    threshold=undefined   
    /**
     * 时间片段
     * @type {String}
     */
    timeSlot=undefined   
    /**
     * TVOC
     * @type {undefined}
     */
    tvoc=undefined   
    /**
     * 风速
     * @type {undefined}
     */
    windSpeed=undefined
    
}
export class Device {
  
    /**
     *
     * @param {Number} aqiValue AQI值
     * @param {Number} cameraId 监控设备Id
     * @param {Number} deviceId 设备Id
     * @param {String} deviceName 设备名称
     * @param {String} deviceNum 设备编号
     * @param {undefined} deviceOnline 设备在线状态
     * @param {String} deviceType 点位类型
     * @param {String} district 区域代码
     * @param {String} districtName 行政区域
     * @param {Array} environList 环境要素Id列表
     * @param {Array} factorList 参数因子Id列表
     * @param {Number} lastDataId 最后一次数据Id
     * @param {String} latitude 纬度
     * @param {String} location 详细地址
     * @param {String} longitude 经度
     * @param {String} manufacturer 设备厂商
     * @param {String} pollutant 首要污染
     * @param {Number} serialNum 序号
     * @param {Number} typeId 类型id
     */ 
    constructor(aqiValue = undefined,cameraId = undefined,deviceId = undefined,deviceName = undefined,deviceNum = undefined,deviceOnline = undefined,deviceType = undefined,district = undefined,districtName = undefined,environList = undefined,factorList = undefined,lastDataId = undefined,latitude = undefined,location = undefined,longitude = undefined,manufacturer = undefined,pollutant = undefined,serialNum = undefined,typeId = undefined){
        this.aqiValue = aqiValue
        this.cameraId = cameraId
        this.deviceId = deviceId
        this.deviceName = deviceName
        this.deviceNum = deviceNum
        this.deviceOnline = deviceOnline
        this.deviceType = deviceType
        this.district = district
        this.districtName = districtName
        this.environList = environList
        this.factorList = factorList
        this.lastDataId = lastDataId
        this.latitude = latitude
        this.location = location
        this.longitude = longitude
        this.manufacturer = manufacturer
        this.pollutant = pollutant
        this.serialNum = serialNum
        this.typeId = typeId
    }
       
    /**
     * AQI值
     * @type {Number}
     */
    aqiValue=undefined   
    /**
     * 监控设备Id
     * @type {Number}
     */
    cameraId=undefined   
    /**
     * 设备Id
     * @type {Number}
     */
    deviceId=undefined   
    /**
     * 设备名称
     * @type {String}
     */
    deviceName=undefined   
    /**
     * 设备编号
     * @type {String}
     */
    deviceNum=undefined   
    /**
     * 设备在线状态
     * @type {undefined}
     */
    deviceOnline=undefined   
    /**
     * 点位类型
     * @type {String}
     */
    deviceType=undefined   
    /**
     * 区域代码
     * @type {String}
     */
    district=undefined   
    /**
     * 行政区域
     * @type {String}
     */
    districtName=undefined   
    /**
     * 环境要素Id列表
     * @type {Array}
     */
    environList=undefined   
    /**
     * 参数因子Id列表
     * @type {Array}
     */
    factorList=undefined   
    /**
     * 最后一次数据Id
     * @type {Number}
     */
    lastDataId=undefined   
    /**
     * 纬度
     * @type {String}
     */
    latitude=undefined   
    /**
     * 详细地址
     * @type {String}
     */
    location=undefined   
    /**
     * 经度
     * @type {String}
     */
    longitude=undefined   
    /**
     * 设备厂商
     * @type {String}
     */
    manufacturer=undefined   
    /**
     * 首要污染
     * @type {String}
     */
    pollutant=undefined   
    /**
     * 序号
     * @type {Number}
     */
    serialNum=undefined   
    /**
     * 类型id
     * @type {Number}
     */
    typeId=undefined
    
}
export class DeviceAlarm {
  
    /**
     *
     * @param {Number} alarmId 设备Id
     * @param {String} alarmType 报警类型
     * @param {Number} alarmTypeId 报警类型Id
     * @param {String} boundaryVal 报警规则
     * @param {Number} cameraId 摄像头id
     * @param {Number} deviceId 设备Id
     * @param {String} deviceName 设备名称
     * @param {String} deviceNum 设备编号
     * @param {Number} deviceType 设备类型(1:监测设备,2:户外视窗)
     * @param {String} nvrAct 账号
     * @param {Number} nvrChannel 
     * @param {Number} nvrId 
     * @param {String} nvrIp 
     * @param {Number} nvrPort 
     * @param {String} nvrPw 密码
     * @param {String} occurTime 发生时间
     * @param {String} recoverTime 恢复时间
     * @param {Number} serialNum 序号
     */ 
    constructor(alarmId = undefined,alarmType = undefined,alarmTypeId = undefined,boundaryVal = undefined,cameraId = undefined,deviceId = undefined,deviceName = undefined,deviceNum = undefined,deviceType = undefined,nvrAct = undefined,nvrChannel = undefined,nvrId = undefined,nvrIp = undefined,nvrPort = undefined,nvrPw = undefined,occurTime = undefined,recoverTime = undefined,serialNum = undefined){
        this.alarmId = alarmId
        this.alarmType = alarmType
        this.alarmTypeId = alarmTypeId
        this.boundaryVal = boundaryVal
        this.cameraId = cameraId
        this.deviceId = deviceId
        this.deviceName = deviceName
        this.deviceNum = deviceNum
        this.deviceType = deviceType
        this.nvrAct = nvrAct
        this.nvrChannel = nvrChannel
        this.nvrId = nvrId
        this.nvrIp = nvrIp
        this.nvrPort = nvrPort
        this.nvrPw = nvrPw
        this.occurTime = occurTime
        this.recoverTime = recoverTime
        this.serialNum = serialNum
    }
       
    /**
     * 设备Id
     * @type {Number}
     */
    alarmId=undefined   
    /**
     * 报警类型
     * @type {String}
     */
    alarmType=undefined   
    /**
     * 报警类型Id
     * @type {Number}
     */
    alarmTypeId=undefined   
    /**
     * 报警规则
     * @type {String}
     */
    boundaryVal=undefined   
    /**
     * 摄像头id
     * @type {Number}
     */
    cameraId=undefined   
    /**
     * 设备Id
     * @type {Number}
     */
    deviceId=undefined   
    /**
     * 设备名称
     * @type {String}
     */
    deviceName=undefined   
    /**
     * 设备编号
     * @type {String}
     */
    deviceNum=undefined   
    /**
     * 设备类型(1:监测设备,2:户外视窗)
     * @type {Number}
     */
    deviceType=undefined   
    /**
     * 账号
     * @type {String}
     */
    nvrAct=undefined   
    /**
     * 
     * @type {Number}
     */
    nvrChannel=undefined   
    /**
     * 
     * @type {Number}
     */
    nvrId=undefined   
    /**
     * 
     * @type {String}
     */
    nvrIp=undefined   
    /**
     * 
     * @type {Number}
     */
    nvrPort=undefined   
    /**
     * 密码
     * @type {String}
     */
    nvrPw=undefined   
    /**
     * 发生时间
     * @type {String}
     */
    occurTime=undefined   
    /**
     * 恢复时间
     * @type {String}
     */
    recoverTime=undefined   
    /**
     * 序号
     * @type {Number}
     */
    serialNum=undefined
    
}
export class DeviceAlarmSelect {
  
    /**
     *
     * @param {Number} deviceId 设备Id
     * @param {String} deviceName 设备名称
     * @param {String} deviceNum 设备编号
     * @param {Array} factorList 监测因子列表
     */ 
    constructor(deviceId = undefined,deviceName = undefined,deviceNum = undefined,factorList = undefined){
        this.deviceId = deviceId
        this.deviceName = deviceName
        this.deviceNum = deviceNum
        this.factorList = factorList
    }
       
    /**
     * 设备Id
     * @type {Number}
     */
    deviceId=undefined   
    /**
     * 设备名称
     * @type {String}
     */
    deviceName=undefined   
    /**
     * 设备编号
     * @type {String}
     */
    deviceNum=undefined   
    /**
     * 监测因子列表
     * @type {Array}
     */
    factorList=undefined
    
}
export class DeviceDataDTO {
  
    /**
     *
     * @param {undefined} alarmFlag 是否报警
     * @param {String} desc 描述
     * @param {String} flag 标志
     * @param {String} name 名称
     * @param {String} unit 单位
     * @param {undefined} val 数值
     */ 
    constructor(alarmFlag = undefined,desc = undefined,flag = undefined,name = undefined,unit = undefined,val = undefined){
        this.alarmFlag = alarmFlag
        this.desc = desc
        this.flag = flag
        this.name = name
        this.unit = unit
        this.val = val
    }
       
    /**
     * 是否报警
     * @type {undefined}
     */
    alarmFlag=undefined   
    /**
     * 描述
     * @type {String}
     */
    desc=undefined   
    /**
     * 标志
     * @type {String}
     */
    flag=undefined   
    /**
     * 名称
     * @type {String}
     */
    name=undefined   
    /**
     * 单位
     * @type {String}
     */
    unit=undefined   
    /**
     * 数值
     * @type {undefined}
     */
    val=undefined
    
}
export class DeviceLoopDTO {
  
    /**
     *
     * @param {Number} id id
     * @param {String} moniker 名称
     * @param {String} number 编号
     */ 
    constructor(id = undefined,moniker = undefined,number = undefined){
        this.id = id
        this.moniker = moniker
        this.number = number
    }
       
    /**
     * id
     * @type {Number}
     */
    id=undefined   
    /**
     * 名称
     * @type {String}
     */
    moniker=undefined   
    /**
     * 编号
     * @type {String}
     */
    number=undefined
    
}
export class DevicePowerDTO {
  
    /**
     *
     * @param {Number} enterpriseId 企业id
     * @param {String} enterpriseName 企业名称
     * @param {Number} id id
     * @param {Array} list 回路列表
     * @param {String} number 编号
     */ 
    constructor(enterpriseId = undefined,enterpriseName = undefined,id = undefined,list = undefined,number = undefined){
        this.enterpriseId = enterpriseId
        this.enterpriseName = enterpriseName
        this.id = id
        this.list = list
        this.number = number
    }
       
    /**
     * 企业id
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 企业名称
     * @type {String}
     */
    enterpriseName=undefined   
    /**
     * id
     * @type {Number}
     */
    id=undefined   
    /**
     * 回路列表
     * @type {Array}
     */
    list=undefined   
    /**
     * 编号
     * @type {String}
     */
    number=undefined
    
}
export class DeviceWaterDTO {
  
    /**
     *
     * @param {Number} enterpriseId 企业id
     * @param {String} enterpriseName 企业名称
     * @param {Number} id id
     * @param {String} number 编号
     * @param {Array} rainIds 雨水项目
     * @param {String} rainNames 雨水
     * @param {Number} typeId 类型id
     * @param {String} typeName 类型
     * @param {Array} wasteIds 污水项目
     * @param {String} wasteNames 污水
     */ 
    constructor(enterpriseId = undefined,enterpriseName = undefined,id = undefined,number = undefined,rainIds = undefined,rainNames = undefined,typeId = undefined,typeName = undefined,wasteIds = undefined,wasteNames = undefined){
        this.enterpriseId = enterpriseId
        this.enterpriseName = enterpriseName
        this.id = id
        this.number = number
        this.rainIds = rainIds
        this.rainNames = rainNames
        this.typeId = typeId
        this.typeName = typeName
        this.wasteIds = wasteIds
        this.wasteNames = wasteNames
    }
       
    /**
     * 企业id
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 企业名称
     * @type {String}
     */
    enterpriseName=undefined   
    /**
     * id
     * @type {Number}
     */
    id=undefined   
    /**
     * 编号
     * @type {String}
     */
    number=undefined   
    /**
     * 雨水项目
     * @type {Array}
     */
    rainIds=undefined   
    /**
     * 雨水
     * @type {String}
     */
    rainNames=undefined   
    /**
     * 类型id
     * @type {Number}
     */
    typeId=undefined   
    /**
     * 类型
     * @type {String}
     */
    typeName=undefined   
    /**
     * 污水项目
     * @type {Array}
     */
    wasteIds=undefined   
    /**
     * 污水
     * @type {String}
     */
    wasteNames=undefined
    
}
export class DisplayBarrageDTO {
  
    /**
     *
     * @param {Number} cmd 命令代码
     * @param {DisplayMessageDTO} msgInfo 
     * @param {String} num 户外视窗编号
     */ 
    constructor(cmd = undefined,msgInfo = undefined,num = undefined){
        this.cmd = cmd
        this.msgInfo = msgInfo
        this.num = num
    }
       
    /**
     * 命令代码
     * @type {Number}
     */
    cmd=undefined   
    /**
     * 
     * @type {DisplayMessageDTO}
     */
    msgInfo=undefined   
    /**
     * 户外视窗编号
     * @type {String}
     */
    num=undefined
    
}
export class DisplayDTO {
  
    /**
     *
     * @param {Number} id 主键
     * @param {String} latitude 纬度
     * @param {String} location 安装位置
     * @param {String} longitude 经度
     * @param {undefined} mapVisiable 是否显示地图
     * @param {String} moniker 名称
     * @param {String} number 编号
     * @param {undefined} online 在线状态
     * @param {undefined} screenState 屏幕状态（true：亮）
     * @param {String} updateDate 更新时间
     * @param {String} versionName 版本名称
     * @param {Number} volume 音量
     */ 
    constructor(id = undefined,latitude = undefined,location = undefined,longitude = undefined,mapVisiable = undefined,moniker = undefined,number = undefined,online = undefined,screenState = undefined,updateDate = undefined,versionName = undefined,volume = undefined){
        this.id = id
        this.latitude = latitude
        this.location = location
        this.longitude = longitude
        this.mapVisiable = mapVisiable
        this.moniker = moniker
        this.number = number
        this.online = online
        this.screenState = screenState
        this.updateDate = updateDate
        this.versionName = versionName
        this.volume = volume
    }
       
    /**
     * 主键
     * @type {Number}
     */
    id=undefined   
    /**
     * 纬度
     * @type {String}
     */
    latitude=undefined   
    /**
     * 安装位置
     * @type {String}
     */
    location=undefined   
    /**
     * 经度
     * @type {String}
     */
    longitude=undefined   
    /**
     * 是否显示地图
     * @type {undefined}
     */
    mapVisiable=undefined   
    /**
     * 名称
     * @type {String}
     */
    moniker=undefined   
    /**
     * 编号
     * @type {String}
     */
    number=undefined   
    /**
     * 在线状态
     * @type {undefined}
     */
    online=undefined   
    /**
     * 屏幕状态（true：亮）
     * @type {undefined}
     */
    screenState=undefined   
    /**
     * 更新时间
     * @type {String}
     */
    updateDate=undefined   
    /**
     * 版本名称
     * @type {String}
     */
    versionName=undefined   
    /**
     * 音量
     * @type {Number}
     */
    volume=undefined
    
}
export class DisplayMessageDTO {
  
    /**
     *
     * @param {Array} imageList 图片列表
     * @param {String} msgType 消息类型
     * @param {undefined} textBold 是否加粗
     * @param {Number} textCenter 位置（1：左，2：中，3：右）
     * @param {String} textColor 文本颜色
     * @param {String} textMsg 文本消息
     * @param {Number} textSize 文本字体
     * @param {String} videoUrl 视频地址
     */ 
    constructor(imageList = undefined,msgType = undefined,textBold = undefined,textCenter = undefined,textColor = undefined,textMsg = undefined,textSize = undefined,videoUrl = undefined){
        this.imageList = imageList
        this.msgType = msgType
        this.textBold = textBold
        this.textCenter = textCenter
        this.textColor = textColor
        this.textMsg = textMsg
        this.textSize = textSize
        this.videoUrl = videoUrl
    }
       
    /**
     * 图片列表
     * @type {Array}
     */
    imageList=undefined   
    /**
     * 消息类型
     * @type {String}
     */
    msgType=undefined   
    /**
     * 是否加粗
     * @type {undefined}
     */
    textBold=undefined   
    /**
     * 位置（1：左，2：中，3：右）
     * @type {Number}
     */
    textCenter=undefined   
    /**
     * 文本颜色
     * @type {String}
     */
    textColor=undefined   
    /**
     * 文本消息
     * @type {String}
     */
    textMsg=undefined   
    /**
     * 文本字体
     * @type {Number}
     */
    textSize=undefined   
    /**
     * 视频地址
     * @type {String}
     */
    videoUrl=undefined
    
}
export class DisplayMsgListDTO {
  
    /**
     *
     * @param {Number} cmd 命令代码
     * @param {Array} dataList 消息列表
     * @param {undefined} mapVisiable 
     * @param {String} num 户外视窗编号
     */ 
    constructor(cmd = undefined,dataList = undefined,mapVisiable = undefined,num = undefined){
        this.cmd = cmd
        this.dataList = dataList
        this.mapVisiable = mapVisiable
        this.num = num
    }
       
    /**
     * 命令代码
     * @type {Number}
     */
    cmd=undefined   
    /**
     * 消息列表
     * @type {Array}
     */
    dataList=undefined   
    /**
     * 
     * @type {undefined}
     */
    mapVisiable=undefined   
    /**
     * 户外视窗编号
     * @type {String}
     */
    num=undefined
    
}
export class DisplayMsgSendDTO {
  
    /**
     *
     * @param {Array} msgList 消息列表
     * @param {Number} style 样式代码
     */ 
    constructor(msgList = undefined,style = undefined){
        this.msgList = msgList
        this.style = style
    }
       
    /**
     * 消息列表
     * @type {Array}
     */
    msgList=undefined   
    /**
     * 样式代码
     * @type {Number}
     */
    style=undefined
    
}
export class DisplayStateVO {
  
    /**
     *
     * @param {Number} cmd 命令代码
     * @param {String} deviceName 设备名称
     * @param {String} latitude 纬度
     * @param {String} longitude 经度
     * @param {String} num 户外视窗编号
     * @param {undefined} online 户外视窗在线状态
     * @param {undefined} screenState 屏幕状态（true：亮）
     * @param {String} updateDate 更新时间
     * @param {String} versionName 版本名称
     * @param {Number} volume 音量
     */ 
    constructor(cmd = undefined,deviceName = undefined,latitude = undefined,longitude = undefined,num = undefined,online = undefined,screenState = undefined,updateDate = undefined,versionName = undefined,volume = undefined){
        this.cmd = cmd
        this.deviceName = deviceName
        this.latitude = latitude
        this.longitude = longitude
        this.num = num
        this.online = online
        this.screenState = screenState
        this.updateDate = updateDate
        this.versionName = versionName
        this.volume = volume
    }
       
    /**
     * 命令代码
     * @type {Number}
     */
    cmd=undefined   
    /**
     * 设备名称
     * @type {String}
     */
    deviceName=undefined   
    /**
     * 纬度
     * @type {String}
     */
    latitude=undefined   
    /**
     * 经度
     * @type {String}
     */
    longitude=undefined   
    /**
     * 户外视窗编号
     * @type {String}
     */
    num=undefined   
    /**
     * 户外视窗在线状态
     * @type {undefined}
     */
    online=undefined   
    /**
     * 屏幕状态（true：亮）
     * @type {undefined}
     */
    screenState=undefined   
    /**
     * 更新时间
     * @type {String}
     */
    updateDate=undefined   
    /**
     * 版本名称
     * @type {String}
     */
    versionName=undefined   
    /**
     * 音量
     * @type {Number}
     */
    volume=undefined
    
}
export class EnergyLoopDTO {
  
    /**
     *
     * @param {Array} energyData 用能数据列表
     * @param {String} energyTime 用能数据时间
     * @param {String} loopName 回路名称
     * @param {String} loopNum 回路编号
     */ 
    constructor(energyData = undefined,energyTime = undefined,loopName = undefined,loopNum = undefined){
        this.energyData = energyData
        this.energyTime = energyTime
        this.loopName = loopName
        this.loopNum = loopNum
    }
       
    /**
     * 用能数据列表
     * @type {Array}
     */
    energyData=undefined   
    /**
     * 用能数据时间
     * @type {String}
     */
    energyTime=undefined   
    /**
     * 回路名称
     * @type {String}
     */
    loopName=undefined   
    /**
     * 回路编号
     * @type {String}
     */
    loopNum=undefined
    
}
export class Enterprise {
  
    /**
     *
     * @param {String} district 区域代码
     * @param {String} districtName 行政区域
     * @param {Number} enterpriseId 企业Id
     * @param {String} enterpriseName 企业名称
     * @param {String} industryCategory 行业类别Id
     * @param {String} industryCategoryName 行业类别名称
     * @param {String} latitude 纬度
     * @param {String} legalPerson 法人
     * @param {String} licenceImageName 许可证附件名称
     * @param {String} licenceImageUrl 许可证附件地址
     * @param {String} licenseIssueDate 发证时间
     * @param {String} licenseNum 许可证编号
     * @param {String} location 企业地址
     * @param {String} longitude 经度
     * @param {String} phoneNum 联系电话
     * @param {Number} serialNum 序号
     * @param {String} socialCreditCode 社会信用代码
     */ 
    constructor(district = undefined,districtName = undefined,enterpriseId = undefined,enterpriseName = undefined,industryCategory = undefined,industryCategoryName = undefined,latitude = undefined,legalPerson = undefined,licenceImageName = undefined,licenceImageUrl = undefined,licenseIssueDate = undefined,licenseNum = undefined,location = undefined,longitude = undefined,phoneNum = undefined,serialNum = undefined,socialCreditCode = undefined){
        this.district = district
        this.districtName = districtName
        this.enterpriseId = enterpriseId
        this.enterpriseName = enterpriseName
        this.industryCategory = industryCategory
        this.industryCategoryName = industryCategoryName
        this.latitude = latitude
        this.legalPerson = legalPerson
        this.licenceImageName = licenceImageName
        this.licenceImageUrl = licenceImageUrl
        this.licenseIssueDate = licenseIssueDate
        this.licenseNum = licenseNum
        this.location = location
        this.longitude = longitude
        this.phoneNum = phoneNum
        this.serialNum = serialNum
        this.socialCreditCode = socialCreditCode
    }
       
    /**
     * 区域代码
     * @type {String}
     */
    district=undefined   
    /**
     * 行政区域
     * @type {String}
     */
    districtName=undefined   
    /**
     * 企业Id
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 企业名称
     * @type {String}
     */
    enterpriseName=undefined   
    /**
     * 行业类别Id
     * @type {String}
     */
    industryCategory=undefined   
    /**
     * 行业类别名称
     * @type {String}
     */
    industryCategoryName=undefined   
    /**
     * 纬度
     * @type {String}
     */
    latitude=undefined   
    /**
     * 法人
     * @type {String}
     */
    legalPerson=undefined   
    /**
     * 许可证附件名称
     * @type {String}
     */
    licenceImageName=undefined   
    /**
     * 许可证附件地址
     * @type {String}
     */
    licenceImageUrl=undefined   
    /**
     * 发证时间
     * @type {String}
     */
    licenseIssueDate=undefined   
    /**
     * 许可证编号
     * @type {String}
     */
    licenseNum=undefined   
    /**
     * 企业地址
     * @type {String}
     */
    location=undefined   
    /**
     * 经度
     * @type {String}
     */
    longitude=undefined   
    /**
     * 联系电话
     * @type {String}
     */
    phoneNum=undefined   
    /**
     * 序号
     * @type {Number}
     */
    serialNum=undefined   
    /**
     * 社会信用代码
     * @type {String}
     */
    socialCreditCode=undefined
    
}
export class EnterpriseDTO {
  
    /**
     *
     * @param {undefined} alarmFlag 是否报警
     * @param {Number} enterpriseId 企业Id
     * @param {String} enterpriseName 企业名称
     * @param {String} latitude 纬度
     * @param {String} longitude 经度
     * @param {Number} monitorType 监测类型（0：全部，2：部分，2：没有）
     * @param {undefined} onlineFlag 是否在线
     */ 
    constructor(alarmFlag = undefined,enterpriseId = undefined,enterpriseName = undefined,latitude = undefined,longitude = undefined,monitorType = undefined,onlineFlag = undefined){
        this.alarmFlag = alarmFlag
        this.enterpriseId = enterpriseId
        this.enterpriseName = enterpriseName
        this.latitude = latitude
        this.longitude = longitude
        this.monitorType = monitorType
        this.onlineFlag = onlineFlag
    }
       
    /**
     * 是否报警
     * @type {undefined}
     */
    alarmFlag=undefined   
    /**
     * 企业Id
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 企业名称
     * @type {String}
     */
    enterpriseName=undefined   
    /**
     * 纬度
     * @type {String}
     */
    latitude=undefined   
    /**
     * 经度
     * @type {String}
     */
    longitude=undefined   
    /**
     * 监测类型（0：全部，2：部分，2：没有）
     * @type {Number}
     */
    monitorType=undefined   
    /**
     * 是否在线
     * @type {undefined}
     */
    onlineFlag=undefined
    
}
export class FactorSpinner {
  
    /**
     *
     * @param {String} has 存
     * @param {String} key 值
     * @param {String} name 键
     * @param {String} snName 值
     * @param {Number} snVal 键
     */ 
    constructor(has = undefined,key = undefined,name = undefined,snName = undefined,snVal = undefined){
        this.has = has
        this.key = key
        this.name = name
        this.snName = snName
        this.snVal = snVal
    }
       
    /**
     * 存
     * @type {String}
     */
    has=undefined   
    /**
     * 值
     * @type {String}
     */
    key=undefined   
    /**
     * 键
     * @type {String}
     */
    name=undefined   
    /**
     * 值
     * @type {String}
     */
    snName=undefined   
    /**
     * 键
     * @type {Number}
     */
    snVal=undefined
    
}
export class FileDTO {
  
    /**
     *
     * @param {String} fileName 文件名称
     * @param {String} filePath 文件路径
     * @param {String} fileType 文件类型
     * @param {String} framePath 文件路径
     * @param {Number} id 主键Id
     * @param {Number} serialNum 序号
     * @param {String} uploadTime 上传时间
     */ 
    constructor(fileName = undefined,filePath = undefined,fileType = undefined,framePath = undefined,id = undefined,serialNum = undefined,uploadTime = undefined){
        this.fileName = fileName
        this.filePath = filePath
        this.fileType = fileType
        this.framePath = framePath
        this.id = id
        this.serialNum = serialNum
        this.uploadTime = uploadTime
    }
       
    /**
     * 文件名称
     * @type {String}
     */
    fileName=undefined   
    /**
     * 文件路径
     * @type {String}
     */
    filePath=undefined   
    /**
     * 文件类型
     * @type {String}
     */
    fileType=undefined   
    /**
     * 文件路径
     * @type {String}
     */
    framePath=undefined   
    /**
     * 主键Id
     * @type {Number}
     */
    id=undefined   
    /**
     * 序号
     * @type {Number}
     */
    serialNum=undefined   
    /**
     * 上传时间
     * @type {String}
     */
    uploadTime=undefined
    
}
export class FrontSpinner {
  
    /**
     *
     * @param {String} snName 值
     * @param {Number} snVal 键
     */ 
    constructor(snName = undefined,snVal = undefined){
        this.snName = snName
        this.snVal = snVal
    }
       
    /**
     * 值
     * @type {String}
     */
    snName=undefined   
    /**
     * 键
     * @type {Number}
     */
    snVal=undefined
    
}
export class HomeCameraInfo {
  
    /**
     *
     * @param {String} cmrName 名称
     * @param {Number} id 主键id
     * @param {String} latitude 纬度
     * @param {String} location 地址
     * @param {String} longitude 经度
     * @param {String} nvrAct NVR账号
     * @param {Number} nvrChannel nvr通道号
     * @param {Number} nvrId nvr的id
     * @param {String} nvrIp NVR的ip
     * @param {Number} nvrPort NVR端口
     * @param {String} nvrPw NVR密码
     * @param {undefined} onlineFlag 是否在线
     */ 
    constructor(cmrName = undefined,id = undefined,latitude = undefined,location = undefined,longitude = undefined,nvrAct = undefined,nvrChannel = undefined,nvrId = undefined,nvrIp = undefined,nvrPort = undefined,nvrPw = undefined,onlineFlag = undefined){
        this.cmrName = cmrName
        this.id = id
        this.latitude = latitude
        this.location = location
        this.longitude = longitude
        this.nvrAct = nvrAct
        this.nvrChannel = nvrChannel
        this.nvrId = nvrId
        this.nvrIp = nvrIp
        this.nvrPort = nvrPort
        this.nvrPw = nvrPw
        this.onlineFlag = onlineFlag
    }
       
    /**
     * 名称
     * @type {String}
     */
    cmrName=undefined   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 纬度
     * @type {String}
     */
    latitude=undefined   
    /**
     * 地址
     * @type {String}
     */
    location=undefined   
    /**
     * 经度
     * @type {String}
     */
    longitude=undefined   
    /**
     * NVR账号
     * @type {String}
     */
    nvrAct=undefined   
    /**
     * nvr通道号
     * @type {Number}
     */
    nvrChannel=undefined   
    /**
     * nvr的id
     * @type {Number}
     */
    nvrId=undefined   
    /**
     * NVR的ip
     * @type {String}
     */
    nvrIp=undefined   
    /**
     * NVR端口
     * @type {Number}
     */
    nvrPort=undefined   
    /**
     * NVR密码
     * @type {String}
     */
    nvrPw=undefined   
    /**
     * 是否在线
     * @type {undefined}
     */
    onlineFlag=undefined
    
}
export class HomeDataDTO {
  
    /**
     *
     * @param {String} lower 下限
     * @param {String} timeSlot 时间
     * @param {String} upper 上限
     * @param {String} value 值
     */ 
    constructor(lower = undefined,timeSlot = undefined,upper = undefined,value = undefined){
        this.lower = lower
        this.timeSlot = timeSlot
        this.upper = upper
        this.value = value
    }
       
    /**
     * 下限
     * @type {String}
     */
    lower=undefined   
    /**
     * 时间
     * @type {String}
     */
    timeSlot=undefined   
    /**
     * 上限
     * @type {String}
     */
    upper=undefined   
    /**
     * 值
     * @type {String}
     */
    value=undefined
    
}
export class HomeDetailDTO {
  
    /**
     *
     * @param {Array} energyLoop 用能回路列表
     * @param {undefined} energyOnline 用能是否在线
     * @param {Number} enterpriseId 企业Id
     * @param {String} enterpriseName 企业名称
     * @param {undefined} hasEnergy 是否有用能
     * @param {undefined} hasRainWater 是否有雨水
     * @param {undefined} hasWasteWater 是否有污水
     * @param {String} industryCategory 行业类别
     * @param {String} licenseNum 企业名称
     * @param {String} mainProduct 主要产品
     * @param {Array} rainWaterData 雨水数据列表
     * @param {undefined} rainWaterOnline 雨水是否在线
     * @param {String} rainWaterTime 雨水数据时间
     * @param {Array} wasteWaterData 污水数据列表
     * @param {undefined} wasteWaterOnline 污水是否在线
     * @param {String} wasteWaterTime 污水数据时间
     */ 
    constructor(energyLoop = undefined,energyOnline = undefined,enterpriseId = undefined,enterpriseName = undefined,hasEnergy = undefined,hasRainWater = undefined,hasWasteWater = undefined,industryCategory = undefined,licenseNum = undefined,mainProduct = undefined,rainWaterData = undefined,rainWaterOnline = undefined,rainWaterTime = undefined,wasteWaterData = undefined,wasteWaterOnline = undefined,wasteWaterTime = undefined){
        this.energyLoop = energyLoop
        this.energyOnline = energyOnline
        this.enterpriseId = enterpriseId
        this.enterpriseName = enterpriseName
        this.hasEnergy = hasEnergy
        this.hasRainWater = hasRainWater
        this.hasWasteWater = hasWasteWater
        this.industryCategory = industryCategory
        this.licenseNum = licenseNum
        this.mainProduct = mainProduct
        this.rainWaterData = rainWaterData
        this.rainWaterOnline = rainWaterOnline
        this.rainWaterTime = rainWaterTime
        this.wasteWaterData = wasteWaterData
        this.wasteWaterOnline = wasteWaterOnline
        this.wasteWaterTime = wasteWaterTime
    }
       
    /**
     * 用能回路列表
     * @type {Array}
     */
    energyLoop=undefined   
    /**
     * 用能是否在线
     * @type {undefined}
     */
    energyOnline=undefined   
    /**
     * 企业Id
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 企业名称
     * @type {String}
     */
    enterpriseName=undefined   
    /**
     * 是否有用能
     * @type {undefined}
     */
    hasEnergy=undefined   
    /**
     * 是否有雨水
     * @type {undefined}
     */
    hasRainWater=undefined   
    /**
     * 是否有污水
     * @type {undefined}
     */
    hasWasteWater=undefined   
    /**
     * 行业类别
     * @type {String}
     */
    industryCategory=undefined   
    /**
     * 企业名称
     * @type {String}
     */
    licenseNum=undefined   
    /**
     * 主要产品
     * @type {String}
     */
    mainProduct=undefined   
    /**
     * 雨水数据列表
     * @type {Array}
     */
    rainWaterData=undefined   
    /**
     * 雨水是否在线
     * @type {undefined}
     */
    rainWaterOnline=undefined   
    /**
     * 雨水数据时间
     * @type {String}
     */
    rainWaterTime=undefined   
    /**
     * 污水数据列表
     * @type {Array}
     */
    wasteWaterData=undefined   
    /**
     * 污水是否在线
     * @type {undefined}
     */
    wasteWaterOnline=undefined   
    /**
     * 污水数据时间
     * @type {String}
     */
    wasteWaterTime=undefined
    
}
export class HomeListDTO {
  
    /**
     *
     * @param {String} itemName 名称
     * @param {String} itemUnit 单位
     * @param {Array} list 列表
     */ 
    constructor(itemName = undefined,itemUnit = undefined,list = undefined){
        this.itemName = itemName
        this.itemUnit = itemUnit
        this.list = list
    }
       
    /**
     * 名称
     * @type {String}
     */
    itemName=undefined   
    /**
     * 单位
     * @type {String}
     */
    itemUnit=undefined   
    /**
     * 列表
     * @type {Array}
     */
    list=undefined
    
}
export class HomeMetricalInfo {
  
    /**
     *
     * @param {undefined} airPressure 
     * @param {undefined} alarmAirPressure 
     * @param {undefined} alarmAqi 
     * @param {undefined} alarmCO 
     * @param {undefined} alarmFlag 
     * @param {undefined} alarmHumidity 
     * @param {undefined} alarmNO2 
     * @param {undefined} alarmO3 
     * @param {undefined} alarmPM10 
     * @param {undefined} alarmPM25 
     * @param {undefined} alarmSO2 
     * @param {undefined} alarmTemperature 
     * @param {undefined} alarmTvoc 
     * @param {undefined} alarmWindSpeed 
     * @param {undefined} aqiValue 
     * @param {undefined} cameraOnline 视频在线状态
     * @param {String} dataTime 数据接收时间
     * @param {Number} deviceId 设备id
     * @param {String} deviceName 
     * @param {String} deviceNum 
     * @param {undefined} deviceOnline 设备在线状态
     * @param {undefined} factorCO 
     * @param {undefined} factorNO2 
     * @param {undefined} factorO3 
     * @param {undefined} factorPM10 
     * @param {undefined} factorPM25 
     * @param {undefined} factorSO2 
     * @param {undefined} hasAirPressure 
     * @param {undefined} hasAqiValue 
     * @param {undefined} hasCamera 是否绑定监控设备
     * @param {undefined} hasFactorCO 
     * @param {undefined} hasFactorNO2 
     * @param {undefined} hasFactorO3 
     * @param {undefined} hasFactorPM10 
     * @param {undefined} hasFactorPM25 
     * @param {undefined} hasFactorSO2 
     * @param {undefined} hasHumidity 
     * @param {undefined} hasTemperature 
     * @param {undefined} hasTvoc 
     * @param {undefined} hasWindDirect 
     * @param {undefined} hasWindSpeed 
     * @param {undefined} humidity 
     * @param {String} latitude 纬度
     * @param {String} location 详细地址
     * @param {String} longitude 经度
     * @param {String} nvrAct NVR账号
     * @param {Number} nvrChannel nvr通道号
     * @param {String} nvrIp NVR的ip
     * @param {Number} nvrPort NVR端口
     * @param {String} nvrPw NVR密码
     * @param {String} pollutant 
     * @param {undefined} temperature 
     * @param {undefined} tvoc 
     * @param {undefined} windDirect 
     * @param {undefined} windSpeed 
     */ 
    constructor(airPressure = undefined,alarmAirPressure = undefined,alarmAqi = undefined,alarmCO = undefined,alarmFlag = undefined,alarmHumidity = undefined,alarmNO2 = undefined,alarmO3 = undefined,alarmPM10 = undefined,alarmPM25 = undefined,alarmSO2 = undefined,alarmTemperature = undefined,alarmTvoc = undefined,alarmWindSpeed = undefined,aqiValue = undefined,cameraOnline = undefined,dataTime = undefined,deviceId = undefined,deviceName = undefined,deviceNum = undefined,deviceOnline = undefined,factorCO = undefined,factorNO2 = undefined,factorO3 = undefined,factorPM10 = undefined,factorPM25 = undefined,factorSO2 = undefined,hasAirPressure = undefined,hasAqiValue = undefined,hasCamera = undefined,hasFactorCO = undefined,hasFactorNO2 = undefined,hasFactorO3 = undefined,hasFactorPM10 = undefined,hasFactorPM25 = undefined,hasFactorSO2 = undefined,hasHumidity = undefined,hasTemperature = undefined,hasTvoc = undefined,hasWindDirect = undefined,hasWindSpeed = undefined,humidity = undefined,latitude = undefined,location = undefined,longitude = undefined,nvrAct = undefined,nvrChannel = undefined,nvrIp = undefined,nvrPort = undefined,nvrPw = undefined,pollutant = undefined,temperature = undefined,tvoc = undefined,windDirect = undefined,windSpeed = undefined){
        this.airPressure = airPressure
        this.alarmAirPressure = alarmAirPressure
        this.alarmAqi = alarmAqi
        this.alarmCO = alarmCO
        this.alarmFlag = alarmFlag
        this.alarmHumidity = alarmHumidity
        this.alarmNO2 = alarmNO2
        this.alarmO3 = alarmO3
        this.alarmPM10 = alarmPM10
        this.alarmPM25 = alarmPM25
        this.alarmSO2 = alarmSO2
        this.alarmTemperature = alarmTemperature
        this.alarmTvoc = alarmTvoc
        this.alarmWindSpeed = alarmWindSpeed
        this.aqiValue = aqiValue
        this.cameraOnline = cameraOnline
        this.dataTime = dataTime
        this.deviceId = deviceId
        this.deviceName = deviceName
        this.deviceNum = deviceNum
        this.deviceOnline = deviceOnline
        this.factorCO = factorCO
        this.factorNO2 = factorNO2
        this.factorO3 = factorO3
        this.factorPM10 = factorPM10
        this.factorPM25 = factorPM25
        this.factorSO2 = factorSO2
        this.hasAirPressure = hasAirPressure
        this.hasAqiValue = hasAqiValue
        this.hasCamera = hasCamera
        this.hasFactorCO = hasFactorCO
        this.hasFactorNO2 = hasFactorNO2
        this.hasFactorO3 = hasFactorO3
        this.hasFactorPM10 = hasFactorPM10
        this.hasFactorPM25 = hasFactorPM25
        this.hasFactorSO2 = hasFactorSO2
        this.hasHumidity = hasHumidity
        this.hasTemperature = hasTemperature
        this.hasTvoc = hasTvoc
        this.hasWindDirect = hasWindDirect
        this.hasWindSpeed = hasWindSpeed
        this.humidity = humidity
        this.latitude = latitude
        this.location = location
        this.longitude = longitude
        this.nvrAct = nvrAct
        this.nvrChannel = nvrChannel
        this.nvrIp = nvrIp
        this.nvrPort = nvrPort
        this.nvrPw = nvrPw
        this.pollutant = pollutant
        this.temperature = temperature
        this.tvoc = tvoc
        this.windDirect = windDirect
        this.windSpeed = windSpeed
    }
       
    /**
     * 
     * @type {undefined}
     */
    airPressure=undefined   
    /**
     * 
     * @type {undefined}
     */
    alarmAirPressure=undefined   
    /**
     * 
     * @type {undefined}
     */
    alarmAqi=undefined   
    /**
     * 
     * @type {undefined}
     */
    alarmCO=undefined   
    /**
     * 
     * @type {undefined}
     */
    alarmFlag=undefined   
    /**
     * 
     * @type {undefined}
     */
    alarmHumidity=undefined   
    /**
     * 
     * @type {undefined}
     */
    alarmNO2=undefined   
    /**
     * 
     * @type {undefined}
     */
    alarmO3=undefined   
    /**
     * 
     * @type {undefined}
     */
    alarmPM10=undefined   
    /**
     * 
     * @type {undefined}
     */
    alarmPM25=undefined   
    /**
     * 
     * @type {undefined}
     */
    alarmSO2=undefined   
    /**
     * 
     * @type {undefined}
     */
    alarmTemperature=undefined   
    /**
     * 
     * @type {undefined}
     */
    alarmTvoc=undefined   
    /**
     * 
     * @type {undefined}
     */
    alarmWindSpeed=undefined   
    /**
     * 
     * @type {undefined}
     */
    aqiValue=undefined   
    /**
     * 视频在线状态
     * @type {undefined}
     */
    cameraOnline=undefined   
    /**
     * 数据接收时间
     * @type {String}
     */
    dataTime=undefined   
    /**
     * 设备id
     * @type {Number}
     */
    deviceId=undefined   
    /**
     * 
     * @type {String}
     */
    deviceName=undefined   
    /**
     * 
     * @type {String}
     */
    deviceNum=undefined   
    /**
     * 设备在线状态
     * @type {undefined}
     */
    deviceOnline=undefined   
    /**
     * 
     * @type {undefined}
     */
    factorCO=undefined   
    /**
     * 
     * @type {undefined}
     */
    factorNO2=undefined   
    /**
     * 
     * @type {undefined}
     */
    factorO3=undefined   
    /**
     * 
     * @type {undefined}
     */
    factorPM10=undefined   
    /**
     * 
     * @type {undefined}
     */
    factorPM25=undefined   
    /**
     * 
     * @type {undefined}
     */
    factorSO2=undefined   
    /**
     * 
     * @type {undefined}
     */
    hasAirPressure=undefined   
    /**
     * 
     * @type {undefined}
     */
    hasAqiValue=undefined   
    /**
     * 是否绑定监控设备
     * @type {undefined}
     */
    hasCamera=undefined   
    /**
     * 
     * @type {undefined}
     */
    hasFactorCO=undefined   
    /**
     * 
     * @type {undefined}
     */
    hasFactorNO2=undefined   
    /**
     * 
     * @type {undefined}
     */
    hasFactorO3=undefined   
    /**
     * 
     * @type {undefined}
     */
    hasFactorPM10=undefined   
    /**
     * 
     * @type {undefined}
     */
    hasFactorPM25=undefined   
    /**
     * 
     * @type {undefined}
     */
    hasFactorSO2=undefined   
    /**
     * 
     * @type {undefined}
     */
    hasHumidity=undefined   
    /**
     * 
     * @type {undefined}
     */
    hasTemperature=undefined   
    /**
     * 
     * @type {undefined}
     */
    hasTvoc=undefined   
    /**
     * 
     * @type {undefined}
     */
    hasWindDirect=undefined   
    /**
     * 
     * @type {undefined}
     */
    hasWindSpeed=undefined   
    /**
     * 
     * @type {undefined}
     */
    humidity=undefined   
    /**
     * 纬度
     * @type {String}
     */
    latitude=undefined   
    /**
     * 详细地址
     * @type {String}
     */
    location=undefined   
    /**
     * 经度
     * @type {String}
     */
    longitude=undefined   
    /**
     * NVR账号
     * @type {String}
     */
    nvrAct=undefined   
    /**
     * nvr通道号
     * @type {Number}
     */
    nvrChannel=undefined   
    /**
     * NVR的ip
     * @type {String}
     */
    nvrIp=undefined   
    /**
     * NVR端口
     * @type {Number}
     */
    nvrPort=undefined   
    /**
     * NVR密码
     * @type {String}
     */
    nvrPw=undefined   
    /**
     * 
     * @type {String}
     */
    pollutant=undefined   
    /**
     * 
     * @type {undefined}
     */
    temperature=undefined   
    /**
     * 
     * @type {undefined}
     */
    tvoc=undefined   
    /**
     * 
     * @type {undefined}
     */
    windDirect=undefined   
    /**
     * 
     * @type {undefined}
     */
    windSpeed=undefined
    
}
export class HomeNationData {
  
    /**
     *
     * @param {undefined} aqi 
     * @param {undefined} co 
     * @param {Number} deviceId 设备id
     * @param {String} deviceName 设备名称
     * @param {String} deviceNum 设备编号
     * @param {undefined} deviceOnline 设备在线状态
     * @param {undefined} ico 
     * @param {undefined} ino2 
     * @param {undefined} io3 
     * @param {undefined} io38h 
     * @param {undefined} ipm10 
     * @param {undefined} ipm25 
     * @param {undefined} iso2 
     * @param {String} latitude 纬度
     * @param {String} location 详细地址
     * @param {String} longitude 经度
     * @param {undefined} no2 
     * @param {undefined} o3 
     * @param {undefined} pm10 
     * @param {undefined} pm25 
     * @param {String} pollutions 
     * @param {String} pubtime 
     * @param {String} quality 
     * @param {undefined} so2 
     * @param {String} station 
     * @param {String} stationCode 
     */ 
    constructor(aqi = undefined,co = undefined,deviceId = undefined,deviceName = undefined,deviceNum = undefined,deviceOnline = undefined,ico = undefined,ino2 = undefined,io3 = undefined,io38h = undefined,ipm10 = undefined,ipm25 = undefined,iso2 = undefined,latitude = undefined,location = undefined,longitude = undefined,no2 = undefined,o3 = undefined,pm10 = undefined,pm25 = undefined,pollutions = undefined,pubtime = undefined,quality = undefined,so2 = undefined,station = undefined,stationCode = undefined){
        this.aqi = aqi
        this.co = co
        this.deviceId = deviceId
        this.deviceName = deviceName
        this.deviceNum = deviceNum
        this.deviceOnline = deviceOnline
        this.ico = ico
        this.ino2 = ino2
        this.io3 = io3
        this.io38h = io38h
        this.ipm10 = ipm10
        this.ipm25 = ipm25
        this.iso2 = iso2
        this.latitude = latitude
        this.location = location
        this.longitude = longitude
        this.no2 = no2
        this.o3 = o3
        this.pm10 = pm10
        this.pm25 = pm25
        this.pollutions = pollutions
        this.pubtime = pubtime
        this.quality = quality
        this.so2 = so2
        this.station = station
        this.stationCode = stationCode
    }
       
    /**
     * 
     * @type {undefined}
     */
    aqi=undefined   
    /**
     * 
     * @type {undefined}
     */
    co=undefined   
    /**
     * 设备id
     * @type {Number}
     */
    deviceId=undefined   
    /**
     * 设备名称
     * @type {String}
     */
    deviceName=undefined   
    /**
     * 设备编号
     * @type {String}
     */
    deviceNum=undefined   
    /**
     * 设备在线状态
     * @type {undefined}
     */
    deviceOnline=undefined   
    /**
     * 
     * @type {undefined}
     */
    ico=undefined   
    /**
     * 
     * @type {undefined}
     */
    ino2=undefined   
    /**
     * 
     * @type {undefined}
     */
    io3=undefined   
    /**
     * 
     * @type {undefined}
     */
    io38h=undefined   
    /**
     * 
     * @type {undefined}
     */
    ipm10=undefined   
    /**
     * 
     * @type {undefined}
     */
    ipm25=undefined   
    /**
     * 
     * @type {undefined}
     */
    iso2=undefined   
    /**
     * 纬度
     * @type {String}
     */
    latitude=undefined   
    /**
     * 详细地址
     * @type {String}
     */
    location=undefined   
    /**
     * 经度
     * @type {String}
     */
    longitude=undefined   
    /**
     * 
     * @type {undefined}
     */
    no2=undefined   
    /**
     * 
     * @type {undefined}
     */
    o3=undefined   
    /**
     * 
     * @type {undefined}
     */
    pm10=undefined   
    /**
     * 
     * @type {undefined}
     */
    pm25=undefined   
    /**
     * 
     * @type {String}
     */
    pollutions=undefined   
    /**
     * 
     * @type {String}
     */
    pubtime=undefined   
    /**
     * 
     * @type {String}
     */
    quality=undefined   
    /**
     * 
     * @type {undefined}
     */
    so2=undefined   
    /**
     * 
     * @type {String}
     */
    station=undefined   
    /**
     * 
     * @type {String}
     */
    stationCode=undefined
    
}
export class HomeReq {
  
    /**
     *
     * @param {Number} dataType 数据类型（0：小时；1：天）
     * @param {Array} deviceList 设备id列表
     * @param {undefined} realtime 是否实时
     * @param {String} time 时间
     */ 
    constructor(dataType = undefined,deviceList = undefined,realtime = undefined,time = undefined){
        this.dataType = dataType
        this.deviceList = deviceList
        this.realtime = realtime
        this.time = time
    }
       
    /**
     * 数据类型（0：小时；1：天）
     * @type {Number}
     */
    dataType=undefined   
    /**
     * 设备id列表
     * @type {Array}
     */
    deviceList=undefined   
    /**
     * 是否实时
     * @type {undefined}
     */
    realtime=undefined   
    /**
     * 时间
     * @type {String}
     */
    time=undefined
    
}
export class HomeStatisticsDTO {
  
    /**
     *
     * @param {String} aqiAvg AQI均值
     * @param {Number} aqiCnt AQI监测设备数
     * @param {Number} cameraCnt 监控总数
     * @param {String} cameraRate 监控在线率
     * @param {Number} deviceCnt 设备总数
     * @param {String} deviceRate 设备在线率
     * @param {Number} exteedAlarm 超标报警数
     * @param {Number} offlineAlarm 离线报警数
     * @param {String} vocAvgDay TVOC近24小时均值
     * @param {String} vocAvgHour TVOC近1小时均值
     * @param {String} vocAvgMonth TVOC近30日均值
     * @param {String} vocAvgReal TVOC实时均值
     */ 
    constructor(aqiAvg = undefined,aqiCnt = undefined,cameraCnt = undefined,cameraRate = undefined,deviceCnt = undefined,deviceRate = undefined,exteedAlarm = undefined,offlineAlarm = undefined,vocAvgDay = undefined,vocAvgHour = undefined,vocAvgMonth = undefined,vocAvgReal = undefined){
        this.aqiAvg = aqiAvg
        this.aqiCnt = aqiCnt
        this.cameraCnt = cameraCnt
        this.cameraRate = cameraRate
        this.deviceCnt = deviceCnt
        this.deviceRate = deviceRate
        this.exteedAlarm = exteedAlarm
        this.offlineAlarm = offlineAlarm
        this.vocAvgDay = vocAvgDay
        this.vocAvgHour = vocAvgHour
        this.vocAvgMonth = vocAvgMonth
        this.vocAvgReal = vocAvgReal
    }
       
    /**
     * AQI均值
     * @type {String}
     */
    aqiAvg=undefined   
    /**
     * AQI监测设备数
     * @type {Number}
     */
    aqiCnt=undefined   
    /**
     * 监控总数
     * @type {Number}
     */
    cameraCnt=undefined   
    /**
     * 监控在线率
     * @type {String}
     */
    cameraRate=undefined   
    /**
     * 设备总数
     * @type {Number}
     */
    deviceCnt=undefined   
    /**
     * 设备在线率
     * @type {String}
     */
    deviceRate=undefined   
    /**
     * 超标报警数
     * @type {Number}
     */
    exteedAlarm=undefined   
    /**
     * 离线报警数
     * @type {Number}
     */
    offlineAlarm=undefined   
    /**
     * TVOC近24小时均值
     * @type {String}
     */
    vocAvgDay=undefined   
    /**
     * TVOC近1小时均值
     * @type {String}
     */
    vocAvgHour=undefined   
    /**
     * TVOC近30日均值
     * @type {String}
     */
    vocAvgMonth=undefined   
    /**
     * TVOC实时均值
     * @type {String}
     */
    vocAvgReal=undefined
    
}
export class Industry {
  
    /**
     *
     * @param {String} industry 名称
     * @param {String} industryId 主键id
     * @param {String} nodePId 父级id
     */ 
    constructor(industry = undefined,industryId = undefined,nodePId = undefined){
        this.industry = industry
        this.industryId = industryId
        this.nodePId = nodePId
    }
       
    /**
     * 名称
     * @type {String}
     */
    industry=undefined   
    /**
     * 主键id
     * @type {String}
     */
    industryId=undefined   
    /**
     * 父级id
     * @type {String}
     */
    nodePId=undefined
    
}
export class Locate {
  
    /**
     *
     * @param {String} cntLat 中心点纬度
     * @param {String} cntLon 中心点经度
     * @param {String} cntScale 缩放比例
     * @param {String} ctlLat 控制中心纬度
     * @param {String} ctlLon 控制中心经度
     * @param {Array} displayList 户外视窗列表
     * @param {Number} id 主键Id
     */ 
    constructor(cntLat = undefined,cntLon = undefined,cntScale = undefined,ctlLat = undefined,ctlLon = undefined,displayList = undefined,id = undefined){
        this.cntLat = cntLat
        this.cntLon = cntLon
        this.cntScale = cntScale
        this.ctlLat = ctlLat
        this.ctlLon = ctlLon
        this.displayList = displayList
        this.id = id
    }
       
    /**
     * 中心点纬度
     * @type {String}
     */
    cntLat=undefined   
    /**
     * 中心点经度
     * @type {String}
     */
    cntLon=undefined   
    /**
     * 缩放比例
     * @type {String}
     */
    cntScale=undefined   
    /**
     * 控制中心纬度
     * @type {String}
     */
    ctlLat=undefined   
    /**
     * 控制中心经度
     * @type {String}
     */
    ctlLon=undefined   
    /**
     * 户外视窗列表
     * @type {Array}
     */
    displayList=undefined   
    /**
     * 主键Id
     * @type {Number}
     */
    id=undefined
    
}
export class MapInfo {
  
    /**
     *
     * @param {undefined} download 是否下载
     * @param {Number} id 主键Id
     * @param {String} mapSize 地图大小
     * @param {String} province 省/直辖市
     * @param {Number} serialNum 序号
     */ 
    constructor(download = undefined,id = undefined,mapSize = undefined,province = undefined,serialNum = undefined){
        this.download = download
        this.id = id
        this.mapSize = mapSize
        this.province = province
        this.serialNum = serialNum
    }
       
    /**
     * 是否下载
     * @type {undefined}
     */
    download=undefined   
    /**
     * 主键Id
     * @type {Number}
     */
    id=undefined   
    /**
     * 地图大小
     * @type {String}
     */
    mapSize=undefined   
    /**
     * 省/直辖市
     * @type {String}
     */
    province=undefined   
    /**
     * 序号
     * @type {Number}
     */
    serialNum=undefined
    
}
export class MetricalData {
  
    /**
     *
     * @param {undefined} airPressure 
     * @param {undefined} alarmAirPressure 
     * @param {undefined} alarmAqi 
     * @param {undefined} alarmCO 
     * @param {undefined} alarmFlag 
     * @param {undefined} alarmHumidity 
     * @param {undefined} alarmNO2 
     * @param {undefined} alarmO3 
     * @param {undefined} alarmPM10 
     * @param {undefined} alarmPM25 
     * @param {undefined} alarmSO2 
     * @param {undefined} alarmTemperature 
     * @param {undefined} alarmTvoc 
     * @param {undefined} alarmWindSpeed 
     * @param {undefined} aqiValue 
     * @param {undefined} cameraOnline 摄像头是否在线
     * @param {Number} dataId 数据ID
     * @param {String} dataTime 数据接收时间
     * @param {Number} deviceId 设备Id
     * @param {String} deviceName 
     * @param {String} deviceNum 
     * @param {undefined} deviceOnline 设备在线状态
     * @param {String} district 区域代码
     * @param {String} districtName 区域代码
     * @param {undefined} factorCO 
     * @param {undefined} factorNO2 
     * @param {undefined} factorO3 
     * @param {undefined} factorPM10 
     * @param {undefined} factorPM25 
     * @param {undefined} factorSO2 
     * @param {undefined} hasAirPressure 
     * @param {undefined} hasAqiValue 
     * @param {undefined} hasCamera 是否有摄像头
     * @param {undefined} hasFactorCO 
     * @param {undefined} hasFactorNO2 
     * @param {undefined} hasFactorO3 
     * @param {undefined} hasFactorPM10 
     * @param {undefined} hasFactorPM25 
     * @param {undefined} hasFactorSO2 
     * @param {undefined} hasHumidity 
     * @param {undefined} hasTemperature 
     * @param {undefined} hasTvoc 
     * @param {undefined} hasWindDirect 
     * @param {undefined} hasWindSpeed 
     * @param {undefined} humidity 
     * @param {String} latitude 纬度
     * @param {String} location 详细地址
     * @param {String} longitude 经度
     * @param {String} pollutant 
     * @param {Number} serialNum 序号
     * @param {undefined} temperature 
     * @param {undefined} tvoc 
     * @param {Number} typeId 类型id
     * @param {undefined} windDirect 
     * @param {undefined} windSpeed 
     */ 
    constructor(airPressure = undefined,alarmAirPressure = undefined,alarmAqi = undefined,alarmCO = undefined,alarmFlag = undefined,alarmHumidity = undefined,alarmNO2 = undefined,alarmO3 = undefined,alarmPM10 = undefined,alarmPM25 = undefined,alarmSO2 = undefined,alarmTemperature = undefined,alarmTvoc = undefined,alarmWindSpeed = undefined,aqiValue = undefined,cameraOnline = undefined,dataId = undefined,dataTime = undefined,deviceId = undefined,deviceName = undefined,deviceNum = undefined,deviceOnline = undefined,district = undefined,districtName = undefined,factorCO = undefined,factorNO2 = undefined,factorO3 = undefined,factorPM10 = undefined,factorPM25 = undefined,factorSO2 = undefined,hasAirPressure = undefined,hasAqiValue = undefined,hasCamera = undefined,hasFactorCO = undefined,hasFactorNO2 = undefined,hasFactorO3 = undefined,hasFactorPM10 = undefined,hasFactorPM25 = undefined,hasFactorSO2 = undefined,hasHumidity = undefined,hasTemperature = undefined,hasTvoc = undefined,hasWindDirect = undefined,hasWindSpeed = undefined,humidity = undefined,latitude = undefined,location = undefined,longitude = undefined,pollutant = undefined,serialNum = undefined,temperature = undefined,tvoc = undefined,typeId = undefined,windDirect = undefined,windSpeed = undefined){
        this.airPressure = airPressure
        this.alarmAirPressure = alarmAirPressure
        this.alarmAqi = alarmAqi
        this.alarmCO = alarmCO
        this.alarmFlag = alarmFlag
        this.alarmHumidity = alarmHumidity
        this.alarmNO2 = alarmNO2
        this.alarmO3 = alarmO3
        this.alarmPM10 = alarmPM10
        this.alarmPM25 = alarmPM25
        this.alarmSO2 = alarmSO2
        this.alarmTemperature = alarmTemperature
        this.alarmTvoc = alarmTvoc
        this.alarmWindSpeed = alarmWindSpeed
        this.aqiValue = aqiValue
        this.cameraOnline = cameraOnline
        this.dataId = dataId
        this.dataTime = dataTime
        this.deviceId = deviceId
        this.deviceName = deviceName
        this.deviceNum = deviceNum
        this.deviceOnline = deviceOnline
        this.district = district
        this.districtName = districtName
        this.factorCO = factorCO
        this.factorNO2 = factorNO2
        this.factorO3 = factorO3
        this.factorPM10 = factorPM10
        this.factorPM25 = factorPM25
        this.factorSO2 = factorSO2
        this.hasAirPressure = hasAirPressure
        this.hasAqiValue = hasAqiValue
        this.hasCamera = hasCamera
        this.hasFactorCO = hasFactorCO
        this.hasFactorNO2 = hasFactorNO2
        this.hasFactorO3 = hasFactorO3
        this.hasFactorPM10 = hasFactorPM10
        this.hasFactorPM25 = hasFactorPM25
        this.hasFactorSO2 = hasFactorSO2
        this.hasHumidity = hasHumidity
        this.hasTemperature = hasTemperature
        this.hasTvoc = hasTvoc
        this.hasWindDirect = hasWindDirect
        this.hasWindSpeed = hasWindSpeed
        this.humidity = humidity
        this.latitude = latitude
        this.location = location
        this.longitude = longitude
        this.pollutant = pollutant
        this.serialNum = serialNum
        this.temperature = temperature
        this.tvoc = tvoc
        this.typeId = typeId
        this.windDirect = windDirect
        this.windSpeed = windSpeed
    }
       
    /**
     * 
     * @type {undefined}
     */
    airPressure=undefined   
    /**
     * 
     * @type {undefined}
     */
    alarmAirPressure=undefined   
    /**
     * 
     * @type {undefined}
     */
    alarmAqi=undefined   
    /**
     * 
     * @type {undefined}
     */
    alarmCO=undefined   
    /**
     * 
     * @type {undefined}
     */
    alarmFlag=undefined   
    /**
     * 
     * @type {undefined}
     */
    alarmHumidity=undefined   
    /**
     * 
     * @type {undefined}
     */
    alarmNO2=undefined   
    /**
     * 
     * @type {undefined}
     */
    alarmO3=undefined   
    /**
     * 
     * @type {undefined}
     */
    alarmPM10=undefined   
    /**
     * 
     * @type {undefined}
     */
    alarmPM25=undefined   
    /**
     * 
     * @type {undefined}
     */
    alarmSO2=undefined   
    /**
     * 
     * @type {undefined}
     */
    alarmTemperature=undefined   
    /**
     * 
     * @type {undefined}
     */
    alarmTvoc=undefined   
    /**
     * 
     * @type {undefined}
     */
    alarmWindSpeed=undefined   
    /**
     * 
     * @type {undefined}
     */
    aqiValue=undefined   
    /**
     * 摄像头是否在线
     * @type {undefined}
     */
    cameraOnline=undefined   
    /**
     * 数据ID
     * @type {Number}
     */
    dataId=undefined   
    /**
     * 数据接收时间
     * @type {String}
     */
    dataTime=undefined   
    /**
     * 设备Id
     * @type {Number}
     */
    deviceId=undefined   
    /**
     * 
     * @type {String}
     */
    deviceName=undefined   
    /**
     * 
     * @type {String}
     */
    deviceNum=undefined   
    /**
     * 设备在线状态
     * @type {undefined}
     */
    deviceOnline=undefined   
    /**
     * 区域代码
     * @type {String}
     */
    district=undefined   
    /**
     * 区域代码
     * @type {String}
     */
    districtName=undefined   
    /**
     * 
     * @type {undefined}
     */
    factorCO=undefined   
    /**
     * 
     * @type {undefined}
     */
    factorNO2=undefined   
    /**
     * 
     * @type {undefined}
     */
    factorO3=undefined   
    /**
     * 
     * @type {undefined}
     */
    factorPM10=undefined   
    /**
     * 
     * @type {undefined}
     */
    factorPM25=undefined   
    /**
     * 
     * @type {undefined}
     */
    factorSO2=undefined   
    /**
     * 
     * @type {undefined}
     */
    hasAirPressure=undefined   
    /**
     * 
     * @type {undefined}
     */
    hasAqiValue=undefined   
    /**
     * 是否有摄像头
     * @type {undefined}
     */
    hasCamera=undefined   
    /**
     * 
     * @type {undefined}
     */
    hasFactorCO=undefined   
    /**
     * 
     * @type {undefined}
     */
    hasFactorNO2=undefined   
    /**
     * 
     * @type {undefined}
     */
    hasFactorO3=undefined   
    /**
     * 
     * @type {undefined}
     */
    hasFactorPM10=undefined   
    /**
     * 
     * @type {undefined}
     */
    hasFactorPM25=undefined   
    /**
     * 
     * @type {undefined}
     */
    hasFactorSO2=undefined   
    /**
     * 
     * @type {undefined}
     */
    hasHumidity=undefined   
    /**
     * 
     * @type {undefined}
     */
    hasTemperature=undefined   
    /**
     * 
     * @type {undefined}
     */
    hasTvoc=undefined   
    /**
     * 
     * @type {undefined}
     */
    hasWindDirect=undefined   
    /**
     * 
     * @type {undefined}
     */
    hasWindSpeed=undefined   
    /**
     * 
     * @type {undefined}
     */
    humidity=undefined   
    /**
     * 纬度
     * @type {String}
     */
    latitude=undefined   
    /**
     * 详细地址
     * @type {String}
     */
    location=undefined   
    /**
     * 经度
     * @type {String}
     */
    longitude=undefined   
    /**
     * 
     * @type {String}
     */
    pollutant=undefined   
    /**
     * 序号
     * @type {Number}
     */
    serialNum=undefined   
    /**
     * 
     * @type {undefined}
     */
    temperature=undefined   
    /**
     * 
     * @type {undefined}
     */
    tvoc=undefined   
    /**
     * 类型id
     * @type {Number}
     */
    typeId=undefined   
    /**
     * 
     * @type {undefined}
     */
    windDirect=undefined   
    /**
     * 
     * @type {undefined}
     */
    windSpeed=undefined
    
}
export class Node {
  
    /**
     *
     * @param {Array} children 子节点
     * @param {undefined} hasAqi 
     * @param {undefined} hasCO 
     * @param {undefined} hasNO2 
     * @param {undefined} hasO3 
     * @param {undefined} hasPM10 
     * @param {undefined} hasPM25 
     * @param {undefined} hasSO2 
     * @param {undefined} hasTvoc 
     * @param {Number} nodeId 节点Id
     * @param {String} nodeName 节点名称
     * @param {Number} nodePId 父级ID
     * @param {Number} nodeType 类型：0 节点，1 设备
     */ 
    constructor(children = undefined,hasAqi = undefined,hasCO = undefined,hasNO2 = undefined,hasO3 = undefined,hasPM10 = undefined,hasPM25 = undefined,hasSO2 = undefined,hasTvoc = undefined,nodeId = undefined,nodeName = undefined,nodePId = undefined,nodeType = undefined){
        this.children = children
        this.hasAqi = hasAqi
        this.hasCO = hasCO
        this.hasNO2 = hasNO2
        this.hasO3 = hasO3
        this.hasPM10 = hasPM10
        this.hasPM25 = hasPM25
        this.hasSO2 = hasSO2
        this.hasTvoc = hasTvoc
        this.nodeId = nodeId
        this.nodeName = nodeName
        this.nodePId = nodePId
        this.nodeType = nodeType
    }
       
    /**
     * 子节点
     * @type {Array}
     */
    children=undefined   
    /**
     * 
     * @type {undefined}
     */
    hasAqi=undefined   
    /**
     * 
     * @type {undefined}
     */
    hasCO=undefined   
    /**
     * 
     * @type {undefined}
     */
    hasNO2=undefined   
    /**
     * 
     * @type {undefined}
     */
    hasO3=undefined   
    /**
     * 
     * @type {undefined}
     */
    hasPM10=undefined   
    /**
     * 
     * @type {undefined}
     */
    hasPM25=undefined   
    /**
     * 
     * @type {undefined}
     */
    hasSO2=undefined   
    /**
     * 
     * @type {undefined}
     */
    hasTvoc=undefined   
    /**
     * 节点Id
     * @type {Number}
     */
    nodeId=undefined   
    /**
     * 节点名称
     * @type {String}
     */
    nodeName=undefined   
    /**
     * 父级ID
     * @type {Number}
     */
    nodePId=undefined   
    /**
     * 类型：0 节点，1 设备
     * @type {Number}
     */
    nodeType=undefined
    
}
export class ReportDataDTO {
  
    /**
     *
     * @param {String} timeSlot 时间
     * @param {Array} values 
     */ 
    constructor(timeSlot = undefined,values = undefined){
        this.timeSlot = timeSlot
        this.values = values
    }
       
    /**
     * 时间
     * @type {String}
     */
    timeSlot=undefined   
    /**
     * 
     * @type {Array}
     */
    values=undefined
    
}
export class ResetPwd {
  
    /**
     *
     * @param {String} newPassward1 新密码
     * @param {String} newPassward2 确认密码
     * @param {String} oldPassward 原密码
     * @param {Number} userId 用户Id
     */ 
    constructor(newPassward1 = undefined,newPassward2 = undefined,oldPassward = undefined,userId = undefined){
        this.newPassward1 = newPassward1
        this.newPassward2 = newPassward2
        this.oldPassward = oldPassward
        this.userId = userId
    }
       
    /**
     * 新密码
     * @type {String}
     */
    newPassward1=undefined   
    /**
     * 确认密码
     * @type {String}
     */
    newPassward2=undefined   
    /**
     * 原密码
     * @type {String}
     */
    oldPassward=undefined   
    /**
     * 用户Id
     * @type {Number}
     */
    userId=undefined
    
}
export class ResponseDataAnalysisPollution {
  
    /**
     *
     * @param {Number} code 
     * @param {AnalysisPollution} data 
     * @param {String} message 
     * @param {undefined} success 
     */ 
    constructor(code = undefined,data = undefined,message = undefined,success = undefined){
        this.code = code
        this.data = data
        this.message = message
        this.success = success
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {AnalysisPollution}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined
    
}
export class ResponseDataBoundaryVO {
  
    /**
     *
     * @param {Number} code 
     * @param {BoundaryVO} data 
     * @param {String} message 
     * @param {undefined} success 
     */ 
    constructor(code = undefined,data = undefined,message = undefined,success = undefined){
        this.code = code
        this.data = data
        this.message = message
        this.success = success
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {BoundaryVO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined
    
}
export class ResponseDataCameraInfo {
  
    /**
     *
     * @param {Number} code 
     * @param {CameraInfo} data 
     * @param {String} message 
     * @param {undefined} success 
     */ 
    constructor(code = undefined,data = undefined,message = undefined,success = undefined){
        this.code = code
        this.data = data
        this.message = message
        this.success = success
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {CameraInfo}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined
    
}
export class ResponseDataDevicePowerDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {DevicePowerDTO} data 
     * @param {String} message 
     * @param {undefined} success 
     */ 
    constructor(code = undefined,data = undefined,message = undefined,success = undefined){
        this.code = code
        this.data = data
        this.message = message
        this.success = success
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {DevicePowerDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined
    
}
export class ResponseDataDeviceWaterDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {DeviceWaterDTO} data 
     * @param {String} message 
     * @param {undefined} success 
     */ 
    constructor(code = undefined,data = undefined,message = undefined,success = undefined){
        this.code = code
        this.data = data
        this.message = message
        this.success = success
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {DeviceWaterDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined
    
}
export class ResponseDataDevice {
  
    /**
     *
     * @param {Number} code 
     * @param {Device} data 
     * @param {String} message 
     * @param {undefined} success 
     */ 
    constructor(code = undefined,data = undefined,message = undefined,success = undefined){
        this.code = code
        this.data = data
        this.message = message
        this.success = success
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {Device}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined
    
}
export class ResponseDataDisplayMsgListDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {DisplayMsgListDTO} data 
     * @param {String} message 
     * @param {undefined} success 
     */ 
    constructor(code = undefined,data = undefined,message = undefined,success = undefined){
        this.code = code
        this.data = data
        this.message = message
        this.success = success
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {DisplayMsgListDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined
    
}
export class ResponseDataDisplayStateVO {
  
    /**
     *
     * @param {Number} code 
     * @param {DisplayStateVO} data 
     * @param {String} message 
     * @param {undefined} success 
     */ 
    constructor(code = undefined,data = undefined,message = undefined,success = undefined){
        this.code = code
        this.data = data
        this.message = message
        this.success = success
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {DisplayStateVO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined
    
}
export class ResponseDataEnterprise {
  
    /**
     *
     * @param {Number} code 
     * @param {Enterprise} data 
     * @param {String} message 
     * @param {undefined} success 
     */ 
    constructor(code = undefined,data = undefined,message = undefined,success = undefined){
        this.code = code
        this.data = data
        this.message = message
        this.success = success
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {Enterprise}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined
    
}
export class ResponseDataHomeCameraInfo {
  
    /**
     *
     * @param {Number} code 
     * @param {HomeCameraInfo} data 
     * @param {String} message 
     * @param {undefined} success 
     */ 
    constructor(code = undefined,data = undefined,message = undefined,success = undefined){
        this.code = code
        this.data = data
        this.message = message
        this.success = success
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {HomeCameraInfo}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined
    
}
export class ResponseDataHomeDetailDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {HomeDetailDTO} data 
     * @param {String} message 
     * @param {undefined} success 
     */ 
    constructor(code = undefined,data = undefined,message = undefined,success = undefined){
        this.code = code
        this.data = data
        this.message = message
        this.success = success
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {HomeDetailDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined
    
}
export class ResponseDataHomeMetricalInfo {
  
    /**
     *
     * @param {Number} code 
     * @param {HomeMetricalInfo} data 
     * @param {String} message 
     * @param {undefined} success 
     */ 
    constructor(code = undefined,data = undefined,message = undefined,success = undefined){
        this.code = code
        this.data = data
        this.message = message
        this.success = success
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {HomeMetricalInfo}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined
    
}
export class ResponseDataHomeNationData {
  
    /**
     *
     * @param {Number} code 
     * @param {HomeNationData} data 
     * @param {String} message 
     * @param {undefined} success 
     */ 
    constructor(code = undefined,data = undefined,message = undefined,success = undefined){
        this.code = code
        this.data = data
        this.message = message
        this.success = success
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {HomeNationData}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined
    
}
export class ResponseDataHomeStatisticsDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {HomeStatisticsDTO} data 
     * @param {String} message 
     * @param {undefined} success 
     */ 
    constructor(code = undefined,data = undefined,message = undefined,success = undefined){
        this.code = code
        this.data = data
        this.message = message
        this.success = success
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {HomeStatisticsDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined
    
}
export class ResponseDataLocate {
  
    /**
     *
     * @param {Number} code 
     * @param {Locate} data 
     * @param {String} message 
     * @param {undefined} success 
     */ 
    constructor(code = undefined,data = undefined,message = undefined,success = undefined){
        this.code = code
        this.data = data
        this.message = message
        this.success = success
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {Locate}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined
    
}
export class ResponseDataStatisticsDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {StatisticsDTO} data 
     * @param {String} message 
     * @param {undefined} success 
     */ 
    constructor(code = undefined,data = undefined,message = undefined,success = undefined){
        this.code = code
        this.data = data
        this.message = message
        this.success = success
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {StatisticsDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined
    
}
export class ResponseDataUser {
  
    /**
     *
     * @param {Number} code 
     * @param {User} data 
     * @param {String} message 
     * @param {undefined} success 
     */ 
    constructor(code = undefined,data = undefined,message = undefined,success = undefined){
        this.code = code
        this.data = data
        this.message = message
        this.success = success
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {User}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined
    
}
export class ResponseDataWaterAlarmDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {WaterAlarmDTO} data 
     * @param {String} message 
     * @param {undefined} success 
     */ 
    constructor(code = undefined,data = undefined,message = undefined,success = undefined){
        this.code = code
        this.data = data
        this.message = message
        this.success = success
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {WaterAlarmDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined
    
}
export class ResponseDataWaterLimitDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {WaterLimitDTO} data 
     * @param {String} message 
     * @param {undefined} success 
     */ 
    constructor(code = undefined,data = undefined,message = undefined,success = undefined){
        this.code = code
        this.data = data
        this.message = message
        this.success = success
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {WaterLimitDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined
    
}
export class ResponseDataint {
  
    /**
     *
     * @param {Number} code 
     * @param {Number} data 
     * @param {String} message 
     * @param {undefined} success 
     */ 
    constructor(code = undefined,data = undefined,message = undefined,success = undefined){
        this.code = code
        this.data = data
        this.message = message
        this.success = success
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {Number}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined
    
}
export class ResponseListAnalysisPollution {
  
    /**
     *
     * @param {Number} code 
     * @param {Array} list 
     * @param {String} message 
     * @param {undefined} success 
     */ 
    constructor(code = undefined,list = undefined,message = undefined,success = undefined){
        this.code = code
        this.list = list
        this.message = message
        this.success = success
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {Array}
     */
    list=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined
    
}
export class ResponseListCameraInfo {
  
    /**
     *
     * @param {Number} code 
     * @param {Array} list 
     * @param {String} message 
     * @param {undefined} success 
     */ 
    constructor(code = undefined,list = undefined,message = undefined,success = undefined){
        this.code = code
        this.list = list
        this.message = message
        this.success = success
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {Array}
     */
    list=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined
    
}
export class ResponseListContrast {
  
    /**
     *
     * @param {Number} code 
     * @param {Array} list 
     * @param {String} message 
     * @param {undefined} success 
     */ 
    constructor(code = undefined,list = undefined,message = undefined,success = undefined){
        this.code = code
        this.list = list
        this.message = message
        this.success = success
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {Array}
     */
    list=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined
    
}
export class ResponseListDeviceDataDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array} list 
     * @param {String} message 
     * @param {undefined} success 
     */ 
    constructor(code = undefined,list = undefined,message = undefined,success = undefined){
        this.code = code
        this.list = list
        this.message = message
        this.success = success
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {Array}
     */
    list=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined
    
}
export class ResponseListDevice {
  
    /**
     *
     * @param {Number} code 
     * @param {Array} list 
     * @param {String} message 
     * @param {undefined} success 
     */ 
    constructor(code = undefined,list = undefined,message = undefined,success = undefined){
        this.code = code
        this.list = list
        this.message = message
        this.success = success
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {Array}
     */
    list=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined
    
}
export class ResponseListDisplayDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array} list 
     * @param {String} message 
     * @param {undefined} success 
     */ 
    constructor(code = undefined,list = undefined,message = undefined,success = undefined){
        this.code = code
        this.list = list
        this.message = message
        this.success = success
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {Array}
     */
    list=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined
    
}
export class ResponseListFactorSpinner {
  
    /**
     *
     * @param {Number} code 
     * @param {Array} list 
     * @param {String} message 
     * @param {undefined} success 
     */ 
    constructor(code = undefined,list = undefined,message = undefined,success = undefined){
        this.code = code
        this.list = list
        this.message = message
        this.success = success
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {Array}
     */
    list=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined
    
}
export class ResponseListFrontSpinner {
  
    /**
     *
     * @param {Number} code 
     * @param {Array} list 
     * @param {String} message 
     * @param {undefined} success 
     */ 
    constructor(code = undefined,list = undefined,message = undefined,success = undefined){
        this.code = code
        this.list = list
        this.message = message
        this.success = success
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {Array}
     */
    list=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined
    
}
export class ResponseListHomeListDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array} list 
     * @param {String} message 
     * @param {undefined} success 
     */ 
    constructor(code = undefined,list = undefined,message = undefined,success = undefined){
        this.code = code
        this.list = list
        this.message = message
        this.success = success
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {Array}
     */
    list=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined
    
}
export class ResponseListIndustry {
  
    /**
     *
     * @param {Number} code 
     * @param {Array} list 
     * @param {String} message 
     * @param {undefined} success 
     */ 
    constructor(code = undefined,list = undefined,message = undefined,success = undefined){
        this.code = code
        this.list = list
        this.message = message
        this.success = success
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {Array}
     */
    list=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined
    
}
export class ResponseListMetricalData {
  
    /**
     *
     * @param {Number} code 
     * @param {Array} list 
     * @param {String} message 
     * @param {undefined} success 
     */ 
    constructor(code = undefined,list = undefined,message = undefined,success = undefined){
        this.code = code
        this.list = list
        this.message = message
        this.success = success
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {Array}
     */
    list=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined
    
}
export class ResponseListNode {
  
    /**
     *
     * @param {Number} code 
     * @param {Array} list 
     * @param {String} message 
     * @param {undefined} success 
     */ 
    constructor(code = undefined,list = undefined,message = undefined,success = undefined){
        this.code = code
        this.list = list
        this.message = message
        this.success = success
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {Array}
     */
    list=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined
    
}
export class ResponseListReportDataDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array} list 
     * @param {String} message 
     * @param {undefined} success 
     */ 
    constructor(code = undefined,list = undefined,message = undefined,success = undefined){
        this.code = code
        this.list = list
        this.message = message
        this.success = success
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {Array}
     */
    list=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined
    
}
export class ResponseListWaterLimitDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array} list 
     * @param {String} message 
     * @param {undefined} success 
     */ 
    constructor(code = undefined,list = undefined,message = undefined,success = undefined){
        this.code = code
        this.list = list
        this.message = message
        this.success = success
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {Array}
     */
    list=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined
    
}
export class ResponseListstring {
  
    /**
     *
     * @param {Number} code 
     * @param {Array} list 
     * @param {String} message 
     * @param {undefined} success 
     */ 
    constructor(code = undefined,list = undefined,message = undefined,success = undefined){
        this.code = code
        this.list = list
        this.message = message
        this.success = success
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {Array}
     */
    list=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined
    
}
export class ResponsePageBoundaryListVO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array} list 
     * @param {String} message 
     * @param {undefined} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = undefined,message = undefined,success = undefined,total = undefined){
        this.code = code
        this.list = list
        this.message = message
        this.success = success
        this.total = total
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {Array}
     */
    list=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageCameraInfo {
  
    /**
     *
     * @param {Number} code 
     * @param {Array} list 
     * @param {String} message 
     * @param {undefined} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = undefined,message = undefined,success = undefined,total = undefined){
        this.code = code
        this.list = list
        this.message = message
        this.success = success
        this.total = total
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {Array}
     */
    list=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageDeviceAlarmSelect {
  
    /**
     *
     * @param {Number} code 
     * @param {Array} list 
     * @param {String} message 
     * @param {undefined} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = undefined,message = undefined,success = undefined,total = undefined){
        this.code = code
        this.list = list
        this.message = message
        this.success = success
        this.total = total
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {Array}
     */
    list=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageDeviceAlarm {
  
    /**
     *
     * @param {Number} code 
     * @param {Array} list 
     * @param {String} message 
     * @param {undefined} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = undefined,message = undefined,success = undefined,total = undefined){
        this.code = code
        this.list = list
        this.message = message
        this.success = success
        this.total = total
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {Array}
     */
    list=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageDevicePowerDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array} list 
     * @param {String} message 
     * @param {undefined} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = undefined,message = undefined,success = undefined,total = undefined){
        this.code = code
        this.list = list
        this.message = message
        this.success = success
        this.total = total
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {Array}
     */
    list=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageDeviceWaterDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array} list 
     * @param {String} message 
     * @param {undefined} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = undefined,message = undefined,success = undefined,total = undefined){
        this.code = code
        this.list = list
        this.message = message
        this.success = success
        this.total = total
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {Array}
     */
    list=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageDevice {
  
    /**
     *
     * @param {Number} code 
     * @param {Array} list 
     * @param {String} message 
     * @param {undefined} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = undefined,message = undefined,success = undefined,total = undefined){
        this.code = code
        this.list = list
        this.message = message
        this.success = success
        this.total = total
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {Array}
     */
    list=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageEnterprise {
  
    /**
     *
     * @param {Number} code 
     * @param {Array} list 
     * @param {String} message 
     * @param {undefined} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = undefined,message = undefined,success = undefined,total = undefined){
        this.code = code
        this.list = list
        this.message = message
        this.success = success
        this.total = total
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {Array}
     */
    list=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageFileDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array} list 
     * @param {String} message 
     * @param {undefined} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = undefined,message = undefined,success = undefined,total = undefined){
        this.code = code
        this.list = list
        this.message = message
        this.success = success
        this.total = total
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {Array}
     */
    list=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageMapInfo {
  
    /**
     *
     * @param {Number} code 
     * @param {Array} list 
     * @param {String} message 
     * @param {undefined} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = undefined,message = undefined,success = undefined,total = undefined){
        this.code = code
        this.list = list
        this.message = message
        this.success = success
        this.total = total
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {Array}
     */
    list=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageMetricalData {
  
    /**
     *
     * @param {Number} code 
     * @param {Array} list 
     * @param {String} message 
     * @param {undefined} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = undefined,message = undefined,success = undefined,total = undefined){
        this.code = code
        this.list = list
        this.message = message
        this.success = success
        this.total = total
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {Array}
     */
    list=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageReportDataDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array} list 
     * @param {String} message 
     * @param {undefined} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = undefined,message = undefined,success = undefined,total = undefined){
        this.code = code
        this.list = list
        this.message = message
        this.success = success
        this.total = total
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {Array}
     */
    list=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageUser {
  
    /**
     *
     * @param {Number} code 
     * @param {Array} list 
     * @param {String} message 
     * @param {undefined} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = undefined,message = undefined,success = undefined,total = undefined){
        this.code = code
        this.list = list
        this.message = message
        this.success = success
        this.total = total
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {Array}
     */
    list=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageWaterAlarmDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array} list 
     * @param {String} message 
     * @param {undefined} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = undefined,message = undefined,success = undefined,total = undefined){
        this.code = code
        this.list = list
        this.message = message
        this.success = success
        this.total = total
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {Array}
     */
    list=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponseResult {
  
    /**
     *
     * @param {Number} code 
     * @param {String} message 
     * @param {undefined} success 
     */ 
    constructor(code = undefined,message = undefined,success = undefined){
        this.code = code
        this.message = message
        this.success = success
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined
    
}
export class StatisticsDTO {
  
    /**
     *
     * @param {Number} alarmCount 报警企业数
     * @param {Number} buildedCount 有在线监测企业数
     * @param {Number} energyCount 有用能监测企业数
     * @param {String} energyRate 有在线监测企业占比
     * @param {Number} enterpriseCount 企业总数
     * @param {Array} enterpriseList 企业列表
     * @param {Number} licenseCount 有排污许可企业数
     * @param {Number} onlineCount 在线数
     * @param {String} onlineRate 在线率
     * @param {Number} rainCount 雨水在线监测企业数
     * @param {String} rainRate 雨水在线监测企业占比
     * @param {Number} totalCount 设备总数
     * @param {Number} unbuildCount 无在线监测企业数
     * @param {Number} wasteCount 污水在线监测企业数
     * @param {String} wasteRate 污水在线监测企业占比
     */ 
    constructor(alarmCount = undefined,buildedCount = undefined,energyCount = undefined,energyRate = undefined,enterpriseCount = undefined,enterpriseList = undefined,licenseCount = undefined,onlineCount = undefined,onlineRate = undefined,rainCount = undefined,rainRate = undefined,totalCount = undefined,unbuildCount = undefined,wasteCount = undefined,wasteRate = undefined){
        this.alarmCount = alarmCount
        this.buildedCount = buildedCount
        this.energyCount = energyCount
        this.energyRate = energyRate
        this.enterpriseCount = enterpriseCount
        this.enterpriseList = enterpriseList
        this.licenseCount = licenseCount
        this.onlineCount = onlineCount
        this.onlineRate = onlineRate
        this.rainCount = rainCount
        this.rainRate = rainRate
        this.totalCount = totalCount
        this.unbuildCount = unbuildCount
        this.wasteCount = wasteCount
        this.wasteRate = wasteRate
    }
       
    /**
     * 报警企业数
     * @type {Number}
     */
    alarmCount=undefined   
    /**
     * 有在线监测企业数
     * @type {Number}
     */
    buildedCount=undefined   
    /**
     * 有用能监测企业数
     * @type {Number}
     */
    energyCount=undefined   
    /**
     * 有在线监测企业占比
     * @type {String}
     */
    energyRate=undefined   
    /**
     * 企业总数
     * @type {Number}
     */
    enterpriseCount=undefined   
    /**
     * 企业列表
     * @type {Array}
     */
    enterpriseList=undefined   
    /**
     * 有排污许可企业数
     * @type {Number}
     */
    licenseCount=undefined   
    /**
     * 在线数
     * @type {Number}
     */
    onlineCount=undefined   
    /**
     * 在线率
     * @type {String}
     */
    onlineRate=undefined   
    /**
     * 雨水在线监测企业数
     * @type {Number}
     */
    rainCount=undefined   
    /**
     * 雨水在线监测企业占比
     * @type {String}
     */
    rainRate=undefined   
    /**
     * 设备总数
     * @type {Number}
     */
    totalCount=undefined   
    /**
     * 无在线监测企业数
     * @type {Number}
     */
    unbuildCount=undefined   
    /**
     * 污水在线监测企业数
     * @type {Number}
     */
    wasteCount=undefined   
    /**
     * 污水在线监测企业占比
     * @type {String}
     */
    wasteRate=undefined
    
}
export class User {
  
    /**
     *
     * @param {String} colPassword 密码
     * @param {String} emailAddr 邮箱
     * @param {String} headSculpture 头像地址
     * @param {String} lastLoginTime 最近登陆时间
     * @param {String} phoneNum 电话
     * @param {Number} roleId 类型Id
     * @param {String} roleName 用户类型
     * @param {Number} serialNum 序号
     * @param {String} userAccount 用户账户
     * @param {Number} userId 用户Id
     * @param {String} userName 用户姓名
     * @param {String} weChat 微信
     */ 
    constructor(colPassword = undefined,emailAddr = undefined,headSculpture = undefined,lastLoginTime = undefined,phoneNum = undefined,roleId = undefined,roleName = undefined,serialNum = undefined,userAccount = undefined,userId = undefined,userName = undefined,weChat = undefined){
        this.colPassword = colPassword
        this.emailAddr = emailAddr
        this.headSculpture = headSculpture
        this.lastLoginTime = lastLoginTime
        this.phoneNum = phoneNum
        this.roleId = roleId
        this.roleName = roleName
        this.serialNum = serialNum
        this.userAccount = userAccount
        this.userId = userId
        this.userName = userName
        this.weChat = weChat
    }
       
    /**
     * 密码
     * @type {String}
     */
    colPassword=undefined   
    /**
     * 邮箱
     * @type {String}
     */
    emailAddr=undefined   
    /**
     * 头像地址
     * @type {String}
     */
    headSculpture=undefined   
    /**
     * 最近登陆时间
     * @type {String}
     */
    lastLoginTime=undefined   
    /**
     * 电话
     * @type {String}
     */
    phoneNum=undefined   
    /**
     * 类型Id
     * @type {Number}
     */
    roleId=undefined   
    /**
     * 用户类型
     * @type {String}
     */
    roleName=undefined   
    /**
     * 序号
     * @type {Number}
     */
    serialNum=undefined   
    /**
     * 用户账户
     * @type {String}
     */
    userAccount=undefined   
    /**
     * 用户Id
     * @type {Number}
     */
    userId=undefined   
    /**
     * 用户姓名
     * @type {String}
     */
    userName=undefined   
    /**
     * 微信
     * @type {String}
     */
    weChat=undefined
    
}
export class WaterAlarmDTO {
  
    /**
     *
     * @param {String} alarmContent 报警内容
     * @param {String} deviceNum 设备编号
     * @param {String} enterpriseName 企业名称
     * @param {String} flag 标志
     * @param {String} flagName 标志
     * @param {Number} formId 1：污水，2：雨水
     * @param {String} formName 污水/雨水
     * @param {Number} id 主键id
     * @param {String} occurTime 发生时间
     * @param {String} recoverTime 恢复时间
     * @param {String} remark 备注
     * @param {Number} typeId 1：离线，2：超标，3：异常
     * @param {String} typeName 离线/超标/异常
     */ 
    constructor(alarmContent = undefined,deviceNum = undefined,enterpriseName = undefined,flag = undefined,flagName = undefined,formId = undefined,formName = undefined,id = undefined,occurTime = undefined,recoverTime = undefined,remark = undefined,typeId = undefined,typeName = undefined){
        this.alarmContent = alarmContent
        this.deviceNum = deviceNum
        this.enterpriseName = enterpriseName
        this.flag = flag
        this.flagName = flagName
        this.formId = formId
        this.formName = formName
        this.id = id
        this.occurTime = occurTime
        this.recoverTime = recoverTime
        this.remark = remark
        this.typeId = typeId
        this.typeName = typeName
    }
       
    /**
     * 报警内容
     * @type {String}
     */
    alarmContent=undefined   
    /**
     * 设备编号
     * @type {String}
     */
    deviceNum=undefined   
    /**
     * 企业名称
     * @type {String}
     */
    enterpriseName=undefined   
    /**
     * 标志
     * @type {String}
     */
    flag=undefined   
    /**
     * 标志
     * @type {String}
     */
    flagName=undefined   
    /**
     * 1：污水，2：雨水
     * @type {Number}
     */
    formId=undefined   
    /**
     * 污水/雨水
     * @type {String}
     */
    formName=undefined   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 发生时间
     * @type {String}
     */
    occurTime=undefined   
    /**
     * 恢复时间
     * @type {String}
     */
    recoverTime=undefined   
    /**
     * 备注
     * @type {String}
     */
    remark=undefined   
    /**
     * 1：离线，2：超标，3：异常
     * @type {Number}
     */
    typeId=undefined   
    /**
     * 离线/超标/异常
     * @type {String}
     */
    typeName=undefined
    
}
export class WaterLimitDTO {
  
    /**
     *
     * @param {Number} id id
     * @param {String} name 项目名称
     * @param {String} rainLower 雨水下线
     * @param {String} rainUpper 雨水上限
     * @param {String} unit 单位
     * @param {String} wasteLower 污水下限
     * @param {String} wasteUpper 污水上限
     */ 
    constructor(id = undefined,name = undefined,rainLower = undefined,rainUpper = undefined,unit = undefined,wasteLower = undefined,wasteUpper = undefined){
        this.id = id
        this.name = name
        this.rainLower = rainLower
        this.rainUpper = rainUpper
        this.unit = unit
        this.wasteLower = wasteLower
        this.wasteUpper = wasteUpper
    }
       
    /**
     * id
     * @type {Number}
     */
    id=undefined   
    /**
     * 项目名称
     * @type {String}
     */
    name=undefined   
    /**
     * 雨水下线
     * @type {String}
     */
    rainLower=undefined   
    /**
     * 雨水上限
     * @type {String}
     */
    rainUpper=undefined   
    /**
     * 单位
     * @type {String}
     */
    unit=undefined   
    /**
     * 污水下限
     * @type {String}
     */
    wasteLower=undefined   
    /**
     * 污水上限
     * @type {String}
     */
    wasteUpper=undefined
    
}
