import { newE2EPage } from '@stencil/core/testing';

describe('v-catch-all', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-catch-all></v-catch-all>');

    const element = await page.find('v-catch-all');
    expect(element).toHaveClass('hydrated');
  });
});
