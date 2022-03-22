import React from 'react'

function AddProduct() {
    return (
        <div>
            
        </div>
    )
}

export default AddProduct
import React from 'react'
import { Link } from 'react-router-dom'
function AddProduct() {
    return (

        <div className='container'>
            <input type="search" placeholder="search" id="search" />
            <button>Add New Product</button>
            <table>
                <tr>
                    <th>Picture</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Inventory Count</th>
                    <th>Quantity Sold</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td><img src=''></img></td>
                    <td>2</td>
                    <td>T-shirt</td>
                    <td>2 (inventory count)</td>
                    <td>1000 (Quantity sold)</td>
                    <td>
                        <Link to='/edit'>Edit</Link>
                        <button>delete</button>
                    </td>
                </tr>
                <tr>
                    <td><img src=''></img></td>
                    <td>2</td>
                    <td>T-shirt</td>
                    <td>2 (inventory count)</td>
                    <td>1000 (Quantity sold)</td>
                    <td>
                        <Link to='/edit'>Edit</Link>
                        <button>delete</button>
                    </td>
                </tr>
            </table>

            <p>1</p> | <p>2</p> | <p>3</p> | <p>4</p>
        </div>
    )
}

export default AddProduct;