import { newSpecPage } from '@stencil/core/testing';
import { CPage } from '../c-page';

describe('c-page', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CPage],
      html: `<c-page></c-page>`,
    });
    expect(page.root).toEqualHtml(`
      <c-page>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </c-page>
    `);
  });
});
