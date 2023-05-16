import {useRef} from "react";

const AdminPage =(props)=>{
    const ProductIdInputRef = useRef();
    const sellingPriceInputRef = useRef();
    const categoryInputRef = useRef();

    const adduserHandler =(event)=>{
        event.preventDefault();
        const enteredProductId = ProductIdInputRef.current.value;
        const enteredSellingPrice = sellingPriceInputRef.current.value;
        const enteredCategory = categoryInputRef.current.value;
        
        if(enteredProductId.trim().length ===0 || enteredSellingPrice.trim().length === 0 || enteredCategory.trim().length===0)

    
    props.onAddUser(enteredProductId,enteredSellingPrice, enteredCategory);

    ProductIdInputRef.current.value ='';
    sellingPriceInputRef.current.value ='';
    categoryInputRef.current.value ='';
    };

    return(
        <div>
            <form onSubmit={adduserHandler}>
            <label htmlFor="productId">Product ID:</label>
            <input id="productId" type="text"  ref={ProductIdInputRef}/>
            <label htmlFor="sellingPrice">Selling Price:</label>
            <input id="sellingPrice" type="number" ref={sellingPriceInputRef}/>
            <label htmlFor="category">Choose a Category:</label>
            <input id="category" type="text" ref={categoryInputRef}/>

        <button type="submit">Add Product</button>
        <h1>Product</h1>
        </form>
        </div>
    );
}
export default AdminPage;