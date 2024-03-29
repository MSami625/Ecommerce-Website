import React, { useContext } from "react";
import "./css/Shop_Category.css";
import { ShopContext } from "../Context/ShopContext";

import dropdown_icon from "../Components/Assets/imagesscr.png";
import banner from "../Components/Assets/banner.png";

import Item from "../Components/Items/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  // console.log(props)

  return (
    <div className="shop_category">
      <img height={480} src={banner} alt="" />
      <div className="shopcategory-indexSort">
        <img height={20} src={dropdown_icon} alt="" />
      </div>

      <div className="shopcategory_products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
