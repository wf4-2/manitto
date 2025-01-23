import { Suspense } from 'react';
import SignupForm from 'components/SignupForm';

export default function LoginPage() {
  return (
    <main>
      <Suspense>
        <SignupForm />
      </Suspense>
    </main>
  );
}
