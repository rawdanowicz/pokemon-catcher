export interface Pokemon {
  name: string;
  artwork: string;
  stats: [
    {
      name: string;
      value: number;
    }
  ];
  caught?: boolean;
}
