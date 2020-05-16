function binToDec(bin) {
    //Não pode usar arrays
    //Deve-se usar uma unica função matemática[usei o a potênciação com **]
    function convert(bin) {
        let binSize = bin.length
        let dec = 0
        for(i=binSize-1; i>=0; i--) {
            dec += (2**i)*bin[binSize-i-1]
        }
        return dec
    }

    function isBin(bin) {
        for(i=bin.length-1;i>=0;i--) {
            if(bin[i] != 0 && bin[i] != 1) {
                console.log('[isBin] Não contem apenas 0 e 1')
                return false
            }
        }
        return true
    }

    console.log('[binToDec] input: '+bin)
    if(isBin(bin)) {
        return(convert(bin))
    } else {
        return(false)
    }
}