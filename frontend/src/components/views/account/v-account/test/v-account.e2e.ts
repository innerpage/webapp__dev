import { newE2EPage } from '@stencil/core/testing';

describe('v-account', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-account></v-account>');

    const element = await page.find('v-account');
    expect(element).toHaveClass('hydrated');
  });
});
