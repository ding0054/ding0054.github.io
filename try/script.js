const $emojis = document.getElementById('emojis')
const emojis = []

for(let i = 127745 ; i < 127830 ; i++) {
    emojis.push(`
        
         <p id="emojis" class="flex">
           <span class="emoji">&#${i}</span><br>
            <code class="code">${i}</code> 
        </p>`
    )
}
$emojis.innerHTML += emojis.join('') 