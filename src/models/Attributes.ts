export class Attributes<T> {
  constructor(private data: T) {}

  //K can only be one of the keys of T
  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  set(updateData: T): void {
    Object.assign(this.data, updateData);
  }
}

// const attr = new Attributes<UserProps>({
//   id: 5,
//   bio: 'test',
//   name: 'smnith',
// });

// const name = attr.get('id');
