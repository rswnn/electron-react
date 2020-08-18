import { RouteComponentProps } from "react-router";

export interface RouteComponentProps<P> {
  match: match<P>;
  location: H.Location;
  history: H.History;
}

export interface match<P> {
  params: P;
  isExact: boolean;
  path: string;
  url: string;
}
