/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface RjContainer {
        "fullWidth": boolean;
    }
    interface RjNavigationPanel {
        "appTitle": string;
        "fullWidth": boolean;
    }
}
declare global {
    interface HTMLRjContainerElement extends Components.RjContainer, HTMLStencilElement {
    }
    var HTMLRjContainerElement: {
        prototype: HTMLRjContainerElement;
        new (): HTMLRjContainerElement;
    };
    interface HTMLRjNavigationPanelElement extends Components.RjNavigationPanel, HTMLStencilElement {
    }
    var HTMLRjNavigationPanelElement: {
        prototype: HTMLRjNavigationPanelElement;
        new (): HTMLRjNavigationPanelElement;
    };
    interface HTMLElementTagNameMap {
        "rj-container": HTMLRjContainerElement;
        "rj-navigation-panel": HTMLRjNavigationPanelElement;
    }
}
declare namespace LocalJSX {
    interface RjContainer {
        "fullWidth"?: boolean;
    }
    interface RjNavigationPanel {
        "appTitle": string;
        "fullWidth"?: boolean;
    }
    interface IntrinsicElements {
        "rj-container": RjContainer;
        "rj-navigation-panel": RjNavigationPanel;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "rj-container": LocalJSX.RjContainer & JSXBase.HTMLAttributes<HTMLRjContainerElement>;
            "rj-navigation-panel": LocalJSX.RjNavigationPanel & JSXBase.HTMLAttributes<HTMLRjNavigationPanelElement>;
        }
    }
}
