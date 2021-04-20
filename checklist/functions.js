const oneTitle = ($) => {
  const titles = $('title').get();
  return titles.length === 1;
};

const viewportZoom = ($) => {
  const viewport = $('meta[name="viewport"]').attr('content');
  return !(
    viewport.includes('user-scalable=no') &&
    viewport.includes('user-scalable = no')
  );
};

const langAttribute = ($) => {
  const htmlAttr = $('html').attr('lang');
  return !!htmlAttr;
};

module.exports = {
  oneTitle,
  viewportZoom,
  langAttribute,
};
