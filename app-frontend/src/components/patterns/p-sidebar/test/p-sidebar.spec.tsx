import { newSpecPage } from '@stencil/core/testing';
import { PSidebar } from '../p-sidebar';

describe('p-sidebar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PSidebar],
      html: `<p-sidebar></p-sidebar>`,
    });
    expect(page.root).toEqualHtml(`
      <p-sidebar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p-sidebar>
    `);
  });
});
