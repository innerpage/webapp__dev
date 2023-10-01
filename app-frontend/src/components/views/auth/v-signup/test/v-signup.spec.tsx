import { newSpecPage } from '@stencil/core/testing';
import { VSignup } from '../v-signup';

describe('v-signup', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VSignup],
      html: `<v-signup></v-signup>`,
    });
    expect(page.root).toEqualHtml(`
      <v-signup>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-signup>
    `);
  });
});
