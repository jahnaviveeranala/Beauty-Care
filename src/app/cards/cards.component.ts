import { Component } from '@angular/core';
import { TestnomialComponent } from "../testnomial/testnomial.component";

@Component({
    selector: 'app-cards',
    standalone: true,
    templateUrl: './cards.component.html',
    styleUrl: './cards.component.css',
    imports: [TestnomialComponent]
})
export class CardsComponent {

}
