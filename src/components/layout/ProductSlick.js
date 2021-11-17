import React, {useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from "@mui/material/Box";
import ProductItemSale from './../product/ProductItemSale'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


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
    const {products, onAdd, onRemove} = props;
    const random = genRandomNumber(10, 0, products.length)
    const product_sale = products.filter((item) => {
        console.log(random.includes(item.id));
        return random.includes(item.id)
    });

    useEffect(() => {
       console.log(product_sale)
    }, [])

    var settings = {
    dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3,
      lazyLoad: true,
      centerMode: true,
      nextArrow: <KeyboardArrowRightIcon color="action" fontSize="large"/>,
      prevArrow: <KeyboardArrowLeftIcon color="action" fontSize="large"/>
  };

  return (
    <React.Fragment>
    <Box sx={{ flexGrow: 1}}>
    <Slider {...settings} style={{width: 1200, marginInline: 20}}>
        {product_sale.map((product, index) => (      
            <ProductItemSale  product ={product} onAdd={onAdd} onRemove={onRemove}/>
        ))}
        </Slider>
    </Box>
       
    </React.Fragment>
  );
}

export default ProductSlick;