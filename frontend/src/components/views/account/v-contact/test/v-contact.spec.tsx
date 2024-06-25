import { newSpecPage } from '@stencil/core/testing';
import { VContact } from '../v-contact';

describe('v-contact', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VContact],
      html: `<v-contact></v-contact>`,
    });
    expect(page.root).toEqualHtml(`
      <v-contact>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-contact>
    `);
  });
});
