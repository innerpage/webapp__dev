import { newE2EPage } from '@stencil/core/testing';

describe('v-home', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-home></v-home>');

    const element = await page.find('v-home');
    expect(element).toHaveClass('hydrated');
  });
});
