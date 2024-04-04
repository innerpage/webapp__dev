import { newE2EPage } from '@stencil/core/testing';

describe('v-verification', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-verification></v-verification>');

    const element = await page.find('v-verification');
    expect(element).toHaveClass('hydrated');
  });
});
