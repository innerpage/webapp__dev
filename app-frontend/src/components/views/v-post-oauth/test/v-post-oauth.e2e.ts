import { newE2EPage } from '@stencil/core/testing';

describe('v-post-oauth', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-post-oauth></v-post-oauth>');

    const element = await page.find('v-post-oauth');
    expect(element).toHaveClass('hydrated');
  });
});
