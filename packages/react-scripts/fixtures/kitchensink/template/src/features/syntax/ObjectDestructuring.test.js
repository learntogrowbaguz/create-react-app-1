/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import ObjectDestructuring from './ObjectDestructuring';
import ReactDOMClient from 'react-dom/client';

describe('object destructuring', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    return new Promise(resolve => {
      ReactDOMClient.createRoot(div).render(
        <ObjectDestructuring onReady={resolve} />
      );
    });
  });
});
