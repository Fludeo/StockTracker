// const csv2json = require('csv2json');
// const fs = require('fs');

// function cvstoJSON() {
//   fs.createReadStream('../data/csv/data.csv')
//     .pipe(csv2json({
//       // Defaults to comma.
//       separator: ',',
//     }))
//     .pipe(fs.createWriteStream('../data/csv/data.json'));
// }

// async function dataLoad(container) {
//   const jsonData = JSON.parse(fs.readFileSync('./data/csv/data.json'));
//   jsonData.map((product) => container.get('ProductModel').build({
//     id: product['1'],
//     descripcion: product['2'],
//     precioCosto: parseFloat(product['3']),
//   }).save());
// }

// module.exports.dataLoad = dataLoad;
