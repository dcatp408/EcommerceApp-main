import React from 'react'
import { Link } from 'react-router-dom'
function ShoppingCart() {
    return (

        <div className='container'>
            <table>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                <tr>
                    <td>Roses</td>
                    <td>29.99</td>
                    <td>3
    <Link to='/update'>Update</Link>
                        <button>delete</button>
                    </td>
                </tr>
                <tr>
                    <td>Broses</td>
                    <td>29.99</td>
                    <td>3
    <Link to='/update'>Update</Link>
                        <button>delete</button>
                    </td>
                </tr>
            </table>

            <h3>Total: 29.99</h3>
            <button>continue shopping</button>


            <div className='shipping'>
                <h1> Shipping Information</h1>
                <div>
                    <input type="search" placeholder="First Name" id="FirstName" />
                </div>
                <div>
                    <input type="search" placeholder="Last Name" id="LastName" />
                </div>
                <div>
                    <input type="search" placeholder="Address" id="Address" />
                </div>
                <div>
                    <input type="search" placeholder="Address 2" id="AddressTwo" />
                </div>
                <div>
                    <input type="search" placeholder="City" id="City" />
                </div>
                <div>
                    <input type="search" placeholder="State" id="State" />
                </div>
                <div>
                    <input type="search" placeholder="Zipcode" id="Zipcode" />
                </div>
            </div>

            <div className='billing'>
                <h1> Billing Information</h1>
                <div>
                    <input type="checkbox" id="sameshipping" name="sameshipping"
                        checked />
                    <label for="sameshipping">Same as shipping</label>
                </div>
                <div>
                    <input type="search" placeholder="First Name" id="FirstName" />
                </div>
                <div>
                    <input type="search" placeholder="Last Name" id="LastName" />
                </div>
                <div>
                    <input type="search" placeholder="Address" id="Address" />
                </div>
                <div>
                    <input type="search" placeholder="Address 2" id="AddressTwo" />
                </div>
                <div>
                    <input type="search" placeholder="City" id="City" />
                </div>
                <div>
                    <input type="search" placeholder="State" id="State" />
                </div>
                <div>
                    <input type="search" placeholder="Zipcode" id="Zipcode" />
                </div>

                <div>
                    <input type="search" placeholder="Card" id="Card" />
                </div>
                <div>
                    <input type="search" placeholder="Security Code" id="SecurityCode" />
                </div>
                <div>
                    <label for="start">Expiration Date:</label>

                    <input type="date" id="start" name="trip-start"
                        value="2018-07-22"
                        min="2018-01-01" max="2018-12-31" />
                </div>

                <button>Pay</button>
            </div>
        </div>
    )
}

export default ShoppingCart;