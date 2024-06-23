import { newE2EPage } from '@stencil/core/testing';

describe('p-note', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p-note></p-note>');

    const element = await page.find('p-note');
    expect(element).toHaveClass('hydrated');
  });
});
