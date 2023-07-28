
const Footer = () => {
    return (

        <footer>
            <div className="containerImgFooter" ><img src="/img/logo.png" alt="logo" /></div>
            <div>
                <ul className="listeHoraireFooter">
                    <h3>Horaires d'ouverture: </h3><br />
                    <li>Lun : 17:00–00:00</li>
                    <li>Mar : 17:00-01:00</li>
                    <li>Mer : 17:00-01:00</li>
                    <li>Jeu : 17:00-02:00</li>
                    <li>Ven : 17:00-02:00</li>
                    <li>Sam : 17:00-02:00</li>
                    <li>Dim : 17:00-00:00</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer