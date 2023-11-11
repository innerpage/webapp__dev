import { newE2EPage } from '@stencil/core/testing';

describe('v-payment-handle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-payment-handle></v-payment-handle>');

    const element = await page.find('v-payment-handle');
    expect(element).toHaveClass('hydrated');
  });
});
