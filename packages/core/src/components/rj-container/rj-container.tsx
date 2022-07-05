import {
  Component,
  h,
  Host,
  Prop
} from "@stencil/core";

@Component({
  tag: "rj-container",
  styleUrl: "rj-container.css",
  shadow: true
})

export class Container {
  @Prop() fullWidth: boolean = false;

  render() {
    return (
      <Host
        class={{
          ["full-width"]: this.fullWidth
        }}
      >
        <slot></slot>
      </Host>
    )
  }
}
