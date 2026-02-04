import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding, withHashLocation, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,  
      withRouterConfig({
        paramsInheritanceStrategy: "always"
      }),
      // withRouterConfig injects dynamic route parameters in children routes as input
      withHashLocation() // this is to make routes work on github pages)
    )
  ]
};
