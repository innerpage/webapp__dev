import { newE2EPage } from '@stencil/core/testing';

describe('v-payment-cancel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-payment-cancel></v-payment-cancel>');

    const element = await page.find('v-payment-cancel');
    expect(element).toHaveClass('hydrated');
  });
});
