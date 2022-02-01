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
            <td><button on:click={() => clickEQUALS()} colspan="2">=</button></td>
        </tr>
    </table>
</main>
<style>
.screen{
    resize: none;
    font-size: 10vw;
    width: calc(100vw * 94.5/100); 
    height: calc(100vw/5);
    margin-left: 1vw;
    margin-right: 1vw;
    margin-top: 1vw;
    background-color: #380154;
    color: powderblue;
    border: none;
}
button{
    height: calc(100vw/6 - 3vw);
    margin: 1vw 1vw 1vw 1vw;
    width: calc(100vw/4 - 3vw);
    font-family: 'Space Mono', monospace;
    font-size: 10vw;
    background-color: #380154;
    color: powderblue;
    border-style: dotted;
    border-color: tomato;
}
</style>
