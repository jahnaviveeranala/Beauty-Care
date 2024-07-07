// src/app/bgcompo/bgcompo.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarcomponentComponent } from '../navbarcomponent/navbarcomponent.component';
import { AboutComponent } from "../about/about.component";

@Component({
    selector: 'app-bgcompo',
    standalone: true,
    templateUrl: './bgcompo.component.html',
    styleUrls: ['./bgcompo.component.css'],
    imports: [CommonModule, NavbarcomponentComponent, AboutComponent]
})
export class BgcompoComponent { }
