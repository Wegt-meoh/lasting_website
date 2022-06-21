import axios from 'axios'

const Cancel=axios.CancelToken

const cancelList=[]   

axios.get('https://www.baidu.com',{
    cancelToken:new Cancel(function(cancel){
        cancelList.push(cancel)
    })
}).then(result=>{
    console.log('result')
}).catch(reason=>{
    console.log('cancel')
    console.log(reason)
})

cancelList.forEach(i=>i('cancel it'))