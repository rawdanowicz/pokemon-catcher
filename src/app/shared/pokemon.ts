export interface Pokemon {
  name: String;
  artwork: String;
  stats: [
    {
      name: String;
      value: Number;
    }
  ];
}
