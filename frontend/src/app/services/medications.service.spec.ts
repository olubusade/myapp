import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { MedicationsService } from './medications.service';
import {Medications} from '../interfaces/medications'
describe('MedicationsService', () => {
  let httpTestingController: HttpTestingController;
  let service: MedicationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
//This block checks if the  http request can be sent from this service
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);

    service = TestBed.get(MedicationsService);
  });
  afterEach(() => {
    httpTestingController.verify();
  });
 
  //This block tests to know if GET method was used to retrieve all medications data
  it('#getData should use GET to retrieve data', () => {
    service.getMedications().subscribe();
 
    const testRequest = httpTestingController.expectOne('http://localhost:3000/api/all-medications');
 
    expect(testRequest.request.method).toEqual('GET');
  });
  //This blocks expects the api to return the expected Data
  it('#getData should return expected data', (done) => {
    const expectedData: Medications[] = [];

    service.getMedications().subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });
    const testRequest = httpTestingController.expectOne('http://localhost:3000/api/all-medications');
    testRequest.flush(expectedData);
  });
//This blocks should return and empty object should there be an error
  it('#getData should return an empty object on error', (done) => {
    const expectedData: Medications[] = []
 
    service.getMedications().subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });
 
    const testRequest = httpTestingController.expectOne('http://localhost:3000/api/all-medications');
    testRequest.flush('error', { status: 500, statusText: 'Broken Service' });
  });

});
