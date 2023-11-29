import { newSpecPage } from '@stencil/core/testing';
import { PEditableText } from '../p-editable-text';

describe('p-editable-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PEditableText],
      html: `<p-editable-text></p-editable-text>`,
    });
    expect(page.root).toEqualHtml(`
      <p-editable-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p-editable-text>
    `);
  });
});
