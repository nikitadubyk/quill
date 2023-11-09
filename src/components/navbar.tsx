import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import {
  LoginLink,
  RegisterLink,
  getKindeServerSession,
} from '@kinde-oss/kinde-auth-nextjs/server';

import { Routes } from '@/config/routes';

import { buttonVariants } from './ui/button';
import { MaxWidthWrapper } from './max-width-wrapper';

const commonStyleProps: Partial<typeof buttonVariants> = {
  size: 'sm',
  variant: 'ghost',
};

export const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href={Routes.home} className="flex z-40 font-semibold">
            <span>quill.</span>
          </Link>

          <div className="hidden items-center space-x-4 sm:flex">
            {!user ? (
              <>
                <Link
                  href={Routes.pricing}
                  className={buttonVariants(commonStyleProps)}
                >
                  Pricing
                </Link>
                <LoginLink className={buttonVariants(commonStyleProps)}>
                  Sign in
                </LoginLink>
                <RegisterLink className={buttonVariants({ size: 'sm' })}>
                  Get started <ArrowRight className="ml-1.5 h-5 w-5" />
                </RegisterLink>
              </>
            ) : (
              <>
                <Link
                  href={Routes.dashboard}
                  className={buttonVariants(commonStyleProps)}
                >
                  Dashboard
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};
