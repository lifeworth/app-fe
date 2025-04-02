export const fetchApi = () => fetch("/api/bian/", { method: "POST" });

export type ArticleObj = {
  object: {
    type: number;
    data: {
      id: number;
      title: string;
      slug: string;
      list_image_url: string;
      public_abbr: string;
      commentable: boolean;
      important_collection: null | string;
      user: {
        id: number;
        nickname: string;
        slug: string;
        avatar: string;
      };
      total_fp_amount: number;
      public_comments_count: number;
      total_rewards_count: number;
      likes_count: number;
    };
  };
};
