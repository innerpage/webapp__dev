import { newE2EPage } from '@stencil/core/testing';

describe('p-editable-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p-editable-text></p-editable-text>');

    const element = await page.find('p-editable-text');
    expect(element).toHaveClass('hydrated');
  });
});
