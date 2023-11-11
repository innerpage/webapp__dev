import { newE2EPage } from '@stencil/core/testing';

describe('v-checkout', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-checkout></v-checkout>');

    const element = await page.find('v-checkout');
    expect(element).toHaveClass('hydrated');
  });
});
