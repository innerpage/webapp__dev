import { newE2EPage } from '@stencil/core/testing';

describe('p-topbar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p-topbar></p-topbar>');

    const element = await page.find('p-topbar');
    expect(element).toHaveClass('hydrated');
  });
});
