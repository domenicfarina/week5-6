//Loot Chance
           
                           var items = [
                               {
                                   name: "Small potion",
                                   chance: 0.30,
                               },
                               {
                                   name: "Medium potion",
                                   chance: 0.12,
                               },
                               {
                                   name: "Large potion",
                                   chance: 0.03,
                               }
                           ]
            function testDropSystem(){
                               // find a random number between 0 and 1 
                               // find all of the items that can be found by comparing the random number to their "chance"
                               // put all possible items into a new array
                               // select a random item from that array of possibilites 
                   
               var dropRandomNumber = Math.random();
               console.log("Testing here", dropRandomNumber);
   
               var findableItems = [];
               items.forEach(function(item){
               console.log("In a loop!", item);
               if(item.chance > dropRandomNumber) {
                console.log("Item can be found!");
                findableItems.push(item);
                 }
                });
                   //at this point,findable items should be populated with all of the items that can be found
                    //now we just need to grab one of them
                if(findableItems.length ==0){
               console.log("No items dropped");
                }else{
               var randomItemNumber = Math.floor(Math.random() * items.length);
               console.log(items[randomItemNumber]);
                }
               }
               //Outputting Messages
                //get reference to div elemet
                 //create function that accepts a message variable
                 //prepend message, wrapped in a <p>, to div's inner html property
               var outputDiv = document.getElementById("output");
                   function createOutput(message){
                   outputDiv.innerHTML = "<p>" + message + "</p>" + outputDiv.innerHTML;
                           }            