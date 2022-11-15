
import {styles} from './style.js';
 
function Card({name, about, image, feature, store}) {

    return(
        <div style={store ? {...styles.card, ...styles.cardStore}: styles.card}  >
            <div style={styles.cardHeader}>
                <img style={styles.cardPic} src={image} alt='логотип карточки'/>
                <div>
                    <p style={store ? {...styles.cardSticker, ...styles.cardStickerStore} : styles.cardSticker}>{feature}</p>
                    <h3 style={styles.cardTitle}>{name}</h3>
                </div>
            </div>
            <p style={styles.cardDescription}>{about}</p>
        </div>
    );
}
export default Card;