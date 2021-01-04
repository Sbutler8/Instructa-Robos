import React, { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCategories } from "../../store/categories";
import './Footer.css';

function Footer() {
    const dispatch = useDispatch();
    useEffect(() => dispatch(getCategories()), [dispatch]);
    const categories = useSelector((state) => state.categories);
    const categoryArray = Object.values(categories);

    return (
        <>
            <div className="footer-container">
                <ul className="footer-nav-heading">
                    <span className="column-titles">Contributors</span>
                    <li>Samantha Butler</li>
                </ul>
                <img src="../../images/instructa-robos-logo.png" alt=''></img>
                <ul>
                    <span className="column-titles">Categories</span>
                    <li>Tour</li>
                    {categoryArray.map(category => {
                    return (
                        <li key={category.id} id="category-footer">{category.name}</li>
                        )
                    })}
                </ul>
                <ul>
                    <span className="column-titles">About Us</span>
                    <li>Who We Are</li>
                    <li>Why Publish?</li>
                    <li>Jobs</li>
                </ul>
                <ul>
                    <span className="column-titles">Resources</span>
                    <li>Sitemap</li>
                    <li>Help</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="hr">
                <hr></hr>
            </div>
        </>
    );
  }

  export default Footer;
