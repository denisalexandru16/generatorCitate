const generatorButton=document.getElementById('generator')
const displayCitat=document.getElementById('displayCitate')
var citate=[
    '„Eşecul nu este căderea, ci actul de a nu te ridica.”  Mary Pickford',
    '„Dacă vrei să fii un învingător în viață, trebuie să depășești constant cea mai bună variantă a ta.”  Robert Kiyosaki',
    '„Învingătorii nu renunță niciodată, iar cei care renunță nu câștigă niciodată.”  Vince Lombardi',
    '„Toate visele noastre pot deveni realitate dacă avem curajul de a le urma.”  Walt Disney',
    '„Nu invidiez pe nimeni, deoarece îmi voi trăi viața așa cum vreau s-o trăiesc.” Ryan Lochte',
    ' „Nu îți vei schimba niciodată viața până când nu schimbi ceva ce faci în fiecare zi.”  Mike Murdock',
    '„Cea mai mare aventură este să-ți trăiești viața visurilor tale.”  Oprah Winfrey',
    '„Dacă nu ne schimbăm, nu creștem. Dacă nu creștem, nu trăim cu adevărat.”  Gail Sheehy',
    '„Succesul este o călătorie, nu o destinație. Acțiunea este deseori mai importantă decât finalul.”  Arthur Ashe',
    '„Prea mulți dintre noi nu ne trăim visurile pentru că ne trăim temerile.”  Les Brown'
]

generatorButton.addEventListener('click',(e)=>{
    
    getCitat()

})

function getCitat(){
    let randomNumber= Math.floor(Math.random()*citate.length)+1
    displayCitat.innerHTML=citate[randomNumber]
}
