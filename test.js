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

let currentURL;

chrome.tabs.query(
  { active: true, windowId: chrome.windows.WINDOW_ID_CURRENT },
  function (tabs) {
    getCurrentURL(tabs[0].url);
  }
);

function getCurrentURL(tab) {
  currentURL = tab;
}

document.getElementById('current_url').innerText = currentURL;
