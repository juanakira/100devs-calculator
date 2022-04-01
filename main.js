const screen = document.getElementById('screen')

const calc = new Calculator(screen)



function Calculator(sc) {
    this.screen = sc
    
    this.getMethods = function(){
        document.querySelectorAll('span')
    }
} 