import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn, } from 'typeorm';
import { Role } from '../../roles/entities/role.entity';
import { Status } from '../../statuses/entities/status.entity';
import { AuthProvidersEnum } from 'src/auth/auth-providers.enum';
import { Exclude } from 'class-transformer';

/**
* TODO: Improve fields and required fields
*/
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  // For "string | null" we need to use String type.
  // More info: https://github.com/typeorm/typeorm/issues/2567
  @Column({ type: String, unique: true, nullable: true })
  email: string | null;

  @Column({ nullable: true })
  @Exclude({ toPlainOnly: true }) // Just excluded from JSON responses
  password: string;


  @Column({ default: AuthProvidersEnum.EMAIL })
  provider: string;

  @Index()
  @Column({ type: String, nullable: true })
  socialId: string | null;

  @Index()
  @Column({ type: String, nullable: true })
  firstName: string | null;

  @Index()
  @Column({ type: String, nullable: true })
  lastName: string | null;


  @ManyToOne(() => Role, {
    eager: true,
  })
  @JoinColumn({ name: 'roleId' }) // Specify the name of the column in the database
  role: Role;

  @Column({ default: 2 }) // Assign the default role ID - default is user
  roleId: number;

  @ManyToOne(() => Status, {
    eager: true,
  })
  @JoinColumn({ name: 'statusId' }) // Specify the name of the column in the database
  status: Status;

  @Column({ default: 1 }) // Assign the default role ID - default is active
  statusId: number;


  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
