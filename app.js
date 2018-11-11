//STUCK BC I NEED TO FIGURE OUT HOW TO FIX '1 LINE OF CODE' INSTEAD OF PLURAL - MAYBE ANOTHER LOOP???
const list = ['John', 'James', 'Kim', 'Carrie', 'Liz']
for (var i = 0; i < list.length; i++) {
      console.log(list[i])

      for (j = 99; j > 0 ; j--) {
        console.log([j] + ' lines of code on the wall, ' + [j] + ' lines of code. One fell off and made a fall ')    
        if (j<2) {
            console.log ([j] + ' line of code remains on the wall!'+ [j] + ' line of code. One fell off and made a fall ')
            console.log ([j-1] + ' line of code remains on the wall!'+ [j-1] + ' lines of code remain! ')
        } else {
            console.log ([j-1] + ' lines of code remain on the wall!')
       
        }
        }
    } 
      


    
