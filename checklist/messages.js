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

module.exports = {
  checklistItems,
  SUCCESS,
  ERROR,
};
