import { newSpecPage } from '@stencil/core/testing';
import { VLogin } from '../v-login';

describe('v-login', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VLogin],
      html: `<v-login></v-login>`,
    });
    expect(page.root).toEqualHtml(`
      <v-login>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-login>
    `);
  });
});
