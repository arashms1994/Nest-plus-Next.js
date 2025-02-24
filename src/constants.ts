import {
  Category,
  Label,
  People,
  Store,
  ShoppingBasket,
  Dashboard,
  LocationCity,
  ColorLens,
  Apple,
  EditAttributes,
  PhoneAndroid,
  Update,
} from "@mui/icons-material";
import { ListOrdered, ListOrderedIcon } from "lucide-react";

export const SIDEBAR_ITEMS = [
  { href: "/dashboard", Icon: Dashboard, text: "داشبورد ادمین" },
  { href: "/dashboard/badges", Icon: Label, text: "برچسب‌ها" },
  { href: "/dashboard/brands", Icon: Apple, text: "برند" },
  { href: "/dashboard/categories", Icon: Category, text: "دسته‌بندی کالاها" },
  { href: "/dashboard/cities", Icon: LocationCity, text: "شهرها" },
  { href: "/dashboard/colors", Icon: ColorLens, text: "رنگ‌ها" },
  { href: "/dashboard/properties", Icon: EditAttributes, text: "ویژگی‌ها" },
  { href: "/dashboard/products", Icon: PhoneAndroid, text: "محصولات" },
  { href: "/dashboard/users", Icon: People, text: "کاربران" },
  { href: "/dashboard/sellers", Icon: Store, text: "فروشندگان" },
  { href: "/dashboard/orders", Icon: ShoppingBasket, text: "سفارشات" },
];

export const SHOP_SIDEBAR_ITEMS = [
  { href: "/shop", Icon: Dashboard, text: "داشبورد فروشگاه" },
  { href: "/shop/categories", Icon: Category, text: "دسته‌بندی کالاها" },
  { href: "/shop/products", Icon: PhoneAndroid, text: "محصولات" },
  { href: "/shop/orders", Icon: ShoppingBasket, text: "سفارشات" },
];

export const USER_SIDEBAR_ITEMS = [
  { href: "/user-dashboard/orders", Icon: ListOrdered, text: "سفارشات" },
  {
    href: "/user-dashboard/orders/create",
    Icon: ListOrderedIcon,
    text: "ثبت سفارش",
  },
  {
    href: "/user-dashboard/orders/update/",
    Icon: Update,
    text: "تغییر سفارش",
  },
];
