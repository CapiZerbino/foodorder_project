import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Box from "@mui/material/Box";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ProductItemSale from './../product/ProductItemSale';


function genRandomNumber(how_many_number,min,max) {

    // parameters
    // how_many_number : how many numbers you want to generate. For example it is 5.
    // min(inclusive) : minimum/low value of a range. it must be any positive integer but less than max. i.e 4
    // max(inclusive) : maximun value of a range. it must be any positive integer. i.e 50
    // return type: array

    var random_number = [];
    for (var i = 0; i < how_many_number; i++) {
        var gen_num = parseInt((Math.random() * (max-min+1)) + min);
        do {
            var is_exist = random_number.indexOf(gen_num);
            if (is_exist >= 0) {
                gen_num = parseInt((Math.random() * (max-min+1)) + min);
            }
            else {
                random_number.push(gen_num);
                is_exist = -2;
            }
        }
        while (is_exist > -1);
    }
    return random_number;
}

function ProductSlick(props) {
    const {products} = props;
    const random = genRandomNumber(10, 0, products.length)
    const product_sale = products.filter((item) => {
        return random.includes(item.id)
    });
    var settings = {
        dots: true,
      infinite: true,
      speed: 500,
      centerMode: true,
      slidesToShow: 4,
      slidesToScroll: 3,
      lazyLoad: true,
      centerPadding: "60px",
      nextArrow: <KeyboardArrowRightIcon color="action" fontSize="large"/>,
      prevArrow: <KeyboardArrowLeftIcon color="action" fontSize="large"/>
  };

  return (
    <React.Fragment>
    <Box sx={{ width: "100%"}}>
    <Slider {...settings} style={{width: "100%", paddingInline: 10, marginInline: 10}}>
        {product_sale.map((product, index) => (      
            <ProductItemSale  product ={product} key={index}/>
        ))}
        </Slider>
    </Box>
       
    </React.Fragment>
  );
}

export default ProductSlick;
