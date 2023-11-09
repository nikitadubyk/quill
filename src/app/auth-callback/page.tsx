import { useRouter, useSearchParams } from 'next/navigation';
import { trpc } from '../_trpc/clients';

const AuthCallback = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const originParam = searchParams.get('origin');

  const { data } = trpc.test.useQuery();

  return <div></div>;
};

export default AuthCallback;
