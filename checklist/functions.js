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

const landmarkElements = ($) => {
  const landmark = $(
    'section, nav, article, aside, header, footer, main'
  ).get();
  return landmark.length > 0;
};

function ariaLandmarks($) {
  const ariaElm = $('*').filter(function (i, elm) {
    return $(this).attr('aria-label');
  });
  return !!ariaElm.length;
}

const imgAltAttributes = ($) => {
  const numImg = $('img');
  const altAttr = $('img').filter((i, elm) => {
    return $(elm).attr('alt');
  });
  const emptyAltAttr = $('img').filter((i, elm) => {
    return $(elm).attr('alt') === '';
  });
  return numImg.length === altAttr.length + emptyAltAttr.length;
};

const tabIndex = ($) => {
  const tabIndexElems =  $('*').filter((i, elem) => $(elem).attr('tabindex'))
  for(let elem of tabIndexElems){
    const tabIndexVal = elem.attribs.tabindex;
    if(tabIndexVal !== "0" && tabIndexVal !== "-1") return false
  }
  return true;
}

const titleAttr = ($) => {
  const titleAttrElems =  $('*').filter((i, elem) => $(elem).attr('title'))
  for(let elem of titleAttrElems){
    if(elem.name !== "iframe") return false
  }
  return true;
}

const visibleFocus = ($) => {
  /*
    check the css styling that there is no outline / border for links and buttons (interactable elements) and :focus psuedo class does not have outline:none
  */
}

module.exports = {
  oneTitle,
  viewportZoom,
  langAttribute,
  landmarkElements,
  ariaLandmarks,
  imgAltAttributes,
  tabIndex,
  titleAttr,
  visibleFocus
};
