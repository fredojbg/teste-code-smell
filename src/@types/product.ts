export interface Item {
  itemId: string;
  name: string;
  nameComplete: string;
  complementName: string;
  ean: string;
  // referenceId: ReferenceId[];
  measurementUnit: string;
  unitMultiplier: number;
  modalType?: any;
  isKit: boolean;
  images: Image[];
  sellers: Seller[];
  Videos: any[];
  estimatedDateArrival?: any;
}

export interface Image {
  imageId: string;
  imageLabel?: any;
  imageTag: string;
  imageUrl: string;
  imageText: string;
  imageLastModified: string;
}

export interface Seller {
  sellerId: string;
  sellerName: string;
  addToCartLink: string;
  sellerDefault: boolean;
  commertialOffer: CommertialOffer;
}

export interface IProduct {
  productId: string;
  productName: string;
  items: Item[];
  image_url: string;
  price: number;
  
}

export interface CommertialOffer {
  // DeliverySlaSamplesPerRegion: DeliverySlaSamplesPerRegion;
  // Installments: Installment[][];
  DiscountHighLight: any[];
  GiftSkuIds: any[];
  Teasers: any[];
  BuyTogether: any[];
  ItemMetadataAttachment: any[];
  Price: number;
  ListPrice: number;
  PriceWithoutDiscount: number;
  RewardValue: number;
  PriceValidUntil?: (null | string)[];
  AvailableQuantity: number;
  Tax: number;
  // DeliverySlaSamples: _0[][];
  GetInfoErrorMessage?: string | string;
  CacheVersionUsedToCallCheckout: string;
  // PaymentOptions?: (PaymentOption | null)[];
}