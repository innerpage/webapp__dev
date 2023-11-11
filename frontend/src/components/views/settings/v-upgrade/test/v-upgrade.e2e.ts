import { newE2EPage } from '@stencil/core/testing';

describe('v-upgrade', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-upgrade></v-upgrade>');

    const element = await page.find('v-upgrade');
    expect(element).toHaveClass('hydrated');
  });
});
