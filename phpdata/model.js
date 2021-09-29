export class listArticle {
  
    /**
     *
     * @param {Number} results 
     * @param {Array} records 
     */ 
    constructor(results = undefined,records = undefined){
        this.results = results
        this.records = records
    }
       
    /**
     * 
     * @type {Number}
     */
    results=undefined   
    /**
     * 
     * @type {Array}
     */
    records=undefined
    
}
export class createArticle {
  
    /**
     *
     * @param {Number} id 
     * @param {String} title 
     * @param {String} content 
     * @param {String} author 
     * @param {String} createdAt 
     * @param {String} updatedAt 
     * @param {undefined} mobile 
     * @param {String} head 
     */ 
    constructor(id = undefined,title = undefined,content = undefined,author = undefined,createdAt = undefined,updatedAt = undefined,mobile = undefined,head = undefined){
        this.id = id
        this.title = title
        this.content = content
        this.author = author
        this.createdAt = createdAt
        this.updatedAt = updatedAt
        this.mobile = mobile
        this.head = head
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    title=undefined   
    /**
     * 
     * @type {String}
     */
    content=undefined   
    /**
     * 
     * @type {String}
     */
    author=undefined   
    /**
     * 
     * @type {String}
     */
    createdAt=undefined   
    /**
     * 
     * @type {String}
     */
    updatedAt=undefined   
    /**
     * 
     * @type {undefined}
     */
    mobile=undefined   
    /**
     * 
     * @type {String}
     */
    head=undefined
    
}
export class readArticle {
  
    /**
     *
     * @param {Number} id 
     * @param {String} title 
     * @param {String} content 
     * @param {String} author 
     * @param {String} createdAt 
     * @param {String} updatedAt 
     * @param {undefined} mobile 
     * @param {String} head 
     */ 
    constructor(id = undefined,title = undefined,content = undefined,author = undefined,createdAt = undefined,updatedAt = undefined,mobile = undefined,head = undefined){
        this.id = id
        this.title = title
        this.content = content
        this.author = author
        this.createdAt = createdAt
        this.updatedAt = updatedAt
        this.mobile = mobile
        this.head = head
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    title=undefined   
    /**
     * 
     * @type {String}
     */
    content=undefined   
    /**
     * 
     * @type {String}
     */
    author=undefined   
    /**
     * 
     * @type {String}
     */
    createdAt=undefined   
    /**
     * 
     * @type {String}
     */
    updatedAt=undefined   
    /**
     * 
     * @type {undefined}
     */
    mobile=undefined   
    /**
     * 
     * @type {String}
     */
    head=undefined
    
}
export class updateArticle {
  
    /**
     *
     * @param {Number} id 
     * @param {String} title 
     * @param {String} content 
     * @param {String} author 
     * @param {String} createdAt 
     * @param {String} updatedAt 
     * @param {undefined} mobile 
     * @param {String} head 
     */ 
    constructor(id = undefined,title = undefined,content = undefined,author = undefined,createdAt = undefined,updatedAt = undefined,mobile = undefined,head = undefined){
        this.id = id
        this.title = title
        this.content = content
        this.author = author
        this.createdAt = createdAt
        this.updatedAt = updatedAt
        this.mobile = mobile
        this.head = head
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    title=undefined   
    /**
     * 
     * @type {String}
     */
    content=undefined   
    /**
     * 
     * @type {String}
     */
    author=undefined   
    /**
     * 
     * @type {String}
     */
    createdAt=undefined   
    /**
     * 
     * @type {String}
     */
    updatedAt=undefined   
    /**
     * 
     * @type {undefined}
     */
    mobile=undefined   
    /**
     * 
     * @type {String}
     */
    head=undefined
    
}
export class incrementArticle {
  
    /**
     *
     * @param {Number} id 
     * @param {String} title 
     * @param {String} content 
     * @param {String} author 
     * @param {String} createdAt 
     * @param {String} updatedAt 
     * @param {undefined} mobile 
     * @param {String} head 
     */ 
    constructor(id = undefined,title = undefined,content = undefined,author = undefined,createdAt = undefined,updatedAt = undefined,mobile = undefined,head = undefined){
        this.id = id
        this.title = title
        this.content = content
        this.author = author
        this.createdAt = createdAt
        this.updatedAt = updatedAt
        this.mobile = mobile
        this.head = head
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    title=undefined   
    /**
     * 
     * @type {String}
     */
    content=undefined   
    /**
     * 
     * @type {String}
     */
    author=undefined   
    /**
     * 
     * @type {String}
     */
    createdAt=undefined   
    /**
     * 
     * @type {String}
     */
    updatedAt=undefined   
    /**
     * 
     * @type {undefined}
     */
    mobile=undefined   
    /**
     * 
     * @type {String}
     */
    head=undefined
    
}
export class listComments {
  
    /**
     *
     * @param {Number} results 
     * @param {Array} records 
     */ 
    constructor(results = undefined,records = undefined){
        this.results = results
        this.records = records
    }
       
    /**
     * 
     * @type {Number}
     */
    results=undefined   
    /**
     * 
     * @type {Array}
     */
    records=undefined
    
}
export class createComments {
  
    /**
     *
     * @param {Number} id 
     * @param {String} post_id 
     * @param {String} user_id 
     * @param {String} message 
     * @param {String} image 
     */ 
    constructor(id = undefined,post_id = undefined,user_id = undefined,message = undefined,image = undefined){
        this.id = id
        this.post_id = post_id
        this.user_id = user_id
        this.message = message
        this.image = image
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    post_id=undefined   
    /**
     * 
     * @type {String}
     */
    user_id=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {String}
     */
    image=undefined
    
}
export class readComments {
  
    /**
     *
     * @param {Number} id 
     * @param {String} post_id 
     * @param {String} user_id 
     * @param {String} message 
     * @param {String} image 
     */ 
    constructor(id = undefined,post_id = undefined,user_id = undefined,message = undefined,image = undefined){
        this.id = id
        this.post_id = post_id
        this.user_id = user_id
        this.message = message
        this.image = image
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    post_id=undefined   
    /**
     * 
     * @type {String}
     */
    user_id=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {String}
     */
    image=undefined
    
}
export class updateComments {
  
    /**
     *
     * @param {Number} id 
     * @param {String} post_id 
     * @param {String} user_id 
     * @param {String} message 
     * @param {String} image 
     */ 
    constructor(id = undefined,post_id = undefined,user_id = undefined,message = undefined,image = undefined){
        this.id = id
        this.post_id = post_id
        this.user_id = user_id
        this.message = message
        this.image = image
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    post_id=undefined   
    /**
     * 
     * @type {String}
     */
    user_id=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {String}
     */
    image=undefined
    
}
export class incrementComments {
  
    /**
     *
     * @param {Number} id 
     * @param {String} post_id 
     * @param {String} user_id 
     * @param {String} message 
     * @param {String} image 
     */ 
    constructor(id = undefined,post_id = undefined,user_id = undefined,message = undefined,image = undefined){
        this.id = id
        this.post_id = post_id
        this.user_id = user_id
        this.message = message
        this.image = image
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    post_id=undefined   
    /**
     * 
     * @type {String}
     */
    user_id=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {String}
     */
    image=undefined
    
}
export class listFileproject {
  
    /**
     *
     * @param {Number} results 
     * @param {Array} records 
     */ 
    constructor(results = undefined,records = undefined){
        this.results = results
        this.records = records
    }
       
    /**
     * 
     * @type {Number}
     */
    results=undefined   
    /**
     * 
     * @type {Array}
     */
    records=undefined
    
}
export class createFileproject {
  
    /**
     *
     * @param {Number} id 
     * @param {String} name 
     * @param {String} path 
     */ 
    constructor(id = undefined,name = undefined,path = undefined){
        this.id = id
        this.name = name
        this.path = path
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    name=undefined   
    /**
     * 
     * @type {String}
     */
    path=undefined
    
}
export class readFileproject {
  
    /**
     *
     * @param {Number} id 
     * @param {String} name 
     * @param {String} path 
     */ 
    constructor(id = undefined,name = undefined,path = undefined){
        this.id = id
        this.name = name
        this.path = path
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    name=undefined   
    /**
     * 
     * @type {String}
     */
    path=undefined
    
}
export class updateFileproject {
  
    /**
     *
     * @param {Number} id 
     * @param {String} name 
     * @param {String} path 
     */ 
    constructor(id = undefined,name = undefined,path = undefined){
        this.id = id
        this.name = name
        this.path = path
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    name=undefined   
    /**
     * 
     * @type {String}
     */
    path=undefined
    
}
export class incrementFileproject {
  
    /**
     *
     * @param {Number} id 
     * @param {String} name 
     * @param {String} path 
     */ 
    constructor(id = undefined,name = undefined,path = undefined){
        this.id = id
        this.name = name
        this.path = path
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    name=undefined   
    /**
     * 
     * @type {String}
     */
    path=undefined
    
}
export class listFileprojectuser {
  
    /**
     *
     * @param {Number} results 
     * @param {Array} records 
     */ 
    constructor(results = undefined,records = undefined){
        this.results = results
        this.records = records
    }
       
    /**
     * 
     * @type {Number}
     */
    results=undefined   
    /**
     * 
     * @type {Array}
     */
    records=undefined
    
}
export class createFileprojectuser {
  
    /**
     *
     * @param {Number} id 
     * @param {Number} projectId 
     * @param {Number} userId 
     * @param {String} updateTime 
     */ 
    constructor(id = undefined,projectId = undefined,userId = undefined,updateTime = undefined){
        this.id = id
        this.projectId = projectId
        this.userId = userId
        this.updateTime = updateTime
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {Number}
     */
    projectId=undefined   
    /**
     * 
     * @type {Number}
     */
    userId=undefined   
    /**
     * 
     * @type {String}
     */
    updateTime=undefined
    
}
export class readFileprojectuser {
  
    /**
     *
     * @param {Number} id 
     * @param {Number} projectId 
     * @param {Number} userId 
     * @param {String} updateTime 
     */ 
    constructor(id = undefined,projectId = undefined,userId = undefined,updateTime = undefined){
        this.id = id
        this.projectId = projectId
        this.userId = userId
        this.updateTime = updateTime
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {Number}
     */
    projectId=undefined   
    /**
     * 
     * @type {Number}
     */
    userId=undefined   
    /**
     * 
     * @type {String}
     */
    updateTime=undefined
    
}
export class updateFileprojectuser {
  
    /**
     *
     * @param {Number} id 
     * @param {Number} projectId 
     * @param {Number} userId 
     * @param {String} updateTime 
     */ 
    constructor(id = undefined,projectId = undefined,userId = undefined,updateTime = undefined){
        this.id = id
        this.projectId = projectId
        this.userId = userId
        this.updateTime = updateTime
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {Number}
     */
    projectId=undefined   
    /**
     * 
     * @type {Number}
     */
    userId=undefined   
    /**
     * 
     * @type {String}
     */
    updateTime=undefined
    
}
export class incrementFileprojectuser {
  
    /**
     *
     * @param {Number} id 
     * @param {Number} projectId 
     * @param {Number} userId 
     * @param {String} updateTime 
     */ 
    constructor(id = undefined,projectId = undefined,userId = undefined,updateTime = undefined){
        this.id = id
        this.projectId = projectId
        this.userId = userId
        this.updateTime = updateTime
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {Number}
     */
    projectId=undefined   
    /**
     * 
     * @type {Number}
     */
    userId=undefined   
    /**
     * 
     * @type {String}
     */
    updateTime=undefined
    
}
export class listFilerole {
  
    /**
     *
     * @param {Number} results 
     * @param {Array} records 
     */ 
    constructor(results = undefined,records = undefined){
        this.results = results
        this.records = records
    }
       
    /**
     * 
     * @type {Number}
     */
    results=undefined   
    /**
     * 
     * @type {Array}
     */
    records=undefined
    
}
export class createFilerole {
  
    /**
     *
     * @param {Number} id 
     * @param {String} name 
     */ 
    constructor(id = undefined,name = undefined){
        this.id = id
        this.name = name
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    name=undefined
    
}
export class readFilerole {
  
    /**
     *
     * @param {Number} id 
     * @param {String} name 
     */ 
    constructor(id = undefined,name = undefined){
        this.id = id
        this.name = name
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    name=undefined
    
}
export class updateFilerole {
  
    /**
     *
     * @param {Number} id 
     * @param {String} name 
     */ 
    constructor(id = undefined,name = undefined){
        this.id = id
        this.name = name
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    name=undefined
    
}
export class incrementFilerole {
  
    /**
     *
     * @param {Number} id 
     * @param {String} name 
     */ 
    constructor(id = undefined,name = undefined){
        this.id = id
        this.name = name
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    name=undefined
    
}
export class listFileroleproject {
  
    /**
     *
     * @param {Number} results 
     * @param {Array} records 
     */ 
    constructor(results = undefined,records = undefined){
        this.results = results
        this.records = records
    }
       
    /**
     * 
     * @type {Number}
     */
    results=undefined   
    /**
     * 
     * @type {Array}
     */
    records=undefined
    
}
export class createFileroleproject {
  
    /**
     *
     * @param {Number} id 
     * @param {undefined} addFlag 
     * @param {undefined} deleteFlag 
     * @param {undefined} editFlag 
     * @param {undefined} viewFlag 
     * @param {undefined} auditFlag 
     * @param {Number} projectId 
     * @param {Number} roleId 
     */ 
    constructor(id = undefined,addFlag = undefined,deleteFlag = undefined,editFlag = undefined,viewFlag = undefined,auditFlag = undefined,projectId = undefined,roleId = undefined){
        this.id = id
        this.addFlag = addFlag
        this.deleteFlag = deleteFlag
        this.editFlag = editFlag
        this.viewFlag = viewFlag
        this.auditFlag = auditFlag
        this.projectId = projectId
        this.roleId = roleId
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {undefined}
     */
    addFlag=undefined   
    /**
     * 
     * @type {undefined}
     */
    deleteFlag=undefined   
    /**
     * 
     * @type {undefined}
     */
    editFlag=undefined   
    /**
     * 
     * @type {undefined}
     */
    viewFlag=undefined   
    /**
     * 
     * @type {undefined}
     */
    auditFlag=undefined   
    /**
     * 
     * @type {Number}
     */
    projectId=undefined   
    /**
     * 
     * @type {Number}
     */
    roleId=undefined
    
}
export class readFileroleproject {
  
    /**
     *
     * @param {Number} id 
     * @param {undefined} addFlag 
     * @param {undefined} deleteFlag 
     * @param {undefined} editFlag 
     * @param {undefined} viewFlag 
     * @param {undefined} auditFlag 
     * @param {Number} projectId 
     * @param {Number} roleId 
     */ 
    constructor(id = undefined,addFlag = undefined,deleteFlag = undefined,editFlag = undefined,viewFlag = undefined,auditFlag = undefined,projectId = undefined,roleId = undefined){
        this.id = id
        this.addFlag = addFlag
        this.deleteFlag = deleteFlag
        this.editFlag = editFlag
        this.viewFlag = viewFlag
        this.auditFlag = auditFlag
        this.projectId = projectId
        this.roleId = roleId
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {undefined}
     */
    addFlag=undefined   
    /**
     * 
     * @type {undefined}
     */
    deleteFlag=undefined   
    /**
     * 
     * @type {undefined}
     */
    editFlag=undefined   
    /**
     * 
     * @type {undefined}
     */
    viewFlag=undefined   
    /**
     * 
     * @type {undefined}
     */
    auditFlag=undefined   
    /**
     * 
     * @type {Number}
     */
    projectId=undefined   
    /**
     * 
     * @type {Number}
     */
    roleId=undefined
    
}
export class updateFileroleproject {
  
    /**
     *
     * @param {Number} id 
     * @param {undefined} addFlag 
     * @param {undefined} deleteFlag 
     * @param {undefined} editFlag 
     * @param {undefined} viewFlag 
     * @param {undefined} auditFlag 
     * @param {Number} projectId 
     * @param {Number} roleId 
     */ 
    constructor(id = undefined,addFlag = undefined,deleteFlag = undefined,editFlag = undefined,viewFlag = undefined,auditFlag = undefined,projectId = undefined,roleId = undefined){
        this.id = id
        this.addFlag = addFlag
        this.deleteFlag = deleteFlag
        this.editFlag = editFlag
        this.viewFlag = viewFlag
        this.auditFlag = auditFlag
        this.projectId = projectId
        this.roleId = roleId
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {undefined}
     */
    addFlag=undefined   
    /**
     * 
     * @type {undefined}
     */
    deleteFlag=undefined   
    /**
     * 
     * @type {undefined}
     */
    editFlag=undefined   
    /**
     * 
     * @type {undefined}
     */
    viewFlag=undefined   
    /**
     * 
     * @type {undefined}
     */
    auditFlag=undefined   
    /**
     * 
     * @type {Number}
     */
    projectId=undefined   
    /**
     * 
     * @type {Number}
     */
    roleId=undefined
    
}
export class incrementFileroleproject {
  
    /**
     *
     * @param {Number} id 
     * @param {undefined} addFlag 
     * @param {undefined} deleteFlag 
     * @param {undefined} editFlag 
     * @param {undefined} viewFlag 
     * @param {undefined} auditFlag 
     * @param {Number} projectId 
     * @param {Number} roleId 
     */ 
    constructor(id = undefined,addFlag = undefined,deleteFlag = undefined,editFlag = undefined,viewFlag = undefined,auditFlag = undefined,projectId = undefined,roleId = undefined){
        this.id = id
        this.addFlag = addFlag
        this.deleteFlag = deleteFlag
        this.editFlag = editFlag
        this.viewFlag = viewFlag
        this.auditFlag = auditFlag
        this.projectId = projectId
        this.roleId = roleId
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {undefined}
     */
    addFlag=undefined   
    /**
     * 
     * @type {undefined}
     */
    deleteFlag=undefined   
    /**
     * 
     * @type {undefined}
     */
    editFlag=undefined   
    /**
     * 
     * @type {undefined}
     */
    viewFlag=undefined   
    /**
     * 
     * @type {undefined}
     */
    auditFlag=undefined   
    /**
     * 
     * @type {Number}
     */
    projectId=undefined   
    /**
     * 
     * @type {Number}
     */
    roleId=undefined
    
}
export class listFileuser {
  
    /**
     *
     * @param {Number} results 
     * @param {Array} records 
     */ 
    constructor(results = undefined,records = undefined){
        this.results = results
        this.records = records
    }
       
    /**
     * 
     * @type {Number}
     */
    results=undefined   
    /**
     * 
     * @type {Array}
     */
    records=undefined
    
}
export class createFileuser {
  
    /**
     *
     * @param {Number} id 
     * @param {String} name 
     * @param {String} passwd 
     * @param {Number} roleId 
     */ 
    constructor(id = undefined,name = undefined,passwd = undefined,roleId = undefined){
        this.id = id
        this.name = name
        this.passwd = passwd
        this.roleId = roleId
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    name=undefined   
    /**
     * 
     * @type {String}
     */
    passwd=undefined   
    /**
     * 
     * @type {Number}
     */
    roleId=undefined
    
}
export class readFileuser {
  
    /**
     *
     * @param {Number} id 
     * @param {String} name 
     * @param {String} passwd 
     * @param {Number} roleId 
     */ 
    constructor(id = undefined,name = undefined,passwd = undefined,roleId = undefined){
        this.id = id
        this.name = name
        this.passwd = passwd
        this.roleId = roleId
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    name=undefined   
    /**
     * 
     * @type {String}
     */
    passwd=undefined   
    /**
     * 
     * @type {Number}
     */
    roleId=undefined
    
}
export class updateFileuser {
  
    /**
     *
     * @param {Number} id 
     * @param {String} name 
     * @param {String} passwd 
     * @param {Number} roleId 
     */ 
    constructor(id = undefined,name = undefined,passwd = undefined,roleId = undefined){
        this.id = id
        this.name = name
        this.passwd = passwd
        this.roleId = roleId
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    name=undefined   
    /**
     * 
     * @type {String}
     */
    passwd=undefined   
    /**
     * 
     * @type {Number}
     */
    roleId=undefined
    
}
export class incrementFileuser {
  
    /**
     *
     * @param {Number} id 
     * @param {String} name 
     * @param {String} passwd 
     * @param {Number} roleId 
     */ 
    constructor(id = undefined,name = undefined,passwd = undefined,roleId = undefined){
        this.id = id
        this.name = name
        this.passwd = passwd
        this.roleId = roleId
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    name=undefined   
    /**
     * 
     * @type {String}
     */
    passwd=undefined   
    /**
     * 
     * @type {Number}
     */
    roleId=undefined
    
}
export class listFileversion {
  
    /**
     *
     * @param {Number} results 
     * @param {Array} records 
     */ 
    constructor(results = undefined,records = undefined){
        this.results = results
        this.records = records
    }
       
    /**
     * 
     * @type {Number}
     */
    results=undefined   
    /**
     * 
     * @type {Array}
     */
    records=undefined
    
}
export class createFileversion {
  
    /**
     *
     * @param {Number} id 
     * @param {String} path 
     * @param {Number} projectId 
     * @param {String} startTime 
     * @param {String} endTime 
     */ 
    constructor(id = undefined,path = undefined,projectId = undefined,startTime = undefined,endTime = undefined){
        this.id = id
        this.path = path
        this.projectId = projectId
        this.startTime = startTime
        this.endTime = endTime
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    path=undefined   
    /**
     * 
     * @type {Number}
     */
    projectId=undefined   
    /**
     * 
     * @type {String}
     */
    startTime=undefined   
    /**
     * 
     * @type {String}
     */
    endTime=undefined
    
}
export class readFileversion {
  
    /**
     *
     * @param {Number} id 
     * @param {String} path 
     * @param {Number} projectId 
     * @param {String} startTime 
     * @param {String} endTime 
     */ 
    constructor(id = undefined,path = undefined,projectId = undefined,startTime = undefined,endTime = undefined){
        this.id = id
        this.path = path
        this.projectId = projectId
        this.startTime = startTime
        this.endTime = endTime
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    path=undefined   
    /**
     * 
     * @type {Number}
     */
    projectId=undefined   
    /**
     * 
     * @type {String}
     */
    startTime=undefined   
    /**
     * 
     * @type {String}
     */
    endTime=undefined
    
}
export class updateFileversion {
  
    /**
     *
     * @param {Number} id 
     * @param {String} path 
     * @param {Number} projectId 
     * @param {String} startTime 
     * @param {String} endTime 
     */ 
    constructor(id = undefined,path = undefined,projectId = undefined,startTime = undefined,endTime = undefined){
        this.id = id
        this.path = path
        this.projectId = projectId
        this.startTime = startTime
        this.endTime = endTime
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    path=undefined   
    /**
     * 
     * @type {Number}
     */
    projectId=undefined   
    /**
     * 
     * @type {String}
     */
    startTime=undefined   
    /**
     * 
     * @type {String}
     */
    endTime=undefined
    
}
export class incrementFileversion {
  
    /**
     *
     * @param {Number} id 
     * @param {String} path 
     * @param {Number} projectId 
     * @param {String} startTime 
     * @param {String} endTime 
     */ 
    constructor(id = undefined,path = undefined,projectId = undefined,startTime = undefined,endTime = undefined){
        this.id = id
        this.path = path
        this.projectId = projectId
        this.startTime = startTime
        this.endTime = endTime
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    path=undefined   
    /**
     * 
     * @type {Number}
     */
    projectId=undefined   
    /**
     * 
     * @type {String}
     */
    startTime=undefined   
    /**
     * 
     * @type {String}
     */
    endTime=undefined
    
}
export class listLogs {
  
    /**
     *
     * @param {Number} results 
     * @param {Array} records 
     */ 
    constructor(results = undefined,records = undefined){
        this.results = results
        this.records = records
    }
       
    /**
     * 
     * @type {Number}
     */
    results=undefined   
    /**
     * 
     * @type {Array}
     */
    records=undefined
    
}
export class createLogs {
  
    /**
     *
     * @param {Number} id 
     * @param {Number} appId 
     * @param {String} appName 
     * @param {undefined} success 
     * @param {String} lvl 
     * @param {String} type 
     * @param {String} target 
     * @param {String} message 
     * @param {String} stack 
     */ 
    constructor(id = undefined,appId = undefined,appName = undefined,success = undefined,lvl = undefined,type = undefined,target = undefined,message = undefined,stack = undefined){
        this.id = id
        this.appId = appId
        this.appName = appName
        this.success = success
        this.lvl = lvl
        this.type = type
        this.target = target
        this.message = message
        this.stack = stack
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {Number}
     */
    appId=undefined   
    /**
     * 
     * @type {String}
     */
    appName=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined   
    /**
     * 
     * @type {String}
     */
    lvl=undefined   
    /**
     * 
     * @type {String}
     */
    type=undefined   
    /**
     * 
     * @type {String}
     */
    target=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {String}
     */
    stack=undefined
    
}
export class readLogs {
  
    /**
     *
     * @param {Number} id 
     * @param {Number} appId 
     * @param {String} appName 
     * @param {undefined} success 
     * @param {String} lvl 
     * @param {String} type 
     * @param {String} target 
     * @param {String} message 
     * @param {String} stack 
     */ 
    constructor(id = undefined,appId = undefined,appName = undefined,success = undefined,lvl = undefined,type = undefined,target = undefined,message = undefined,stack = undefined){
        this.id = id
        this.appId = appId
        this.appName = appName
        this.success = success
        this.lvl = lvl
        this.type = type
        this.target = target
        this.message = message
        this.stack = stack
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {Number}
     */
    appId=undefined   
    /**
     * 
     * @type {String}
     */
    appName=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined   
    /**
     * 
     * @type {String}
     */
    lvl=undefined   
    /**
     * 
     * @type {String}
     */
    type=undefined   
    /**
     * 
     * @type {String}
     */
    target=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {String}
     */
    stack=undefined
    
}
export class updateLogs {
  
    /**
     *
     * @param {Number} id 
     * @param {Number} appId 
     * @param {String} appName 
     * @param {undefined} success 
     * @param {String} lvl 
     * @param {String} type 
     * @param {String} target 
     * @param {String} message 
     * @param {String} stack 
     */ 
    constructor(id = undefined,appId = undefined,appName = undefined,success = undefined,lvl = undefined,type = undefined,target = undefined,message = undefined,stack = undefined){
        this.id = id
        this.appId = appId
        this.appName = appName
        this.success = success
        this.lvl = lvl
        this.type = type
        this.target = target
        this.message = message
        this.stack = stack
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {Number}
     */
    appId=undefined   
    /**
     * 
     * @type {String}
     */
    appName=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined   
    /**
     * 
     * @type {String}
     */
    lvl=undefined   
    /**
     * 
     * @type {String}
     */
    type=undefined   
    /**
     * 
     * @type {String}
     */
    target=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {String}
     */
    stack=undefined
    
}
export class incrementLogs {
  
    /**
     *
     * @param {Number} id 
     * @param {Number} appId 
     * @param {String} appName 
     * @param {undefined} success 
     * @param {String} lvl 
     * @param {String} type 
     * @param {String} target 
     * @param {String} message 
     * @param {String} stack 
     */ 
    constructor(id = undefined,appId = undefined,appName = undefined,success = undefined,lvl = undefined,type = undefined,target = undefined,message = undefined,stack = undefined){
        this.id = id
        this.appId = appId
        this.appName = appName
        this.success = success
        this.lvl = lvl
        this.type = type
        this.target = target
        this.message = message
        this.stack = stack
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {Number}
     */
    appId=undefined   
    /**
     * 
     * @type {String}
     */
    appName=undefined   
    /**
     * 
     * @type {undefined}
     */
    success=undefined   
    /**
     * 
     * @type {String}
     */
    lvl=undefined   
    /**
     * 
     * @type {String}
     */
    type=undefined   
    /**
     * 
     * @type {String}
     */
    target=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined   
    /**
     * 
     * @type {String}
     */
    stack=undefined
    
}
export class listMp {
  
    /**
     *
     * @param {Number} results 
     * @param {Array} records 
     */ 
    constructor(results = undefined,records = undefined){
        this.results = results
        this.records = records
    }
       
    /**
     * 
     * @type {Number}
     */
    results=undefined   
    /**
     * 
     * @type {Array}
     */
    records=undefined
    
}
export class createMp {
  
    /**
     *
     * @param {Number} id 
     * @param {String} accessToken 
     * @param {String} expiresIn 
     * @param {String} createTime 
     * @param {String} appID 
     */ 
    constructor(id = undefined,accessToken = undefined,expiresIn = undefined,createTime = undefined,appID = undefined){
        this.id = id
        this.accessToken = accessToken
        this.expiresIn = expiresIn
        this.createTime = createTime
        this.appID = appID
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    accessToken=undefined   
    /**
     * 
     * @type {String}
     */
    expiresIn=undefined   
    /**
     * 
     * @type {String}
     */
    createTime=undefined   
    /**
     * 
     * @type {String}
     */
    appID=undefined
    
}
export class readMp {
  
    /**
     *
     * @param {Number} id 
     * @param {String} accessToken 
     * @param {String} expiresIn 
     * @param {String} createTime 
     * @param {String} appID 
     */ 
    constructor(id = undefined,accessToken = undefined,expiresIn = undefined,createTime = undefined,appID = undefined){
        this.id = id
        this.accessToken = accessToken
        this.expiresIn = expiresIn
        this.createTime = createTime
        this.appID = appID
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    accessToken=undefined   
    /**
     * 
     * @type {String}
     */
    expiresIn=undefined   
    /**
     * 
     * @type {String}
     */
    createTime=undefined   
    /**
     * 
     * @type {String}
     */
    appID=undefined
    
}
export class updateMp {
  
    /**
     *
     * @param {Number} id 
     * @param {String} accessToken 
     * @param {String} expiresIn 
     * @param {String} createTime 
     * @param {String} appID 
     */ 
    constructor(id = undefined,accessToken = undefined,expiresIn = undefined,createTime = undefined,appID = undefined){
        this.id = id
        this.accessToken = accessToken
        this.expiresIn = expiresIn
        this.createTime = createTime
        this.appID = appID
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    accessToken=undefined   
    /**
     * 
     * @type {String}
     */
    expiresIn=undefined   
    /**
     * 
     * @type {String}
     */
    createTime=undefined   
    /**
     * 
     * @type {String}
     */
    appID=undefined
    
}
export class incrementMp {
  
    /**
     *
     * @param {Number} id 
     * @param {String} accessToken 
     * @param {String} expiresIn 
     * @param {String} createTime 
     * @param {String} appID 
     */ 
    constructor(id = undefined,accessToken = undefined,expiresIn = undefined,createTime = undefined,appID = undefined){
        this.id = id
        this.accessToken = accessToken
        this.expiresIn = expiresIn
        this.createTime = createTime
        this.appID = appID
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    accessToken=undefined   
    /**
     * 
     * @type {String}
     */
    expiresIn=undefined   
    /**
     * 
     * @type {String}
     */
    createTime=undefined   
    /**
     * 
     * @type {String}
     */
    appID=undefined
    
}
export class listNsgame {
  
    /**
     *
     * @param {Number} results 
     * @param {Array} records 
     */ 
    constructor(results = undefined,records = undefined){
        this.results = results
        this.records = records
    }
       
    /**
     * 
     * @type {Number}
     */
    results=undefined   
    /**
     * 
     * @type {Array}
     */
    records=undefined
    
}
export class createNsgame {
  
    /**
     *
     * @param {Number} id 
     * @param {String} name 
     * @param {String} desc 
     * @param {String} content 
     * @param {String} image 
     * @param {Number} status 
     * @param {Number} userId 
     * @param {undefined} price 
     */ 
    constructor(id = undefined,name = undefined,desc = undefined,content = undefined,image = undefined,status = undefined,userId = undefined,price = undefined){
        this.id = id
        this.name = name
        this.desc = desc
        this.content = content
        this.image = image
        this.status = status
        this.userId = userId
        this.price = price
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    name=undefined   
    /**
     * 
     * @type {String}
     */
    desc=undefined   
    /**
     * 
     * @type {String}
     */
    content=undefined   
    /**
     * 
     * @type {String}
     */
    image=undefined   
    /**
     * 
     * @type {Number}
     */
    status=undefined   
    /**
     * 
     * @type {Number}
     */
    userId=undefined   
    /**
     * 
     * @type {undefined}
     */
    price=undefined
    
}
export class readNsgame {
  
    /**
     *
     * @param {Number} id 
     * @param {String} name 
     * @param {String} desc 
     * @param {String} content 
     * @param {String} image 
     * @param {Number} status 
     * @param {Number} userId 
     * @param {undefined} price 
     */ 
    constructor(id = undefined,name = undefined,desc = undefined,content = undefined,image = undefined,status = undefined,userId = undefined,price = undefined){
        this.id = id
        this.name = name
        this.desc = desc
        this.content = content
        this.image = image
        this.status = status
        this.userId = userId
        this.price = price
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    name=undefined   
    /**
     * 
     * @type {String}
     */
    desc=undefined   
    /**
     * 
     * @type {String}
     */
    content=undefined   
    /**
     * 
     * @type {String}
     */
    image=undefined   
    /**
     * 
     * @type {Number}
     */
    status=undefined   
    /**
     * 
     * @type {Number}
     */
    userId=undefined   
    /**
     * 
     * @type {undefined}
     */
    price=undefined
    
}
export class updateNsgame {
  
    /**
     *
     * @param {Number} id 
     * @param {String} name 
     * @param {String} desc 
     * @param {String} content 
     * @param {String} image 
     * @param {Number} status 
     * @param {Number} userId 
     * @param {undefined} price 
     */ 
    constructor(id = undefined,name = undefined,desc = undefined,content = undefined,image = undefined,status = undefined,userId = undefined,price = undefined){
        this.id = id
        this.name = name
        this.desc = desc
        this.content = content
        this.image = image
        this.status = status
        this.userId = userId
        this.price = price
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    name=undefined   
    /**
     * 
     * @type {String}
     */
    desc=undefined   
    /**
     * 
     * @type {String}
     */
    content=undefined   
    /**
     * 
     * @type {String}
     */
    image=undefined   
    /**
     * 
     * @type {Number}
     */
    status=undefined   
    /**
     * 
     * @type {Number}
     */
    userId=undefined   
    /**
     * 
     * @type {undefined}
     */
    price=undefined
    
}
export class incrementNsgame {
  
    /**
     *
     * @param {Number} id 
     * @param {String} name 
     * @param {String} desc 
     * @param {String} content 
     * @param {String} image 
     * @param {Number} status 
     * @param {Number} userId 
     * @param {undefined} price 
     */ 
    constructor(id = undefined,name = undefined,desc = undefined,content = undefined,image = undefined,status = undefined,userId = undefined,price = undefined){
        this.id = id
        this.name = name
        this.desc = desc
        this.content = content
        this.image = image
        this.status = status
        this.userId = userId
        this.price = price
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    name=undefined   
    /**
     * 
     * @type {String}
     */
    desc=undefined   
    /**
     * 
     * @type {String}
     */
    content=undefined   
    /**
     * 
     * @type {String}
     */
    image=undefined   
    /**
     * 
     * @type {Number}
     */
    status=undefined   
    /**
     * 
     * @type {Number}
     */
    userId=undefined   
    /**
     * 
     * @type {undefined}
     */
    price=undefined
    
}
export class listNsorder {
  
    /**
     *
     * @param {Number} results 
     * @param {Array} records 
     */ 
    constructor(results = undefined,records = undefined){
        this.results = results
        this.records = records
    }
       
    /**
     * 
     * @type {Number}
     */
    results=undefined   
    /**
     * 
     * @type {Array}
     */
    records=undefined
    
}
export class createNsorder {
  
    /**
     *
     * @param {Number} id 
     * @param {String} startTime 
     * @param {String} endTime 
     * @param {Number} gameId 
     * @param {Number} fromUserId 
     * @param {Number} toUserId 
     * @param {Number} status 
     */ 
    constructor(id = undefined,startTime = undefined,endTime = undefined,gameId = undefined,fromUserId = undefined,toUserId = undefined,status = undefined){
        this.id = id
        this.startTime = startTime
        this.endTime = endTime
        this.gameId = gameId
        this.fromUserId = fromUserId
        this.toUserId = toUserId
        this.status = status
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    startTime=undefined   
    /**
     * 
     * @type {String}
     */
    endTime=undefined   
    /**
     * 
     * @type {Number}
     */
    gameId=undefined   
    /**
     * 
     * @type {Number}
     */
    fromUserId=undefined   
    /**
     * 
     * @type {Number}
     */
    toUserId=undefined   
    /**
     * 
     * @type {Number}
     */
    status=undefined
    
}
export class readNsorder {
  
    /**
     *
     * @param {Number} id 
     * @param {String} startTime 
     * @param {String} endTime 
     * @param {Number} gameId 
     * @param {Number} fromUserId 
     * @param {Number} toUserId 
     * @param {Number} status 
     */ 
    constructor(id = undefined,startTime = undefined,endTime = undefined,gameId = undefined,fromUserId = undefined,toUserId = undefined,status = undefined){
        this.id = id
        this.startTime = startTime
        this.endTime = endTime
        this.gameId = gameId
        this.fromUserId = fromUserId
        this.toUserId = toUserId
        this.status = status
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    startTime=undefined   
    /**
     * 
     * @type {String}
     */
    endTime=undefined   
    /**
     * 
     * @type {Number}
     */
    gameId=undefined   
    /**
     * 
     * @type {Number}
     */
    fromUserId=undefined   
    /**
     * 
     * @type {Number}
     */
    toUserId=undefined   
    /**
     * 
     * @type {Number}
     */
    status=undefined
    
}
export class updateNsorder {
  
    /**
     *
     * @param {Number} id 
     * @param {String} startTime 
     * @param {String} endTime 
     * @param {Number} gameId 
     * @param {Number} fromUserId 
     * @param {Number} toUserId 
     * @param {Number} status 
     */ 
    constructor(id = undefined,startTime = undefined,endTime = undefined,gameId = undefined,fromUserId = undefined,toUserId = undefined,status = undefined){
        this.id = id
        this.startTime = startTime
        this.endTime = endTime
        this.gameId = gameId
        this.fromUserId = fromUserId
        this.toUserId = toUserId
        this.status = status
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    startTime=undefined   
    /**
     * 
     * @type {String}
     */
    endTime=undefined   
    /**
     * 
     * @type {Number}
     */
    gameId=undefined   
    /**
     * 
     * @type {Number}
     */
    fromUserId=undefined   
    /**
     * 
     * @type {Number}
     */
    toUserId=undefined   
    /**
     * 
     * @type {Number}
     */
    status=undefined
    
}
export class incrementNsorder {
  
    /**
     *
     * @param {Number} id 
     * @param {String} startTime 
     * @param {String} endTime 
     * @param {Number} gameId 
     * @param {Number} fromUserId 
     * @param {Number} toUserId 
     * @param {Number} status 
     */ 
    constructor(id = undefined,startTime = undefined,endTime = undefined,gameId = undefined,fromUserId = undefined,toUserId = undefined,status = undefined){
        this.id = id
        this.startTime = startTime
        this.endTime = endTime
        this.gameId = gameId
        this.fromUserId = fromUserId
        this.toUserId = toUserId
        this.status = status
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    startTime=undefined   
    /**
     * 
     * @type {String}
     */
    endTime=undefined   
    /**
     * 
     * @type {Number}
     */
    gameId=undefined   
    /**
     * 
     * @type {Number}
     */
    fromUserId=undefined   
    /**
     * 
     * @type {Number}
     */
    toUserId=undefined   
    /**
     * 
     * @type {Number}
     */
    status=undefined
    
}
export class listNsuser {
  
    /**
     *
     * @param {Number} results 
     * @param {Array} records 
     */ 
    constructor(results = undefined,records = undefined){
        this.results = results
        this.records = records
    }
       
    /**
     * 
     * @type {Number}
     */
    results=undefined   
    /**
     * 
     * @type {Array}
     */
    records=undefined
    
}
export class createNsuser {
  
    /**
     *
     * @param {Number} id 
     * @param {String} name 
     * @param {String} username 
     * @param {undefined} payCount 
     * @param {undefined} incomeCount 
     */ 
    constructor(id = undefined,name = undefined,username = undefined,payCount = undefined,incomeCount = undefined){
        this.id = id
        this.name = name
        this.username = username
        this.payCount = payCount
        this.incomeCount = incomeCount
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    name=undefined   
    /**
     * 
     * @type {String}
     */
    username=undefined   
    /**
     * 
     * @type {undefined}
     */
    payCount=undefined   
    /**
     * 
     * @type {undefined}
     */
    incomeCount=undefined
    
}
export class readNsuser {
  
    /**
     *
     * @param {Number} id 
     * @param {String} name 
     * @param {String} username 
     * @param {undefined} payCount 
     * @param {undefined} incomeCount 
     */ 
    constructor(id = undefined,name = undefined,username = undefined,payCount = undefined,incomeCount = undefined){
        this.id = id
        this.name = name
        this.username = username
        this.payCount = payCount
        this.incomeCount = incomeCount
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    name=undefined   
    /**
     * 
     * @type {String}
     */
    username=undefined   
    /**
     * 
     * @type {undefined}
     */
    payCount=undefined   
    /**
     * 
     * @type {undefined}
     */
    incomeCount=undefined
    
}
export class updateNsuser {
  
    /**
     *
     * @param {Number} id 
     * @param {String} name 
     * @param {String} username 
     * @param {undefined} payCount 
     * @param {undefined} incomeCount 
     */ 
    constructor(id = undefined,name = undefined,username = undefined,payCount = undefined,incomeCount = undefined){
        this.id = id
        this.name = name
        this.username = username
        this.payCount = payCount
        this.incomeCount = incomeCount
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    name=undefined   
    /**
     * 
     * @type {String}
     */
    username=undefined   
    /**
     * 
     * @type {undefined}
     */
    payCount=undefined   
    /**
     * 
     * @type {undefined}
     */
    incomeCount=undefined
    
}
export class incrementNsuser {
  
    /**
     *
     * @param {Number} id 
     * @param {String} name 
     * @param {String} username 
     * @param {undefined} payCount 
     * @param {undefined} incomeCount 
     */ 
    constructor(id = undefined,name = undefined,username = undefined,payCount = undefined,incomeCount = undefined){
        this.id = id
        this.name = name
        this.username = username
        this.payCount = payCount
        this.incomeCount = incomeCount
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    name=undefined   
    /**
     * 
     * @type {String}
     */
    username=undefined   
    /**
     * 
     * @type {undefined}
     */
    payCount=undefined   
    /**
     * 
     * @type {undefined}
     */
    incomeCount=undefined
    
}
export class listSampletemp {
  
    /**
     *
     * @param {Number} results 
     * @param {Array} records 
     */ 
    constructor(results = undefined,records = undefined){
        this.results = results
        this.records = records
    }
       
    /**
     * 
     * @type {Number}
     */
    results=undefined   
    /**
     * 
     * @type {Array}
     */
    records=undefined
    
}
export class createSampletemp {
  
    /**
     *
     * @param {Number} id 
     * @param {Number} appId 
     * @param {String} name 
     * @param {String} temp 
     * @param {String} redirectUrl 
     * @param {undefined} redirectFlag 
     */ 
    constructor(id = undefined,appId = undefined,name = undefined,temp = undefined,redirectUrl = undefined,redirectFlag = undefined){
        this.id = id
        this.appId = appId
        this.name = name
        this.temp = temp
        this.redirectUrl = redirectUrl
        this.redirectFlag = redirectFlag
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {Number}
     */
    appId=undefined   
    /**
     * 
     * @type {String}
     */
    name=undefined   
    /**
     * 
     * @type {String}
     */
    temp=undefined   
    /**
     * 
     * @type {String}
     */
    redirectUrl=undefined   
    /**
     * 
     * @type {undefined}
     */
    redirectFlag=undefined
    
}
export class readSampletemp {
  
    /**
     *
     * @param {Number} id 
     * @param {Number} appId 
     * @param {String} name 
     * @param {String} temp 
     * @param {String} redirectUrl 
     * @param {undefined} redirectFlag 
     */ 
    constructor(id = undefined,appId = undefined,name = undefined,temp = undefined,redirectUrl = undefined,redirectFlag = undefined){
        this.id = id
        this.appId = appId
        this.name = name
        this.temp = temp
        this.redirectUrl = redirectUrl
        this.redirectFlag = redirectFlag
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {Number}
     */
    appId=undefined   
    /**
     * 
     * @type {String}
     */
    name=undefined   
    /**
     * 
     * @type {String}
     */
    temp=undefined   
    /**
     * 
     * @type {String}
     */
    redirectUrl=undefined   
    /**
     * 
     * @type {undefined}
     */
    redirectFlag=undefined
    
}
export class updateSampletemp {
  
    /**
     *
     * @param {Number} id 
     * @param {Number} appId 
     * @param {String} name 
     * @param {String} temp 
     * @param {String} redirectUrl 
     * @param {undefined} redirectFlag 
     */ 
    constructor(id = undefined,appId = undefined,name = undefined,temp = undefined,redirectUrl = undefined,redirectFlag = undefined){
        this.id = id
        this.appId = appId
        this.name = name
        this.temp = temp
        this.redirectUrl = redirectUrl
        this.redirectFlag = redirectFlag
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {Number}
     */
    appId=undefined   
    /**
     * 
     * @type {String}
     */
    name=undefined   
    /**
     * 
     * @type {String}
     */
    temp=undefined   
    /**
     * 
     * @type {String}
     */
    redirectUrl=undefined   
    /**
     * 
     * @type {undefined}
     */
    redirectFlag=undefined
    
}
export class incrementSampletemp {
  
    /**
     *
     * @param {Number} id 
     * @param {Number} appId 
     * @param {String} name 
     * @param {String} temp 
     * @param {String} redirectUrl 
     * @param {undefined} redirectFlag 
     */ 
    constructor(id = undefined,appId = undefined,name = undefined,temp = undefined,redirectUrl = undefined,redirectFlag = undefined){
        this.id = id
        this.appId = appId
        this.name = name
        this.temp = temp
        this.redirectUrl = redirectUrl
        this.redirectFlag = redirectFlag
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {Number}
     */
    appId=undefined   
    /**
     * 
     * @type {String}
     */
    name=undefined   
    /**
     * 
     * @type {String}
     */
    temp=undefined   
    /**
     * 
     * @type {String}
     */
    redirectUrl=undefined   
    /**
     * 
     * @type {undefined}
     */
    redirectFlag=undefined
    
}
export class listWeixinuserinfo {
  
    /**
     *
     * @param {Number} results 
     * @param {Array} records 
     */ 
    constructor(results = undefined,records = undefined){
        this.results = results
        this.records = records
    }
       
    /**
     * 
     * @type {Number}
     */
    results=undefined   
    /**
     * 
     * @type {Array}
     */
    records=undefined
    
}
export class createWeixinuserinfo {
  
    /**
     *
     * @param {Number} id 
     * @param {String} site 
     * @param {Number} userId 
     * @param {String} sk 
     * @param {String} openid 
     * @param {String} province 
     * @param {String} nickName 
     * @param {String} language 
     * @param {Number} gender 
     * @param {String} country 
     * @param {String} city 
     * @param {String} avatarUrl 
     * @param {Number} roleId 
     * @param {String} update_time 
     */ 
    constructor(id = undefined,site = undefined,userId = undefined,sk = undefined,openid = undefined,province = undefined,nickName = undefined,language = undefined,gender = undefined,country = undefined,city = undefined,avatarUrl = undefined,roleId = undefined,update_time = undefined){
        this.id = id
        this.site = site
        this.userId = userId
        this.sk = sk
        this.openid = openid
        this.province = province
        this.nickName = nickName
        this.language = language
        this.gender = gender
        this.country = country
        this.city = city
        this.avatarUrl = avatarUrl
        this.roleId = roleId
        this.update_time = update_time
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    site=undefined   
    /**
     * 
     * @type {Number}
     */
    userId=undefined   
    /**
     * 
     * @type {String}
     */
    sk=undefined   
    /**
     * 
     * @type {String}
     */
    openid=undefined   
    /**
     * 
     * @type {String}
     */
    province=undefined   
    /**
     * 
     * @type {String}
     */
    nickName=undefined   
    /**
     * 
     * @type {String}
     */
    language=undefined   
    /**
     * 
     * @type {Number}
     */
    gender=undefined   
    /**
     * 
     * @type {String}
     */
    country=undefined   
    /**
     * 
     * @type {String}
     */
    city=undefined   
    /**
     * 
     * @type {String}
     */
    avatarUrl=undefined   
    /**
     * 
     * @type {Number}
     */
    roleId=undefined   
    /**
     * 
     * @type {String}
     */
    update_time=undefined
    
}
export class readWeixinuserinfo {
  
    /**
     *
     * @param {Number} id 
     * @param {String} site 
     * @param {Number} userId 
     * @param {String} sk 
     * @param {String} openid 
     * @param {String} province 
     * @param {String} nickName 
     * @param {String} language 
     * @param {Number} gender 
     * @param {String} country 
     * @param {String} city 
     * @param {String} avatarUrl 
     * @param {Number} roleId 
     * @param {String} update_time 
     */ 
    constructor(id = undefined,site = undefined,userId = undefined,sk = undefined,openid = undefined,province = undefined,nickName = undefined,language = undefined,gender = undefined,country = undefined,city = undefined,avatarUrl = undefined,roleId = undefined,update_time = undefined){
        this.id = id
        this.site = site
        this.userId = userId
        this.sk = sk
        this.openid = openid
        this.province = province
        this.nickName = nickName
        this.language = language
        this.gender = gender
        this.country = country
        this.city = city
        this.avatarUrl = avatarUrl
        this.roleId = roleId
        this.update_time = update_time
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    site=undefined   
    /**
     * 
     * @type {Number}
     */
    userId=undefined   
    /**
     * 
     * @type {String}
     */
    sk=undefined   
    /**
     * 
     * @type {String}
     */
    openid=undefined   
    /**
     * 
     * @type {String}
     */
    province=undefined   
    /**
     * 
     * @type {String}
     */
    nickName=undefined   
    /**
     * 
     * @type {String}
     */
    language=undefined   
    /**
     * 
     * @type {Number}
     */
    gender=undefined   
    /**
     * 
     * @type {String}
     */
    country=undefined   
    /**
     * 
     * @type {String}
     */
    city=undefined   
    /**
     * 
     * @type {String}
     */
    avatarUrl=undefined   
    /**
     * 
     * @type {Number}
     */
    roleId=undefined   
    /**
     * 
     * @type {String}
     */
    update_time=undefined
    
}
export class updateWeixinuserinfo {
  
    /**
     *
     * @param {Number} id 
     * @param {String} site 
     * @param {Number} userId 
     * @param {String} sk 
     * @param {String} openid 
     * @param {String} province 
     * @param {String} nickName 
     * @param {String} language 
     * @param {Number} gender 
     * @param {String} country 
     * @param {String} city 
     * @param {String} avatarUrl 
     * @param {Number} roleId 
     * @param {String} update_time 
     */ 
    constructor(id = undefined,site = undefined,userId = undefined,sk = undefined,openid = undefined,province = undefined,nickName = undefined,language = undefined,gender = undefined,country = undefined,city = undefined,avatarUrl = undefined,roleId = undefined,update_time = undefined){
        this.id = id
        this.site = site
        this.userId = userId
        this.sk = sk
        this.openid = openid
        this.province = province
        this.nickName = nickName
        this.language = language
        this.gender = gender
        this.country = country
        this.city = city
        this.avatarUrl = avatarUrl
        this.roleId = roleId
        this.update_time = update_time
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    site=undefined   
    /**
     * 
     * @type {Number}
     */
    userId=undefined   
    /**
     * 
     * @type {String}
     */
    sk=undefined   
    /**
     * 
     * @type {String}
     */
    openid=undefined   
    /**
     * 
     * @type {String}
     */
    province=undefined   
    /**
     * 
     * @type {String}
     */
    nickName=undefined   
    /**
     * 
     * @type {String}
     */
    language=undefined   
    /**
     * 
     * @type {Number}
     */
    gender=undefined   
    /**
     * 
     * @type {String}
     */
    country=undefined   
    /**
     * 
     * @type {String}
     */
    city=undefined   
    /**
     * 
     * @type {String}
     */
    avatarUrl=undefined   
    /**
     * 
     * @type {Number}
     */
    roleId=undefined   
    /**
     * 
     * @type {String}
     */
    update_time=undefined
    
}
export class incrementWeixinuserinfo {
  
    /**
     *
     * @param {Number} id 
     * @param {String} site 
     * @param {Number} userId 
     * @param {String} sk 
     * @param {String} openid 
     * @param {String} province 
     * @param {String} nickName 
     * @param {String} language 
     * @param {Number} gender 
     * @param {String} country 
     * @param {String} city 
     * @param {String} avatarUrl 
     * @param {Number} roleId 
     * @param {String} update_time 
     */ 
    constructor(id = undefined,site = undefined,userId = undefined,sk = undefined,openid = undefined,province = undefined,nickName = undefined,language = undefined,gender = undefined,country = undefined,city = undefined,avatarUrl = undefined,roleId = undefined,update_time = undefined){
        this.id = id
        this.site = site
        this.userId = userId
        this.sk = sk
        this.openid = openid
        this.province = province
        this.nickName = nickName
        this.language = language
        this.gender = gender
        this.country = country
        this.city = city
        this.avatarUrl = avatarUrl
        this.roleId = roleId
        this.update_time = update_time
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    site=undefined   
    /**
     * 
     * @type {Number}
     */
    userId=undefined   
    /**
     * 
     * @type {String}
     */
    sk=undefined   
    /**
     * 
     * @type {String}
     */
    openid=undefined   
    /**
     * 
     * @type {String}
     */
    province=undefined   
    /**
     * 
     * @type {String}
     */
    nickName=undefined   
    /**
     * 
     * @type {String}
     */
    language=undefined   
    /**
     * 
     * @type {Number}
     */
    gender=undefined   
    /**
     * 
     * @type {String}
     */
    country=undefined   
    /**
     * 
     * @type {String}
     */
    city=undefined   
    /**
     * 
     * @type {String}
     */
    avatarUrl=undefined   
    /**
     * 
     * @type {Number}
     */
    roleId=undefined   
    /**
     * 
     * @type {String}
     */
    update_time=undefined
    
}
export class listWxpusherapps {
  
    /**
     *
     * @param {Number} results 
     * @param {Array} records 
     */ 
    constructor(results = undefined,records = undefined){
        this.results = results
        this.records = records
    }
       
    /**
     * 
     * @type {Number}
     */
    results=undefined   
    /**
     * 
     * @type {Array}
     */
    records=undefined
    
}
export class createWxpusherapps {
  
    /**
     *
     * @param {Number} id 
     * @param {Number} appId 
     * @param {String} appName 
     * @param {String} appToken 
     * @param {String} type 
     * @param {String} pushmsg 
     * @param {String} redrictUrl 
     * @param {String} userTip 
     */ 
    constructor(id = undefined,appId = undefined,appName = undefined,appToken = undefined,type = undefined,pushmsg = undefined,redrictUrl = undefined,userTip = undefined){
        this.id = id
        this.appId = appId
        this.appName = appName
        this.appToken = appToken
        this.type = type
        this.pushmsg = pushmsg
        this.redrictUrl = redrictUrl
        this.userTip = userTip
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {Number}
     */
    appId=undefined   
    /**
     * 
     * @type {String}
     */
    appName=undefined   
    /**
     * 
     * @type {String}
     */
    appToken=undefined   
    /**
     * 
     * @type {String}
     */
    type=undefined   
    /**
     * 
     * @type {String}
     */
    pushmsg=undefined   
    /**
     * 
     * @type {String}
     */
    redrictUrl=undefined   
    /**
     * 
     * @type {String}
     */
    userTip=undefined
    
}
export class readWxpusherapps {
  
    /**
     *
     * @param {Number} id 
     * @param {Number} appId 
     * @param {String} appName 
     * @param {String} appToken 
     * @param {String} type 
     * @param {String} pushmsg 
     * @param {String} redrictUrl 
     * @param {String} userTip 
     */ 
    constructor(id = undefined,appId = undefined,appName = undefined,appToken = undefined,type = undefined,pushmsg = undefined,redrictUrl = undefined,userTip = undefined){
        this.id = id
        this.appId = appId
        this.appName = appName
        this.appToken = appToken
        this.type = type
        this.pushmsg = pushmsg
        this.redrictUrl = redrictUrl
        this.userTip = userTip
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {Number}
     */
    appId=undefined   
    /**
     * 
     * @type {String}
     */
    appName=undefined   
    /**
     * 
     * @type {String}
     */
    appToken=undefined   
    /**
     * 
     * @type {String}
     */
    type=undefined   
    /**
     * 
     * @type {String}
     */
    pushmsg=undefined   
    /**
     * 
     * @type {String}
     */
    redrictUrl=undefined   
    /**
     * 
     * @type {String}
     */
    userTip=undefined
    
}
export class updateWxpusherapps {
  
    /**
     *
     * @param {Number} id 
     * @param {Number} appId 
     * @param {String} appName 
     * @param {String} appToken 
     * @param {String} type 
     * @param {String} pushmsg 
     * @param {String} redrictUrl 
     * @param {String} userTip 
     */ 
    constructor(id = undefined,appId = undefined,appName = undefined,appToken = undefined,type = undefined,pushmsg = undefined,redrictUrl = undefined,userTip = undefined){
        this.id = id
        this.appId = appId
        this.appName = appName
        this.appToken = appToken
        this.type = type
        this.pushmsg = pushmsg
        this.redrictUrl = redrictUrl
        this.userTip = userTip
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {Number}
     */
    appId=undefined   
    /**
     * 
     * @type {String}
     */
    appName=undefined   
    /**
     * 
     * @type {String}
     */
    appToken=undefined   
    /**
     * 
     * @type {String}
     */
    type=undefined   
    /**
     * 
     * @type {String}
     */
    pushmsg=undefined   
    /**
     * 
     * @type {String}
     */
    redrictUrl=undefined   
    /**
     * 
     * @type {String}
     */
    userTip=undefined
    
}
export class incrementWxpusherapps {
  
    /**
     *
     * @param {Number} id 
     * @param {Number} appId 
     * @param {String} appName 
     * @param {String} appToken 
     * @param {String} type 
     * @param {String} pushmsg 
     * @param {String} redrictUrl 
     * @param {String} userTip 
     */ 
    constructor(id = undefined,appId = undefined,appName = undefined,appToken = undefined,type = undefined,pushmsg = undefined,redrictUrl = undefined,userTip = undefined){
        this.id = id
        this.appId = appId
        this.appName = appName
        this.appToken = appToken
        this.type = type
        this.pushmsg = pushmsg
        this.redrictUrl = redrictUrl
        this.userTip = userTip
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {Number}
     */
    appId=undefined   
    /**
     * 
     * @type {String}
     */
    appName=undefined   
    /**
     * 
     * @type {String}
     */
    appToken=undefined   
    /**
     * 
     * @type {String}
     */
    type=undefined   
    /**
     * 
     * @type {String}
     */
    pushmsg=undefined   
    /**
     * 
     * @type {String}
     */
    redrictUrl=undefined   
    /**
     * 
     * @type {String}
     */
    userTip=undefined
    
}
export class listWxpusheruserinfo {
  
    /**
     *
     * @param {Number} results 
     * @param {Array} records 
     */ 
    constructor(results = undefined,records = undefined){
        this.results = results
        this.records = records
    }
       
    /**
     * 
     * @type {Number}
     */
    results=undefined   
    /**
     * 
     * @type {Array}
     */
    records=undefined
    
}
export class createWxpusheruserinfo {
  
    /**
     *
     * @param {Number} id 
     * @param {Number} appId 
     * @param {String} appName 
     * @param {String} source 
     * @param {String} userName 
     * @param {String} userHeadImg 
     * @param {String} time 
     * @param {String} uid 
     * @param {String} sk 
     * @param {Number} userId 
     * @param {Number} roleId 
     * @param {String} update_time 
     */ 
    constructor(id = undefined,appId = undefined,appName = undefined,source = undefined,userName = undefined,userHeadImg = undefined,time = undefined,uid = undefined,sk = undefined,userId = undefined,roleId = undefined,update_time = undefined){
        this.id = id
        this.appId = appId
        this.appName = appName
        this.source = source
        this.userName = userName
        this.userHeadImg = userHeadImg
        this.time = time
        this.uid = uid
        this.sk = sk
        this.userId = userId
        this.roleId = roleId
        this.update_time = update_time
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {Number}
     */
    appId=undefined   
    /**
     * 
     * @type {String}
     */
    appName=undefined   
    /**
     * 
     * @type {String}
     */
    source=undefined   
    /**
     * 
     * @type {String}
     */
    userName=undefined   
    /**
     * 
     * @type {String}
     */
    userHeadImg=undefined   
    /**
     * 
     * @type {String}
     */
    time=undefined   
    /**
     * 
     * @type {String}
     */
    uid=undefined   
    /**
     * 
     * @type {String}
     */
    sk=undefined   
    /**
     * 
     * @type {Number}
     */
    userId=undefined   
    /**
     * 
     * @type {Number}
     */
    roleId=undefined   
    /**
     * 
     * @type {String}
     */
    update_time=undefined
    
}
export class readWxpusheruserinfo {
  
    /**
     *
     * @param {Number} id 
     * @param {Number} appId 
     * @param {String} appName 
     * @param {String} source 
     * @param {String} userName 
     * @param {String} userHeadImg 
     * @param {String} time 
     * @param {String} uid 
     * @param {String} sk 
     * @param {Number} userId 
     * @param {Number} roleId 
     * @param {String} update_time 
     */ 
    constructor(id = undefined,appId = undefined,appName = undefined,source = undefined,userName = undefined,userHeadImg = undefined,time = undefined,uid = undefined,sk = undefined,userId = undefined,roleId = undefined,update_time = undefined){
        this.id = id
        this.appId = appId
        this.appName = appName
        this.source = source
        this.userName = userName
        this.userHeadImg = userHeadImg
        this.time = time
        this.uid = uid
        this.sk = sk
        this.userId = userId
        this.roleId = roleId
        this.update_time = update_time
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {Number}
     */
    appId=undefined   
    /**
     * 
     * @type {String}
     */
    appName=undefined   
    /**
     * 
     * @type {String}
     */
    source=undefined   
    /**
     * 
     * @type {String}
     */
    userName=undefined   
    /**
     * 
     * @type {String}
     */
    userHeadImg=undefined   
    /**
     * 
     * @type {String}
     */
    time=undefined   
    /**
     * 
     * @type {String}
     */
    uid=undefined   
    /**
     * 
     * @type {String}
     */
    sk=undefined   
    /**
     * 
     * @type {Number}
     */
    userId=undefined   
    /**
     * 
     * @type {Number}
     */
    roleId=undefined   
    /**
     * 
     * @type {String}
     */
    update_time=undefined
    
}
export class updateWxpusheruserinfo {
  
    /**
     *
     * @param {Number} id 
     * @param {Number} appId 
     * @param {String} appName 
     * @param {String} source 
     * @param {String} userName 
     * @param {String} userHeadImg 
     * @param {String} time 
     * @param {String} uid 
     * @param {String} sk 
     * @param {Number} userId 
     * @param {Number} roleId 
     * @param {String} update_time 
     */ 
    constructor(id = undefined,appId = undefined,appName = undefined,source = undefined,userName = undefined,userHeadImg = undefined,time = undefined,uid = undefined,sk = undefined,userId = undefined,roleId = undefined,update_time = undefined){
        this.id = id
        this.appId = appId
        this.appName = appName
        this.source = source
        this.userName = userName
        this.userHeadImg = userHeadImg
        this.time = time
        this.uid = uid
        this.sk = sk
        this.userId = userId
        this.roleId = roleId
        this.update_time = update_time
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {Number}
     */
    appId=undefined   
    /**
     * 
     * @type {String}
     */
    appName=undefined   
    /**
     * 
     * @type {String}
     */
    source=undefined   
    /**
     * 
     * @type {String}
     */
    userName=undefined   
    /**
     * 
     * @type {String}
     */
    userHeadImg=undefined   
    /**
     * 
     * @type {String}
     */
    time=undefined   
    /**
     * 
     * @type {String}
     */
    uid=undefined   
    /**
     * 
     * @type {String}
     */
    sk=undefined   
    /**
     * 
     * @type {Number}
     */
    userId=undefined   
    /**
     * 
     * @type {Number}
     */
    roleId=undefined   
    /**
     * 
     * @type {String}
     */
    update_time=undefined
    
}
export class incrementWxpusheruserinfo {
  
    /**
     *
     * @param {Number} id 
     * @param {Number} appId 
     * @param {String} appName 
     * @param {String} source 
     * @param {String} userName 
     * @param {String} userHeadImg 
     * @param {String} time 
     * @param {String} uid 
     * @param {String} sk 
     * @param {Number} userId 
     * @param {Number} roleId 
     * @param {String} update_time 
     */ 
    constructor(id = undefined,appId = undefined,appName = undefined,source = undefined,userName = undefined,userHeadImg = undefined,time = undefined,uid = undefined,sk = undefined,userId = undefined,roleId = undefined,update_time = undefined){
        this.id = id
        this.appId = appId
        this.appName = appName
        this.source = source
        this.userName = userName
        this.userHeadImg = userHeadImg
        this.time = time
        this.uid = uid
        this.sk = sk
        this.userId = userId
        this.roleId = roleId
        this.update_time = update_time
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {Number}
     */
    appId=undefined   
    /**
     * 
     * @type {String}
     */
    appName=undefined   
    /**
     * 
     * @type {String}
     */
    source=undefined   
    /**
     * 
     * @type {String}
     */
    userName=undefined   
    /**
     * 
     * @type {String}
     */
    userHeadImg=undefined   
    /**
     * 
     * @type {String}
     */
    time=undefined   
    /**
     * 
     * @type {String}
     */
    uid=undefined   
    /**
     * 
     * @type {String}
     */
    sk=undefined   
    /**
     * 
     * @type {Number}
     */
    userId=undefined   
    /**
     * 
     * @type {Number}
     */
    roleId=undefined   
    /**
     * 
     * @type {String}
     */
    update_time=undefined
    
}
export class pingStatus {
  
    /**
     *
     * @param {Number} db 
     * @param {Number} cache 
     */ 
    constructor(db = undefined,cache = undefined){
        this.db = db
        this.cache = cache
    }
       
    /**
     * 
     * @type {Number}
     */
    db=undefined   
    /**
     * 
     * @type {Number}
     */
    cache=undefined
    
}
