const TOKEN = ""; 
const CHAT_ID = "";
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
const success = document.getElementById('success');

document.getElementById('tg').addEventListener('submit', function(e) {
    e.preventDefault();
   
    let message = `<b>Заявка с сайта</b>\n`;
    message += `<b>Отправитель: </b>${this.name.value}\n`;
    // message += `<b>Почта: </b>${this.email.value}\n`;
    message += `<b>Номер телефона: </b>${this.tel.value}`;

    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })

    .then((res) => {
        this.name.value = "";
        // this.email.value = "";
        this.tel.value = "";
        success.innerHTML = "сообщение отправлено!";
        success.style.display = "block";
    })
    .catch((err) => {
        console.warn(err);
    })
    .finally(() => {
        console.log('Конец')
    })
}); 