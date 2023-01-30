class Product {
    
    constructor(){
        this.id = 1;
        this.arrayProducts =[];
    }

    Add() {
        let product = this.readData()
        if(this.Validate(product) == true){
            this.Save(product)
        }
        
        this.List()
        this.Cancel()

        // console.log(this.arrayProducts)
    }

    readData() {
        let product ={}

        product.id = this.id;
        product.nameProduct = document.getElementById('productName').value
        product.priceProduct = document.getElementById('productPrice').value

        return product

    }

    Validate(product){
        let msg = '';

        if(product.nameProduct == ''){
            msg += 'Please, enter product name! \n'
        }

        if(product.priceProduct == ''){
            msg += 'Please, enter product price! \n'
        }
        if(msg != ''){
            alert(msg)
            return false
        }

        return true

    }
    Save(product){
        this.arrayProducts.push(product)
        this.id++;
    }

    List() {
        let tbody = document.getElementById('tbody')
        tbody.innerText = ''

        for(let i = 0; i < this.arrayProducts.length; i++){
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_name = tr.insertCell();
            let td_price = tr.insertCell();
            let td_del = tr.insertCell();

            td_id.innerText = this.arrayProducts[i].id;
            td_name.innerText = this.arrayProducts[i].nameProduct;
            td_price.innerText = this.arrayProducts[i].priceProduct;
            
            let image = document.createElement('img')
            image.src = 'del.png'
            image.setAttribute("onclick", "product.Delete("+this.arrayProducts[i].id+")")
            td_del.appendChild(image)

        }
    }

    Cancel(){
        document.getElementById('productName').value = ''
        document.getElementById('productPrice').value = ''
    }

    Delete(id){
        
        let tbody = document.getElementById('tbody')
        for(let i = 0; i < this.arrayProducts.length; i++) {
            if(this.arrayProducts[i].id == id) {
                this.arrayProducts.splice(i, 1)
                tbody.deleteRow(i)
            }
        }
        alert(`the product ${id} has been successfully deleted`)
    }
}

var product = new Product();