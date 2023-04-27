import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactComponent } from './shared/pages/contact-page/contact.component';

const routes: Routes = [
    // {
    //     path: '',
    //     component: HomePageComponent
    // },
    {
        path: 'about',
        component: AboutPageComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'countries',
        loadChildren: () => import ('./countries/countries.module').then( m => m.CountriesModule )
    },
    {
        path:'**',
        redirectTo: 'countries'
    }
];

@NgModule({
    declarations: [],
    imports: [ 
        CommonModule,
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ],
    providers: [],
})
export class appRoutingModule {}