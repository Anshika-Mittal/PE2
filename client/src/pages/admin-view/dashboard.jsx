// import ProductImageUpload from "@/components/admin-view/image-upload";
// import { Button } from "@/components/ui/button";
// import { addFeatureImage, getFeatureImages } from "@/store/common-slice";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// function AdminDashboard() {
//   const [imageFile, setImageFile] = useState(null);
//   const [uploadedImageUrl, setUploadedImageUrl] = useState("");
//   const [imageLoadingState, setImageLoadingState] = useState(false);
//   const dispatch = useDispatch();
//   const { featureImageList } = useSelector((state) => state.commonFeature);

//   console.log(uploadedImageUrl, "uploadedImageUrl");

//   function handleUploadFeatureImage() {
//     dispatch(addFeatureImage(uploadedImageUrl)).then((data) => {
//       if (data?.payload?.success) {
//         dispatch(getFeatureImages());
//         setImageFile(null);
//         setUploadedImageUrl("");
//       }
//     });
//   }

//   useEffect(() => {
//     dispatch(getFeatureImages());
//   }, [dispatch]);

//   console.log(featureImageList, "featureImageList");

//   return (
//     <div>
//       {/* <ProductImageUpload
//         imageFile={imageFile}
//         setImageFile={setImageFile}
//         uploadedImageUrl={uploadedImageUrl}
//         setUploadedImageUrl={setUploadedImageUrl}
//         setImageLoadingState={setImageLoadingState}
//         imageLoadingState={imageLoadingState}
//         isCustomStyling={true}
//         // isEditMode={currentEditedId !== null}
//       /> */}
//       {/* <Button onClick={handleUploadFeatureImage} className="mt-5 w-full">
//         Upload
//       </Button> */}
//     </div>
//   );
// }

// export default AdminDashboard;

import { Card, CardContent } from "@/components/ui/card";
// import { ScrollArea } from "@/components/ui/scroll-area";
import { BellIcon, PackageIcon, BarChart2Icon, UsersIcon, ShoppingCartIcon } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-10 animate-fade-in">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Admin Dashboard</h1>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <StatCard icon={<PackageIcon size={24} />} label="Total Products" value="50" color="from-purple-400 to-purple-600" />
        <StatCard icon={<ShoppingCartIcon size={24} />} label="Total Orders" value="5" color="from-blue-400 to-blue-600" />
        <StatCard icon={<UsersIcon size={24} />} label="Registered Users" value="5" color="from-green-400 to-green-600" />
        <StatCard icon={<BarChart2Icon size={24} />} label="Monthly Revenue" value="Rs. 2L" color="from-yellow-400 to-yellow-600" />
      </div>

      {/* Quick Navigation */}
      <div>
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Quick Navigation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <QuickLinkCard title="Manage Products" desc="Add, edit or remove products" />
          <QuickLinkCard title="View Orders" desc="Check order status & delivery" />
          <QuickLinkCard title="User Management" desc="View & manage user details" />
        </div>
      </div>

      {/* Recent Orders */}
      <div>
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Recently fulfilled Orders</h2>
        <Card className="overflow-hidden shadow-md transition hover:shadow-xl">
          <ul className="divide-y">
            {["67f161b214aba08704e8ba68", "67f13e2c9313d8cc0ed2d836", "67f161b214aba08704e8ba6b"].map((order, i) => (
              <li key={i} className="flex justify-between px-6 py-4 text-base text-gray-700">
                <span className="font-medium">Order ID</span>
                <span className="font-medium">{order} </span>
                <span className="text-green-600 font-semibold">Delivered</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Low Stock Alerts */}
      <div>
        <h2 className="text-2xl font-bold text-gray-700 mb-4 flex items-center gap-2">
          <BellIcon size={22} className="text-red-500" /> Low Stock Alerts
        </h2>
        <Card className="shadow-md">
          <CardContent className="p-6 space-y-3 text-base text-red-700">
            <p>⚠️ Oximeter (4 left)</p>
            <p>⚠️ Thermometer (2 left)</p>
            <p>⚠️ Glucose Monitor (3 left)</p>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}


// Reusable Stat Card
function StatCard({ icon, label, value, color }) {
  return (
    <div className={`rounded-xl bg-gradient-to-r ${color} text-white p-5 shadow-md hover:scale-105 transition-transform duration-300`}>
      <div className="flex items-center gap-3 mb-2">
        {icon}
        <p className="text-lg font-medium">{label}</p>
      </div>
      <h2 className="text-3xl font-bold">{value}</h2>
    </div>
  );
}


// Reusable Quick Link Card
function QuickLinkCard({ title, desc }) {
  return (
    <Card className="hover:scale-105 transition-transform duration-300 cursor-pointer shadow-md hover:shadow-lg">
      <CardContent className="p-5">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{desc}</p>
      </CardContent>
    </Card>
  );
}


