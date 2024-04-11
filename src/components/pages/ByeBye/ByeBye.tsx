import byeBye from '@assets/images/bye-bye.jpg';

export function ByeBye() {
    return (
        <main className="bye-bye-bg">
            <div className="wrapper">
                <section className="bye-bye">
                    <h1 className="bye-bye__h1">
                        Котик очень ждёт Вашего звонка...
                    </h1>
                    <figure className="bye-bye__figure">
                        <img
                            src={byeBye}
                            alt="Bye bye!"
                            className="bye-bye__img"
                        />
                    </figure>
                </section>
            </div>
        </main>
    );
}
