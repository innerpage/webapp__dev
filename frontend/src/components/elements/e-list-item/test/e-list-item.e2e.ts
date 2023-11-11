import { newE2EPage } from '@stencil/core/testing';

describe('e-list-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<e-list-item></e-list-item>');

    const element = await page.find('e-list-item');
    expect(element).toHaveClass('hydrated');
  });
});
