
export default class ProductSec {
  constructor(serial, model, trademark, description, price_sell, stock, tags, images, price_sell) {
    this.serial = serial
    this.model = model
    this.trademark = trademark
    this.fullname= fullname
    this.description= description
    this.trademark = trademark
    this.model = model
    this.tags= tags
    this.images= images
    this.price_sell = price_sell
    this.stock = stock
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

const CCTV = new ProductSec('CCTV','Algo mas','panasonic','HsPSn1154',['cctv_in','bulgaries'],'https',25.3)

console.log(CCTV)

const CCTV4CH = new storageProductSec('CCTV','Algo mas','panasonic','HsPSn1154',['cctv_in','bulgaries'],'https',253,'general',202,1500,'USD','SKU_ssss','BC:ssaa','HNDJBSdxaSDskjsj',15154,'151','14,xxs')

console.log(CCTV4CH)

const bytes = await arrayBuffer('msjls')
const buffer = await Buffer.from(bytes)