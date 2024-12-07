import byeBye from '@assets/images/bye-bye.jpg';

export function ByeBye() {
    return (
        <main className="bye-bye">
            <div className="wrapper bye-bye__content">
                <h2>Котик очень ждёт Вашего звонка...</h2>

                <div className="bye-bye__img-wrapper">
                    <img src={byeBye} alt="Bye bye!" className="bye-bye__img" />
                </div>
            </div>
        </main>
    );
}
