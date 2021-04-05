import React, { useEffect, useState } from 'react';
import styles from './SelectedRestaurant.module.css';
import { getProducts } from '../../../services/ListedProductsService';
import { loginUser } from '../../../services/LoginService';


const SelectedRestaurant = () => {

    const [pizza, setPizza] = useState([]);
    const [bibite, setBibite] = useState([]);
    const [restaurantName, setRestaurantName ] = useState("");

    useEffect(() => {
        
        getProducts()
            .then((data)=>{
                data.sort((a:any, b:any)=> a.IdProdotto - b.IdProdotto);
                setPizza(data.filter((el:any)=> el.IdProdotto < 11));
                setBibite(data.filter((el:any) => el.IdProdotto > 11));
                setRestaurantName(data[0].Ristorante);
            });

        // loginUser()
        //     .then((data)=>{
        //         console.log(data)
        //     })

    }, [])

    const lookAtTheProducts = (product:any) =>{
        console.log(product)
    }



    // console.log(pizza);
    // console.log(bibite);

    

    return (
        <div className = {styles.selectedRestaurantContainer}>

            <div className={styles.selectedRestaurantHead}>
                <div className={styles.imageContainer}>
                    {/* <img src={restaurantImage} alt="background img" className={styles.backgroundImage} /> */}
                    <div className={styles.imageBackground}></div>
                    {/* <img src={restaurantLogo} alt="logo" className={styles.logoImage}/> */}
                </div>
                <div className={styles.descriptionRestaurantContainer}>

                    {
                        pizza &&
                            <h2 className={styles.restaurantName}>{restaurantName}</h2>
                    }

                    <p className={styles.restaurantDescription}>
                        Sempre attenti alla qualità degli ingredienti utilizzando solo prodotti di prima qualità,
                        ci rende orgogliosi e molto apprezzati dalla nostra affezionata clientela.
                        L’ottimo rapporto qualità/prezzo è ciò che ci ha sempre contraddistinto.
                    </p>

                </div>
            </div>

            <div className={styles.productsContainer}>

                <h2 className={styles.pizzaTitle}>Pizze</h2>

                {
                    pizza &&
                        pizza.map((el:any)=>{
                            return <div className={styles.pizzaCard} key={el.IdProdotto}>

                                        <div className={styles.pizzaDescriptionContainer}>

                                            <h3 className={styles.nomePizza}>{el.Prodotto}</h3>
                                            <h3 className={styles.descrizionePizza}>{el.Descrizione}</h3>

                                            {
                                                el.Prezzo.includes('.') ?
                                                <h3 className={styles.prezzoPizza}>{el.Prezzo}0 €</h3>
                                                :
                                                <h3 className={styles.prezzoPizza}>{el.Prezzo} €</h3>
                                            }

                                        </div>

                                        <div className={styles.addButtonContainer}>

                                            <div className={styles.addButton} onClick={()=>lookAtTheProducts(el)}>+</div>

                                        </div>

                                        

                                   </div>
                        })
                }
            </div>

            <div className={styles.productsDrinksContainer}>

                <h2 className={styles.drinkTitle}>Bibite</h2>

                {
                    bibite &&
                        bibite.map((el:any)=>{
                            return <div className={styles.drinksCard} key={el.IdProdotto}>

                                        <div className={styles.drinksDescriptionContainer}>

                                            <h3 className={styles.drinkName}>{el.Prodotto}</h3>
                                            <h3 className={styles.drinkDescription}>{el.Descrizione}</h3>

                                            {
                                                el.Prezzo.includes('.') ?
                                                    <h3 className={styles.drinkPrice}>{el.Prezzo}0 €</h3>
                                                    :
                                                    <h3 className={styles.drinkPrice}>{el.Prezzo} €</h3>
                                            }

                                        </div>

                                        <div className={styles.addButtonContainer}>

                                            <div className={styles.addButton} onClick={()=>lookAtTheProducts(el)}>+</div>

                                        </div>



                                   </div>
                        })
                }

            </div>
        </div>
    )
}

export default SelectedRestaurant
