import React from 'react'
import Recipecard from "./Recipecard"

export default function RecipeList({recipecards}) {
    return (
        <div className="card-grid">
            {recipecards.map(recipecard =>{
                return <Recipecard recipecard={recipecard} key={recipecard.id}/>
            })}
        </div>
    )
}
