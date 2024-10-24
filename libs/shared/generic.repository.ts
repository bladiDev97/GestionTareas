/* eslint-disable @typescript-eslint/no-unused-vars */
import { Repository, DataSource, EntityTarget, DeepPartial, FindOneOptions } from 'typeorm';
import { IGenericRepository } from './src/interfaces/i-generic.repository.interface';

export abstract class GenericRepository<E> extends Repository<E> implements IGenericRepository<E> {
  constructor(
    public target: EntityTarget<E>,
    public dataSource: DataSource,
  ) {
    super(target, dataSource.createEntityManager());
  }

  public instanceEntity(e: DeepPartial<E>): E {
    return this.create(e);
  }

  public async listEntities(): Promise<E[]> {
    return await this.find();
  }

  public async listEntitiesAndCount(page: number, limit: number): Promise<[E[], number]> {
    page = page > 0 ? page : page = 1;
    limit = limit > 0 ? limit : limit = 1;
    const take = limit + (page - 1)*limit;
    const skip = (page - 1)*limit;
    return await this.findAndCount({skip, take });
  }

  public async findOneEntity(id: number): Promise<E> {
    const options: FindOneOptions = {where: {id: id}};
    return await this.findOne(options);
  }

  public async saveEntity(e: E): Promise<E> {
    return await this.save(e);
  }

  public async updateEntity(entity: E): Promise<E> {
    const id = entity['id'];
    delete entity['id'];

    const res = await this.createQueryBuilder()
      .update(entity as any)
      .set({ ...(entity as any) })
      .where('id = :id', { id })
      .execute();

    if (!res.affected) return;

    return entity;
  }

  public async deleteEntity(id: number): Promise<E> {
    const entity = await this.findOneEntity(id);
    const res = await this.delete(id);
    if (!res.affected) return;
    return entity;
  }

  public async softDeleteEntity(id: number): Promise<E> {
    const entity = await this.findOneEntity(id);
    const res = await this.softDelete(id);
    if (!res.affected) return;
    return entity;
  }
}
