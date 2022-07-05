import { Config } from '@stencil/core';
import { reactOutputTarget as react } from "@stencil/react-output-target";

export const config: Config = {
  namespace: 'core',
  outputTargets: [
    react({
      componentCorePackage: '@rj/core',
      proxiesFile: '../react/src/components.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: "dist-hydrate-script"
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
