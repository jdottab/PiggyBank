const goalBox = document.querySelector('.set-goal'); //selects the page that allows user to set goal
            const goal = document.querySelector('.goal-amnt'); //selects the numeric goal amount at bottom of page
            const numberpad = document.querySelector('.numberpad-display'); //selects the area where the keys pressed on the numperpad appear
            const keys = document.querySelectorAll('.keys'); //selects all keys of the number pad
            const navitem = document.querySelectorAll('.nav'); //selects all navigation items
            const page = document.querySelectorAll('.page'); //selects all general pages
            let temp = ''; //temporary string that holds the id of the nav item

            //function that closes out the goal page and returns to the main page
            function CloseOut(){
                goalBox.style.display = 'none';
            }

            //for loop that adds an event to each key on the numberpad that when clicked, the keye's content will appear on the display
            for(let i = 0; i < keys.length; i++){
                keys[i].addEventListener('click', function(){numberpad.innerHTML += this.innerHTML;});
            }
            //displays numbers clicked by user and sets goal to that number
            function ConfirmGoal(){
                goal.innerHTML = numberpad.innerHTML;
                numberpad.innerHTML = '';
                CloseOut();
            }
            //display page based on nav item
            for(let i = 0; i < navitem.length; i++){
                navitem[i].addEventListener('click', function(){
                    temp = this.id;
                    for(let j = 0; j < page.length; j++){
                        if(temp == page[j].id){
                            page[j].style.display = 'block';
                        }
                    }
                })
            }
            /*DEPOSIT*/
            const custombtn = document.querySelector('.custom'); //selects the button that allows the user to input a custom amount
            const customprice = document.querySelector('.custom-price')//selects the number pad where the user can inout a custom amount
            const price = document.querySelectorAll('.num'); //selects buttons with numerical values in the deposit page
            const total = document.querySelector('.amount'); //selects the total number displayed at the top of the screen
            const deposit = document.querySelector('.deposit');//selects the page where the user can choose amount to deposit
            const custkeys = document.querySelectorAll('.custom-keys'); //numerical keys in the keypad specific to the custom button
            const custpad = document.querySelector('.custom-numpad-display');//display specific to the custom button
            const coin = document.querySelector('.coin');//selects the coin image

            //function that closes out the deposit page and clears the
            //keypad display, and plays the coin animation
            function CloseOutDeposit(){
                custpad.innerHTML='';
                deposit.style.display = 'none';
                customprice.style.display = 'none';
                coin.style.animation = 'fade-and-slide 1000ms linear 3';
            }
            let totalStr = ''; //holds the total amount as a string so it can be converted to an int
            let thisStr = ''; //holds the custom amount in the numberpad display as a string so it can be converted to an int
            //adds an event to each numerical amount that when clicked
            //it will add that amount the the total amount and close out
            //the deposit screen
             price.forEach(e =>{
                e.addEventListener('click', function(){
                    totalStr = total.innerHTML;
                    thisStr = this.innerHTML;
                    total.innerHTML = parseInt(totalStr) + parseInt(thisStr);
                    CloseOutDeposit();
                })
             })
             //adds an event to each key in the custom numberpad so that when
             //when clicked is content will appear on the display
            custkeys.forEach(e =>{
                e.addEventListener('click', function(){
                    custpad.innerHTML += this.innerHTML;
                })
            })
            //reveals the numberpad when the 'custom' button is clicked
            custombtn.addEventListener('click', function(){
                customprice.style.display = 'block';
            })
            let custompad = ''; //stores the value on the display as a string so it can be converted to an int
            //function that converts the value on the display pad and the total to an int
            //assigns the sum to the total and then closes the deposit page
            function ConfirmCustom(){
                custompad = custpad.innerHTML;
                totalStr = total.innerHTML;
                total.innerHTML = parseInt(totalStr) + parseInt(custompad);
                CloseOutDeposit();
            }

            /*WITHDRAW*/
            const withdraw = document.querySelector('.withdraw'); //selects the withdraw page
            const wdrwKeys = document.querySelectorAll('.wdrw-keys'); //selects all the keys in the number pad specific to the withdraw page
            const wnp = document.querySelector('.withdraw-numpad-display'); //selects the area where the numbers display
            //adds an event to each key that when clicked its content will appear
            //on the display
            wdrwKeys.forEach(e =>{
                e.addEventListener('click', function(){
                    wnp.innerHTML += this.innerHTML;
                })
            })
            //a function that clears out the display area and
            //closes out the withdraw page 
            function CloseOutWD(){
                wnp.innerHTML = '';
                withdraw.style.display = 'none';
            }
            
            let wEntry = ''; //strores the value in the display pad as a string so it can be converted to an integer
            //function that converts the display value and the total to ints
            //assigns the sum to the total inner HTML and closes out the withdraw page
            function ConfirmWD(){
                wEntry = wnp.innerHTML;
                totalStr = total.innerHTML;
                total.innerHTML = parseInt(totalStr) - parseInt(wEntry);
                CloseOutWD();
            }
