// general dependencies
import { Fragment } from "react"

//components import
import MealsSummary from "./MealsSummary"
import AvailableMeals from "./AvailableMeals"

const Meals = () => {
    return <Fragment>
        <MealsSummary />
        <AvailableMeals />
    </Fragment>
}

export default Meals;