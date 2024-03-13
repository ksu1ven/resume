import byeBye from '@assets/images/bye-bye.png';

export function ByeBye() {
    return (
        <main className="bye-bye-bg">
            <div className="wrapper">
                <section className="bye-bye">
                    <h1 className="bye-bye__h1">
                        Котик очень ждёт Вашего звонка...
                    </h1>
                    <img src={byeBye} alt="Bye bye!" className="bye-bye__img" />
                </section>
            </div>
        </main>
    );
}
