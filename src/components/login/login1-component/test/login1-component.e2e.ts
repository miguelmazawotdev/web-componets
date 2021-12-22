import { newE2EPage } from '@stencil/core/testing';

describe('login1-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<login1-component></login1-component>');

    const element = await page.find('login1-component');
    expect(element).toHaveClass('hydrated');
  });
});
