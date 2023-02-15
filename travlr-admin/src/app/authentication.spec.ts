// import { AuthenticationService } from './services/authentication';

// describe('Authentication', () => {
//   it('should create an instance', () => {
//     expect(new AuthenticationService()).toBeTruthy();
//   });
// });
import { AuthenticationService } from './services/authentication';
import { TripDataService } from './services/trip-data.service';

describe('AuthenticationService', () => {
  let authService: AuthenticationService;
  let storageSpy: jasmine.SpyObj<Storage>;
  let tripDataServiceSpy: jasmine.SpyObj<TripDataService>;

  beforeEach(() => {
    storageSpy = jasmine.createSpyObj('Storage', ['getItem', 'setItem', 'removeItem']);
    tripDataServiceSpy = jasmine.createSpyObj('TripDataService', ['login', 'register']);
    authService = new AuthenticationService(storageSpy, tripDataServiceSpy);
  });

  it('should create an instance', () => {
    expect(authService).toBeTruthy();
  });
});

