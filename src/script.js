const cheerio = require('cheerio');
const { messages, SUCCESS, ERROR } = require('../checklist');

function getHtml(){
  return document.getElementsByTagName('html')[0].outerHTML;
}

async function applyChecklist(checklist) {
  //get the website's html and load into Cheerio
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

  //nested array and object destructuring with aliasing
  const [{result: html}] = await chrome.scripting.executeScript({
    target: {tabId: tab.id}, 
    function: getHtml
  });

  const $ = cheerio.load(html.toString());
  const responses = {};

  /*
    invoke each function in checklist{} and if successful, save the SUCCESS value from messages{} in the responses{}.
  */
  for (const item in checklist) {
    const success = checklist[item]($);
    responses[item] = messages[item][success ? SUCCESS : ERROR];
  }

  // console.log(responses);
  return responses;
}

export default applyChecklist;

//--------------Old Functions-----------------------------------------------
// const showHtml = async (url) => {
//   const html = await getHtml(url);
//   console.log(html);
// }
//showHtml(url);

//const fetch = require("node-fetch");

// const getHtml = async (url) => {
//   const webpage = await fetch(url);
//   const html = await webpage.text();
//   return html;
// };

// const writeToFile = async (url) => {
//   const html = await getHtml(url);
//   fs.writeFile('webpageHtml.html', html, (err) => {
//     if(err) throw err;
//   });
// }
// writeToFile(url);