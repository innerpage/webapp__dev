import { newE2EPage } from '@stencil/core/testing';

describe('v-login', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-login></v-login>');

    const element = await page.find('v-login');
    expect(element).toHaveClass('hydrated');
  });
});
