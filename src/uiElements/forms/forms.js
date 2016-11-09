var Forms = {};

Forms.Form = require('./components/form.js');
Forms.FormField = require('./components/formField.js');
Forms.FormSortable = require('./components/formSortable.js');
Forms.Helpers = require('./helpers');

if (window.MediumEditor) {
    window.MediumEditor.extensions.anchor.prototype.formSaveLabel = '<i class="icon icon-check"></i>';
    window.MediumEditor.extensions.anchor.prototype.formCloseLabel = '<i class="icon icon-cross"></i>';
}

// Fields
require('./fields/formFieldArray.js');
require('./fields/formFieldBoolean.js');
require('./fields/formFieldBorder.js');
require('./fields/formFieldButton.js');
require('./fields/formFieldColorPicker.js');
require('./fields/formFieldCssValue.js');
require('./fields/formFieldNumber.js');
require('./fields/formFieldObject.js');
require('./fields/formFieldPassword.js');
require('./fields/formFieldPicker.js');
require('./fields/formFieldSelect.js');
require('./fields/formFieldSpacing.js');
require('./fields/formFieldText.js');
require('./fields/formFieldTextArea.js');
require('./fields/formFieldTextAreaPlain.js');
require('./fields/formFieldTextAlign.js');

// Validators
require('./validators/required');

module.exports = Forms;