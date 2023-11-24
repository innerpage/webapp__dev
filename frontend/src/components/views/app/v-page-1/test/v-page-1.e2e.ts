import { newE2EPage } from '@stencil/core/testing';

describe('v-page-1', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-page-1></v-page-1>');

    const element = await page.find('v-page-1');
    expect(element).toHaveClass('hydrated');
  });
});
