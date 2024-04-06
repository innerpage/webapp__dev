import { newSpecPage } from '@stencil/core/testing';
import { VVerify } from '../v-verify';

describe('v-verify', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VVerify],
      html: `<v-verify></v-verify>`,
    });
    expect(page.root).toEqualHtml(`
      <v-verify>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-verify>
    `);
  });
});
