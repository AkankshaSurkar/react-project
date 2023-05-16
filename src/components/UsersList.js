import React from "react";

const UsersList = (props)=>{
    return(
<ul>
    {props.users.map((user)=>(
        <li key={user.id}>
            {user.productId}
            {user.sellingPrice}
            {user.category}
        </li>
    )
    )}
    </ul>
    );
}
export default UsersList;