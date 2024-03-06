function redirecionar(){
    const selectElement = document.getElementById('sites');
    const selectedValue = selectElement.value;

    if (selectedValue){
        window.open(selectedValue, '_blank');
    }
}