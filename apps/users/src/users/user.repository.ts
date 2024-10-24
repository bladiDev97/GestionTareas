import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { GenericRepository } from "@app/shared";
import { UserEntity } from "./user.entity";

@Injectable()
export class UserRepository extends GenericRepository<UserEntity> {
  constructor(public readonly dataSource: DataSource) {
    super(UserEntity, dataSource);
  }
}
