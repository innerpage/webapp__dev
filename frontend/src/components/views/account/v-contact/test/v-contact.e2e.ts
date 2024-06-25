import { newE2EPage } from '@stencil/core/testing';

describe('v-contact', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-contact></v-contact>');

    const element = await page.find('v-contact');
    expect(element).toHaveClass('hydrated');
  });
});
