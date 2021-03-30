// const fetch = require('node-fetch');
// const $ = require('cheerio');
// const url = 'https://www.fullstackacademy.com/';

// fetch(url)
//   .then((res) => res.text())
//   .then((body) => {
    
//     const h1Obj = $('h1', body).contents();
//     //console.log($('h1', body))
//     const h1Result = Object.values(h1Obj).filter((elm) => {
//       if (typeof elm.data === 'string') {
//         return elm.data.includes('software');
//       }
//     });

//     const imgObj = $('img', body);
//   });


// var category = $('span')
//   .filter(function () {
//     return $(this).text().trim() === 'Category:';
//   })
//   .next()
//   .text();