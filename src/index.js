module.exports = function check(str, bracketsConfig) {
    var etalon = null;
    var strit = str.split('');
    var result = checkBrackets();
    function checkBrackets(){
        var checkA = 0;
        var checkB = 0;
        for( var i = 0; i < strit.length; i++){
            checkA = strit[i];
            checkB = strit[i + 1];
            for( var k=0; k < bracketsConfig.length; k++){
                if(checkA == bracketsConfig[k][0] && checkB == bracketsConfig[k][1]){
                    strit.splice(i,2);
                    checkBrackets();
                }
            }
        }
        if(strit.length == 0){
                return true;
            }else if(etalon == strit){
                return false;
            }else{ 
                etalon = strit;
                return checkBrackets();
            }
    }
    
   return result;
}
