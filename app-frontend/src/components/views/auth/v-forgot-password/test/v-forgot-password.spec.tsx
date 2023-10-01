import { newSpecPage } from '@stencil/core/testing';
import { VForgotPassword } from '../v-forgot-password';

describe('v-forgot-password', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VForgotPassword],
      html: `<v-forgot-password></v-forgot-password>`,
    });
    expect(page.root).toEqualHtml(`
      <v-forgot-password>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-forgot-password>
    `);
  });
});
