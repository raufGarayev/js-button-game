const myBtn = document.querySelectorAll('button') //bütün butonları bir dəyişəndə saxlayırıq
const myDivs = document.querySelectorAll('div') //eyni şəkildə bütün divləri dəyişəndə saxlayırıq
const mike = document.getElementById('wazowski') //index.html-də yaratdığımız wazowski id-si olan classı seçirik
const audio = new Audio("squeak.wav"); //fayllarda olan musiqini dəyişəndə saxlayırıq (qeyd: bu mövzü dərsdə keçilməyib sadəcə googledan baxdım)
let clicks = 0; //bu dəyişəni yaradıb 0 dəyəri veririk, number olsun deyə. let-lə yaratmağımın səbəbi odurki dəyəri sonradan dəyişəcək


//seçdiyimiz bütün butonların click eventini seçirik. (qeyd: forEach dərsdə keçilməyib hələ, googledan tapdım)
myBtn.forEach(btn => {
    btn.addEventListener('click', startGame);
 });


 //click eventinin funksiyasını başladırıq
function startGame(e) {
    clicks++ //bu bütün proqramlaşdırma dillərində olan bir üsuldur, dərsdə yaxında keçiləcək. click dəyişəni yuxarıda sıfır qeyd olunub, hər butona bastığımızda dəyəri +1 artır

    audio.play() //əlavə etdiyimiz səs faylını butona basdığımızda işə düşür

    let rNum = Math.floor(Math.random() * 4); //buna googledan baxdım. 1dən 3ə qədər rastglə bir rəqəm verir bizə hər butona basıldığında

    const clickedButton = e.target //dərsdə keçilən mövzü, buna həqiqətən ehtiyac varmiydi bilmirəm ama sonradan clicklədiyimiz divə class vermək üçün bu funksiyadan istifadə etdim

    //clicklədiyimiz obyektdə btn classı varsa deyib yeni funksiya başladırıq
    if(clickedButton.classList.contains('btn')) {

        //yuxarıda 1dən 3ə qədər rastgələ rəqəm istəmişdik, cavabı 1-sə əgər..ə
        if(rNum == 1) {
            clickedButton.style.background = 'blue' //seçdiyimiz divə inline css əlavə edib arxa fon rəngini dəyişdiririk
        }
        //yox əgər cavabı 2-sə..
        else if(rNum == 2) {
            clickedButton.style.background = 'red'
        }
        else {
            clickedButton.style.background = 'green'
        }
    }

    //dediyim kimi hər butona kliklədiyimizdə clicks dəyişəninin dəyəri artır. click == 5 yani əgər butona 5 dəfə kliklənibsə...
    if(clicks == 5)
    {
        confirmAction() //bu funksiya aşağıda qeyd olunub, boş verin, lazımsızdı
    }
    else if(clicks == 10) //eyni şəkildə buton 10 dəfə kliklənibsə..
    {
        alert("Bezmədin?") //alerti səhv etmirəmsə dərsdə görmüşük
    }
    else if(clicks == 15)
    {
        alert("Bekarsan?")
    }
    else if(clicks == 17)
    {
        mike.style.display = 'block' //17 klikdə artıq yaratdığımız classa inline olaraq display block əıavə edib şəkili visible edirik ;)
    }
    
}

function confirmAction() {
    let confirmAction = confirm("Davam etmək istəyirsiniz?");
    if (confirmAction) {
      alert("Buyurun");
    } else {
      alert("-.-");
    }
  }