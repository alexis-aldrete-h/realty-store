import './product.css';

const Product = () => {
    return (
        <div className='product'>
            <img></img>
            <h2>Title</h2>
            <h4>Price</h4>
            <h4>Total</h4>

            <div className='productCounterContainer'>
                <button>-</button>
                <h4>1</h4>
                <button>+</button>
            </div>
            <button>Add</button>
        </div>
    );
}

export default Product;