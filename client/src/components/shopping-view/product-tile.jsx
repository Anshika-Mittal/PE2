import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { brandOptionsMap, categoryOptionsMap } from "@/config";
import { Badge } from "../ui/badge";

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
import p15 from "../../assets/featured/p15.jpg";
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


function ShoppingProductTile({
  product,
  handleGetProductDetails,
  handleAddtoCart,
}) {
  return (
    <Card className="w-full max-w-sm mx-auto">
      <div onClick={() => handleGetProductDetails(product?._id)}>
        <div className="relative">
          <img
            src={productImages[product?.image]}

            alt={product?.title}
            className="w-full h-[300px] object-cover rounded-t-lg"
          />
          {product?.totalStock === 0 ? (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              Out Of Stock
            </Badge>
          ) : product?.totalStock < 10 ? (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              {`Only ${product?.totalStock} items left`}
            </Badge>
          ) : product?.salePrice > 0 ? (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              Sale
            </Badge>
          ) : null}
        </div>
        <CardContent className="p-4">
          <h2 className="text-xl h-[45px] mb-2 tracking-tighter ">{product?.title}</h2>
          <div className="flex justify-between items-center h-[44px] mt-2">
            <span className="text-[15px] text-muted-foreground">
              {categoryOptionsMap[product?.category]}
            </span>
            <span className="text-[15px] text-muted-foreground">
              {brandOptionsMap[product?.brand]}
            </span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span
              className={`${
                product?.salePrice > 0 ? "line-through" : ""
              } text-lg font-semibold text-primary`}
            >
              Rs. {product?.price}
            </span>
            {product?.salePrice > 0 ? (
              <span className="text-lg font-semibold text-primary">
                Rs. {product?.salePrice}
              </span>
            ) : null}
          </div>
        </CardContent>
      </div>
      <CardFooter>
        {product?.totalStock === 0 ? (
          <Button className="w-full opacity-60 cursor-not-allowed">
            Out Of Stock
          </Button>
        ) : (
          <Button
            onClick={() => handleAddtoCart(product?._id, product?.totalStock)}
            className="w-full"
          >
            Add to cart
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default ShoppingProductTile;
