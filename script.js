const fetch = require('node-fetch');
const cheerio = require('cheerio');
const url = 'https://www.fullstackacademy.com/';
const fs = require('fs');

const getHtml = async (url) => {
  const webpage = await fetch(url);
  const html = await webpage.text();
  return html;
}

// const showHtml = async (url) => {
//   const html = await getHtml(url);
//   console.log(html);
// }
//showHtml(url);

// const writeToFile = async (url) => {
//   const html = await getHtml(url);
//   fs.writeFile('webpageHtml.html', html, (err) => {
//     if(err) throw err;
//   });
// }
// writeToFile(url);

const checkCodeForOneTitleConditional = async (url, conditional) => {
  const html = await getHtml(url);
  const $ = cheerio.load(html);
  const elements = $('title').get();
  return conditional(elements);
}

const checkCodeForViewportZoomConditional = async (url, conditional) => {
  const html = await getHtml(url);
  const $ = cheerio.load(html);
  const viewport = $('meta[name="viewport"]');
  console.log(typeof viewport.attr('content'))
  return conditional(viewport.attr('content'));
}

const oneTitleCondition = (titles) => titles.length === 1
const viewportZoomCondition = (viewport) => !(viewport.includes("user-scalable=no") && viewport.includes("user-scalable = no"));


//will take URL, conditionalsArray/Obj, 
async function doEverything(){
  const responseTitle = await checkCodeForOneTitleConditional(url, oneTitleCondition);
  const responseViewport = await checkCodeForViewportZoomConditional(url, viewportZoomCondition);
  console.log(responseTitle && responseViewport)
  return responseTitle && responseViewport;
}

doEverything();