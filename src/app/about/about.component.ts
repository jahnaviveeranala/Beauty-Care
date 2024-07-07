import { Component } from '@angular/core';
import { CategoryComponent } from "../category/category.component";
import { TreatmentComponent } from "../treatment/treatment.component";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    imports: [CategoryComponent, TreatmentComponent]
})
export class AboutComponent {

}
