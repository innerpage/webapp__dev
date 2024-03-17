import { newSpecPage } from '@stencil/core/testing';
import { PTopbar } from '../p-topbar';

describe('p-topbar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PTopbar],
      html: `<p-topbar></p-topbar>`,
    });
    expect(page.root).toEqualHtml(`
      <p-topbar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p-topbar>
    `);
  });
});
