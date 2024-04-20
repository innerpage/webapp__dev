import { newE2EPage } from '@stencil/core/testing';

describe('v-delete-account', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-delete-account></v-delete-account>');

    const element = await page.find('v-delete-account');
    expect(element).toHaveClass('hydrated');
  });
});
