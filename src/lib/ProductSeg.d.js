
export default class ProductSec {
	constructor(serial, model, trademark,fullname, description, price_sell, stock, tags, images) {
		this.serial = serial
		this.model = model
		this.trademark = trademark
		this.fullname= fullname
		this.description= description
		this.price_sell = price_sell
		this.stock = stock
		this.tags = tags
		this.images= images
	}
}

export class storageProductSec extends ProductSec{
	constructor(fullname,description,trademark,model,tags,images,price_sell,warehouseId,price_base,stock,unity,sku,barcode,serial,weigth,dimension,nota){
		super(serial, model, trademark, description, price_sell, stock, tags, images, price_sell)
		this.warehouseId = warehouseId
		this.price_base = price_base    
		this.stock = stock
		this.unity = unity    
		this.sku = sku
		this.barcode = barcode    
		this.serial = serial
		this.weigth= weigth
		this.dimension= dimension
		this.nota= nota
	}
  

}
