import { newE2EPage } from '@stencil/core/testing';

describe('e-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<e-text></e-text>');

    const element = await page.find('e-text');
    expect(element).toHaveClass('hydrated');
  });
});
