import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-testnomial',
    standalone: true,
    templateUrl: './testnomial.component.html',
    styleUrl: './testnomial.component.css',
    imports: [FooterComponent]
})
export class TestnomialComponent {

}
