import { newE2EPage } from '@stencil/core/testing';

describe('v-page-2', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-page-2></v-page-2>');

    const element = await page.find('v-page-2');
    expect(element).toHaveClass('hydrated');
  });
});
