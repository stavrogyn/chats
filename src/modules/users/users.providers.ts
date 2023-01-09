import { DataSource } from 'typeorm';
import { User } from './users.entity';
import { RepositoryType, Injects } from 'src/entities';

export const usersProviders = [
  {
    provide: RepositoryType.Users,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: [Injects.DataSource],
  },
];
