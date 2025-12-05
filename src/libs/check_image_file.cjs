const fs = require('fs');
const path = require('path');
const productData = require('../data/product.json');

const imagesFolder = path.join(process.cwd(), 'public', 'img', 'product');

productData.forEach(product => {
  const exists = fs.existsSync(path.join(imagesFolder, product.image));
  console.log(`${product.title} -> ${product.image}: ${exists ? 'FOUND' : 'MISSING'}`);
});
