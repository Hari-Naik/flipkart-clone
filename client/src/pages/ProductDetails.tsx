import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { productType } from "../Types";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addToCart } from "../features/cart/cartSlice";
import { addToWishlist, removeFromWishlist } from "../features/wishlistSlice";

import ProductInfo from "../components/ProductDetails/ProductInfo";
import Cookies from "js-cookie";
import { setLoginModal } from "../features/login/loginSlice";

import { successToast } from "../libs/utils";
import ProductImage from "../components/ProductDetails/ProductImage";
import ProductDetailsSkelton from "../components/Loading/ProductDetailsSkelton";
import Head from "../components/Head/Head";

const ProductDetails = () => {
  const [product, setProduct] = useState<productType | any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [activeImg, setActiveImg] = useState("");
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  const wishlist = useAppSelector(state => state.wishlist.wishlist);

  const { id } = useParams();
  const token = Cookies.get("token");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      if (response.ok) {
        const data = await response.json();
        setProduct(data);
        setActiveImg(data.images[0]);
        const isFav = wishlist.find(item => item.id === data.id);
        setIsFavourite(!!isFav);
      } else {
        console.error("Failed to fetch product:", response);
      }
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

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
    return <ProductDetailsSkelton />;
  }

  return (
    <section className="w-[95%] h-full md:w-[98%] lg:w-[90%] flex flex-col md:flex-row  gap-4 bg-white p-3 mx-auto mt-4">
      <Head title={product?.title} description={product?.description} />
      <ProductImage
        images={product?.images}
        title={product?.title}
        activeImg={activeImg}
        isFavourite={isFavourite}
        setActiveImg={setActiveImg}
        addProductToCart={addProductToCart}
        addProductToWishlist={addProductToWishlist}
      />
      <ProductInfo product={product} />
    </section>
  );
};

export default ProductDetails;
