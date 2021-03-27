import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule } from '@angular/router';
import { MAIN_ROUTES } from './routes/main.routes';
const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(MAIN_ROUTES, routerOptions)],
  exports: [RouterModule],
})
export class CoreModule {}
