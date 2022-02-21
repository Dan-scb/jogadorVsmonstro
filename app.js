
new Vue({
    el: '#app',
    data:{
    start: false,
     lifePlayer: 100,
     lifeMonster: 100,
     alternP: '100%',
     alternM: '100%',
     turns: [],
     turnPandM: []   
    },
    methods:{
        lifeCount(typeMove){
            
            switch(typeMove.target.value){
                case 'atk': this.turn(10)
                break
                case 'sp': this.turn(15)
                break
                case 'hp': this.turn(16)
                break
            }
        },
        turn(statsMove){
            if(statsMove <= 15){
                lifeParam = this.lifePlayer - parseInt(Math.random() * (13 - 5) + 5)
                this.alternP = lifeParam < 0  ? 0 :`${lifeParam}%`
                this.turnPandM.push(this.lifePlayer -lifeParam )
                this.lifePlayer = lifeParam < 0 ? 0 : lifeParam

                //Monster
                lifeParam = this.lifeMonster - parseInt(Math.random() * (statsMove - 5 ) + 5)
                this.alternM = lifeParam < 0 ? 0 : `${lifeParam}%`
                this.turnPandM.push(this.lifeMonster - lifeParam)
                this.lifeMonster = lifeParam < 0 ? 0 : lifeParam
                this.turns.unshift(this.turnPandM)
                this.turnPandM = []
                
            }else{
                lifeParam = this.lifePlayer + parseInt(Math.random() * (statsMove - 4) + 4)
                this.alternP = `${lifeParam}%`
                this.turnPandM.push([lifeParam - this.lifePlayer, 'l'])
                this.lifePlayer = lifeParam
                
                
                //Monster
                lifeParam = this.lifePlayer - parseInt(Math.random() * (13 - 6 +1) + 6)
                this.alternP = `${lifeParam}%`
                this.turnPandM.push(this.lifePlayer - lifeParam)
                this.lifePlayer = lifeParam
                this.turns.unshift(this.turnPandM)
                this.turnPandM = []
            }
        },
        wo(){
            this.lifePlayer = 0
            this.alternP = `${0}%`
        },
        newGame(){
            this.start = true
            this.lifePlayer = 100
            this.lifeMonster = 100
            this.turns = []
            this.target = []
            this.alternP = '100%'
            this.alternM = '100%'
        }
    },
    computed:{
       
    },
    watch:{
        turns(){
            console.log('turns')
        }
    }
})