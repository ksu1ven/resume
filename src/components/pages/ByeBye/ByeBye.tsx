import byeBye from '@assets/images/bye-bye.jpg';

export function ByeBye() {
    return (
        <main className="bye-bye-bg">
            <div className="wrapper">
                <section className="bye-bye">
                    <h3 className="bye-bye__h3">
                        Котик очень ждёт Вашего звонка...
                    </h3>
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
