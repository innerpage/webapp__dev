import { newSpecPage } from '@stencil/core/testing';
import { PModal } from '../p-modal';

describe('p-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PModal],
      html: `<p-modal></p-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <p-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p-modal>
    `);
  });
});
