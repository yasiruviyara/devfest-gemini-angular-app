import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaminiPrompterComponent } from './gamini-prompter.component';

describe('GaminiPrompterComponent', () => {
  let component: GaminiPrompterComponent;
  let fixture: ComponentFixture<GaminiPrompterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GaminiPrompterComponent]
    });
    fixture = TestBed.createComponent(GaminiPrompterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
