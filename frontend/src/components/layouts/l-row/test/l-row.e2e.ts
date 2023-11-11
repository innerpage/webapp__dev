import { newE2EPage } from '@stencil/core/testing';

describe('l-row', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<l-row></l-row>');

    const element = await page.find('l-row');
    expect(element).toHaveClass('hydrated');
  });
});
