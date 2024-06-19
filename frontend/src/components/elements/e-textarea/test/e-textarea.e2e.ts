import { newE2EPage } from '@stencil/core/testing';

describe('e-textarea', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<e-textarea></e-textarea>');

    const element = await page.find('e-textarea');
    expect(element).toHaveClass('hydrated');
  });
});
