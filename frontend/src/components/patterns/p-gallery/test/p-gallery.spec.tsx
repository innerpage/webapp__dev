import { newSpecPage } from '@stencil/core/testing';
import { PGallery } from '../p-gallery';

describe('p-gallery', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PGallery],
      html: `<p-gallery></p-gallery>`,
    });
    expect(page.root).toEqualHtml(`
      <p-gallery>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p-gallery>
    `);
  });
});
