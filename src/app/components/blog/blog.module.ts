import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from '../blogs/blogs.component';
import { BlogComponent } from './blog.component';
import { EditBlogComponent } from '../edit-blog/edit-blog.component';
import { AddBlogComponent } from '../add-blog/add-blog.component';


@NgModule({
  declarations: [
    BlogsComponent,
    BlogComponent,
    EditBlogComponent,
    AddBlogComponent
  ],
  imports: [
    CommonModule,
  
  ], exports: [
      BlogsComponent,
      BlogComponent,
      EditBlogComponent,
      AddBlogComponent
  ],

})
export class BlogModule { }
