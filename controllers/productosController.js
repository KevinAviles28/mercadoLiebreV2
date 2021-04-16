
const productosDb=require('../data/productosBd')
module.exports={
    detalle:(req,res)=>{
        let producto= productosDb.find(producto =>{
         return producto.id === Number(req.params.id)  && producto.category === req.params.categoria 
        })        /*id Producto */   /* id ruta */    /*Categoria Producto*/  /*Categoria de la ruta*/
        let precioReal=function(producto){/* Separador de miles */
            return  (producto.price-(producto.price*producto.discount/100)).toFixed(0).toString().replace( /\B(?=(\d{3})+(?!\d))/g,
            "." );
         }
         res.render('productosDetalle',{/* renderiza las vistas y las variables para que puedas usar en el html */
            title:'mercadoLiebre Detalle',
            producto,
            precioReal
        }) 
          /* para ver si esta mostrando el resultado de la variable */
    }
    
}