import { newSpecPage } from '@stencil/core/testing';
import { CContentArea } from '../c-content-area';

describe('c-content-area', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CContentArea],
      html: `<c-content-area></c-content-area>`,
    });
    expect(page.root).toEqualHtml(`
      <c-content-area>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </c-content-area>
    `);
  });
});
