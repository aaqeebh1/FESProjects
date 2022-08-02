import productsData from "./productsData"
function Product(props) {
    return (
        <div>
            <h3>{props.product.name}</h3>
            <span >{props.product.price.toLocaleString("en-UK", {style: "currency", currency: "GBP"})}</span>
            <p>Description: {props.product.description}</p>
        </div>
    )


}

export default Product