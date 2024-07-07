import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgcompoComponent } from './bgcompo.component';

describe('BgcompoComponent', () => {
  let component: BgcompoComponent;
  let fixture: ComponentFixture<BgcompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BgcompoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BgcompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
