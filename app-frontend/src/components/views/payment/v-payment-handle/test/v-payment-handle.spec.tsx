import { newSpecPage } from '@stencil/core/testing';
import { VPaymentHandle } from '../v-payment-handle';

describe('v-payment-handle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VPaymentHandle],
      html: `<v-payment-handle></v-payment-handle>`,
    });
    expect(page.root).toEqualHtml(`
      <v-payment-handle>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-payment-handle>
    `);
  });
});
