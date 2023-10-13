let domainList = document.getElementById('ulid');

const pronouns = ['The', 'our','my'];
const adj = ['fenomenal', 'amazing','greatest']
const names = ['mendez','blackcat','chocolatemc']

const domains =[]
const generate = (pronombre, adjetivo, nombre)=> 'www' + pronombre + adjetivo + nombre +'.com';


pronouns.forEach((prono)=>{
    adj.forEach((adjectives)=>{
        names.forEach((nombres)=>{
            domains.push(generate(prono,adjectives,nombres))
        })
    })
}
)

domains.forEach((domain) => {
    const li = document.createElement('li');
    li.textContent = domain;
    domainList.appendChild(li);
});


