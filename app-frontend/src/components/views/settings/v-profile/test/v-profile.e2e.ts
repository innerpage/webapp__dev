import { newE2EPage } from '@stencil/core/testing';

describe('v-profile', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-profile></v-profile>');

    const element = await page.find('v-profile');
    expect(element).toHaveClass('hydrated');
  });
});
