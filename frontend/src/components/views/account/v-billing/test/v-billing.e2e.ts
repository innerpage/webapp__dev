import { newE2EPage } from '@stencil/core/testing';

describe('v-billing', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-billing></v-billing>');

    const element = await page.find('v-billing');
    expect(element).toHaveClass('hydrated');
  });
});
