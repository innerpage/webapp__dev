import { Component, Prop, Watch, h } from '@stencil/core';

@Component({
  tag: 'e-link',
  styleUrl: 'e-link.css',
  shadow: true,
})
export class ELink {
  @Prop() variant: string = 'default';
  @Prop() theme: string = 'default';
  @Prop() url: string = '';

  @Watch('variant') variantPropWatcher(newValue: string, oldValue: string) {
    if (newValue != oldValue) {
      this.updateCssClassString();
    }
  }

  private cssStyleString: string = '';

  componentWillLoad() {
    this.generateCssClassString();
  }

  generateCssClassString() {
    if (this.variant === 'navLink') {
      this.cssStyleString = this.cssStyleString + ` link__nav`;
    } else if (this.variant === 'navLinkActive') {
      this.cssStyleString = this.cssStyleString + ` link__nav--active`;
    } else if (this.variant === 'card') {
      this.cssStyleString = `${this.cssStyleString} link__card`;
    }

    if (this.theme === 'danger') {
      this.cssStyleString = this.cssStyleString + ` danger`;
    }
  }

  updateCssClassString() {
    if (this.variant === 'navLink') {
      this.cssStyleString.replace('link__nav--active', 'link__nav');
    } else if (this.variant === 'navLinkActive') {
      this.cssStyleString.replace('link__nav', 'link__nav--active');
    }
  }

  render() {
    return (
      <div class={this.cssStyleString}>
        <stencil-route-link url={this.url}>
          <slot />
        </stencil-route-link>
      </div>
    );
  }
}
