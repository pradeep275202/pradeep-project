document.addEventListener('DOMContentLoaded', function() {
          // Counter for dynamically added fields
          let detailCount = 1;
        
          // Function to add a new set of user details fields
          function addDetail() {
            detailCount++;
        
            // Create div container for new detail fields
            const detailDiv = document.createElement('div');
            detailDiv.classList.add('userDetail');
        
            // Create name input field
            const nameLabel = document.createElement('label');
            nameLabel.setAttribute('for', 'name' + detailCount);
            nameLabel.textContent = 'Name:';
            detailDiv.appendChild(nameLabel);
        
            const nameInput = document.createElement('input');
            nameInput.setAttribute('type', 'text');
            nameInput.setAttribute('id', 'name' + detailCount);
            nameInput.setAttribute('name', 'name' + detailCount);
            nameInput.setAttribute('required', '');
            detailDiv.appendChild(nameInput);
        
            // Create email input field
            const emailLabel = document.createElement('label');
            emailLabel.setAttribute('for', 'email' + detailCount);
            emailLabel.textContent = 'Email:';
            detailDiv.appendChild(emailLabel);
        
            const emailInput = document.createElement('input');
            emailInput.setAttribute('type', 'email');
            emailInput.setAttribute('id', 'email' + detailCount);
            emailInput.setAttribute('name', 'email' + detailCount);
            emailInput.setAttribute('required', '');
            detailDiv.appendChild(emailInput);
        
            // Append the new detail fields to the userDetails container
            document.getElementById('userDetails').appendChild(detailDiv);
          }
        
          // Add event listener to the "Add Another Detail" button
          document.getElementById('addDetailBtn').addEventListener('click', function() {
            addDetail();
          });
        
          // Optional: Prevent form submission for demonstration purposes
          document.getElementById('userForm').addEventListener('submit', function(event) {
            event.preventDefault();
            console.log('Form submitted.');
            // Here you would typically handle form submission, e.g., send data to a server.
          });
        });
        