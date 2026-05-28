import { TestBed } from '@angular/core/testing';
import { UserService } from './user';
import { describe, it, expect, beforeEach } from 'vitest';

describe('User', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

