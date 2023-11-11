import { newSpecPage } from '@stencil/core/testing';
import { CBanner } from '../c-banner';

describe('c-banner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CBanner],
      html: `<c-banner></c-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <c-banner>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </c-banner>
    `);
  });
});
