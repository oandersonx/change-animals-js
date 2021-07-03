function alterar(nome_da_imagem, nome_do_animal){
    document.querySelector('.animals').setAttribute('src', "images/"+nome_da_imagem);
    document.querySelector('.animals').setAttribute('nome_animal', nome_do_animal);


}


function mostrarNomeAnimal(){
    let animal = document.querySelector('.animals').getAttribute('nome_animal')
    alert("O nome do animal é: "+animal)
}