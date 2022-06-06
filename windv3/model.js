export class AccidentBaseDTO {
  
    /**
     *
     * @param {String} accidentCause 引发原因
     * @param {String} accidentDetail 事故经过详细描述
     * @param {String} accidentOverview 事故概述
     * @param {String} createTime 创建时间
     * @param {String} emergencyMeasure 应急措施
     * @param {Number} id 主键id
     * @param {String} incidentSite 发生地点
     * @param {Number} industryId 所属行业id
     * @param {String} industryName 所属行业
     * @param {String} influenceScope 污染影响范围
     * @param {String} leakage 污染物及其泄漏量
     * @param {Number} levelId 事故等级id
     * @param {String} levelName 事故等级
     * @param {String} lossAmount 事件损失
     * @param {String} moniker 事件名称
     * @param {String} occurTime 事故时间
     * @param {String} summarizeExperience 经验总结
     * @param {Number} typeId 事故类型id
     * @param {String} typeName 事故类型
     * @param {String} updateTime 更新时间
     */ 
    constructor(accidentCause = '',accidentDetail = '',accidentOverview = '',createTime = '',emergencyMeasure = '',id = undefined,incidentSite = '',industryId = undefined,industryName = '',influenceScope = '',leakage = '',levelId = undefined,levelName = '',lossAmount = '',moniker = '',occurTime = '',summarizeExperience = '',typeId = undefined,typeName = '',updateTime = ''){
        this.accidentCause = accidentCause
        this.accidentDetail = accidentDetail
        this.accidentOverview = accidentOverview
        this.createTime = createTime
        this.emergencyMeasure = emergencyMeasure
        this.id = id
        this.incidentSite = incidentSite
        this.industryId = industryId
        this.industryName = industryName
        this.influenceScope = influenceScope
        this.leakage = leakage
        this.levelId = levelId
        this.levelName = levelName
        this.lossAmount = lossAmount
        this.moniker = moniker
        this.occurTime = occurTime
        this.summarizeExperience = summarizeExperience
        this.typeId = typeId
        this.typeName = typeName
        this.updateTime = updateTime
    }
       
    /**
     * 引发原因
     * @type {String}
     */
    accidentCause=''   
    /**
     * 事故经过详细描述
     * @type {String}
     */
    accidentDetail=''   
    /**
     * 事故概述
     * @type {String}
     */
    accidentOverview=''   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 应急措施
     * @type {String}
     */
    emergencyMeasure=''   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 发生地点
     * @type {String}
     */
    incidentSite=''   
    /**
     * 所属行业id
     * @type {Number}
     */
    industryId=undefined   
    /**
     * 所属行业
     * @type {String}
     */
    industryName=''   
    /**
     * 污染影响范围
     * @type {String}
     */
    influenceScope=''   
    /**
     * 污染物及其泄漏量
     * @type {String}
     */
    leakage=''   
    /**
     * 事故等级id
     * @type {Number}
     */
    levelId=undefined   
    /**
     * 事故等级
     * @type {String}
     */
    levelName=''   
    /**
     * 事件损失
     * @type {String}
     */
    lossAmount=''   
    /**
     * 事件名称
     * @type {String}
     */
    moniker=''   
    /**
     * 事故时间
     * @type {String}
     */
    occurTime=''   
    /**
     * 经验总结
     * @type {String}
     */
    summarizeExperience=''   
    /**
     * 事故类型id
     * @type {Number}
     */
    typeId=undefined   
    /**
     * 事故类型
     * @type {String}
     */
    typeName=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''
    
}
export class AccidentCountDTO {
  
    /**
     *
     * @param {Array<AccidentCountVO>} list 
     * @param {Number} total id
     */ 
    constructor(list = [],total = undefined){
        this.list = list
        this.total = total
    }
       
    /**
     * 
     * @type {Array<AccidentCountVO>}
     */
    list=[]   
    /**
     * id
     * @type {Number}
     */
    total=undefined
    
}
export class AccidentCountVO {
  
    /**
     *
     * @param {Number} cnt 数量
     * @param {Number} id id
     * @param {String} moniker 名称
     */ 
    constructor(cnt = undefined,id = undefined,moniker = ''){
        this.cnt = cnt
        this.id = id
        this.moniker = moniker
    }
       
    /**
     * 数量
     * @type {Number}
     */
    cnt=undefined   
    /**
     * id
     * @type {Number}
     */
    id=undefined   
    /**
     * 名称
     * @type {String}
     */
    moniker=''
    
}
export class AddFactorLimitDTO {
  
    /**
     *
     * @param {Number} itemId 监测项目id
     * @param {Number} lowerLimit 预警下限
     * @param {Number} stationId 点位id
     * @param {Number} stationItemId 点位监测项目id
     * @param {Number} upperLimit 预警上限
     */ 
    constructor(itemId = undefined,lowerLimit = undefined,stationId = undefined,stationItemId = undefined,upperLimit = undefined){
        this.itemId = itemId
        this.lowerLimit = lowerLimit
        this.stationId = stationId
        this.stationItemId = stationItemId
        this.upperLimit = upperLimit
    }
       
    /**
     * 监测项目id
     * @type {Number}
     */
    itemId=undefined   
    /**
     * 预警下限
     * @type {Number}
     */
    lowerLimit=undefined   
    /**
     * 点位id
     * @type {Number}
     */
    stationId=undefined   
    /**
     * 点位监测项目id
     * @type {Number}
     */
    stationItemId=undefined   
    /**
     * 预警上限
     * @type {Number}
     */
    upperLimit=undefined
    
}
export class AlarmListVO {
  
    /**
     *
     * @param {Number} alarmId 报警id
     * @param {String} alarmTime 报警时间
     * @param {String} alarmType 报警类别
     * @param {String} duration 报警时长
     * @param {String} endTime 报警结束时间
     * @param {String} exceed 超标倍数
     * @param {Number} itemId 监测因子id
     * @param {String} itemName 监测因子名称
     * @param {String} itemUnit 监测因子单位
     * @param {Number} normValue 监测标准限值
     * @param {Number} stationId 点位id
     * @param {String} stationName 点位名称
     * @param {String} status 处理状态
     * @param {Number} statusId 处理状态id
     * @param {Number} taskId 任务id
     * @param {Number} value 监测数据
     */ 
    constructor(alarmId = undefined,alarmTime = '',alarmType = '',duration = '',endTime = '',exceed = '',itemId = undefined,itemName = '',itemUnit = '',normValue = undefined,stationId = undefined,stationName = '',status = '',statusId = undefined,taskId = undefined,value = undefined){
        this.alarmId = alarmId
        this.alarmTime = alarmTime
        this.alarmType = alarmType
        this.duration = duration
        this.endTime = endTime
        this.exceed = exceed
        this.itemId = itemId
        this.itemName = itemName
        this.itemUnit = itemUnit
        this.normValue = normValue
        this.stationId = stationId
        this.stationName = stationName
        this.status = status
        this.statusId = statusId
        this.taskId = taskId
        this.value = value
    }
       
    /**
     * 报警id
     * @type {Number}
     */
    alarmId=undefined   
    /**
     * 报警时间
     * @type {String}
     */
    alarmTime=''   
    /**
     * 报警类别
     * @type {String}
     */
    alarmType=''   
    /**
     * 报警时长
     * @type {String}
     */
    duration=''   
    /**
     * 报警结束时间
     * @type {String}
     */
    endTime=''   
    /**
     * 超标倍数
     * @type {String}
     */
    exceed=''   
    /**
     * 监测因子id
     * @type {Number}
     */
    itemId=undefined   
    /**
     * 监测因子名称
     * @type {String}
     */
    itemName=''   
    /**
     * 监测因子单位
     * @type {String}
     */
    itemUnit=''   
    /**
     * 监测标准限值
     * @type {Number}
     */
    normValue=undefined   
    /**
     * 点位id
     * @type {Number}
     */
    stationId=undefined   
    /**
     * 点位名称
     * @type {String}
     */
    stationName=''   
    /**
     * 处理状态
     * @type {String}
     */
    status=''   
    /**
     * 处理状态id
     * @type {Number}
     */
    statusId=undefined   
    /**
     * 任务id
     * @type {Number}
     */
    taskId=undefined   
    /**
     * 监测数据
     * @type {Number}
     */
    value=undefined
    
}
export class AlarmRankDTO {
  
    /**
     *
     * @param {Number} alarmCount 报警次数
     * @param {Boolean} monthFlag 环比标志位
     * @param {String} monthRatio 环比
     * @param {Number} rank 排名
     * @param {String} stationName 点位名称
     * @param {Boolean} yearFlag 同比标志位
     * @param {String} yearRatio 同比
     */ 
    constructor(alarmCount = undefined,monthFlag = false,monthRatio = '',rank = undefined,stationName = '',yearFlag = false,yearRatio = ''){
        this.alarmCount = alarmCount
        this.monthFlag = monthFlag
        this.monthRatio = monthRatio
        this.rank = rank
        this.stationName = stationName
        this.yearFlag = yearFlag
        this.yearRatio = yearRatio
    }
       
    /**
     * 报警次数
     * @type {Number}
     */
    alarmCount=undefined   
    /**
     * 环比标志位
     * @type {Boolean}
     */
    monthFlag=false   
    /**
     * 环比
     * @type {String}
     */
    monthRatio=''   
    /**
     * 排名
     * @type {Number}
     */
    rank=undefined   
    /**
     * 点位名称
     * @type {String}
     */
    stationName=''   
    /**
     * 同比标志位
     * @type {Boolean}
     */
    yearFlag=false   
    /**
     * 同比
     * @type {String}
     */
    yearRatio=''
    
}
export class AlarmSettingListVO {
  
    /**
     *
     * @param {String} deviceName 设备编号
     * @param {Number} itemId 检测项目id
     * @param {String} itemName 监测项目名称
     * @param {String} itemUnit 监测项目单位
     * @param {Number} lowerLimit 数值下限
     * @param {Number} stationId 点位id
     * @param {Number} stationItemId 点位监测项目id
     * @param {String} stationName 点位名称
     * @param {Number} upperLimit 数值上限
     */ 
    constructor(deviceName = '',itemId = undefined,itemName = '',itemUnit = '',lowerLimit = undefined,stationId = undefined,stationItemId = undefined,stationName = '',upperLimit = undefined){
        this.deviceName = deviceName
        this.itemId = itemId
        this.itemName = itemName
        this.itemUnit = itemUnit
        this.lowerLimit = lowerLimit
        this.stationId = stationId
        this.stationItemId = stationItemId
        this.stationName = stationName
        this.upperLimit = upperLimit
    }
       
    /**
     * 设备编号
     * @type {String}
     */
    deviceName=''   
    /**
     * 检测项目id
     * @type {Number}
     */
    itemId=undefined   
    /**
     * 监测项目名称
     * @type {String}
     */
    itemName=''   
    /**
     * 监测项目单位
     * @type {String}
     */
    itemUnit=''   
    /**
     * 数值下限
     * @type {Number}
     */
    lowerLimit=undefined   
    /**
     * 点位id
     * @type {Number}
     */
    stationId=undefined   
    /**
     * 点位监测项目id
     * @type {Number}
     */
    stationItemId=undefined   
    /**
     * 点位名称
     * @type {String}
     */
    stationName=''   
    /**
     * 数值上限
     * @type {Number}
     */
    upperLimit=undefined
    
}
export class AlarmStatisticsVO {
  
    /**
     *
     * @param {Number} crRatio 化学需氧量占比
     * @param {Number} mnRatio 高锰酸盐指数占比
     * @param {Number} nhRatio 氨氮占比
     * @param {Number} otherRatio 其他占比
     * @param {Number} ppRatio 总磷占比
     * @param {Array<AlarmRankDTO>} rankList 报警排名
     */ 
    constructor(crRatio = undefined,mnRatio = undefined,nhRatio = undefined,otherRatio = undefined,ppRatio = undefined,rankList = []){
        this.crRatio = crRatio
        this.mnRatio = mnRatio
        this.nhRatio = nhRatio
        this.otherRatio = otherRatio
        this.ppRatio = ppRatio
        this.rankList = rankList
    }
       
    /**
     * 化学需氧量占比
     * @type {Number}
     */
    crRatio=undefined   
    /**
     * 高锰酸盐指数占比
     * @type {Number}
     */
    mnRatio=undefined   
    /**
     * 氨氮占比
     * @type {Number}
     */
    nhRatio=undefined   
    /**
     * 其他占比
     * @type {Number}
     */
    otherRatio=undefined   
    /**
     * 总磷占比
     * @type {Number}
     */
    ppRatio=undefined   
    /**
     * 报警排名
     * @type {Array<AlarmRankDTO>}
     */
    rankList=[]
    
}
export class AlarmStatusVO {
  
    /**
     *
     * @param {Number} checked 已审核
     * @param {Number} ondoing 处理中
     * @param {Number} unchecked 待审核
     * @param {Number} unhandle 未处理
     */ 
    constructor(checked = undefined,ondoing = undefined,unchecked = undefined,unhandle = undefined){
        this.checked = checked
        this.ondoing = ondoing
        this.unchecked = unchecked
        this.unhandle = unhandle
    }
       
    /**
     * 已审核
     * @type {Number}
     */
    checked=undefined   
    /**
     * 处理中
     * @type {Number}
     */
    ondoing=undefined   
    /**
     * 待审核
     * @type {Number}
     */
    unchecked=undefined   
    /**
     * 未处理
     * @type {Number}
     */
    unhandle=undefined
    
}
export class AppLoginDTO {
  
    /**
     *
     * @param {String} access 密码
     * @param {String} account 账号
     * @param {Boolean} enterpriseFlag 是否企业用户
     * @param {Number} enterpriseId 
     * @param {Boolean} griderFlag 
     * @param {Number} id 用户Id
     * @param {Boolean} managerFlag 
     * @param {String} moniker 用户姓名
     * @param {Boolean} operatorFlag 
     */ 
    constructor(access = '',account = '',enterpriseFlag = false,enterpriseId = undefined,griderFlag = false,id = undefined,managerFlag = false,moniker = '',operatorFlag = false){
        this.access = access
        this.account = account
        this.enterpriseFlag = enterpriseFlag
        this.enterpriseId = enterpriseId
        this.griderFlag = griderFlag
        this.id = id
        this.managerFlag = managerFlag
        this.moniker = moniker
        this.operatorFlag = operatorFlag
    }
       
    /**
     * 密码
     * @type {String}
     */
    access=''   
    /**
     * 账号
     * @type {String}
     */
    account=''   
    /**
     * 是否企业用户
     * @type {Boolean}
     */
    enterpriseFlag=false   
    /**
     * 
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 
     * @type {Boolean}
     */
    griderFlag=false   
    /**
     * 用户Id
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {Boolean}
     */
    managerFlag=false   
    /**
     * 用户姓名
     * @type {String}
     */
    moniker=''   
    /**
     * 
     * @type {Boolean}
     */
    operatorFlag=false
    
}
export class AppTaskListVO {
  
    /**
     *
     * @param {Number} alarmId 报警id
     * @param {String} dueDate 核查时限
     * @param {String} status 处理状态
     * @param {Number} statusId 处理状态id
     * @param {Number} taskId 任务id
     * @param {String} taskName 任务名称
     * @param {Number} typeId 监测类型id
     */ 
    constructor(alarmId = undefined,dueDate = '',status = '',statusId = undefined,taskId = undefined,taskName = '',typeId = undefined){
        this.alarmId = alarmId
        this.dueDate = dueDate
        this.status = status
        this.statusId = statusId
        this.taskId = taskId
        this.taskName = taskName
        this.typeId = typeId
    }
       
    /**
     * 报警id
     * @type {Number}
     */
    alarmId=undefined   
    /**
     * 核查时限
     * @type {String}
     */
    dueDate=''   
    /**
     * 处理状态
     * @type {String}
     */
    status=''   
    /**
     * 处理状态id
     * @type {Number}
     */
    statusId=undefined   
    /**
     * 任务id
     * @type {Number}
     */
    taskId=undefined   
    /**
     * 任务名称
     * @type {String}
     */
    taskName=''   
    /**
     * 监测类型id
     * @type {Number}
     */
    typeId=undefined
    
}
export class CaptchaDTO {
  
    /**
     *
     * @param {String} image 验证码-图片
     * @param {String} value 验证码-文本
     */ 
    constructor(image = '',value = ''){
        this.image = image
        this.value = value
    }
       
    /**
     * 验证码-图片
     * @type {String}
     */
    image=''   
    /**
     * 验证码-文本
     * @type {String}
     */
    value=''
    
}
export class CheckDetailsVO {
  
    /**
     *
     * @param {String} checkContent 核查内容
     * @param {String} checkDate 核查时间
     * @param {Number} checkDetailId 核查详情记录id
     * @param {String} conclusion 核查结论
     * @param {Array} fileName 附件名称集合
     * @param {Array} filePath 附件path集合
     * @param {Array} fileType 附件类型集合
     * @param {Boolean} submitFlag 上传标志位
     * @param {Number} taskId 任务派发id
     */ 
    constructor(checkContent = '',checkDate = '',checkDetailId = undefined,conclusion = '',fileName = [],filePath = [],fileType = [],submitFlag = false,taskId = undefined){
        this.checkContent = checkContent
        this.checkDate = checkDate
        this.checkDetailId = checkDetailId
        this.conclusion = conclusion
        this.fileName = fileName
        this.filePath = filePath
        this.fileType = fileType
        this.submitFlag = submitFlag
        this.taskId = taskId
    }
       
    /**
     * 核查内容
     * @type {String}
     */
    checkContent=''   
    /**
     * 核查时间
     * @type {String}
     */
    checkDate=''   
    /**
     * 核查详情记录id
     * @type {Number}
     */
    checkDetailId=undefined   
    /**
     * 核查结论
     * @type {String}
     */
    conclusion=''   
    /**
     * 附件名称集合
     * @type {Array}
     */
    fileName=[]   
    /**
     * 附件path集合
     * @type {Array}
     */
    filePath=[]   
    /**
     * 附件类型集合
     * @type {Array}
     */
    fileType=[]   
    /**
     * 上传标志位
     * @type {Boolean}
     */
    submitFlag=false   
    /**
     * 任务派发id
     * @type {Number}
     */
    taskId=undefined
    
}
export class CheckTaskDTO {
  
    /**
     *
     * @param {Number} alarmId 报警id
     * @param {String} checkConclusion 审核意见
     * @param {Number} checkId 核查结果：1.通过，2.不通过
     * @param {Number} typeId 监测类型id
     */ 
    constructor(alarmId = undefined,checkConclusion = '',checkId = undefined,typeId = undefined){
        this.alarmId = alarmId
        this.checkConclusion = checkConclusion
        this.checkId = checkId
        this.typeId = typeId
    }
       
    /**
     * 报警id
     * @type {Number}
     */
    alarmId=undefined   
    /**
     * 审核意见
     * @type {String}
     */
    checkConclusion=''   
    /**
     * 核查结果：1.通过，2.不通过
     * @type {Number}
     */
    checkId=undefined   
    /**
     * 监测类型id
     * @type {Number}
     */
    typeId=undefined
    
}
export class CommonAxisVO {
  
    /**
     *
     * @param {String} x X轴坐标
     * @param {String} y Y轴坐标
     */ 
    constructor(x = '',y = ''){
        this.x = x
        this.y = y
    }
       
    /**
     * X轴坐标
     * @type {String}
     */
    x=''   
    /**
     * Y轴坐标
     * @type {String}
     */
    y=''
    
}
export class CommonLineValueDTO {
  
    /**
     *
     * @param {String} timeSlot 时间
     * @param {Number} value 数值
     */ 
    constructor(timeSlot = '',value = undefined){
        this.timeSlot = timeSlot
        this.value = value
    }
       
    /**
     * 时间
     * @type {String}
     */
    timeSlot=''   
    /**
     * 数值
     * @type {Number}
     */
    value=undefined
    
}
export class CommonVO {
  
    /**
     *
     * @param {String} name 名称
     * @param {String} value 数值
     */ 
    constructor(name = '',value = ''){
        this.name = name
        this.value = value
    }
       
    /**
     * 名称
     * @type {String}
     */
    name=''   
    /**
     * 数值
     * @type {String}
     */
    value=''
    
}
export class CommonY1AxisVO {
  
    /**
     *
     * @param {String} x X轴坐标
     * @param {String} y Y轴坐标
     * @param {String} y1 Y1轴坐标
     */ 
    constructor(x = '',y = '',y1 = ''){
        this.x = x
        this.y = y
        this.y1 = y1
    }
       
    /**
     * X轴坐标
     * @type {String}
     */
    x=''   
    /**
     * Y轴坐标
     * @type {String}
     */
    y=''   
    /**
     * Y1轴坐标
     * @type {String}
     */
    y1=''
    
}
export class ContrastDTO {
  
    /**
     *
     * @param {String} itemKey 监测因子编号
     * @param {String} itemName 监测因子名称
     * @param {String} stationName 点位名称
     * @param {String} timeSlot 时间片段
     * @param {String} value 对应数据
     */ 
    constructor(itemKey = '',itemName = '',stationName = '',timeSlot = '',value = ''){
        this.itemKey = itemKey
        this.itemName = itemName
        this.stationName = stationName
        this.timeSlot = timeSlot
        this.value = value
    }
       
    /**
     * 监测因子编号
     * @type {String}
     */
    itemKey=''   
    /**
     * 监测因子名称
     * @type {String}
     */
    itemName=''   
    /**
     * 点位名称
     * @type {String}
     */
    stationName=''   
    /**
     * 时间片段
     * @type {String}
     */
    timeSlot=''   
    /**
     * 对应数据
     * @type {String}
     */
    value=''
    
}
export class DepartmentDTO {
  
    /**
     *
     * @param {String} createTime 创建时间
     * @param {Number} id 主键id
     * @param {String} moniker 名称
     * @param {String} updateTime 更新时间
     */ 
    constructor(createTime = '',id = undefined,moniker = '',updateTime = ''){
        this.createTime = createTime
        this.id = id
        this.moniker = moniker
        this.updateTime = updateTime
    }
       
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 名称
     * @type {String}
     */
    moniker=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''
    
}
export class DictInfoDTO {
  
    /**
     *
     * @param {String} createTime 创建时间
     * @param {Number} id 主键id
     * @param {String} moniker 名称
     * @param {Number} typeId 类型id
     * @param {String} typeName 类型
     * @param {String} updateTime 更新时间
     */ 
    constructor(createTime = '',id = undefined,moniker = '',typeId = undefined,typeName = '',updateTime = ''){
        this.createTime = createTime
        this.id = id
        this.moniker = moniker
        this.typeId = typeId
        this.typeName = typeName
        this.updateTime = updateTime
    }
       
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 名称
     * @type {String}
     */
    moniker=''   
    /**
     * 类型id
     * @type {Number}
     */
    typeId=undefined   
    /**
     * 类型
     * @type {String}
     */
    typeName=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''
    
}
export class EmphasisStatusDTO {
  
    /**
     *
     * @param {Number} emphasisId 
     * @param {String} emphasisType 重点监管企业类别
     * @param {Boolean} ifEmphasis 是否包含该重点监管企业类别
     */ 
    constructor(emphasisId = undefined,emphasisType = '',ifEmphasis = false){
        this.emphasisId = emphasisId
        this.emphasisType = emphasisType
        this.ifEmphasis = ifEmphasis
    }
       
    /**
     * 
     * @type {Number}
     */
    emphasisId=undefined   
    /**
     * 重点监管企业类别
     * @type {String}
     */
    emphasisType=''   
    /**
     * 是否包含该重点监管企业类别
     * @type {Boolean}
     */
    ifEmphasis=false
    
}
export class EnterpriseBaseDTO {
  
    /**
     *
     * @param {Boolean} commitFlag 是否提交
     * @param {String} createTime 创建时间
     * @param {Number} enterpriseId 企业id
     * @param {Boolean} hasBoiler 有锅炉/燃气轮机
     * @param {Boolean} hasClinker 有熟料生产
     * @param {Boolean} hasCoking 有炼焦工序
     * @param {Boolean} hasFurnace 有工业炉窑
     * @param {Boolean} hasHazardousWaste 危险废物
     * @param {Boolean} hasIronmaking 有炼铁工序
     * @param {Boolean} hasOrganicTank 有有机液体储罐/装载
     * @param {Boolean} hasOtherExhaust 有其他生产废气
     * @param {Boolean} hasRareMineral 涉及稀土等15类矿产
     * @param {Boolean} hasSintering 有烧结/球团工序
     * @param {Boolean} hasSolidStorage 有工业固体物料堆存
     * @param {Boolean} hasSolidWaste 一般工业固体废物
     * @param {Boolean} hasSteelmaking 有炼钢工序
     * @param {Boolean} hasVocMatter 含挥发性有机物原辅材料使用
     * @param {Boolean} hasWasteWater 产生工业废水
     * @param {Number} id 主键id
     * @param {String} updateTime 更新时间
     */ 
    constructor(commitFlag = false,createTime = '',enterpriseId = undefined,hasBoiler = false,hasClinker = false,hasCoking = false,hasFurnace = false,hasHazardousWaste = false,hasIronmaking = false,hasOrganicTank = false,hasOtherExhaust = false,hasRareMineral = false,hasSintering = false,hasSolidStorage = false,hasSolidWaste = false,hasSteelmaking = false,hasVocMatter = false,hasWasteWater = false,id = undefined,updateTime = ''){
        this.commitFlag = commitFlag
        this.createTime = createTime
        this.enterpriseId = enterpriseId
        this.hasBoiler = hasBoiler
        this.hasClinker = hasClinker
        this.hasCoking = hasCoking
        this.hasFurnace = hasFurnace
        this.hasHazardousWaste = hasHazardousWaste
        this.hasIronmaking = hasIronmaking
        this.hasOrganicTank = hasOrganicTank
        this.hasOtherExhaust = hasOtherExhaust
        this.hasRareMineral = hasRareMineral
        this.hasSintering = hasSintering
        this.hasSolidStorage = hasSolidStorage
        this.hasSolidWaste = hasSolidWaste
        this.hasSteelmaking = hasSteelmaking
        this.hasVocMatter = hasVocMatter
        this.hasWasteWater = hasWasteWater
        this.id = id
        this.updateTime = updateTime
    }
       
    /**
     * 是否提交
     * @type {Boolean}
     */
    commitFlag=false   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 企业id
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 有锅炉/燃气轮机
     * @type {Boolean}
     */
    hasBoiler=false   
    /**
     * 有熟料生产
     * @type {Boolean}
     */
    hasClinker=false   
    /**
     * 有炼焦工序
     * @type {Boolean}
     */
    hasCoking=false   
    /**
     * 有工业炉窑
     * @type {Boolean}
     */
    hasFurnace=false   
    /**
     * 危险废物
     * @type {Boolean}
     */
    hasHazardousWaste=false   
    /**
     * 有炼铁工序
     * @type {Boolean}
     */
    hasIronmaking=false   
    /**
     * 有有机液体储罐/装载
     * @type {Boolean}
     */
    hasOrganicTank=false   
    /**
     * 有其他生产废气
     * @type {Boolean}
     */
    hasOtherExhaust=false   
    /**
     * 涉及稀土等15类矿产
     * @type {Boolean}
     */
    hasRareMineral=false   
    /**
     * 有烧结/球团工序
     * @type {Boolean}
     */
    hasSintering=false   
    /**
     * 有工业固体物料堆存
     * @type {Boolean}
     */
    hasSolidStorage=false   
    /**
     * 一般工业固体废物
     * @type {Boolean}
     */
    hasSolidWaste=false   
    /**
     * 有炼钢工序
     * @type {Boolean}
     */
    hasSteelmaking=false   
    /**
     * 含挥发性有机物原辅材料使用
     * @type {Boolean}
     */
    hasVocMatter=false   
    /**
     * 产生工业废水
     * @type {Boolean}
     */
    hasWasteWater=false   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''
    
}
export class EnterpriseByproDTO {
  
    /**
     *
     * @param {String} actualOutput 实际年均产量（吨）
     * @param {String} casCode CAS号
     * @param {String} chemicalName 化学名
     * @param {Boolean} commitFlag 是否提交
     * @param {String} createTime 创建时间
     * @param {Number} enterpriseId 企业id
     * @param {Number} id 主键id
     * @param {String} physicalState 物理状态
     * @param {String} tradeName 商品名
     * @param {String} updateTime 更新时间
     * @param {String} useScope 用途
     */ 
    constructor(actualOutput = '',casCode = '',chemicalName = '',commitFlag = false,createTime = '',enterpriseId = undefined,id = undefined,physicalState = '',tradeName = '',updateTime = '',useScope = ''){
        this.actualOutput = actualOutput
        this.casCode = casCode
        this.chemicalName = chemicalName
        this.commitFlag = commitFlag
        this.createTime = createTime
        this.enterpriseId = enterpriseId
        this.id = id
        this.physicalState = physicalState
        this.tradeName = tradeName
        this.updateTime = updateTime
        this.useScope = useScope
    }
       
    /**
     * 实际年均产量（吨）
     * @type {String}
     */
    actualOutput=''   
    /**
     * CAS号
     * @type {String}
     */
    casCode=''   
    /**
     * 化学名
     * @type {String}
     */
    chemicalName=''   
    /**
     * 是否提交
     * @type {Boolean}
     */
    commitFlag=false   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 企业id
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 物理状态
     * @type {String}
     */
    physicalState=''   
    /**
     * 商品名
     * @type {String}
     */
    tradeName=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''   
    /**
     * 用途
     * @type {String}
     */
    useScope=''
    
}
export class EnterpriseCompletionDTO {
  
    /**
     *
     * @param {Boolean} commitFlag 是否提交
     * @param {String} createTime 创建时间
     * @param {Number} enterpriseId 企业id
     * @param {Boolean} finish01 基本信息
     * @param {Boolean} finish02 生产信息
     * @param {Boolean} finish03 能耗信息
     * @param {Boolean} finish04 治理设备
     * @param {Boolean} finish05 环境风险单元
     * @param {Boolean} finish06 应急资源
     * @param {Boolean} finish07 环境敏感点
     * @param {Boolean} finish08 污染源监测
     * @param {Boolean} finish09 危废处理
     * @param {Boolean} finish10 企业平面图
     * @param {Number} id 主键id
     * @param {Number} rate01 基本信息
     * @param {Number} rate02 生产信息
     * @param {Number} rate03 能耗信息
     * @param {Number} rate04 治理设备
     * @param {Number} rate05 环境风险单元
     * @param {Number} rate06 应急资源
     * @param {Number} rate07 环境敏感点
     * @param {Number} rate08 污染源监测
     * @param {Number} rate09 危废处理
     * @param {Number} rate10 企业平面图
     * @param {String} updateTime 更新时间
     */ 
    constructor(commitFlag = false,createTime = '',enterpriseId = undefined,finish01 = false,finish02 = false,finish03 = false,finish04 = false,finish05 = false,finish06 = false,finish07 = false,finish08 = false,finish09 = false,finish10 = false,id = undefined,rate01 = undefined,rate02 = undefined,rate03 = undefined,rate04 = undefined,rate05 = undefined,rate06 = undefined,rate07 = undefined,rate08 = undefined,rate09 = undefined,rate10 = undefined,updateTime = ''){
        this.commitFlag = commitFlag
        this.createTime = createTime
        this.enterpriseId = enterpriseId
        this.finish01 = finish01
        this.finish02 = finish02
        this.finish03 = finish03
        this.finish04 = finish04
        this.finish05 = finish05
        this.finish06 = finish06
        this.finish07 = finish07
        this.finish08 = finish08
        this.finish09 = finish09
        this.finish10 = finish10
        this.id = id
        this.rate01 = rate01
        this.rate02 = rate02
        this.rate03 = rate03
        this.rate04 = rate04
        this.rate05 = rate05
        this.rate06 = rate06
        this.rate07 = rate07
        this.rate08 = rate08
        this.rate09 = rate09
        this.rate10 = rate10
        this.updateTime = updateTime
    }
       
    /**
     * 是否提交
     * @type {Boolean}
     */
    commitFlag=false   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 企业id
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 基本信息
     * @type {Boolean}
     */
    finish01=false   
    /**
     * 生产信息
     * @type {Boolean}
     */
    finish02=false   
    /**
     * 能耗信息
     * @type {Boolean}
     */
    finish03=false   
    /**
     * 治理设备
     * @type {Boolean}
     */
    finish04=false   
    /**
     * 环境风险单元
     * @type {Boolean}
     */
    finish05=false   
    /**
     * 应急资源
     * @type {Boolean}
     */
    finish06=false   
    /**
     * 环境敏感点
     * @type {Boolean}
     */
    finish07=false   
    /**
     * 污染源监测
     * @type {Boolean}
     */
    finish08=false   
    /**
     * 危废处理
     * @type {Boolean}
     */
    finish09=false   
    /**
     * 企业平面图
     * @type {Boolean}
     */
    finish10=false   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 基本信息
     * @type {Number}
     */
    rate01=undefined   
    /**
     * 生产信息
     * @type {Number}
     */
    rate02=undefined   
    /**
     * 能耗信息
     * @type {Number}
     */
    rate03=undefined   
    /**
     * 治理设备
     * @type {Number}
     */
    rate04=undefined   
    /**
     * 环境风险单元
     * @type {Number}
     */
    rate05=undefined   
    /**
     * 应急资源
     * @type {Number}
     */
    rate06=undefined   
    /**
     * 环境敏感点
     * @type {Number}
     */
    rate07=undefined   
    /**
     * 污染源监测
     * @type {Number}
     */
    rate08=undefined   
    /**
     * 危废处理
     * @type {Number}
     */
    rate09=undefined   
    /**
     * 企业平面图
     * @type {Number}
     */
    rate10=undefined   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''
    
}
export class EnterpriseDTO {
  
    /**
     *
     * @param {Boolean} commitFlag 是否提交
     * @param {String} createTime 创建时间
     * @param {Number} id 主键id
     * @param {String} lastCommitTime 最近提交时间
     * @param {String} lastUpdateTime 最近更新时间
     * @param {String} moniker 企业名称
     * @param {String} socialCredit 统一社会信用代码
     * @param {String} updateTime 更新时间
     */ 
    constructor(commitFlag = false,createTime = '',id = undefined,lastCommitTime = '',lastUpdateTime = '',moniker = '',socialCredit = '',updateTime = ''){
        this.commitFlag = commitFlag
        this.createTime = createTime
        this.id = id
        this.lastCommitTime = lastCommitTime
        this.lastUpdateTime = lastUpdateTime
        this.moniker = moniker
        this.socialCredit = socialCredit
        this.updateTime = updateTime
    }
       
    /**
     * 是否提交
     * @type {Boolean}
     */
    commitFlag=false   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 最近提交时间
     * @type {String}
     */
    lastCommitTime=''   
    /**
     * 最近更新时间
     * @type {String}
     */
    lastUpdateTime=''   
    /**
     * 企业名称
     * @type {String}
     */
    moniker=''   
    /**
     * 统一社会信用代码
     * @type {String}
     */
    socialCredit=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''
    
}
export class EnterpriseDetailDTO {
  
    /**
     *
     * @param {String} categoryName 企业类别名称
     * @param {String} enterpriseMoniker 企业名称
     * @param {String} industryName 行业类别名称
     * @param {String} legalPerson 法人
     * @param {String} licenseNumber 许可证编号
     * @param {String} riskTypeName 风险源类别
     * @param {String} socialCredit 社会信用代码
     */ 
    constructor(categoryName = '',enterpriseMoniker = '',industryName = '',legalPerson = '',licenseNumber = '',riskTypeName = '',socialCredit = ''){
        this.categoryName = categoryName
        this.enterpriseMoniker = enterpriseMoniker
        this.industryName = industryName
        this.legalPerson = legalPerson
        this.licenseNumber = licenseNumber
        this.riskTypeName = riskTypeName
        this.socialCredit = socialCredit
    }
       
    /**
     * 企业类别名称
     * @type {String}
     */
    categoryName=''   
    /**
     * 企业名称
     * @type {String}
     */
    enterpriseMoniker=''   
    /**
     * 行业类别名称
     * @type {String}
     */
    industryName=''   
    /**
     * 法人
     * @type {String}
     */
    legalPerson=''   
    /**
     * 许可证编号
     * @type {String}
     */
    licenseNumber=''   
    /**
     * 风险源类别
     * @type {String}
     */
    riskTypeName=''   
    /**
     * 社会信用代码
     * @type {String}
     */
    socialCredit=''
    
}
export class EnterpriseEnergyDTO {
  
    /**
     *
     * @param {Boolean} commitFlag 是否提交
     * @param {String} consumption 能源消耗量
     * @param {String} createTime 创建时间
     * @param {Number} enterpriseId 企业id
     * @param {Number} id 主键id
     * @param {String} measuringUnit 计量单位
     * @param {String} moniker 能源名称
     * @param {String} number 能源代码
     * @param {String} updateTime 更新时间
     * @param {String} yearName 年份
     */ 
    constructor(commitFlag = false,consumption = '',createTime = '',enterpriseId = undefined,id = undefined,measuringUnit = '',moniker = '',number = '',updateTime = '',yearName = ''){
        this.commitFlag = commitFlag
        this.consumption = consumption
        this.createTime = createTime
        this.enterpriseId = enterpriseId
        this.id = id
        this.measuringUnit = measuringUnit
        this.moniker = moniker
        this.number = number
        this.updateTime = updateTime
        this.yearName = yearName
    }
       
    /**
     * 是否提交
     * @type {Boolean}
     */
    commitFlag=false   
    /**
     * 能源消耗量
     * @type {String}
     */
    consumption=''   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 企业id
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 计量单位
     * @type {String}
     */
    measuringUnit=''   
    /**
     * 能源名称
     * @type {String}
     */
    moniker=''   
    /**
     * 能源代码
     * @type {String}
     */
    number=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''   
    /**
     * 年份
     * @type {String}
     */
    yearName=''
    
}
export class EnterpriseGovernGasDTO {
  
    /**
     *
     * @param {Boolean} commitFlag 是否提交
     * @param {String} createTime 创建时间
     * @param {Number} enterpriseId 企业id
     * @param {Number} id 主键id
     * @param {String} methodName 处理方法名称
     * @param {String} moniker 设施名称
     * @param {String} number 设施编码
     * @param {Number} operateCost 运行费用（万元）
     * @param {String} processPower 设计处理能力
     * @param {String} processUnit 设计处理能力单位
     * @param {String} serviceCondition 使用情况
     * @param {String} startTime 投入使用时间
     * @param {String} updateTime 更新时间
     */ 
    constructor(commitFlag = false,createTime = '',enterpriseId = undefined,id = undefined,methodName = '',moniker = '',number = '',operateCost = undefined,processPower = '',processUnit = '',serviceCondition = '',startTime = '',updateTime = ''){
        this.commitFlag = commitFlag
        this.createTime = createTime
        this.enterpriseId = enterpriseId
        this.id = id
        this.methodName = methodName
        this.moniker = moniker
        this.number = number
        this.operateCost = operateCost
        this.processPower = processPower
        this.processUnit = processUnit
        this.serviceCondition = serviceCondition
        this.startTime = startTime
        this.updateTime = updateTime
    }
       
    /**
     * 是否提交
     * @type {Boolean}
     */
    commitFlag=false   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 企业id
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 处理方法名称
     * @type {String}
     */
    methodName=''   
    /**
     * 设施名称
     * @type {String}
     */
    moniker=''   
    /**
     * 设施编码
     * @type {String}
     */
    number=''   
    /**
     * 运行费用（万元）
     * @type {Number}
     */
    operateCost=undefined   
    /**
     * 设计处理能力
     * @type {String}
     */
    processPower=''   
    /**
     * 设计处理能力单位
     * @type {String}
     */
    processUnit=''   
    /**
     * 使用情况
     * @type {String}
     */
    serviceCondition=''   
    /**
     * 投入使用时间
     * @type {String}
     */
    startTime=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''
    
}
export class EnterpriseGovernWaterDTO {
  
    /**
     *
     * @param {Boolean} commitFlag 是否提交
     * @param {String} createTime 创建时间
     * @param {Number} enterpriseId 企业id
     * @param {Number} id 主键id
     * @param {String} methodName 处理方法名称
     * @param {String} moniker 设施名称
     * @param {String} number 设施编码
     * @param {Number} operateCost 运行费用（万元）
     * @param {String} processPower 设计处理能力
     * @param {String} processUnit 设计处理能力单位
     * @param {String} serviceCondition 使用情况
     * @param {String} startTime 投入使用时间
     * @param {String} updateTime 更新时间
     */ 
    constructor(commitFlag = false,createTime = '',enterpriseId = undefined,id = undefined,methodName = '',moniker = '',number = '',operateCost = undefined,processPower = '',processUnit = '',serviceCondition = '',startTime = '',updateTime = ''){
        this.commitFlag = commitFlag
        this.createTime = createTime
        this.enterpriseId = enterpriseId
        this.id = id
        this.methodName = methodName
        this.moniker = moniker
        this.number = number
        this.operateCost = operateCost
        this.processPower = processPower
        this.processUnit = processUnit
        this.serviceCondition = serviceCondition
        this.startTime = startTime
        this.updateTime = updateTime
    }
       
    /**
     * 是否提交
     * @type {Boolean}
     */
    commitFlag=false   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 企业id
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 处理方法名称
     * @type {String}
     */
    methodName=''   
    /**
     * 设施名称
     * @type {String}
     */
    moniker=''   
    /**
     * 设施编码
     * @type {String}
     */
    number=''   
    /**
     * 运行费用（万元）
     * @type {Number}
     */
    operateCost=undefined   
    /**
     * 设计处理能力
     * @type {String}
     */
    processPower=''   
    /**
     * 设计处理能力单位
     * @type {String}
     */
    processUnit=''   
    /**
     * 使用情况
     * @type {String}
     */
    serviceCondition=''   
    /**
     * 投入使用时间
     * @type {String}
     */
    startTime=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''
    
}
export class EnterpriseInfoDTO {
  
    /**
     *
     * @param {Number} categoryId 企业类别id
     * @param {String} categoryName 企业类别
     * @param {Boolean} commitFlag 是否提交
     * @param {String} contactPerson 环保负责人
     * @param {String} contactPhone 环保负责人手机
     * @param {String} createTime 创建时间
     * @param {String} districtCode 行政区划（代码）
     * @param {String} districtName 行政区划（名称）
     * @param {Array<EmphasisStatusDTO>} emphasisList 重点监管企业类别list
     * @param {String} emphasisType 重点监管企业类别
     * @param {Number} enterpriseId 企业id
     * @param {String} fixedAssets 固定资产（万元）
     * @param {String} floorArea 总建筑面积（平方米）
     * @param {String} formerName 曾用名
     * @param {Number} id 主键id
     * @param {Boolean} ifEmphasis 是否是重点监管企业
     * @param {Number} industryId 行业类别id
     * @param {String} industryName 企业类别
     * @param {String} latitude 纬度
     * @param {String} legalPerson 法定代表人
     * @param {String} legalPersonPhone 法定代表人手机
     * @param {String} location 详细地址
     * @param {String} longitude 经度
     * @param {String} moniker 企业名称
     * @param {String} openTime 成立时间
     * @param {Number} regTypeId 登记注册类型id
     * @param {String} regTypeName 登记注册类型
     * @param {Number} riskTypeId 风险源类别id
     * @param {String} riskTypeName 风险源类别名称
     * @param {Number} scaleId 企业规模id
     * @param {String} scaleName 企业规模
     * @param {String} socialCredit 统一社会信用代码
     * @param {Number} staffCount 职工总数
     * @param {String} updateTime 更新时间
     */ 
    constructor(categoryId = undefined,categoryName = '',commitFlag = false,contactPerson = '',contactPhone = '',createTime = '',districtCode = '',districtName = '',emphasisList = [],emphasisType = '',enterpriseId = undefined,fixedAssets = '',floorArea = '',formerName = '',id = undefined,ifEmphasis = false,industryId = undefined,industryName = '',latitude = '',legalPerson = '',legalPersonPhone = '',location = '',longitude = '',moniker = '',openTime = '',regTypeId = undefined,regTypeName = '',riskTypeId = undefined,riskTypeName = '',scaleId = undefined,scaleName = '',socialCredit = '',staffCount = undefined,updateTime = ''){
        this.categoryId = categoryId
        this.categoryName = categoryName
        this.commitFlag = commitFlag
        this.contactPerson = contactPerson
        this.contactPhone = contactPhone
        this.createTime = createTime
        this.districtCode = districtCode
        this.districtName = districtName
        this.emphasisList = emphasisList
        this.emphasisType = emphasisType
        this.enterpriseId = enterpriseId
        this.fixedAssets = fixedAssets
        this.floorArea = floorArea
        this.formerName = formerName
        this.id = id
        this.ifEmphasis = ifEmphasis
        this.industryId = industryId
        this.industryName = industryName
        this.latitude = latitude
        this.legalPerson = legalPerson
        this.legalPersonPhone = legalPersonPhone
        this.location = location
        this.longitude = longitude
        this.moniker = moniker
        this.openTime = openTime
        this.regTypeId = regTypeId
        this.regTypeName = regTypeName
        this.riskTypeId = riskTypeId
        this.riskTypeName = riskTypeName
        this.scaleId = scaleId
        this.scaleName = scaleName
        this.socialCredit = socialCredit
        this.staffCount = staffCount
        this.updateTime = updateTime
    }
       
    /**
     * 企业类别id
     * @type {Number}
     */
    categoryId=undefined   
    /**
     * 企业类别
     * @type {String}
     */
    categoryName=''   
    /**
     * 是否提交
     * @type {Boolean}
     */
    commitFlag=false   
    /**
     * 环保负责人
     * @type {String}
     */
    contactPerson=''   
    /**
     * 环保负责人手机
     * @type {String}
     */
    contactPhone=''   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 行政区划（代码）
     * @type {String}
     */
    districtCode=''   
    /**
     * 行政区划（名称）
     * @type {String}
     */
    districtName=''   
    /**
     * 重点监管企业类别list
     * @type {Array<EmphasisStatusDTO>}
     */
    emphasisList=[]   
    /**
     * 重点监管企业类别
     * @type {String}
     */
    emphasisType=''   
    /**
     * 企业id
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 固定资产（万元）
     * @type {String}
     */
    fixedAssets=''   
    /**
     * 总建筑面积（平方米）
     * @type {String}
     */
    floorArea=''   
    /**
     * 曾用名
     * @type {String}
     */
    formerName=''   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 是否是重点监管企业
     * @type {Boolean}
     */
    ifEmphasis=false   
    /**
     * 行业类别id
     * @type {Number}
     */
    industryId=undefined   
    /**
     * 企业类别
     * @type {String}
     */
    industryName=''   
    /**
     * 纬度
     * @type {String}
     */
    latitude=''   
    /**
     * 法定代表人
     * @type {String}
     */
    legalPerson=''   
    /**
     * 法定代表人手机
     * @type {String}
     */
    legalPersonPhone=''   
    /**
     * 详细地址
     * @type {String}
     */
    location=''   
    /**
     * 经度
     * @type {String}
     */
    longitude=''   
    /**
     * 企业名称
     * @type {String}
     */
    moniker=''   
    /**
     * 成立时间
     * @type {String}
     */
    openTime=''   
    /**
     * 登记注册类型id
     * @type {Number}
     */
    regTypeId=undefined   
    /**
     * 登记注册类型
     * @type {String}
     */
    regTypeName=''   
    /**
     * 风险源类别id
     * @type {Number}
     */
    riskTypeId=undefined   
    /**
     * 风险源类别名称
     * @type {String}
     */
    riskTypeName=''   
    /**
     * 企业规模id
     * @type {Number}
     */
    scaleId=undefined   
    /**
     * 企业规模
     * @type {String}
     */
    scaleName=''   
    /**
     * 统一社会信用代码
     * @type {String}
     */
    socialCredit=''   
    /**
     * 职工总数
     * @type {Number}
     */
    staffCount=undefined   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''
    
}
export class EnterpriseLicenseSewageDTO {
  
    /**
     *
     * @param {Number} activeState 启用状态（0：新增，1：启用，2：停用）
     * @param {String} activeTime 启用时间
     * @param {String} businessCategory 行业类别
     * @param {String} businessPlace 经营场所
     * @param {Boolean} commitFlag 是否提交
     * @param {String} createTime 创建时间
     * @param {Number} enterpriseId 企业id
     * @param {String} expireDate 到期时间
     * @param {String} filePath 附件路径
     * @param {Number} id 主键id
     * @param {String} inactiveTime 停用时间
     * @param {String} issueDate 发证时间
     * @param {String} issuingAuthority 发证机关
     * @param {String} number 许可证编号
     * @param {String} updateTime 更新时间
     */ 
    constructor(activeState = undefined,activeTime = '',businessCategory = '',businessPlace = '',commitFlag = false,createTime = '',enterpriseId = undefined,expireDate = '',filePath = '',id = undefined,inactiveTime = '',issueDate = '',issuingAuthority = '',number = '',updateTime = ''){
        this.activeState = activeState
        this.activeTime = activeTime
        this.businessCategory = businessCategory
        this.businessPlace = businessPlace
        this.commitFlag = commitFlag
        this.createTime = createTime
        this.enterpriseId = enterpriseId
        this.expireDate = expireDate
        this.filePath = filePath
        this.id = id
        this.inactiveTime = inactiveTime
        this.issueDate = issueDate
        this.issuingAuthority = issuingAuthority
        this.number = number
        this.updateTime = updateTime
    }
       
    /**
     * 启用状态（0：新增，1：启用，2：停用）
     * @type {Number}
     */
    activeState=undefined   
    /**
     * 启用时间
     * @type {String}
     */
    activeTime=''   
    /**
     * 行业类别
     * @type {String}
     */
    businessCategory=''   
    /**
     * 经营场所
     * @type {String}
     */
    businessPlace=''   
    /**
     * 是否提交
     * @type {Boolean}
     */
    commitFlag=false   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 企业id
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 到期时间
     * @type {String}
     */
    expireDate=''   
    /**
     * 附件路径
     * @type {String}
     */
    filePath=''   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 停用时间
     * @type {String}
     */
    inactiveTime=''   
    /**
     * 发证时间
     * @type {String}
     */
    issueDate=''   
    /**
     * 发证机关
     * @type {String}
     */
    issuingAuthority=''   
    /**
     * 许可证编号
     * @type {String}
     */
    number=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''
    
}
export class EnterpriseLicenseWasteDTO {
  
    /**
     *
     * @param {Number} activeState 启用状态（0：新增，1：启用，2：停用）
     * @param {String} activeTime 启用时间
     * @param {String} businessCategory 行业类别
     * @param {String} businessMode 经营方式
     * @param {String} businessPlace 经营场所
     * @param {String} businessScale 经营规模
     * @param {Boolean} commitFlag 是否提交
     * @param {String} createTime 创建时间
     * @param {Number} enterpriseId 企业id
     * @param {String} expireDate 到期时间
     * @param {String} filePath 附件路径
     * @param {Number} id 主键id
     * @param {String} inactiveTime 停用时间
     * @param {String} issueDate 发证时间
     * @param {String} issuingAuthority 发证机关
     * @param {String} number 许可证编号
     * @param {String} updateTime 更新时间
     */ 
    constructor(activeState = undefined,activeTime = '',businessCategory = '',businessMode = '',businessPlace = '',businessScale = '',commitFlag = false,createTime = '',enterpriseId = undefined,expireDate = '',filePath = '',id = undefined,inactiveTime = '',issueDate = '',issuingAuthority = '',number = '',updateTime = ''){
        this.activeState = activeState
        this.activeTime = activeTime
        this.businessCategory = businessCategory
        this.businessMode = businessMode
        this.businessPlace = businessPlace
        this.businessScale = businessScale
        this.commitFlag = commitFlag
        this.createTime = createTime
        this.enterpriseId = enterpriseId
        this.expireDate = expireDate
        this.filePath = filePath
        this.id = id
        this.inactiveTime = inactiveTime
        this.issueDate = issueDate
        this.issuingAuthority = issuingAuthority
        this.number = number
        this.updateTime = updateTime
    }
       
    /**
     * 启用状态（0：新增，1：启用，2：停用）
     * @type {Number}
     */
    activeState=undefined   
    /**
     * 启用时间
     * @type {String}
     */
    activeTime=''   
    /**
     * 行业类别
     * @type {String}
     */
    businessCategory=''   
    /**
     * 经营方式
     * @type {String}
     */
    businessMode=''   
    /**
     * 经营场所
     * @type {String}
     */
    businessPlace=''   
    /**
     * 经营规模
     * @type {String}
     */
    businessScale=''   
    /**
     * 是否提交
     * @type {Boolean}
     */
    commitFlag=false   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 企业id
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 到期时间
     * @type {String}
     */
    expireDate=''   
    /**
     * 附件路径
     * @type {String}
     */
    filePath=''   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 停用时间
     * @type {String}
     */
    inactiveTime=''   
    /**
     * 发证时间
     * @type {String}
     */
    issueDate=''   
    /**
     * 发证机关
     * @type {String}
     */
    issuingAuthority=''   
    /**
     * 许可证编号
     * @type {String}
     */
    number=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''
    
}
export class EnterpriseMainproDTO {
  
    /**
     *
     * @param {String} capacityProduct 生产区贮存量（吨）
     * @param {String} capacityStorage 贮存区贮存量（吨）
     * @param {String} casCode CAS号
     * @param {String} chemicalName 化学名
     * @param {Boolean} commitFlag 是否提交
     * @param {String} createTime 创建时间
     * @param {Number} enterpriseId 企业id
     * @param {String} equipmentStatus 设备状态
     * @param {Number} id 主键id
     * @param {String} materialCategory 物质分类
     * @param {String} physicalState 物理状态
     * @param {String} produceMode 生产方式
     * @param {String} storeModeProduct 生产区贮存方式
     * @param {String} storeModeStorage 贮存区贮存方式
     * @param {String} tradeName 商品名
     * @param {String} transportMode 运输方式
     * @param {String} updateTime 更新时间
     * @param {String} useScope 用途
     */ 
    constructor(capacityProduct = '',capacityStorage = '',casCode = '',chemicalName = '',commitFlag = false,createTime = '',enterpriseId = undefined,equipmentStatus = '',id = undefined,materialCategory = '',physicalState = '',produceMode = '',storeModeProduct = '',storeModeStorage = '',tradeName = '',transportMode = '',updateTime = '',useScope = ''){
        this.capacityProduct = capacityProduct
        this.capacityStorage = capacityStorage
        this.casCode = casCode
        this.chemicalName = chemicalName
        this.commitFlag = commitFlag
        this.createTime = createTime
        this.enterpriseId = enterpriseId
        this.equipmentStatus = equipmentStatus
        this.id = id
        this.materialCategory = materialCategory
        this.physicalState = physicalState
        this.produceMode = produceMode
        this.storeModeProduct = storeModeProduct
        this.storeModeStorage = storeModeStorage
        this.tradeName = tradeName
        this.transportMode = transportMode
        this.updateTime = updateTime
        this.useScope = useScope
    }
       
    /**
     * 生产区贮存量（吨）
     * @type {String}
     */
    capacityProduct=''   
    /**
     * 贮存区贮存量（吨）
     * @type {String}
     */
    capacityStorage=''   
    /**
     * CAS号
     * @type {String}
     */
    casCode=''   
    /**
     * 化学名
     * @type {String}
     */
    chemicalName=''   
    /**
     * 是否提交
     * @type {Boolean}
     */
    commitFlag=false   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 企业id
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 设备状态
     * @type {String}
     */
    equipmentStatus=''   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 物质分类
     * @type {String}
     */
    materialCategory=''   
    /**
     * 物理状态
     * @type {String}
     */
    physicalState=''   
    /**
     * 生产方式
     * @type {String}
     */
    produceMode=''   
    /**
     * 生产区贮存方式
     * @type {String}
     */
    storeModeProduct=''   
    /**
     * 贮存区贮存方式
     * @type {String}
     */
    storeModeStorage=''   
    /**
     * 商品名
     * @type {String}
     */
    tradeName=''   
    /**
     * 运输方式
     * @type {String}
     */
    transportMode=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''   
    /**
     * 用途
     * @type {String}
     */
    useScope=''
    
}
export class EnterpriseMapVO {
  
    /**
     *
     * @param {Boolean} alarmFlag 是否报警
     * @param {Number} enterpriseId 企业Id
     * @param {String} enterpriseName 企业名称
     * @param {String} latitude 纬度
     * @param {String} longitude 经度
     * @param {Number} monitorType 监测类型（0：全部，1：部分，2：没有）
     * @param {Boolean} onlineFlag 是否在线
     */ 
    constructor(alarmFlag = false,enterpriseId = undefined,enterpriseName = '',latitude = '',longitude = '',monitorType = undefined,onlineFlag = false){
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
     * @type {Boolean}
     */
    alarmFlag=false   
    /**
     * 企业Id
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 企业名称
     * @type {String}
     */
    enterpriseName=''   
    /**
     * 纬度
     * @type {String}
     */
    latitude=''   
    /**
     * 经度
     * @type {String}
     */
    longitude=''   
    /**
     * 监测类型（0：全部，1：部分，2：没有）
     * @type {Number}
     */
    monitorType=undefined   
    /**
     * 是否在线
     * @type {Boolean}
     */
    onlineFlag=false
    
}
export class EnterpriseMaterialRawDTO {
  
    /**
     *
     * @param {String} capacityProduct 生产区贮存量（吨）
     * @param {String} capacityStorage 贮存区贮存量（吨）
     * @param {String} casCode CAS号
     * @param {String} chemicalName 化学名
     * @param {Boolean} commitFlag 是否提交
     * @param {String} createTime 创建时间
     * @param {String} dosageSingle 产品单耗（吨）
     * @param {String} dosageTotal 年均使用量（吨）
     * @param {Number} enterpriseId 企业id
     * @param {Number} id 主键id
     * @param {String} mainProduct 主要产品
     * @param {String} physicalState 物理状态
     * @param {String} storeModeProduct 生产区贮存方式
     * @param {String} storeModeStorage 贮存区贮存方式
     * @param {String} tradeName 原料名称
     * @param {String} updateTime 更新时间
     */ 
    constructor(capacityProduct = '',capacityStorage = '',casCode = '',chemicalName = '',commitFlag = false,createTime = '',dosageSingle = '',dosageTotal = '',enterpriseId = undefined,id = undefined,mainProduct = '',physicalState = '',storeModeProduct = '',storeModeStorage = '',tradeName = '',updateTime = ''){
        this.capacityProduct = capacityProduct
        this.capacityStorage = capacityStorage
        this.casCode = casCode
        this.chemicalName = chemicalName
        this.commitFlag = commitFlag
        this.createTime = createTime
        this.dosageSingle = dosageSingle
        this.dosageTotal = dosageTotal
        this.enterpriseId = enterpriseId
        this.id = id
        this.mainProduct = mainProduct
        this.physicalState = physicalState
        this.storeModeProduct = storeModeProduct
        this.storeModeStorage = storeModeStorage
        this.tradeName = tradeName
        this.updateTime = updateTime
    }
       
    /**
     * 生产区贮存量（吨）
     * @type {String}
     */
    capacityProduct=''   
    /**
     * 贮存区贮存量（吨）
     * @type {String}
     */
    capacityStorage=''   
    /**
     * CAS号
     * @type {String}
     */
    casCode=''   
    /**
     * 化学名
     * @type {String}
     */
    chemicalName=''   
    /**
     * 是否提交
     * @type {Boolean}
     */
    commitFlag=false   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 产品单耗（吨）
     * @type {String}
     */
    dosageSingle=''   
    /**
     * 年均使用量（吨）
     * @type {String}
     */
    dosageTotal=''   
    /**
     * 企业id
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 主要产品
     * @type {String}
     */
    mainProduct=''   
    /**
     * 物理状态
     * @type {String}
     */
    physicalState=''   
    /**
     * 生产区贮存方式
     * @type {String}
     */
    storeModeProduct=''   
    /**
     * 贮存区贮存方式
     * @type {String}
     */
    storeModeStorage=''   
    /**
     * 原料名称
     * @type {String}
     */
    tradeName=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''
    
}
export class EnterpriseMaterialUseDTO {
  
    /**
     *
     * @param {String} actualDosage 实际使用量（吨）
     * @param {Boolean} commitFlag 是否提交
     * @param {String} createTime 创建时间
     * @param {Number} enterpriseId 企业id
     * @param {Number} id 主键id
     * @param {String} moniker 原辅材料名称
     * @param {String} updateTime 更新时间
     * @param {String} yearName 年费
     */ 
    constructor(actualDosage = '',commitFlag = false,createTime = '',enterpriseId = undefined,id = undefined,moniker = '',updateTime = '',yearName = ''){
        this.actualDosage = actualDosage
        this.commitFlag = commitFlag
        this.createTime = createTime
        this.enterpriseId = enterpriseId
        this.id = id
        this.moniker = moniker
        this.updateTime = updateTime
        this.yearName = yearName
    }
       
    /**
     * 实际使用量（吨）
     * @type {String}
     */
    actualDosage=''   
    /**
     * 是否提交
     * @type {Boolean}
     */
    commitFlag=false   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 企业id
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 原辅材料名称
     * @type {String}
     */
    moniker=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''   
    /**
     * 年费
     * @type {String}
     */
    yearName=''
    
}
export class EnterprisePageDTO {
  
    /**
     *
     * @param {Number} categoryId 企业类别id
     * @param {String} categoryName 企业类别
     * @param {Boolean} commitFlag 是否提交
     * @param {String} districtCode 行政区划（代码）
     * @param {String} districtName 行政区划（名称）
     * @param {Number} enterpriseId 企业id
     * @param {Number} industryId 行业类别id
     * @param {String} industryName 企业类别
     * @param {String} lastCommitTime 最近提交时间
     * @param {String} legalPerson 法定代表人
     * @param {String} moniker 企业名称
     * @param {Number} riskTypeId 风险源类别id
     * @param {String} riskTypeName 风险源类别
     * @param {String} socialCredit 统一社会信用代码
     * @param {String} stationInfo 排口信息
     */ 
    constructor(categoryId = undefined,categoryName = '',commitFlag = false,districtCode = '',districtName = '',enterpriseId = undefined,industryId = undefined,industryName = '',lastCommitTime = '',legalPerson = '',moniker = '',riskTypeId = undefined,riskTypeName = '',socialCredit = '',stationInfo = ''){
        this.categoryId = categoryId
        this.categoryName = categoryName
        this.commitFlag = commitFlag
        this.districtCode = districtCode
        this.districtName = districtName
        this.enterpriseId = enterpriseId
        this.industryId = industryId
        this.industryName = industryName
        this.lastCommitTime = lastCommitTime
        this.legalPerson = legalPerson
        this.moniker = moniker
        this.riskTypeId = riskTypeId
        this.riskTypeName = riskTypeName
        this.socialCredit = socialCredit
        this.stationInfo = stationInfo
    }
       
    /**
     * 企业类别id
     * @type {Number}
     */
    categoryId=undefined   
    /**
     * 企业类别
     * @type {String}
     */
    categoryName=''   
    /**
     * 是否提交
     * @type {Boolean}
     */
    commitFlag=false   
    /**
     * 行政区划（代码）
     * @type {String}
     */
    districtCode=''   
    /**
     * 行政区划（名称）
     * @type {String}
     */
    districtName=''   
    /**
     * 企业id
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 行业类别id
     * @type {Number}
     */
    industryId=undefined   
    /**
     * 企业类别
     * @type {String}
     */
    industryName=''   
    /**
     * 最近提交时间
     * @type {String}
     */
    lastCommitTime=''   
    /**
     * 法定代表人
     * @type {String}
     */
    legalPerson=''   
    /**
     * 企业名称
     * @type {String}
     */
    moniker=''   
    /**
     * 风险源类别id
     * @type {Number}
     */
    riskTypeId=undefined   
    /**
     * 风险源类别
     * @type {String}
     */
    riskTypeName=''   
    /**
     * 统一社会信用代码
     * @type {String}
     */
    socialCredit=''   
    /**
     * 排口信息
     * @type {String}
     */
    stationInfo=''
    
}
export class EnterprisePlaneDTO {
  
    /**
     *
     * @param {Boolean} commitFlag 是否提交
     * @param {String} createTime 创建时间
     * @param {Number} enterpriseId 企业id
     * @param {Array<FileDTO>} evacuationRouteList 撤离路线图
     * @param {Array<FileDTO>} facilityDistributionList 应急设施分布图
     * @param {Number} id 主键id
     * @param {Array<FileDTO>} leakageEmergencyList 物质泄露应急封路图
     * @param {Array<FileDTO>} otherGraphList 其他平面图
     * @param {Array<FileDTO>} planarGraphList 企业平面图
     * @param {Array<FileDTO>} realMapList 企业实景图
     * @param {Array<FileDTO>} sensitiveDistributionList 周边敏感点分布图
     * @param {Array<FileDTO>} sewageNetworkList 雨水排放管网图
     * @param {Array<FileDTO>} stormwaterNetworkList 污水排放管网图
     * @param {String} updateTime 更新时间
     */ 
    constructor(commitFlag = false,createTime = '',enterpriseId = undefined,evacuationRouteList = [],facilityDistributionList = [],id = undefined,leakageEmergencyList = [],otherGraphList = [],planarGraphList = [],realMapList = [],sensitiveDistributionList = [],sewageNetworkList = [],stormwaterNetworkList = [],updateTime = ''){
        this.commitFlag = commitFlag
        this.createTime = createTime
        this.enterpriseId = enterpriseId
        this.evacuationRouteList = evacuationRouteList
        this.facilityDistributionList = facilityDistributionList
        this.id = id
        this.leakageEmergencyList = leakageEmergencyList
        this.otherGraphList = otherGraphList
        this.planarGraphList = planarGraphList
        this.realMapList = realMapList
        this.sensitiveDistributionList = sensitiveDistributionList
        this.sewageNetworkList = sewageNetworkList
        this.stormwaterNetworkList = stormwaterNetworkList
        this.updateTime = updateTime
    }
       
    /**
     * 是否提交
     * @type {Boolean}
     */
    commitFlag=false   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 企业id
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 撤离路线图
     * @type {Array<FileDTO>}
     */
    evacuationRouteList=[]   
    /**
     * 应急设施分布图
     * @type {Array<FileDTO>}
     */
    facilityDistributionList=[]   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 物质泄露应急封路图
     * @type {Array<FileDTO>}
     */
    leakageEmergencyList=[]   
    /**
     * 其他平面图
     * @type {Array<FileDTO>}
     */
    otherGraphList=[]   
    /**
     * 企业平面图
     * @type {Array<FileDTO>}
     */
    planarGraphList=[]   
    /**
     * 企业实景图
     * @type {Array<FileDTO>}
     */
    realMapList=[]   
    /**
     * 周边敏感点分布图
     * @type {Array<FileDTO>}
     */
    sensitiveDistributionList=[]   
    /**
     * 雨水排放管网图
     * @type {Array<FileDTO>}
     */
    sewageNetworkList=[]   
    /**
     * 污水排放管网图
     * @type {Array<FileDTO>}
     */
    stormwaterNetworkList=[]   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''
    
}
export class EnterprisePointDetailsVO {
  
    /**
     *
     * @param {Array<StationValueDTO>} airStations 废气监测因子信息
     * @param {Number} enterpriseId 企业Id
     * @param {String} enterpriseName 企业名称
     * @param {Boolean} hasAir 废气监测标志
     * @param {Boolean} hasRain 雨水监测标志
     * @param {Boolean} hasWater 废水监测标志
     * @param {String} industryName 行业类别名称
     * @param {String} licenseNum 排污许可证号
     * @param {Array<StationValueDTO>} rainStations 雨水监测因子信息
     * @param {Array<StationValueDTO>} waterStations 废水监测因子信息
     */ 
    constructor(airStations = [],enterpriseId = undefined,enterpriseName = '',hasAir = false,hasRain = false,hasWater = false,industryName = '',licenseNum = '',rainStations = [],waterStations = []){
        this.airStations = airStations
        this.enterpriseId = enterpriseId
        this.enterpriseName = enterpriseName
        this.hasAir = hasAir
        this.hasRain = hasRain
        this.hasWater = hasWater
        this.industryName = industryName
        this.licenseNum = licenseNum
        this.rainStations = rainStations
        this.waterStations = waterStations
    }
       
    /**
     * 废气监测因子信息
     * @type {Array<StationValueDTO>}
     */
    airStations=[]   
    /**
     * 企业Id
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 企业名称
     * @type {String}
     */
    enterpriseName=''   
    /**
     * 废气监测标志
     * @type {Boolean}
     */
    hasAir=false   
    /**
     * 雨水监测标志
     * @type {Boolean}
     */
    hasRain=false   
    /**
     * 废水监测标志
     * @type {Boolean}
     */
    hasWater=false   
    /**
     * 行业类别名称
     * @type {String}
     */
    industryName=''   
    /**
     * 排污许可证号
     * @type {String}
     */
    licenseNum=''   
    /**
     * 雨水监测因子信息
     * @type {Array<StationValueDTO>}
     */
    rainStations=[]   
    /**
     * 废水监测因子信息
     * @type {Array<StationValueDTO>}
     */
    waterStations=[]
    
}
export class EnterpriseProductDTO {
  
    /**
     *
     * @param {String} actualOutput 实际产量（吨）
     * @param {Boolean} commitFlag 是否提交
     * @param {String} createTime 创建时间
     * @param {String} designCapacity 设计生产能力（吨）
     * @param {Number} enterpriseId 企业id
     * @param {Number} id 主键id
     * @param {String} moniker 产品名称
     * @param {String} updateTime 更新时间
     * @param {String} yearName 年份
     */ 
    constructor(actualOutput = '',commitFlag = false,createTime = '',designCapacity = '',enterpriseId = undefined,id = undefined,moniker = '',updateTime = '',yearName = ''){
        this.actualOutput = actualOutput
        this.commitFlag = commitFlag
        this.createTime = createTime
        this.designCapacity = designCapacity
        this.enterpriseId = enterpriseId
        this.id = id
        this.moniker = moniker
        this.updateTime = updateTime
        this.yearName = yearName
    }
       
    /**
     * 实际产量（吨）
     * @type {String}
     */
    actualOutput=''   
    /**
     * 是否提交
     * @type {Boolean}
     */
    commitFlag=false   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 设计生产能力（吨）
     * @type {String}
     */
    designCapacity=''   
    /**
     * 企业id
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 产品名称
     * @type {String}
     */
    moniker=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''   
    /**
     * 年份
     * @type {String}
     */
    yearName=''
    
}
export class EnterpriseRiskBaseDTO {
  
    /**
     *
     * @param {Boolean} commitFlag 是否提交
     * @param {String} createTime 创建时间
     * @param {Boolean} emergCaseFlag 是否编制应急预案
     * @param {Number} emergEventCount 截至今日发生突发环境事件次数
     * @param {Number} enterpriseId 企业id
     * @param {Number} id 主键id
     * @param {Boolean} riskAssessFlag 是否编制环境风险评价专章
     * @param {String} updateTime 更新时间
     */ 
    constructor(commitFlag = false,createTime = '',emergCaseFlag = false,emergEventCount = undefined,enterpriseId = undefined,id = undefined,riskAssessFlag = false,updateTime = ''){
        this.commitFlag = commitFlag
        this.createTime = createTime
        this.emergCaseFlag = emergCaseFlag
        this.emergEventCount = emergEventCount
        this.enterpriseId = enterpriseId
        this.id = id
        this.riskAssessFlag = riskAssessFlag
        this.updateTime = updateTime
    }
       
    /**
     * 是否提交
     * @type {Boolean}
     */
    commitFlag=false   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 是否编制应急预案
     * @type {Boolean}
     */
    emergCaseFlag=false   
    /**
     * 截至今日发生突发环境事件次数
     * @type {Number}
     */
    emergEventCount=undefined   
    /**
     * 企业id
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 是否编制环境风险评价专章
     * @type {Boolean}
     */
    riskAssessFlag=false   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''
    
}
export class EnterpriseRiskExpertDTO {
  
    /**
     *
     * @param {String} birthday 出生日期
     * @param {Boolean} commitFlag 是否提交
     * @param {String} createTime 创建时间
     * @param {Number} enterpriseId 企业id
     * @param {Number} expertId 专家id
     * @param {Number} id 主键id
     * @param {Number} majorCategoryId 专业类别id
     * @param {String} majorCategoryName 专业类别
     * @param {String} moniker 姓名
     * @param {String} phoneNum 联系电话
     * @param {Number} sexId 性别id
     * @param {String} sexName 性别
     * @param {Number} technicalTitleId 技术职称id
     * @param {String} technicalTitleName 技术职称
     * @param {String} updateTime 更新时间
     * @param {String} workPlace 工作单位
     */ 
    constructor(birthday = '',commitFlag = false,createTime = '',enterpriseId = undefined,expertId = undefined,id = undefined,majorCategoryId = undefined,majorCategoryName = '',moniker = '',phoneNum = '',sexId = undefined,sexName = '',technicalTitleId = undefined,technicalTitleName = '',updateTime = '',workPlace = ''){
        this.birthday = birthday
        this.commitFlag = commitFlag
        this.createTime = createTime
        this.enterpriseId = enterpriseId
        this.expertId = expertId
        this.id = id
        this.majorCategoryId = majorCategoryId
        this.majorCategoryName = majorCategoryName
        this.moniker = moniker
        this.phoneNum = phoneNum
        this.sexId = sexId
        this.sexName = sexName
        this.technicalTitleId = technicalTitleId
        this.technicalTitleName = technicalTitleName
        this.updateTime = updateTime
        this.workPlace = workPlace
    }
       
    /**
     * 出生日期
     * @type {String}
     */
    birthday=''   
    /**
     * 是否提交
     * @type {Boolean}
     */
    commitFlag=false   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 企业id
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 专家id
     * @type {Number}
     */
    expertId=undefined   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 专业类别id
     * @type {Number}
     */
    majorCategoryId=undefined   
    /**
     * 专业类别
     * @type {String}
     */
    majorCategoryName=''   
    /**
     * 姓名
     * @type {String}
     */
    moniker=''   
    /**
     * 联系电话
     * @type {String}
     */
    phoneNum=''   
    /**
     * 性别id
     * @type {Number}
     */
    sexId=undefined   
    /**
     * 性别
     * @type {String}
     */
    sexName=''   
    /**
     * 技术职称id
     * @type {Number}
     */
    technicalTitleId=undefined   
    /**
     * 技术职称
     * @type {String}
     */
    technicalTitleName=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''   
    /**
     * 工作单位
     * @type {String}
     */
    workPlace=''
    
}
export class EnterpriseRiskFacilityDTO {
  
    /**
     *
     * @param {Boolean} commitFlag 是否提交
     * @param {String} contactPerson 联系人
     * @param {String} contactPhone 联系电话
     * @param {String} createTime 创建时间
     * @param {Number} enterpriseId 企业id
     * @param {Number} id 主键id
     * @param {String} latitude 纬度
     * @param {String} location 详细地址
     * @param {String} longitude 经度
     * @param {String} mainUsage 性能/用途
     * @param {String} model 型号
     * @param {String} moniker 名称
     * @param {String} purchaseDate 购置日期
     * @param {Number} quantity 储备量
     * @param {String} remark 备注
     * @param {String} specification 规格
     * @param {Number} typeId 类别id
     * @param {String} typeName 类别
     * @param {String} unit 单位
     * @param {String} updateTime 更新时间
     */ 
    constructor(commitFlag = false,contactPerson = '',contactPhone = '',createTime = '',enterpriseId = undefined,id = undefined,latitude = '',location = '',longitude = '',mainUsage = '',model = '',moniker = '',purchaseDate = '',quantity = undefined,remark = '',specification = '',typeId = undefined,typeName = '',unit = '',updateTime = ''){
        this.commitFlag = commitFlag
        this.contactPerson = contactPerson
        this.contactPhone = contactPhone
        this.createTime = createTime
        this.enterpriseId = enterpriseId
        this.id = id
        this.latitude = latitude
        this.location = location
        this.longitude = longitude
        this.mainUsage = mainUsage
        this.model = model
        this.moniker = moniker
        this.purchaseDate = purchaseDate
        this.quantity = quantity
        this.remark = remark
        this.specification = specification
        this.typeId = typeId
        this.typeName = typeName
        this.unit = unit
        this.updateTime = updateTime
    }
       
    /**
     * 是否提交
     * @type {Boolean}
     */
    commitFlag=false   
    /**
     * 联系人
     * @type {String}
     */
    contactPerson=''   
    /**
     * 联系电话
     * @type {String}
     */
    contactPhone=''   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 企业id
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 纬度
     * @type {String}
     */
    latitude=''   
    /**
     * 详细地址
     * @type {String}
     */
    location=''   
    /**
     * 经度
     * @type {String}
     */
    longitude=''   
    /**
     * 性能/用途
     * @type {String}
     */
    mainUsage=''   
    /**
     * 型号
     * @type {String}
     */
    model=''   
    /**
     * 名称
     * @type {String}
     */
    moniker=''   
    /**
     * 购置日期
     * @type {String}
     */
    purchaseDate=''   
    /**
     * 储备量
     * @type {Number}
     */
    quantity=undefined   
    /**
     * 备注
     * @type {String}
     */
    remark=''   
    /**
     * 规格
     * @type {String}
     */
    specification=''   
    /**
     * 类别id
     * @type {Number}
     */
    typeId=undefined   
    /**
     * 类别
     * @type {String}
     */
    typeName=''   
    /**
     * 单位
     * @type {String}
     */
    unit=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''
    
}
export class EnterpriseRiskPersonDTO {
  
    /**
     *
     * @param {Boolean} commitFlag 是否提交
     * @param {String} createTime 创建时间
     * @param {String} department 工作部门
     * @param {Number} enterpriseId 企业id
     * @param {Number} id 主键id
     * @param {String} moniker 姓名
     * @param {String} phone 联系电话
     * @param {String} position 职务
     * @param {String} post 岗位
     * @param {String} remark 备注
     * @param {String} updateTime 更新时间
     */ 
    constructor(commitFlag = false,createTime = '',department = '',enterpriseId = undefined,id = undefined,moniker = '',phone = '',position = '',post = '',remark = '',updateTime = ''){
        this.commitFlag = commitFlag
        this.createTime = createTime
        this.department = department
        this.enterpriseId = enterpriseId
        this.id = id
        this.moniker = moniker
        this.phone = phone
        this.position = position
        this.post = post
        this.remark = remark
        this.updateTime = updateTime
    }
       
    /**
     * 是否提交
     * @type {Boolean}
     */
    commitFlag=false   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 工作部门
     * @type {String}
     */
    department=''   
    /**
     * 企业id
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 姓名
     * @type {String}
     */
    moniker=''   
    /**
     * 联系电话
     * @type {String}
     */
    phone=''   
    /**
     * 职务
     * @type {String}
     */
    position=''   
    /**
     * 岗位
     * @type {String}
     */
    post=''   
    /**
     * 备注
     * @type {String}
     */
    remark=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''
    
}
export class EnterpriseRiskPlaceDTO {
  
    /**
     *
     * @param {String} capacity 容量或能力
     * @param {Boolean} commitFlag 是否提交
     * @param {String} contactPerson 联系人
     * @param {String} contactPhone 联系电话
     * @param {String} createTime 创建时间
     * @param {Number} enterpriseId 企业id
     * @param {String} floorSpace 占地面积（平方米）
     * @param {Number} id 主键id
     * @param {String} latitude 纬度
     * @param {String} location 详细地址
     * @param {String} longitude 经度
     * @param {String} moniker 名称
     * @param {Number} natureId 性质id
     * @param {String} natureName 性质
     * @param {String} remark 备注
     * @param {Number} typeId 类型id
     * @param {String} typeName 类型
     * @param {String} updateTime 更新时间
     */ 
    constructor(capacity = '',commitFlag = false,contactPerson = '',contactPhone = '',createTime = '',enterpriseId = undefined,floorSpace = '',id = undefined,latitude = '',location = '',longitude = '',moniker = '',natureId = undefined,natureName = '',remark = '',typeId = undefined,typeName = '',updateTime = ''){
        this.capacity = capacity
        this.commitFlag = commitFlag
        this.contactPerson = contactPerson
        this.contactPhone = contactPhone
        this.createTime = createTime
        this.enterpriseId = enterpriseId
        this.floorSpace = floorSpace
        this.id = id
        this.latitude = latitude
        this.location = location
        this.longitude = longitude
        this.moniker = moniker
        this.natureId = natureId
        this.natureName = natureName
        this.remark = remark
        this.typeId = typeId
        this.typeName = typeName
        this.updateTime = updateTime
    }
       
    /**
     * 容量或能力
     * @type {String}
     */
    capacity=''   
    /**
     * 是否提交
     * @type {Boolean}
     */
    commitFlag=false   
    /**
     * 联系人
     * @type {String}
     */
    contactPerson=''   
    /**
     * 联系电话
     * @type {String}
     */
    contactPhone=''   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 企业id
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 占地面积（平方米）
     * @type {String}
     */
    floorSpace=''   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 纬度
     * @type {String}
     */
    latitude=''   
    /**
     * 详细地址
     * @type {String}
     */
    location=''   
    /**
     * 经度
     * @type {String}
     */
    longitude=''   
    /**
     * 名称
     * @type {String}
     */
    moniker=''   
    /**
     * 性质id
     * @type {Number}
     */
    natureId=undefined   
    /**
     * 性质
     * @type {String}
     */
    natureName=''   
    /**
     * 备注
     * @type {String}
     */
    remark=''   
    /**
     * 类型id
     * @type {Number}
     */
    typeId=undefined   
    /**
     * 类型
     * @type {String}
     */
    typeName=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''
    
}
export class EnterpriseRiskSupplyDTO {
  
    /**
     *
     * @param {String} brand 品牌
     * @param {Boolean} commitFlag 是否提交
     * @param {String} contactPerson 联系人
     * @param {String} contactPhone 联系电话
     * @param {String} createTime 创建时间
     * @param {String} discardDate 报废日期
     * @param {Number} enterpriseId 企业id
     * @param {Number} id 主键id
     * @param {String} latitude 纬度
     * @param {String} location 详细地址
     * @param {String} longitude 经度
     * @param {String} mainUsage 主要用途
     * @param {String} model 型号
     * @param {String} moniker 名称
     * @param {Number} quantity 储备量
     * @param {String} remark 备注
     * @param {Number} typeId 类别id
     * @param {String} typeName 类别
     * @param {String} unit 单位
     * @param {String} updateTime 更新时间
     */ 
    constructor(brand = '',commitFlag = false,contactPerson = '',contactPhone = '',createTime = '',discardDate = '',enterpriseId = undefined,id = undefined,latitude = '',location = '',longitude = '',mainUsage = '',model = '',moniker = '',quantity = undefined,remark = '',typeId = undefined,typeName = '',unit = '',updateTime = ''){
        this.brand = brand
        this.commitFlag = commitFlag
        this.contactPerson = contactPerson
        this.contactPhone = contactPhone
        this.createTime = createTime
        this.discardDate = discardDate
        this.enterpriseId = enterpriseId
        this.id = id
        this.latitude = latitude
        this.location = location
        this.longitude = longitude
        this.mainUsage = mainUsage
        this.model = model
        this.moniker = moniker
        this.quantity = quantity
        this.remark = remark
        this.typeId = typeId
        this.typeName = typeName
        this.unit = unit
        this.updateTime = updateTime
    }
       
    /**
     * 品牌
     * @type {String}
     */
    brand=''   
    /**
     * 是否提交
     * @type {Boolean}
     */
    commitFlag=false   
    /**
     * 联系人
     * @type {String}
     */
    contactPerson=''   
    /**
     * 联系电话
     * @type {String}
     */
    contactPhone=''   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 报废日期
     * @type {String}
     */
    discardDate=''   
    /**
     * 企业id
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 纬度
     * @type {String}
     */
    latitude=''   
    /**
     * 详细地址
     * @type {String}
     */
    location=''   
    /**
     * 经度
     * @type {String}
     */
    longitude=''   
    /**
     * 主要用途
     * @type {String}
     */
    mainUsage=''   
    /**
     * 型号
     * @type {String}
     */
    model=''   
    /**
     * 名称
     * @type {String}
     */
    moniker=''   
    /**
     * 储备量
     * @type {Number}
     */
    quantity=undefined   
    /**
     * 备注
     * @type {String}
     */
    remark=''   
    /**
     * 类别id
     * @type {Number}
     */
    typeId=undefined   
    /**
     * 类别
     * @type {String}
     */
    typeName=''   
    /**
     * 单位
     * @type {String}
     */
    unit=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''
    
}
export class EnterpriseRiskTeamDTO {
  
    /**
     *
     * @param {String} buildDate 成立时间
     * @param {Boolean} commitFlag 是否提交
     * @param {String} contactPerson 负责人姓名
     * @param {String} contactPhone 负责人电话
     * @param {String} createTime 创建时间
     * @param {Boolean} editFlag 是否可编辑
     * @param {Number} enterpriseId 企业id
     * @param {Number} id 主键id
     * @param {String} latitude 纬度
     * @param {String} location 所在位置
     * @param {String} longitude 经度
     * @param {Number} mateCount 专业人数
     * @param {String} moniker 姓名
     * @param {Number} teamId 队伍id
     * @param {Number} typeId 队伍类型id
     * @param {String} typeName 队伍类型id
     * @param {String} updateTime 更新时间
     */ 
    constructor(buildDate = '',commitFlag = false,contactPerson = '',contactPhone = '',createTime = '',editFlag = false,enterpriseId = undefined,id = undefined,latitude = '',location = '',longitude = '',mateCount = undefined,moniker = '',teamId = undefined,typeId = undefined,typeName = '',updateTime = ''){
        this.buildDate = buildDate
        this.commitFlag = commitFlag
        this.contactPerson = contactPerson
        this.contactPhone = contactPhone
        this.createTime = createTime
        this.editFlag = editFlag
        this.enterpriseId = enterpriseId
        this.id = id
        this.latitude = latitude
        this.location = location
        this.longitude = longitude
        this.mateCount = mateCount
        this.moniker = moniker
        this.teamId = teamId
        this.typeId = typeId
        this.typeName = typeName
        this.updateTime = updateTime
    }
       
    /**
     * 成立时间
     * @type {String}
     */
    buildDate=''   
    /**
     * 是否提交
     * @type {Boolean}
     */
    commitFlag=false   
    /**
     * 负责人姓名
     * @type {String}
     */
    contactPerson=''   
    /**
     * 负责人电话
     * @type {String}
     */
    contactPhone=''   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 是否可编辑
     * @type {Boolean}
     */
    editFlag=false   
    /**
     * 企业id
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 纬度
     * @type {String}
     */
    latitude=''   
    /**
     * 所在位置
     * @type {String}
     */
    location=''   
    /**
     * 经度
     * @type {String}
     */
    longitude=''   
    /**
     * 专业人数
     * @type {Number}
     */
    mateCount=undefined   
    /**
     * 姓名
     * @type {String}
     */
    moniker=''   
    /**
     * 队伍id
     * @type {Number}
     */
    teamId=undefined   
    /**
     * 队伍类型id
     * @type {Number}
     */
    typeId=undefined   
    /**
     * 队伍类型id
     * @type {String}
     */
    typeName=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''
    
}
export class EnterpriseRiskUnitDTO {
  
    /**
     *
     * @param {String} casCode CAS号
     * @param {String} chemicalName 化学物质名称
     * @param {Boolean} commitFlag 是否提交
     * @param {String} createTime 创建时间
     * @param {String} criticalValue 临界量（吨）
     * @param {Number} enterpriseId 企业id
     * @param {Number} id 主键id
     * @param {String} materialId 风险物质id
     * @param {String} maxStorage 最大存储量（吨）
     * @param {String} moniker 风险单元名称
     * @param {String} storage 当前存储量（吨）
     * @param {String} typeName 化学物质类型
     * @param {String} updateTime 更新时间
     */ 
    constructor(casCode = '',chemicalName = '',commitFlag = false,createTime = '',criticalValue = '',enterpriseId = undefined,id = undefined,materialId = '',maxStorage = '',moniker = '',storage = '',typeName = '',updateTime = ''){
        this.casCode = casCode
        this.chemicalName = chemicalName
        this.commitFlag = commitFlag
        this.createTime = createTime
        this.criticalValue = criticalValue
        this.enterpriseId = enterpriseId
        this.id = id
        this.materialId = materialId
        this.maxStorage = maxStorage
        this.moniker = moniker
        this.storage = storage
        this.typeName = typeName
        this.updateTime = updateTime
    }
       
    /**
     * CAS号
     * @type {String}
     */
    casCode=''   
    /**
     * 化学物质名称
     * @type {String}
     */
    chemicalName=''   
    /**
     * 是否提交
     * @type {Boolean}
     */
    commitFlag=false   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 临界量（吨）
     * @type {String}
     */
    criticalValue=''   
    /**
     * 企业id
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 风险物质id
     * @type {String}
     */
    materialId=''   
    /**
     * 最大存储量（吨）
     * @type {String}
     */
    maxStorage=''   
    /**
     * 风险单元名称
     * @type {String}
     */
    moniker=''   
    /**
     * 当前存储量（吨）
     * @type {String}
     */
    storage=''   
    /**
     * 化学物质类型
     * @type {String}
     */
    typeName=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''
    
}
export class EnterpriseSensitiveDTO {
  
    /**
     *
     * @param {Boolean} commitFlag 是否提交
     * @param {String} contactPerson 联系人姓名
     * @param {String} contactPhone 联系人电话
     * @param {String} createTime 创建时间
     * @param {Number} enterpriseId 企业id
     * @param {String} floorSpace 面积
     * @param {Number} id 主键id
     * @param {String} latitude 纬度
     * @param {String} location 地址
     * @param {String} longitude 经度
     * @param {String} moniker 名称
     * @param {Number} sensitiveId 分类id
     * @param {Number} staffSize 人口规模
     * @param {Number} subTypeId 功能区类别id
     * @param {String} subTypeName 功能区类别
     * @param {Number} typeId 类型id
     * @param {String} typeName 类型
     * @param {String} updateTime 更新时间
     */ 
    constructor(commitFlag = false,contactPerson = '',contactPhone = '',createTime = '',enterpriseId = undefined,floorSpace = '',id = undefined,latitude = '',location = '',longitude = '',moniker = '',sensitiveId = undefined,staffSize = undefined,subTypeId = undefined,subTypeName = '',typeId = undefined,typeName = '',updateTime = ''){
        this.commitFlag = commitFlag
        this.contactPerson = contactPerson
        this.contactPhone = contactPhone
        this.createTime = createTime
        this.enterpriseId = enterpriseId
        this.floorSpace = floorSpace
        this.id = id
        this.latitude = latitude
        this.location = location
        this.longitude = longitude
        this.moniker = moniker
        this.sensitiveId = sensitiveId
        this.staffSize = staffSize
        this.subTypeId = subTypeId
        this.subTypeName = subTypeName
        this.typeId = typeId
        this.typeName = typeName
        this.updateTime = updateTime
    }
       
    /**
     * 是否提交
     * @type {Boolean}
     */
    commitFlag=false   
    /**
     * 联系人姓名
     * @type {String}
     */
    contactPerson=''   
    /**
     * 联系人电话
     * @type {String}
     */
    contactPhone=''   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 企业id
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 面积
     * @type {String}
     */
    floorSpace=''   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 纬度
     * @type {String}
     */
    latitude=''   
    /**
     * 地址
     * @type {String}
     */
    location=''   
    /**
     * 经度
     * @type {String}
     */
    longitude=''   
    /**
     * 名称
     * @type {String}
     */
    moniker=''   
    /**
     * 分类id
     * @type {Number}
     */
    sensitiveId=undefined   
    /**
     * 人口规模
     * @type {Number}
     */
    staffSize=undefined   
    /**
     * 功能区类别id
     * @type {Number}
     */
    subTypeId=undefined   
    /**
     * 功能区类别
     * @type {String}
     */
    subTypeName=''   
    /**
     * 类型id
     * @type {Number}
     */
    typeId=undefined   
    /**
     * 类型
     * @type {String}
     */
    typeName=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''
    
}
export class EnterpriseStationDTO {
  
    /**
     *
     * @param {Boolean} commitFlag 是否提交
     * @param {String} createTime 创建时间
     * @param {String} deviceManufacturer 设备厂商
     * @param {String} deviceName 设备名称
     * @param {String} deviceNum 设备编号
     * @param {String} districtCode 行政区
     * @param {String} districtName 行政区
     * @param {Number} enterpriseId 企业id
     * @param {Number} id 主键id
     * @param {String} latitude 纬度
     * @param {Number} licenseId 许可证id
     * @param {String} location 安装地址
     * @param {String} longitude 经度
     * @param {String} stationName 点位名称
     * @param {String} stationNum 点位编号
     * @param {Number} typeId 类型id
     * @param {String} updateTime 更新时间
     */ 
    constructor(commitFlag = false,createTime = '',deviceManufacturer = '',deviceName = '',deviceNum = '',districtCode = '',districtName = '',enterpriseId = undefined,id = undefined,latitude = '',licenseId = undefined,location = '',longitude = '',stationName = '',stationNum = '',typeId = undefined,updateTime = ''){
        this.commitFlag = commitFlag
        this.createTime = createTime
        this.deviceManufacturer = deviceManufacturer
        this.deviceName = deviceName
        this.deviceNum = deviceNum
        this.districtCode = districtCode
        this.districtName = districtName
        this.enterpriseId = enterpriseId
        this.id = id
        this.latitude = latitude
        this.licenseId = licenseId
        this.location = location
        this.longitude = longitude
        this.stationName = stationName
        this.stationNum = stationNum
        this.typeId = typeId
        this.updateTime = updateTime
    }
       
    /**
     * 是否提交
     * @type {Boolean}
     */
    commitFlag=false   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 设备厂商
     * @type {String}
     */
    deviceManufacturer=''   
    /**
     * 设备名称
     * @type {String}
     */
    deviceName=''   
    /**
     * 设备编号
     * @type {String}
     */
    deviceNum=''   
    /**
     * 行政区
     * @type {String}
     */
    districtCode=''   
    /**
     * 行政区
     * @type {String}
     */
    districtName=''   
    /**
     * 企业id
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 纬度
     * @type {String}
     */
    latitude=''   
    /**
     * 许可证id
     * @type {Number}
     */
    licenseId=undefined   
    /**
     * 安装地址
     * @type {String}
     */
    location=''   
    /**
     * 经度
     * @type {String}
     */
    longitude=''   
    /**
     * 点位名称
     * @type {String}
     */
    stationName=''   
    /**
     * 点位编号
     * @type {String}
     */
    stationNum=''   
    /**
     * 类型id
     * @type {Number}
     */
    typeId=undefined   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''
    
}
export class EnterpriseStationItemDTO {
  
    /**
     *
     * @param {String} casCode CAS号
     * @param {Boolean} commitFlag 是否提交
     * @param {String} createTime 创建时间
     * @param {String} emissionLimit 浓度限值
     * @param {Number} enterpriseId 企业id
     * @param {Number} id 主键id
     * @param {Number} itemId 项目id
     * @param {String} itemKey 项目key
     * @param {String} itemName 项目名称
     * @param {Number} normId 排放标准id
     * @param {Number} normItemId 排放项目id
     * @param {String} normItemName 排放项目
     * @param {String} normName 排放标准
     * @param {String} speedLimit 速率限值
     * @param {Number} speedNormItemId 速率排放项目id
     * @param {String} speedNormItemName 速率排放项目
     * @param {Number} speedUnitId 速率限值单位id
     * @param {String} speedUnitName 速率限值单位名称
     * @param {Number} stationId 点位id
     * @param {String} symbols 化学符号
     * @param {Number} typeId 项目类型id
     * @param {String} typeName 项目类型
     * @param {Number} unitId 限值单位id
     * @param {String} unitName 限值单位
     * @param {String} updateTime 更新时间
     */ 
    constructor(casCode = '',commitFlag = false,createTime = '',emissionLimit = '',enterpriseId = undefined,id = undefined,itemId = undefined,itemKey = '',itemName = '',normId = undefined,normItemId = undefined,normItemName = '',normName = '',speedLimit = '',speedNormItemId = undefined,speedNormItemName = '',speedUnitId = undefined,speedUnitName = '',stationId = undefined,symbols = '',typeId = undefined,typeName = '',unitId = undefined,unitName = '',updateTime = ''){
        this.casCode = casCode
        this.commitFlag = commitFlag
        this.createTime = createTime
        this.emissionLimit = emissionLimit
        this.enterpriseId = enterpriseId
        this.id = id
        this.itemId = itemId
        this.itemKey = itemKey
        this.itemName = itemName
        this.normId = normId
        this.normItemId = normItemId
        this.normItemName = normItemName
        this.normName = normName
        this.speedLimit = speedLimit
        this.speedNormItemId = speedNormItemId
        this.speedNormItemName = speedNormItemName
        this.speedUnitId = speedUnitId
        this.speedUnitName = speedUnitName
        this.stationId = stationId
        this.symbols = symbols
        this.typeId = typeId
        this.typeName = typeName
        this.unitId = unitId
        this.unitName = unitName
        this.updateTime = updateTime
    }
       
    /**
     * CAS号
     * @type {String}
     */
    casCode=''   
    /**
     * 是否提交
     * @type {Boolean}
     */
    commitFlag=false   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 浓度限值
     * @type {String}
     */
    emissionLimit=''   
    /**
     * 企业id
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 项目id
     * @type {Number}
     */
    itemId=undefined   
    /**
     * 项目key
     * @type {String}
     */
    itemKey=''   
    /**
     * 项目名称
     * @type {String}
     */
    itemName=''   
    /**
     * 排放标准id
     * @type {Number}
     */
    normId=undefined   
    /**
     * 排放项目id
     * @type {Number}
     */
    normItemId=undefined   
    /**
     * 排放项目
     * @type {String}
     */
    normItemName=''   
    /**
     * 排放标准
     * @type {String}
     */
    normName=''   
    /**
     * 速率限值
     * @type {String}
     */
    speedLimit=''   
    /**
     * 速率排放项目id
     * @type {Number}
     */
    speedNormItemId=undefined   
    /**
     * 速率排放项目
     * @type {String}
     */
    speedNormItemName=''   
    /**
     * 速率限值单位id
     * @type {Number}
     */
    speedUnitId=undefined   
    /**
     * 速率限值单位名称
     * @type {String}
     */
    speedUnitName=''   
    /**
     * 点位id
     * @type {Number}
     */
    stationId=undefined   
    /**
     * 化学符号
     * @type {String}
     */
    symbols=''   
    /**
     * 项目类型id
     * @type {Number}
     */
    typeId=undefined   
    /**
     * 项目类型
     * @type {String}
     */
    typeName=''   
    /**
     * 限值单位id
     * @type {Number}
     */
    unitId=undefined   
    /**
     * 限值单位
     * @type {String}
     */
    unitName=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''
    
}
export class EnterpriseWasteTransferDTO {
  
    /**
     *
     * @param {Boolean} commitFlag 是否提交
     * @param {String} confirmCount 确认接废物数
     * @param {String} createTime 创建时间
     * @param {Number} enterpriseId 企业id
     * @param {String} handleMethod 处置方式
     * @param {Number} id 主键id
     * @param {Number} licenseId 许可证id
     * @param {String} number 联单编号
     * @param {String} planCount 计划转移数量
     * @param {String} produceEnterprise 产生单位
     * @param {String} receiptDate 接收日期
     * @param {String} receiptEnterprise 接受单位
     * @param {String} transferEnterprise 运输单位
     * @param {String} typeNum 类别编号
     * @param {String} updateTime 更新时间
     * @param {String} wasteName 废物名称
     */ 
    constructor(commitFlag = false,confirmCount = '',createTime = '',enterpriseId = undefined,handleMethod = '',id = undefined,licenseId = undefined,number = '',planCount = '',produceEnterprise = '',receiptDate = '',receiptEnterprise = '',transferEnterprise = '',typeNum = '',updateTime = '',wasteName = ''){
        this.commitFlag = commitFlag
        this.confirmCount = confirmCount
        this.createTime = createTime
        this.enterpriseId = enterpriseId
        this.handleMethod = handleMethod
        this.id = id
        this.licenseId = licenseId
        this.number = number
        this.planCount = planCount
        this.produceEnterprise = produceEnterprise
        this.receiptDate = receiptDate
        this.receiptEnterprise = receiptEnterprise
        this.transferEnterprise = transferEnterprise
        this.typeNum = typeNum
        this.updateTime = updateTime
        this.wasteName = wasteName
    }
       
    /**
     * 是否提交
     * @type {Boolean}
     */
    commitFlag=false   
    /**
     * 确认接废物数
     * @type {String}
     */
    confirmCount=''   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 企业id
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 处置方式
     * @type {String}
     */
    handleMethod=''   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 许可证id
     * @type {Number}
     */
    licenseId=undefined   
    /**
     * 联单编号
     * @type {String}
     */
    number=''   
    /**
     * 计划转移数量
     * @type {String}
     */
    planCount=''   
    /**
     * 产生单位
     * @type {String}
     */
    produceEnterprise=''   
    /**
     * 接收日期
     * @type {String}
     */
    receiptDate=''   
    /**
     * 接受单位
     * @type {String}
     */
    receiptEnterprise=''   
    /**
     * 运输单位
     * @type {String}
     */
    transferEnterprise=''   
    /**
     * 类别编号
     * @type {String}
     */
    typeNum=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''   
    /**
     * 废物名称
     * @type {String}
     */
    wasteName=''
    
}
export class EnterpriseWaterDTO {
  
    /**
     *
     * @param {Boolean} commitFlag 是否提交
     * @param {String} createTime 创建时间
     * @param {Number} enterpriseId 企业id
     * @param {String} freshVolume 新鲜用水量（吨）
     * @param {Number} id 主键id
     * @param {String} reuseVolume 重复用水量（吨）
     * @param {String} selfVolume 自备水量（吨）
     * @param {String} totalVolume 用水总量（吨）
     * @param {String} updateTime 更新时间
     * @param {String} yearName 年份
     */ 
    constructor(commitFlag = false,createTime = '',enterpriseId = undefined,freshVolume = '',id = undefined,reuseVolume = '',selfVolume = '',totalVolume = '',updateTime = '',yearName = ''){
        this.commitFlag = commitFlag
        this.createTime = createTime
        this.enterpriseId = enterpriseId
        this.freshVolume = freshVolume
        this.id = id
        this.reuseVolume = reuseVolume
        this.selfVolume = selfVolume
        this.totalVolume = totalVolume
        this.updateTime = updateTime
        this.yearName = yearName
    }
       
    /**
     * 是否提交
     * @type {Boolean}
     */
    commitFlag=false   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 企业id
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 新鲜用水量（吨）
     * @type {String}
     */
    freshVolume=''   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 重复用水量（吨）
     * @type {String}
     */
    reuseVolume=''   
    /**
     * 自备水量（吨）
     * @type {String}
     */
    selfVolume=''   
    /**
     * 用水总量（吨）
     * @type {String}
     */
    totalVolume=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''   
    /**
     * 年份
     * @type {String}
     */
    yearName=''
    
}
export class ExpertDTO {
  
    /**
     *
     * @param {String} birthday 出生日期
     * @param {String} createTime 创建时间
     * @param {String} emailAddr 邮箱
     * @param {Number} id 主键id
     * @param {String} liveAddress 详细地址
     * @param {Number} majorCategoryId 专业类别id
     * @param {String} majorCategoryName 专业类别
     * @param {String} moniker 姓名
     * @param {String} phoneNum 联系电话
     * @param {String} photoPath 照片路径
     * @param {String} remark 备注
     * @param {Number} sexId 性别id
     * @param {String} sexName 性别
     * @param {Number} technicalTitleId 技术职称id
     * @param {String} technicalTitleName 技术职称
     * @param {String} updateTime 更新时间
     * @param {String} workPlace 工作单位
     */ 
    constructor(birthday = '',createTime = '',emailAddr = '',id = undefined,liveAddress = '',majorCategoryId = undefined,majorCategoryName = '',moniker = '',phoneNum = '',photoPath = '',remark = '',sexId = undefined,sexName = '',technicalTitleId = undefined,technicalTitleName = '',updateTime = '',workPlace = ''){
        this.birthday = birthday
        this.createTime = createTime
        this.emailAddr = emailAddr
        this.id = id
        this.liveAddress = liveAddress
        this.majorCategoryId = majorCategoryId
        this.majorCategoryName = majorCategoryName
        this.moniker = moniker
        this.phoneNum = phoneNum
        this.photoPath = photoPath
        this.remark = remark
        this.sexId = sexId
        this.sexName = sexName
        this.technicalTitleId = technicalTitleId
        this.technicalTitleName = technicalTitleName
        this.updateTime = updateTime
        this.workPlace = workPlace
    }
       
    /**
     * 出生日期
     * @type {String}
     */
    birthday=''   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 邮箱
     * @type {String}
     */
    emailAddr=''   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 详细地址
     * @type {String}
     */
    liveAddress=''   
    /**
     * 专业类别id
     * @type {Number}
     */
    majorCategoryId=undefined   
    /**
     * 专业类别
     * @type {String}
     */
    majorCategoryName=''   
    /**
     * 姓名
     * @type {String}
     */
    moniker=''   
    /**
     * 联系电话
     * @type {String}
     */
    phoneNum=''   
    /**
     * 照片路径
     * @type {String}
     */
    photoPath=''   
    /**
     * 备注
     * @type {String}
     */
    remark=''   
    /**
     * 性别id
     * @type {Number}
     */
    sexId=undefined   
    /**
     * 性别
     * @type {String}
     */
    sexName=''   
    /**
     * 技术职称id
     * @type {Number}
     */
    technicalTitleId=undefined   
    /**
     * 技术职称
     * @type {String}
     */
    technicalTitleName=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''   
    /**
     * 工作单位
     * @type {String}
     */
    workPlace=''
    
}
export class FactorListVO {
  
    /**
     *
     * @param {Number} itemId 监测因子id
     * @param {String} itemName 监测项目名称
     * @param {String} itemUnit 监测项目单位
     * @param {String} lowerLimit 标准数值下限
     * @param {String} norm 标准
     * @param {String} standardLimit 推荐标准限值
     * @param {String} upperLimit 标准数值上限
     */ 
    constructor(itemId = undefined,itemName = '',itemUnit = '',lowerLimit = '',norm = '',standardLimit = '',upperLimit = ''){
        this.itemId = itemId
        this.itemName = itemName
        this.itemUnit = itemUnit
        this.lowerLimit = lowerLimit
        this.norm = norm
        this.standardLimit = standardLimit
        this.upperLimit = upperLimit
    }
       
    /**
     * 监测因子id
     * @type {Number}
     */
    itemId=undefined   
    /**
     * 监测项目名称
     * @type {String}
     */
    itemName=''   
    /**
     * 监测项目单位
     * @type {String}
     */
    itemUnit=''   
    /**
     * 标准数值下限
     * @type {String}
     */
    lowerLimit=''   
    /**
     * 标准
     * @type {String}
     */
    norm=''   
    /**
     * 推荐标准限值
     * @type {String}
     */
    standardLimit=''   
    /**
     * 标准数值上限
     * @type {String}
     */
    upperLimit=''
    
}
export class FileDTO {
  
    /**
     *
     * @param {String} createTime 创建时间
     * @param {String} fileName 文件名称
     * @param {String} filePath 文件路径
     * @param {String} fileType 文件类型(image、video、other)
     * @param {String} framePath 缩略图路径
     * @param {Number} id 主键id
     * @param {String} updateTime 更新时间
     */ 
    constructor(createTime = '',fileName = '',filePath = '',fileType = '',framePath = '',id = undefined,updateTime = ''){
        this.createTime = createTime
        this.fileName = fileName
        this.filePath = filePath
        this.fileType = fileType
        this.framePath = framePath
        this.id = id
        this.updateTime = updateTime
    }
       
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 文件名称
     * @type {String}
     */
    fileName=''   
    /**
     * 文件路径
     * @type {String}
     */
    filePath=''   
    /**
     * 文件类型(image、video、other)
     * @type {String}
     */
    fileType=''   
    /**
     * 缩略图路径
     * @type {String}
     */
    framePath=''   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''
    
}
export class FrontSpinner {
  
    /**
     *
     * @param {String} snName 值
     * @param {Number} snVal 键
     */ 
    constructor(snName = '',snVal = undefined){
        this.snName = snName
        this.snVal = snVal
    }
       
    /**
     * 值
     * @type {String}
     */
    snName=''   
    /**
     * 键
     * @type {Number}
     */
    snVal=undefined
    
}
export class GeneralDictVO {
  
    /**
     *
     * @param {Number} dictId 内容id
     * @param {String} dictName 内容名称
     */ 
    constructor(dictId = undefined,dictName = ''){
        this.dictId = dictId
        this.dictName = dictName
    }
       
    /**
     * 内容id
     * @type {Number}
     */
    dictId=undefined   
    /**
     * 内容名称
     * @type {String}
     */
    dictName=''
    
}
export class HistoryDataVO {
  
    /**
     *
     * @param {String} dataTime 数据时间
     * @param {Array} reflection 筛选列表
     * @param {String} stationName 点位名称
     * @param {String} w01001 PH值
     * @param {String} w01003 浑浊度
     * @param {String} w01009 溶解氧
     * @param {String} w01010 水温
     * @param {String} w01014 电导率
     * @param {String} w01018 化学需氧量
     * @param {String} w01019 高锰酸盐指数
     * @param {String} w21003 氨氮
     * @param {String} w21011 总磷
     * @param {String} waterLevel 水质类别
     */ 
    constructor(dataTime = '',reflection = [],stationName = '',w01001 = '',w01003 = '',w01009 = '',w01010 = '',w01014 = '',w01018 = '',w01019 = '',w21003 = '',w21011 = '',waterLevel = ''){
        this.dataTime = dataTime
        this.reflection = reflection
        this.stationName = stationName
        this.w01001 = w01001
        this.w01003 = w01003
        this.w01009 = w01009
        this.w01010 = w01010
        this.w01014 = w01014
        this.w01018 = w01018
        this.w01019 = w01019
        this.w21003 = w21003
        this.w21011 = w21011
        this.waterLevel = waterLevel
    }
       
    /**
     * 数据时间
     * @type {String}
     */
    dataTime=''   
    /**
     * 筛选列表
     * @type {Array}
     */
    reflection=[]   
    /**
     * 点位名称
     * @type {String}
     */
    stationName=''   
    /**
     * PH值
     * @type {String}
     */
    w01001=''   
    /**
     * 浑浊度
     * @type {String}
     */
    w01003=''   
    /**
     * 溶解氧
     * @type {String}
     */
    w01009=''   
    /**
     * 水温
     * @type {String}
     */
    w01010=''   
    /**
     * 电导率
     * @type {String}
     */
    w01014=''   
    /**
     * 化学需氧量
     * @type {String}
     */
    w01018=''   
    /**
     * 高锰酸盐指数
     * @type {String}
     */
    w01019=''   
    /**
     * 氨氮
     * @type {String}
     */
    w21003=''   
    /**
     * 总磷
     * @type {String}
     */
    w21011=''   
    /**
     * 水质类别
     * @type {String}
     */
    waterLevel=''
    
}
export class IndustryDistributionVO {
  
    /**
     *
     * @param {Number} hasLicense 有排污许可证
     * @param {Number} industryId 行业类别id
     * @param {String} industryName 行业类别名称
     * @param {Number} totalCount 总数
     */ 
    constructor(hasLicense = undefined,industryId = undefined,industryName = '',totalCount = undefined){
        this.hasLicense = hasLicense
        this.industryId = industryId
        this.industryName = industryName
        this.totalCount = totalCount
    }
       
    /**
     * 有排污许可证
     * @type {Number}
     */
    hasLicense=undefined   
    /**
     * 行业类别id
     * @type {Number}
     */
    industryId=undefined   
    /**
     * 行业类别名称
     * @type {String}
     */
    industryName=''   
    /**
     * 总数
     * @type {Number}
     */
    totalCount=undefined
    
}
export class InformationDTO {
  
    /**
     *
     * @param {String} createTime 创建时间
     * @param {String} districtCode 行政区代码
     * @param {String} districtName 行政区名称
     * @param {Array<FileDTO>} fileList 图片列表
     * @param {String} fullName 名称
     * @param {Number} id 主键id
     * @param {String} introduction 简介
     * @param {String} latitude 纬度
     * @param {String} location 详细地址
     * @param {String} longitude 经度
     * @param {String} updateTime 更新时间
     */ 
    constructor(createTime = '',districtCode = '',districtName = '',fileList = [],fullName = '',id = undefined,introduction = '',latitude = '',location = '',longitude = '',updateTime = ''){
        this.createTime = createTime
        this.districtCode = districtCode
        this.districtName = districtName
        this.fileList = fileList
        this.fullName = fullName
        this.id = id
        this.introduction = introduction
        this.latitude = latitude
        this.location = location
        this.longitude = longitude
        this.updateTime = updateTime
    }
       
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 行政区代码
     * @type {String}
     */
    districtCode=''   
    /**
     * 行政区名称
     * @type {String}
     */
    districtName=''   
    /**
     * 图片列表
     * @type {Array<FileDTO>}
     */
    fileList=[]   
    /**
     * 名称
     * @type {String}
     */
    fullName=''   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 简介
     * @type {String}
     */
    introduction=''   
    /**
     * 纬度
     * @type {String}
     */
    latitude=''   
    /**
     * 详细地址
     * @type {String}
     */
    location=''   
    /**
     * 经度
     * @type {String}
     */
    longitude=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''
    
}
export class InstrumentDTO {
  
    /**
     *
     * @param {String} brand 品牌
     * @param {String} createTime 创建时间
     * @param {Number} directorId 责任人id
     * @param {String} directorName 责任人
     * @param {Number} id 主键id
     * @param {String} manufactureDate 生产日期
     * @param {String} model 规格/型号
     * @param {String} moniker 名称
     * @param {Number} quantity 数量
     * @param {String} updateTime 更新时间
     * @param {Number} workplaceId 办公区id
     * @param {String} workplaceName 办公区名称
     */ 
    constructor(brand = '',createTime = '',directorId = undefined,directorName = '',id = undefined,manufactureDate = '',model = '',moniker = '',quantity = undefined,updateTime = '',workplaceId = undefined,workplaceName = ''){
        this.brand = brand
        this.createTime = createTime
        this.directorId = directorId
        this.directorName = directorName
        this.id = id
        this.manufactureDate = manufactureDate
        this.model = model
        this.moniker = moniker
        this.quantity = quantity
        this.updateTime = updateTime
        this.workplaceId = workplaceId
        this.workplaceName = workplaceName
    }
       
    /**
     * 品牌
     * @type {String}
     */
    brand=''   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 责任人id
     * @type {Number}
     */
    directorId=undefined   
    /**
     * 责任人
     * @type {String}
     */
    directorName=''   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 生产日期
     * @type {String}
     */
    manufactureDate=''   
    /**
     * 规格/型号
     * @type {String}
     */
    model=''   
    /**
     * 名称
     * @type {String}
     */
    moniker=''   
    /**
     * 数量
     * @type {Number}
     */
    quantity=undefined   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''   
    /**
     * 办公区id
     * @type {Number}
     */
    workplaceId=undefined   
    /**
     * 办公区名称
     * @type {String}
     */
    workplaceName=''
    
}
export class ItemBaseDTO {
  
    /**
     *
     * @param {String} alias 别名
     * @param {String} casCode CAS号
     * @param {String} cnName 中文名
     * @param {String} createTime 创建时间
     * @param {String} enName 英文名
     * @param {Number} id 主键id
     * @param {String} number 代码
     * @param {String} remark 备注
     * @param {String} symbols 化学符号
     * @param {Number} typeId 类型id
     * @param {String} typeName 类型
     * @param {String} updateTime 更新时间
     */ 
    constructor(alias = '',casCode = '',cnName = '',createTime = '',enName = '',id = undefined,number = '',remark = '',symbols = '',typeId = undefined,typeName = '',updateTime = ''){
        this.alias = alias
        this.casCode = casCode
        this.cnName = cnName
        this.createTime = createTime
        this.enName = enName
        this.id = id
        this.number = number
        this.remark = remark
        this.symbols = symbols
        this.typeId = typeId
        this.typeName = typeName
        this.updateTime = updateTime
    }
       
    /**
     * 别名
     * @type {String}
     */
    alias=''   
    /**
     * CAS号
     * @type {String}
     */
    casCode=''   
    /**
     * 中文名
     * @type {String}
     */
    cnName=''   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 英文名
     * @type {String}
     */
    enName=''   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 代码
     * @type {String}
     */
    number=''   
    /**
     * 备注
     * @type {String}
     */
    remark=''   
    /**
     * 化学符号
     * @type {String}
     */
    symbols=''   
    /**
     * 类型id
     * @type {Number}
     */
    typeId=undefined   
    /**
     * 类型
     * @type {String}
     */
    typeName=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''
    
}
export class ItemValueDTO {
  
    /**
     *
     * @param {Boolean} alarmFlag 报警状态标志
     * @param {String} desc 监测状态
     * @param {String} flag 监测状态标志
     * @param {String} itemName 监测因子名称
     * @param {String} unit 监测因子单位
     * @param {String} val 监测因子数值
     */ 
    constructor(alarmFlag = false,desc = '',flag = '',itemName = '',unit = '',val = ''){
        this.alarmFlag = alarmFlag
        this.desc = desc
        this.flag = flag
        this.itemName = itemName
        this.unit = unit
        this.val = val
    }
       
    /**
     * 报警状态标志
     * @type {Boolean}
     */
    alarmFlag=false   
    /**
     * 监测状态
     * @type {String}
     */
    desc=''   
    /**
     * 监测状态标志
     * @type {String}
     */
    flag=''   
    /**
     * 监测因子名称
     * @type {String}
     */
    itemName=''   
    /**
     * 监测因子单位
     * @type {String}
     */
    unit=''   
    /**
     * 监测因子数值
     * @type {String}
     */
    val=''
    
}
export class LocateDTO {
  
    /**
     *
     * @param {String} cntLat 中心点纬度
     * @param {String} cntLon 中心点经度
     * @param {String} cntScale 缩放比例
     * @param {String} createTime 创建时间
     * @param {String} ctlLat 控制中心纬度
     * @param {String} ctlLon 控制中心经度
     * @param {Number} id 主键id
     * @param {String} updateTime 更新时间
     */ 
    constructor(cntLat = '',cntLon = '',cntScale = '',createTime = '',ctlLat = '',ctlLon = '',id = undefined,updateTime = ''){
        this.cntLat = cntLat
        this.cntLon = cntLon
        this.cntScale = cntScale
        this.createTime = createTime
        this.ctlLat = ctlLat
        this.ctlLon = ctlLon
        this.id = id
        this.updateTime = updateTime
    }
       
    /**
     * 中心点纬度
     * @type {String}
     */
    cntLat=''   
    /**
     * 中心点经度
     * @type {String}
     */
    cntLon=''   
    /**
     * 缩放比例
     * @type {String}
     */
    cntScale=''   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 控制中心纬度
     * @type {String}
     */
    ctlLat=''   
    /**
     * 控制中心经度
     * @type {String}
     */
    ctlLon=''   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''
    
}
export class LoginDTO {
  
    /**
     *
     * @param {String} access 密码
     * @param {String} account 账号
     * @param {String} captchaInput 输入的验证码
     * @param {String} captchaValue 验证码文本
     * @param {Boolean} enterpriseFlag 是否企业用户
     * @param {Number} enterpriseId 
     * @param {Boolean} griderFlag 
     * @param {Number} id 用户Id
     * @param {Boolean} managerFlag 
     * @param {String} moniker 用户姓名
     * @param {Boolean} operatorFlag 
     */ 
    constructor(access = '',account = '',captchaInput = '',captchaValue = '',enterpriseFlag = false,enterpriseId = undefined,griderFlag = false,id = undefined,managerFlag = false,moniker = '',operatorFlag = false){
        this.access = access
        this.account = account
        this.captchaInput = captchaInput
        this.captchaValue = captchaValue
        this.enterpriseFlag = enterpriseFlag
        this.enterpriseId = enterpriseId
        this.griderFlag = griderFlag
        this.id = id
        this.managerFlag = managerFlag
        this.moniker = moniker
        this.operatorFlag = operatorFlag
    }
       
    /**
     * 密码
     * @type {String}
     */
    access=''   
    /**
     * 账号
     * @type {String}
     */
    account=''   
    /**
     * 输入的验证码
     * @type {String}
     */
    captchaInput=''   
    /**
     * 验证码文本
     * @type {String}
     */
    captchaValue=''   
    /**
     * 是否企业用户
     * @type {Boolean}
     */
    enterpriseFlag=false   
    /**
     * 
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 
     * @type {Boolean}
     */
    griderFlag=false   
    /**
     * 用户Id
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {Boolean}
     */
    managerFlag=false   
    /**
     * 用户姓名
     * @type {String}
     */
    moniker=''   
    /**
     * 
     * @type {Boolean}
     */
    operatorFlag=false
    
}
export class MonitorItemVO {
  
    /**
     *
     * @param {String} flag 监测项目数据标记，N 数据正常，B 数据异常，F 仪器停运，M 维护数据，S 设定数据，D 仪器故障，C 校准数据，T 超限数据
     * @param {String} key 监测项目key
     * @param {String} name 监测项目名称
     * @param {Number} overStandardRate 监测项目点位超标率
     * @param {Number} times 监测项目超标倍数
     * @param {String} unit 单位
     * @param {Number} value 监测项目数值
     * @param {Number} waterFunctionId 监测项目对应的类别
     */ 
    constructor(flag = '',key = '',name = '',overStandardRate = undefined,times = undefined,unit = '',value = undefined,waterFunctionId = undefined){
        this.flag = flag
        this.key = key
        this.name = name
        this.overStandardRate = overStandardRate
        this.times = times
        this.unit = unit
        this.value = value
        this.waterFunctionId = waterFunctionId
    }
       
    /**
     * 监测项目数据标记，N 数据正常，B 数据异常，F 仪器停运，M 维护数据，S 设定数据，D 仪器故障，C 校准数据，T 超限数据
     * @type {String}
     */
    flag=''   
    /**
     * 监测项目key
     * @type {String}
     */
    key=''   
    /**
     * 监测项目名称
     * @type {String}
     */
    name=''   
    /**
     * 监测项目点位超标率
     * @type {Number}
     */
    overStandardRate=undefined   
    /**
     * 监测项目超标倍数
     * @type {Number}
     */
    times=undefined   
    /**
     * 单位
     * @type {String}
     */
    unit=''   
    /**
     * 监测项目数值
     * @type {Number}
     */
    value=undefined   
    /**
     * 监测项目对应的类别
     * @type {Number}
     */
    waterFunctionId=undefined
    
}
export class MsdsBaseDTO {
  
    /**
     *
     * @param {String} acuteToxicity 急性毒性
     * @param {String} aggregatingHarm 聚合危害
     * @param {String} airLightDecayHigh 空气中光氧化半衰期-高（小时）
     * @param {String} airLightDecayLow 空气中光氧化半衰期-低（小时）
     * @param {String} airSemiDecayHigh 空气半衰期-高（小时）
     * @param {String} airSemiDecayLow 空气半衰期-低（小时）
     * @param {String} airToxicityCritical 大气毒性终点浓度值（临界量/吨）
     * @param {Boolean} airToxicityFlag 大气毒性化学品
     * @param {String} airWaterDecayHigh 空气中水解-高（小时）
     * @param {String} airWaterDecayLow 空气中水解-低（小时）
     * @param {String} allergenic 致敏性
     * @param {String} appearanceCharacter 外观与性状
     * @param {String} aqueousAerobicHigh 水相生物降解-好氧-高（小时）
     * @param {String} aqueousAerobicLow 水相生物降解-好氧-低（小时）
     * @param {String} aqueousAnaerobicHigh 水相生物降解-厌氧-高（小时）
     * @param {String} aqueousAnaerobicLow 水相生物降解-厌氧-低（小时）
     * @param {String} aqueousDecayHigh 水相光解半衰期-高（小时）
     * @param {String} aqueousDecayLow 水相光解半衰期-低（小时）
     * @param {String} aqueousSubsideHigh 水相生物降解-二次沉降处理-高（小时）
     * @param {String} aqueousSubsideLow 水相生物降解-二次沉降处理-低（小时）
     * @param {String} avoidExposure 避免接触的条件
     * @param {String} biologicalAccumulation 生物富集或生物积累性[C]-BCF
     * @param {String} bod5 BOD5
     * @param {String} bodyProtection 身体防护
     * @param {String} boilingPoint 沸点(℃)
     * @param {String} carcinogenicity 致癌性
     * @param {String} casCode CAS
     * @param {String} casPart1 CAS No
     * @param {String} casPart2 CAS No
     * @param {String} casPart3 CAS No
     * @param {String} casPart4 CAS No
     * @param {String} casPart5 CAS No
     * @param {String} cavyCavityLd50 豚鼠腹膜腔LD^^50(mg/kg)
     * @param {String} cavyEye 豚鼠经眼
     * @param {String} cavyMouthLd50 豚鼠经口LD^^50(mg/kg)
     * @param {String} cavySkin 豚鼠经皮
     * @param {String} cavySkinLd50 豚鼠经皮LD^^50(mg/kg)
     * @param {String} cavySubcutisLd50 豚鼠皮下LD^^50(mg/kg)
     * @param {String} cavyVeinLd50 豚鼠静脉LD^^50(mg/kg)
     * @param {String} chronicToxicity 亚急性与慢性毒性
     * @param {String} cnAlias 其他中文名
     * @param {String} cnName 化学品中文名
     * @param {String} cod COD
     * @param {String} coefficientLogarithm 辛醇/水分配系数
     * @param {String} combustionHeat 燃烧热(kJ/mol)
     * @param {String} combustionProduct 有害燃烧产物
     * @param {String} component1 有害物成份1
     * @param {String} component2 有害物成份2
     * @param {String} component3 有害物成份3
     * @param {String} component4 有害物成份4
     * @param {String} component5 有害物成份5
     * @param {String} concentration1 浓度
     * @param {String} concentration2 浓度
     * @param {String} concentration3 浓度
     * @param {String} concentration4 浓度
     * @param {String} concentration5 浓度
     * @param {String} createTime 创建时间
     * @param {String} criticalPressure 临界压力(Mpa)
     * @param {String} criticalTemperature 临界温度(℃)
     * @param {String} dangerNumber 危险货物编号
     * @param {String} dangerType 危险性类别
     * @param {String} decompositionProduct 分解产物
     * @param {String} discardCautions 废弃注意事项
     * @param {String} discardMethod 废弃处置方法
     * @param {String} emergencyTreatment 应急行动
     * @param {String} enAlias 其他英文名
     * @param {String} enName 化学品英文名
     * @param {String} engineerControl 工程控制
     * @param {String} enterpriseEventCritical 企业突发环境事件风险评估（临界量/吨）  
     * @param {Boolean} enterpriseEventFlag 企业突发环境事件风险
     * @param {String} envEmergencyCritical 突发环境事件风险物质及临界量清单（限值/吨）
     * @param {Boolean} envEmergencyFlag 突发环境事件风险物质及临界量清单
     * @param {String} environmentHazard 环境危害
     * @param {String} explosionHazard 燃爆危险
     * @param {String} explosionLower 爆炸上限[％(V/V)]
     * @param {String} explosionUpper 爆炸下限[％(V/V)]
     * @param {String} extinguishMethod 灭火方法
     * @param {String} extinguishPrecautions 灭火注意事项及措施
     * @param {String} eyeContact 眼睛接触
     * @param {String} eyeProtection 眼睛防护
     * @param {String} flashPoint 闪点(℃)
     * @param {String} handProtection 手防护
     * @param {String} hazardFeature 危险特性
     * @param {String} healthHazard 健康危害
     * @param {String} humanEye 人经眼
     * @param {String} humanInLcl0 人吸入LCL0(mg/m³)
     * @param {String} humanInTcl0 人吸入TCL0(mg/m³)
     * @param {String} humanSkin 人经皮
     * @param {Number} id 主键id
     * @param {String} idlh IDLH
     * @param {String} ignitionTemperature 引燃温度(℃)
     * @param {String} ingestionIn 食入
     * @param {String} intakeRoute 侵入途径
     * @param {String} ld100 LD^^100
     * @param {String} ldl0 LDL0
     * @param {String} lethalDoseEc50 半数效应浓度EC^^50
     * @param {String} lethalDoseIc50 半数抑制浓度IC^^50
     * @param {String} lethalDoseLc50 半数致死浓度LC^^50
     * @param {String} lethalDoseLd100 绝对致死量LD^^100
     * @param {String} lethalDoseLd50 半数致死量LD^^50
     * @param {String} lightAbsorptionHigh 光解最大光吸收-高（纳米）
     * @param {String} lightAbsorptionLow 光解最大光吸收-低（纳米）
     * @param {String} mac MAC(mg/m³)
     * @param {String} mainPurpose 主要用途
     * @param {String} majorHazardCritical 危险化学品重大危险源辨识（临界量/吨）
     * @param {Boolean} majorHazardFlag 危险化学品重大危险源辨识
     * @param {String} manEye 男人经眼
     * @param {String} manSkin 男人经皮
     * @param {String} meltingPoint 熔点(℃)
     * @param {String} miceCavityLd50 小鼠腹膜腔LD^^50(mg/kg)
     * @param {String} miceInL50 小鼠吸入LC^^50(mg/m³)
     * @param {String} miceInLcl0 小鼠吸入LCL0(mg/m³)
     * @param {String} miceInTcl0 小鼠吸入TCL0(mg/m³)
     * @param {String} miceMouthLd50 小鼠经口LD^^50(mg/kg)
     * @param {String} miceSkinLd50 小鼠经皮LD^^50(mg/kg)
     * @param {String} miceVeinLd50 小鼠静脉LD^^50(mg/kg)
     * @param {String} modifyDesc 修改说明
     * @param {String} monitorMethod 监测方法
     * @param {String} mutagenicity 致突变性
     * @param {String} noel 无作用剂量NOEL
     * @param {String} operationCautions 操作注意事项
     * @param {String} otherAnimalLd50 其它动物LD^^50
     * @param {String} otherHarmfulEffects 其他有害作用
     * @param {String} otherInLc100 其它动物吸入LC^^100
     * @param {String} otherInLc50 其它动物吸入LC^^50
     * @param {String} otherInLcl0 其它动物吸入LCL0
     * @param {String} otherInTcl0 其它动物吸入TCL0
     * @param {String} otherProperties 其 他
     * @param {String} otherProtection 其他防护
     * @param {String} otherRemark 其他信息
     * @param {String} packingCategory 包装类别
     * @param {String} packingMark 包装标志
     * @param {String} packingMethod 包装方法
     * @param {String} pcStel PC-STEL（mg/m³）
     * @param {String} pcTwa PC-TWA（mg/m³）
     * @param {String} ph pH值
     * @param {String} prohibitedContent 禁配物
     * @param {String} purity 纯品/混合物
     * @param {String} rabbitCavityLd50 兔腹膜腔LD^^50(mg/kg)
     * @param {String} rabbitEye 家兔经眼
     * @param {String} rabbitMouthLd50 兔经口LD^^50(mg/kg)
     * @param {String} rabbitSkin 家兔经皮
     * @param {String} rabbitSkinLd50 兔经皮LD^^50(mg/kg)
     * @param {String} rabbitSubcutisLd50 兔皮下LD^^50(mg/kg)
     * @param {String} rabbitVeinLd50 兔静脉LD^^50(mg/kg)
     * @param {String} ratCavityLd50 大鼠腹膜腔LD^^50(mg/kg)
     * @param {String} ratEye 大鼠经眼
     * @param {String} ratInLc50 大鼠吸入LC^^50(mg/m³)
     * @param {String} ratInLcl0 大鼠吸入LCL0(mg/m³)
     * @param {String} ratMouthLd50 大鼠经口LD^^50(mg/kg)
     * @param {String} ratSkin 大鼠经皮
     * @param {String} ratSkinLd50 大鼠经皮LD^^50(mg/kg)
     * @param {String} ratSubcutisLd50 大鼠皮下LD^^50(mg/kg)
     * @param {String} ratVeinLd50 大鼠静脉LD^^50(mg/kg)
     * @param {String} referenceDoc 参考文献
     * @param {String} regulatoryInfo 法规信息
     * @param {String} relativeDensity 相对密度(水=1)
     * @param {String} respiratoryProtection 呼吸系统防护
     * @param {String} returnSemiDecayHigh 还原半衰期-高（小时）
     * @param {String} returnSemiDecayLow 还原半衰期-低（小时）
     * @param {String} saturatedPressure 饱和蒸气压(kPa)
     * @param {String} skinContact 皮肤接触
     * @param {String} soilSemiDecayHigh 土壤半衰期-高（小时）
     * @param {String} soilSemiDecayLow 土壤半衰期-低（小时）
     * @param {String} solubility 溶解性
     * @param {String} stability 稳定性
     * @param {Number} standardNum 2015中的序号
     * @param {String} storageCautions 储存注意事项
     * @param {String} suctionIn 吸入
     * @param {String} surfaceSemiDecayHigh 地表水半衰期-高（小时）
     * @param {String} surfaceSemiDecayLow 地表水半衰期-低（小时）
     * @param {String} tdl0 TDL0
     * @param {String} teratogenicity 致畸性
     * @param {String} tlm 半数耐受限量TLm
     * @param {String} tlvC TLV-C(mg/m³)
     * @param {String} tlvStel TLV-STEL(mg/m³)
     * @param {String} tlvTwa TLV-TWA(mg/m³)
     * @param {String} toxicityRemark 备注
     * @param {String} transportCautions 运输注意事项
     * @param {String} unNumber UN编号
     * @param {String} underSemiDecayHigh 地下水半衰期-高（小时）
     * @param {String} underSemiDecayLow 地下水半衰期-低（小时）
     * @param {String} updateTime 更新时间
     * @param {String} vaporDensity 相对蒸气密度(空气=1)
     * @param {String} wasteNature 废弃物性质
     * @param {String} waterLightDecayHigh 水中光氧化半衰期-高（小时）
     * @param {String} waterLightDecayLow 水中光氧化半衰期-低（小时）
     * @param {String} waterSemiDecayOne 一级水解半衰期（小时）
     */ 
    constructor(acuteToxicity = '',aggregatingHarm = '',airLightDecayHigh = '',airLightDecayLow = '',airSemiDecayHigh = '',airSemiDecayLow = '',airToxicityCritical = '',airToxicityFlag = false,airWaterDecayHigh = '',airWaterDecayLow = '',allergenic = '',appearanceCharacter = '',aqueousAerobicHigh = '',aqueousAerobicLow = '',aqueousAnaerobicHigh = '',aqueousAnaerobicLow = '',aqueousDecayHigh = '',aqueousDecayLow = '',aqueousSubsideHigh = '',aqueousSubsideLow = '',avoidExposure = '',biologicalAccumulation = '',bod5 = '',bodyProtection = '',boilingPoint = '',carcinogenicity = '',casCode = '',casPart1 = '',casPart2 = '',casPart3 = '',casPart4 = '',casPart5 = '',cavyCavityLd50 = '',cavyEye = '',cavyMouthLd50 = '',cavySkin = '',cavySkinLd50 = '',cavySubcutisLd50 = '',cavyVeinLd50 = '',chronicToxicity = '',cnAlias = '',cnName = '',cod = '',coefficientLogarithm = '',combustionHeat = '',combustionProduct = '',component1 = '',component2 = '',component3 = '',component4 = '',component5 = '',concentration1 = '',concentration2 = '',concentration3 = '',concentration4 = '',concentration5 = '',createTime = '',criticalPressure = '',criticalTemperature = '',dangerNumber = '',dangerType = '',decompositionProduct = '',discardCautions = '',discardMethod = '',emergencyTreatment = '',enAlias = '',enName = '',engineerControl = '',enterpriseEventCritical = '',enterpriseEventFlag = false,envEmergencyCritical = '',envEmergencyFlag = false,environmentHazard = '',explosionHazard = '',explosionLower = '',explosionUpper = '',extinguishMethod = '',extinguishPrecautions = '',eyeContact = '',eyeProtection = '',flashPoint = '',handProtection = '',hazardFeature = '',healthHazard = '',humanEye = '',humanInLcl0 = '',humanInTcl0 = '',humanSkin = '',id = undefined,idlh = '',ignitionTemperature = '',ingestionIn = '',intakeRoute = '',ld100 = '',ldl0 = '',lethalDoseEc50 = '',lethalDoseIc50 = '',lethalDoseLc50 = '',lethalDoseLd100 = '',lethalDoseLd50 = '',lightAbsorptionHigh = '',lightAbsorptionLow = '',mac = '',mainPurpose = '',majorHazardCritical = '',majorHazardFlag = false,manEye = '',manSkin = '',meltingPoint = '',miceCavityLd50 = '',miceInL50 = '',miceInLcl0 = '',miceInTcl0 = '',miceMouthLd50 = '',miceSkinLd50 = '',miceVeinLd50 = '',modifyDesc = '',monitorMethod = '',mutagenicity = '',noel = '',operationCautions = '',otherAnimalLd50 = '',otherHarmfulEffects = '',otherInLc100 = '',otherInLc50 = '',otherInLcl0 = '',otherInTcl0 = '',otherProperties = '',otherProtection = '',otherRemark = '',packingCategory = '',packingMark = '',packingMethod = '',pcStel = '',pcTwa = '',ph = '',prohibitedContent = '',purity = '',rabbitCavityLd50 = '',rabbitEye = '',rabbitMouthLd50 = '',rabbitSkin = '',rabbitSkinLd50 = '',rabbitSubcutisLd50 = '',rabbitVeinLd50 = '',ratCavityLd50 = '',ratEye = '',ratInLc50 = '',ratInLcl0 = '',ratMouthLd50 = '',ratSkin = '',ratSkinLd50 = '',ratSubcutisLd50 = '',ratVeinLd50 = '',referenceDoc = '',regulatoryInfo = '',relativeDensity = '',respiratoryProtection = '',returnSemiDecayHigh = '',returnSemiDecayLow = '',saturatedPressure = '',skinContact = '',soilSemiDecayHigh = '',soilSemiDecayLow = '',solubility = '',stability = '',standardNum = undefined,storageCautions = '',suctionIn = '',surfaceSemiDecayHigh = '',surfaceSemiDecayLow = '',tdl0 = '',teratogenicity = '',tlm = '',tlvC = '',tlvStel = '',tlvTwa = '',toxicityRemark = '',transportCautions = '',unNumber = '',underSemiDecayHigh = '',underSemiDecayLow = '',updateTime = '',vaporDensity = '',wasteNature = '',waterLightDecayHigh = '',waterLightDecayLow = '',waterSemiDecayOne = ''){
        this.acuteToxicity = acuteToxicity
        this.aggregatingHarm = aggregatingHarm
        this.airLightDecayHigh = airLightDecayHigh
        this.airLightDecayLow = airLightDecayLow
        this.airSemiDecayHigh = airSemiDecayHigh
        this.airSemiDecayLow = airSemiDecayLow
        this.airToxicityCritical = airToxicityCritical
        this.airToxicityFlag = airToxicityFlag
        this.airWaterDecayHigh = airWaterDecayHigh
        this.airWaterDecayLow = airWaterDecayLow
        this.allergenic = allergenic
        this.appearanceCharacter = appearanceCharacter
        this.aqueousAerobicHigh = aqueousAerobicHigh
        this.aqueousAerobicLow = aqueousAerobicLow
        this.aqueousAnaerobicHigh = aqueousAnaerobicHigh
        this.aqueousAnaerobicLow = aqueousAnaerobicLow
        this.aqueousDecayHigh = aqueousDecayHigh
        this.aqueousDecayLow = aqueousDecayLow
        this.aqueousSubsideHigh = aqueousSubsideHigh
        this.aqueousSubsideLow = aqueousSubsideLow
        this.avoidExposure = avoidExposure
        this.biologicalAccumulation = biologicalAccumulation
        this.bod5 = bod5
        this.bodyProtection = bodyProtection
        this.boilingPoint = boilingPoint
        this.carcinogenicity = carcinogenicity
        this.casCode = casCode
        this.casPart1 = casPart1
        this.casPart2 = casPart2
        this.casPart3 = casPart3
        this.casPart4 = casPart4
        this.casPart5 = casPart5
        this.cavyCavityLd50 = cavyCavityLd50
        this.cavyEye = cavyEye
        this.cavyMouthLd50 = cavyMouthLd50
        this.cavySkin = cavySkin
        this.cavySkinLd50 = cavySkinLd50
        this.cavySubcutisLd50 = cavySubcutisLd50
        this.cavyVeinLd50 = cavyVeinLd50
        this.chronicToxicity = chronicToxicity
        this.cnAlias = cnAlias
        this.cnName = cnName
        this.cod = cod
        this.coefficientLogarithm = coefficientLogarithm
        this.combustionHeat = combustionHeat
        this.combustionProduct = combustionProduct
        this.component1 = component1
        this.component2 = component2
        this.component3 = component3
        this.component4 = component4
        this.component5 = component5
        this.concentration1 = concentration1
        this.concentration2 = concentration2
        this.concentration3 = concentration3
        this.concentration4 = concentration4
        this.concentration5 = concentration5
        this.createTime = createTime
        this.criticalPressure = criticalPressure
        this.criticalTemperature = criticalTemperature
        this.dangerNumber = dangerNumber
        this.dangerType = dangerType
        this.decompositionProduct = decompositionProduct
        this.discardCautions = discardCautions
        this.discardMethod = discardMethod
        this.emergencyTreatment = emergencyTreatment
        this.enAlias = enAlias
        this.enName = enName
        this.engineerControl = engineerControl
        this.enterpriseEventCritical = enterpriseEventCritical
        this.enterpriseEventFlag = enterpriseEventFlag
        this.envEmergencyCritical = envEmergencyCritical
        this.envEmergencyFlag = envEmergencyFlag
        this.environmentHazard = environmentHazard
        this.explosionHazard = explosionHazard
        this.explosionLower = explosionLower
        this.explosionUpper = explosionUpper
        this.extinguishMethod = extinguishMethod
        this.extinguishPrecautions = extinguishPrecautions
        this.eyeContact = eyeContact
        this.eyeProtection = eyeProtection
        this.flashPoint = flashPoint
        this.handProtection = handProtection
        this.hazardFeature = hazardFeature
        this.healthHazard = healthHazard
        this.humanEye = humanEye
        this.humanInLcl0 = humanInLcl0
        this.humanInTcl0 = humanInTcl0
        this.humanSkin = humanSkin
        this.id = id
        this.idlh = idlh
        this.ignitionTemperature = ignitionTemperature
        this.ingestionIn = ingestionIn
        this.intakeRoute = intakeRoute
        this.ld100 = ld100
        this.ldl0 = ldl0
        this.lethalDoseEc50 = lethalDoseEc50
        this.lethalDoseIc50 = lethalDoseIc50
        this.lethalDoseLc50 = lethalDoseLc50
        this.lethalDoseLd100 = lethalDoseLd100
        this.lethalDoseLd50 = lethalDoseLd50
        this.lightAbsorptionHigh = lightAbsorptionHigh
        this.lightAbsorptionLow = lightAbsorptionLow
        this.mac = mac
        this.mainPurpose = mainPurpose
        this.majorHazardCritical = majorHazardCritical
        this.majorHazardFlag = majorHazardFlag
        this.manEye = manEye
        this.manSkin = manSkin
        this.meltingPoint = meltingPoint
        this.miceCavityLd50 = miceCavityLd50
        this.miceInL50 = miceInL50
        this.miceInLcl0 = miceInLcl0
        this.miceInTcl0 = miceInTcl0
        this.miceMouthLd50 = miceMouthLd50
        this.miceSkinLd50 = miceSkinLd50
        this.miceVeinLd50 = miceVeinLd50
        this.modifyDesc = modifyDesc
        this.monitorMethod = monitorMethod
        this.mutagenicity = mutagenicity
        this.noel = noel
        this.operationCautions = operationCautions
        this.otherAnimalLd50 = otherAnimalLd50
        this.otherHarmfulEffects = otherHarmfulEffects
        this.otherInLc100 = otherInLc100
        this.otherInLc50 = otherInLc50
        this.otherInLcl0 = otherInLcl0
        this.otherInTcl0 = otherInTcl0
        this.otherProperties = otherProperties
        this.otherProtection = otherProtection
        this.otherRemark = otherRemark
        this.packingCategory = packingCategory
        this.packingMark = packingMark
        this.packingMethod = packingMethod
        this.pcStel = pcStel
        this.pcTwa = pcTwa
        this.ph = ph
        this.prohibitedContent = prohibitedContent
        this.purity = purity
        this.rabbitCavityLd50 = rabbitCavityLd50
        this.rabbitEye = rabbitEye
        this.rabbitMouthLd50 = rabbitMouthLd50
        this.rabbitSkin = rabbitSkin
        this.rabbitSkinLd50 = rabbitSkinLd50
        this.rabbitSubcutisLd50 = rabbitSubcutisLd50
        this.rabbitVeinLd50 = rabbitVeinLd50
        this.ratCavityLd50 = ratCavityLd50
        this.ratEye = ratEye
        this.ratInLc50 = ratInLc50
        this.ratInLcl0 = ratInLcl0
        this.ratMouthLd50 = ratMouthLd50
        this.ratSkin = ratSkin
        this.ratSkinLd50 = ratSkinLd50
        this.ratSubcutisLd50 = ratSubcutisLd50
        this.ratVeinLd50 = ratVeinLd50
        this.referenceDoc = referenceDoc
        this.regulatoryInfo = regulatoryInfo
        this.relativeDensity = relativeDensity
        this.respiratoryProtection = respiratoryProtection
        this.returnSemiDecayHigh = returnSemiDecayHigh
        this.returnSemiDecayLow = returnSemiDecayLow
        this.saturatedPressure = saturatedPressure
        this.skinContact = skinContact
        this.soilSemiDecayHigh = soilSemiDecayHigh
        this.soilSemiDecayLow = soilSemiDecayLow
        this.solubility = solubility
        this.stability = stability
        this.standardNum = standardNum
        this.storageCautions = storageCautions
        this.suctionIn = suctionIn
        this.surfaceSemiDecayHigh = surfaceSemiDecayHigh
        this.surfaceSemiDecayLow = surfaceSemiDecayLow
        this.tdl0 = tdl0
        this.teratogenicity = teratogenicity
        this.tlm = tlm
        this.tlvC = tlvC
        this.tlvStel = tlvStel
        this.tlvTwa = tlvTwa
        this.toxicityRemark = toxicityRemark
        this.transportCautions = transportCautions
        this.unNumber = unNumber
        this.underSemiDecayHigh = underSemiDecayHigh
        this.underSemiDecayLow = underSemiDecayLow
        this.updateTime = updateTime
        this.vaporDensity = vaporDensity
        this.wasteNature = wasteNature
        this.waterLightDecayHigh = waterLightDecayHigh
        this.waterLightDecayLow = waterLightDecayLow
        this.waterSemiDecayOne = waterSemiDecayOne
    }
       
    /**
     * 急性毒性
     * @type {String}
     */
    acuteToxicity=''   
    /**
     * 聚合危害
     * @type {String}
     */
    aggregatingHarm=''   
    /**
     * 空气中光氧化半衰期-高（小时）
     * @type {String}
     */
    airLightDecayHigh=''   
    /**
     * 空气中光氧化半衰期-低（小时）
     * @type {String}
     */
    airLightDecayLow=''   
    /**
     * 空气半衰期-高（小时）
     * @type {String}
     */
    airSemiDecayHigh=''   
    /**
     * 空气半衰期-低（小时）
     * @type {String}
     */
    airSemiDecayLow=''   
    /**
     * 大气毒性终点浓度值（临界量/吨）
     * @type {String}
     */
    airToxicityCritical=''   
    /**
     * 大气毒性化学品
     * @type {Boolean}
     */
    airToxicityFlag=false   
    /**
     * 空气中水解-高（小时）
     * @type {String}
     */
    airWaterDecayHigh=''   
    /**
     * 空气中水解-低（小时）
     * @type {String}
     */
    airWaterDecayLow=''   
    /**
     * 致敏性
     * @type {String}
     */
    allergenic=''   
    /**
     * 外观与性状
     * @type {String}
     */
    appearanceCharacter=''   
    /**
     * 水相生物降解-好氧-高（小时）
     * @type {String}
     */
    aqueousAerobicHigh=''   
    /**
     * 水相生物降解-好氧-低（小时）
     * @type {String}
     */
    aqueousAerobicLow=''   
    /**
     * 水相生物降解-厌氧-高（小时）
     * @type {String}
     */
    aqueousAnaerobicHigh=''   
    /**
     * 水相生物降解-厌氧-低（小时）
     * @type {String}
     */
    aqueousAnaerobicLow=''   
    /**
     * 水相光解半衰期-高（小时）
     * @type {String}
     */
    aqueousDecayHigh=''   
    /**
     * 水相光解半衰期-低（小时）
     * @type {String}
     */
    aqueousDecayLow=''   
    /**
     * 水相生物降解-二次沉降处理-高（小时）
     * @type {String}
     */
    aqueousSubsideHigh=''   
    /**
     * 水相生物降解-二次沉降处理-低（小时）
     * @type {String}
     */
    aqueousSubsideLow=''   
    /**
     * 避免接触的条件
     * @type {String}
     */
    avoidExposure=''   
    /**
     * 生物富集或生物积累性[C]-BCF
     * @type {String}
     */
    biologicalAccumulation=''   
    /**
     * BOD5
     * @type {String}
     */
    bod5=''   
    /**
     * 身体防护
     * @type {String}
     */
    bodyProtection=''   
    /**
     * 沸点(℃)
     * @type {String}
     */
    boilingPoint=''   
    /**
     * 致癌性
     * @type {String}
     */
    carcinogenicity=''   
    /**
     * CAS
     * @type {String}
     */
    casCode=''   
    /**
     * CAS No
     * @type {String}
     */
    casPart1=''   
    /**
     * CAS No
     * @type {String}
     */
    casPart2=''   
    /**
     * CAS No
     * @type {String}
     */
    casPart3=''   
    /**
     * CAS No
     * @type {String}
     */
    casPart4=''   
    /**
     * CAS No
     * @type {String}
     */
    casPart5=''   
    /**
     * 豚鼠腹膜腔LD^^50(mg/kg)
     * @type {String}
     */
    cavyCavityLd50=''   
    /**
     * 豚鼠经眼
     * @type {String}
     */
    cavyEye=''   
    /**
     * 豚鼠经口LD^^50(mg/kg)
     * @type {String}
     */
    cavyMouthLd50=''   
    /**
     * 豚鼠经皮
     * @type {String}
     */
    cavySkin=''   
    /**
     * 豚鼠经皮LD^^50(mg/kg)
     * @type {String}
     */
    cavySkinLd50=''   
    /**
     * 豚鼠皮下LD^^50(mg/kg)
     * @type {String}
     */
    cavySubcutisLd50=''   
    /**
     * 豚鼠静脉LD^^50(mg/kg)
     * @type {String}
     */
    cavyVeinLd50=''   
    /**
     * 亚急性与慢性毒性
     * @type {String}
     */
    chronicToxicity=''   
    /**
     * 其他中文名
     * @type {String}
     */
    cnAlias=''   
    /**
     * 化学品中文名
     * @type {String}
     */
    cnName=''   
    /**
     * COD
     * @type {String}
     */
    cod=''   
    /**
     * 辛醇/水分配系数
     * @type {String}
     */
    coefficientLogarithm=''   
    /**
     * 燃烧热(kJ/mol)
     * @type {String}
     */
    combustionHeat=''   
    /**
     * 有害燃烧产物
     * @type {String}
     */
    combustionProduct=''   
    /**
     * 有害物成份1
     * @type {String}
     */
    component1=''   
    /**
     * 有害物成份2
     * @type {String}
     */
    component2=''   
    /**
     * 有害物成份3
     * @type {String}
     */
    component3=''   
    /**
     * 有害物成份4
     * @type {String}
     */
    component4=''   
    /**
     * 有害物成份5
     * @type {String}
     */
    component5=''   
    /**
     * 浓度
     * @type {String}
     */
    concentration1=''   
    /**
     * 浓度
     * @type {String}
     */
    concentration2=''   
    /**
     * 浓度
     * @type {String}
     */
    concentration3=''   
    /**
     * 浓度
     * @type {String}
     */
    concentration4=''   
    /**
     * 浓度
     * @type {String}
     */
    concentration5=''   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 临界压力(Mpa)
     * @type {String}
     */
    criticalPressure=''   
    /**
     * 临界温度(℃)
     * @type {String}
     */
    criticalTemperature=''   
    /**
     * 危险货物编号
     * @type {String}
     */
    dangerNumber=''   
    /**
     * 危险性类别
     * @type {String}
     */
    dangerType=''   
    /**
     * 分解产物
     * @type {String}
     */
    decompositionProduct=''   
    /**
     * 废弃注意事项
     * @type {String}
     */
    discardCautions=''   
    /**
     * 废弃处置方法
     * @type {String}
     */
    discardMethod=''   
    /**
     * 应急行动
     * @type {String}
     */
    emergencyTreatment=''   
    /**
     * 其他英文名
     * @type {String}
     */
    enAlias=''   
    /**
     * 化学品英文名
     * @type {String}
     */
    enName=''   
    /**
     * 工程控制
     * @type {String}
     */
    engineerControl=''   
    /**
     * 企业突发环境事件风险评估（临界量/吨）  
     * @type {String}
     */
    enterpriseEventCritical=''   
    /**
     * 企业突发环境事件风险
     * @type {Boolean}
     */
    enterpriseEventFlag=false   
    /**
     * 突发环境事件风险物质及临界量清单（限值/吨）
     * @type {String}
     */
    envEmergencyCritical=''   
    /**
     * 突发环境事件风险物质及临界量清单
     * @type {Boolean}
     */
    envEmergencyFlag=false   
    /**
     * 环境危害
     * @type {String}
     */
    environmentHazard=''   
    /**
     * 燃爆危险
     * @type {String}
     */
    explosionHazard=''   
    /**
     * 爆炸上限[％(V/V)]
     * @type {String}
     */
    explosionLower=''   
    /**
     * 爆炸下限[％(V/V)]
     * @type {String}
     */
    explosionUpper=''   
    /**
     * 灭火方法
     * @type {String}
     */
    extinguishMethod=''   
    /**
     * 灭火注意事项及措施
     * @type {String}
     */
    extinguishPrecautions=''   
    /**
     * 眼睛接触
     * @type {String}
     */
    eyeContact=''   
    /**
     * 眼睛防护
     * @type {String}
     */
    eyeProtection=''   
    /**
     * 闪点(℃)
     * @type {String}
     */
    flashPoint=''   
    /**
     * 手防护
     * @type {String}
     */
    handProtection=''   
    /**
     * 危险特性
     * @type {String}
     */
    hazardFeature=''   
    /**
     * 健康危害
     * @type {String}
     */
    healthHazard=''   
    /**
     * 人经眼
     * @type {String}
     */
    humanEye=''   
    /**
     * 人吸入LCL0(mg/m³)
     * @type {String}
     */
    humanInLcl0=''   
    /**
     * 人吸入TCL0(mg/m³)
     * @type {String}
     */
    humanInTcl0=''   
    /**
     * 人经皮
     * @type {String}
     */
    humanSkin=''   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * IDLH
     * @type {String}
     */
    idlh=''   
    /**
     * 引燃温度(℃)
     * @type {String}
     */
    ignitionTemperature=''   
    /**
     * 食入
     * @type {String}
     */
    ingestionIn=''   
    /**
     * 侵入途径
     * @type {String}
     */
    intakeRoute=''   
    /**
     * LD^^100
     * @type {String}
     */
    ld100=''   
    /**
     * LDL0
     * @type {String}
     */
    ldl0=''   
    /**
     * 半数效应浓度EC^^50
     * @type {String}
     */
    lethalDoseEc50=''   
    /**
     * 半数抑制浓度IC^^50
     * @type {String}
     */
    lethalDoseIc50=''   
    /**
     * 半数致死浓度LC^^50
     * @type {String}
     */
    lethalDoseLc50=''   
    /**
     * 绝对致死量LD^^100
     * @type {String}
     */
    lethalDoseLd100=''   
    /**
     * 半数致死量LD^^50
     * @type {String}
     */
    lethalDoseLd50=''   
    /**
     * 光解最大光吸收-高（纳米）
     * @type {String}
     */
    lightAbsorptionHigh=''   
    /**
     * 光解最大光吸收-低（纳米）
     * @type {String}
     */
    lightAbsorptionLow=''   
    /**
     * MAC(mg/m³)
     * @type {String}
     */
    mac=''   
    /**
     * 主要用途
     * @type {String}
     */
    mainPurpose=''   
    /**
     * 危险化学品重大危险源辨识（临界量/吨）
     * @type {String}
     */
    majorHazardCritical=''   
    /**
     * 危险化学品重大危险源辨识
     * @type {Boolean}
     */
    majorHazardFlag=false   
    /**
     * 男人经眼
     * @type {String}
     */
    manEye=''   
    /**
     * 男人经皮
     * @type {String}
     */
    manSkin=''   
    /**
     * 熔点(℃)
     * @type {String}
     */
    meltingPoint=''   
    /**
     * 小鼠腹膜腔LD^^50(mg/kg)
     * @type {String}
     */
    miceCavityLd50=''   
    /**
     * 小鼠吸入LC^^50(mg/m³)
     * @type {String}
     */
    miceInL50=''   
    /**
     * 小鼠吸入LCL0(mg/m³)
     * @type {String}
     */
    miceInLcl0=''   
    /**
     * 小鼠吸入TCL0(mg/m³)
     * @type {String}
     */
    miceInTcl0=''   
    /**
     * 小鼠经口LD^^50(mg/kg)
     * @type {String}
     */
    miceMouthLd50=''   
    /**
     * 小鼠经皮LD^^50(mg/kg)
     * @type {String}
     */
    miceSkinLd50=''   
    /**
     * 小鼠静脉LD^^50(mg/kg)
     * @type {String}
     */
    miceVeinLd50=''   
    /**
     * 修改说明
     * @type {String}
     */
    modifyDesc=''   
    /**
     * 监测方法
     * @type {String}
     */
    monitorMethod=''   
    /**
     * 致突变性
     * @type {String}
     */
    mutagenicity=''   
    /**
     * 无作用剂量NOEL
     * @type {String}
     */
    noel=''   
    /**
     * 操作注意事项
     * @type {String}
     */
    operationCautions=''   
    /**
     * 其它动物LD^^50
     * @type {String}
     */
    otherAnimalLd50=''   
    /**
     * 其他有害作用
     * @type {String}
     */
    otherHarmfulEffects=''   
    /**
     * 其它动物吸入LC^^100
     * @type {String}
     */
    otherInLc100=''   
    /**
     * 其它动物吸入LC^^50
     * @type {String}
     */
    otherInLc50=''   
    /**
     * 其它动物吸入LCL0
     * @type {String}
     */
    otherInLcl0=''   
    /**
     * 其它动物吸入TCL0
     * @type {String}
     */
    otherInTcl0=''   
    /**
     * 其 他
     * @type {String}
     */
    otherProperties=''   
    /**
     * 其他防护
     * @type {String}
     */
    otherProtection=''   
    /**
     * 其他信息
     * @type {String}
     */
    otherRemark=''   
    /**
     * 包装类别
     * @type {String}
     */
    packingCategory=''   
    /**
     * 包装标志
     * @type {String}
     */
    packingMark=''   
    /**
     * 包装方法
     * @type {String}
     */
    packingMethod=''   
    /**
     * PC-STEL（mg/m³）
     * @type {String}
     */
    pcStel=''   
    /**
     * PC-TWA（mg/m³）
     * @type {String}
     */
    pcTwa=''   
    /**
     * pH值
     * @type {String}
     */
    ph=''   
    /**
     * 禁配物
     * @type {String}
     */
    prohibitedContent=''   
    /**
     * 纯品/混合物
     * @type {String}
     */
    purity=''   
    /**
     * 兔腹膜腔LD^^50(mg/kg)
     * @type {String}
     */
    rabbitCavityLd50=''   
    /**
     * 家兔经眼
     * @type {String}
     */
    rabbitEye=''   
    /**
     * 兔经口LD^^50(mg/kg)
     * @type {String}
     */
    rabbitMouthLd50=''   
    /**
     * 家兔经皮
     * @type {String}
     */
    rabbitSkin=''   
    /**
     * 兔经皮LD^^50(mg/kg)
     * @type {String}
     */
    rabbitSkinLd50=''   
    /**
     * 兔皮下LD^^50(mg/kg)
     * @type {String}
     */
    rabbitSubcutisLd50=''   
    /**
     * 兔静脉LD^^50(mg/kg)
     * @type {String}
     */
    rabbitVeinLd50=''   
    /**
     * 大鼠腹膜腔LD^^50(mg/kg)
     * @type {String}
     */
    ratCavityLd50=''   
    /**
     * 大鼠经眼
     * @type {String}
     */
    ratEye=''   
    /**
     * 大鼠吸入LC^^50(mg/m³)
     * @type {String}
     */
    ratInLc50=''   
    /**
     * 大鼠吸入LCL0(mg/m³)
     * @type {String}
     */
    ratInLcl0=''   
    /**
     * 大鼠经口LD^^50(mg/kg)
     * @type {String}
     */
    ratMouthLd50=''   
    /**
     * 大鼠经皮
     * @type {String}
     */
    ratSkin=''   
    /**
     * 大鼠经皮LD^^50(mg/kg)
     * @type {String}
     */
    ratSkinLd50=''   
    /**
     * 大鼠皮下LD^^50(mg/kg)
     * @type {String}
     */
    ratSubcutisLd50=''   
    /**
     * 大鼠静脉LD^^50(mg/kg)
     * @type {String}
     */
    ratVeinLd50=''   
    /**
     * 参考文献
     * @type {String}
     */
    referenceDoc=''   
    /**
     * 法规信息
     * @type {String}
     */
    regulatoryInfo=''   
    /**
     * 相对密度(水=1)
     * @type {String}
     */
    relativeDensity=''   
    /**
     * 呼吸系统防护
     * @type {String}
     */
    respiratoryProtection=''   
    /**
     * 还原半衰期-高（小时）
     * @type {String}
     */
    returnSemiDecayHigh=''   
    /**
     * 还原半衰期-低（小时）
     * @type {String}
     */
    returnSemiDecayLow=''   
    /**
     * 饱和蒸气压(kPa)
     * @type {String}
     */
    saturatedPressure=''   
    /**
     * 皮肤接触
     * @type {String}
     */
    skinContact=''   
    /**
     * 土壤半衰期-高（小时）
     * @type {String}
     */
    soilSemiDecayHigh=''   
    /**
     * 土壤半衰期-低（小时）
     * @type {String}
     */
    soilSemiDecayLow=''   
    /**
     * 溶解性
     * @type {String}
     */
    solubility=''   
    /**
     * 稳定性
     * @type {String}
     */
    stability=''   
    /**
     * 2015中的序号
     * @type {Number}
     */
    standardNum=undefined   
    /**
     * 储存注意事项
     * @type {String}
     */
    storageCautions=''   
    /**
     * 吸入
     * @type {String}
     */
    suctionIn=''   
    /**
     * 地表水半衰期-高（小时）
     * @type {String}
     */
    surfaceSemiDecayHigh=''   
    /**
     * 地表水半衰期-低（小时）
     * @type {String}
     */
    surfaceSemiDecayLow=''   
    /**
     * TDL0
     * @type {String}
     */
    tdl0=''   
    /**
     * 致畸性
     * @type {String}
     */
    teratogenicity=''   
    /**
     * 半数耐受限量TLm
     * @type {String}
     */
    tlm=''   
    /**
     * TLV-C(mg/m³)
     * @type {String}
     */
    tlvC=''   
    /**
     * TLV-STEL(mg/m³)
     * @type {String}
     */
    tlvStel=''   
    /**
     * TLV-TWA(mg/m³)
     * @type {String}
     */
    tlvTwa=''   
    /**
     * 备注
     * @type {String}
     */
    toxicityRemark=''   
    /**
     * 运输注意事项
     * @type {String}
     */
    transportCautions=''   
    /**
     * UN编号
     * @type {String}
     */
    unNumber=''   
    /**
     * 地下水半衰期-高（小时）
     * @type {String}
     */
    underSemiDecayHigh=''   
    /**
     * 地下水半衰期-低（小时）
     * @type {String}
     */
    underSemiDecayLow=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''   
    /**
     * 相对蒸气密度(空气=1)
     * @type {String}
     */
    vaporDensity=''   
    /**
     * 废弃物性质
     * @type {String}
     */
    wasteNature=''   
    /**
     * 水中光氧化半衰期-高（小时）
     * @type {String}
     */
    waterLightDecayHigh=''   
    /**
     * 水中光氧化半衰期-低（小时）
     * @type {String}
     */
    waterLightDecayLow=''   
    /**
     * 一级水解半衰期（小时）
     * @type {String}
     */
    waterSemiDecayOne=''
    
}
export class MsdsInfoDTO {
  
    /**
     *
     * @param {String} agencyAbridge 发行机构（简写）
     * @param {String} createTime 创建时间
     * @param {String} fileCode 发行文号
     * @param {String} fileDate 发布日期
     * @param {String} fileName 文件名称
     * @param {Number} id 主键id
     * @param {String} issuingAgency 发行机构（全部）
     * @param {String} updateTime 更新时间
     */ 
    constructor(agencyAbridge = '',createTime = '',fileCode = '',fileDate = '',fileName = '',id = undefined,issuingAgency = '',updateTime = ''){
        this.agencyAbridge = agencyAbridge
        this.createTime = createTime
        this.fileCode = fileCode
        this.fileDate = fileDate
        this.fileName = fileName
        this.id = id
        this.issuingAgency = issuingAgency
        this.updateTime = updateTime
    }
       
    /**
     * 发行机构（简写）
     * @type {String}
     */
    agencyAbridge=''   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 发行文号
     * @type {String}
     */
    fileCode=''   
    /**
     * 发布日期
     * @type {String}
     */
    fileDate=''   
    /**
     * 文件名称
     * @type {String}
     */
    fileName=''   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 发行机构（全部）
     * @type {String}
     */
    issuingAgency=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''
    
}
export class NormEntryDTO {
  
    /**
     *
     * @param {String} createTime 创建时间
     * @param {Number} id 主键id
     * @param {String} moniker 名称
     * @param {Number} normId 标准id
     * @param {Number} pid 父id
     * @param {Number} typeId 类型id
     * @param {String} typeName 类型
     * @param {String} updateTime 更新时间
     */ 
    constructor(createTime = '',id = undefined,moniker = '',normId = undefined,pid = undefined,typeId = undefined,typeName = '',updateTime = ''){
        this.createTime = createTime
        this.id = id
        this.moniker = moniker
        this.normId = normId
        this.pid = pid
        this.typeId = typeId
        this.typeName = typeName
        this.updateTime = updateTime
    }
       
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 名称
     * @type {String}
     */
    moniker=''   
    /**
     * 标准id
     * @type {Number}
     */
    normId=undefined   
    /**
     * 父id
     * @type {Number}
     */
    pid=undefined   
    /**
     * 类型id
     * @type {Number}
     */
    typeId=undefined   
    /**
     * 类型
     * @type {String}
     */
    typeName=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''
    
}
export class NormInfoDTO {
  
    /**
     *
     * @param {String} createTime 创建时间
     * @param {String} endTime 废止时间
     * @param {Number} id 主键id
     * @param {String} moniker 名称
     * @param {String} number 编号
     * @param {String} sourceType 标准分类
     * @param {String} startTime 启用时间
     * @param {Number} typeId 类型id
     * @param {String} typeName 标准类型
     * @param {String} updateTime 更新时间
     */ 
    constructor(createTime = '',endTime = '',id = undefined,moniker = '',number = '',sourceType = '',startTime = '',typeId = undefined,typeName = '',updateTime = ''){
        this.createTime = createTime
        this.endTime = endTime
        this.id = id
        this.moniker = moniker
        this.number = number
        this.sourceType = sourceType
        this.startTime = startTime
        this.typeId = typeId
        this.typeName = typeName
        this.updateTime = updateTime
    }
       
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 废止时间
     * @type {String}
     */
    endTime=''   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 名称
     * @type {String}
     */
    moniker=''   
    /**
     * 编号
     * @type {String}
     */
    number=''   
    /**
     * 标准分类
     * @type {String}
     */
    sourceType=''   
    /**
     * 启用时间
     * @type {String}
     */
    startTime=''   
    /**
     * 类型id
     * @type {Number}
     */
    typeId=undefined   
    /**
     * 标准类型
     * @type {String}
     */
    typeName=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''
    
}
export class NormItemDTO {
  
    /**
     *
     * @param {String} createTime 创建时间
     * @param {Number} entryId 目录id
     * @param {Number} id 主键id
     * @param {Number} itemId 项目id
     * @param {String} itemName 项目名称
     * @param {String} lower 下限
     * @param {Number} typeId 类型id
     * @param {String} typeName 项目分类
     * @param {String} unitName 单位
     * @param {String} updateTime 更新时间
     * @param {String} upper 上限
     */ 
    constructor(createTime = '',entryId = undefined,id = undefined,itemId = undefined,itemName = '',lower = '',typeId = undefined,typeName = '',unitName = '',updateTime = '',upper = ''){
        this.createTime = createTime
        this.entryId = entryId
        this.id = id
        this.itemId = itemId
        this.itemName = itemName
        this.lower = lower
        this.typeId = typeId
        this.typeName = typeName
        this.unitName = unitName
        this.updateTime = updateTime
        this.upper = upper
    }
       
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 目录id
     * @type {Number}
     */
    entryId=undefined   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 项目id
     * @type {Number}
     */
    itemId=undefined   
    /**
     * 项目名称
     * @type {String}
     */
    itemName=''   
    /**
     * 下限
     * @type {String}
     */
    lower=''   
    /**
     * 类型id
     * @type {Number}
     */
    typeId=undefined   
    /**
     * 项目分类
     * @type {String}
     */
    typeName=''   
    /**
     * 单位
     * @type {String}
     */
    unitName=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''   
    /**
     * 上限
     * @type {String}
     */
    upper=''
    
}
export class NormTreeDTO {
  
    /**
     *
     * @param {Array<NormTreeDTO>} children 子目录对象
     * @param {Number} entryId 条目id
     * @param {String} entryName 名称
     * @param {Number} itemId 项目id
     * @param {String} itemName 项目名称
     * @param {String} itemNumber 项目编号
     * @param {String} lower 下限
     * @param {Number} nodeId 节点id
     * @param {Number} nodePid 节点父id
     * @param {Number} nodeType 类型：0 目录，1 条目
     * @param {Number} unitId 单位id
     * @param {String} unitName 单位名称
     * @param {String} upper 上限
     */ 
    constructor(children = [],entryId = undefined,entryName = '',itemId = undefined,itemName = '',itemNumber = '',lower = '',nodeId = undefined,nodePid = undefined,nodeType = undefined,unitId = undefined,unitName = '',upper = ''){
        this.children = children
        this.entryId = entryId
        this.entryName = entryName
        this.itemId = itemId
        this.itemName = itemName
        this.itemNumber = itemNumber
        this.lower = lower
        this.nodeId = nodeId
        this.nodePid = nodePid
        this.nodeType = nodeType
        this.unitId = unitId
        this.unitName = unitName
        this.upper = upper
    }
       
    /**
     * 子目录对象
     * @type {Array<NormTreeDTO>}
     */
    children=[]   
    /**
     * 条目id
     * @type {Number}
     */
    entryId=undefined   
    /**
     * 名称
     * @type {String}
     */
    entryName=''   
    /**
     * 项目id
     * @type {Number}
     */
    itemId=undefined   
    /**
     * 项目名称
     * @type {String}
     */
    itemName=''   
    /**
     * 项目编号
     * @type {String}
     */
    itemNumber=''   
    /**
     * 下限
     * @type {String}
     */
    lower=''   
    /**
     * 节点id
     * @type {Number}
     */
    nodeId=undefined   
    /**
     * 节点父id
     * @type {Number}
     */
    nodePid=undefined   
    /**
     * 类型：0 目录，1 条目
     * @type {Number}
     */
    nodeType=undefined   
    /**
     * 单位id
     * @type {Number}
     */
    unitId=undefined   
    /**
     * 单位名称
     * @type {String}
     */
    unitName=''   
    /**
     * 上限
     * @type {String}
     */
    upper=''
    
}
export class PersonDTO {
  
    /**
     *
     * @param {String} age 年龄
     * @param {String} birthday 生日
     * @param {String} createTime 创建时间
     * @param {Number} departmentId 部门id
     * @param {String} departmentName 部门
     * @param {Number} id 主键id
     * @param {String} landline 座机
     * @param {String} moniker 姓名
     * @param {Number} occupationId 职位id
     * @param {String} occupationName 职位名称
     * @param {String} phone 手机号
     * @param {String} roomNum 房间号
     * @param {Number} sexId 性别
     * @param {String} sexName 性别
     * @param {String} updateTime 更新时间
     * @param {String} wechat 微信号
     */ 
    constructor(age = '',birthday = '',createTime = '',departmentId = undefined,departmentName = '',id = undefined,landline = '',moniker = '',occupationId = undefined,occupationName = '',phone = '',roomNum = '',sexId = undefined,sexName = '',updateTime = '',wechat = ''){
        this.age = age
        this.birthday = birthday
        this.createTime = createTime
        this.departmentId = departmentId
        this.departmentName = departmentName
        this.id = id
        this.landline = landline
        this.moniker = moniker
        this.occupationId = occupationId
        this.occupationName = occupationName
        this.phone = phone
        this.roomNum = roomNum
        this.sexId = sexId
        this.sexName = sexName
        this.updateTime = updateTime
        this.wechat = wechat
    }
       
    /**
     * 年龄
     * @type {String}
     */
    age=''   
    /**
     * 生日
     * @type {String}
     */
    birthday=''   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 部门id
     * @type {Number}
     */
    departmentId=undefined   
    /**
     * 部门
     * @type {String}
     */
    departmentName=''   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 座机
     * @type {String}
     */
    landline=''   
    /**
     * 姓名
     * @type {String}
     */
    moniker=''   
    /**
     * 职位id
     * @type {Number}
     */
    occupationId=undefined   
    /**
     * 职位名称
     * @type {String}
     */
    occupationName=''   
    /**
     * 手机号
     * @type {String}
     */
    phone=''   
    /**
     * 房间号
     * @type {String}
     */
    roomNum=''   
    /**
     * 性别
     * @type {Number}
     */
    sexId=undefined   
    /**
     * 性别
     * @type {String}
     */
    sexName=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''   
    /**
     * 微信号
     * @type {String}
     */
    wechat=''
    
}
export class PollutionAlarmChartVO {
  
    /**
     *
     * @param {Array<CommonLineValueDTO>} airPollutionList 涉气污染
     * @param {Array<CommonLineValueDTO>} waterPollutionList 涉水污染
     */ 
    constructor(airPollutionList = [],waterPollutionList = []){
        this.airPollutionList = airPollutionList
        this.waterPollutionList = waterPollutionList
    }
       
    /**
     * 涉气污染
     * @type {Array<CommonLineValueDTO>}
     */
    airPollutionList=[]   
    /**
     * 涉水污染
     * @type {Array<CommonLineValueDTO>}
     */
    waterPollutionList=[]
    
}
export class PollutionAlarmListVO {
  
    /**
     *
     * @param {Number} alarmId 报警id
     * @param {String} alarmTime 报警时间
     * @param {String} alarmType 报警类别
     * @param {String} duration 报警时长
     * @param {String} endTime 报警结束时间
     * @param {Number} enterpriseId 点位id
     * @param {String} enterpriseName 点位名称
     * @param {String} exceed 超标倍数
     * @param {Number} itemId 监测因子id
     * @param {String} itemName 监测因子名称
     * @param {String} itemUnit 监测因子单位
     * @param {Number} normValue 监测标准限值
     * @param {Number} stationId 点位id
     * @param {String} stationName 点位名称
     * @param {String} status 处理状态
     * @param {Number} statusId 处理状态id
     * @param {Number} taskId 任务id
     * @param {Number} typeId 监测类型id
     * @param {String} typeName 监测类型名称
     * @param {Number} value 监测数据
     */ 
    constructor(alarmId = undefined,alarmTime = '',alarmType = '',duration = '',endTime = '',enterpriseId = undefined,enterpriseName = '',exceed = '',itemId = undefined,itemName = '',itemUnit = '',normValue = undefined,stationId = undefined,stationName = '',status = '',statusId = undefined,taskId = undefined,typeId = undefined,typeName = '',value = undefined){
        this.alarmId = alarmId
        this.alarmTime = alarmTime
        this.alarmType = alarmType
        this.duration = duration
        this.endTime = endTime
        this.enterpriseId = enterpriseId
        this.enterpriseName = enterpriseName
        this.exceed = exceed
        this.itemId = itemId
        this.itemName = itemName
        this.itemUnit = itemUnit
        this.normValue = normValue
        this.stationId = stationId
        this.stationName = stationName
        this.status = status
        this.statusId = statusId
        this.taskId = taskId
        this.typeId = typeId
        this.typeName = typeName
        this.value = value
    }
       
    /**
     * 报警id
     * @type {Number}
     */
    alarmId=undefined   
    /**
     * 报警时间
     * @type {String}
     */
    alarmTime=''   
    /**
     * 报警类别
     * @type {String}
     */
    alarmType=''   
    /**
     * 报警时长
     * @type {String}
     */
    duration=''   
    /**
     * 报警结束时间
     * @type {String}
     */
    endTime=''   
    /**
     * 点位id
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 点位名称
     * @type {String}
     */
    enterpriseName=''   
    /**
     * 超标倍数
     * @type {String}
     */
    exceed=''   
    /**
     * 监测因子id
     * @type {Number}
     */
    itemId=undefined   
    /**
     * 监测因子名称
     * @type {String}
     */
    itemName=''   
    /**
     * 监测因子单位
     * @type {String}
     */
    itemUnit=''   
    /**
     * 监测标准限值
     * @type {Number}
     */
    normValue=undefined   
    /**
     * 点位id
     * @type {Number}
     */
    stationId=undefined   
    /**
     * 点位名称
     * @type {String}
     */
    stationName=''   
    /**
     * 处理状态
     * @type {String}
     */
    status=''   
    /**
     * 处理状态id
     * @type {Number}
     */
    statusId=undefined   
    /**
     * 任务id
     * @type {Number}
     */
    taskId=undefined   
    /**
     * 监测类型id
     * @type {Number}
     */
    typeId=undefined   
    /**
     * 监测类型名称
     * @type {String}
     */
    typeName=''   
    /**
     * 监测数据
     * @type {Number}
     */
    value=undefined
    
}
export class PollutionCalendarDTO {
  
    /**
     *
     * @param {String} itemKey 监测因子编号
     * @param {String} itemName 监测因子名称
     * @param {String} timeSlot 时间片段
     * @param {String} value 对应数据
     * @param {Number} waterFunctionId 水质类别编号
     * @param {String} waterFunctionName 水质类别名称
     */ 
    constructor(itemKey = '',itemName = '',timeSlot = '',value = '',waterFunctionId = undefined,waterFunctionName = ''){
        this.itemKey = itemKey
        this.itemName = itemName
        this.timeSlot = timeSlot
        this.value = value
        this.waterFunctionId = waterFunctionId
        this.waterFunctionName = waterFunctionName
    }
       
    /**
     * 监测因子编号
     * @type {String}
     */
    itemKey=''   
    /**
     * 监测因子名称
     * @type {String}
     */
    itemName=''   
    /**
     * 时间片段
     * @type {String}
     */
    timeSlot=''   
    /**
     * 对应数据
     * @type {String}
     */
    value=''   
    /**
     * 水质类别编号
     * @type {Number}
     */
    waterFunctionId=undefined   
    /**
     * 水质类别名称
     * @type {String}
     */
    waterFunctionName=''
    
}
export class PollutionEnterpriseListVO {
  
    /**
     *
     * @param {Number} enterpriseId 污染源企业id
     * @param {String} enterpriseName 污染源名称
     * @param {String} industryCategory 行业类别
     */ 
    constructor(enterpriseId = undefined,enterpriseName = '',industryCategory = ''){
        this.enterpriseId = enterpriseId
        this.enterpriseName = enterpriseName
        this.industryCategory = industryCategory
    }
       
    /**
     * 污染源企业id
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 污染源名称
     * @type {String}
     */
    enterpriseName=''   
    /**
     * 行业类别
     * @type {String}
     */
    industryCategory=''
    
}
export class PollutionMonitorVO {
  
    /**
     *
     * @param {Number} airAlarm 废气实时报警排口数
     * @param {Number} airOnline 废气在线数
     * @param {String} airPercent 废气在线监测率
     * @param {Number} pollutionAir 废气排口总数
     * @param {Number} pollutionRain 雨水排口总数
     * @param {Number} pollutionWater 废水排口总数
     * @param {Number} rainAlarm 雨水实时报警排口数
     * @param {Number} rainOnline 雨水在线数
     * @param {String} rainPercent 雨水在线监测率
     * @param {Number} waterAlarm 废水实时报警排口数
     * @param {Number} waterOnline 废水在线数
     * @param {String} waterPercent 废水在线监测率
     */ 
    constructor(airAlarm = undefined,airOnline = undefined,airPercent = '',pollutionAir = undefined,pollutionRain = undefined,pollutionWater = undefined,rainAlarm = undefined,rainOnline = undefined,rainPercent = '',waterAlarm = undefined,waterOnline = undefined,waterPercent = ''){
        this.airAlarm = airAlarm
        this.airOnline = airOnline
        this.airPercent = airPercent
        this.pollutionAir = pollutionAir
        this.pollutionRain = pollutionRain
        this.pollutionWater = pollutionWater
        this.rainAlarm = rainAlarm
        this.rainOnline = rainOnline
        this.rainPercent = rainPercent
        this.waterAlarm = waterAlarm
        this.waterOnline = waterOnline
        this.waterPercent = waterPercent
    }
       
    /**
     * 废气实时报警排口数
     * @type {Number}
     */
    airAlarm=undefined   
    /**
     * 废气在线数
     * @type {Number}
     */
    airOnline=undefined   
    /**
     * 废气在线监测率
     * @type {String}
     */
    airPercent=''   
    /**
     * 废气排口总数
     * @type {Number}
     */
    pollutionAir=undefined   
    /**
     * 雨水排口总数
     * @type {Number}
     */
    pollutionRain=undefined   
    /**
     * 废水排口总数
     * @type {Number}
     */
    pollutionWater=undefined   
    /**
     * 雨水实时报警排口数
     * @type {Number}
     */
    rainAlarm=undefined   
    /**
     * 雨水在线数
     * @type {Number}
     */
    rainOnline=undefined   
    /**
     * 雨水在线监测率
     * @type {String}
     */
    rainPercent=''   
    /**
     * 废水实时报警排口数
     * @type {Number}
     */
    waterAlarm=undefined   
    /**
     * 废水在线数
     * @type {Number}
     */
    waterOnline=undefined   
    /**
     * 废水在线监测率
     * @type {String}
     */
    waterPercent=''
    
}
export class PollutionStatisticsVO {
  
    /**
     *
     * @param {Number} airPollute 废气污染源数
     * @param {Number} keyEnterprise 重点监管企业数
     * @param {Number} licenseNum 排污许可证发放数
     * @param {Number} totalPollute 污染源总数
     * @param {Number} waterPollute 废水污染源数
     */ 
    constructor(airPollute = undefined,keyEnterprise = undefined,licenseNum = undefined,totalPollute = undefined,waterPollute = undefined){
        this.airPollute = airPollute
        this.keyEnterprise = keyEnterprise
        this.licenseNum = licenseNum
        this.totalPollute = totalPollute
        this.waterPollute = waterPollute
    }
       
    /**
     * 废气污染源数
     * @type {Number}
     */
    airPollute=undefined   
    /**
     * 重点监管企业数
     * @type {Number}
     */
    keyEnterprise=undefined   
    /**
     * 排污许可证发放数
     * @type {Number}
     */
    licenseNum=undefined   
    /**
     * 污染源总数
     * @type {Number}
     */
    totalPollute=undefined   
    /**
     * 废水污染源数
     * @type {Number}
     */
    waterPollute=undefined
    
}
export class RegistDTO {
  
    /**
     *
     * @param {String} access 密码
     * @param {String} account 账号
     * @param {String} enterpriseName 企业名称
     * @param {String} moniker 用户姓名
     * @param {String} phone 手机号
     * @param {String} socialCredit 信用代码
     */ 
    constructor(access = '',account = '',enterpriseName = '',moniker = '',phone = '',socialCredit = ''){
        this.access = access
        this.account = account
        this.enterpriseName = enterpriseName
        this.moniker = moniker
        this.phone = phone
        this.socialCredit = socialCredit
    }
       
    /**
     * 密码
     * @type {String}
     */
    access=''   
    /**
     * 账号
     * @type {String}
     */
    account=''   
    /**
     * 企业名称
     * @type {String}
     */
    enterpriseName=''   
    /**
     * 用户姓名
     * @type {String}
     */
    moniker=''   
    /**
     * 手机号
     * @type {String}
     */
    phone=''   
    /**
     * 信用代码
     * @type {String}
     */
    socialCredit=''
    
}
export class ReportDataVO {
  
    /**
     *
     * @param {String} timeSlot 时间
     * @param {Array} values 
     */ 
    constructor(timeSlot = '',values = []){
        this.timeSlot = timeSlot
        this.values = values
    }
       
    /**
     * 时间
     * @type {String}
     */
    timeSlot=''   
    /**
     * 
     * @type {Array}
     */
    values=[]
    
}
export class ResetPwd {
  
    /**
     *
     * @param {String} newPassward1 新密码
     * @param {String} newPassward2 确认密码
     * @param {String} oldPassward 原密码
     * @param {Number} userId 用户Id
     */ 
    constructor(newPassward1 = '',newPassward2 = '',oldPassward = '',userId = undefined){
        this.newPassward1 = newPassward1
        this.newPassward2 = newPassward2
        this.oldPassward = oldPassward
        this.userId = userId
    }
       
    /**
     * 新密码
     * @type {String}
     */
    newPassward1=''   
    /**
     * 确认密码
     * @type {String}
     */
    newPassward2=''   
    /**
     * 原密码
     * @type {String}
     */
    oldPassward=''   
    /**
     * 用户Id
     * @type {Number}
     */
    userId=undefined
    
}
export class ResponseDataAccidentBaseDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {AccidentBaseDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {AccidentBaseDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataAccidentCountDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {AccidentCountDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {AccidentCountDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataAlarmListVO {
  
    /**
     *
     * @param {Number} code 
     * @param {AlarmListVO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {AlarmListVO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataAlarmStatisticsVO {
  
    /**
     *
     * @param {Number} code 
     * @param {AlarmStatisticsVO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {AlarmStatisticsVO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataAlarmStatusVO {
  
    /**
     *
     * @param {Number} code 
     * @param {AlarmStatusVO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {AlarmStatusVO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataAppLoginDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {AppLoginDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {AppLoginDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataCaptchaDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {CaptchaDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {CaptchaDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataDepartmentDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {DepartmentDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {DepartmentDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataEnterpriseBaseDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {EnterpriseBaseDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {EnterpriseBaseDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataEnterpriseByproDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {EnterpriseByproDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {EnterpriseByproDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataEnterpriseCompletionDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {EnterpriseCompletionDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {EnterpriseCompletionDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataEnterpriseDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {EnterpriseDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {EnterpriseDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataEnterpriseDetailDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {EnterpriseDetailDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {EnterpriseDetailDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataEnterpriseEnergyDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {EnterpriseEnergyDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {EnterpriseEnergyDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataEnterpriseGovernGasDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {EnterpriseGovernGasDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {EnterpriseGovernGasDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataEnterpriseGovernWaterDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {EnterpriseGovernWaterDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {EnterpriseGovernWaterDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataEnterpriseInfoDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {EnterpriseInfoDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {EnterpriseInfoDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataEnterpriseLicenseSewageDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {EnterpriseLicenseSewageDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {EnterpriseLicenseSewageDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataEnterpriseLicenseWasteDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {EnterpriseLicenseWasteDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {EnterpriseLicenseWasteDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataEnterpriseMainproDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {EnterpriseMainproDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {EnterpriseMainproDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataEnterpriseMaterialRawDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {EnterpriseMaterialRawDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {EnterpriseMaterialRawDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataEnterpriseMaterialUseDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {EnterpriseMaterialUseDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {EnterpriseMaterialUseDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataEnterprisePlaneDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {EnterprisePlaneDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {EnterprisePlaneDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataEnterprisePointDetailsVO {
  
    /**
     *
     * @param {Number} code 
     * @param {EnterprisePointDetailsVO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {EnterprisePointDetailsVO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataEnterpriseProductDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {EnterpriseProductDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {EnterpriseProductDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataEnterpriseRiskBaseDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {EnterpriseRiskBaseDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {EnterpriseRiskBaseDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataEnterpriseRiskFacilityDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {EnterpriseRiskFacilityDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {EnterpriseRiskFacilityDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataEnterpriseRiskPersonDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {EnterpriseRiskPersonDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {EnterpriseRiskPersonDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataEnterpriseRiskPlaceDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {EnterpriseRiskPlaceDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {EnterpriseRiskPlaceDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataEnterpriseRiskSupplyDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {EnterpriseRiskSupplyDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {EnterpriseRiskSupplyDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataEnterpriseRiskUnitDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {EnterpriseRiskUnitDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {EnterpriseRiskUnitDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataEnterpriseStationDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {EnterpriseStationDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {EnterpriseStationDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataEnterpriseStationItemDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {EnterpriseStationItemDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {EnterpriseStationItemDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataEnterpriseWasteTransferDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {EnterpriseWasteTransferDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {EnterpriseWasteTransferDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataEnterpriseWaterDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {EnterpriseWaterDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {EnterpriseWaterDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataExpertDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {ExpertDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {ExpertDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataFileDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {FileDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {FileDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataInformationDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {InformationDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {InformationDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataInstrumentDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {InstrumentDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {InstrumentDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataItemBaseDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {ItemBaseDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {ItemBaseDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataListCommonAxisVO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<CommonAxisVO>} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = [],message = '',success = false){
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
     * @type {Array<CommonAxisVO>}
     */
    data=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataListCommonVO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<CommonVO>} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = [],message = '',success = false){
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
     * @type {Array<CommonVO>}
     */
    data=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataListCommonY1AxisVO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<CommonY1AxisVO>} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = [],message = '',success = false){
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
     * @type {Array<CommonY1AxisVO>}
     */
    data=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataListFrontSpinner {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<FrontSpinner>} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = [],message = '',success = false){
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
     * @type {Array<FrontSpinner>}
     */
    data=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataListMonitorItemVO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<MonitorItemVO>} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = [],message = '',success = false){
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
     * @type {Array<MonitorItemVO>}
     */
    data=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataListPollutionCalendarDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<PollutionCalendarDTO>} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = [],message = '',success = false){
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
     * @type {Array<PollutionCalendarDTO>}
     */
    data=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataListTmgmtStation {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<TmgmtStation>} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = [],message = '',success = false){
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
     * @type {Array<TmgmtStation>}
     */
    data=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataListWaterMonitoringAlarmRankingDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<WaterMonitoringAlarmRankingDTO>} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = [],message = '',success = false){
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
     * @type {Array<WaterMonitoringAlarmRankingDTO>}
     */
    data=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataLocateDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {LocateDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {LocateDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataLoginDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {LoginDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {LoginDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataMsdsBaseDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {MsdsBaseDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {MsdsBaseDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataMsdsInfoDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {MsdsInfoDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {MsdsInfoDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataNormEntryDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {NormEntryDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {NormEntryDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataNormItemDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {NormItemDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {NormItemDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataPersonDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {PersonDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {PersonDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataPollutionAlarmChartVO {
  
    /**
     *
     * @param {Number} code 
     * @param {PollutionAlarmChartVO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {PollutionAlarmChartVO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataPollutionAlarmListVO {
  
    /**
     *
     * @param {Number} code 
     * @param {PollutionAlarmListVO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {PollutionAlarmListVO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataPollutionMonitorVO {
  
    /**
     *
     * @param {Number} code 
     * @param {PollutionMonitorVO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {PollutionMonitorVO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataPollutionStatisticsVO {
  
    /**
     *
     * @param {Number} code 
     * @param {PollutionStatisticsVO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {PollutionStatisticsVO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataRiskMaterialDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {RiskMaterialDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {RiskMaterialDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataSensitiveDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {SensitiveDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {SensitiveDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataSpreadDataDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {SpreadDataDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {SpreadDataDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataSpreadListDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {SpreadListDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {SpreadListDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataStationDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {StationDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {StationDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataStationItemDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {StationItemDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {StationItemDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataTaskDetailsVO {
  
    /**
     *
     * @param {Number} code 
     * @param {TaskDetailsVO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {TaskDetailsVO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataTdictEmergPlan {
  
    /**
     *
     * @param {Number} code 
     * @param {TdictEmergPlan} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {TdictEmergPlan}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataTeamDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {TeamDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {TeamDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataTeamFacilityDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {TeamFacilityDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {TeamFacilityDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataTmgmtEnterpriseInfo {
  
    /**
     *
     * @param {Number} code 
     * @param {TmgmtEnterpriseInfo} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {TmgmtEnterpriseInfo}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataTmgmtStation {
  
    /**
     *
     * @param {Number} code 
     * @param {TmgmtStation} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {TmgmtStation}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataUserDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {UserDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {UserDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataWaterCompareDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {WaterCompareDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {WaterCompareDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataWaterMonitoringDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {WaterMonitoringDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {WaterMonitoringDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataWaterQualityDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {WaterQualityDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {WaterQualityDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataWaterStationRealDetailDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {WaterStationRealDetailDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {WaterStationRealDetailDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataWorkplaceDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {WorkplaceDTO} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = undefined,message = '',success = false){
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
     * @type {WorkplaceDTO}
     */
    data=undefined   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDataobject {
  
    /**
     *
     * @param {Number} code 
     * @param {undefined} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = {},message = '',success = false){
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
     * @type {undefined}
     */
    data={}   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseDatastring {
  
    /**
     *
     * @param {Number} code 
     * @param {String} data 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,data = '',message = '',success = false){
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
     * @type {String}
     */
    data=''   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseListCommonAxisVO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<CommonAxisVO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,list = [],message = '',success = false){
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
     * @type {Array<CommonAxisVO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseListContrastDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<ContrastDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,list = [],message = '',success = false){
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
     * @type {Array<ContrastDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseListEnterpriseInfoDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<EnterpriseInfoDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,list = [],message = '',success = false){
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
     * @type {Array<EnterpriseInfoDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseListEnterpriseMapVO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<EnterpriseMapVO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,list = [],message = '',success = false){
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
     * @type {Array<EnterpriseMapVO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseListEnterpriseStationItemDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<EnterpriseStationItemDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,list = [],message = '',success = false){
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
     * @type {Array<EnterpriseStationItemDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseListFactorListVO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<FactorListVO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,list = [],message = '',success = false){
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
     * @type {Array<FactorListVO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseListFrontSpinner {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<FrontSpinner>} list 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,list = [],message = '',success = false){
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
     * @type {Array<FrontSpinner>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseListGeneralDictVO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<GeneralDictVO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,list = [],message = '',success = false){
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
     * @type {Array<GeneralDictVO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseListHistoryDataVO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<HistoryDataVO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,list = [],message = '',success = false){
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
     * @type {Array<HistoryDataVO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseListIndustryDistributionVO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<IndustryDistributionVO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,list = [],message = '',success = false){
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
     * @type {Array<IndustryDistributionVO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseListItemBaseDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<ItemBaseDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,list = [],message = '',success = false){
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
     * @type {Array<ItemBaseDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseListListFrontSpinner {
  
    /**
     *
     * @param {Number} code 
     * @param {Array} list 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,list = [],message = '',success = false){
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
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseListNormTreeDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<NormTreeDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,list = [],message = '',success = false){
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
     * @type {Array<NormTreeDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseListPollutionEnterpriseListVO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<PollutionEnterpriseListVO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,list = [],message = '',success = false){
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
     * @type {Array<PollutionEnterpriseListVO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseListReportDataVO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<ReportDataVO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,list = [],message = '',success = false){
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
     * @type {Array<ReportDataVO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseListStaffMenuVO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<StaffMenuVO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,list = [],message = '',success = false){
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
     * @type {Array<StaffMenuVO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseListStationDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<StationDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,list = [],message = '',success = false){
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
     * @type {Array<StationDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseListStationItemDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<StationItemDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,list = [],message = '',success = false){
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
     * @type {Array<StationItemDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseListStationModelDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<StationModelDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,list = [],message = '',success = false){
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
     * @type {Array<StationModelDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseListTMgmtEnterpriseItemLimit {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<TMgmtEnterpriseItemLimit>} list 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,list = [],message = '',success = false){
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
     * @type {Array<TMgmtEnterpriseItemLimit>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseListTmgmtPerson {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<TmgmtPerson>} list 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,list = [],message = '',success = false){
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
     * @type {Array<TmgmtPerson>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseListTmgmtStation {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<TmgmtStation>} list 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,list = [],message = '',success = false){
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
     * @type {Array<TmgmtStation>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponseListTreeDictDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<TreeDictDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,list = [],message = '',success = false){
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
     * @type {Array<TreeDictDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class ResponsePageAccidentBaseDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<AccidentBaseDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<AccidentBaseDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageAlarmListVO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<AlarmListVO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<AlarmListVO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageAlarmSettingListVO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<AlarmSettingListVO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<AlarmSettingListVO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageAppTaskListVO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<AppTaskListVO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<AppTaskListVO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageDepartmentDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<DepartmentDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<DepartmentDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageDictInfoDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<DictInfoDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<DictInfoDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageEnterpriseByproDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<EnterpriseByproDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<EnterpriseByproDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageEnterpriseEnergyDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<EnterpriseEnergyDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<EnterpriseEnergyDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageEnterpriseGovernGasDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<EnterpriseGovernGasDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<EnterpriseGovernGasDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageEnterpriseGovernWaterDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<EnterpriseGovernWaterDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<EnterpriseGovernWaterDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageEnterpriseLicenseSewageDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<EnterpriseLicenseSewageDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<EnterpriseLicenseSewageDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageEnterpriseLicenseWasteDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<EnterpriseLicenseWasteDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<EnterpriseLicenseWasteDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageEnterpriseMainproDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<EnterpriseMainproDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<EnterpriseMainproDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageEnterpriseMaterialRawDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<EnterpriseMaterialRawDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<EnterpriseMaterialRawDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageEnterpriseMaterialUseDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<EnterpriseMaterialUseDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<EnterpriseMaterialUseDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageEnterprisePageDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<EnterprisePageDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<EnterprisePageDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageEnterpriseProductDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<EnterpriseProductDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<EnterpriseProductDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageEnterpriseRiskExpertDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<EnterpriseRiskExpertDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<EnterpriseRiskExpertDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageEnterpriseRiskFacilityDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<EnterpriseRiskFacilityDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<EnterpriseRiskFacilityDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageEnterpriseRiskPersonDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<EnterpriseRiskPersonDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<EnterpriseRiskPersonDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageEnterpriseRiskPlaceDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<EnterpriseRiskPlaceDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<EnterpriseRiskPlaceDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageEnterpriseRiskSupplyDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<EnterpriseRiskSupplyDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<EnterpriseRiskSupplyDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageEnterpriseRiskTeamDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<EnterpriseRiskTeamDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<EnterpriseRiskTeamDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageEnterpriseRiskUnitDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<EnterpriseRiskUnitDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<EnterpriseRiskUnitDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageEnterpriseSensitiveDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<EnterpriseSensitiveDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<EnterpriseSensitiveDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageEnterpriseStationDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<EnterpriseStationDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<EnterpriseStationDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageEnterpriseWasteTransferDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<EnterpriseWasteTransferDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<EnterpriseWasteTransferDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageEnterpriseWaterDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<EnterpriseWaterDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<EnterpriseWaterDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageExpertDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<ExpertDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<ExpertDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageHistoryDataVO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<HistoryDataVO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<HistoryDataVO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageInstrumentDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<InstrumentDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<InstrumentDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageItemBaseDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<ItemBaseDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<ItemBaseDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageMsdsBaseDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<MsdsBaseDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<MsdsBaseDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageNormInfoDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<NormInfoDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<NormInfoDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePagePersonDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<PersonDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<PersonDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePagePollutionAlarmListVO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<PollutionAlarmListVO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<PollutionAlarmListVO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageReportDataVO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<ReportDataVO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<ReportDataVO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageRiskMaterialDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<RiskMaterialDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<RiskMaterialDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageSensitiveDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<SensitiveDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<SensitiveDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageStationDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<StationDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<StationDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageStationModelDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<StationModelDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<StationModelDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageTdictEmergPlan {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<TdictEmergPlan>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<TdictEmergPlan>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageTeamDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<TeamDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<TeamDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageTeamFacilityDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<TeamFacilityDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<TeamFacilityDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageUserDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<UserDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<UserDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
    /**
     * 
     * @type {Number}
     */
    total=undefined
    
}
export class ResponsePageWorkplaceDTO {
  
    /**
     *
     * @param {Number} code 
     * @param {Array<WorkplaceDTO>} list 
     * @param {String} message 
     * @param {Boolean} success 
     * @param {Number} total 
     */ 
    constructor(code = undefined,list = [],message = '',success = false,total = undefined){
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
     * @type {Array<WorkplaceDTO>}
     */
    list=[]   
    /**
     * 
     * @type {String}
     */
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false   
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
     * @param {Boolean} success 
     */ 
    constructor(code = undefined,message = '',success = false){
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
    message=''   
    /**
     * 
     * @type {Boolean}
     */
    success=false
    
}
export class RiskMaterialDTO {
  
    /**
     *
     * @param {String} casCode CAS码
     * @param {String} createTime 创建时间
     * @param {String} criticalValue 临界量（吨）
     * @param {Number} id 主键id
     * @param {String} moniker 名称
     * @param {String} typeName 类型
     * @param {String} updateTime 更新时间
     * @param {String} waterCombi 突发事件案例以及遇水反应生成的物质
     */ 
    constructor(casCode = '',createTime = '',criticalValue = '',id = undefined,moniker = '',typeName = '',updateTime = '',waterCombi = ''){
        this.casCode = casCode
        this.createTime = createTime
        this.criticalValue = criticalValue
        this.id = id
        this.moniker = moniker
        this.typeName = typeName
        this.updateTime = updateTime
        this.waterCombi = waterCombi
    }
       
    /**
     * CAS码
     * @type {String}
     */
    casCode=''   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 临界量（吨）
     * @type {String}
     */
    criticalValue=''   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 名称
     * @type {String}
     */
    moniker=''   
    /**
     * 类型
     * @type {String}
     */
    typeName=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''   
    /**
     * 突发事件案例以及遇水反应生成的物质
     * @type {String}
     */
    waterCombi=''
    
}
export class SensitiveDTO {
  
    /**
     *
     * @param {String} contactPerson 联系人姓名
     * @param {String} contactPhone 联系人电话
     * @param {String} createTime 创建时间
     * @param {String} floorSpace 面积
     * @param {Number} id 主键id
     * @param {String} latitude 纬度
     * @param {String} location 地址
     * @param {String} longitude 经度
     * @param {String} moniker 名称
     * @param {Number} staffSize 人口数
     * @param {Number} subTypeId 功能区类别id
     * @param {String} subTypeName 功能区类别
     * @param {Number} typeId 类型id
     * @param {String} typeName 类型
     * @param {String} updateTime 更新时间
     */ 
    constructor(contactPerson = '',contactPhone = '',createTime = '',floorSpace = '',id = undefined,latitude = '',location = '',longitude = '',moniker = '',staffSize = undefined,subTypeId = undefined,subTypeName = '',typeId = undefined,typeName = '',updateTime = ''){
        this.contactPerson = contactPerson
        this.contactPhone = contactPhone
        this.createTime = createTime
        this.floorSpace = floorSpace
        this.id = id
        this.latitude = latitude
        this.location = location
        this.longitude = longitude
        this.moniker = moniker
        this.staffSize = staffSize
        this.subTypeId = subTypeId
        this.subTypeName = subTypeName
        this.typeId = typeId
        this.typeName = typeName
        this.updateTime = updateTime
    }
       
    /**
     * 联系人姓名
     * @type {String}
     */
    contactPerson=''   
    /**
     * 联系人电话
     * @type {String}
     */
    contactPhone=''   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 面积
     * @type {String}
     */
    floorSpace=''   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 纬度
     * @type {String}
     */
    latitude=''   
    /**
     * 地址
     * @type {String}
     */
    location=''   
    /**
     * 经度
     * @type {String}
     */
    longitude=''   
    /**
     * 名称
     * @type {String}
     */
    moniker=''   
    /**
     * 人口数
     * @type {Number}
     */
    staffSize=undefined   
    /**
     * 功能区类别id
     * @type {Number}
     */
    subTypeId=undefined   
    /**
     * 功能区类别
     * @type {String}
     */
    subTypeName=''   
    /**
     * 类型id
     * @type {Number}
     */
    typeId=undefined   
    /**
     * 类型
     * @type {String}
     */
    typeName=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''
    
}
export class SpreadDataDTO {
  
    /**
     *
     * @param {String} distance 
     * @param {String} value 
     */ 
    constructor(distance = '',value = ''){
        this.distance = distance
        this.value = value
    }
       
    /**
     * 
     * @type {String}
     */
    distance=''   
    /**
     * 
     * @type {String}
     */
    value=''
    
}
export class SpreadInfoDTO {
  
    /**
     *
     * @param {Number} level 
     * @param {Array} list 
     */ 
    constructor(level = undefined,list = []){
        this.level = level
        this.list = list
    }
       
    /**
     * 
     * @type {Number}
     */
    level=undefined   
    /**
     * 
     * @type {Array}
     */
    list=[]
    
}
export class SpreadListDTO {
  
    /**
     *
     * @param {Number} latitude 
     * @param {Array} list 
     * @param {Number} longitude 
     */ 
    constructor(latitude = undefined,list = [],longitude = undefined){
        this.latitude = latitude
        this.list = list
        this.longitude = longitude
    }
       
    /**
     * 
     * @type {Number}
     */
    latitude=undefined   
    /**
     * 
     * @type {Array}
     */
    list=[]   
    /**
     * 
     * @type {Number}
     */
    longitude=undefined
    
}
export class StaffMenuVO {
  
    /**
     *
     * @param {Number} departmentId 部门id
     * @param {String} deptName 部门名称
     * @param {Number} id 主键id
     * @param {String} moniker 姓名
     * @param {String} phone 手机号
     * @param {Number} userId 用户id
     */ 
    constructor(departmentId = undefined,deptName = '',id = undefined,moniker = '',phone = '',userId = undefined){
        this.departmentId = departmentId
        this.deptName = deptName
        this.id = id
        this.moniker = moniker
        this.phone = phone
        this.userId = userId
    }
       
    /**
     * 部门id
     * @type {Number}
     */
    departmentId=undefined   
    /**
     * 部门名称
     * @type {String}
     */
    deptName=''   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 姓名
     * @type {String}
     */
    moniker=''   
    /**
     * 手机号
     * @type {String}
     */
    phone=''   
    /**
     * 用户id
     * @type {Number}
     */
    userId=undefined
    
}
export class StationDTO {
  
    /**
     *
     * @param {String} buildDate 建设时间
     * @param {String} createTime 创建时间
     * @param {String} deviceManufacturer 设备厂商
     * @param {String} deviceNum 设备编号
     * @param {String} districtCode 行政区
     * @param {String} districtName 行政区
     * @param {Array<FileDTO>} fileList 图片列表
     * @param {Number} id 主键id
     * @param {String} itemName 监测项目
     * @param {String} latitude 纬度
     * @param {String} location 安装地址
     * @param {String} longitude 经度
     * @param {Number} monitorTypeId 监测类型id
     * @param {String} monitorTypeName 监测类型
     * @param {Boolean} onlineFlag 是否在线
     * @param {String} stationName 点位名称
     * @param {String} stationNum 点位编号
     * @param {Number} stationTypeId 站点类型id
     * @param {String} stationTypeName 站点类型
     * @param {String} updateTime 更新时间
     * @param {String} waterAreaName 水域名称
     * @param {Number} waterFunctionId 水域功能id
     * @param {String} waterFunctionName 水域功能
     * @param {Number} waterTypeId 水体类型id
     * @param {String} waterTypeName 水体类型
     */ 
    constructor(buildDate = '',createTime = '',deviceManufacturer = '',deviceNum = '',districtCode = '',districtName = '',fileList = [],id = undefined,itemName = '',latitude = '',location = '',longitude = '',monitorTypeId = undefined,monitorTypeName = '',onlineFlag = false,stationName = '',stationNum = '',stationTypeId = undefined,stationTypeName = '',updateTime = '',waterAreaName = '',waterFunctionId = undefined,waterFunctionName = '',waterTypeId = undefined,waterTypeName = ''){
        this.buildDate = buildDate
        this.createTime = createTime
        this.deviceManufacturer = deviceManufacturer
        this.deviceNum = deviceNum
        this.districtCode = districtCode
        this.districtName = districtName
        this.fileList = fileList
        this.id = id
        this.itemName = itemName
        this.latitude = latitude
        this.location = location
        this.longitude = longitude
        this.monitorTypeId = monitorTypeId
        this.monitorTypeName = monitorTypeName
        this.onlineFlag = onlineFlag
        this.stationName = stationName
        this.stationNum = stationNum
        this.stationTypeId = stationTypeId
        this.stationTypeName = stationTypeName
        this.updateTime = updateTime
        this.waterAreaName = waterAreaName
        this.waterFunctionId = waterFunctionId
        this.waterFunctionName = waterFunctionName
        this.waterTypeId = waterTypeId
        this.waterTypeName = waterTypeName
    }
       
    /**
     * 建设时间
     * @type {String}
     */
    buildDate=''   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 设备厂商
     * @type {String}
     */
    deviceManufacturer=''   
    /**
     * 设备编号
     * @type {String}
     */
    deviceNum=''   
    /**
     * 行政区
     * @type {String}
     */
    districtCode=''   
    /**
     * 行政区
     * @type {String}
     */
    districtName=''   
    /**
     * 图片列表
     * @type {Array<FileDTO>}
     */
    fileList=[]   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 监测项目
     * @type {String}
     */
    itemName=''   
    /**
     * 纬度
     * @type {String}
     */
    latitude=''   
    /**
     * 安装地址
     * @type {String}
     */
    location=''   
    /**
     * 经度
     * @type {String}
     */
    longitude=''   
    /**
     * 监测类型id
     * @type {Number}
     */
    monitorTypeId=undefined   
    /**
     * 监测类型
     * @type {String}
     */
    monitorTypeName=''   
    /**
     * 是否在线
     * @type {Boolean}
     */
    onlineFlag=false   
    /**
     * 点位名称
     * @type {String}
     */
    stationName=''   
    /**
     * 点位编号
     * @type {String}
     */
    stationNum=''   
    /**
     * 站点类型id
     * @type {Number}
     */
    stationTypeId=undefined   
    /**
     * 站点类型
     * @type {String}
     */
    stationTypeName=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''   
    /**
     * 水域名称
     * @type {String}
     */
    waterAreaName=''   
    /**
     * 水域功能id
     * @type {Number}
     */
    waterFunctionId=undefined   
    /**
     * 水域功能
     * @type {String}
     */
    waterFunctionName=''   
    /**
     * 水体类型id
     * @type {Number}
     */
    waterTypeId=undefined   
    /**
     * 水体类型
     * @type {String}
     */
    waterTypeName=''
    
}
export class StationItemDTO {
  
    /**
     *
     * @param {String} casCode CAS号
     * @param {String} createTime 创建时间
     * @param {String} emissionLimit 浓度限值
     * @param {Number} id 主键id
     * @param {Number} itemId 项目id
     * @param {String} itemKey 项目key
     * @param {String} itemName 项目名称
     * @param {Number} normId 排放标准id
     * @param {Number} normItemId 排放项目id
     * @param {String} normItemName 排放项目
     * @param {String} normName 排放标准
     * @param {String} speedLimit 速率限值
     * @param {Number} stationId 点位id
     * @param {String} symbols 化学符号
     * @param {Number} typeId 类型id
     * @param {String} typeName 类型
     * @param {Number} unitId 限值单位id
     * @param {String} unitName 限值单位
     * @param {String} updateTime 更新时间
     */ 
    constructor(casCode = '',createTime = '',emissionLimit = '',id = undefined,itemId = undefined,itemKey = '',itemName = '',normId = undefined,normItemId = undefined,normItemName = '',normName = '',speedLimit = '',stationId = undefined,symbols = '',typeId = undefined,typeName = '',unitId = undefined,unitName = '',updateTime = ''){
        this.casCode = casCode
        this.createTime = createTime
        this.emissionLimit = emissionLimit
        this.id = id
        this.itemId = itemId
        this.itemKey = itemKey
        this.itemName = itemName
        this.normId = normId
        this.normItemId = normItemId
        this.normItemName = normItemName
        this.normName = normName
        this.speedLimit = speedLimit
        this.stationId = stationId
        this.symbols = symbols
        this.typeId = typeId
        this.typeName = typeName
        this.unitId = unitId
        this.unitName = unitName
        this.updateTime = updateTime
    }
       
    /**
     * CAS号
     * @type {String}
     */
    casCode=''   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 浓度限值
     * @type {String}
     */
    emissionLimit=''   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 项目id
     * @type {Number}
     */
    itemId=undefined   
    /**
     * 项目key
     * @type {String}
     */
    itemKey=''   
    /**
     * 项目名称
     * @type {String}
     */
    itemName=''   
    /**
     * 排放标准id
     * @type {Number}
     */
    normId=undefined   
    /**
     * 排放项目id
     * @type {Number}
     */
    normItemId=undefined   
    /**
     * 排放项目
     * @type {String}
     */
    normItemName=''   
    /**
     * 排放标准
     * @type {String}
     */
    normName=''   
    /**
     * 速率限值
     * @type {String}
     */
    speedLimit=''   
    /**
     * 点位id
     * @type {Number}
     */
    stationId=undefined   
    /**
     * 化学符号
     * @type {String}
     */
    symbols=''   
    /**
     * 类型id
     * @type {Number}
     */
    typeId=undefined   
    /**
     * 类型
     * @type {String}
     */
    typeName=''   
    /**
     * 限值单位id
     * @type {Number}
     */
    unitId=undefined   
    /**
     * 限值单位
     * @type {String}
     */
    unitName=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''
    
}
export class StationModelDTO {
  
    /**
     *
     * @param {String} createTime 创建时间
     * @param {Number} id 主键id
     * @param {Number} itemId 项目id
     * @param {String} itemKey 项目key
     * @param {String} itemName 项目名称
     * @param {String} moniker 模板名称
     * @param {Number} normId 排放标准id
     * @param {Number} normItemId 排放项目id
     * @param {Number} pid 类型id
     * @param {Number} typeId 类型id
     * @param {String} typeName 类型
     * @param {Number} unitId 项目单位id
     * @param {String} unitName 单位
     * @param {String} updateTime 更新时间
     */ 
    constructor(createTime = '',id = undefined,itemId = undefined,itemKey = '',itemName = '',moniker = '',normId = undefined,normItemId = undefined,pid = undefined,typeId = undefined,typeName = '',unitId = undefined,unitName = '',updateTime = ''){
        this.createTime = createTime
        this.id = id
        this.itemId = itemId
        this.itemKey = itemKey
        this.itemName = itemName
        this.moniker = moniker
        this.normId = normId
        this.normItemId = normItemId
        this.pid = pid
        this.typeId = typeId
        this.typeName = typeName
        this.unitId = unitId
        this.unitName = unitName
        this.updateTime = updateTime
    }
       
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 项目id
     * @type {Number}
     */
    itemId=undefined   
    /**
     * 项目key
     * @type {String}
     */
    itemKey=''   
    /**
     * 项目名称
     * @type {String}
     */
    itemName=''   
    /**
     * 模板名称
     * @type {String}
     */
    moniker=''   
    /**
     * 排放标准id
     * @type {Number}
     */
    normId=undefined   
    /**
     * 排放项目id
     * @type {Number}
     */
    normItemId=undefined   
    /**
     * 类型id
     * @type {Number}
     */
    pid=undefined   
    /**
     * 类型id
     * @type {Number}
     */
    typeId=undefined   
    /**
     * 类型
     * @type {String}
     */
    typeName=''   
    /**
     * 项目单位id
     * @type {Number}
     */
    unitId=undefined   
    /**
     * 单位
     * @type {String}
     */
    unitName=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''
    
}
export class StationValueDTO {
  
    /**
     *
     * @param {Boolean} alarmFlag 报警标志
     * @param {String} dataTime 数据时间
     * @param {Array<ItemValueDTO>} itemInfo 监测因子信息
     * @param {Boolean} onlineFlag 在线标志
     * @param {Number} stationId 点位Id
     * @param {String} stationName 点位名称
     */ 
    constructor(alarmFlag = false,dataTime = '',itemInfo = [],onlineFlag = false,stationId = undefined,stationName = ''){
        this.alarmFlag = alarmFlag
        this.dataTime = dataTime
        this.itemInfo = itemInfo
        this.onlineFlag = onlineFlag
        this.stationId = stationId
        this.stationName = stationName
    }
       
    /**
     * 报警标志
     * @type {Boolean}
     */
    alarmFlag=false   
    /**
     * 数据时间
     * @type {String}
     */
    dataTime=''   
    /**
     * 监测因子信息
     * @type {Array<ItemValueDTO>}
     */
    itemInfo=[]   
    /**
     * 在线标志
     * @type {Boolean}
     */
    onlineFlag=false   
    /**
     * 点位Id
     * @type {Number}
     */
    stationId=undefined   
    /**
     * 点位名称
     * @type {String}
     */
    stationName=''
    
}
export class TMgmtAlarmTask {
  
    /**
     *
     * @param {Number} alarmId 报警id
     * @param {String} checkConclusion 审核意见
     * @param {String} createTime 创建时间
     * @param {Boolean} deleteFlag 是否删除
     * @param {String} dueDate 完成任务截止时间
     * @param {Number} id 主键id
     * @param {Number} staffId 负责人id
     * @param {String} taskContent 任务要求
     * @param {String} taskName 任务名称
     * @param {String} updateTime 更新时间
     */ 
    constructor(alarmId = undefined,checkConclusion = '',createTime = '',deleteFlag = false,dueDate = '',id = undefined,staffId = undefined,taskContent = '',taskName = '',updateTime = ''){
        this.alarmId = alarmId
        this.checkConclusion = checkConclusion
        this.createTime = createTime
        this.deleteFlag = deleteFlag
        this.dueDate = dueDate
        this.id = id
        this.staffId = staffId
        this.taskContent = taskContent
        this.taskName = taskName
        this.updateTime = updateTime
    }
       
    /**
     * 报警id
     * @type {Number}
     */
    alarmId=undefined   
    /**
     * 审核意见
     * @type {String}
     */
    checkConclusion=''   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 是否删除
     * @type {Boolean}
     */
    deleteFlag=false   
    /**
     * 完成任务截止时间
     * @type {String}
     */
    dueDate=''   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 负责人id
     * @type {Number}
     */
    staffId=undefined   
    /**
     * 任务要求
     * @type {String}
     */
    taskContent=''   
    /**
     * 任务名称
     * @type {String}
     */
    taskName=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''
    
}
export class TMgmtEnterpriseItemLimit {
  
    /**
     *
     * @param {String} createTime 创建时间
     * @param {Boolean} deleteFlag 是否删除
     * @param {Number} id 主键id
     * @param {Number} itemId 监测因子id
     * @param {String} itemName 监测因子名称
     * @param {Number} lowerLimit 限值下限
     * @param {Number} speedLimit 速率限值
     * @param {Number} speedUnitId 速率限值单位id
     * @param {String} speedUnitName 速率限值单位名称
     * @param {Number} typeId 类型id
     * @param {String} typeName 类型名称
     * @param {Number} unitId 单位id
     * @param {String} unitName 单位名称
     * @param {String} updateTime 更新时间
     * @param {Number} upperLimit 限值上限
     */ 
    constructor(createTime = '',deleteFlag = false,id = undefined,itemId = undefined,itemName = '',lowerLimit = undefined,speedLimit = undefined,speedUnitId = undefined,speedUnitName = '',typeId = undefined,typeName = '',unitId = undefined,unitName = '',updateTime = '',upperLimit = undefined){
        this.createTime = createTime
        this.deleteFlag = deleteFlag
        this.id = id
        this.itemId = itemId
        this.itemName = itemName
        this.lowerLimit = lowerLimit
        this.speedLimit = speedLimit
        this.speedUnitId = speedUnitId
        this.speedUnitName = speedUnitName
        this.typeId = typeId
        this.typeName = typeName
        this.unitId = unitId
        this.unitName = unitName
        this.updateTime = updateTime
        this.upperLimit = upperLimit
    }
       
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 是否删除
     * @type {Boolean}
     */
    deleteFlag=false   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 监测因子id
     * @type {Number}
     */
    itemId=undefined   
    /**
     * 监测因子名称
     * @type {String}
     */
    itemName=''   
    /**
     * 限值下限
     * @type {Number}
     */
    lowerLimit=undefined   
    /**
     * 速率限值
     * @type {Number}
     */
    speedLimit=undefined   
    /**
     * 速率限值单位id
     * @type {Number}
     */
    speedUnitId=undefined   
    /**
     * 速率限值单位名称
     * @type {String}
     */
    speedUnitName=''   
    /**
     * 类型id
     * @type {Number}
     */
    typeId=undefined   
    /**
     * 类型名称
     * @type {String}
     */
    typeName=''   
    /**
     * 单位id
     * @type {Number}
     */
    unitId=undefined   
    /**
     * 单位名称
     * @type {String}
     */
    unitName=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''   
    /**
     * 限值上限
     * @type {Number}
     */
    upperLimit=undefined
    
}
export class TMgmtPollutionAlarmTask {
  
    /**
     *
     * @param {Number} alarmId 报警id
     * @param {String} checkConclusion 审核意见
     * @param {String} createTime 创建时间
     * @param {Boolean} deleteFlag 是否删除
     * @param {String} dueDate 完成任务截止时间
     * @param {Number} id 主键id
     * @param {Number} staffId 负责人id
     * @param {String} taskContent 任务要求
     * @param {String} taskName 任务名称
     * @param {Number} typeId 监测类型id
     * @param {String} updateTime 更新时间
     */ 
    constructor(alarmId = undefined,checkConclusion = '',createTime = '',deleteFlag = false,dueDate = '',id = undefined,staffId = undefined,taskContent = '',taskName = '',typeId = undefined,updateTime = ''){
        this.alarmId = alarmId
        this.checkConclusion = checkConclusion
        this.createTime = createTime
        this.deleteFlag = deleteFlag
        this.dueDate = dueDate
        this.id = id
        this.staffId = staffId
        this.taskContent = taskContent
        this.taskName = taskName
        this.typeId = typeId
        this.updateTime = updateTime
    }
       
    /**
     * 报警id
     * @type {Number}
     */
    alarmId=undefined   
    /**
     * 审核意见
     * @type {String}
     */
    checkConclusion=''   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 是否删除
     * @type {Boolean}
     */
    deleteFlag=false   
    /**
     * 完成任务截止时间
     * @type {String}
     */
    dueDate=''   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 负责人id
     * @type {Number}
     */
    staffId=undefined   
    /**
     * 任务要求
     * @type {String}
     */
    taskContent=''   
    /**
     * 任务名称
     * @type {String}
     */
    taskName=''   
    /**
     * 监测类型id
     * @type {Number}
     */
    typeId=undefined   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''
    
}
export class TaskDetailsVO {
  
    /**
     *
     * @param {Number} alarmId 报警id
     * @param {String} alarmTime 报警时间
     * @param {String} alarmType 报警类别
     * @param {String} checkConclusion 审核意见
     * @param {Array<CheckDetailsVO>} checkDetailList 
     * @param {String} dueDate 核查时限
     * @param {String} duration 报警时长
     * @param {String} exceed 超标倍数
     * @param {Number} itemId 监测因子id
     * @param {String} itemName 监测因子名称
     * @param {String} itemUnit 监测因子单位
     * @param {Number} normValue 监测标准限值
     * @param {String} staffName 派发人员姓名
     * @param {String} stationName 点位名称
     * @param {String} taskContent 任务要求
     * @param {Number} taskId 任务id
     * @param {Number} typeId 监测类型id
     * @param {Number} value 监测数据
     */ 
    constructor(alarmId = undefined,alarmTime = '',alarmType = '',checkConclusion = '',checkDetailList = [],dueDate = '',duration = '',exceed = '',itemId = undefined,itemName = '',itemUnit = '',normValue = undefined,staffName = '',stationName = '',taskContent = '',taskId = undefined,typeId = undefined,value = undefined){
        this.alarmId = alarmId
        this.alarmTime = alarmTime
        this.alarmType = alarmType
        this.checkConclusion = checkConclusion
        this.checkDetailList = checkDetailList
        this.dueDate = dueDate
        this.duration = duration
        this.exceed = exceed
        this.itemId = itemId
        this.itemName = itemName
        this.itemUnit = itemUnit
        this.normValue = normValue
        this.staffName = staffName
        this.stationName = stationName
        this.taskContent = taskContent
        this.taskId = taskId
        this.typeId = typeId
        this.value = value
    }
       
    /**
     * 报警id
     * @type {Number}
     */
    alarmId=undefined   
    /**
     * 报警时间
     * @type {String}
     */
    alarmTime=''   
    /**
     * 报警类别
     * @type {String}
     */
    alarmType=''   
    /**
     * 审核意见
     * @type {String}
     */
    checkConclusion=''   
    /**
     * 
     * @type {Array<CheckDetailsVO>}
     */
    checkDetailList=[]   
    /**
     * 核查时限
     * @type {String}
     */
    dueDate=''   
    /**
     * 报警时长
     * @type {String}
     */
    duration=''   
    /**
     * 超标倍数
     * @type {String}
     */
    exceed=''   
    /**
     * 监测因子id
     * @type {Number}
     */
    itemId=undefined   
    /**
     * 监测因子名称
     * @type {String}
     */
    itemName=''   
    /**
     * 监测因子单位
     * @type {String}
     */
    itemUnit=''   
    /**
     * 监测标准限值
     * @type {Number}
     */
    normValue=undefined   
    /**
     * 派发人员姓名
     * @type {String}
     */
    staffName=''   
    /**
     * 点位名称
     * @type {String}
     */
    stationName=''   
    /**
     * 任务要求
     * @type {String}
     */
    taskContent=''   
    /**
     * 任务id
     * @type {Number}
     */
    taskId=undefined   
    /**
     * 监测类型id
     * @type {Number}
     */
    typeId=undefined   
    /**
     * 监测数据
     * @type {Number}
     */
    value=undefined
    
}
export class TdictEmergPlan {
  
    /**
     *
     * @param {String} casCode CAS号
     * @param {String} cnName 中文名称
     * @param {String} createTime 创建时间
     * @param {Boolean} deleteFlag 是否删除
     * @param {String} emergTreatment 急救措施
     * @param {String} enName 英文名称
     * @param {String} evacuation 疏散要求
     * @param {String} featureDetail 化学特性
     * @param {String} featureProfile 特性摘要
     * @param {String} fireDisaster 火灾处理
     * @param {String} healthHazard 健康危害
     * @param {Number} id 主键id
     * @param {String} personalProtection 个体保护
     * @param {String} publicHazard 公共危害
     * @param {String} revealDispose 泄露处理
     * @param {String} updateTime 更新时间
     */ 
    constructor(casCode = '',cnName = '',createTime = '',deleteFlag = false,emergTreatment = '',enName = '',evacuation = '',featureDetail = '',featureProfile = '',fireDisaster = '',healthHazard = '',id = undefined,personalProtection = '',publicHazard = '',revealDispose = '',updateTime = ''){
        this.casCode = casCode
        this.cnName = cnName
        this.createTime = createTime
        this.deleteFlag = deleteFlag
        this.emergTreatment = emergTreatment
        this.enName = enName
        this.evacuation = evacuation
        this.featureDetail = featureDetail
        this.featureProfile = featureProfile
        this.fireDisaster = fireDisaster
        this.healthHazard = healthHazard
        this.id = id
        this.personalProtection = personalProtection
        this.publicHazard = publicHazard
        this.revealDispose = revealDispose
        this.updateTime = updateTime
    }
       
    /**
     * CAS号
     * @type {String}
     */
    casCode=''   
    /**
     * 中文名称
     * @type {String}
     */
    cnName=''   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 是否删除
     * @type {Boolean}
     */
    deleteFlag=false   
    /**
     * 急救措施
     * @type {String}
     */
    emergTreatment=''   
    /**
     * 英文名称
     * @type {String}
     */
    enName=''   
    /**
     * 疏散要求
     * @type {String}
     */
    evacuation=''   
    /**
     * 化学特性
     * @type {String}
     */
    featureDetail=''   
    /**
     * 特性摘要
     * @type {String}
     */
    featureProfile=''   
    /**
     * 火灾处理
     * @type {String}
     */
    fireDisaster=''   
    /**
     * 健康危害
     * @type {String}
     */
    healthHazard=''   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 个体保护
     * @type {String}
     */
    personalProtection=''   
    /**
     * 公共危害
     * @type {String}
     */
    publicHazard=''   
    /**
     * 泄露处理
     * @type {String}
     */
    revealDispose=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''
    
}
export class TeamDTO {
  
    /**
     *
     * @param {String} buildDate 成立时间
     * @param {String} contactPerson 负责人姓名
     * @param {String} contactPhone 负责人电话
     * @param {String} createTime 创建时间
     * @param {Number} enterpriseId 企业id
     * @param {Number} id 主键id
     * @param {String} latitude 纬度
     * @param {String} location 所在位置
     * @param {String} longitude 经度
     * @param {Number} mateCount 专业人数
     * @param {String} moniker 姓名
     * @param {Number} typeId 队伍类型id
     * @param {String} typeName 队伍类型
     * @param {String} updateTime 更新时间
     */ 
    constructor(buildDate = '',contactPerson = '',contactPhone = '',createTime = '',enterpriseId = undefined,id = undefined,latitude = '',location = '',longitude = '',mateCount = undefined,moniker = '',typeId = undefined,typeName = '',updateTime = ''){
        this.buildDate = buildDate
        this.contactPerson = contactPerson
        this.contactPhone = contactPhone
        this.createTime = createTime
        this.enterpriseId = enterpriseId
        this.id = id
        this.latitude = latitude
        this.location = location
        this.longitude = longitude
        this.mateCount = mateCount
        this.moniker = moniker
        this.typeId = typeId
        this.typeName = typeName
        this.updateTime = updateTime
    }
       
    /**
     * 成立时间
     * @type {String}
     */
    buildDate=''   
    /**
     * 负责人姓名
     * @type {String}
     */
    contactPerson=''   
    /**
     * 负责人电话
     * @type {String}
     */
    contactPhone=''   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 企业id
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 纬度
     * @type {String}
     */
    latitude=''   
    /**
     * 所在位置
     * @type {String}
     */
    location=''   
    /**
     * 经度
     * @type {String}
     */
    longitude=''   
    /**
     * 专业人数
     * @type {Number}
     */
    mateCount=undefined   
    /**
     * 姓名
     * @type {String}
     */
    moniker=''   
    /**
     * 队伍类型id
     * @type {Number}
     */
    typeId=undefined   
    /**
     * 队伍类型
     * @type {String}
     */
    typeName=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''
    
}
export class TeamFacilityDTO {
  
    /**
     *
     * @param {String} contactPerson 联系人
     * @param {String} contactPhone 联系电话
     * @param {String} createTime 创建时间
     * @param {Number} enterpriseId 企业id
     * @param {Number} id 主键id
     * @param {String} latitude 纬度
     * @param {String} location 详细地址
     * @param {String} longitude 经度
     * @param {String} mainUsage 性能/用途
     * @param {String} model 型号
     * @param {String} moniker 名称
     * @param {String} purchaseDate 购置日期
     * @param {Number} quantity 储备量
     * @param {String} remark 备注
     * @param {String} specification 规格
     * @param {Number} typeId 类别id
     * @param {String} typeName 类别
     * @param {String} unit 单位
     * @param {String} updateTime 更新时间
     */ 
    constructor(contactPerson = '',contactPhone = '',createTime = '',enterpriseId = undefined,id = undefined,latitude = '',location = '',longitude = '',mainUsage = '',model = '',moniker = '',purchaseDate = '',quantity = undefined,remark = '',specification = '',typeId = undefined,typeName = '',unit = '',updateTime = ''){
        this.contactPerson = contactPerson
        this.contactPhone = contactPhone
        this.createTime = createTime
        this.enterpriseId = enterpriseId
        this.id = id
        this.latitude = latitude
        this.location = location
        this.longitude = longitude
        this.mainUsage = mainUsage
        this.model = model
        this.moniker = moniker
        this.purchaseDate = purchaseDate
        this.quantity = quantity
        this.remark = remark
        this.specification = specification
        this.typeId = typeId
        this.typeName = typeName
        this.unit = unit
        this.updateTime = updateTime
    }
       
    /**
     * 联系人
     * @type {String}
     */
    contactPerson=''   
    /**
     * 联系电话
     * @type {String}
     */
    contactPhone=''   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 企业id
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 纬度
     * @type {String}
     */
    latitude=''   
    /**
     * 详细地址
     * @type {String}
     */
    location=''   
    /**
     * 经度
     * @type {String}
     */
    longitude=''   
    /**
     * 性能/用途
     * @type {String}
     */
    mainUsage=''   
    /**
     * 型号
     * @type {String}
     */
    model=''   
    /**
     * 名称
     * @type {String}
     */
    moniker=''   
    /**
     * 购置日期
     * @type {String}
     */
    purchaseDate=''   
    /**
     * 储备量
     * @type {Number}
     */
    quantity=undefined   
    /**
     * 备注
     * @type {String}
     */
    remark=''   
    /**
     * 规格
     * @type {String}
     */
    specification=''   
    /**
     * 类别id
     * @type {Number}
     */
    typeId=undefined   
    /**
     * 类别
     * @type {String}
     */
    typeName=''   
    /**
     * 单位
     * @type {String}
     */
    unit=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''
    
}
export class TmgmtEnterpriseInfo {
  
    /**
     *
     * @param {Number} categoryId 企业类别id
     * @param {Boolean} commitFlag 是否提交
     * @param {String} contactPerson 环保负责人
     * @param {String} contactPhone 环保负责人电话
     * @param {String} createTime 创建时间
     * @param {Boolean} deleteFlag 是否删除
     * @param {String} districtCode 行政区
     * @param {String} districtName 行政区
     * @param {String} emphasisType 重点监管企业类别
     * @param {Number} enterpriseId 企业id
     * @param {String} fixedAssets 固定资产（万元）
     * @param {String} floorArea 总建筑面积（平方米）
     * @param {String} formerName 曾用名
     * @param {Number} gasCount 废气排口数量
     * @param {Number} id 主键id
     * @param {Boolean} ifEmphasis 是否是重点监管企业
     * @param {Number} industryId 行业类别id
     * @param {String} industryName 行业类别
     * @param {String} latitude 纬度
     * @param {String} legalPerson 法人
     * @param {String} legalPersonPhone 电话
     * @param {String} location 地址
     * @param {String} longitude 经度
     * @param {String} openTime 开业时间
     * @param {Number} rainCount 雨水排口数量
     * @param {Number} regTypeId 登记注册类型id
     * @param {Number} riskTypeId 风险源类别id
     * @param {Number} scaleId 企业规模id
     * @param {Number} staffCount 职工总数
     * @param {String} updateTime 更新时间
     * @param {Number} waterCount 废水排口数量
     */ 
    constructor(categoryId = undefined,commitFlag = false,contactPerson = '',contactPhone = '',createTime = '',deleteFlag = false,districtCode = '',districtName = '',emphasisType = '',enterpriseId = undefined,fixedAssets = '',floorArea = '',formerName = '',gasCount = undefined,id = undefined,ifEmphasis = false,industryId = undefined,industryName = '',latitude = '',legalPerson = '',legalPersonPhone = '',location = '',longitude = '',openTime = '',rainCount = undefined,regTypeId = undefined,riskTypeId = undefined,scaleId = undefined,staffCount = undefined,updateTime = '',waterCount = undefined){
        this.categoryId = categoryId
        this.commitFlag = commitFlag
        this.contactPerson = contactPerson
        this.contactPhone = contactPhone
        this.createTime = createTime
        this.deleteFlag = deleteFlag
        this.districtCode = districtCode
        this.districtName = districtName
        this.emphasisType = emphasisType
        this.enterpriseId = enterpriseId
        this.fixedAssets = fixedAssets
        this.floorArea = floorArea
        this.formerName = formerName
        this.gasCount = gasCount
        this.id = id
        this.ifEmphasis = ifEmphasis
        this.industryId = industryId
        this.industryName = industryName
        this.latitude = latitude
        this.legalPerson = legalPerson
        this.legalPersonPhone = legalPersonPhone
        this.location = location
        this.longitude = longitude
        this.openTime = openTime
        this.rainCount = rainCount
        this.regTypeId = regTypeId
        this.riskTypeId = riskTypeId
        this.scaleId = scaleId
        this.staffCount = staffCount
        this.updateTime = updateTime
        this.waterCount = waterCount
    }
       
    /**
     * 企业类别id
     * @type {Number}
     */
    categoryId=undefined   
    /**
     * 是否提交
     * @type {Boolean}
     */
    commitFlag=false   
    /**
     * 环保负责人
     * @type {String}
     */
    contactPerson=''   
    /**
     * 环保负责人电话
     * @type {String}
     */
    contactPhone=''   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 是否删除
     * @type {Boolean}
     */
    deleteFlag=false   
    /**
     * 行政区
     * @type {String}
     */
    districtCode=''   
    /**
     * 行政区
     * @type {String}
     */
    districtName=''   
    /**
     * 重点监管企业类别
     * @type {String}
     */
    emphasisType=''   
    /**
     * 企业id
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 固定资产（万元）
     * @type {String}
     */
    fixedAssets=''   
    /**
     * 总建筑面积（平方米）
     * @type {String}
     */
    floorArea=''   
    /**
     * 曾用名
     * @type {String}
     */
    formerName=''   
    /**
     * 废气排口数量
     * @type {Number}
     */
    gasCount=undefined   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 是否是重点监管企业
     * @type {Boolean}
     */
    ifEmphasis=false   
    /**
     * 行业类别id
     * @type {Number}
     */
    industryId=undefined   
    /**
     * 行业类别
     * @type {String}
     */
    industryName=''   
    /**
     * 纬度
     * @type {String}
     */
    latitude=''   
    /**
     * 法人
     * @type {String}
     */
    legalPerson=''   
    /**
     * 电话
     * @type {String}
     */
    legalPersonPhone=''   
    /**
     * 地址
     * @type {String}
     */
    location=''   
    /**
     * 经度
     * @type {String}
     */
    longitude=''   
    /**
     * 开业时间
     * @type {String}
     */
    openTime=''   
    /**
     * 雨水排口数量
     * @type {Number}
     */
    rainCount=undefined   
    /**
     * 登记注册类型id
     * @type {Number}
     */
    regTypeId=undefined   
    /**
     * 风险源类别id
     * @type {Number}
     */
    riskTypeId=undefined   
    /**
     * 企业规模id
     * @type {Number}
     */
    scaleId=undefined   
    /**
     * 职工总数
     * @type {Number}
     */
    staffCount=undefined   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''   
    /**
     * 废水排口数量
     * @type {Number}
     */
    waterCount=undefined
    
}
export class TmgmtPerson {
  
    /**
     *
     * @param {String} birthday 生日
     * @param {String} createTime 创建时间
     * @param {Boolean} deleteFlag 是否删除
     * @param {Number} departmentId 部门id
     * @param {Number} id 主键id
     * @param {String} landline 座机
     * @param {String} moniker 姓名
     * @param {Number} occupationId 职位id
     * @param {String} phone 手机号
     * @param {String} roomNum 房间号
     * @param {Number} sexId 性别
     * @param {String} updateTime 更新时间
     * @param {String} wechat 微信号
     */ 
    constructor(birthday = '',createTime = '',deleteFlag = false,departmentId = undefined,id = undefined,landline = '',moniker = '',occupationId = undefined,phone = '',roomNum = '',sexId = undefined,updateTime = '',wechat = ''){
        this.birthday = birthday
        this.createTime = createTime
        this.deleteFlag = deleteFlag
        this.departmentId = departmentId
        this.id = id
        this.landline = landline
        this.moniker = moniker
        this.occupationId = occupationId
        this.phone = phone
        this.roomNum = roomNum
        this.sexId = sexId
        this.updateTime = updateTime
        this.wechat = wechat
    }
       
    /**
     * 生日
     * @type {String}
     */
    birthday=''   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 是否删除
     * @type {Boolean}
     */
    deleteFlag=false   
    /**
     * 部门id
     * @type {Number}
     */
    departmentId=undefined   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 座机
     * @type {String}
     */
    landline=''   
    /**
     * 姓名
     * @type {String}
     */
    moniker=''   
    /**
     * 职位id
     * @type {Number}
     */
    occupationId=undefined   
    /**
     * 手机号
     * @type {String}
     */
    phone=''   
    /**
     * 房间号
     * @type {String}
     */
    roomNum=''   
    /**
     * 性别
     * @type {Number}
     */
    sexId=undefined   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''   
    /**
     * 微信号
     * @type {String}
     */
    wechat=''
    
}
export class TmgmtStation {
  
    /**
     *
     * @param {Boolean} alarmFlag 是否报警
     * @param {String} buildDate 建设时间
     * @param {String} createTime 创建时间
     * @param {Boolean} deleteFlag 是否删除
     * @param {String} deviceManufacturer 设备厂商
     * @param {String} deviceNum 设备编号
     * @param {String} districtCode 行政区
     * @param {String} districtName 行政区
     * @param {Number} id 主键id
     * @param {String} lastDateTime 最新一条数据的时间
     * @param {Number} lastRecordId 最新一条数据的id
     * @param {String} latitude 纬度
     * @param {String} location 安装地址
     * @param {String} longitude 经度
     * @param {Number} monitorTypeId 监测类型id
     * @param {Boolean} onlineFlag 是否在线
     * @param {String} pictureFile 
     * @param {String} stationName 点位名称
     * @param {String} stationNum 点位编号
     * @param {Number} stationTypeId 站点类型id
     * @param {String} updateTime 更新时间
     * @param {String} waterAreaName 水域名称
     * @param {Number} waterFunctionId 水域功能id
     * @param {Number} waterTypeId 水体类型id
     */ 
    constructor(alarmFlag = false,buildDate = '',createTime = '',deleteFlag = false,deviceManufacturer = '',deviceNum = '',districtCode = '',districtName = '',id = undefined,lastDateTime = '',lastRecordId = undefined,latitude = '',location = '',longitude = '',monitorTypeId = undefined,onlineFlag = false,pictureFile = '',stationName = '',stationNum = '',stationTypeId = undefined,updateTime = '',waterAreaName = '',waterFunctionId = undefined,waterTypeId = undefined){
        this.alarmFlag = alarmFlag
        this.buildDate = buildDate
        this.createTime = createTime
        this.deleteFlag = deleteFlag
        this.deviceManufacturer = deviceManufacturer
        this.deviceNum = deviceNum
        this.districtCode = districtCode
        this.districtName = districtName
        this.id = id
        this.lastDateTime = lastDateTime
        this.lastRecordId = lastRecordId
        this.latitude = latitude
        this.location = location
        this.longitude = longitude
        this.monitorTypeId = monitorTypeId
        this.onlineFlag = onlineFlag
        this.pictureFile = pictureFile
        this.stationName = stationName
        this.stationNum = stationNum
        this.stationTypeId = stationTypeId
        this.updateTime = updateTime
        this.waterAreaName = waterAreaName
        this.waterFunctionId = waterFunctionId
        this.waterTypeId = waterTypeId
    }
       
    /**
     * 是否报警
     * @type {Boolean}
     */
    alarmFlag=false   
    /**
     * 建设时间
     * @type {String}
     */
    buildDate=''   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 是否删除
     * @type {Boolean}
     */
    deleteFlag=false   
    /**
     * 设备厂商
     * @type {String}
     */
    deviceManufacturer=''   
    /**
     * 设备编号
     * @type {String}
     */
    deviceNum=''   
    /**
     * 行政区
     * @type {String}
     */
    districtCode=''   
    /**
     * 行政区
     * @type {String}
     */
    districtName=''   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 最新一条数据的时间
     * @type {String}
     */
    lastDateTime=''   
    /**
     * 最新一条数据的id
     * @type {Number}
     */
    lastRecordId=undefined   
    /**
     * 纬度
     * @type {String}
     */
    latitude=''   
    /**
     * 安装地址
     * @type {String}
     */
    location=''   
    /**
     * 经度
     * @type {String}
     */
    longitude=''   
    /**
     * 监测类型id
     * @type {Number}
     */
    monitorTypeId=undefined   
    /**
     * 是否在线
     * @type {Boolean}
     */
    onlineFlag=false   
    /**
     * 
     * @type {String}
     */
    pictureFile=''   
    /**
     * 点位名称
     * @type {String}
     */
    stationName=''   
    /**
     * 点位编号
     * @type {String}
     */
    stationNum=''   
    /**
     * 站点类型id
     * @type {Number}
     */
    stationTypeId=undefined   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''   
    /**
     * 水域名称
     * @type {String}
     */
    waterAreaName=''   
    /**
     * 水域功能id
     * @type {Number}
     */
    waterFunctionId=undefined   
    /**
     * 水体类型id
     * @type {Number}
     */
    waterTypeId=undefined
    
}
export class TreeDictDTO {
  
    /**
     *
     * @param {Array<TreeDictDTO>} children 
     * @param {Number} id 
     * @param {String} moniker 
     * @param {Number} pid 
     */ 
    constructor(children = [],id = undefined,moniker = '',pid = undefined){
        this.children = children
        this.id = id
        this.moniker = moniker
        this.pid = pid
    }
       
    /**
     * 
     * @type {Array<TreeDictDTO>}
     */
    children=[]   
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    moniker=''   
    /**
     * 
     * @type {Number}
     */
    pid=undefined
    
}
export class UserDTO {
  
    /**
     *
     * @param {String} access 密码
     * @param {String} account 账号
     * @param {String} createTime 创建时间
     * @param {String} email 邮箱
     * @param {Boolean} enterpriseFlag 
     * @param {Number} enterpriseId 
     * @param {String} enterpriseName 
     * @param {Boolean} griderFlag 
     * @param {Number} id 主键id
     * @param {String} lastLoginTime 最近登陆时间
     * @param {Boolean} managerFlag 
     * @param {String} moniker 用户姓名
     * @param {Boolean} operatorFlag 
     * @param {Number} personId 
     * @param {String} phone 电话
     * @param {String} updateTime 更新时间
     * @param {String} wechat 微信
     */ 
    constructor(access = '',account = '',createTime = '',email = '',enterpriseFlag = false,enterpriseId = undefined,enterpriseName = '',griderFlag = false,id = undefined,lastLoginTime = '',managerFlag = false,moniker = '',operatorFlag = false,personId = undefined,phone = '',updateTime = '',wechat = ''){
        this.access = access
        this.account = account
        this.createTime = createTime
        this.email = email
        this.enterpriseFlag = enterpriseFlag
        this.enterpriseId = enterpriseId
        this.enterpriseName = enterpriseName
        this.griderFlag = griderFlag
        this.id = id
        this.lastLoginTime = lastLoginTime
        this.managerFlag = managerFlag
        this.moniker = moniker
        this.operatorFlag = operatorFlag
        this.personId = personId
        this.phone = phone
        this.updateTime = updateTime
        this.wechat = wechat
    }
       
    /**
     * 密码
     * @type {String}
     */
    access=''   
    /**
     * 账号
     * @type {String}
     */
    account=''   
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 邮箱
     * @type {String}
     */
    email=''   
    /**
     * 
     * @type {Boolean}
     */
    enterpriseFlag=false   
    /**
     * 
     * @type {Number}
     */
    enterpriseId=undefined   
    /**
     * 
     * @type {String}
     */
    enterpriseName=''   
    /**
     * 
     * @type {Boolean}
     */
    griderFlag=false   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 最近登陆时间
     * @type {String}
     */
    lastLoginTime=''   
    /**
     * 
     * @type {Boolean}
     */
    managerFlag=false   
    /**
     * 用户姓名
     * @type {String}
     */
    moniker=''   
    /**
     * 
     * @type {Boolean}
     */
    operatorFlag=false   
    /**
     * 
     * @type {Number}
     */
    personId=undefined   
    /**
     * 电话
     * @type {String}
     */
    phone=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''   
    /**
     * 微信
     * @type {String}
     */
    wechat=''
    
}
export class WaterCompareDTO {
  
    /**
     *
     * @param {Array} axisList 水质对比趋势图数据
     * @param {Array} compareInfoList 水质中各项对比数据
     * @param {Number} compareInfoTotal 水质中各项对比数据
     */ 
    constructor(axisList = [],compareInfoList = [],compareInfoTotal = undefined){
        this.axisList = axisList
        this.compareInfoList = compareInfoList
        this.compareInfoTotal = compareInfoTotal
    }
       
    /**
     * 水质对比趋势图数据
     * @type {Array}
     */
    axisList=[]   
    /**
     * 水质中各项对比数据
     * @type {Array}
     */
    compareInfoList=[]   
    /**
     * 水质中各项对比数据
     * @type {Number}
     */
    compareInfoTotal=undefined
    
}
export class WaterCompareInfoDTO {
  
    /**
     *
     * @param {Array<MonitorItemVO>} monitorItemAList 
     * @param {String} stationName 点位名称
     * @param {String} timeSlot 时间片段
     * @param {Number} waterFunctionId 水域功能ID
     * @param {String} waterFunctionName 水域功能ID
     */ 
    constructor(monitorItemAList = [],stationName = '',timeSlot = '',waterFunctionId = undefined,waterFunctionName = ''){
        this.monitorItemAList = monitorItemAList
        this.stationName = stationName
        this.timeSlot = timeSlot
        this.waterFunctionId = waterFunctionId
        this.waterFunctionName = waterFunctionName
    }
       
    /**
     * 
     * @type {Array<MonitorItemVO>}
     */
    monitorItemAList=[]   
    /**
     * 点位名称
     * @type {String}
     */
    stationName=''   
    /**
     * 时间片段
     * @type {String}
     */
    timeSlot=''   
    /**
     * 水域功能ID
     * @type {Number}
     */
    waterFunctionId=undefined   
    /**
     * 水域功能ID
     * @type {String}
     */
    waterFunctionName=''
    
}
export class WaterCompareTendencyInfoDTO {
  
    /**
     *
     * @param {String} stationName 点位名称
     * @param {String} x X轴坐标
     * @param {String} y Y轴坐标
     * @param {String} y1 Y1轴坐标
     */ 
    constructor(stationName = '',x = '',y = '',y1 = ''){
        this.stationName = stationName
        this.x = x
        this.y = y
        this.y1 = y1
    }
       
    /**
     * 点位名称
     * @type {String}
     */
    stationName=''   
    /**
     * X轴坐标
     * @type {String}
     */
    x=''   
    /**
     * Y轴坐标
     * @type {String}
     */
    y=''   
    /**
     * Y1轴坐标
     * @type {String}
     */
    y1=''
    
}
export class WaterMonitoringAlarmRankingDTO {
  
    /**
     *
     * @param {Number} overStandardRateCount 超标次数
     * @param {String} stationName 点位名称
     */ 
    constructor(overStandardRateCount = undefined,stationName = ''){
        this.overStandardRateCount = overStandardRateCount
        this.stationName = stationName
    }
       
    /**
     * 超标次数
     * @type {Number}
     */
    overStandardRateCount=undefined   
    /**
     * 点位名称
     * @type {String}
     */
    stationName=''
    
}
export class WaterMonitoringDTO {
  
    /**
     *
     * @param {String} dataTime 数据上报时间
     * @param {String} overStandardRate 超标率
     * @param {Number} overStandardRateCount 超标点位数
     * @param {Array<WaterStationListDTO>} stationList 点位列表
     * @param {Number} totalCount 排污口总数
     */ 
    constructor(dataTime = '',overStandardRate = '',overStandardRateCount = undefined,stationList = [],totalCount = undefined){
        this.dataTime = dataTime
        this.overStandardRate = overStandardRate
        this.overStandardRateCount = overStandardRateCount
        this.stationList = stationList
        this.totalCount = totalCount
    }
       
    /**
     * 数据上报时间
     * @type {String}
     */
    dataTime=''   
    /**
     * 超标率
     * @type {String}
     */
    overStandardRate=''   
    /**
     * 超标点位数
     * @type {Number}
     */
    overStandardRateCount=undefined   
    /**
     * 点位列表
     * @type {Array<WaterStationListDTO>}
     */
    stationList=[]   
    /**
     * 排污口总数
     * @type {Number}
     */
    totalCount=undefined
    
}
export class WaterQualityDTO {
  
    /**
     *
     * @param {String} createTime 创建时间
     * @param {String} dataTime 数据上报时间
     * @param {Number} id 主键id
     * @param {String} overStandardRate 超标率
     * @param {Array} primaryPollutantList 主要污染物
     * @param {Array<WaterStationListDTO>} stationList 点位列表
     * @param {undefined} stationsStatus 站点分类
     * @param {Number} totalCount 水质监测站总数
     * @param {String} updateTime 更新时间
     * @param {Number} waterFunctionId 水域功能ID
     * @param {String} waterFunctionName 水域功能名称
     * @param {Number} waterStatus 水质状况ID
     * @param {String} waterStatusName 水质状况名称
     */ 
    constructor(createTime = '',dataTime = '',id = undefined,overStandardRate = '',primaryPollutantList = [],stationList = [],stationsStatus = {},totalCount = undefined,updateTime = '',waterFunctionId = undefined,waterFunctionName = '',waterStatus = undefined,waterStatusName = ''){
        this.createTime = createTime
        this.dataTime = dataTime
        this.id = id
        this.overStandardRate = overStandardRate
        this.primaryPollutantList = primaryPollutantList
        this.stationList = stationList
        this.stationsStatus = stationsStatus
        this.totalCount = totalCount
        this.updateTime = updateTime
        this.waterFunctionId = waterFunctionId
        this.waterFunctionName = waterFunctionName
        this.waterStatus = waterStatus
        this.waterStatusName = waterStatusName
    }
       
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 数据上报时间
     * @type {String}
     */
    dataTime=''   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 超标率
     * @type {String}
     */
    overStandardRate=''   
    /**
     * 主要污染物
     * @type {Array}
     */
    primaryPollutantList=[]   
    /**
     * 点位列表
     * @type {Array<WaterStationListDTO>}
     */
    stationList=[]   
    /**
     * 站点分类
     * @type {undefined}
     */
    stationsStatus={}   
    /**
     * 水质监测站总数
     * @type {Number}
     */
    totalCount=undefined   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''   
    /**
     * 水域功能ID
     * @type {Number}
     */
    waterFunctionId=undefined   
    /**
     * 水域功能名称
     * @type {String}
     */
    waterFunctionName=''   
    /**
     * 水质状况ID
     * @type {Number}
     */
    waterStatus=undefined   
    /**
     * 水质状况名称
     * @type {String}
     */
    waterStatusName=''
    
}
export class WaterStationListDTO {
  
    /**
     *
     * @param {String} dataTime 数据上报时间
     * @param {String} deviceNum 仪器编号
     * @param {Array<MonitorItemVO>} itemList 监测项目集合
     * @param {String} pollutantOverRate 污染物描述
     * @param {Number} stationId 点位ID
     * @param {String} stationName 点位名称
     * @param {Number} waterFunctionId 水域功能ID
     * @param {String} waterFunctionName 水域功能名称
     */ 
    constructor(dataTime = '',deviceNum = '',itemList = [],pollutantOverRate = '',stationId = undefined,stationName = '',waterFunctionId = undefined,waterFunctionName = ''){
        this.dataTime = dataTime
        this.deviceNum = deviceNum
        this.itemList = itemList
        this.pollutantOverRate = pollutantOverRate
        this.stationId = stationId
        this.stationName = stationName
        this.waterFunctionId = waterFunctionId
        this.waterFunctionName = waterFunctionName
    }
       
    /**
     * 数据上报时间
     * @type {String}
     */
    dataTime=''   
    /**
     * 仪器编号
     * @type {String}
     */
    deviceNum=''   
    /**
     * 监测项目集合
     * @type {Array<MonitorItemVO>}
     */
    itemList=[]   
    /**
     * 污染物描述
     * @type {String}
     */
    pollutantOverRate=''   
    /**
     * 点位ID
     * @type {Number}
     */
    stationId=undefined   
    /**
     * 点位名称
     * @type {String}
     */
    stationName=''   
    /**
     * 水域功能ID
     * @type {Number}
     */
    waterFunctionId=undefined   
    /**
     * 水域功能名称
     * @type {String}
     */
    waterFunctionName=''
    
}
export class WaterStationRealDetailDTO {
  
    /**
     *
     * @param {String} dataTime 数据上报时间
     * @param {Array<FileDTO>} fileList 图片列表
     * @param {Array<MonitorItemVO>} itemList 监测项目集合
     * @param {Number} monitorTypeId 监测类型id
     * @param {Number} stationId 点位ID
     * @param {String} stationName 点位名称
     */ 
    constructor(dataTime = '',fileList = [],itemList = [],monitorTypeId = undefined,stationId = undefined,stationName = ''){
        this.dataTime = dataTime
        this.fileList = fileList
        this.itemList = itemList
        this.monitorTypeId = monitorTypeId
        this.stationId = stationId
        this.stationName = stationName
    }
       
    /**
     * 数据上报时间
     * @type {String}
     */
    dataTime=''   
    /**
     * 图片列表
     * @type {Array<FileDTO>}
     */
    fileList=[]   
    /**
     * 监测项目集合
     * @type {Array<MonitorItemVO>}
     */
    itemList=[]   
    /**
     * 监测类型id
     * @type {Number}
     */
    monitorTypeId=undefined   
    /**
     * 点位ID
     * @type {Number}
     */
    stationId=undefined   
    /**
     * 点位名称
     * @type {String}
     */
    stationName=''
    
}
export class WorkplaceDTO {
  
    /**
     *
     * @param {String} createTime 创建时间
     * @param {Number} id 主键id
     * @param {String} moniker 名称
     * @param {String} number 编号
     * @param {String} updateTime 更新时间
     */ 
    constructor(createTime = '',id = undefined,moniker = '',number = '',updateTime = ''){
        this.createTime = createTime
        this.id = id
        this.moniker = moniker
        this.number = number
        this.updateTime = updateTime
    }
       
    /**
     * 创建时间
     * @type {String}
     */
    createTime=''   
    /**
     * 主键id
     * @type {Number}
     */
    id=undefined   
    /**
     * 名称
     * @type {String}
     */
    moniker=''   
    /**
     * 编号
     * @type {String}
     */
    number=''   
    /**
     * 更新时间
     * @type {String}
     */
    updateTime=''
    
}
