import React from 'react';
import { describe, it, expect } from 'vitest';
import TestRenderer from 'react-test-renderer';
import User from '../User';

describe('Given User component', () => {
  describe('When the data is not provided', () => {
    it('Then it should render nothing', () => {
      const renderer = TestRenderer.create(<User />);
      expect(renderer.toJSON()).toBeNull();
    });
  });
  describe('When the data is provided but there is no name', () => {
    it('should render "Name: unknown"', () => {
      const renderer = TestRenderer.create(<User data={{}}/>);
      expect(
        renderer.toJSON().children.join('')
    ).toEqual('Name: unknown');
    });
  });
})