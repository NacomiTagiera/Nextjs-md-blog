interface Props {
  header: string;
  introText: string;
}

export default function Intro({ header, introText }: Props) {
  return (
    <header className='space-y-2 pb-8 pt-6 md:space-y-5'>
      <h2 className='md:leading-14 text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl'>
        {header}
      </h2>
      <p className='text-lg leading-7 text-gray-400'>{introText}</p>
    </header>
  );
}
