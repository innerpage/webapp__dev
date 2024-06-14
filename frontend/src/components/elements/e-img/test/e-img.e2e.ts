import { newE2EPage } from '@stencil/core/testing';

describe('e-img', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<e-img></e-img>');

    const element = await page.find('e-img');
    expect(element).toHaveClass('hydrated');
  });
});
