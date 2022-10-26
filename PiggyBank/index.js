const goalBox = document.querySelector('.set-goal');
            const goal = document.querySelector('.goal-amnt');
            const numberpad = document.querySelector('.numberpad-display');
            const keys = document.querySelectorAll('.keys');
            const navitem = document.querySelectorAll('.nav');
            const page = document.querySelectorAll('.page');
            let temp = '';
            function CloseOut(){
                goalBox.style.display = 'none';
            }
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
            const custombtn = document.querySelector('.custom');
            const customprice = document.querySelector('.custom-price')
            const price = document.querySelectorAll('.num')
            const total = document.querySelector('.amount');
            const deposit = document.querySelector('.deposit');
            const custkeys = document.querySelectorAll('.custom-keys');
            const custpad = document.querySelector('.custom-numpad-display');
            function CloseOutDeposit(){
                custpad.innerHTML='';
                deposit.style.display = 'none';
                customprice.style.display = 'none';
            }
            let totalStr = '';
            let thisStr = '';
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
            custkeys.forEach(e =>{
                e.addEventListener('click', function(){
                    custpad.innerHTML += this.innerHTML;
                })
            })
            custombtn.addEventListener('click', function(){
                customprice.style.display = 'block';
            })
            let custompad = '';
            function ConfirmCustom(){
                custompad = custpad.innerHTML;
                totalStr = total.innerHTML;
                total.innerHTML = parseInt(totalStr) + parseInt(custompad);
                CloseOutDeposit();
            }

            /*WITHDRAW*/
            const withdraw = document.querySelector('.withdraw');
            const wdrwKeys = document.querySelectorAll('.wdrw-keys');
            const wnp = document.querySelector('.withdraw-numpad-display');

            wdrwKeys.forEach(e =>{
                e.addEventListener('click', function(){
                    wnp.innerHTML += this.innerHTML;
                })
            })

            function CloseOutWD(){
                wnp.innerHTML = '';
                withdraw.style.display = 'none';
            }

            let wEntry = '';
            function ConfirmWD(){
                wEntry = wnp.innerHTML;
                totalStr = total.innerHTML;
                total.innerHTML = parseInt(totalStr) - parseInt(wEntry);
                CloseOutWD();
            }