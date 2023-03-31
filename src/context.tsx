import React, { ReactNode, useState, useContext, useEffect } from "react";
import { ContextInterface, intro, Meal, qucikMeal } from "./_types/contextTypes";


const AppContext = React.createContext<Partial<ContextInterface>>({})

interface AppProviderProps {
    children: ReactNode
}

const fetchMap = new Map([
    ["intro","https://www.themealdb.com/api/json/v1/1/search.php?f=h"],
    ["qucikMeal","https://www.themealdb.com/api/json/v1/1/search.php?f=a"],
    ["singleMeal","https://www.themealdb.com/api/json/v1/1/search.php?f=a"]
])

export const AppProvider = ({children}:AppProviderProps) => {
    const [introMeal,setIntroMeal] = useState<intro[]>();
    const [singleCategoryMeal,setSingleCategoryMeal] = useState<intro[]>();
    const [singleMeal,setSingleMeal] = useState<Meal>();
    const [featured,setFeatured] = useState<intro[]>();

    const fecthData = (typeofFetch:string) => {
        const toFetch = fetchMap.get(typeofFetch);
        if(toFetch){
            fetch(toFetch).then(res => res.json())
            .then((data) => data.meals)
            .then((rawData:Meal[]) => {
                if(typeofFetch === "intro"){
                    return rawData.map((x) => {
                        const {idMeal,strMeal,strMealThumb} = x;
                        return {idMeal,strMeal,strMealThumb}
                    })
                }
            })
            .then((data) => {setIntroMeal(data),setFeatured(data)})
        }
    }



    const categoryMap = new Map([
        ["meat",["Beef","Chicken","Lamb","Pork"]],
        ["fish",["Seafood"]],
        ["vegie",["Vegan","Vegetarian"]]
    ])


    const getCategoryMeals = async (categoryname: string) => {
        const item = categoryMap.get(categoryname);
        if(item) {
          const meals = await Promise.all(item.map(async (x) => {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${x}`).then(res => res.json());
            return response;
        }));

        const flattend: intro[] =  meals.flatMap(x => x.meals);  
        setSingleCategoryMeal(flattend);

        }

        // const notesWithUser = await Promise.all(notes.map(async (note) => {
        //     const user = await User.findById(note.user).lean().exec()
        //     return { ...note, username: user.username }
        // }))
    }





    useEffect(() =>{
        fecthData("intro")
    },[])




    return <AppContext.Provider value={{introMeal,singleCategoryMeal,singleMeal,featured,
        getCategoryMeals
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
  }








