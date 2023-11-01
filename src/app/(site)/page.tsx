import { RiArrowRightFill } from 'react-icons/ri';

import Link from 'next/link';

import { PageContentHeader } from '@/components/atoms/PageContentHeader';
import { PostList } from '@/components/organisms/PostList';
import { getAllPosts } from '@/lib/postsUtils';

export default function HomePage() {
  const posts = getAllPosts(3);

  return (
    <article className='relative py-10'>
      <PageContentHeader
        header='Witaj na blogu!'
        subheader='Witajcie na moim blogu poświęconym fascynującemu światu gier! Chciałbym podzielić się z Wami moimi ulubionymi grami z różnych kategorii, które z pewnością zapewnią Wam wiele godzin rozrywki i niezapomnianych chwil. Niezależnie od tego, czy jesteście miłośnikami gier akcji, RPG, czy strzelanek, znajdziecie tutaj propozycje, które zachwycą Was swoją jakością i niepowtarzalnym klimatem.'
      />
      <h3 className='mb-5 text-center text-2xl font-bold tracking-wide text-seagreen md:text-left md:text-3xl'>
        Popularne wpisy
      </h3>
      <PostList posts={posts} />
      <Link
        href='/posty'
        className='absolute bottom-0 right-0 inline-flex items-center text-lg font-semibold text-seagreen-400 transition hover:text-seagreen'
      >
        Wszystkie artykuły <RiArrowRightFill className='ms-1 h-6 w-6' />
      </Link>
    </article>
  );
}
