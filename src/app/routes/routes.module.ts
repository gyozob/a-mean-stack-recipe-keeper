import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from "../guards/auth-guard.service";

import { HomeComponent } from "../components/home/home.component";
import { LoginComponent } from "../components/login/login.component";
import { PageNotFoundComponent } from "../components/page-not-found/page-not-found.component";
import { RecipesComponent } from "../components/recipes/recipes/recipes.component";
import { RecipeComponent } from "../components/recipes/recipe/recipe.component";
import { AdminComponent } from "../components/admin/admin.component";
import { RecipeFormComponent } from "../components/recipes/recipe-form/recipe-form.component";

const recipesRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'recipes',
    component: RecipesComponent
  },
  {
    path: 'recipe/:id',
    component: RecipeComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'admin/recipes',
    component: RecipesComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'admin/recipe/add',
    component: RecipeFormComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'admin/recipe/edit/:id',
    component: RecipeFormComponent,
    canActivate: [
      AuthGuard
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(recipesRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class RecipesRoutesModule { }
