import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog/blog.component';
import { BlogEntryComponent } from './blog-entry/blog-entry.component';
import {AdsenseModule} from 'ng2-adsense';
import {SharedModule} from '../shared/shared.module';
import { BlogPostPageComponent } from './blog-post-page/blog-post-page.component';

@NgModule({
  imports: [
    CommonModule,
    AdsenseModule,
    SharedModule,
    BlogRoutingModule
  ],
  declarations: [BlogComponent, BlogEntryComponent, BlogPostPageComponent]
})
export class BlogModule { }
