import { newE2EPage } from '@stencil/core/testing';

describe('e-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<e-list></e-list>');

    const element = await page.find('e-list');
    expect(element).toHaveClass('hydrated');
  });
});
