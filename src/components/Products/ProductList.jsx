import React, { useState } from 'react'
import './product.css'

function ProductList() {

    const [name, setName] = React.useState('')
    const [price, setPrice] = React.useState('')
    const [category, setCategory] = React.useState('')
    const [quantity, setQuantity] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [error, setError] = React.useState('')

    const [products, setProducts] = React.useState([])

    const createNewProduct = (e) => {

        e.preventDefault()
        console.log("test")
        if (name.trim() === "") {
            setError("Product name is required")
            return
        }
        else if (price.trim() === "") {
            setError("Product price is required")
            return
        }
        else if (category.trim() === "") {
            setError("Product category is required")
            return
        }
        else if (quantity.trim() === "") {
            setError("Product quantity is required")
            return
        }
        else if (description.trim() === "") {
            setError("Product description is required")
            return
        } else {
            const newProduct = {
                name,
                price,
                category,
                quantity,
                description
            }
            setProducts([...products, newProduct])
        }

    }





    return (
        <div className='app'>
            <header className='header'>
                <h1>Product List</h1>
            </header>
            <main className='container'>
                <div className='stats'>
                    <div className='stat-card'>
                        <p>Total Products</p>
                        <h2>34</h2>
                    </div>
                </div>
            </main>
            <div className='card'>
                <h2>Add Product</h2>
                <form onSubmit={createNewProduct}>
                    <div className='form-grid'>
                        <div className='form-group'>
                            <label htmlFor='name'>Product Name</label>
                            <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='price'>Price</label>
                            <input type='number' value={price} onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='category'>Category</label>
                            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                                <option value=''>Select a category</option>
                                <option value='Electronics'>Electronics</option>
                                <option value='Clothing'>Clothing</option>
                                <option value='Home'>Home</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='quantity'>Quantity</label>
                            <input type='number' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='description'>Description</label>
                            <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} />
                        </div>
                    </div>
                    {error && <p className='error'>{error}</p>}
                    <button type='submit' className='add-btn'>Add Product</button>
                </form>
            </div>
            <div className='card'>
                <div className='product'>
                    {products.map((product) => (
                        <div key={product.id} className='product'>
                            <h3>{product.name}</h3>
                            <div key={product.name} length={product.quantity} className='product'>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )



}

export default ProductList