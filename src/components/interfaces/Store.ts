export interface Data {
  storeCode: string;
  storeName: string;
  storeType: string;
  storePhone: string | null;
  storeStatus: string;
  ownerName: string;
  ownerPhone: string;
  openDate: string;
  New: string;
  bsDisName: string;
  bsDisCode: string;
  linkStore: any;
  addrNew: string;
}

export interface StoreStatusType {
  id: number;
  name: string;
  value: string;
}
