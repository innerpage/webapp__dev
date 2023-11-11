import { newSpecPage } from '@stencil/core/testing';
import { EList } from '../e-list';

describe('e-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EList],
      html: `<e-list></e-list>`,
    });
    expect(page.root).toEqualHtml(`
      <e-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </e-list>
    `);
  });
});
