import { newE2EPage } from '@stencil/core/testing';

describe('p-oauth-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p-oauth-button></p-oauth-button>');

    const element = await page.find('p-oauth-button');
    expect(element).toHaveClass('hydrated');
  });
});
