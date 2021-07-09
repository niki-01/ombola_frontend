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
                    <label>Product Picture:<input type="file" name="product_picture" /></label>
                    <label>Product Name:<input type="text" name="product_name" /></label>
                    <label>Product Description:<input type="text" name="product_description" /></label>
                    <label>Value:<input type="text" name="value" /></label>
                    <label>Draw Date:<input type="text" name="draw_date" /></label>
                    <label>Remaining Tickets:<input type="text" name="remaining_tickets" /></label>
                    <label>Ticket Price:<input type="text" name="ticket_price" /></label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            </>
        )
    }
}
