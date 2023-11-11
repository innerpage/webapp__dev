import { newSpecPage } from '@stencil/core/testing';
import { PTabNav } from '../p-tab-nav';

describe('p-tab-nav', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PTabNav],
      html: `<p-tab-nav></p-tab-nav>`,
    });
    expect(page.root).toEqualHtml(`
      <p-tab-nav>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p-tab-nav>
    `);
  });
});
