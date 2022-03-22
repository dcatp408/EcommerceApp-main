import React from 'react'

function CreateProduct() {
    return (
        <div className='container'>
            <h1> Create Product</h1>
            <div>
                <label>Name</label><br />
                <input type="text" name="product name"></input>
            </div>
            <div>
                <label>Description</label><br />
                <textarea name="Text1" cols="40" rows="5"></textarea>
            </div>
            <div>
                <label for="cars">Categories:</label><br />

                <select name="shirts" id="shirts">
                    <option value="Hat">Hat</option>
                    <option value="saab">Mug</option>
                    <option value="keychain">Key Chain</option>
                    <option value="audi">Audi</option>
                </select>

            </div>

            <div>
                <label>or add a new category</label><br />
                <input type="text" name="product name"></input>
            </div>
            <div>
                <label>Images</label> <button>upload</button>

            </div>
            <div>
                <img src=''>

                </img>

                <button>delete image</button>
                <input type="checkbox" id="imageconfirm" name="imageconfirm"
                    checked />
                <label for="imageconfirm">Main</label>


            </div>


            <div>
                <button>cancel</button>
                <button>preview</button>
                <button>update</button>
            </div>
        </div>
    )
}

export default CreateProduct