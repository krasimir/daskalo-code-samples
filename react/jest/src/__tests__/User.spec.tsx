import React from 'react';
import TestRenderer from 'react-test-renderer';
import User from '../User';

describe('Given the User component', () => {
  describe('When the data is not provided', () => {
    it('Then it should render nothing', () => {
      const testRenderer = TestRenderer.create(
        <User data={{ name: 'Krasimir '}}/>
      );
    });
  });
});