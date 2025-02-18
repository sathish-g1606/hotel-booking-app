interface Hotel {
    id: number;
    name: string;
    location: string;
    rooms: number;
  }
  
  const hotels: Hotel[] = [
    { id: 1, name: 'Taj', location: 'Yeshwantpur', rooms: 10 },
    { id: 2, name: 'ITC Gardenia', location: 'Residency Road', rooms: 5 },
    { id: 3, name: 'Radisson', location: 'Ulsoor', rooms: 15 },
    { id: 4, name: 'Vivanta', location: 'MG Road', rooms: 6 },
    { id: 4, name: 'Ramada Encore', location: 'Domlur', rooms: 6 },
  ];
  
  export { hotels };
  