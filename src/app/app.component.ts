import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  one = "yellow";
  cone = true;
  ctwo = true;

  toggle() {
    this.cone = !this.cone;
    this.ctwo = !this.ctwo;
  }
}
