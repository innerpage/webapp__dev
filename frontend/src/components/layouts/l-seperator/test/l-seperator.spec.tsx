import { newSpecPage } from '@stencil/core/testing';
import { LSeperator } from '../l-seperator';

describe('l-seperator', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LSeperator],
      html: `<l-seperator></l-seperator>`,
    });
    expect(page.root).toEqualHtml(`
      <l-seperator>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </l-seperator>
    `);
  });
});
