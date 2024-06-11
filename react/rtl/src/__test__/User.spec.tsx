import '@testing-library/jest-dom/vitest';
import React from 'react';
import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import User from '../User';
import * as matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

afterEach(() => {
  cleanup();
});

describe('Given User component', () => {
  describe('When the data is not provided', () => {
    it('Then it should render nothing', async () => {
      render(<User />);
      await expect(screen.queryByText('Name: Krasimir')).toBeNull();
    });
  });
  describe('When the data is provided but there is no name', () => {
    it('should render "Name: unknown"', async () => {
      render(<User data={{ name: 'Krasimir' }}/>);
      await expect(screen.queryByText('Name: Krasimir')).toBeInTheDocument();
    });
  });
})