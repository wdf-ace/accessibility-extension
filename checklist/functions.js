const oneTitle = ($) => {
  const titles = $('title').get();
  return titles.length === 1;
};

const viewportZoom = ($) => {
  const viewport = $('meta[name="viewport"]').attr('content');
  return !(
    viewport?.includes('user-scalable=no') &&
    viewport?.includes('user-scalable = no')
  );
};

const langAttribute = ($) => {
  const htmlAttr = $('html').attr('lang');
  return !!htmlAttr;
};

const landmarkElements = async ($) => {
  const landmark = $(
    "section, nav, article, aside, header, footer, main"
  ).get();
  console.log("landmark", landmark);
  return landmark.length > 0;
};

//------currently breaks on certain webpages-----
// function ariaLandmarks($) {
//   let elmArr = [];
//   function traverseNode(arr) {
//     for (let elm of arr) {
//       if (elm.children && elm.children.length) {
//         elmArr = [...elmArr, elm];
//         traverseNode(elm.children);
//       } else {
//         elmArr = [...elmArr, elm];
//       }
//     }
//   }
//   const rootElm = $("*");
//   traverseNode(rootElm);
//   console.log(elmArr);
//   const ariaElm = elmArr.filter((elm) => elm.attribs);
//   console.log('ariaElm', ariaElm);
//   return false;
// }

module.exports = {
  oneTitle,
  viewportZoom,
  langAttribute,
  landmarkElements,
  ariaLandmarks,
};

