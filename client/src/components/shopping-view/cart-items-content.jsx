import { Minus, Plus, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem, updateCartQuantity } from "@/store/shop/cart-slice";
import { useToast } from "../ui/use-toast";



import p1 from "../../assets/featured/p1.jpg";
import p2 from "../../assets/featured/p2.jpg";
import p3 from "../../assets/featured/p3.jpg";
import p4 from "../../assets/featured/p4.jpg";
import p5 from "../../assets/featured/p5.jpg";
import p6 from "../../assets/featured/p6.jpg";
import p7 from "../../assets/featured/p7.jpg";
import p8 from "../../assets/featured/p8.jpg";
import p9 from "../../assets/featured/p9.jpg";
import p10 from "../../assets/featured/p10.jpg";
import p11 from "../../assets/featured/p11.jpg";
import p12 from "../../assets/featured/p12.jpg";
import p13 from "../../assets/featured/p13.jpg";
import p14 from "../../assets/featured/p14.jpg";
import p15 from "../../assets/featured/p15.jpeg";
import p16 from "../../assets/featured/p16.jpg";
import p17 from "../../assets/featured/p17.jpg";
import p18 from "../../assets/featured/p18.jpg";
import p19 from "../../assets/featured/p19.jpg";
import p20 from "../../assets/featured/p20.jpg";
import p21 from "../../assets/featured/p21.jpg";
import p22 from "../../assets/featured/p22.jpg";
import p23 from "../../assets/featured/p23.jpg";
import p24 from "../../assets/featured/p24.jpg";
import p25 from "../../assets/featured/p25.jpg";
import p26 from "../../assets/featured/p26.jpg";
import p27 from "../../assets/featured/p27.jpg";
import p28 from "../../assets/featured/p28.jpg";
import p29 from "../../assets/featured/p29.jpg";
import p30 from "../../assets/featured/p30.jpg";
import p31 from "../../assets/featured/p31.jpg";
import p32 from "../../assets/featured/p32.jpg";
import p33 from "../../assets/featured/p33.jpg";
import p34 from "../../assets/featured/p34.jpg";
import p35 from "../../assets/featured/p35.jpg";
import p36 from "../../assets/featured/p36.jpg";
import p37 from "../../assets/featured/p37.jpg";
import p38 from "../../assets/featured/p38.jpg";
import p39 from "../../assets/featured/p39.jpg";
import p40 from "../../assets/featured/p40.jpg";
import p41 from "../../assets/featured/p41.jpg";
import p42 from "../../assets/featured/p42.jpg";
import p43 from "../../assets/featured/p43.jpg";
import p44 from "../../assets/featured/p44.jpg";
import p45 from "../../assets/featured/p45.jpg";
import p46 from "../../assets/featured/p46.jpg";
import p47 from "../../assets/featured/p47.jpg";
import p48 from "../../assets/featured/p48.jpg";
import p49 from "../../assets/featured/p49.jpg";
import p50 from "../../assets/featured/p50.jpg";

const productImages = {
  "p1": p1, "p2": p2, "p3": p3, "p4": p4, "p5": p5,
  "p6": p6, "p7": p7, "p8": p8, "p9": p9, "p10": p10,
  "p11": p11, "p12": p12, "p13": p13, "p14": p14, "p15": p15,
  "p16": p16, "p17": p17, "p18": p18, "p19": p19, "p20": p20,
  "p21": p21, "p22": p22, "p23": p23, "p24": p24, "p25": p25,
  "p26": p26, "p27": p27, "p28": p28, "p29": p29, "p30": p30,
  "p31": p31, "p32": p32, "p33": p33, "p34": p34, "p35": p35,
  "p36": p36, "p37": p37, "p38": p38, "p39": p39, "p40": p40,
  "p41": p41, "p42": p42, "p43": p43, "p44": p44, "p45": p45,
  "p46": p46, "p47": p47, "p48": p48, "p49": p49, "p50": p50
};


function UserCartItemsContent({ cartItem }) {
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.shopCart);
  const { productList } = useSelector((state) => state.shopProducts);
  const dispatch = useDispatch();
  const { toast } = useToast();

  function handleUpdateQuantity(getCartItem, typeOfAction) {
    if (typeOfAction == "plus") {
      let getCartItems = cartItems.items || [];

      if (getCartItems.length) {
        const indexOfCurrentCartItem = getCartItems.findIndex(
          (item) => item.productId === getCartItem?.productId
        );

        const getCurrentProductIndex = productList.findIndex(
          (product) => product._id === getCartItem?.productId
        );
        const getTotalStock = productList[getCurrentProductIndex].totalStock;

        console.log(getCurrentProductIndex, getTotalStock, "getTotalStock");

        if (indexOfCurrentCartItem > -1) {
          const getQuantity = getCartItems[indexOfCurrentCartItem].quantity;
          if (getQuantity + 1 > getTotalStock) {
            toast({
              title: `Only ${getQuantity} quantity can be added for this item`,
              variant: "destructive",
            });

            return;
          }
        }
      }
    }

    dispatch(
      updateCartQuantity({
        userId: user?.id,
        productId: getCartItem?.productId,
        quantity:
          typeOfAction === "plus"
            ? getCartItem?.quantity + 1
            : getCartItem?.quantity - 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: "Cart item is updated successfully",
        });
      }
    });
  }

  function handleCartItemDelete(getCartItem) {
    dispatch(
      deleteCartItem({ userId: user?.id, productId: getCartItem?.productId })
    ).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: "Cart item is deleted successfully",
        });
      }
    });
  }

  return (
    <div className="flex items-center space-x-4">
      <img
        src={productImages[cartItem?.image]}
        alt={cartItem?.title}
        className="w-20 h-20 rounded object-cover"
      />
      <div className="flex-1">
        <h3 className="font-extrabold">{cartItem?.title}</h3>
        <div className="flex items-center gap-2 mt-1">
          <Button
            variant="outline"
            className="h-8 w-8 rounded-full"
            size="icon"
            disabled={cartItem?.quantity === 1}
            onClick={() => handleUpdateQuantity(cartItem, "minus")}
          >
            <Minus className="w-4 h-4" />
            <span className="sr-only">Decrease</span>
          </Button>
          <span className="font-semibold">{cartItem?.quantity}</span>
          <Button
            variant="outline"
            className="h-8 w-8 rounded-full"
            size="icon"
            onClick={() => handleUpdateQuantity(cartItem, "plus")}
          >
            <Plus className="w-4 h-4" />
            <span className="sr-only">Decrease</span>
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <p className="font-semibold">
          Rs. 
          {(
            (cartItem?.salePrice > 0 ? cartItem?.salePrice : cartItem?.price) *
            cartItem?.quantity
          ).toFixed(2)}
        </p>
        <Trash
          onClick={() => handleCartItemDelete(cartItem)}
          className="cursor-pointer mt-1"
          size={20}
        />
      </div>
    </div>
  );
}

export default UserCartItemsContent;
