import { newSpecPage } from '@stencil/core/testing';
import { PNote } from '../p-note';

describe('p-note', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PNote],
      html: `<p-note></p-note>`,
    });
    expect(page.root).toEqualHtml(`
      <p-note>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p-note>
    `);
  });
});
