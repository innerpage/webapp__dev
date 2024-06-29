import { newE2EPage } from '@stencil/core/testing';

describe('v-admin-overview', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-admin-overview></v-admin-overview>');

    const element = await page.find('v-admin-overview');
    expect(element).toHaveClass('hydrated');
  });
});
