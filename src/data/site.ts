import type { Dish, MenuFilter, NavigationItem, VisitDetail } from "../types/site";

export const navigationItems: NavigationItem[] = [
  { label: "本季菜单", href: "#menu" },
  { label: "山野故事", href: "#story" },
  { label: "空间", href: "#space" },
  { label: "到店", href: "#visit" },
];

export const menuFilters: MenuFilter[] = [
  { label: "全部", value: "all" },
  { label: "前菜", value: "starter" },
  { label: "热菜", value: "main" },
  { label: "甜品", value: "dessert" },
];

export const dishes: Dish[] = [
  {
    id: "matsutake-soup",
    category: "main",
    categoryLabel: "汤 · SOUP",
    order: "01",
    name: "松茸菌香鸡汤",
    description: "云南香格里拉松茸 · 散养土鸡 · 山泉水慢炖四小时",
    price: 128,
    image: "/assets/mushroom-soup.jpg",
    alt: "热气腾腾的菌菇汤",
    featured: true,
  },
  {
    id: "sansho-okra",
    category: "starter",
    categoryLabel: "前菜 · STARTER",
    order: "02",
    name: "山椒拌秋葵",
    description: "鲜山椒 · 秋葵 · 发酵豆酱",
    price: 48,
    image: "/assets/okra.jpg",
    alt: "清爽的时令蔬菜沙拉",
  },
  {
    id: "porcini-rice",
    category: "main",
    categoryLabel: "主食 · MAIN",
    order: "03",
    name: "牛肝菌炊饭",
    description: "鲜牛肝菌 · 五常米 · 自制腊味",
    price: 88,
    image: "/assets/rice.jpg",
    alt: "鲜香浓郁的炒饭",
  },
  {
    id: "chili-wontons",
    category: "starter",
    categoryLabel: "前菜 · STARTER",
    order: "04",
    name: "红油手工抄手",
    description: "手工鲜肉馅 · 汉源花椒 · 秘制红油",
    price: 58,
    image: "/assets/wontons.jpg",
    alt: "精致的手工水饺",
  },
  {
    id: "charred-pork-chop",
    category: "main",
    categoryLabel: "热菜 · MAIN",
    order: "05",
    name: "炭烤战斧猪排",
    description: "黑猪战斧 · 山野香料 · 炭火慢烤",
    price: 168,
    image: "/assets/pork.jpg",
    alt: "炭火慢烤的肉类料理",
  },
  {
    id: "osmanthus-mousse",
    category: "dessert",
    categoryLabel: "甜品 · DESSERT",
    order: "06",
    name: "桂花米酿慕斯",
    description: "金桂 · 糯米酒酿 · 柠檬奶油",
    price: 42,
    image: "/assets/dessert.jpg",
    alt: "细腻的奶油甜品",
  },
];

export const reservationTimes = [
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:30",
];

export const guestOptions = ["1 位", "2 位", "3 位", "4 位", "5 位", "6 位", "8 位"];

export const visitDetails: VisitDetail[] = [
  {
    label: "地址",
    lines: ["河南省濮阳市", "渠村集"],
    link: { label: "查看地图", href: "https://maps.amap.com/" },
  },
  {
    label: "营业时间",
    lines: ["周一至周日", "午餐 11:30—14:30", "晚餐 17:30—22:00"],
  },
  {
    label: "联系",
    lines: [],
    contacts: [
      { label: "028-8556 1226", href: "tel:02885561226" },
      { label: "hello@shanye.cn", href: "mailto:hello@shanye.cn" },
    ],
  },
];
