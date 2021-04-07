// This is for url fetch text

// chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//   url = tabs[0].url;
//   // use `url` here inside the callback because it's asynchronous!
// });

// function _getCurrentTab(callback) {
//   //Take a callback
//   var theTab;
//   chrome.tabs.query({ active: true, currentWindow: true }, function (tab) {
//     callback(tab); //call the callback with argument
//     document.getElementById('current_url').innerText = Object.keys(
//       Object.keys(tab)[0]
//     );
//   });
// }

// function _displayTab(tab) {
//   //define your callback function
//   // console.log(tab);
// }

/* 
Documentation:

executeScript: https://developer.chrome.com/docs/extensions/reference/tabs/#method-executeScript

injectDetails: https://developer.chrome.com/docs/extensions/reference/extensionTypes/#type-InjectDetails
*/

// async function getURL(){
//   let tabs = await chrome.tabs.query(
//     { active: true, currentWindow: true });
  
//   chrome.tabs.executeScript({
//     code:''
//   })
//   document.getElementById('current_url').innerText = tabs[0].url;
// }

// getURL();



chrome.tabs.query(
  { active: true, currentWindow: true },
  function (tabs) {
    document.getElementById('current_url').innerText = tabs[0].url;
    console.log('IT WORKSS!')
    chrome.tabs.executeScript(tabs[0].tabId, {file: "script.js"});
  }
);

