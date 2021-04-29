const checklist = require('./functions');
const checklistItems = {};
const SUCCESS = 'SUCCESS',
  ERROR = 'ERROR';

for (const item of Object.keys(checklist)) {
  checklistItems[item] = null;
}

checklistItems.oneTitle = {
  SUCCESS: `This webpage has only one <title> tag. `,
  ERROR: `This webpage has multiple <title> tags. Consider using only one tag to describe the purpose of this webpage. `,
};

checklistItems.viewportZoom = {
  SUCCESS: `This webpage has either no or an acceptable viewport zoom. `,
  ERROR: `This webpage has either disabled or an unacceptable viewport zooms. `,
};

checklistItems.langAttribute = {
  SUCCESS: `This webpage has an identification of the language.`,
  ERROR: `This webpage has no identification of the language.`,
};

checklistItems.landmarkElements = {
  SUCCESS: `This webpage has landmark elements.`,
  ERROR: `This webpage has no landmark elements.`,
};

checklistItems.ariaLandmarks = {
  SUCCESS: `This webpage has more than one 'aria-label' attribute.`,
  ERROR: `This webpage has no 'aria-label' attribute.`,
};

checklistItems.imgAltAttributes = {
  SUCCESS: `This webpage has 'alt' attributes on every img element.`,
  ERROR: `This webpage does not have 'alt' attributes on every img element.`,
};

checklistItems.autofocusAttributes = {
  SUCCESS: `This webpage has no element, which has 'autofocus' attribute.`,
  ERROR: `This webpage has one or more elements, which has 'autofocus' attribute.`,
};

module.exports = {
  checklistItems,
  SUCCESS,
  ERROR,
};
