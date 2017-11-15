import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillPersonaComponent } from './skills-persona.component';

describe('SkillPersonaComponent', () => {
  let component: SkillPersonaComponent;
  let fixture: ComponentFixture<SkillPersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillPersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
