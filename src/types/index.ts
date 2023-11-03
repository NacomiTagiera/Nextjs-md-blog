export type Post = {
  category: string;
  content: string;
  date: string;
  excerpt: string;
  slug: string;
  thumbnail: string;
  title: string;
};

export type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export type SortingOption = 'najnowsze' | 'najstarsze' | 'alfabetycznie';
