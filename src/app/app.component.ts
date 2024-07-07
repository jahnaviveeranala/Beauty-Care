import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarcomponentComponent } from './navbarcomponent/navbarcomponent.component';
import { BgcompoComponent } from './bgcompo/bgcompo.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, NavbarcomponentComponent, BgcompoComponent]
})
export class AppComponent {
    title = 'BeautyProducts';
}
