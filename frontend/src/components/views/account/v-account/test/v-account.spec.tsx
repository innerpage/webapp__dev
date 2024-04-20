import { newSpecPage } from '@stencil/core/testing';
import { VAccount } from '../v-account';

describe('v-account', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VAccount],
      html: `<v-account></v-account>`,
    });
    expect(page.root).toEqualHtml(`
      <v-account>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-account>
    `);
  });
});
