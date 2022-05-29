// const square = function (x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x

// console.log(square(3))


var event = {
    name : 'Birthday party',
    guestList : ['Anderson', 'Tidinha', 'Felipe'],
    printGuestList : function () {
        const that = this
        console.log('Guest list for '+this.name)
        this.guestList.forEach(function (guest) {
            console.log(guest + ' is attendingo ' + that.name)
        });
    }
}

event.printGuestList()
event = {
    name : 'Birthday party',
    // printGuestList :  () => console.log('Guest list for '+this.name)
    guestList : ['Anderson', 'Tidinha', 'Felipe'],
    printGuestList : function () {
        
        console.log('Guest list for '+this.name)
        this.guestList.forEach( (guest) =>{
            console.log(guest + ' is attendingo ' + this.name)
        });
    }
}

event.printGuestList()