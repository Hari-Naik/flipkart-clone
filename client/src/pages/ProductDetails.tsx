import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { productType } from "../Types";
import { Favorite, ShoppingCart } from "@mui/icons-material";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addToCart } from "../features/cart/cartSlice";
import { addToWishlist, removeFromWishlist } from "../features/wishlistSlice";

import CustomButton from "../components/ProductDetails/CustomButton";
import ProductInfo from "../components/ProductDetails/ProductInfo";
import Cookies from "js-cookie";
import { setLoginModal } from "../features/login/loginSlice";
import { ToastContainer } from "react-toastify";

import { successToast } from "../libs/utils";

const ProductDetails = () => {
  const [product, setProduct] = useState<productType | any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [activeImg, setActiveImg] = useState("");
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  const wishlist = useAppSelector(state => state.wishlist.wishlist);

  const { id } = useParams();
  const token = Cookies.get("token");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);

      const response = await fetch(`https://dummyjson.com/products/${id}`);
      if (response.ok) {
        const data = await response.json();
        setProduct(data);
        setActiveImg(data.images[0]);
        const isFav = wishlist.filter(item => item.id === data.id);
        if (isFav.length > 0) {
          setIsFavourite(true);
        }
      } else {
        console.log(response);
      }

      setLoading(false);
    };
    fetchProduct();
  }, [id]);

  const addProductToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    navigate("/cart");
  };

  const addProductToWishlist = () => {
    if (token) {
      if (isFavourite) {
        dispatch(removeFromWishlist(product.id));
        setIsFavourite(false);
        successToast("Removed from your Wishlist");
      } else {
        dispatch(addToWishlist(product));
        setIsFavourite(true);
        successToast("Added to your Wishlist");
      }
    } else {
      dispatch(setLoginModal(true));
    }
  };

  if (loading) {
    return (
      <div className="w-[90%] h-[calc(100vh-93px)] sm:h-[calc(100vh-52px)] mx-auto my-4 bg-white animate-pulse overflow-hidden shadow-md"></div>
    );
  }

  return (
    <section className="w-[95%] h-full md:w-[98%] lg:w-[90%] flex flex-col md:flex-row  gap-4 bg-white p-3 mx-auto mt-4">
      <div className="w-full h-max md:w-[50%] lg:w-[35%] flex flex-col items-center">
        <div className="h-[370px] w-full lg:h-[470px] flex shadow-sm">
          <div className="flex flex-col m-3 gap-2">
            {product &&
              product.images.map((imgUrl: string) => {
                return (
                  <img
                    key={imgUrl}
                    src={imgUrl}
                    alt=""
                    onClick={() => setActiveImg(imgUrl)}
                    className={`w-10 h-10 sm:w-14 md:h-14 border-[2px] ${
                      activeImg === imgUrl
                        ? "border-[#2874f0]"
                        : "border-gray-300"
                    } cursor-pointer`}
                  />
                );
              })}
          </div>

          <img
            className="w-[80%] h-[95%] object-center mt-3"
            src={activeImg}
            alt={product?.title}
          />
        </div>

        <div className="w-full flex items-center mt-2 gap-2">
          <CustomButton
            text="Add to cart"
            icon={ShoppingCart}
            onClick={addProductToCart}
          />
          <CustomButton
            text="Wishlist"
            icon={Favorite}
            color={isFavourite ? `#ff5555` : `#c8c8c8`}
            onClick={addProductToWishlist}
          />
        </div>
      </div>
      <ProductInfo product={product} />
      <ToastContainer />
    </section>
  );
};

export default ProductDetails;
