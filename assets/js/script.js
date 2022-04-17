const buttonElem = document.querySelector(".comments__button");
const textareaElem = document.querySelector("#message-input-id");
let msgItems = document.querySelector(".comments__messages-items");

hideComments();

buttonElem.addEventListener("click", (event) => {
    let msgText = textareaElem.value;
    if ( msgText ) {
        addMessage( msgItems, msgText );
        textareaElem.value = "";   
        showComments();
    } 

});

function showComments() {
    msgItems.style.display = "";
}

function hideComments() {
    msgItems.style.display = "none";
}

function addMessage( parentElem, msg ) {
    // parentElem - в какой элемент добавляем элемент-сообщение
    // msg - текст сообщения
    if (!msg.trim()) {
        return 0;
    }
    let div = document.createElement("div");
    div.textContent = checkSpam(msg);
    div.setAttribute("class", "comments__messages-item");

    parentElem.appendChild(div);

}

function checkSpam (msg) {
    // замена viagra или xxx --> ***. Не заменяет подстроки, только слова, не чувствительна к регистру
    return msg.replace( /\b(viagra|XXX)\b/ig, "***");
}