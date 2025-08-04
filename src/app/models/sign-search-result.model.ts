export interface SignSearchResult {
  id: string;
  text: string;
  type: string;
  currentVideo: {
    videoUrl: string;
    license: string;
    user: {
      name: string;
    };
  } | null;
}

export interface SearchResponse {
  data: {
    search: SignSearchResult[];
  };
}