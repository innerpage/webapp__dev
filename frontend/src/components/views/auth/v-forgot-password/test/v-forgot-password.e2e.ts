import { newE2EPage } from '@stencil/core/testing';

describe('v-forgot-password', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-forgot-password></v-forgot-password>');

    const element = await page.find('v-forgot-password');
    expect(element).toHaveClass('hydrated');
  });
});
