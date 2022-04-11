import styles from './Card.module.css';

function Card(props) {
// console.log(props);
const {img,name,qualification,Package} = props;

return(
    <div className ={styles.card}>

        <div className={styles.left__content}>
            <img src={img} alt = {name}/>
        </div>

        <div>
            <h1>Name : {name}</h1>
            <h2>Qualification : {qualification}</h2>
            <h3>Package : {Package}</h3>
        </div>

    </div>

)

}

export default Card;