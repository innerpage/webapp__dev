import { newSpecPage } from '@stencil/core/testing';
import { ELink } from '../e-link';

describe('e-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ELink],
      html: `<e-link></e-link>`,
    });
    expect(page.root).toEqualHtml(`
      <e-link>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </e-link>
    `);
  });
});
