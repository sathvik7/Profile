$(document).ready(() => {
    setTimeout(() => {
        if (document.getElementById('profile-photo').classList.contains('scale-out')) {
            document.getElementById('profile-photo').classList.remove('scale-out');
        }
    }, 200);
    allCards = document.getElementsByClassName('card-panel');
    for (let cardNum in allCards) {
        let flag = true;
        setTimeout(() => {
            if (flag) {
                flag = false;
                if (allCards[cardNum].classList.contains('scale-out')) {
                    allCards[cardNum].classList.remove('scale-out');
                }
                flag = true
            }
        }, 500);
    }
});

