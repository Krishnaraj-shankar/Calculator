class Calculator {
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement=previousOperandTextElement
        this.currentOperandTextElement=currentOperandTextElement
    }
    

    clear(){
        this.currenOperant = ''
        this.previousOperand = ''
        this.operation = undefined
    }
    delete() {

    }
    appendNumber(number){
        if(number === '.' && this.currenOperant.includes('.')) return
        this.currentOperandTextElement.innerText = this.currenOperant.toString() + number.toString()
    }

    chooseOperation(operation)){

    }

    compute(){

    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currenOperant

    }



}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operand]')
const equalsButton = document.querySelectorAll('[data-equals]')
const deleteButton = document.querySelectorAll('[data-delete]')
const allClearButtons = document.querySelectorAll('[data-all-clear]')
const previousOperandTextElement = document.querySelectorAll('[data-previous-operand]')
const currentOperandTextElement = document.querySelectorAll('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement)

numberButtons,forEach(button => {
    button.addEventListener('click',()=>{
        calculator.appendNumber(button,innerText)
        calculator.updateDisplay()
    })
})

numberButtons,forEach(button => {
    button.addEventListener('click',()=>{
        calculator.appendNumber(button,innerText)
        calculator.updateDisplay()
    })
})