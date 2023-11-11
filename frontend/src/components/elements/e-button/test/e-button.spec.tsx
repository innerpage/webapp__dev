import { newSpecPage } from '@stencil/core/testing';
import { EButton } from '../e-button';

describe('e-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EButton],
      html: `<e-button></e-button>`,
    });
    expect(page.root).toEqualHtml(`
      <e-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </e-button>
    `);
  });
});
