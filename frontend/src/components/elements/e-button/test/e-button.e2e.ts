import { newE2EPage } from '@stencil/core/testing';

describe('e-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<e-button></e-button>');

    const element = await page.find('e-button');
    expect(element).toHaveClass('hydrated');
  });
});
