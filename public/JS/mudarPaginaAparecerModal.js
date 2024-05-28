let paginaAtual = 1;

function avancarPasso(){  

     const passoAtual = `passo${paginaAtual}`;
     const stylePasso = document.getElementById(`${passoAtual}`)

     for (let passoPagina = 1; passoPagina <= paginaAtual; passoPagina++) {
        const proximoPasso = `passo${paginaAtual+1}`
        const styleProximoPasso = document.getElementById(`${proximoPasso}`)
        

        if(stylePasso)
        {
            stylePasso.style.display = 'none';
        } 
        if((paginaAtual + 1) > paginaAtual)
        {
            styleProximoPasso.style.display = 'flex';
            paginaAtual++
            break
        }

        
    }
}

function retrocederPasso(){

     const passoAtual = `passo${paginaAtual}`;
     const stylePasso = document.getElementById(`${passoAtual}`)

     for (let passoPagina = paginaAtual; passoPagina >= 1; passoPagina--) {
        const voltarPasso = `passo${paginaAtual-1}`
        const styleAnteriorPasso = document.getElementById(`${voltarPasso}`)
        

        if(stylePasso)
        {
            stylePasso.style.display = 'none';
        } 
        if((paginaAtual - 1) < paginaAtual)
        {
            styleAnteriorPasso.style.display = 'flex';
            paginaAtual--
            break
        }

        
    }
}


function aparecerProximaPagina(numeroModal){
         const  btnModal = document.querySelector(`.botaoDuvida${paginaAtual}`);


            
                const setasPasso = document.querySelector(`.contentProximoPasso${paginaAtual}`)
                const modal = document.querySelector(`.modal${paginaAtual}`)
                const  btnTerminei = document.querySelector(`.containerBtn`);
                
                
            if(paginaAtual < (paginaAtual + 1))
            {
            
            btnModal.style.display = 'none';
            setasPasso.style.display = 'flex';
           

        } else{
        return false;}
        

    }

function verModalDuvida(numeroModal) {
        switchModal(numeroModal);
        if( paginaAtual < (paginaAtual + 1)){
            aparecerProximaPagina(numeroModal);
        }
       
 }

function switchModal(){
        const modal = document.querySelector(`.modal${paginaAtual}`)
        const styleAtual = modal.style.display
        if(styleAtual == 'block'){
            modal.style.display = 'none'
         }
         else {
             modal.style.display = 'block'
         }}

function tirarModal(numeroModal) {
       
                const modal = document.querySelector(`.modal${paginaAtual}`);
                const styleModal = modal.style.display
                if (styleModal == 'block' ) {
                    switchModal();
                }
}
