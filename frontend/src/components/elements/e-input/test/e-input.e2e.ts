import { newE2EPage } from '@stencil/core/testing';

describe('e-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<e-input></e-input>');

    const element = await page.find('e-input');
    expect(element).toHaveClass('hydrated');
  });
});
