(() => {
  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddress(id: string): string;
  }

  interface Address {
    id: number;
    zip?: string;
    city: string;
  }
  const client: Client = {
    name: "Gabo",
    age: 25,
    address: {
      city: "izt",
      id: 1,
    },
    getFullAddress(id: string) {
      return this.name;
    },
  };
})();
