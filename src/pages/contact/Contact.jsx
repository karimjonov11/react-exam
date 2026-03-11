import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';

const Contact = () => {
    const { t } = useTranslation(); 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const BOT_TOKEN = "8533391357:AAHOp_z4fXdoxt2wOnz3f9IOJtoc40mh9Rk";
        const CHAT_ID = "6889769329";
        const fullMessage = `👤 Ism: ${name}\n📧 Email: ${email}\n📞 Tel: ${phone}\n💬 Xabar: ${message}`;

        fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: CHAT_ID, text: fullMessage })
        })
        .then(res => res.json())
        .then(data => {
            if (data.ok) {
                alert(t('contact.success_msg') || 'Sent!'); // JSON ichidagi key
                setName(''); setEmail(''); setPhone(''); setMessage('');
            }
        });
    };

    return (
        <section className='contact'>
            <div className="contacttext">
                <div className="contcall">
                    <img src={img1} alt="" />
                    <h3>{t('contact.call_title')}</h3>
                </div>
                <p>{t('contact.call_desc')}</p>
                <p>{t('contact.phone_num')}: +8801611112222</p>
                <hr />
                <div className="contcall">
                    <img src={img2} alt="" />
                    <h3>{t('contact.write_title')}</h3>
                </div>
                <p>{t('contact.write_desc')}</p>
                <p>{t('contact.email_1')}</p>
                <p>{t('contact.email_2')}</p>
            </div>

            <div className="coninputs">
                <form onSubmit={handleSubmit}>
                    <div className="sinput">
                        <input required type="text" placeholder={t('contact.input_name')} value={name} onChange={(e) => setName(e.target.value)} />
                        <input required type="email" placeholder={t('contact.input_email')} value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input required type="text" placeholder={t('contact.input_phone')} value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <textarea 
                        className='inmsg' 
                        placeholder={t('contact.input_message')} 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                    <button className='inbtn' type='submit'>{t('contact.send_btn')}</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;