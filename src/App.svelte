<script>
    console.log("ok who find this message!!!")
    let value = "0"
    let row1 = [1,2,3];
    let row2 = [4,5,6];
    let row3 = [7,8,9];
    let wholeval1 = 0.0;
    let wholeval2 = 0.0;
    let enterval1 = false;
    let enterval2 = false;
    let signall = "+"
    function onclicked(number){
        if(value === "0") value="";
        if(value.length === 10) return;
        value += number;
    }
    function reset(){
        wholeval1 = 0;
        wholeval2 = 0;
        enterval1 = false;
        enterval2 = false;

    }
    function clickedAC(){
        value = "0";

    }
    function clickedDEL(){
        value = value.substring(0, value.length - 1);
    }
    function clickEQUALS(){
        if(signall === "+"){
            value = wholeval1 + parseInt(value);
        }else if(signall === "-"){
            value = wholeval1 - parseInt(value);
        }else if(signall === "*"){
            value = wholeval1 * parseInt(value);
        }else if(signall === "/"){
            value = wholeval1 / parseInt(value);
        }
        reset();
        
    }
    function clickPRECETAGE(){
        value = value / 100;
    }
    function clickedSIGN(sign){
        if(enterval1 === true){
            signall = sign;
            clickEQUALS();
        }else{
            //the first value to wholevar1
            signall = sign;
            enterval1 = true;
            wholeval1 = parseInt(value);
            clickedAC()

        };

    }
</script>
<main>
    <input readonly type="textfield" class="screen" name="screen" bind:value={value}>
    <br>
    <table>
        <tr>
            <td><button on:click={() => clickedAC()}>AC</button></td>
            <td><button on:click={() => clickedDEL()}>del</button></td>
            <td><button on:click={() => clickPRECETAGE()}>%</button></td>
            <td><button on:click={() => clickedSIGN("/")}>÷</button></td>
        </tr>

        <tr>
            {#each row3 as rows3}
            <td>
            <button on:click={() => onclicked(rows3)} >{rows3}</button>
            </td>
            {/each}
            <button on:click={() => clickedSIGN("*")}>×</button>

        </tr>

        <tr>
            {#each row2 as rows2}
            <td>
            <button on:click={() => onclicked(rows2)} >{rows2}</button>
            </td>
            {/each}
            <td><button on:click={() => clickedSIGN("-")}>-</button></td>
        </tr>

        <tr>
            {#each row1 as rows1}
            <td>
            <button on:click={() => onclicked(rows1)} >{rows1}</button>
            </td>
            {/each}
            <td><button on:click={() => clickedSIGN("+")}>+</button></td>
        </tr>
        <tr>
            <td><button on:click={() => onclicked("0")}>0</button></td>
            <td><button on:click={() => onclicked(".")}>.</button></td>
            <td colspan="2"><button on:click={() => clickEQUALS()}>=</button></td>
        </tr>
    </table>
</main>
<style>
.screen{
    resize: none;
    font-size: 10vw;
    width: calc(100vw * 94.5/100); 
    height: calc(100vw/5);
    background-color: #380154;
    color: powderblue;
    border: none;
    font-family: 'Space Mono', monospace;
    margin: 1vw 3vw;
}
button{
    height: calc(100%);
    width: calc(100vw/4 - 3vw);
    font-family: 'Space Mono', monospace;
    font-size: 10vw;
    background-color: #380154;
    color: powderblue;
    border: 3px dotted tomato;
    text-align: center;
}
button:hover{
    border-style:groove;
    text-shadow: #FC0 1px 0 15px;
    box-shadow: #FC0 1px 0 10px;
}
td,tr,table{
    margin: 0.1vw 3vw 1vw 3vw;
}
</style>
