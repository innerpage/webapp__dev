import { newE2EPage } from '@stencil/core/testing';

describe('e-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<e-link></e-link>');

    const element = await page.find('e-link');
    expect(element).toHaveClass('hydrated');
  });
});
