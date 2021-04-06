const fetch = require('node-fetch');
const cheerio = require('cheerio');
const url = 'https://www.fullstackacademy.com/';
const fs = require('fs');
const { checklist, messages, SUCCESS, ERROR } = require('./checklist');

const getHtml = async (url) => {
  const webpage = await fetch(url);
  const html = await webpage.text();
  return html;
};

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

async function applyChecklist(url, checklist) {
  const html = await getHtml(url);
  const $ = cheerio.load(html);
  const responses = {};

  for (const item in checklist) {
    const success = await checklist[item]($);
    responses[item] = messages[item][success ? SUCCESS : ERROR];
  }

  console.log(responses);
  return responses;
}

applyChecklist(url, checklist);
