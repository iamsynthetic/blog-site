export type TCategory = {
  id: string;
  catName: string;
};

export type TPost = {
  id: string;
  blurb?: string;
  title: string;
  title2?: string;
  title3?: string;
  quote?: string;
  quote2?: string;
  quote3?: string;
  quote4?: string;
  story?: string;
  story2?: string;
  story3?: string;
  story4?: string;
  content: string;
  imageUrl?: string;
  imageUrl2?: string;
  imageUrl3?: string;
  imageUrl4?: string;
  imageUrl5?: string;
  publicId?: string;
  catName?: string;
  links: null | string[];
  createAt: string;
  authorEmail: string;
  author: {
    name: string;
  };
};
