type Props = {
  header: string;
  subheader: string;
};

export const PageContentHeader = ({ header, subheader }: Props) => {
  return (
    <hgroup className='space-y-2 pb-8 pt-6 md:space-y-5'>
      <h2 className='md:leading-14 text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl'>
        {header}
      </h2>
      <p className='text-lg leading-7 text-smoky-200'>{subheader}</p>
    </hgroup>
  );
};
