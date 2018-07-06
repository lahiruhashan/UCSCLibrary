import { TestBed, inject } from '@angular/core/testing';

import { AdminService } from './admin.service';
import {HttpClient} from "@angular/common/http";

/*describe('AdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminService]
    });
  });

  it('should be created', inject([AdminService], (service: AdminService) => {
    expect(service).toBeTruthy();
  }));
});*/

describe("AdminService", () => {
  it('getAllUsers', ()=> {
    let http = new HttpClient(null);
    let adminservice = new AdminService(http);
    let result = adminservice.getAllUsers();
    expect(result).not.toBe(null);
  });
});
