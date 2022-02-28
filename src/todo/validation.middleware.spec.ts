import { ValidationMiddleware } from './validation.middleware';

describe('ValidationMiddleware', () => {
  it('should be defined', () => {
    expect(new ValidationMiddleware()).toBeDefined();
  });
});
