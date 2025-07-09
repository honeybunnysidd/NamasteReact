# Namaste React 🚀

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

## 🧱 Component Structure

- AppLayout \
  ├──Header \
  │ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── Logo \
  │ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── NavItems \
  ├──Body \
  │ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── Search \
  │ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── RestaurantContainer \
  │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── RestaurantCard \
  │ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── Img \
  │ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── Info Section \
  │ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── Name of Restaurant \
  │ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── Star Rating \
  │ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── Cuisine \
  │ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── Delivery Time \
  └──Footer \
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── Copyright \
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── Links \
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── Address \
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── Contact

# 🍔 Food Delivery App

### AppLayout

- **Header**
  - `Logo` – App ka logo show karta hai.
  - `NavItems` – Navigation links jaise Home, About, Contact, Cart.
- **Body**
  - `Search` – Restaurant search karne ke liye input field.
  - `RestaurantContainer` – Sabhi restaurants ko list karta hai.
    - `RestaurantCard` – Ek single restaurant card component.
      - `Img` – Restaurant ki image.
      - `Info Section`
        - `Name of Restaurant` – Restaurant ka naam.
        - `Star Rating` – Restaurant ki user rating.
        - `Cuisine` – Khana ka type (e.g., Indian, Chinese).
        - `Delivery Time` – Estimated delivery time.
- **Footer**
  - `Copyright`
  - `Links`
  - `Address`
  - `Contact`

## Two types of Export/Import

- Default Export/Import

export default Component;
import Component from "path";

- Named Export/Import

export const Component;
import {Component} from "path";

# React Hooks

(Normal JS utility functions)

- useState() - Superpowerful State Variables in react
- useEffect()
