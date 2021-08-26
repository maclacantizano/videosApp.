import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrepusculoAmanhecerPage } from './crepusculo-amanhecer.page';

describe('CrepusculoAmanhecerPage', () => {
  let component: CrepusculoAmanhecerPage;
  let fixture: ComponentFixture<CrepusculoAmanhecerPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrepusculoAmanhecerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrepusculoAmanhecerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
