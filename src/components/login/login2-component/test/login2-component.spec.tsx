import { newSpecPage } from '@stencil/core/testing';
import { Login2Component } from '../login2-component';

describe('login2-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Login2Component],
      html: `<login2-component></login2-component>`,
    });
    expect(page.root).toEqualHtml(`
      <login2-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </login2-component>
    `);
  });
});
