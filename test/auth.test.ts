import { Request } from "express";
import { Auth } from "../src/controllers/auth";
import * as mock from "mock-req-res";

const authController = new Auth();

describe('Auth service', () => {
  test('should parse token from headers and verify with username', () => {
    const username = 'testuser';
    const token = authController.createToken(username);
    const request: Request = mock.mockRequest({
      params: {
        username,
      },
      headers: {
        authorization: `Bearer ${token}`
      }
    });

    const valid = authController.isValid(request);
    expect(valid).toBe(true);
  });
});