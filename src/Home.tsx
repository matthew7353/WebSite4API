import "./Home.css"

function Home() {
    return (
        <>
            <div className = 'grid-container'>
                <h1 className = 'text'> Profesjonalne API do wyszukiwania adresów</h1>
                <div className = 'preview'/>
            </div>
            <div className='title'>
                <h1> Funkcje </h1>
            </div>
            <div className='grid-container'>
                <h3 className='text2'> Profesjonalizm </h3>
                <h3 className='text2'> Łatwość obsługi </h3>
                <h3 className='text2'> Support </h3>
                <h3 className='text2'> Support </h3>
            </div>
            <div className= 'title'>
                <h1>Profesjonalne biblioteki</h1>
            </div>
        </>
    );
}

export default Home;