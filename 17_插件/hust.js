const hust= {
    install:function(Vue,options){
       //添加两个全局指令
       //给Vue原型上添加数据，供vm使用
       Vue.prototype.$random = function(min,max){
           return Math.floor(Math.random()*(max-min)+min)
       }
       Vue.prototype.$now = moment(new Date()).format('YYYY-MM-DD dd HH:mm:ss a') //.toTimeString()
       Vue.showInfo = function(){
           console.log('我是一个数据')
       }
       Vue.directive('upper-text', function(el,binding){
           el.innerText = binding.value.toUpperCase()
       })
       //给Vue添加属性
       Vue.getVersion='V1.0.1'
       Vue.projectName='学生管理系统'
    }
}