import { newE2EPage } from '@stencil/core/testing';

describe('v-signup', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-signup></v-signup>');

    const element = await page.find('v-signup');
    expect(element).toHaveClass('hydrated');
  });
});
