import React from 'react';
import Injector from 'lib/Injector';
import HideableComponentCreator from './HideableComponentCreator';
import PrettyPhoneNumberField from './PrettyPhoneNumberField';
import ConfirmingFormAction from './ConfirmingFormAction';

const sheet = window.document.styleSheets[0]
sheet.insertRule('.green { border: 5px solid green; }', sheet.cssRules.length);

Injector.register('PrettyPhoneNumberField', PrettyPhoneNumberField);

Injector.transform(
  'toggle-field',
  (update) => {
    // POC #1: Hide a form field based on another's value
    update('ReduxFormField', HideableComponentCreator);

    // POC #5: Have a button show "confirming buttons"
    update('FormAction.AssetAdmin.EditForm.action_save', ConfirmingFormAction);
  }
);

Injector.transform(
  'tester',
  (update) => {
    update(
      'FormSchemaMiddleware.AssetAdmin.*',
      (updateSchema) => (values, form) => {
        return updateSchema(
          form
            // POC #1
            .updateField('State', {
              shouldHide: values.Country !== 'US'
            })
            // POC #5
            .updateField('action_save', {
              confirmText: 'Are you sure you want to save?',
              cancelText: 'Cancel!!!!'
            })
            // POC #2: Add CSS to a field based on a condition
            .setFieldClass('PaymentOptions', 'green', (values.Price > 500))
            // POC #3: Have a field split into three pieces in the UI only.
            .setFieldComponent('PhoneNumber', 'PrettyPhoneNumberField')
            .getState()
        )
      }
    );
  }
);

// POC #4: Validation middleware
Injector.transform(
  'tester-2',
  (update) => {
    update(
      'FormValidationMiddleware.AssetAdmin.*',
      (validate) => (values, errors) => {
        const requiredLength = values.Country === 'US' ? 5 : 4;
        if (!values.Country || !values.PostalCode) {
          return;
        }
        return validate(
          values,
          {
            ...errors,
            PostalCode: values.PostalCode.length !== requiredLength ? 'Invalid postal code' : null
          }
        );
      }
    )
  }
);


// import TextFieldCharacterCounterCreator from './TextFieldCharacterCounterCreator';
// import TextFieldLengthCheckerCreator from './TextFieldLengthCheckerCreator';
// import FormActionAwesomenessCreator from './FormActionAwesomenessCreator';
// console.log(Injector);
// Injector.transform(
//   'my-transformation',
//   (update) => {
//     update('TextField', TextFieldCharacterCounterCreator, 'CharacterCounter');
//     update('FormAction', FormActionAwesomenessCreator);
//   },
//   {
//     after: 'another-transformation'
//   }
// );
//
// Injector.transform(
//   'another-transformation',
//   (update) => {
//     update('TextField', TextFieldLengthCheckerCreator);
//   }
// );
