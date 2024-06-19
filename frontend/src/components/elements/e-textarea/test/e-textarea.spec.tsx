import { newSpecPage } from '@stencil/core/testing';
import { ETextarea } from '../e-textarea';

describe('e-textarea', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ETextarea],
      html: `<e-textarea></e-textarea>`,
    });
    expect(page.root).toEqualHtml(`
      <e-textarea>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </e-textarea>
    `);
  });
});
