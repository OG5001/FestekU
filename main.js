let adatok = [];

async function intit() {
    
    const response = await fetch("./colors.json")
    adatok = await response.json();
    const F = document.getElementById('f').style.display = "none"
    setTimeout(() => {
        megjelenit();
        const Udv = document.getElementById('udv').style.display = "none"
        const F = document.getElementById('f').style.display = "block"
    }, 3000)

    function megjelenit()
    {
        for (const adat of adatok)
        {
            const bod = document.getElementById('b')
            const d = document.createElement('div');
            d.style.background = adat.cssValue;
            d.textContent = adat.name;
            d.style.width = "300px"
            d.style.height = "200px"
            d.style.alignContent = "center"            
            d.style.textAlign = "center"
            d.style.margin = "5px"
            bod.appendChild(d)

            if(adat.textColor == "light")
            {
                d.style.color = "white";
            }
        }
    };
}
intit();
