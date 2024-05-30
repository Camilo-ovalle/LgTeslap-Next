'use client';

import Forms from '../../components/Forms';
import Nav from '@/components/NavBar';

function page() {
  return (
    <div>
      <Nav />
      <section className="py-60">
        <Forms />
      </section>
    </div>
  );
}

export default page;
