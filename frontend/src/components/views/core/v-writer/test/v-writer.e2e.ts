import { newE2EPage } from '@stencil/core/testing';

describe('v-writer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-writer></v-writer>');

    const element = await page.find('v-writer');
    expect(element).toHaveClass('hydrated');
  });
});
