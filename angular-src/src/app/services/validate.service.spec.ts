import { TestBed, inject } from '@angular/core/testing';

import { ValidateService } from './validate.service';

describe('ValidateService', () => {
  it('validateEmail',  () => {
    let validateService = new ValidateService();
    let expected = validateService.validateEmail("hashanlahiru6@gmail.com");
    expect(expected).toBe(true);
  });
});


