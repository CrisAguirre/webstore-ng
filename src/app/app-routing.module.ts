import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { StorefrontComponent } from './components/storefront/storefront.component';
import { LoginComponent } from './components/login/login.component';

// Guards
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  // Rutas públicas
  { path: '', component: StorefrontComponent },
  { path: 'login', component: LoginComponent },
  
  // Rutas administrativas (protegidas)
  { path: 'admin/dashboard', component: ListarProductosComponent, canActivate: [AuthGuard] },
  { path: 'admin/crear-producto', component: CrearProductoComponent, canActivate: [AuthGuard] },
  { path: 'admin/editar-producto/:id', component: CrearProductoComponent, canActivate: [AuthGuard] },
  
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
