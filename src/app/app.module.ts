import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HighlightTextDirective } from "./highlight-text.directive";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
declarations:[AppComponent,HighlightTextDirective],
imports:[BrowserModule,FormsModule],
bootstrap:[AppComponent]
})
export class AppModule {

}