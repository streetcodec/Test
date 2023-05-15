const modelViewerVariants = document.querySelector("model-viewer#var");
        const select = document.querySelector('#variant');
        modelViewerVariants.addEventListener('load', () => {

          const names = modelViewerVariants.availableVariants;
          for (const name of names) // creates a list (dropdown) with options, stored in glb. 
          {
            const option = document.createElement('option');
            option.value = name;
            option.textContent = name;
            
            select.appendChild(option);
          ;
          }
          // Adds a default option.
          const option = document.createElement('option');
            option.value = 'default';
            option.textContent = 'Default';
            select.appendChild(option);
        });
        
        // actually changes color, and scale.
        select.addEventListener('input', (event) => {
          
          modelViewerVariants.variantName = event.target.value === 'default' ? null : event.target.value;
          
          switch(modelViewerVariants.variantName) // using to scale the images to original size, by relatively comparing it to default image, of 28*21 inches square.  
          { 
            case "Hamuman" : updateScaleVar(1.36017 , 1.33);
                                        break;
            case "Animals Gond" : updateScaleVar(0.31,0.423);
                                               break;
            case "Dancing Krishna With Cows" : updateScaleVar(2.811,2.418);
                                                                    break;
            case "White" : break;
            case "Black" : break;
            default : updateScaleVar(1.27,1.27);
          }
          
            
          
          console.log(modelViewerVariants.variantName);
        });

       //for scale
       function updateScaleVar( p , q )
       {
        modelViewerVariants.scale = `${p} ${q} ${1}`; 

       }