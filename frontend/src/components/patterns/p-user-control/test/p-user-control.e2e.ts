import { newE2EPage } from '@stencil/core/testing';

describe('p-user-control', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p-user-control></p-user-control>');

    const element = await page.find('p-user-control');
    expect(element).toHaveClass('hydrated');
  });
});
