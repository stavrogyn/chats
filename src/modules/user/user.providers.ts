import { DataSource } from 'typeorm';
import { User } from './user.entity';
import { RepositoryType, Injects } from 'src/entities';

export const userProviders = [
  {
    provide: RepositoryType.User,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: [Injects.DataSource],
  },
];
