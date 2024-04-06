import { newE2EPage } from '@stencil/core/testing';

describe('v-verify', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-verify></v-verify>');

    const element = await page.find('v-verify');
    expect(element).toHaveClass('hydrated');
  });
});
