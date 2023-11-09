import { redirect } from 'next/navigation';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

import { Routes } from '@/config/routes';

const Dashboad = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) redirect(Routes.authCallback.replace('{page}', 'dashboard'));

  return <div>{user.email}</div>;
};

export default Dashboad;
