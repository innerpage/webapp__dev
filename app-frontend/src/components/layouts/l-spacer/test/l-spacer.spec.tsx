import { newSpecPage } from '@stencil/core/testing';
import { LSpacer } from '../l-spacer';

describe('l-spacer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LSpacer],
      html: `<l-spacer></l-spacer>`,
    });
    expect(page.root).toEqualHtml(`
      <l-spacer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </l-spacer>
    `);
  });
});
