import { Sync } from './Sync';
import { Eventing } from './Eventing';
import axios, { AxiosResponse } from 'axios';
import { Attributes } from './Attributes';

export interface UserProps {
  id?: number;
  name?: string;
  bio?: string;
}

const rootUrl = 'http://localhost:3000/users';

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  public attributes: Attributes<UserProps>;

  constructor(public attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }
}
