import { newE2EPage } from '@stencil/core/testing';

describe('v-support-us', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-support-us></v-support-us>');

    const element = await page.find('v-support-us');
    expect(element).toHaveClass('hydrated');
  });
});
