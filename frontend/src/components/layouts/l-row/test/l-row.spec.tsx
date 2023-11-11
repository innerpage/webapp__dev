import { newSpecPage } from '@stencil/core/testing';
import { LRow } from '../l-row';

describe('l-row', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LRow],
      html: `<l-row></l-row>`,
    });
    expect(page.root).toEqualHtml(`
      <l-row>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </l-row>
    `);
  });
});
