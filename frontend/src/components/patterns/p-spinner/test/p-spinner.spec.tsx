import { newSpecPage } from '@stencil/core/testing';
import { PSpinner } from '../p-spinner';

describe('p-spinner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PSpinner],
      html: `<p-spinner></p-spinner>`,
    });
    expect(page.root).toEqualHtml(`
      <p-spinner>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p-spinner>
    `);
  });
});
