interface Props {
  header: string;
  introText: string;
}

export default function Intro({ header, introText }: Props) {
  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <h2 className="text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        {header}
      </h2>
      <p className="text-lg leading-7 text-gray-400">{introText}</p>
    </div>
  );
}
