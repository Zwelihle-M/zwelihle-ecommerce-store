// fetching billboards

export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

// fetching categories
export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

// fetching Products
export interface Product {
  id: string;
  category: Category;
  name: string;
  brand: string;
  slug: string;
  price: string;
  isFeatured: boolean;
  size: Size;
  color: Color;
  images: Image[];
}

// product images array
export interface Image {
  id: string;
  url: string;
}

// sizes
export interface Size {
  id: string;
  name: string;
  value: string;
}
// colors
export interface Color {
  id: string;
  name: string;
  value: string;
}
