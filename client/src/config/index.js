export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "homehealth", label: "Home Healthcare"},
      { id: "mobility", label: "Rehabilitation & Mobility"},
      { id: "ppe", label: "PPE & Hygiene"},
      { id: "diagnostic", label: "Diagnostic Devices" },
      { id: "patient", label: "Patient Care"},
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "philips", label: "Philips Healthcare" },
  { id: "omron", label: "Omron" },
  { id: "medtronic", label: "Medtronic" },
  { id: "gehealthcare", label: "GE Healthcare" },
  { id: "siemens", label: "Siemens Healthineers" },
  { id: "bplmedical", label: "BPL Medical" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "homehealth",
    label: "Home Healthcare",
    path: "/shop/listing",
  },
  {
    id: "mobility",
    label: "Rehabilitation & Mobility",
    path: "/shop/listing",
  },
  {
    id: "ppe",
    label: "PPE",
    path: "/shop/listing",
  },
  {
    id: "diagnostic",
    label: "Diagnostic",
    path: "/shop/listing",
  },
  {
    id: "patient",
    label: "Patient Care",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  homehealth: "Home Healthcare",
  mobility: "Rehabilitation & Mobility",
  ppe: "PPE & Hygiene",
  diagnostic: "Diagnostic Devices",
  patient: "Patient Care",
};

export const brandOptionsMap = {
  philips: "Philips Healthcare",
  omron: "Omron",
  medtronic: "Medtronic",
  gehealthcare: "GE Healthcare",
  siemens: "Siemens Healthineers",
  bplmedical: "BPL Medical"
};

export const filterOptions = {
  category: [
    { id: "homehealth", label: "Home Healthcare" },
    { id: "mobility", label: "Rehabilitation & Mobility" },
    { id: "ppe", label: "PPE & Hygiene" },
    { id: "diagnostic", label: "Diagnostic Devices" },
    { id: "patient", label: "Patient Care" },
  ],
  brand: [
    { id: "philips", label: "Philips Healthcare" },
    { id: "omron", label: "Omron" },
    { id: "medtronic", label: "Medtronic" },
    { id: "gehealthcare", label: "GE Healthcare" },
    { id: "siemens", label: "Siemens Healthineers" },
    { id: "bplmedical", label: "BPL Medical" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
