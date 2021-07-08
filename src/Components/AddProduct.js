import React, { Component } from 'react'
// add product component - front end form
export default class AddProduct extends Component {
    render() {
        return (
            <>
            <div>
                <h1>Add Product</h1>
            </div>
            <div>
                <form>
                    <label>
                        Product Picture:&nbsp;&nbsp;
                        <input type="file" name="product_name" />
                    </label>
                    <label>
                        Product Name:&nbsp;&nbsp;
                        <input type="text" name="product_name" />
                    </label>&nbsp;
                    <label>
                        Product Description:&nbsp;&nbsp;
                        <input type="text" name="product_name" />
                    </label>&nbsp;
                    <label>
                        Value/Worth:&nbsp;&nbsp;
                        <input type="text" name="product_name" />
                    </label>&nbsp;
                    <label>
                        Draw Date:&nbsp;&nbsp;
                        <input type="text" name="product_name" />
                    </label>&nbsp;
                    <label>
                        Remaining Tickets:&nbsp;&nbsp;
                        <input type="text" name="product_name" />
                    </label>&nbsp;
                    <label>
                        Ticket Price:&nbsp;&nbsp;
                        <input type="text" name="product_name" />
                    </label>&nbsp;
                    <input type="submit" value="Submit" /><br/><br/>
                </form>
            </div>
            </>
        )
    }
}
