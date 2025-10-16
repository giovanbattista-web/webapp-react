import { useState } from 'react';
import axios from 'axios';

const ReviewsForm = ({ movie_id, reloadReviews }) => {
    const initialData = {
        name: "",
        text: "",
        vote: ""
    };

    const [formData, setFormData] = useState(initialData);

    const setFieldValue = (e) => {
        const { value, name } = e.target

        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`http://127.0.0.1:3000/api/films/${movie_id}/reviews`, formData, {
            headers: { "Content-Type": "application/json" },
        }).then(() => {
            setFormData(initialData);
            reloadReviews();
        });
    };
    return (
        <div className='container me-35 mt-4'>
            <div className='card'>
                <div className='card-header'>
                    <h4>Add your review</h4>
                </div>
                <div className='card-body'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="" className='control-label'>Name</label>
                            <input type="text"
                                className='form-control'
                                name="name"
                                placeholder='nome'
                                required
                                value={formData.name}
                                onChange={setFieldValue}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="" className='control-label'>Vote</label>
                            <input min="0" max="5"
                                type="number"
                                className='form-control'
                                name="vote"
                                placeholder='voto'
                                value={formData.vote}
                                onChange={setFieldValue}
                                required />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="" className='control-label'>Text</label>
                            <textarea name="text"
                                id="text"
                                className='form-control'
                                onChange={setFieldValue}
                                value={formData.text} >
                            </textarea>
                        </div>
                        <div className='form-group'>
                            <button className="btn btn-main text-white" type="submit">Save review</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReviewsForm;