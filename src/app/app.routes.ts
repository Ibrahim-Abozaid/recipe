import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { AllMealsComponent } from './all-meals/all-meals.component';

export const routes: Routes = [
  { path: '', redirectTo: 'meals', pathMatch: 'full' },
  { path: 'meals', component: AllMealsComponent, title: 'meals' },
  {
    path: 'Ingredients',
    component: DetailsComponent,
    title: 'Ingredients',
  },
];
