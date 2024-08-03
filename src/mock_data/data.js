import { SlHandbag } from "react-icons/sl";
import { GiProfit } from "react-icons/gi";
import { Target, Utensils, Book } from "lucide-react";

export const activityData = [
  { day: "8", value: 8000 },
  { day: "9", value: 3000 },
  { day: "10", value: 4000 },
  { day: "11", value: 3000 },
  { day: "12", value: 4000 },
  { day: "13", value: 2000 },
  { day: "14", value: 4000 },
  { day: "15", value: 3000 },
  { day: "16", value: 4000 },
  { day: "17", value: 5000 },
  { day: "18", value: 6000 },
  { day: "19", value: 8000 },
  { day: "20", value: 12000 },
  { day: "21", value: 10000 },
  { day: "22", value: 8000 },
  { day: "23", value: 4000 },
  { day: "24", value: 3000 },
  { day: "25", value: 8000 },
  { day: "26", value: 6000 },
  { day: "27", value: 4000 },
];

export const recentOrders = [
  {
    customer: "Wade Waan",
    orderNo: "15478256",
    amount: "$124.00",
    status: "Delivered",
  },
  {
    customer: "Jane Cooper",
    orderNo: "48965786",
    amount: "$365.02",
    status: "Delivered",
  },
  {
    customer: "Guy Hawkins",
    orderNo: "78958215",
    amount: "$45.88",
    status: "Cancelled",
  },
  {
    customer: "Kristin Watson",
    orderNo: "20965732",
    amount: "$85.00",
    status: "Pending",
  },
  {
    customer: "Cody Fisher",
    orderNo: "95715620",
    amount: "$545.00",
    status: "Delivered",
  },
  {
    customer: "Savannah Nguyen",
    orderNo: "78514568",
    amount: "$128.20",
    status: "Delivered",
  },
];

export const customerFeedback = [
  {
    name: "Jenny Wilson",
    rating: 4,
    comment:
      "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
  },
  {
    name: "Dianne Russell",
    rating: 5,
    comment:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
  },
  {
    name: "Devon Lane",
    rating: 5,
    comment:
      "Normally wings are not meaty and tender, and they are lean meaty and tender. and super delicious. Best wings ever! Highly recommend.",
  },
];

export const orderInfo = [
  {
    title: "Total Orders",
    value: "75",
    change: 3,
    icon: SlHandbag,
    color: "blue",
    bg: "gray",
  },
  {
    title: "Total Delivered",
    value: "70",
    change: -3,
    icon: SlHandbag,
    color: "green",
    bg: "gray",
  },
  {
    title: "Total Cancelled",
    value: "05",
    change: 3,
    icon: SlHandbag,
    color: "red",
    bg: "gray",
  },
  {
    title: "Total Revenue",
    value: "$12k",
    change: -3,
    icon: GiProfit,
    color: "purple",
    bg: "gray",
  },
];
export const restroFeatureAndFuture = [
  { title: "Goals", icon: Target, color: "red" },
  { title: "Popular Dishes", icon: Utensils, color: "purple" },
  { title: "Menus", icon: Book, color: "teal" },
];
