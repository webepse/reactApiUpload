import React, { useState } from 'react';
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import FormData from 'form-data';

const AddProduct = (props) => {

    const [info, setInfo] = useState({
        file: null
    })

    const navigate = useNavigate()

    const handleFileChange = (event)=>{
        const name = event.currentTarget.name 
        const myFile = event.currentTarget.files[0] 
        setInfo({...info, [name]:myFile})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try{
            const bodyFormData = new FormData()
            bodyFormData.append('file', info.file)

            await Axios({
                method:"post",
                url:"http://127.0.0.1:8000/api/media_objects",
                data: bodyFormData,
                headers: { "Content-Type": "multipart/form-data"},
            }).then(response=>console.log(response.data))
            // await Axios({
            //     method:"post",
            //     url:"http://127.0.0.1:8000/api/media_objects",
            //     data: bodyFormData,
            //     headers: { "Content-Type": "multipart/form-data; boundary= -------"+ Math.random().toString().substring},
            // }).then(response=>console.log(response.data))

            navigate('/', {replace:true})

        }catch({response})
        {
            console.log(response)
        }

    }


    return ( 
        <div>
            <h1>Ajouter un produit</h1>
            <form onSubmit={handleSubmit}>
                <div className="my-3">
                    <label htmlFor="image">Image: </label>
                    <input type="file" name="file" id="image" className='form-control' onChange={handleFileChange} />
                </div>
                <div className="my-3">
                    <button type="submit" className='btn btn-success'>Enregistrer</button>
                    <Link to="/" className='btn btn-secondary'>Retour</Link>
                </div>


            </form>
        </div>
     );
}
 
export default AddProduct;
