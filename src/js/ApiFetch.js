import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '33675030-cc14eed331d6d92ff5641cad6';

export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.perPage = 40;
    this.page = 1;
  }

  async fetchApi() {
    const params = new URLSearchParams({
      key: API_KEY,
      q: this.searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: this.page,
      per_page: this.perPage,
    });
    const url = `${BASE_URL}/?${params}`;
    this.stepPage();
    return await axios.get(url);
  }

  stepPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
