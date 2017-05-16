import React from 'react';
import Injector from 'lib/Injector';
import CustomGalleryItemCreator from './CustomGalleryItemCreator';
import TextFieldCharacterCounterCreator from './TextFieldCharacterCounterCreator';

Injector.customise('File', CustomGalleryItemCreator);
Injector.customise('TextField', TextFieldCharacterCounterCreator);