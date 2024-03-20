import { newSpecPage } from '@stencil/core/testing';
import { PAuth } from '../p-auth';

describe('p-auth', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PAuth],
      html: `<p-auth></p-auth>`,
    });
    expect(page.root).toEqualHtml(`
      <p-auth>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p-auth>
    `);
  });
});
