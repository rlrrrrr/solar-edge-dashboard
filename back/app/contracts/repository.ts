// user repostioryService is a repository to define contract for any type of user, that as an admin or basic user ...

export abstract class UserRepositoryService {
  abstract save(identifier: string, password: string): Promise<void>
  abstract updatePassword(identifier: string, password: string): Promise<void>
}
