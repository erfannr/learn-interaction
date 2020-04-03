let list = []
let result = ''
let obj = {
    barang: '',
    qty: ''
}



alert('Selamat datang di toko kami')


let addBarang = () => {

    let addBarang = confirm('Akan menambahkan barang')
    if (addBarang === true) {

        let barang = prompt('Masukkan nama barang')
        let qty = prompt('Masukkan jumlah barang')

        obj.barang = barang;
        obj.qty = qty

        let existingList = localStorage.getItem('list') === null ? [] : JSON.parse(localStorage.getItem('list'))
        console.log(existingList, 'existinglist')
        existingList.push(obj)
        localStorage.setItem("list", JSON.stringify(existingList)); // set local storage

        tampilBarang()

    } else if (addBarang === false) {
        let editBarang = confirm("apakah anda ingin edit barang?")
        if (editBarang === true) {

            let existingList = localStorage.getItem('list') === null ? [] : JSON.parse(localStorage.getItem('list'))
            let barangList = {
                nomor: '',
                barang: '',
                qty: ''
            }
            let nomorBaru = prompt("masukan nomor barang")
            let barangBaru = prompt("masukan nama barang")
            let quantityBaru = prompt("masukan quantitynya")
            let barangEdit = new Object

            barangEdit.nomor = nomorBaru;
            barangEdit.barang = barangBaru;
            barangEdit.qty = quantityBaru;
            existingList.push(barangList)
            existingList.splice(nomorBaru - 1, 1, barangEdit);
            localStorage.setItem("list", JSON.stringify(existingList)); // set local storage


            // list.splice(nomorBaru - 1, 1, addBarang);
            tampilBarang();
        }
        else if
            (editBarang === false) {
            let deleteBarang = confirm("apakah anda mau mendelete barang?")
            if (deleteBarang === true) {
                let existingList = localStorage.getItem('list') === null ? [] : JSON.parse(localStorage.getItem('list'))

                let deleteNumber = prompt("masukan nomor yang mau di delet")
                existingList.splice(deleteNumber - 1, 1);
                localStorage.setItem("list", JSON.stringify(existingList)); // set local storage
                tampilBarang();


            } else if (deleteBarang === false) {

                let find = JSON.parse(localStorage.getItem('list'))
                let indexTodo = prompt("Write Qty Search");

                const item = find.filter(list => list.qty == indexTodo);

                let result = ''

                for (let i = 0; i < item.length; i++) {
                    result += `${i + 1}. ${item[i].barang} (${item[i].qty}) \n`
                }

                alert(result)
            }
        }
    }
}




let tampilBarang = () => {
    let tampil = JSON.parse(localStorage.getItem('list'))


    for (let i = 0; i < tampil.length; i++) {
        result += `${i + 1}. ${tampil[i].barang} (${tampil[i].qty}) \n`
    }

    alert(result);


}

addBarang() 