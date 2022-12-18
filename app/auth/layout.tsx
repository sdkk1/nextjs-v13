import { cookies, headers } from 'next/headers'

import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'

import SupabaseListener from '../components/supabase-listener'

import type { Database } from '../../database.types'

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <>
      <SupabaseListener accessToken={session?.access_token} />
      {children}
    </>
  )
}

export default AuthLayout
