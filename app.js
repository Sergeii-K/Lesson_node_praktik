const express = require('express');
const server = express();

server.set('view engine', 'ejs');
server.set('views', './views');

server.use(express.static('./public'));

const getArticle = (id) => {
    const product = [
        {id: 1, brand:'Cannondale',model: 'TRAIL GIRLS Balance', year: 2020, price: 648800, foto: './img/TRAIL_GIRLS_Balance_TRQ.jpeg'},
        {id: 2, brand:'Cannondale',model: 'TRAIL 7', year: 2021,  price: 2162700, foto: './img/TRAIL_5.jpeg' },
        {id: 3, brand:'Cannondale',model: 'TRAIL 5', year: 2019, price: 2809500, foto: './img/TRAIL_7_Feminine.jpeg' },
        {id: 4, brand:'Cannondale',model: 'TRAIL FW OS', year: 2020, price: 1098500, foto: './img/TRAIL_FW_OS.jpeg' },
        {id: 5, brand:'Pride', model: 'RUMBLE 9.4', year: 2020, price: 1390400, foto: './img/RUMBLE_9.4.jpeg' },  
        {id: 6, brand:'Pride', model: 'RAM 7.3', year: 2020, price: 4029100, foto: './img/RAM_7.3.jpeg' },  
        {id: 7, brand:'Pride', model: 'RIDER 16', year: 2019, price: 397800, foto: './img/Rider_16.jpeg' },
        {id: 8, brand:'Pride', model: 'Sandy', year: 2019, price: 331500, foto: './img/Sandy.jpeg' }, 
        ];
    const result = product.find(item => item.id === id)
    return result;
};

// server.get('/', (req, res) => {
//     const { id } = req.params;
//     const article = getArticle(Number(id));
//     // consol.log(article);
    
//     const arr = {brand: article.brand, model: article.model, year: article.year, price: article.price, foto: article.foto};
//     // console.log(arr);

//     // res.send('Hello world')
//     res.render('test', {arr: product});
// });

server.get('/', (req, res) => {
    const product = [
       {id: 1, brand:'Cannondale',model: 'TRAIL GIRLS Balance', year: 2020, price: 648800, foto: './img/TRAIL_GIRLS_Balance_TRQ.jpeg'},
       {id: 2, brand:'Cannondale',model: 'TRAIL 7', year: 2021,  price: 2162700, foto: './img/TRAIL_5.jpeg' },
       {id: 3, brand:'Cannondale',model: 'TRAIL 5', year: 2019, price: 2809500, foto: './img/TRAIL_7_Feminine.jpeg' },
       {id: 4, brand:'Cannondale',model: 'TRAIL FW OS', year: 2020, price: 1098500, foto: './img/TRAIL_FW_OS.jpeg' },
       {id: 5, brand:'Pride', model: 'RUMBLE 9.4', year: 2020, price: 1390400, foto: './img/RUMBLE_9.4.jpeg' },  
       {id: 6, brand:'Pride', model: 'RAM 7.3', year: 2020, price: 4029100, foto: './img/RAM_7.3.jpeg' },  
       {id: 7, brand:'Pride', model: 'RIDER 16', year: 2019, price: 397800, foto: './img/Rider_16.jpeg' },
       {id: 8, brand:'Pride', model: 'Sandy', year: 2019, price: 331500, foto: './img/Sandy.jpeg' }, 
       ];
  
   res.render('test', {product: product});
});


server.listen(5000, () => {
    console.log('Я работаю')
}); 