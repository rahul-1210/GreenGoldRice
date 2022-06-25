import React from 'react'
import Ricepack from '../images/ricepack.jpg'

export default function About() {
    return (
        <div className='container-fluid'>
            <div className="row d-flex">
                <div className="col-sm-6 d-flex flex-column justify-content-center align-items-center gap-2">
                    <img src={Ricepack} alt="rice pack" className='w-100'/>
                    <button type="button" className="btn btn-warning w-100 btn-shop">Shop Us</button>
                </div>
                <div className="col-md-6">
                    <h3 className='h3 mt-4 about-head'>About <span className='text-success'>Green</span>
                        <span className='gold'> Gold</span>  Rice Since 1975</h3>
                    <p className='desc2'>We Green Gold Rice Ltd import/export best rice crops without the use of the chemical fertilizers and serve best products to the people since 1975. We deliver fresh and best products to our customers.
                        We sell the best qualitative varieties of rice to the customers.</p>

                    <h1 className='h3 mt-4 about-head'>Why Green Gold Rice</h1>
                    <p className='desc2'>Here are some of the answers to the above query that will help you to know more about us</p>
                    <ul className='mt-3 desc2 ul-disc'>
                        <li>We have a well qualified and experienced team of farmer that helps us to more for best rice import and export.</li>
                        <li>
                            We also have a well-qualified team that will solve your queries and doubts with a detailed explanation.
                        </li>
                        <li>
                            We provide 24/7 service for our customers to satisfy their needs and solve their doubts.
                        </li>
                    </ul>
                    <p className='desc2 mt-3'>
                        Our Team has a good acumen of Rice quality.
                        Our Team always tries to utilize the latest technologies that can enhance the productivity of farmer and crops. We do not use any chemical fertilizers for growing the crops and our products are best quality.
                    </p>

                </div>

            </div>
        </div>
    )
}
