import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

/**
 * Most common entity for course, user, and more
 * Provide all entity with id, created, deleted, and updated date
 */
@Entity()
export abstract class CommonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * UUID column
   */
  @Generated('uuid')
  @Column()
  uuid: string;

  /**
   * created date column
   */
  @CreateDateColumn()
  createdAt: Date;

  /**
   * updated date column
   */
  @UpdateDateColumn()
  updatedAt: Date;

  /**
   * delete date column
   */
  @DeleteDateColumn()
  deletedAt: Date;

  /**
   * disable a row column
   */
  @Column('boolean', { default: true })
  status: boolean;
}
