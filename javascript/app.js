var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString("با آکادمی سبز لرن برنامه نویسی رو با خیال راحت یاد بگیر و پیشرفت کن")
    .pauseFor(1500)
    .deleteAll()
    .start();