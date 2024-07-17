import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryEntryListingComponent } from './diary-entry-listing.component';

describe('NotesListingComponent', () => {
  let component: DiaryEntryListingComponent;
  let fixture: ComponentFixture<DiaryEntryListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiaryEntryListingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiaryEntryListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
