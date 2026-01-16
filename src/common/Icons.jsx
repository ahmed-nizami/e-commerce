import MenuImg from "../assets/icons/menu.png";
import LikeImg from "../assets/icons/like.png";
import ProfileImg from "../assets/icons/profile.png";
import BegImg from "../assets/icons/beg.png";

export const MenuIcon = ({ className }) => {
  return <img src={MenuImg} className={className} alt="menu-icon" />;
};

export const LikeIcon = ({ className }) => {
  return <img src={LikeImg} className={className} alt="like-icon" />;
};

export const ProfileIcon = ({ className }) => {
  return <img src={ProfileImg} className={className} alt="Profile-icon" />;
};

export const BegIcon = ({ className }) => {
  return <img src={BegImg} className={className} alt="Beg-icon" />;
};
