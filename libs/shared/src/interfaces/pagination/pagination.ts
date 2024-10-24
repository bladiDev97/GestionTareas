export class Pagination<T> {
  public data: T[];
  public total: number;

  constructor([data, total]) {
    this.data = data;
    this.total = total;
  }
}