let cart = [
    // item: '',
    // quantity: 0

];

let callStorage =()=>{
        if(localStorage.getItem(`cart`)===null){
            return[]
        } else {
            return JSON.parse(localStorage.getItem(`cart`))
        }
} 

let myObject = new Object();
let loopingCart = cart => {
    let cartResult = "";
    if (cart.length != 0) {
        for (let index = 0; index < cart.length; index++) {
            cartResult += `${index + 1}. Item : ${cart[index].item}, Quantity : ${cart[index].quantity} \n`;
        }
        alert(cartResult);
    } else {
        alert("Your cart is empty")
    }

};

let showCart = list => {
    alert("Welcome to our project")
    loopingCart(list)
    let isAddCart = confirm("Do you want to add item ?")
    if (isAddCart === true) {
        let newItem = prompt("Write your item here")
        let newQuantity = prompt("Write the quantity here")

        myObject.item = newItem;
        myObject.quantity = newQuantity;
        
        let storage = callStorage()  
        storage.push(myObject)
        localStorage.setItem(`cart`,JSON.stringify(storage))
        loopingCart(storage)

    } else if (isAddCart === false) {
        editCart(list)
    }
}

let editCart = list => {
    let isEditCart = confirm('Do you want to edit?');
    if (isEditCart === true) {
        let indexItem = prompt('Select item number');
        let editCart = prompt('Insert edit item name');
        let editQty = prompt('Insert your item number')
        let store = new Object;
        store.item = editCart;
        store.quantity = editQty;
        
        list.splice(indexItem - 1, 1, store);
        
        loopingCart(list);
    } else if (isEditCart === false) {
        deleteCart(list);
    }

};

let deleteCart = list => {
    let isDeleteCart = confirm(`Do you want to delete cart?`)

        if (isDeleteCart === true) {
            let cartNumber = prompt(`Write cart number`);

            list.splice(cartNumber - 1, 1);

            loopingCart(list);
            localStorage.setItem(`cart`,JSON.stringify(list))
        } else if (isDeleteCart === false) {

        }
    }

showCart(callStorage())