import { newE2EPage } from '@stencil/core/testing';

describe('e-select', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<e-select></e-select>');

    const element = await page.find('e-select');
    expect(element).toHaveClass('hydrated');
  });
});
