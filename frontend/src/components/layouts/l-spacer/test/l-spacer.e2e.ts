import { newE2EPage } from '@stencil/core/testing';

describe('l-spacer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<l-spacer></l-spacer>');

    const element = await page.find('l-spacer');
    expect(element).toHaveClass('hydrated');
  });
});
