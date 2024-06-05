import {Authenticator} from "@adonisjs/auth";
import {Authenticators} from "@adonisjs/auth/types";

export abstract class AuthentificationService {
  abstract auth(
    identifier: string,
    password: string,
    auth: Authenticator<Authenticators>
  ): Promise<void>
}
