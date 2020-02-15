import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

import { BlogComponent } from './blog.component';
import { BlogsComponent } from '../blogs/blogs.component';

const routes: Routes = [
    {
        path: '',
        component: BlogComponent
    },
    {
        path: 'list',
        component: BlogsComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class BlogRoutingModule {}