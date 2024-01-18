import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { BlogService } from './Services/Games/blog.service';
import { BlogModule } from './blog/blog.module';
import { HomeComponent } from './home/home.component';
import { GgLabelTitleComponent } from './common/gg-label/gg-label-title/gg-label-title.component';
import { GgLabelCaptionComponent } from './common/gg-label/gg-label-caption/gg-label-caption.component';
import { GgLabelComponent } from './common/gg-label/gg-label.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PageNotFoundComponent,
    ContactComponent,
    HomeComponent,
    GgLabelTitleComponent,
    GgLabelCaptionComponent,
    GgLabelComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    BlogModule,
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
