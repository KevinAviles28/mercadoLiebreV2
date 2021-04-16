
const productos=require('../data/productosBd')

module.exports={
    index: (req,res)=>{
        let ofertas=productos.filter(function(producto){
          return producto.category==="in-sale";
        })
        let visitas=productos.filter(function(producto){
           return  producto.category==="visited";
        })
        let precioReal=function(producto){
           return  (producto.price-(producto.price*producto.discount/100)).toFixed(0).toString().replace( /\B(?=(\d{3})+(?!\d))/g,
           "." );
        }
        res.render('index',{
            title:'Mercado Liebre',
            insale: ofertas,
            visited: visitas,
            precioReal
        })
    }
}