import { newSpecPage } from '@stencil/core/testing';
import { VBilling } from '../v-billing';

describe('v-billing', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VBilling],
      html: `<v-billing></v-billing>`,
    });
    expect(page.root).toEqualHtml(`
      <v-billing>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-billing>
    `);
  });
});
