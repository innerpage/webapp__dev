import { newE2EPage } from '@stencil/core/testing';

describe('p-auth', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p-auth></p-auth>');

    const element = await page.find('p-auth');
    expect(element).toHaveClass('hydrated');
  });
});
