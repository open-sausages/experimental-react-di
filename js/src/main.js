import React from 'react';
import Injector from 'lib/Injector';
import CustomGalleryItemCreator from './CustomGalleryItemCreator';
import TextFieldCharacterCounterCreator from './TextFieldCharacterCounterCreator';
import TextFieldPasswordStrengthCheckerCreator from './TextFieldPasswordStrengthCheckerCreator';
import FormActionAwesomenessCreator from './FormActionAwesomenessCreator';

Injector.customise('File', CustomGalleryItemCreator);
Injector.customise('TextField', TextFieldCharacterCounterCreator);
Injector.customise('TextField', TextFieldPasswordStrengthCheckerCreator);
Injector.customise('FormAction', FormActionAwesomenessCreator);