const x = document.querySelector('#x');
        const y = document.querySelector('#y');
        const z = document.querySelector('#z');

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
            
          }
          // Adds a default option. (reverts back to original materials with which the objects were initialized in Blender.)
          const option = document.createElement('option');
            option.value = 'default';
            option.textContent = 'Default';
            select.appendChild(option);
        });
        
        // actually changes color.
        select.addEventListener('input', (event) => {
          modelViewerVariants.variantName = event.target.value === 'default' ? null : event.target.value;
        });

       //for scale
        const updateScale = () => {
       modelViewerVariants.scale = `${x.value} ${y.value} ${z.value}`;
        };
       x.addEventListener('input', () => {
         updateScale();
       });
      y.addEventListener('input', () => {
      updateScale();
        });
      z.addEventListener('input', () => {
      updateScale();
          });