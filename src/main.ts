import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err))
  .finally(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.style.display = 'none';
  });