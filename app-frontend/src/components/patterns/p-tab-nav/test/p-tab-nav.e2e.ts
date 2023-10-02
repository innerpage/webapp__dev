import { newE2EPage } from '@stencil/core/testing';

describe('p-tab-nav', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p-tab-nav></p-tab-nav>');

    const element = await page.find('p-tab-nav');
    expect(element).toHaveClass('hydrated');
  });
});
