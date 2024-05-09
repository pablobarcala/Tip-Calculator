var tipBtns = document.getElementsByName("tip")
var calculateBtn = document.getElementById("calc")
var resetBtn = document.getElementById("reset")

var tipAmount = document.getElementById("tipAmount")
var totalAmount = document.getElementById("totalAmount")

var bill
var tip = 0
var people
var tipPerson
var totalPerson

let activeTip

// Click de los botones de tip
for(let i = 0; i < tipBtns.length; i++) {
    tipBtns.item(i).addEventListener("click", () => {
        validateBtn(i)   
    })
}

// Click del boton calculate
calculateBtn.addEventListener("click", () => {
    validateForm()
})

// Click del boton reset
resetBtn.addEventListener("click", () => {
    window.location.reload()
})

// Funcion para validar los form de bill y people
function validateForm() {
    var billForm = document.getElementById("billForm")
    var peopleForm = document.getElementById("peopleForm")

    var billInput = document.getElementById("bill")
    var peopleInput = document.getElementById("people")

    var billError = document.getElementById("billError")
    var peopleError = document.getElementById("peopleError")

    if(billInput.value == "" || peopleInput.value == "") {
        if(billInput.value == "") {
            billForm.classList.add("error")
            billError.classList.add("show")
        }
        if(peopleInput.value == "") {
            peopleForm.classList.add("error")
            peopleError.classList.add("show")
        }
    } else {
        billForm.classList.remove("error")
        billError.classList.remove("show")
        peopleForm.classList.remove("error")
        peopleError.classList.remove("show")

        bill = parseFloat(billInput.value)
        people = parseFloat(peopleInput.value)
        
        calculate()
    }
}

// Funcion para calcular
function calculate() {
    var custom = document.getElementById("custom")

    if(tip == 0 && custom.value != 0){
        tip = (custom.value / 100)
    }

    tipPerson = (bill * tip) / people
    totalPerson = (bill * (tip + 1)) / people

    tipAmount.innerHTML = "$" + tipPerson.toFixed(2)
    totalAmount.innerHTML = "$" + totalPerson.toFixed(2)
}

// Funcion para validar los botones de tip
function validateBtn(i) {
    if(activeTip != undefined){
        if(activeTip == i) {
            tipBtns.item(i).classList.remove("active")

            activeTip = undefined
        } else {
            tipBtns.item(activeTip).classList.remove("active")
            tipBtns.item(i).classList.add("active")

            activeTip = i

            if(tipBtns.item(i).id != "") {
                tip = (tipBtns.item(i).id / 100)
            } else {
                tip = 0
            }
        }
    } else {
        tipBtns.item(i).classList.add("active")
        
        activeTip = i

        if(tipBtns.item(i).id != "") {
            tip = (tipBtns.item(i).id / 100)
        } else {
            tip = 0
        }
    }
}