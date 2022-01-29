<script>
    let row1 = [1,2,3];
    let row2 = [4,5,6];
    let row3 = [7,8,9];
    function onclicked(test){
        console.log(test)
    }
</script>

<style>
.screen{
    resize: none;
    font-size: 10vw;
    width: 70vw;
}
button{
    height: calc(70vw/3);
    width: calc(70vw/3);
    font-size: 15vw;
}
</style>
<main>
    <input type="textfield" class="screen" name="screen">
    <br>
    <table>
        <tr>
            {#each row3 as rows3}
                <td><button on:click={() => onclicked(rows3)} >{rows3}</button></td>

            {/each}
        </tr>
        <tr>
            {#each row2 as rows2}
                <td><button on:click={() => onclicked(rows2)} >{rows2}</button></td>
            {/each}
        </tr>
        <tr>
            {#each row1 as rows1}
                <td><button on:click={() => onclicked(rows1)} >{rows1}</button></td>
            {/each}
        </tr>
    </table>
</main>
