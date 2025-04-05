import { useState } from "react";
import CommonForm from "../common/form";
import { DialogContent } from "../ui/dialog";
import { Label } from "../ui/label";
// import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllOrdersForAdmin,
  getOrderDetailsForAdmin,
  updateOrderStatus,
} from "@/store/admin/order-slice";
import { useToast } from "../ui/use-toast";

const initialFormData = {
  status: "",
};

function AdminOrderDetailsView({ orderDetails }) {
  const [formData, setFormData] = useState(initialFormData);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { toast } = useToast();

  console.log(orderDetails, "orderDetailsorderDetails");

  function handleUpdateStatus(event) {
    event.preventDefault();
    const { status } = formData;

    dispatch(
      updateOrderStatus({ id: orderDetails?._id, orderStatus: status })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(getOrderDetailsForAdmin(orderDetails?._id));
        dispatch(getAllOrdersForAdmin());
        setFormData(initialFormData);
        toast({
          title: data?.payload?.message,
        });
      }
    });
  }

  return (
    <DialogContent className="sm:max-w-[700px] h-screen overflow-y-auto p-6">
  <div className="space-y-6">
    {/* Order Summary */}
    <div className="bg-white rounded-xl shadow p-4 space-y-3 border">
      <h2 className="text-2xl font-semibold text-gray-800">Order Summary</h2>
      <div className="grid gap-2">
        <div className="flex items-center justify-between">
          <p className="text-base font-medium text-gray-600">Order ID</p>
          <Label>{orderDetails?._id}</Label>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-base font-medium text-gray-600">Order Date</p>
          <Label>{orderDetails?.orderDate?.split("T")[0]}</Label>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-base font-medium text-gray-600">Total Price</p>
          <Label>${orderDetails?.totalAmount}</Label>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-base font-medium text-gray-600">Payment Method</p>
          <Label>{orderDetails?.paymentMethod}</Label>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-base font-medium text-gray-600">Payment Status</p>
          <Label>{orderDetails?.paymentStatus}</Label>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-base font-medium text-gray-600">Order Status</p>
          <Badge
            className={`py-1 px-3 capitalize text-white ${
              orderDetails?.orderStatus === "confirmed"
                ? "bg-green-500"
                : orderDetails?.orderStatus === "rejected"
                ? "bg-red-600"
                : "bg-gray-700"
            }`}
          >
            {orderDetails?.orderStatus}
          </Badge>
        </div>
      </div>
    </div>

    {/* Order Items */}
    <div className="bg-white rounded-xl shadow p-4 border">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Order Items</h2>
      <ul className="divide-y">
        {orderDetails?.cartItems?.length > 0 ? (
          orderDetails.cartItems.map((item, index) => (
            <li key={index} className="py-2 flex justify-between text-base w-full">
              <div className="text-gray-700 w-[250px]">📦 {item.title}</div>
              <div className="text-gray-500">Qty: {item.quantity}</div>
              <div className="text-gray-800 font-semibold">${item.price}</div>
            </li>
          ))
        ) : (
          <p className="text-base text-gray-500">No items in cart.</p>
        )}
      </ul>
    </div>

    {/* Shipping Info */}
    <div className="bg-white rounded-xl shadow p-4 border">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Shipping Info</h2>
      <div className="text-base text-gray-700 space-y-0.5">
        <p>{user?.userName.toUpperCase()}</p>
        <p>{orderDetails?.addressInfo?.address}</p>
        <p>{orderDetails?.addressInfo?.city}</p>
        <p>{orderDetails?.addressInfo?.pincode}</p>
        <p>{orderDetails?.addressInfo?.phone}</p>
        {orderDetails?.addressInfo?.notes && (
          <p className="italic text-gray-500">Note: {orderDetails.addressInfo.notes}</p>
        )}
      </div>
    </div>

    {/* Order Status Update Form */}
    <div className="bg-white rounded-xl shadow p-4 border">
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">Update Order Status</h2>
      <CommonForm
        formControls={[
          {
            label: "Order Status",
            name: "status",
            componentType: "select",
            options: [
              { id: "pending", label: "Pending" },
              { id: "inProcess", label: "In Process" },
              { id: "inShipping", label: "Shipping" },
              { id: "delivered", label: "Delivered" },
              { id: "rejected", label: "Rejected" },
            ],
          },
        ]}
        formData={formData}
        setFormData={setFormData}
        buttonText={"Update Order Status"}
        onSubmit={handleUpdateStatus}
      />
    </div>
  </div>
</DialogContent>

  );
}

export default AdminOrderDetailsView;
