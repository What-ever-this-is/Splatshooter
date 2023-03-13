const CONNECTION = {
    socket:undefined,
    newMessage:function(type,data){
        return JSON.stringify({
            type:type,
            data:data,
            timestamp:new Date().toString(0)
        })
    },
    /**
     * 
     * @param {Message} message 
     */
    parseMessage:function(message){
        switch(message.type){
            case "info":
                console.log(message.data)
            case "matchjoin":
                
        }
    }
}

CONNECTION.socket = new WebSocket(`ws://${PARAMETERS.HOST_ON_LOCAL_SERVER?PARAMETERS.LOCAL_URL:PARAMETERS.DEPLOYMENT_URL}`)
CONNECTION.socket.addEventListener('open',(e)=>{
    CONNECTION.socket.send(CONNECTION.newMessage("message","Hi server!"))
})
CONNECTION.socket.addEventListener('message',(e)=>{
    
})