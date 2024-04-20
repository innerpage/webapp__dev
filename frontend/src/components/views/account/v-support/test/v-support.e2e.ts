import { newE2EPage } from '@stencil/core/testing';

describe('v-support', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-support></v-support>');

    const element = await page.find('v-support');
    expect(element).toHaveClass('hydrated');
  });
});
