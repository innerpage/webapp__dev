import { newE2EPage } from '@stencil/core/testing';

describe('c-content-area', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<c-content-area></c-content-area>');

    const element = await page.find('c-content-area');
    expect(element).toHaveClass('hydrated');
  });
});
