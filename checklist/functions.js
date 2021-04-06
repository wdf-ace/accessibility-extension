const oneTitle = async ($) => {
  const titles = $('title').get();
  return titles.length === 1;
};

const viewportZoom = async ($) => {
  const viewport = $('meta[name="viewport"]').attr('content');
  return !(
    viewport.includes('user-scalable=no') &&
    viewport.includes('user-scalable = no')
  );
};

const langAttribute = async ($) => {
  const htmlAttr = $('html').attr('lang');
  return !!htmlAttr;
};

module.exports = {
  oneTitle,
  viewportZoom,
  langAttribute,
};
