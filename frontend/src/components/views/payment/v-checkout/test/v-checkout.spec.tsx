import { newSpecPage } from '@stencil/core/testing';
import { VCheckout } from '../v-checkout';

describe('v-checkout', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VCheckout],
      html: `<v-checkout></v-checkout>`,
    });
    expect(page.root).toEqualHtml(`
      <v-checkout>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-checkout>
    `);
  });
});
