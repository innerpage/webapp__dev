import { newSpecPage } from '@stencil/core/testing';
import { EText } from '../e-text';

describe('e-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EText],
      html: `<e-text></e-text>`,
    });
    expect(page.root).toEqualHtml(`
      <e-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </e-text>
    `);
  });
});
