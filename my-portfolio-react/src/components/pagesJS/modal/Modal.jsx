import React, {useState, useEffect} from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';

import './Modal.css';

const Modal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModal2Visible, setIsModal2Visible] = useState(false);

    useEffect(() => {
        const modalTimer = setTimeout(() => {
            setIsModalVisible(true);
        }, 3000);

        return () => {
            clearTimeout(modalTimer);
        };
    }, []);

    const hideModal = () => {
        setIsModalVisible(false);
    };

    const toggleModal2 = () => {
        setIsModal2Visible(!isModal2Visible);
    };

    const closeModal2 = () => {
        setIsModal2Visible(false);
    };

    return (
        <div>
            <Header />
            <div className='mainModal'>
                <div className="text">
                    <h3>Please wait 3 seconds you will see the modal window</h3>
                </div>
                <div className="modal-btn">
                    <button className='openModal' onClick={toggleModal2}>Show second Modal</button>
                </div>

                {isModalVisible && (
                    <div className="modal show">
                        <div className="modal-close" onClick={hideModal}>X</div>
                        <div className="modal-text">
                            <h3 className='textModal'>Hello, I'm a modal window</h3>
                        </div>
                    </div>
                )}

                {isModal2Visible && (
                    <div className="modal2">
                        <div className="modal__dialog">
                            <div className="modal__content">
                                <div className='form-text'>Заполните Форму!</div>
                                <p className='form-text'>Мы свяжемся с вами!</p>
                                <div className="modal__close" onClick={closeModal2}>&times;</div>
                                <div className="modal__title">Мы свяжемся с вами как можно быстрее!</div>
                                <input required placeholder="Ваше имя" name="name" type="text" className="modal__input" />
                                <input required placeholder="Ваш номер телефона" name="phone" type="tel" className="modal__input" />
                                <button className="btn1 btn_dark btn_min">Перезвонить мне</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};


export default Modal;