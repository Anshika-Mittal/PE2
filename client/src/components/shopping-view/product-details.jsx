import { StarIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { useToast } from "../ui/use-toast";
import { setProductDetails } from "@/store/shop/products-slice";
import { Label } from "../ui/label";
import StarRatingComponent from "../common/star-rating";
import { useEffect, useState } from "react";
import { addReview, getReviews } from "@/store/shop/review-slice";

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




function ProductDetailsDialog({ open, setOpen, productDetails }) {
  const [reviewMsg, setReviewMsg] = useState("");
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.shopCart);
  const { reviews } = useSelector((state) => state.shopReview);

  const { toast } = useToast();

  function handleRatingChange(getRating) {
    console.log(getRating, "getRating");

    setRating(getRating);
  }

  function handleAddToCart(getCurrentProductId, getTotalStock) {
    let getCartItems = cartItems.items || [];

    if (getCartItems.length) {
      const indexOfCurrentItem = getCartItems.findIndex(
        (item) => item.productId === getCurrentProductId
      );
      if (indexOfCurrentItem > -1) {
        const getQuantity = getCartItems[indexOfCurrentItem].quantity;
        if (getQuantity + 1 > getTotalStock) {
          toast({
            title: `Only ${getQuantity} quantity can be added for this item`,
            variant: "destructive",
          });

          return;
        }
      }
    }
    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: "Product is added to cart",
        });
      }
    });
  }

  function handleDialogClose() {
    setOpen(false);
    dispatch(setProductDetails());
    setRating(0);
    setReviewMsg("");
  }

  function handleAddReview() {
    dispatch(
      addReview({
        productId: productDetails?._id,
        userId: user?.id,
        userName: user?.userName,
        reviewMessage: reviewMsg,
        reviewValue: rating,
      })
    ).then((data) => {
      if (data.payload.success) {
        setRating(0);
        setReviewMsg("");
        dispatch(getReviews(productDetails?._id));
        toast({
          title: "Review added successfully!",
        });
      }
    });
  }

  useEffect(() => {
    if (productDetails !== null) dispatch(getReviews(productDetails?._id));
  }, [productDetails]);

  console.log(reviews, "reviews");

  const averageReview = 3;
  // const averageReview =
  //   reviews && reviews.length > 0
  //     ? reviews.reduce((sum, reviewItem) => sum + reviewItem.reviewValue, 0) /
  //       reviews.length
  //     : 0;

  return (
    <Dialog open={open} onOpenChange={handleDialogClose}>
      <DialogContent className="grid grid-cols-2 gap-8 sm:p-12 max-w-[90vw] sm:max-w-[80vw] lg:max-w-[70vw]">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={productImages[productDetails?.image]}
            alt={productDetails?.title}
            width={600}
            height={600}
            className="aspect-square w-full object-cover"
          />
        </div>
        <div className="">
          <div>
            <h1 className="text-3xl font-extrabold">{productDetails?.title}</h1>
            <p className="text-muted-foreground text-2xl mb-5 mt-4">
              {productDetails?.description}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p
              className={`text-3xl font-bold text-primary ${
                productDetails?.salePrice > 0 ? "line-through" : ""
              }`}
            >
              Rs. {productDetails?.price}
            </p>
            {productDetails?.salePrice > 0 ? (
              <p className="text-2xl font-bold text-muted-foreground">
                Rs. {productDetails?.salePrice}
              </p>
            ) : null}
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center gap-0.5">
              <StarRatingComponent rating={averageReview} />
            </div>
            <span className="text-muted-foreground">
              ({averageReview.toFixed(2)})
            </span>
          </div>
          <div className="mt-5 mb-5">
            {productDetails?.totalStock === 0 ? (
              <Button className="w-full opacity-60 cursor-not-allowed">
                Out of Stock
              </Button>
            ) : (
              <Button
                className="w-full"
                onClick={() =>
                  handleAddToCart(
                    productDetails?._id,
                    productDetails?.totalStock
                  )
                }
              >
                Add to Cart
              </Button>
            )}
          </div>
          <Separator />
          <div className="max-h-[300px] overflow-auto">
            <h2 className="text-xl font-bold mb-4">Reviews</h2>
            <div className="grid gap-6">
              {reviews && reviews.length > 0 ? (
                reviews.map((reviewItem) => (
                  <div className="flex gap-4">
                    <Avatar className="w-10 h-10 border">
                      <AvatarFallback>
                        {reviewItem?.userName[0].toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold">{reviewItem?.userName}</h3>
                      </div>
                      <div className="flex items-center gap-0.5">
                        <StarRatingComponent rating={reviewItem?.reviewValue} />
                      </div>
                      <p className="text-muted-foreground">
                        {reviewItem.reviewMessage}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <h1>No Reviews</h1>
              )}
            </div>
            <div className="mt-10 flex-col flex gap-2">
              <Label>Write a review</Label>
              <div className="flex gap-1">
                <StarRatingComponent
                  rating={rating}
                  handleRatingChange={handleRatingChange}
                />
              </div>
              <Input
                name="reviewMsg"
                value={reviewMsg}
                onChange={(event) => setReviewMsg(event.target.value)}
                placeholder="Write a review..."
              />
              <Button
                onClick={handleAddReview}
                disabled={reviewMsg.trim() === ""}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ProductDetailsDialog;
