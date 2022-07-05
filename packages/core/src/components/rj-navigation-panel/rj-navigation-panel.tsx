import {
  Component,
  h,
  Host,
  Prop
} from "@stencil/core";

@Component({
  tag: "rj-navigation-panel",
  styleUrl: "rj-navigation-panel.css",
  shadow: true
})

export class NavigationPanel {
  @Prop() fullWidth: boolean = false;

  @Prop() appTitle!: string;

  componentWillLoad(): void {
    console.log('rj-navigation-panel', this.appTitle);
  }

  render() {
    return (
      <Host
        class={{
          ["wrapper"]: true
        }}
      >
        <rj-container full-width={this.fullWidth} >
          <p>{this.appTitle}</p>
        </rj-container>
      </Host>
    )
  }
}
