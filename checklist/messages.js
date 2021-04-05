const checklist = require('./functions');
const checklistItems = {};
const SUCCESS = 'SUCCESS',
  ERROR = 'ERROR';

for (const item of Object.keys(checklist)) {
  checklistItems[item] = null;
}

checklistItems.oneTitle = {
  SUCCESS: `<p>This webpage has only one <title> tag. </p>`,
  ERROR: `<p>This webpage has multiple <title> tags. Consider using only one tag to describe the purpose of this webpage. <p>`,
};

checklistItems.viewportZoom = {
  SUCCESS: `<p>This webpage has either no or an acceptable viewport zoom. </p>`,
  ERROR: `<p>This webpage has either disabled or an unacceptable viewport zooms. <p>`,
};

checklistItems.langAttribute = {
  SUCCESS: `<p>This webpage has an identification of the language.</p>`,
  ERROR: `<p>This webpage has no identification of the language.</p>`,
};

module.exports = {
  checklistItems,
  SUCCESS,
  ERROR,
};
