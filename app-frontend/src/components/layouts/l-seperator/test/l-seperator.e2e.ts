import { newE2EPage } from '@stencil/core/testing';

describe('l-seperator', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<l-seperator></l-seperator>');

    const element = await page.find('l-seperator');
    expect(element).toHaveClass('hydrated');
  });
});
