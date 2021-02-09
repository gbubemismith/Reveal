interface UserProps {
  name?: string;
  bio?: string;
}

type Callback = () => void;

export class User {
  events: { [key: string]: Callback[] } = {};
  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(updateData: UserProps): void {
    Object.assign(this.data, updateData);
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);

    this.events[eventName] = handlers;
  }
}
