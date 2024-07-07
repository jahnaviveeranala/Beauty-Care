import { Component } from '@angular/core';
import { CardsComponent } from "../cards/cards.component";

@Component({
    selector: 'app-category',
    standalone: true,
    templateUrl: './category.component.html',
    styleUrl: './category.component.css',
    imports: [CardsComponent]
})
export class CategoryComponent {

}
