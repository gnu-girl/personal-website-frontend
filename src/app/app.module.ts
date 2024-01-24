import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { AboutComponent } from "./about/about.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HomeComponent } from "./home/home.component";
import { GgLabelTitleComponent } from "./common/gg-label/gg-label-title/gg-label-title.component";
import { GgLabelCaptionComponent } from "./common/gg-label/gg-label-caption/gg-label-caption.component";
import { GgLabelComponent } from "./common/gg-label/gg-label.component";
import { GgCardComponent } from "./common/gg-card/gg-card.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ProjectService } from "./Services/projects.service";
import { GgButtonOutlineComponent } from "./common/gg-button-outline/gg-button-outline.component";
import { MatDialogModule } from "@angular/material/dialog";
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PageNotFoundComponent,
    HomeComponent,
    GgLabelTitleComponent,
    GgLabelCaptionComponent,
    GgLabelComponent,
    ProjectsComponent,
    GgCardComponent,
    GgButtonOutlineComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  providers: [ProjectService],
  exports: [FormsModule, ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
