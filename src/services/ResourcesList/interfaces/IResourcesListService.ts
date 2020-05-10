export interface IListResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Array<IResource>;
  ad: {
    company: string;
    url: string;
    text: string;
  };
}

export interface IResource {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}
