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
  console.log('landmark', landmark);
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

const autofocus =  ($) => {
  const autofocusElems =  $('*').attr('autofocus')
  console.log(autofocusElems)
  return autofocusElems.length
}

module.exports = {
  oneTitle,
  viewportZoom,
  langAttribute,
  landmarkElements,
  ariaLandmarks,
  imgAltAttributes,
  autofocus
};
