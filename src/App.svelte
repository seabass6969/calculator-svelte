<script>
    let value = "0"
    let row1 = [1,2,3];
    let row2 = [4,5,6];
    let row3 = [7,8,9];
    let wholeval1 = 0;
    let wholeval2 = 0;
    let enterval1 = false;
    let enterval2 = false;
    let signall = "+"
    function onclicked(number){
        if(value === "0") value="";
        if(value.length === 10) return;
        value += number;
        console.log(value);
    }
    function clickedAC(){
        value = "0";
    }
    function clickedDEL(){
        value = value.substring(0, value.length - 1);
    }
    function clickEQUALS(){
        if(signall === "+"){
            console.log(parseInt(value) + wholeval1);
        }
        console.log();
    }
    function clickPRECETAGE(){

    }
    function clickedSIGN(sign){
        if(enterval1 === true){
            enterval2 = true;
        }else{
            //the first value to wholevar1
            signall = sign;
            enterval1 = true;
            wholeval1 = parseInt(value);
            console.log(wholeval1);
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
            <td><button on:click={() => onclicked("")}>÷</button></td>
        </tr>

        <tr>
            {#each row3 as rows3}
            <td>
            <button on:click={() => onclicked(rows3)} >{rows3}</button>
            </td>
            {/each}
            <button on:click={() => onclicked("×")}>×</button>

        </tr>

        <tr>
            {#each row2 as rows2}
            <td>
            <button on:click={() => onclicked(rows2)} >{rows2}</button>
            </td>
            {/each}
            <td><button on:click={() => onclicked("-")}>-</button></td>
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
            <td><button on:click={() => onclicked("0")} colspan="2">0</button></td>
            <td><button on:click={() => onclicked(".")}>.</button></td>
            <td><button on:click={() => clickEQUALS()}>=</button></td>
        </tr>
    </table>
</main>
<style>
.screen{
    resize: none;
    font-size: 10vw;
    width: 100%;
    height: calc(100vw/5);
    margin-left: 1vw;
    margin-right: 1vw;
    margin-top: 1vw;
}
button{
    height: calc(100vw/6 - 3vw);
    margin: 1vw 1vw 1vw 1vw;
    width: calc(100vw/4 - 3vw);
    font-size: 10vw;
}
</style>
