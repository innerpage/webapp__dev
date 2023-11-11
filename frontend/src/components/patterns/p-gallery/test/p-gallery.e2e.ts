import { newE2EPage } from '@stencil/core/testing';

describe('p-gallery', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p-gallery></p-gallery>');

    const element = await page.find('p-gallery');
    expect(element).toHaveClass('hydrated');
  });
});
