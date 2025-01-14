// Import necessary modules from '@angular/core/testing'.
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Import the 'HomePageComponent' class from the 'home-page.component' file.
import { HomePageComponent } from './home-page.component';

// This 'describe' block defines a test suite for the 'HomePageComponent'.
describe('HomePageComponent', () => {
  let component: HomePageComponent; // Declare a variable to hold an instance of the 'HomePageComponent'.
  let fixture: ComponentFixture<HomePageComponent>; // Declare a variable to hold a fixture for the 'HomePageComponent'.

  // This 'beforeEach' block is wrapped in the 'async' function.
  // It configures and compiles the Angular module before each test.
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageComponent ] // Declare the component to be tested, 'HomePageComponent'.
    })
    .compileComponents(); // Compile the component for testing.
  }));

  // This 'beforeEach' block is used to create an instance of the 'HomePageComponent' and detect changes.
  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent); // Create a fixture for the 'HomePageComponent'.
    component = fixture.componentInstance; // Create an instance of the 'HomePageComponent'.
    fixture.detectChanges(); // Detect changes in the component.
  });

  // This 'it' block defines a test case that checks if the 'HomePageComponent' was created successfully.
  it('should create', () => {
    expect(component).toBeTruthy(); // Expect that the 'component' is truthy, indicating that it was successfully created.
  });
});
