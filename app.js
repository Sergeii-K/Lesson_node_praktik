const express = require('express');
const server = express();
const fs = require('fs');
const axios = require('axios');
// const product = require('./public/product.json')

server.set('view engine', 'ejs');
server.set('views', './views');

server.use(express.static('./public'));



// fs.readFileSync('product.json', JSON.parse(product), (err) => {
//     if (err) console.Log('Error')
// });

// const initProduct = async () => {
//     const product = await axios.get('localhost:5000/product.json')
//     console.log(result.data);
// }
// initProduct();


server.get('/', (req, res) => {
    const initProduct = async () => {
        const product = await axios.get('../product.json');
        };
    initProduct();
    res.json(product);
    // res.render('test', {product: product});
});

// const getArticle = (id) => {
   
//     const result = product.find(item => item.id === id)
//     return result;
// };

// server.get('/:id', (req, res) => {
//     const { id } = req.params;
//     const article = getArticle(Number(id));
//     const arr = {brand: article.brand, model: article.model, year: article.year, price: article.price, foto: article.foto};

//     res.render('test2', arr);
// });

server.listen(5000, () => {
    console.log('Я работаю')
}); 