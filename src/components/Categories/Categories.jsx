import React, { useEffect,useState } from 'react'
import { Button } from '../Buttons/Buttons';
import sofa from '../../assets/images/sofa.png';
import item_1 from '../../assets/images/item-1.png';
import item_2 from '../../assets/images/item-2.png';
import item_3 from '../../assets/images/item-3.png';
import data from '../../data/categories.json';

function Categories() {
    const [category,setCategory] = useState([]);

    useEffect(()=>{
        setCategory(data.category);
    },[])

    return (
        <>
        <div className="category">
            <div className="category__heading">
            Categories
            </div>
            <div className="category__container">
                {category.map((item)=>{
                    return(
                    <>
                        <div className={`category__item ${item.type}`} key={item.id}>
                        <div className="category__image-block">
                            <img src={item.image} alt='sofa'/>
                        </div>
                        <div className="category__name-block">
                        <div className="category__name">
                            {item.category}
                        </div>
                        <div className="category__cta">
                            <Button variant={item.Button.variant} text={item.Button.name} icon={item.Button.icon} />
                        </div>
                        </div>
                        </div>
                    </>)
                })}

                {/* <div className="category__item --half">
                    <div className="category__image-block">
                        <img src={item_1} alt='sofa'/>
                    </div>
                    <div className="category__name-block">
                    <div className="category__name">
                        Sitting Room
                    </div>
                    <div className="category__cta">
                        <Button variant={'btn-outline'} text={'Shop Now'} icon={'arrow-right'} />
                    </div>
                    </div>
                </div>
                <div className="category__item --half">
                    <div className="category__image-block">
                        <img src={item_2} alt='sofa'/>
                    </div>
                    <div className="category__name-block">
                    <div className="category__name">
                        Sitting Room
                    </div>
                    <div className="category__cta">
                        <Button variant={'btn-outline'} text={'Shop Now'} icon={'arrow-right'} />
                    </div>
                    </div>
                </div>
                <div className="category__item">
                    <div className="category__image-block">
                        <img src={item_3} alt='sofa'/>
                    </div>
                    <div className="category__name-block">
                    <div className="category__name">
                        Sitting Room
                    </div>
                    <div className="category__cta">
                        <Button variant={'btn-outline'} text={'Shop Now'} icon={'arrow-right'} />
                    </div>
                    </div>
                </div> */}
            </div>
        </div>
        </>
    )
}

export default Categories
