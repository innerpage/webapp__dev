import { newE2EPage } from '@stencil/core/testing';

describe('c-banner', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<c-banner></c-banner>');

    const element = await page.find('c-banner');
    expect(element).toHaveClass('hydrated');
  });
});
