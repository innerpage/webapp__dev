import { newSpecPage } from '@stencil/core/testing';
import { VPaymentCancel } from '../v-payment-cancel';

describe('v-payment-cancel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VPaymentCancel],
      html: `<v-payment-cancel></v-payment-cancel>`,
    });
    expect(page.root).toEqualHtml(`
      <v-payment-cancel>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-payment-cancel>
    `);
  });
});
