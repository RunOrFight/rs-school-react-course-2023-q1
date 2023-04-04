export interface ApiResponse<Item> {
  info: ApiResponseInfo;
  results: Item[];
}
export interface ApiResponseInfo {
  count: number;
  pages: number;
  next: string;
  prev: unknown;
}
