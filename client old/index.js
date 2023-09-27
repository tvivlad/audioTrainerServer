const app = new Vue({
 el:"#app",
 data: {
    message:'Сообщение из фреймворка!',
    workmode:false,
    topics:[],
    dialogs:[],
    questions:[],
    selectedDialogs:[],
    selectedTopic:0,
    selectedDialog:''
 },
 methods:{
    getData: async function(){
        let res= await fetch('getTopics')
        let data= await res.json() 
        this.topics=data.topics
        console.log('Пришедшие темы:', data)
        this.dialogs=data.dialogs    
        this.questions=data.questions  
        //this.workmode=true     
    },
    async getTopics(){
        let res=await fetch('getTopics')
        let data=await res.json()   
        this.topics=data.items
        console.log('Пришедшие темы:', this.topics)
        this.workmode=true 
    },
    async getDialogs(){        
        let res=await fetch('getDialogs/?id='+(parseInt(this.selectedTopic)+1))
        let data=await res.json()   
        console.log('ответ на запрос по диалогам:', data)        
        this.dialogs=data.items
        //this.selectedDialogs= this.dialogs.filter((item)=>item.topicId==(parseInt(this.selectedTopic)+1))
        console.log('пришедшие диалоги :', this.dialogs)
    },
    async getQuestions(){  
        let res=await fetch('getTopics')
        let data=await res.json()   
        this.questions=data.topics
        this.selectedDialogs=this.dialogs.filter((item)=>item.topicId==(parseInt(this.selectedTopic)+1))
        console.log('Выбранные диалоги :', this.selectedDialogs)
    }   
 }
})

