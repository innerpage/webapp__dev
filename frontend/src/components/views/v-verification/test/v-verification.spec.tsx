import { newSpecPage } from '@stencil/core/testing';
import { VVerification } from '../v-verification';

describe('v-verification', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VVerification],
      html: `<v-verification></v-verification>`,
    });
    expect(page.root).toEqualHtml(`
      <v-verification>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-verification>
    `);
  });
});
