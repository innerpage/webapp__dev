import { newSpecPage } from '@stencil/core/testing';
import { CCard } from '../c-card';

describe('c-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CCard],
      html: `<c-card></c-card>`,
    });
    expect(page.root).toEqualHtml(`
      <c-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </c-card>
    `);
  });
});
