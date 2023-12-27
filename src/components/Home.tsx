import "./styles.css"

function Home() {
    return (
        <>
            <div className = 'grid-container'>
                <div>
                    <h1 className = 'text text-white bold text-big'> Profesjonalne API do wyszukiwania adresów</h1>
                    <p className='text text-white'>Autouzupełnianie, Kalkulowanie dystansu, Wyszukiwanie adresów pocztowych</p>
                </div>
                <div className = 'preview'/>
            </div>
        </>
    );
}

export default Home;