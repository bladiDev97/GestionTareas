import { DeepPartial } from "typeorm";

/**
 * @param E Model Entity
 */
export interface IGenericRepository<E = any> {
  instanceEntity(entityLike: DeepPartial<any>): E;

  listEntities(): Promise<E[]>;
  listEntitiesAndCount(page: number, limit: number): Promise<[E[], number]>;
  findOneEntity(id: number ): Promise<E>;

  saveEntity(entity: E): Promise<E>;
  updateEntity(entity: E): Promise<E>;

  deleteEntity(id: number): Promise<E>;
  softDeleteEntity(id: number): Promise<E>;
}
