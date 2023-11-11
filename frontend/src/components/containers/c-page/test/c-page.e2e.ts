import { newE2EPage } from '@stencil/core/testing';

describe('c-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<c-page></c-page>');

    const element = await page.find('c-page');
    expect(element).toHaveClass('hydrated');
  });
});
