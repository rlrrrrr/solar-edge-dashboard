export abstract class RepositoryService {
  abstract save(identifier: string, password: string): Promise<void>
}
