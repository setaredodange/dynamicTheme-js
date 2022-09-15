const colorsBtns = document.querySelectorAll('.btn')

colorsBtns.forEach(function (colorBtn){
    // console.log(colorBtn)


    colorBtn.addEventListener('click', function(event){
        // console.log(event.target);
        //   console.log(event.target.dataset.color);

        let btnColor = event.target.dataset.color
        // console.log(btnColor)

        document.documentElement.style.setProperty('--theme-color', btnColor )

    })
})