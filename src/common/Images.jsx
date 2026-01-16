import LogoImg from "../assets/images/logo.png";
import Product01 from "../assets/images/products/p-01.png";
import Product02 from "../assets/images/products/p-02.png";

export const Logo = ({ className }) => {
  return <img src={LogoImg} className={className} alt="logo" />;
};

export const Product01Img = ({ className }) => {
  return <img src={Product01} className={className} alt="logo" />;
};

export const Product02Img = ({ className }) => {
  return <img src={Product02} className={className} alt="logo" />;
};
