const scriptURL = 'https://script.google.com/macros/s/AKfycbxAqdkBEzMZIYIPfsY-1ky7ddL_qWAtKexx9alZMKG82ve84k1nfGzG1uaqTg8uKXnFrg/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Contacting..! We Will Come Back To You Soon."))
                .catch(error => console.error('Error!', error.message))
            })