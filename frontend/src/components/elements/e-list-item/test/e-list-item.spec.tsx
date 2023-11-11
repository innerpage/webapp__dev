import { newSpecPage } from '@stencil/core/testing';
import { EListItem } from '../e-list-item';

describe('e-list-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EListItem],
      html: `<e-list-item></e-list-item>`,
    });
    expect(page.root).toEqualHtml(`
      <e-list-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </e-list-item>
    `);
  });
});
