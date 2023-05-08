//general dependencies
import { Fragment } from 'react'

//components imports
import HeadrerCartButton from './HeaderCartButton'

// css imports
import classes from './Header.module.css' 

// images imports
import mealsImage from '../../Assets/meals.jpg'

const Header = (props) =>{
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeadrerCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='table full of delicious food' />
        </div>
    </Fragment>
}


export default Header