import { api } from "../utilities.jsx";
import { useEffect, useState} from "react";
import { TitleNavBar } from "../components/title-nav-bar.jsx";
import { ItemNavBar } from "../components/item-nav-bar.jsx";
import { RecipeTree } from "../components/recipe-tree.jsx";

export const LegendaryRecipePage = () => {
    const [icon, setIcon] = useState([]);


    useEffect(() => {        
        const fetchData = async () => {
    
          try {
            const response = await api.get("https://api.guildwars2.com/v2/recipes/search?output=29166");
            console.log(response.data[0]);
            const response_2 = await api.get(`https://api.guildwars2.com/v2/items/30684`);
            setIcon(response_2.data.icon);
            console.log(response_2.data.icon)
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);
    
    return (
        <div>
            <TitleNavBar/>
            <ItemNavBar/>
            <RecipeTree/>
            <div>
                <img src={`${icon}`}></img>
            </div>
        </div>
    )
}

