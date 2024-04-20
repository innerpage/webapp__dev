import { newSpecPage } from '@stencil/core/testing';
import { VDeleteAccount } from '../v-delete-account';

describe('v-delete-account', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VDeleteAccount],
      html: `<v-delete-account></v-delete-account>`,
    });
    expect(page.root).toEqualHtml(`
      <v-delete-account>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-delete-account>
    `);
  });
});
