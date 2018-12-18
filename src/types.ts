/* decoded JWT object */
export interface ParsedJWT {
  readonly username: string;
  readonly iat: number;
  readonly exp: number;
}