import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';

/**
 * Allow any user to access route with this decorator
 */
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
