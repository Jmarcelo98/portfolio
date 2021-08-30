import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificacoesEconquistasComponent } from './certificacoes-econquistas.component';

describe('CertificacoesEconquistasComponent', () => {
  let component: CertificacoesEconquistasComponent;
  let fixture: ComponentFixture<CertificacoesEconquistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificacoesEconquistasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificacoesEconquistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
