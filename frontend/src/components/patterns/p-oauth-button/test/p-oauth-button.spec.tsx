import { newSpecPage } from '@stencil/core/testing';
import { POauthButton } from '../p-oauth-button';

describe('p-oauth-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [POauthButton],
      html: `<p-oauth-button></p-oauth-button>`,
    });
    expect(page.root).toEqualHtml(`
      <p-oauth-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p-oauth-button>
    `);
  });
});
