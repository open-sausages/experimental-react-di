import React from 'react';
import Injector from 'lib/Injector';
import CustomGalleryItemCreator from './CustomGalleryItemCreator';
import TextFieldCharacterCounterCreator from './TextFieldCharacterCounterCreator';
import TextFieldLengthCheckerCreator from './TextFieldLengthCheckerCreator';
import FormActionAwesomenessCreator from './FormActionAwesomenessCreator';

Injector.update(
  {
    name: 'module-a',
    after: 'module-b'
  },
  (update) => {
    update('File', CustomGalleryItemCreator);
    update('TextField', TextFieldCharacterCounterCreator);
    update('FormAction', FormActionAwesomenessCreator);
  }
);

Injector.update(
  {
    name: 'module-b',
  },
  (update) => {
    update('TextField', TextFieldLengthCheckerCreator);
  }
);