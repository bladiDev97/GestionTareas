import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserEntity } from './user.entity';
import { CreateUserDto, UpdateUserDto } from '@app/shared';

@Injectable()
export class UserService {
  constructor(@Inject(UserRepository) public readonly userRepository: UserRepository) {}

  public async list(page: number, limit: number): Promise<[UserEntity[], number]> {
    return await this.userRepository.listEntitiesAndCount(page, limit);
  }

  public async detail(id: number): Promise<UserEntity> {
    return await this.userRepository.findOneEntity(id);
  }

  public async create(dto: CreateUserDto): Promise<UserEntity> {
    const entity = this.userRepository.instanceEntity(dto);
    return await this.userRepository.saveEntity(entity);
  }

  public async update(dto: UpdateUserDto): Promise<UserEntity> {
    const entity = this.userRepository.instanceEntity(dto);
    return await this.userRepository.updateEntity(entity);
  }

  public async delete(id: number): Promise<UserEntity> {
    return await this.userRepository.deleteEntity(id);
  }
}
