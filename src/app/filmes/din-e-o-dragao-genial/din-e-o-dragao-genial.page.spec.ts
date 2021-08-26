import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DinEODragaoGenialPage } from './din-e-o-dragao-genial.page';

describe('DinEODragaoGenialPage', () => {
  let component: DinEODragaoGenialPage;
  let fixture: ComponentFixture<DinEODragaoGenialPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DinEODragaoGenialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DinEODragaoGenialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
