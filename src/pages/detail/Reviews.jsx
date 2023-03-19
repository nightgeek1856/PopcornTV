import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router';

import tmdbApi from '../../api/tmdbApi';

const Reviews = props => {

    const {category} = useParams();

    const [results, setReviews] = useState([]);

    useEffect(() => {
        const getReviews = async () => {
            const res = await tmdbApi.reviews(category, props.id);
            setReviews(res.results.slice(0,3));
        }
        getReviews();
    }, [category, props.id]);
    return (
        <div className="reviews">
            {
                results.map((item, i) => (
                    <div key={i} className="reviews__item">
                        <p className="reviews__item__name">{item.author_details.name}  <i className="bx bx-star"></i>{item.author_details.rating}/10</p>
                        <p className="reviews__item__content">{item.content}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default Reviews;