import './DescriptionBox.css';

const DescriptionBox = () => {

    return (
        <div className="descrptionbox">
            <div className="descrptionbox-navigator">
                <div className="descrptionbox-nav-box">Description</div>
                <div className="descrptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descrptionbox-description">
                <p> 
                    An ecommerce website is an online place where you can find 
                    and buy different products and services. On this website, you can 
                    explore a wide range of items, place your orders, and pay online with ease. 
                    You can read product descriptions, view photos, give your ratings 
                    and get information on current offers and promotions. 
                    This online site offers a comfortable and safe experience 
                    for purchasing products from the comfort of your home.
                </p>
                <p>
                    On an ecommerce site, products are generally displayed with pictures, 
                    titles, prices, descriptions, availability, filters, categories, similar products, 
                    reviews, and customer ratings. This helps shoppers understand and compare
                    products to decide on a purchase.
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox